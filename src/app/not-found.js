import Link from 'next/link';
 
const NotFound=()=> {
  return (
    <div className='text-center'>
      <h2>Not Found</h2>
      <p>Could not find requested resource . Please! </p>
      <Link href="/"> <button className='btn'>Return Home</button> </Link>
    </div>
  )
}

export default NotFound;