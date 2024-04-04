import React from "react";
import { InfiniteMovingCards } from "@/components/infinite-moving-cards";
import { CardBody, CardContainer, CardItem } from "@/components/3d-card"
import Image from "next/image";
import Products from "@/components/products";
import { category, products } from "@/lib/constants";

export default function HomePage() {
  return (
    <div className="h-full w-full transition-all duration-75">
      <CardContainer className="inter-var w-full p-2 pb-0 ">
        <CardBody className="bg-transparent relative group/card mx-auto rounded-xl py-1 w-full h-96">

          <CardItem translateZ="0" className="w-full mt-0 md:mt-4">
            <Image
              src="/deliveroo_ui/hero-1.jpg"
              height={1000}
              width={5000}
              className="h-96 object-contain md:object-cover rounded-3xl md:rounded-xl flex-1"
              alt="thumbnail"
            />
          </CardItem>
        </CardBody>
      </CardContainer>
      <div className="rounded-md flex flex-col antialiased bg-white dark:bg-black dark:bg-grid-white/[0.05] items-center justify-start relative overflow-hidden">

        <InfiniteMovingCards
          items={category}
          direction="right"
          speed="slow"
        />
      </div>

      <div className=" p-2">
        <div className="flex flex-col gap-3 p-4">
          <div className="flex items-center justify-between">
            <h1 className="relative text-lg md:text-4xl  bg-clip-text text-transparent bg-neutral-800 text-start font-sans font-bold">
              Today&apos;s Special Items
            </h1>
            <span className="underline text-orange-500 cursor-pointer">See more</span>
          </div>
          <Products
            products={products}
          />
        </div>

        <div className="flex flex-col gap-3 p-4">
          <h1 className="relative text-lg md:text-4xl  bg-clip-text text-transparent bg-neutral-800 text-start font-sans font-bold">
            Top Sales this Month
          </h1>
          <Products
            products={products.slice(0, 5)}
          />
        </div>

        <div className="flex flex-col gap-3 p-4">
          <h1 className="relative text-lg md:text-4xl  bg-clip-text text-transparent bg-neutral-800 text-start font-sans font-bold">
            Special Dishes
          </h1>
          <Products
            products={products.slice(4)}
          />
        </div>


      </div>
    </div>
  );
}


