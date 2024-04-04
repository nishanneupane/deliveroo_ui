import Image from 'next/image';
import React from 'react'
import { Button } from './ui/button';
import { ShoppingBag, Star, StarOff } from 'lucide-react';

const Products = ({ products }: { products: any }) => {
    return (
        <div>
            <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-4 ">
                {
                    products.map((product: any) => (
                        <div key={product.image} className="flex items-center justify-between flex-col bg-white border rounded-lg p-2 gap-2">
                            <div className="flex items-center flex-col font-semibold">
                                <Image
                                    src={product.image}
                                    width={120}
                                    height={120}
                                    alt={product.name}
                                    className='object-contain h-[120px] w-[120px] rounded-lg'
                                />
                                <h1 className='text-base text-neutral-800 font-bold text-start w-full'>{product.name}</h1>

                                <div className="flex items-center justify-between w-full">
                                    <span className='flex text-xs text-muted-foreground items-center '><Star fill='#f97316' className='text-orange-500 h-3 w-3' /> 5</span>
                                    <span className='text-xs text-muted-foreground text-orange-500'>Category</span>
                                </div>
                                <h1 className='text-base text-neutral-800 font-bold text-start w-full'>
                                    <span>Rs.{product.price}</span>
                                </h1>
                            </div>
                            <div className="">
                                <Button size={"lg"} variant={"buy"} className=' rounded-md text-sm'>
                                    <p className='hidden lg:block'>Add to cart </p>
                                    <ShoppingBag className='h-5 w-5 ml-2' />
                                </Button>
                            </div>
                        </div>
                    ))
                }
            </div>
        </div>
    )
}

export default Products