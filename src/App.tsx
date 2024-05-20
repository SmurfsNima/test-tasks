import React from 'react';
import './App.css';
import { CustomButtons } from './components/CustomButtons';

function App() {
  return (
    <main className="max-w-[1440px] mx-auto overflow-hidden  px-16 sm:px-6 py-4 ">
    <div className='flex gap-2'>
      <CustomButtons text='red' otherClasses='bg-red-500 text-[16px]' />
      <CustomButtons text='blue' otherClasses='bg-blue-500 text-[18px]'/>
    </div>
   
   
   
    </main>
  );
}

export default App;
