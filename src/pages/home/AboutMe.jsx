import React from 'react'

function AboutMe() {
  return (
    <section className='bg-black w-full py-10'>
      <div className='container mx-auto'>
        <div className='flex flex-col items-center gap-9'>
          <h1 className='border-4 w-fit border-white text-white py-2 px-5 text-[22px] font-bold'>About Me</h1>
          <h3 className='p-3 text-[19px] font-semibold text-center text-white'>
            Hello! My name is Mohammed Sherif, and I'm a Freelance MERN Stack Developer.
            <br />
            I am fueled by an insatiable passion for coding, dedicated to sculpting captivating web experiences
          </h3>
        </div>
      </div>
    </section>
  )
}

export default AboutMe
