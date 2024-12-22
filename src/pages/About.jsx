import React from 'react'
import Title from '../components/Title'
import { assets } from '../img/assets'
import NewsletterBox from '../components/NewsletterBox'

const About = () => {
  return (
    <div>
      <div className='text-2xl text-center pt-8 border-t'>
        <Title title1={'ABOUT'} title2={'US'}/>
      </div>
      <div className='my-10 flex flex-col md:flex-row gap-16'>
        <img src={assets.about_img} className='w-full md:max-w-[450px]' alt="" />
        <div className='flex flex-col justify-center gap-6 md:w-2/4 text-gray-600'>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing Lorem ipsum dolor sit amet, consectetur adipisicing elit. Laboriosam pariatur et dolor qui molestias corrupti, possimus harum earum officia quod. elit. Quos, sit!</p>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Lorem ipsum dolor sit amet consectetur adipisicing elit. Suscipit aliquam illum aperiam, autem voluptatibus ex doloribus. Optio voluptates minima illo! Quos, sit!</p>
        <b className='text-gray-800'>Our Mission</b>
        <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Et, asperiores laudantium quas odio molestias maxime commodi quidem rerum amet libero aut soluta nam minima, quasi inventore ad enim illum perspiciatis.</p>
        </div>
      </div>

      <div className='text-xl py-4'>
        <Title title1={'WHY'} title2={'CHOOSE US'} />
      </div>

      <div className='flex flex-col md:flex-row mb-20 text-sm'>
        <div className='border px-10 md:px-16 py-8 sm:py-20 flex flex-col gap-5'>
          <b>Quality Assurance : </b>
          <p className='text-gray-600'>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ipsa, et. Dolorum dolorem dignissimos maiores enim?</p>
        </div>
        <div className='border px-10 md:px-16 py-8 sm:py-20 flex flex-col gap-5'>
          <b>Convinience : </b>
          <p className='text-gray-600'>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ipsa, et. Dolorum dolorem dignissimos maiores enim?</p>
        </div>
        <div className='border px-10 md:px-16 py-8 sm:py-20 flex flex-col gap-5'>
          <b>Exceptional Customer Services : </b>
          <p className='text-gray-600'>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ipsa, et. Dolorum dolorem dignissimos maiores enim?</p>
        </div>
      </div>
      <NewsletterBox/>
    </div>
  )
}

export default About
