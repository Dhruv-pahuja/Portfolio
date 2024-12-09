import React from 'react';
import {Layout,Contact,About} from "./components/index"

const App: React.FC = () => {
  return (
    <Layout >
      <section id='home' className="p-2 mt-[18vh] dark:text-white w-full">
        <h1 className="text-2xl dark:text-white">Welcome to My Portfolio</h1>
        <p className="text-gray-700 dark:text-gray-300 ">
          This is a single-page portfolio showcasing my projects and skills.
        </p>
        <hr className='mt-8 mx-4 border-gray-400' />
        <About/>
        <hr className='mt-8 mx-4 border-gray-400' />
        <Contact/>
      </section>
    </Layout>
  );
};
export default App
