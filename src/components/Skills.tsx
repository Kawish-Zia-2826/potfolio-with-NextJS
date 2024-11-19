import React from 'react'

const Skills = () => {
  return (
    <div id='skills' className='container pt-32'>
      <div className='grid md:grid-cols-2 gap-20 items-center'>
        <div>
          <h2 data-aos="fade-right" className='text-4xl md:text-5xl'>Technoliges Work With </h2>
          <p data-aos="fade-right" className='text-gray-500 pt-2'>Hi I am kawish zia a part of GIAIC students and i am work with many tech..</p>
        </div>
        <div>
          <div className='grid grid-cols-2 text-accent text-3xl sm:text-4xl'>
            <div className='space-y-2'>
              <h2 data-aos="fade-right">Front_Ent</h2>
              <h2 data-aos="fade-right">ASp,.NET MVC</h2>
              <h2 data-aos="fade-right">REACT JS</h2>
            </div>
            <div className='space-y-2'>
              <h2 data-aos="fade-right">HTML</h2>
              <h2 data-aos="fade-right">CSS</h2>
              <h2 data-aos="fade-right">JS</h2>
            </div>

          </div>
        </div>
      </div>
    </div>
  )
}

export default Skills
