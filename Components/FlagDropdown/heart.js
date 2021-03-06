import React from 'react';
import Link from 'next/link';
import {FcGoogle} from "react-icons/fc";
import {ImFacebook2} from "react-icons/im";

const Heart = () => {
    return (
        <div>
            <div className="flex justify-center bg-white container mx-auto text-sm w-60">
                <div>
                    <div className="bg-gray-50 h-4 w-60"></div>
                    <div className="mt-6 flex justify-center items-center">
                        <div>
                            <div className="flex justify-center">
                                <div>
                                    <p className="font-bold"> Welcome to Newchic</p>
                                    <p><span className="text-red-600">$3</span> OFF For New Users</p>
                                    <Link href='/Login'>
                                        <a>
                                            <button className="mt-3 bg-gray-600 py-1.5 px-4 font-bold text-white">
                                                Sign in / Register
                                            </button>
                                        </a>
                                    </Link>

                                </div>
                            </div>
                            <p className="text-center">Or sign in :</p>
                            <div className="flex p-3 items-center justify-center gap-2 text-sm">
                                <div className="flex bg-gray-100 justify-center items-center gap-2 p-1"><FcGoogle
                                    size={20}/>Google
                                </div>
                                <div className="flex bg-gray-100 justify-center items-center gap-2 p-1"><ImFacebook2
                                    size={20} color="blue"/>Google
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Heart;