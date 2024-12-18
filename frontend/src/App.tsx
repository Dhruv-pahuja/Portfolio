import React from 'react';
import {Layout,Contact,About,Home,Projects, Services} from "./components/index"

const App: React.FC = () => {
  return (
    <Layout >
      <section  className=" mt-[18vh] dark:text-white w-full">
        <Home />
        <hr className='mt-8 md:mx-12 mx-5 border-gray-400' />
        <About />
        <hr className='mt-8 md:mx-12 mx-5 border-gray-400' />
        <Services />
        <hr className='mt-8 md:mx-12 mx-5 border-gray-400' />
          <Projects />
        <hr className='mt-8 md:mx-12 mx-5 border-gray-400' />
        <Contact/>
      </section>
    </Layout>
  );
};
export default App
