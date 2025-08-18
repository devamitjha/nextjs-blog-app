import { Button } from "@/components/ui/button";
import Image from "next/image";
import HorizontalSlider from "@/components/HorizontalSlider";
import CardSlider from "@/components/CardSlider";
import PopularPosts from "@/components/PopularPosts";
import PopularAuthor from "@/components/PopularAuthor";
import AllCategories from "@/components/AllCategories";

export default function Home() {
  return (
    <div className="w-full h-full">
      <CardSlider title="Latest Posts" subTitle="Explore the altest articles" size="sticker" additionalClass="text-2xl"/>
      <PopularPosts title="Popular Posts" subTitle="Explore the altest articles"/>
      <HorizontalSlider title="Trending Topics" subTitle="Explore the most viewed articles"/>
      <PopularAuthor title="Popular Authors" subTitle="Explore the altest articles" dataTitle="popular"/>
      <CardSlider title="Post Of The Month" subTitle="Explore the popular articles" size="card"/>
      <PopularPosts title="Popular Technology" subTitle="Explore the altest articles"/>
      <AllCategories title="Suggested Categories" subTitle="Explore the altest articles" pageLocation="home" />
    </div>
  );
}
