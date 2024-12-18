import React from 'react';
import './Navbar.css'

const Home:React.FC = () => {

  const handleScroll = (id: string) => {
    const section = document.getElementById(id);
    if (section) {
      section.classList.add("pop-effect");

      section.scrollIntoView({ behavior: "smooth" });

      setTimeout(() => {
        section.classList.remove("pop-effect");
      }, 500); 

    }
  };
    return (
        <section id='home' className='mt-5 mb-4'>
            <div className='flex justify-between mx-10' >
                <div className='space-y-4 mt-7 mx-10'>
                    <h3 className='text-2xl font-semibold'> Full Stack Developer</h3>
                    <p className='text-5xl  font-bold'> <span className='text-[#ff2655]'>Hi, <br /></span> I am <span className='text-[#ff2655]'>D</span>hruv <span className='text-[#ff2655]'>P</span>ahuja </p>
                    <div>
                        <button  className='px-6 py-3 m-3 text-black dark:bg-gray-300 bg-[#bebfc2] rounded-md dark:hover:bg-gray-400 hover:bg-[#b3b4b5] transition' onClick={()=>handleScroll('contact')}>Contact me</button>
                        <button className='m-3 px-6 py-3 bg-[#e71a47] text-white rounded-md hover:bg-[#b00e31] transition'>Download CV</button>
                    </div>
                </div>
                <div className='h-[70vh]  mx-10 hidden md:block rounded-lg overflow-hidden border-4 border-gray-300 dark:border-gray-700'>
                    <img src="/Dhruv.jpg" alt="Drhuv" className='object-cover w-full h-full '/>
                </div>
            </div>
        </section>
    );
}

export default Home;
