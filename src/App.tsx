import React from 'react';
import './App.css';
import { CustomButtons } from './components/CustomButtons';
import { TextFields } from './components/TextFields';
import { UserCard } from './components/UserCard';

function App() {
  const user = {
    firstName : 'Nima',
    lastName : 'sadeghi',
    phoneNumber : 9907499672,
    email : 'sadeghinima090@gmail.com'
  }
  return (
    <main className="max-w-[1440px] h-[100vh]  mx-auto overflow-hidden px-4 sm:px-6 py-4 ">
    <div className='flex flex-wrap gap-2'>
      <CustomButtons text='red' otherClasses='bg-red-500 text-[16px]' />
      <CustomButtons text='blue' otherClasses='bg-blue-500 text-[18px]'/>
    </div>
    <TextFields/>
    <div className='flex max-sm:justify-center w-full'>
      <UserCard user={user}  />
    </div>
    </main>
  );
}

export default App;
