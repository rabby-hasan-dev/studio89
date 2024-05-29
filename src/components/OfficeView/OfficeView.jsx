import Link from "next/link";

const OfficeView = () => {
    return (
        <div className='uppercase text-center mt-20 mb-10 p-10'>
            <h2 className="text-4xl my-2  text-white my-10 ">Office View</h2>
            <div className="flex justify-around gap-8 text-yellow-300 ">
                <div className="bg-slate-500 w-full py-20 rounded-lg hover:bg-blue-600 duration-300 ">
                    <Link href="/map"> <button className="hover:btn duration-300"> Map</button> </Link>

                </div>
                <div className="bg-slate-500  w-full py-20 rounded-lg hover:bg-blue-600  duration-300  ">
                    <h2>studio video</h2>
                </div>

            </div>
        </div>
    );
};

export default OfficeView;