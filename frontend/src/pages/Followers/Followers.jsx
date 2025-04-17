import React from 'react'
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Button } from "@/components/ui/button"

function Followers() {
  return (
    <>
    <div className='flex m-4  justify-between'>
   <div className='flex'>
   <Avatar className="w-10 h-10    ">
  <AvatarImage src="https://github.com/shadcn.png" />
  <AvatarFallback>CN</AvatarFallback>
</Avatar>
<div>
<div className='text-white ml-4 mt-1 text-lg '>
    srishty kumari
   </div>
   <div className='text-gray-700 ml-4  text-lg '>
    @gmail.com
   </div>
   <div className='text-white ml-4 mt-1 text-m'>
   Current MCA student passionate about coding and technology. Proficient in javascript,React js typescript .Actively engaging in real-world challenges on platforms like HackerRank.
   </div>
</div>
   </div>
   
   
   <div className="flex justify-end  mt-2">
  <Button className="bg-transparent border border-white text-white hover:bg-white hover:text-black rounded-2xl">
    Followers
  </Button>
</div>

      
    </div>
    
    <div className='flex m-4  justify-between'>
   <div className='flex'>
   <Avatar className="w-10 h-10    ">
  <AvatarImage src="https://github.com/shadcn.png" />
  <AvatarFallback>CN</AvatarFallback>
</Avatar>
<div>
<div className='text-white ml-4 mt-1 text-lg '>
    srishty kumari
   </div>
   <div className='text-gray-700 ml-4  text-lg '>
    @gmail.com
   </div>
   <div className='text-white ml-4 mt-1 text-m'>
   Current MCA student passionate about coding and technology. Proficient in javascript,React js typescript .Actively engaging in real-world challenges on platforms like HackerRank.
   </div>
</div>
   </div>
   
   
   <div className="flex justify-end  mt-2">
  <Button className="bg-transparent border border-white text-white hover:bg-white hover:text-black rounded-2xl">
  Followers
  </Button>
</div>

      
    </div>


    <div className='flex m-4  justify-between'>
   <div className='flex'>
   <Avatar className="w-10 h-10    ">
  <AvatarImage src="https://github.com/shadcn.png" />
  <AvatarFallback>CN</AvatarFallback>
</Avatar>
<div>
<div className='text-white ml-4 mt-1 text-lg '>
    srishty kumari
   </div>
   <div className='text-gray-700 ml-4  text-lg '>
    @gmail.com
   </div>
   <div className='text-white ml-4 mt-1 text-m'>
   Current MCA student passionate about coding and technology. Proficient in javascript,React js typescript .Actively engaging in real-world challenges on platforms like HackerRank.
   </div>
</div>
   </div>
   
   
   <div className="flex justify-end  mt-2">
  <Button className="bg-transparent border border-white text-white hover:bg-white hover:text-black rounded-2xl">
  Followers
  </Button>
</div>

      
    </div>

    </>
  )
}

export default Followers
