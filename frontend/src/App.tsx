import React from 'react';
import {Layout,Contact,About,Home} from "./components/index"

const App: React.FC = () => {
  return (
    <Layout >
      <section  className=" mt-[18vh] dark:text-white w-full">
        <Home />
        <hr className='mt-8 mx-4 border-gray-400' />
        <About />
        <hr className='mt-8 mx-4 border-gray-400' />
        <Contact/>
      </section>
    </Layout>
  );
};
export default App
