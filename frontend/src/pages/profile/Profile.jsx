import Heading from "../../components/heading/Heading";
import pfp from "../../assets/images/index";
import {UserRoundPen, Mail, Linkedin} from "lucide-react";

export default function Profile (){
    return(
         <div className="h-screen w-full flex flex-col gap-4 p-5 ">
           <Heading title="Profile" tagline="Manage your account settings and preferences "/>
           <div 
                className="h-40 flex gap-5 rounded-xl p-5  bg-gradient-to-br from-[#EFF6FF] to-[#ECFEFF] border border-[#DBEAFE] shadow-md shadow-[#DBEAFE]"
            >
                {/* profile */}
                <div className="h-full w-[10%] flex justify-center items-center ">
                    <div className="h-full w-full rounded-2xl p-2 bg-white ">
                        <img src={pfp.pfp6} alt="profile image" className="rounded-2xl h-full w-full" />
                    </div>
                </div>

                {/* data */}
                <div className="h-full w-[90%] flex flex-col justify-between gap-8 text-slate-400 ">
                    {/* Display name & edit pfp */}
                    <div className="h-[30%] w-full flex justify-between items-center  ">
                        <span className="text-xl font-medium text-gray-800">Aditya Thakor</span>
                        <span className="flex justify-center items-center bg-blue-500 py-2 px-2 text-white rounded-full cursor-pointer">
                                <UserRoundPen className="size-4"/>
                        </span>
                    </div>
                    {/* other data */}
                    <div className="h-[70%] w-full flex justify-between items-center">
                        <div className="flex flex-col gap-2">
                            <span className="hover:text-blue-500 cursor-pointer">@aditya_01</span>
                            <span className="font-medium text-slate-600 ">MERN stack developer</span>
                        </div>
                        <div className="text-sm flex flex-col gap-2">
                            <span className="flex items-center hover:text-blue-500 cursor-pointer gap-2">
                                <Mail className="size-4" />as@tracker.com</span>
                            <span className="flex items-center hover:text-blue-500 cursor-pointer gap-2"><Linkedin className="size-4" />@asmern_22</span>
                        </div>
                    </div>
                </div>
           </div>
        </div>
    )
}