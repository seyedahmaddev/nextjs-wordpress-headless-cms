import { getPostBySlug, getAllPostSlugs } from "@/lib/wordpress";
import { generateContentMetadata, stripHtml } from "@/lib/metadata";
import Image from "next/image";

import { Section, Container, Article, Prose } from "@/components/craft";
import { badgeVariants } from "@/components/ui/badge";
import { cn } from "@/lib/utils";

import Link from "next/link";
import { notFound } from "next/navigation";
import type { Metadata } from "next";

export async function generateStaticParams() {
  return await getAllPostSlugs();
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string; }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const decodedSlug = decodeURIComponent(slug);
  const post = await getPostBySlug(decodedSlug);

  if (!post) {
    return {};
  }

  return generateContentMetadata({
    title: post.title.rendered,
    description: stripHtml(post.excerpt.rendered),
    slug: post.slug,
    // basePath: "/",
  });
}

export default async function Page({
  params,
}: {
  params: Promise<{ slug: string; }>;
}) {
  const { slug } = await params;

  // اسلاگ کدگذاری شده رو به حالت اولیه (فارسی) برمی‌گردونیم
  const decodedSlug = decodeURIComponent(slug);
  const post = await getPostBySlug(decodedSlug);

  if (!post) {
    notFound();
  }

  const author = post._embedded?.author?.[0];
  const featuredMedia = post._embedded?.["wp:featuredmedia"]?.[0];
  const category = post._embedded?.["wp:term"]?.[0]?.[0];
  const date = new Date(post.date).toLocaleDateString("fa-IR", {
    month: "long",
    day: "numeric",
    year: "numeric",
  });

  return (
    <Section>
      <Container>
        <Prose>
          <h1>
            <span
              dangerouslySetInnerHTML={{ __html: post.title.rendered }}
            ></span>
          </h1>
          <div className="flex justify-between items-center gap-4 text-sm mb-4">
            <h5>
              انتشار در {date}
              {author?.name && (
                <>
                  {" "}توسط{" "}
                  <span>
                    <Link href={`/posts/?author=${author.id}`}>{author.name}</Link>
                  </span>
                </>
              )}
            </h5>

            {category && (
              <Link
                href={`/posts/?category=${category.id}`}
                className={cn(
                  badgeVariants({ variant: "outline" }),
                  "no-underline!"
                )}
              >
                {category.name}
              </Link>
            )}
          </div>
          {featuredMedia?.source_url && (
            <div className="h-96 my-12 md:h-[500px] overflow-hidden flex items-center justify-center border rounded-lg bg-accent/25">
              {/* eslint-disable-next-line */}
              <Image
                className="w-full h-full object-cover"
                src={featuredMedia.source_url}
                alt={post.title.rendered}
                width={1200}
                height={500}
                priority
              />
            </div>
          )}
        </Prose>

        <Article dangerouslySetInnerHTML={{ __html: post.content.rendered }} />
      </Container>
    </Section>
  );
}
