import { getAllTags } from "@/lib/wordpress";
import { ArchiveList } from "@/components/archive-list";
import type { Tag } from "@/lib/wordpress.d";
import type { Metadata } from "next";

export const revalidate = 3600;

export const metadata: Metadata = {
  title: "همه برچسبها",
  description: "همه برچسبهای وبلاگ را پیمایش کنید",
  alternates: {
    canonical: "/tags",
  },
};

export default async function Page() {
  const tags = await getAllTags();

  return (
    <ArchiveList<Tag>
      title="همه برچسبها"
      items={tags}
      getItemHref={(t) => `/blog/?tag=${t.id}`}
      getItemLabel={(t) => t.name}
      emptyMessage="No tags available yet."
    />
  );
}
