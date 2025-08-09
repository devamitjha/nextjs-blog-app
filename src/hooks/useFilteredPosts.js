import { useMemo } from "react";
import POSTS from "@/lib/blog_posts.json";

export function useFilteredPosts({ slug, category, tag }) {
  return useMemo(() => {
    let result = POSTS;

    if (slug) {
      result = result.filter((p) => p.slug === slug);
    } else {
      if (category) {
        result = result.filter(
          (p) => p.category.toLowerCase() === category.toLowerCase()
        );
      }
      if (tag) {
        result = result.filter((p) =>
          p.tag.map((t) => t.toLowerCase()).includes(tag.toLowerCase())
        );
      }
    }

    if (result.length === 0) {
      return POSTS;
    }

    return result;
  }, [slug, category, tag]);
}
