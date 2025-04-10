import React from 'react'
import htmlIMG from '../../assets/img/skills/html.png'
import cssIMG from '../../assets/img/skills/css.png'
import bootstrapIMG from '../../assets/img/skills/bootstrap.png'
import tailwindIMG from '../../assets/img/skills/tailwind.png'
import javascriptIMG from '../../assets/img/skills/JavaScript.png'
import reactIMG from '../../assets/img/skills/react.png'
import nodeIMG from '../../assets/img/skills/node.png'
import mongoIMG from '../../assets/img/skills/mongo db.png'
import expressIMG from '../../assets/img/skills/express.png'
import nestIMG from '../../assets/img/skills/nestjs.png'
import nextIMG from '../../assets/img/skills/nextjs.png'
import postgresqlIMG from '../../assets/img/skills/postgresql.png'
import sassIMG from '../../assets/img/skills/Sass.png'
import typescriptIMG from '../../assets/img/skills/typescript.png'

function Skills() {
  const completedSkills = [
    { id: 1, name: 'HTML5', image: htmlIMG },
    { id: 2, name: 'CSS3', image: cssIMG },
    { id: 3, name: 'BOOTSTRAP', image: bootstrapIMG },
    { id: 4, name: 'TAILWIND', image: tailwindIMG },
    { id: 5, name: 'JAVASCRIPT', image: javascriptIMG },
    { id: 6, name: 'REACT-JS', image: reactIMG },
    { id: 7, name: 'NODE-JS', image: nodeIMG },
    { id: 8, name: 'MONGO-DB', image: mongoIMG },
    { id: 9, name: 'EXPRESS-JS', image: expressIMG },
  ]
  const learnSkills = [
    { id: 1, name: 'NEST-JS', image: nestIMG },
    { id: 2, name: 'NEXT-JS', image: nextIMG },
    { id: 3, name: 'POSTGRESQL', image: postgresqlIMG },
    { id: 4, name: 'SASS', image: sassIMG },
    { id: 5, name: 'TYPESCRIPT', image: typescriptIMG },
  ]
  return (
    <section className='w-full bg-[#D7D7D7] py-10'>
      <div className='container mx-auto'>
        <div className='flex flex-col items-center gap-9'>
          <h1 className='border-4 w-fit border-black py-2 px-5 text-[22px] font-bold text-black'>Skills</h1>
        </div>
        <div className='mt-10'>
          <h1 className='text-black text-[25px] font-bold'>Using Now:</h1>
          <div className='grid grid-cols-1 md:grid-cols-2 mdl:grid-cols-5 justify-center gap-4'>
            {
              completedSkills.map((skill) =>
                <div key={skill.id} className='w-[300px] h-[250px] flex flex-col justify-center items-center text-center gap-5 '>
                  <img src={skill.image} alt={skill.name} className='w-[150px] h-[100px]' />
                  <h3 className='text-black font-semibold text-lg'>{skill.name}</h3>
                </div>
              )
            }

          </div>
        </div>

        <div className='mt-10'>
          <h1 className='text-black text-[25px] font-bold'>Learning:</h1>
          <div className='grid grid-cols-1 md:grid-cols-2 mdl:grid-cols-5 justify-center gap-4'>
            {
              learnSkills.map((skill) =>
                <div key={skill.id} className='w-[300px] h-[250px] flex flex-col justify-center items-center text-center gap-5 '>
                  <img src={skill.image} alt={skill.name} className='w-[150px] h-[100px]' />
                  <h3 className='text-black font-semibold text-lg'>{skill.name}</h3>
                </div>
              )
            }

          </div>
        </div>
      </div>
    </section>
  )
}

export default Skills
