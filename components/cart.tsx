import React from 'react'
import { Dialog, DialogContent, DialogFooter, DialogHeader, DialogTrigger } from './ui/dialog'
import { Minus, Plus, ShoppingBasket, Trash } from 'lucide-react'
import { Button } from './ui/button'
import { ScrollArea } from './ui/scroll-area'
import { products } from '@/app/(marketing)/page'
import Image from 'next/image'

const Cart = () => {
    return (
        <Dialog>
            <DialogTrigger asChild>
                <Button size={"sm"} variant={"ghost"} className='relative' >
                    <ShoppingBasket className='h-5 w-5' />
                    <span className='absolute top-0 right-0 w-3 h-3 rounded-full backdrop-blur-3xl text-orange-500 flex items-center justify-center p-1'>
                        2
                    </span>
                </Button>
            </DialogTrigger>
            <DialogContent className='bg-orange-50 h-full'>
                <ScrollArea>
                    <h1 className='text-xl font-bold text-orange-500'>My Cart</h1>

                    <div className="flex flex-col items-start justify-start gap-2 py-3">
                        {
                            products.slice(4,6).map((item) => (
                                <div className="flex items-center justify-between gap-4 w-full bg-neutral-100 rounded-md p-2" key={item.name}>
                                    <div className="flex gap-3">
                                        <Image
                                            src={item.image}
                                            width={80}
                                            height={80}
                                            alt='product'
                                            className='object-contain rounded-xl p-1 bg-neutral-100'
                                        />
                                        <div className="flex flex-col gap-0">
                                            <h1 className='font-semibold'>{item.name}</h1>
                                            <span className='text-xs text-muted-foreground'>Quantity 2</span>
                                            <h1 className='font-semibold text-lg'>Rs.{item.price}</h1>

                                            <div className="flex items-center justify-between border border-neutral-50 px-2 py-1">
                                                <Plus className='h-5 w-5 cursor-pointer' />
                                                <span className='text-lg font-bold'>2</span>
                                                <Minus className='h-5 w-5 cursor-pointer' />
                                            </div>
                                        </div>
                                    </div>

                                    <div className="flex items-center justify-center hover:bg-rose-200 rounded-lg p-2 transition-all duration-100">
                                        <Trash className='h-5 w-5 text-rose-500 cursor-pointer ' />
                                    </div>
                                </div>
                            ))
                        }
                    </div>
                </ScrollArea>

                <DialogFooter className='w-full flex flex-col'>
                    <div className="flex flex-col w-full">
                        <div className="flex items-center justify-between px-3 py-2 w-full">
                            <h1 className="font-bold text-lg">SubTotal</h1>
                            <h1 className="font-bold text-lg">Rs.500</h1>
                        </div>
                        <Button variant={"secondary"} size={"lg"} className=' w-full'>
                            Checkout
                        </Button>
                    </div>
                </DialogFooter>
            </DialogContent>
        </Dialog>
    )
}

export default Cart