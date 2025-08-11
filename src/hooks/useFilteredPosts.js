import { useMemo } from "react";
import POSTS from "@/lib/blog_posts.json";

export function useFilteredPosts({ slug, category, tag, author }) {
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
        result = result.filter((p) => {
          if (Array.isArray(p.tag)) {
            return p.tag.some((t) => t.toLowerCase() === tag.toLowerCase());
          }
          return String(p.tag).toLowerCase() === tag.toLowerCase();
        });
      }
      //author slug will not pass in blogDatasss
      if (author) {
        result = result.filter((p) => {
          if (Array.isArray(p.author)) {
            return p.author.map((t) => t.toLowerCase()).includes(author.toLowerCase());
          }
          return p.author.toLowerCase() === author.toLowerCase();
        });
      }
    }

    if (result.length === 0) {
      return POSTS;
    }

    return result;
  }, [slug, category, tag, author]);
}
