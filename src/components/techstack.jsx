import React from 'react'


const stack = [
    {
        name : 'React',
        src : '/assets/svg/react.svg'
    },
    {
        name : 'Node Js',
        src : '/assets/svg/nodejs.svg'
    },
    {
        name : 'Tailwind',
        src : '/assets/svg/tailwindcss.svg'
    },
    {
        name : 'Javascript',
        src : '/assets/svg/js.svg'
    }
];


const Techstack = () => {
  return (
    <div>
    <hr className="bg-white opacity-20 m-20 sm:mt-48 mt-32"></hr>
      <div className="text-center text-4xl mt-10">
        My <span className="text-lime"> Tech Stack </span>
      </div>
      <div className='flex flex-wrap gap-y-10 justify-between p-20'>
      {stack.map(item => {
        return(
        <div key={item.name} className='w-52 h-16 p-4 bg-background2 flex justify-around items-center border border-white border-opacity-30   '>
          <img src={item.src}/>
          <div className='h-12 opacity-20 w-[1px] bg-white'></div>
          <p className='text-2xl'>{item.name}</p>
       </div>
        );
      })}
      </div>
    </div>
  )
}

export default Techstack