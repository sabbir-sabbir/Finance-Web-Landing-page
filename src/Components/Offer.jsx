import React from 'react'

const Offer = () => {
    const offerList = [
        {
            icons: "icon.svg",
            title: "Cardano Debit-Card",
            desc: "Cardano, simplified. The debit card that makes crypto spending easy"
        },
        {
            icons: "icon2.svg",
            title: "On & Off Ramp",
            desc: "Fiat meets crypto, effortlessly buy, sell, and manage."
        },
        {
            icons: "icon3.svg",
            title: "Solutions for business",
            desc: "Empowering businesses with effortless crypto payments and seamless fiat solutions."
        }

    ]
  return (
    <>
    <section className="space-y-12 mt-24">
        <h1 className="font-bold leading-tight text-center text-2xl lg:text-3xl">What do we offer?</h1>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
         {offerList.map((item, index)=> (
           <div key={index} className="flex gap-4">
               <div className="bg-[#3d3f54] flex items-center justify-center max-h-12 max-w-12 rounded-xl w-4/5">
                <img className="h-6 w-6" src={item.icons} alt="icons" />
               </div>

               <div className="">
                <h4 className="font-bold text-lg">{item.title}</h4>
                <p className="text-secondary text-sm">{item.desc}</p>
               </div>
           </div>

         ))

         }
        </div>
    </section>
    </>
  )
}

export default Offer