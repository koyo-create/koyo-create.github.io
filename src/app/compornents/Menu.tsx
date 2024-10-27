import React from 'react'
import Link from 'next/link'

const Menu = () => {
  return (
    <>
    <section className='text-gray-700 mb-32 text-center container mx-auto py-20'>
      <div className='container px-5 py-5 mx-auto'>
      <div className='flex flex-col xl:flex-row'>
        <div className='xl:w-1/4 p-4'>
        <Link href='Checklist'>
        <div className=' rounded-lg p-8 shadow-md shadow-gray-500  hover:bg-sky-50'>
          <div className='flex items-center justify-between xl:flex-col'>
            <div className='flex items-center'>
            <h2 className='text-gray-900 text-2xl font-semibold mr-4 items-center'>確認事項</h2>
            <div className='bg-green-500 text-white rounded-full'>
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M12.0519 14.8285L13.4661 16.2427L17.7088 12L13.4661 7.7574L12.0519 9.17161L13.8804 11H6.34321V13H13.8803L12.0519 14.8285Z" fill="currentColor" /><path fillRule="evenodd" clipRule="evenodd" d="M19.7782 19.7782C24.0739 15.4824 24.0739 8.51759 19.7782 4.22183C15.4824 -0.0739417 8.51759 -0.0739417 4.22183 4.22183C-0.0739417 8.51759 -0.0739417 15.4824 4.22183 19.7782C8.51759 24.0739 15.4824 24.0739 19.7782 19.7782ZM18.364 18.364C21.8787 14.8492 21.8787 9.15076 18.364 5.63604C14.8492 2.12132 9.15076 2.12132 5.63604 5.63604C2.12132 9.15076 2.12132 14.8492 5.63604 18.364C9.15076 21.8787 14.8492 21.8787 18.364 18.364Z" fill="currentColor" /></svg>
            </div>
            </div>
           <div className='text-sm opacity-80 xl:mt-4 ml-auto xl:ml-0'>
            <p className=''>投資を始めるまでの確認事項</p>
           </div>
          </div>
        </div>
        </Link>
        </div>
        <div className='xl:w-1/4 p-4'>
        <Link href='NISA'>
        <div className=' rounded-lg p-8 shadow-md shadow-gray-500  hover:bg-sky-50'>
          <div className='flex items-center justify-between xl:flex-col'>
            <div className='flex items-center'>
            <h2 className='text-gray-900 text-2xl font-semibold mr-4 items-center'>NISA</h2>
            <div className='bg-green-500 text-white rounded-full'>
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M12.0519 14.8285L13.4661 16.2427L17.7088 12L13.4661 7.7574L12.0519 9.17161L13.8804 11H6.34321V13H13.8803L12.0519 14.8285Z" fill="currentColor" /><path fillRule="evenodd" clipRule="evenodd" d="M19.7782 19.7782C24.0739 15.4824 24.0739 8.51759 19.7782 4.22183C15.4824 -0.0739417 8.51759 -0.0739417 4.22183 4.22183C-0.0739417 8.51759 -0.0739417 15.4824 4.22183 19.7782C8.51759 24.0739 15.4824 24.0739 19.7782 19.7782ZM18.364 18.364C21.8787 14.8492 21.8787 9.15076 18.364 5.63604C14.8492 2.12132 9.15076 2.12132 5.63604 5.63604C2.12132 9.15076 2.12132 14.8492 5.63604 18.364C9.15076 21.8787 14.8492 21.8787 18.364 18.364Z" fill="currentColor" /></svg>
            </div>
            </div>
           <div className='text-sm opacity-80 xl:mt-4 ml-auto xl:ml-0'>
            <p className=''>2024年から開始された新NISA</p>
           </div>
          </div>
        </div>
        </Link>
        </div>
        <div className='xl:w-1/4 p-4'>
        <Link href='InvestmentTrust'>
        <div className=' rounded-lg p-8 shadow-md shadow-gray-500  hover:bg-sky-50'>
          <div className='flex items-center justify-between xl:flex-col'>
            <div className='flex items-center'>
            <h2 className='text-gray-900 text-2xl font-semibold mr-4 items-center'>投資信託</h2>
            <div className='bg-green-500 text-white rounded-full'>
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M12.0519 14.8285L13.4661 16.2427L17.7088 12L13.4661 7.7574L12.0519 9.17161L13.8804 11H6.34321V13H13.8803L12.0519 14.8285Z" fill="currentColor" /><path fillRule="evenodd" clipRule="evenodd" d="M19.7782 19.7782C24.0739 15.4824 24.0739 8.51759 19.7782 4.22183C15.4824 -0.0739417 8.51759 -0.0739417 4.22183 4.22183C-0.0739417 8.51759 -0.0739417 15.4824 4.22183 19.7782C8.51759 24.0739 15.4824 24.0739 19.7782 19.7782ZM18.364 18.364C21.8787 14.8492 21.8787 9.15076 18.364 5.63604C14.8492 2.12132 9.15076 2.12132 5.63604 5.63604C2.12132 9.15076 2.12132 14.8492 5.63604 18.364C9.15076 21.8787 14.8492 21.8787 18.364 18.364Z" fill="currentColor" /></svg>
            </div>
            </div>
           <div className='text-sm opacity-80 xl:mt-4 ml-auto xl:ml-0'>
            <p className=''>初心者が取り組むべき投資信託</p>
           </div>
          </div>
        </div>
        </Link>
        </div>
        <div className='xl:w-1/4 p-4'>
        <Link href='SecuritiesCompany'>
        <div className=' rounded-lg p-8 shadow-md shadow-gray-500  hover:bg-sky-50'>
          <div className='flex items-center justify-between xl:flex-col'>
            <div className='flex items-center'>
            <h2 className='text-gray-900 text-2xl font-semibold mr-4 items-center'>証券会社</h2>
            <div className='bg-green-500 text-white rounded-full'>
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M12.0519 14.8285L13.4661 16.2427L17.7088 12L13.4661 7.7574L12.0519 9.17161L13.8804 11H6.34321V13H13.8803L12.0519 14.8285Z" fill="currentColor" /><path fillRule="evenodd" clipRule="evenodd" d="M19.7782 19.7782C24.0739 15.4824 24.0739 8.51759 19.7782 4.22183C15.4824 -0.0739417 8.51759 -0.0739417 4.22183 4.22183C-0.0739417 8.51759 -0.0739417 15.4824 4.22183 19.7782C8.51759 24.0739 15.4824 24.0739 19.7782 19.7782ZM18.364 18.364C21.8787 14.8492 21.8787 9.15076 18.364 5.63604C14.8492 2.12132 9.15076 2.12132 5.63604 5.63604C2.12132 9.15076 2.12132 14.8492 5.63604 18.364C9.15076 21.8787 14.8492 21.8787 18.364 18.364Z" fill="currentColor" /></svg>
            </div>
            </div>
           <div className='text-sm opacity-80 xl:mt-4 ml-auto xl:ml-0'>
            <p className=''>証券会社の選び方</p>
           </div>
          </div>
        </div>
        </Link>
        </div>
      </div>
      </div>
    </section>
    
    </>
  )
}

export default Menu