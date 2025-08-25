import HorizontalSlider from "@/components/HorizontalSlider";
import CardSlider from "@/components/CardSlider";
import PopularPosts from "@/components/PopularPosts";
import PopularAuthor from "@/components/PopularAuthor";
import AllCategories from "@/components/AllCategories";
import { headers } from "next/headers";

export default async function Home() {
  const headersList = await headers();
  const host = headersList.get("host");
  const protocol = process.env.NODE_ENV === "development" ? "http" : "https";
  const baseUrl = `${protocol}://${host}`;

  const res = await fetch(`${baseUrl}/api/posts`, { cache: "no-store" });
  const posts = await res.json();

  return (
    <div className="w-full h-full mb-25">
      <CardSlider title="Latest Posts" subTitle="Explore the altest articles" size="sticker" additionalClass="text-2xl" data={posts}/>
      <PopularPosts title="Popular Posts" subTitle="Explore the altest articles" data={posts}/>
      <HorizontalSlider title="Trending Topics" subTitle="Explore the most viewed articles"/>
      <PopularAuthor title="Popular Authors" subTitle="Explore the altest articles" dataTitle="popular"/>
      <CardSlider title="Post Of The Month" subTitle="Explore the popular articles" size="card" data={posts}/>
      <PopularPosts title="Popular Technology" subTitle="Explore the altest articles" data={posts}/>
      <AllCategories title="Suggested Categories" subTitle="Explore the altest articles" pageLocation="home" />
    </div>
  );
}
