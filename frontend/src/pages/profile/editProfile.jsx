import { ChevronLeft } from "lucide-react";
import i from "../../assets/images/index"
import { useRef, useState } from "react";
export default function EditProfile() {

    const fileInputRef = useRef(null);
    const [preview,setPreview]=useState('');

    const handleFileref = ()=>{
        fileInputRef.current.click();
    }

    const handleFile=(e)=>{
        const file = e.target.files[0];
        if (!file) return;

        const img = URL.createObjectURL(file);
        setPreview(img);
    }


    return( 
        <div className="h-screen w-full flex justify-center items-center">
            <div className="h-full w-full flex flex-col gap-5 p-5">
                <h1 className="flex items-center gap-1 cursor-pointer text-gray-500 font-medium hover:text-gray-800">
                    <span><ChevronLeft className="size-5"/></span>
                    <span>Back</span> 
                </h1>
                <div className="h-[90%] w-full flex flex-col gap-3 rounded-xl bg-white p-3">
                    <div className="h-10 w-full flex justify-between items-center">
                        <span className="text-xl font-semibold text-gray-800">Edit profile</span>
                        <button className="px-4 py-0.5 text-center bg-green-500 text-white rounded-lg font-medium">Save</button>
                    </div>

                    <div className="h-40 w-full flex gap-3 ">
                        {/* change profile img */}
                        <div className="h-full w-40 bg-transparent flex justify-center relative rounded-2xl overflow-hidden ">
                             <img src={preview || i.pfp6} alt="pfp" className="h-full w-full object-cover relative" />
                                    <input
                                            type="file"
                                            accept="image/*"
                                            ref={fileInputRef}
                                            onChange={handleFile}
                                            className="hidden"
                                    />
                             <button 
                                onClick={handleFileref}
                             className="w-full px-2 py-2 bg-blue-500/80 hover:bg-blue-500 font-medium text-white absolute bottom-0 ">
                                Change profile
                             </button>
                        </div>

                        <div className="h-full w-[calc(100%-10rem)] grid grid-cols-2  gap-4">
                                <div className="h-16 ">
                                    <label htmlFor="displayname" className="flex flex-col gap-1 text-gray-400">
                                        <span>Change display name : </span>
                                        <input value="Aditya Thakor" type="text" className="rounded-md p-2 border" />
                                    </label>
                                </div>
                                <div className="h-16 ">
                                    <label htmlFor="usename" className="flex flex-col gap-1 text-gray-400">
                                        <span>Change username : </span>
                                        <input value="@aditya_01" type="text" className="rounded-md p-2 border" />
                                    </label>
                                </div>
                                <div className="h-16 ">
                                    <label htmlFor="email" className="flex flex-col gap-1 text-gray-400">
                                        <span>Change email address : </span>
                                        <input value="as@tracker.com" type="text" className="rounded-md p-2 border" />
                                    </label>
                                </div>
                                <div className="h-16 ">
                                    <label htmlFor="role" className="flex flex-col gap-1 text-gray-400">
                                        <span>Change role : </span>
                                        <input value="MERN stack developer" type="text" className="rounded-md p-2 border" />
                                    </label>
                                </div>
                        </div>
                    </div>

                    <div className="h-[calc(100%-12.5rem)] flex flex-col gap-5 ">
                        <div> 
                            <label htmlFor="address" className="flex flex-col">
                                <span className="text-gray-400">Change Address :</span>
                                <textarea id="adrress" rows={2} className="border text-black rounded-md" />
                            </label>
                        </div>
                        <div className="grid grid-cols-2 gap-4">
                                 <div className="h-16 ">
                                    <label htmlFor="city" className="flex flex-col gap-1 text-gray-400">
                                        <span>Change city name : </span>
                                        <input id="city" value="Mehsana" type="text" className="rounded-md p-2 border" />
                                    </label>
                                </div>
                                <div className="h-16 ">
                                    <label htmlFor="state" className="flex flex-col gap-1 text-gray-400">
                                        <span>Change state  : </span>
                                        <input id="state" value="Gujrat" type="text" className="rounded-md p-2 border" />
                                    </label>
                                </div>
                                <div className="h-16 ">
                                    <label htmlFor="country" className="flex flex-col gap-1 text-gray-400">
                                        <span>Change country : </span>
                                        <input id="country" value="India" type="text" className="rounded-md p-2 border" />
                                    </label>
                                </div>
                                <div className="h-16 ">
                                    <label htmlFor="pincode" className="flex flex-col gap-1 text-gray-400">
                                        <span>Change role : </span>
                                        <input id="pincode" value="380010" type="text" className="rounded-md p-2 border" />
                                    </label>
                                </div>
                        </div>
                        <button className="bg-green-500/80 hover:bg-green-500 text-white font-medium py-1 rounded-lg">
                            Save Changes
                        </button>
                    </div>

                </div>
            </div>
        </div>
    )
}