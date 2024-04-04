import Link from 'next/link'
import React from 'react'

const Footer = () => {
    return (
        <footer className='py-3 px-5 w-full h-[70px] bg-white rounded-t-md border-t'>
            <div className="flex items-center text-sm text-muted-foreground justify-between w-full">
                <Link href={"#"}>
                    Terms of Service
                </Link>
                <p>
                    © 2024 Deliverio All Rights Reserved.

                </p>
            </div>
        </footer>
    )
}

export default Footer