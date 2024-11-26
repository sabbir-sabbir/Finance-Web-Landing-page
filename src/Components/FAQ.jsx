import React from 'react'
import {Accordion, AccordionItem} from "@nextui-org/react";

const faq = [
    {
        q: "What credit score do I need to apply for a credit card?",
        a: "The required credit score may vary depending on the specific credit card. Generally, a good to excellent credit score (typically 670 or above) increases your chances of approval for premium credit cards."
    },
    {
        q: "What credit score do I need to apply for a credit card?",
        a: "The required credit score may vary depending on the specific credit card. Generally, a good to excellent credit score (typically 670 or above) increases your chances of approval for premium credit cards."
    },
    {
        q: "What credit score do I need to apply for a credit card?",
        a: "The required credit score may vary depending on the specific credit card. Generally, a good to excellent credit score (typically 670 or above) increases your chances of approval for premium credit cards."
    },
    {
        q: "What credit score do I need to apply for a credit card?",
        a: "The required credit score may vary depending on the specific credit card. Generally, a good to excellent credit score (typically 670 or above) increases your chances of approval for premium credit cards."
    },
    {
        q: "What credit score do I need to apply for a credit card?",
        a: "The required credit score may vary depending on the specific credit card. Generally, a good to excellent credit score (typically 670 or above) increases your chances of approval for premium credit cards."
    },
]

const FAQ = () => {
  return (
    <section className='mb-24'>
        <h2 className='font-bold text-center text-2xl lg:text-3xl leading-tight mt-24 '>FAQs</h2>
      <Accordion  >
        {faq.map(({q, a}, i)=> <AccordionItem   className="text-white border-b-1 border-white" aria-label={q}  title={<span style={{ color: 'white' }}>{q}</span>}   key={i}>
            <span className='text-secondary'>{a}</span>
        </AccordionItem>)}
      </Accordion>
    </section>
  )
}

export default FAQ