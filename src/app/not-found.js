import Link from 'next/link';
 
const NotFound=()=> {
  return (
   <div className='p-40 my-10'> 
     <div className='flex flex-col justify-center items-center text-white'>
      <h2 className='text-4xl'>Not Found</h2>
      <p className='my-8'>Could not find requested resource . Please! </p>
      <Link href="/"> <button className='btn'>Return Home</button> </Link>
    </div>
   </div>
  )
}

export default NotFound;