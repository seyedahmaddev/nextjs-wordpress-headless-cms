// components/posts/BlogPreview.tsx
import { getRecentPosts } from "@/lib/wordpress";
import { PostCard } from "@/components/posts/post-card"
import Link from "next/link";
import Image from "next/image";

// تصویر شاخص (می‌تونی از وردپرس یا استاتیک استفاده کنی)
// من یه عکس پیش‌فرض از unsplash گذاشتم، اما می‌تونی از featured media اولین پست استفاده کنی
const defaultImage = "https://images.unsplash.com/photo-1499750310107-5fef28a66643?w=800&h=600&fit=crop";

export default async function BlogPreview() {
  // دریافت ۳ پست آخر (یا هر تعداد که می‌خوای)
  const posts = await getRecentPosts();
  const latestPosts = posts.slice(0, 3);

  // اگر پستی وجود نداشت
  if (latestPosts.length === 0) {
    return (
      <div className="bg-background py-16 text-center text-muted-foreground">
        هنوز پستی منتشر نشده است.
      </div>
    );
  }

  // برای بخش سمت چپ، از اولین پست استفاده می‌کنیم
  const featuredPost = latestPosts[0];
  const featuredImage = featuredPost._embedded?.["wp:featuredmedia"]?.[0]?.source_url || defaultImage;

  return (
    <div className="bg-background py-16 md:py-24">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto flex max-w-2xl flex-col items-end justify-between gap-16 lg:mx-0 lg:max-w-none lg:flex-row">
          
          {/* بخش چپ: توضیحات + تصویر شاخص */}
          <div className="w-full lg:max-w-lg lg:flex-auto">
            <h2 className="text-3xl font-semibold tracking-tight text-foreground sm:text-4xl">
              آخرین مطالب وبلاگ
            </h2>
            <p className="mt-6 text-lg text-muted-foreground">
              جدیدترین مقالات و آموزش‌های حوزه برنامه‌نویسی، طراحی وب و فناوری‌های روز رو اینجا بخونید.
            </p>
            
            {/* تصویر شاخص (از اولین پست) */}
            <div className="mt-8 overflow-hidden rounded-2xl border bg-muted/30">
              <Image
                src={featuredImage}
                alt={featuredPost.title?.rendered || "تصویر شاخص"}
                width={800}
                height={600}
                className="aspect-[4/3] w-full object-cover"
              />
            </div>
          </div>

          {/* بخش راست: لیست پست‌ها */}
          <div className="w-full lg:max-w-xl lg:flex-auto">
            <h3 className="sr-only">آخرین پست‌ها</h3>
            <ul className="-my-8 divide-y divide-border">
              {latestPosts.map((post) => {
                const date = new Date(post.date).toLocaleDateString("fa-IR", {
                  year: "numeric",
                  month: "long",
                  day: "numeric",
                });
                const category = post._embedded?.["wp:term"]?.[0]?.[0]?.name || "عمومی";

                return (
                  <li key={post.id} className="py-8">
                    <dl className="relative flex flex-wrap gap-x-3">
                      <dt className="sr-only">عنوان</dt>
                      <dd className="w-full flex-none text-lg font-semibold tracking-tight text-foreground">
                        <Link href={`/posts/${post.slug}`} className="hover:text-primary transition-colors">
                          <span dangerouslySetInnerHTML={{ __html: post.title?.rendered || "بدون عنوان" }} />
                          <span aria-hidden="true" className="absolute inset-0" />
                        </Link>
                      </dd>
                      
                      <dt className="sr-only">خلاصه</dt>
                      <dd className="mt-2 w-full flex-none text-base text-muted-foreground line-clamp-2">
                        {post.excerpt?.rendered
                          ? post.excerpt.rendered.replace(/<[^>]*>/g, "").slice(0, 120) + "..."
                          : "مطالعه این مقاله رو از دست ندهید."}
                      </dd>
                      
                      <dt className="sr-only">دسته‌بندی</dt>
                      <dd className="mt-4 text-sm font-medium text-primary">
                        {category}
                      </dd>
                      
                      <dt className="sr-only">تاریخ</dt>
                      <dd className="mt-4 flex items-center gap-x-3 text-sm text-muted-foreground">
                        <svg viewBox="0 0 2 2" aria-hidden="true" className="size-0.5 flex-none fill-muted-foreground">
                          <circle r={1} cx={1} cy={1} />
                        </svg>
                        {date}
                      </dd>
                    </dl>
                  </li>
                );
              })}
            </ul>
            
            {/* لینک مشاهده همه */}
            <div className="mt-8 flex border-t border-border pt-8">
              <Link
                href="/blog"
                className="text-sm font-semibold text-primary hover:text-primary/80 transition-colors"
              >
                مشاهده همه مطالب <span aria-hidden="true">&larr;</span>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}