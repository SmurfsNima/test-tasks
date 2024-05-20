import React from 'react'
import PersonIcon from '@mui/icons-material/Person4';
import PhoneIcon from '@mui/icons-material/Phone';
import EmailIcon from '@mui/icons-material/Email';

interface UserCardProps {
    user: {
        firstName : string,
        lastName : string,
        phoneNumber : number,
        email : string,
    };
  }
export const UserCard = ({user} : UserCardProps) => {
    const {firstName , lastName , phoneNumber , email} = user
  return (
    <div className=' max-sm:w-full shadow-2xl text-gray-600 border  rounded-lg flex flex-col gap-4 px-3  md:px-6 py-3 '>
        <div className='flex gap-2 items-center'>
        <PersonIcon color='action' />
        <h1 className='text-lg lg:text-2xl  md:text-xl font-bold'>{firstName} {lastName}</h1>
        </div>
       
        <div className='flex items-center gap-2'>
           <PhoneIcon />
            <p className='text-lg'>{phoneNumber}</p>
        </div>
        <div className='flex items-center gap-2'>
            <EmailIcon />
            <p className='text-xl'>{email}</p>
        </div>
        <div>
            
        </div>
    </div>
  )
}
