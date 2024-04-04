import React from "react";
import { InfiniteMovingCards } from "@/components/infinite-moving-cards";
import { CardBody, CardContainer, CardItem } from "@/components/3d-card"
import Image from "next/image";
import Products from "@/components/products";

const category = [
  {
    image: "/category/c1.png",
    name: "Breakfast",
  },
  {
    image: "/category/c2.png",
    name: "MoMo",
  },
  {
    image: "/category/c3.png",
    name: "Soup",
  },
  {
    image: "/category/c4.png",
    name: "Chowmein",
  },
  {
    image: "/category/c5.png",
    name: "Pizza",
  },
  {
    image: "/category/c6.png",
    name: "Burger",
  },
  {
    image: "/category/c7.png",
    name: "Fried Rice",
  },
  {
    image: "/category/c8.png",
    name: "Chicken Items",
  },
  {
    image: "/category/c9.png",
    name: "Biryani",
  },
  {
    image: "/category/c10.png",
    name: "Potato Items",

  },

];

export const products = [
  {
    image: "/deliveroo_ui/product-1.jpg",
    name: "Puri Tarkari",
    price: 150,
    afterDiscountPrice: 145
  },
  {
    image: "/deliveroo_ui/product-2.jpg",
    name: "Masala Omleete",
    price: 170,
    afterDiscountPrice: 150
  },
  {
    image: "/deliveroo_ui/product-3.png",
    name: "Plain Omleete",
    price: 150,
    // afterDiscountPrice:145
  },
  {
    image: "/deliveroo_ui/product-4.png",
    name: "Aalo Paratha",
    price: 70,
    afterDiscountPrice: 65
  },
  {
    image: "/deliveroo_ui/product-5.png",
    name: "Steam MoMo",
    price: 150,
    // afterDiscountPrice:145
  },
  {
    image: "/deliveroo_ui/product-6.jpg",
    name: "Fried MoMo",
    price: 250,
    // afterDiscountPrice:145
  },
  {
    image: "/deliveroo_ui/product-7.jpg",
    name: "Chilly MoMo",
    price: 150,
    afterDiscountPrice: 145
  },
  {
    image: "/deliveroo_ui/product-8.jpeg",
    name: "Chowmein",
    price: 150,
    afterDiscountPrice: 145
  },
  {
    image: "/deliveroo_ui/product-9.jpg",
    name: "Vegetable Soup",
    price: 150,
    // afterDiscountPrice:145
  },
  {
    image: "/deliveroo_ui/product-10.png",
    name: "Chicken Soup",
    price: 450,
    // afterDiscountPrice:145
  },

];

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


