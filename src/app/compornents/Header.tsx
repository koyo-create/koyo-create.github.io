import Link from 'next/link'
import React from 'react'

const Header = () => {
  return (
    <>
    <header className='p-4'>
    <nav className='flex justify-between mx-auto container items-center flex-col md:flex-row'>
    <div className='text-4xl mb-4 md:mb-0'>資産運用について</div>
    <div className='space-x-12'>
    <Link href='NISA' className='hover:text-gray-500 transition-all duration-300'>NISA</Link>
    <Link href='NISA'className='hover:text-gray-500 transition-all duration-300'>証券会社</Link>
    <Link href='NISA'className='hover:text-gray-500 transition-all duration-300'>投資信託</Link>
    <Link href='NISA'className='hover:text-gray-500 transition-all duration-300'>チェックリスト</Link>
    </div>
    </nav>
    </header>
    </>
  )
}

export default Header