import { useMemo } from "react";
import useSWR from "swr";

export function useFilteredPosts({ slug, category, tag, author }) {
  const fetcher = (url) => fetch(url).then((res) => res.json());
  const { data, error } = useSWR("/api/posts", fetcher); 
 

  return useMemo(() => {
    if (!data) return []; // return empty while loading
    if (error) return []; // or handle error differently
    let result = data;

    //let result = POSTS;

    if (slug) {
      result = result.filter((p) => p.slug === slug);
    } else {
      if (category) {
        result = result.filter(
          (p) => p.category?.slug?.toLowerCase() === category.toLowerCase() ||
                 p.category?.name?.toLowerCase() === category.toLowerCase()
        );
        console.log(result);
        console.log(result);
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
        result = result.filter(
          (p) =>
            p.author?.name?.toLowerCase() === author.toLowerCase() ||
            p.author?._id?.toLowerCase() === author.toLowerCase()
        );
      }
    }

    if (result.length === 0) {
      return data;
    }

    return result;
  }, [data, error, slug, category, tag, author]);
}
