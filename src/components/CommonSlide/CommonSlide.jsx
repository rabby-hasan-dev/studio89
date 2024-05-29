'use client'
import './CommonSlide';
const CommonSlide = () => {
    return (
        <div className="p-20">
            <div className="hero  h-[400px] rounded-2xl" >
                <div className="hero-overlay bg-opacity-60"></div>
                <div className="hero-content text-center text-neutral-content">
                    <div >
                        <h1 className="mb-5 text-5xl font-bold uppercase">Services</h1>
                        <div>
                            <ul className="flex uppercase items-center justify-between space-x-4">
                                <li>live streaming</li>
                                <li>prodcast</li>
                                <li>social media content</li>
                                <li>edtech classroom</li>
                                <li>photo  shoot</li>
                            </ul>
                        </div>

                    </div>
                </div>
            </div>
        </div>
    );
};

export default CommonSlide;
