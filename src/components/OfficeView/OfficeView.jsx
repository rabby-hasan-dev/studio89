import Map from "../Map/Map";

const OfficeView = () => {
    return (
        <div className='uppercase text-center m-20 p-10'>
            <h2 className="text-4xl font-bold  my-12 ">Office View</h2>
            <div className="flex justify-around gap-8 text-yellow-300 ">
                <div className="bg-slate-500 w-full  rounded-lg hover:bg-blue-600 duration-300 ">

                    <Map></Map>

                </div>
                <div className="bg-slate-500  w-full  rounded-lg hover:bg-blue-600  duration-300  ">
                    <h2 className="text-xl">studio video</h2>
                </div>

            </div>
        </div>
    );
};

export default OfficeView;