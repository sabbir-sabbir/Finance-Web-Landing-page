import React from 'react'
const revews = [
    {img: 'Group.svg', image: 'people1.svg', review: "Great session! Dani was super helpful. She shared some practical advice on how can lorem ip we go about refining our service offerings.", name: "Hadid Khan", status: "UIUX Designer"},


    {img: 'Group.svg', image: 'people2.svg', review: "It's is both attractive and highly adaptable. It's exactly what I've been looking forefinitely wo lorem ipsum dolorth the investment.", name: "Wade Warren", status: "Web Designer"},


    {img: 'Group.svg', image: 'people3.svg', review: "I am really satisfied with it. I'm good to go. It really saves me time and effort. It's is exactly what our business has been lacking. ", name: "Jenny Wilson", status: "Trust Administrator"},


]

const Feedback = () => {
  return (
    <section className="grid grid-cols-1 md:grid-cols-3 gap-5 mt-12">
        {revews.map((item, i)=> (
            <div className='bg-[#27322F3D]/25 rounded-md px-6 py-12 space-y-8' key={i}>

             <div className=' flex items-center justify-center w-14 h-14 bg-[#3D3F54] rounded-full '><img className='w-1/2' src={item.img} alt="image" /></div>
             <p >&quot;{item.review}</p>

             <div className='flex gap-2 items-center'>
             <img className='w-12 h-12 rounded-full' src={item.image} alt="" />
             <div>
                <h5 className='font-bold'>{item.name}</h5>
                <p className='text-secondary text-small' >{item.status}</p>
             </div>
             </div>
            
            </div>
        ))}
    </section>
  )
}

export default Feedback