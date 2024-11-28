import React from 'react';

const Banner = () => {
    return (
        <div>
            <div className="md:flex justify-between shadow-lg justify-items-center mt-6 pl-4">
                <div>
                    <h2 className="text-6xl font-bold">One Step <br />
                        Closer To Your
                        <br />
                        <spna className="text-violet-600">Dream Job</spna></h2>
                    <p className="w-96 mt-4 mb-4 text-[#757575]">Explore thousands of job opportunities with all the information you need. Its your future. Come find it. Manage all your job application from start to finish.</p>
                    <div>
                        <button className="btn btn-primary bg-gradient-to-r from-indigo-400">Get started</button>
                    </div>
                </div>
                <div>
                    <img className="w-96 " src="https://i.imghippo.com/files/HayD9094FM.png" alt="" />
                </div>

            </div>
        </div>
    );
};

export default Banner;