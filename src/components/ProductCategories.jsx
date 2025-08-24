"use client";
import React from "react";
import Image from "next/image";
import { useSelector, useDispatch } from "react-redux";
import { Sheet } from "react-modal-sheet";
import { Button } from "./ui/button";
import {
  switchSheet,
  setSheetAfterDelay,
} from "@/store/slices/sheetSlice";
import {
  Footprints,
  Glasses,
  Briefcase,
  Shirt,
  ShoppingBasket,
  Hand,
  Venus,
} from "lucide-react";
import { usePathname, useRouter, useSearchParams } from "next/navigation";
import { useIsMobile } from "@/hooks/use-mobile"
import Filter from "./Filter";

const categoriesList = [
  { name: "All", icon: <ShoppingBasket className="w-4 h-4" />, slug: "all" },
  { name: "T-shirts", icon: <Shirt className="w-4 h-4" />, slug: "t-shirts" },
  { name: "Shoes", icon: <Footprints className="w-4 h-4" />, slug: "shoes" },
  { name: "Accessories", icon: <Glasses className="w-4 h-4" />, slug: "accessories" },
  { name: "Bags", icon: <Briefcase className="w-4 h-4" />, slug: "bags" },
  { name: "Dresses", icon: <Venus className="w-4 h-4" />, slug: "dresses" },
  { name: "Jackets", icon: <Shirt className="w-4 h-4" />, slug: "jackets" },
  { name: "Gloves", icon: <Hand className="w-4 h-4" />, slug: "gloves" },
];

const SheetWrapper = ({ isOpen, onClose, title, image, children }) => (
  <Sheet
    isOpen={isOpen}
    onClose={onClose}
    initialSnap={0.8}
    detent="content-height"
  >
    <Sheet.Container>
      <Sheet.Header />
      <Sheet.Content>
        <Sheet.Scroller>
          <div className="p-4 space-y-4 max-w-md mx-auto overflow-x-hidden">
            {image && (
              <Image
                src={image}
                alt={title}
                className="w-full h-auto rounded"
              />
            )}
            <h2 className="text-xl font-semibold text-center">{title}</h2>
            {children}
          </div>
        </Sheet.Scroller>
      </Sheet.Content>
    </Sheet.Container>
    <Sheet.Backdrop onClick={onClose} />
  </Sheet>
);

const ProductCategories = () => {
  const isMobile = useIsMobile()
  const dispatch = useDispatch();
  const activeSheet = useSelector((state) => state.sheet.activeSheet);

  const openSheet = (sheetName) => {
    dispatch(switchSheet());
    setTimeout(() => {
      dispatch(setSheetAfterDelay(sheetName)); 
    }, 200);
  };

  const closeSheet = () => {
    dispatch(switchSheet());
  };

  const searchParams = useSearchParams();
  const router = useRouter();
  const pathname = usePathname();

  const selectedCategory = searchParams.get("category");

  
  const handleChange = (value) => {
    const params = new URLSearchParams(searchParams);
    params.set("category", value || "all");
    router.push(`${pathname}?${params.toString()}`, { scroll: false });
    closeSheet(); 
  };

  return (
    <div className="mobile-filter flex w-full justify-between items-center my-6 flex-row lg:flex-col">      
        {
          isMobile ? 
          <>
            <Button
              variant="outline"
              onClick={() => openSheet("productCategory")}
              className="text-blue-500"
            >
              Categories
            </Button>
            <SheetWrapper
              isOpen={activeSheet === "productCategory"}
              onClose={closeSheet}
              title="Category"
            >        
              <div className="flex flex-col gap-4 items-start bg-gray-100 p-2 rounded-lg text-sm">
                {categoriesList.map((category) => (
                  <div
                    key={category.slug}
                    className={`flex items-center justify-center gap-2 cursor-pointer px-2 py-1 rounded-md ${
                      category.slug === selectedCategory ? "bg-white" : "text-gray-500"
                    }`}
                    onClick={() => handleChange(category.slug)} 
                  >
                    {category.icon}
                    {category.name}
                  </div>
                ))}
              </div>
            </SheetWrapper>
          </>
        : <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-8 gap-2 bg-gray-100 p-2 rounded-lg mb-4 text-sm">
            {categoriesList.map((category) => (
              <div
                key={category.slug}
                className={`flex items-center justify-center gap-2 cursor-pointer px-2 py-1 rounded-md ${
                  category.slug === selectedCategory ? "bg-white" : "text-gray-500"
                }`}
                onClick={() => handleChange(category.slug)}
              >
                {category.icon}
                {category.name}
              </div>
            ))}
          </div>
        }
      <Filter/>
    </div>
  );
};

export default ProductCategories;
