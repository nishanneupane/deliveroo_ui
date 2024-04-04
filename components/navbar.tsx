"use client"
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import { Button } from '@/components/ui/button'
import Cart from './cart'
import { Input } from './ui/input'
import { Search } from 'lucide-react'
import { cn } from '@/lib/utils'

const Navbar = ({ className }: { className?: any }) => {
    return (
        <nav className='fixed top-0 left-0 right-0 h-[70px] backdrop-blur-3xl bg-white z-[10]'>
            <div className="flex items-center justify-between h-full w-full p-4 border-b">
                <div className="flex items-center justify-center">
                    <Link href={"/"} className='flex items-center justify-center'>
                        <Image
                            src={"/logo.jpg"}
                            width={80}
                            height={30}
                            alt='Logo'
                            className='object-cover rounded-full p-2'
                        />
                        <h1 className={cn('font-bold text-lg md:text-xl lg:text-2xl bg-clip-text text-transparent bg-gradient-to-br from-orange-400 via-orange-500 to-orange-700 hidden md:block', className)}>Deliveroo</h1>
                    </Link>
                </div>

                <div className="w-[60%] mx-auto bg-neutral-100 md:flex rounded-md items-center justify-center px-4 hidden">
                    <Input placeholder='Search' className='bg-transparent w-full flex-1 border-0' />
                    <Search className='h-5 w-5 text-orange-500 cursor-pointer font-extrabold focus-visible:ring-0 focus-visible:ring-offset-0 outline-none' />
                </div>
                <div className="flex items-center gap-3">
                    <Cart />
                    <Button size={"sm"} variant={"secondary"} >Sign In</Button>

                </div>
            </div>
        </nav>
    )
}

export default Navbar