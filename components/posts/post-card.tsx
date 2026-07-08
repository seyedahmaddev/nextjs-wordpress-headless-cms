import Image from "next/image";
import Link from "next/link";
import { Post } from "@/lib/wordpress.d";
import { cn } from "@/lib/utils";
import { truncateHtml } from "@/lib/metadata";

// تابع کمکی
function getProxyImageUrl(url: string | undefined): string {
  if (!url) return '';
  if (url.startsWith('/api/image')) return url;
  return `/api/image?url=${encodeURIComponent(url)}`;
}

export function PostCard({ post }: { post: Post }) {
  const media = post._embedded?.["wp:featuredmedia"]?.[0] ?? null;
  const category = post._embedded?.["wp:term"]?.[0]?.[0] ?? null;
  const date = new Date(post.date).toLocaleDateString("en-US", {
    month: "long",
    day: "numeric",
    year: "numeric",
  });

  return (
    <Link
      href={`/posts/${post.slug}`}
      className={cn(
        "border p-4 bg-accent/30 rounded-lg group flex justify-between flex-col not-prose gap-8",
        "hover:bg-accent/75 transition-all"
      )}
    >
      <div className="flex flex-col gap-4">
        <div className="h-48 w-full overflow-hidden relative rounded-md border flex items-center justify-center bg-muted">
          {media?.source_url ? (
            <Image
              className="h-full w-full object-cover"
              src={getProxyImageUrl(media.source_url)}
              alt={post.title?.rendered || "Post thumbnail"}
              width={400}
              height={200}
              sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
              priority={false}
              unoptimized={process.env.NODE_ENV === 'development'}
            />
          ) : (
            <div className="flex items-center justify-center w-full h-full text-muted-foreground">
              🖼️ No image available
            </div>
          )}
        </div>
        <div
          dangerouslySetInnerHTML={{
            __html: post.title?.rendered || "Untitled Post",
          }}
          className="text-xl text-primary font-medium group-hover:underline decoration-muted-foreground underline-offset-4 decoration-dotted transition-all"
        />
        <div className="text-sm line-clamp-3">
          {post.excerpt?.rendered
            ? truncateHtml(post.excerpt.rendered, 12)
            : "No excerpt available"}
        </div>
      </div>

      <div className="flex flex-col gap-4">
        <hr />
        <div className="flex justify-between items-center text-xs text-muted-foreground">
          <span>{category?.name || "Uncategorized"}</span>
          <time dateTime={post.date}>{date}</time>
        </div>
      </div>
    </Link>
  );
}