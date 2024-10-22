import React, { useState } from 'react';
import Header from './components/Header';
import ResumeForm from './components/ResumeForm';
import ResumePreview from './components/ResumePreview';
import Footer from './components/Footer';

const App = () => {
  const [resumeData, setResumeData] = useState({});

  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <div className="flex flex-col md:flex-row p-4">
        <div className="md:w-1/2">
          <ResumeForm onChange={setResumeData} />
        </div>
        <div className="md:w-1/2">
          <ResumePreview data={resumeData} />
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default App;
