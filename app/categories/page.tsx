import { getAllCategories } from "@/lib/wordpress";
import { ArchiveList } from "@/components/archive-list";
import type { Category } from "@/lib/wordpress.d";
import type { Metadata } from "next";

export const revalidate = 3600;

export const metadata: Metadata = {
  title: "همه موضوعات",
  description: "موضوعات وبلاگ طراحی سایت سیداحمد را مشاهده کنید",
  alternates: {
    canonical: "/categories",
  },
};

export default async function Page() {
  const categories = await getAllCategories();

  return (
    <ArchiveList<Category>
      title="همه موضوعات"
      items={categories}
      getItemHref={(c) => `/blog/?category=${c.id}`}
      getItemLabel={(c) => c.name}
      emptyMessage="No categories available yet."
    />
  );
}
