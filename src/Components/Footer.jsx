import React from 'react'
const listA = ["Investors", "Features", "Book a demo", "Security "]
const listB = ["Investors", "Features", "Book a demo", "Security "]
const listC = ["Investors", "Features", "Book a demo", "Security "]
const listD = ["Investors", "Features", "Book a demo", "Security "]


const linklist = (title, list)=> (
    <div className='space-y-4 min-w-fit'>
        <h5 className='font-bold'>{title}</h5>

        <ul className='space-y-2'>
            {list.map((item, i)=> <li className='text-secondary text-small' key={i}>{item}</li> )}
        </ul>
    </div>
);

const Footer = () => {
  return (
    <footer className=' bg-[#292834]/30 mt-[120px] mb-[90px]'>
    <div className='grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-x-2.5 gap-y-5 lg:gap-8 py-12 px-2.5 md:px-10 lg:px-20 xl:px-24  w-full max-w-[1440px] mx-auto'>
         <div className='space-y-2  col-span-2 '>
            <h4 className='font-bold text-lg'>Wern Finance</h4>
            <p className='text-secondary text-sm max-w-[287px]'>Discover the power of our secure and rewarding credit cards</p>
         </div>
    {linklist("About us", listA)}
    {linklist("Products", listB)}
    {linklist("Useful Links", listC)}
    {linklist("Social", listD)}
    </div>

    </footer>
  )
}

export default Footer