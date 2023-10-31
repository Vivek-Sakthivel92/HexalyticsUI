import Link from 'next/link';
import React from 'react';

export default function Left() {
    return (
        <div className='fixed top-0 bottom-0 left-0 bg-black w-[220px] px-4 pt-[70px] pb-4 text-white'>
            <Link href="/charts">Charts</Link>
        </div>
    )
}