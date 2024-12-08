import React from 'react';
import {Layout} from "./components/index"

const App: React.FC = () => {
  return (
    <Layout>
      <div className="p-2  dark:text-white">
        <h1 className="text-2xl dark:text-white">Welcome to My Portfolio</h1>
        <p className="text-gray-700 dark:text-gray-300 ">
          This is a single-page portfolio showcasing my projects and skills.
        </p>
      </div>
    </Layout>
  );
};
export default App
