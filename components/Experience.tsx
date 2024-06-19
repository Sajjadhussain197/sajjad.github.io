import { workExperience } from '@/data'
import React from 'react'
import { Button } from './ui/MovingBorder'
const Experience = () => {
  return (
    <div className='py-20' id='testimonials'>
            <h1 className='heading'>
                My
                <span className='text-purple'> Work Experience</span>
            </h1>
            <div className="w-full mt-12 grid md:grid-cols-2 grid-cols-1 gap-4">
                {
                    workExperience.map((card)=>(
                        <Button key={card.id}
                        duration={Math.floor(Math.random()*10000)+10000}
                        borderRadius='1.75rem'
                        className='flex-1 text-white border-neutral-200 dark:border-slate-200 '>
                            <div className='flex flex-col lg:flex-row lg:items-center  p-3 py-6 md:p-5 lg:p-10 gap-2'>
                                <img src={card.thumbnail} alt={card.thumbnail}
                                className='lg:w-32 md:w-20 w-16'  />
                            </div>
                            <div className='lg:ms-5'>
                               
                               <h1 className='text-start text-xl md:text-2xl font-bold'>
                                    {card.title}
                                
                               </h1>
                                <p className='text-start text-white-100 mt-3 font-semibold'>
                                    {card.title}
                                </p>
                            </div>

                        </Button>
                    ))
                }
    </div>
    </div>
  )
}

export default Experience
