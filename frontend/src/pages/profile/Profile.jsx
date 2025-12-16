import Heading from "../../components/heading/Heading";
import pfp from "../../assets/images/index";
import {
  UserRoundPen,
  Mail,
  Linkedin,
  ShieldEllipsis,
  Eye,
  EyeOff,
  KeyRound,
  ChevronDown,
  Dot,
  ChevronUp,
} from "lucide-react";

import DataCard2 from "../../components/Income-expense-Card/DataCard2";
import i from "../../assets/icons/index";
import Userdata from "./Data";
import { useState } from "react";
import { useNavigate } from "react-router-dom";


export default function Profile() {
  const navigate = useNavigate();

  const user = JSON.parse(localStorage.getItem("user"));
  // console.log(user);
  
  // password hide&show
  const [hide, setHide] = useState(false);
  const showPassword = () => {
    return hide ? (
      <span className="tracking-widest">{user.password}</span>
    ) : (
      <span className="flex">
        <Dot />
        <Dot />
        <Dot />
        <Dot />
        <Dot />
        <Dot />
        <Dot />
        <Dot />
      </span>
    );
  };
  // ------------------------------------------------

  // change password
  const [visible, setVisible] = useState(false);
  const [pass1, setPass1]=useState("");
  const [pass2, setPass2]= useState("");
  const [password, setPassword]=useState("")

  const changePassword = async()=>{

    if(pass1!==pass2 && pass1.length==0 && pass2.length==0){
      return alert("password not metched!!")
    }setPassword(pass1)

    const formData = new FormData();
    formData.append("password", password)
    formData.append("userId", user._id)

    const updatePass = await fetch('http://localhost:5000/usersdata/user/updatepassword',{
      method:'post',
      body: formData
    })

    const updated = await updatePass.json();

    if(updatePass.ok){
      const updatePassword = {...user, password}
      localStorage.setItem("user", JSON.stringify(updatePassword));
    }else {
      console.log("Something goes wrong!!!");
    }

  }

  return (
    <div className="h-auto w-full flex flex-col gap-4 p-5 ">
      {/* Heading */}
      <Heading
        title="Profile"
        tagline="Manage your account settings and preferences "
      />
      {/* profile card */}
      <div className="h-40 flex gap-5 rounded-xl p-5  bg-gradient-to-br from-[#EFF6FF] to-[#ECFEFF] border border-[#DBEAFE] shadow-md shadow-[#DBEAFE]">
        {/* profile */}
        <div className="h-full w-[10%] flex justify-center items-center ">
          <div className="h-full w-full rounded-2xl p-2 bg-white ">
            <img
              src={pfp.pfp6}
              alt="profile image"
              className="rounded-2xl h-full w-full"
            />
          </div>
        </div>

        {/* data */}
        <div className="h-full w-[90%] flex flex-col justify-between gap-8 text-slate-400 ">
          {/* Display name & edit pfp */}
          <div className="h-[30%] w-full flex justify-between items-center  ">
            <span className="text-xl font-medium text-gray-800">
              {/* Aditya Thakor */}
              {user.fullname}
            </span>
            <span
              onClick={() => navigate("/profile/editprofile")}
              className="flex justify-center items-center bg-blue-500 py-2 px-2 text-white rounded-full cursor-pointer"
            >
              <UserRoundPen className="size-4" />
            </span>
          </div>
          {/* other data */}
          <div className="h-[70%] w-full flex justify-between items-center">
            <div className="flex flex-col gap-2">
              <span className="hover:text-blue-500 cursor-pointer">
                {/* @aditya_01 */}
                {user.username}
              </span>
              <span className="font-medium text-slate-600 ">
                {/* MERN stack developer */}
                {user.role}
              </span>
            </div>
            <div className="text-sm flex flex-col gap-2">
              <span className="flex items-center hover:text-blue-500 cursor-pointer gap-2">
                <Mail className="size-4" />
                {/* as@tracker.com */}
                {user.email}
              </span>
              <span className="flex items-center hover:text-blue-500 cursor-pointer gap-2">
                <Linkedin className="size-4" />
                {/* @asmern_22 */}
                {user.username}
              </span>
            </div>
          </div>
        </div>
      </div>
      {/* data cards */}
      <div className="h-32 rounded-xl grid grid-cols-4 gap-4 ">
        {/* <div className="h-full w-full bg-white border rounded-xl" >  </div> */}
        <DataCard2
          name="Total balance"
          amount="38,000"
          icon={i.transaction}
          pr="12.5"
          prcolor="#16A34A"
        />
        <DataCard2
          name="Total expense"
          amount="87,000"
          icon={i.expense}
          pr="8.2"
          prcolor="#DC2626"
          bgfrom="#FEF2F2"
          bgto="#FFF7ED"
          ibgfrom="#EF4444"
          ibgto="#F97316"
          border="#FEE2E2"
          shadow="#FEE2E2"
        />
        <DataCard2
          name="Total income"
          amount="1,22,000"
          icon={i.income}
          pr="9.1"
          prcolor="#16A34A"
          bgfrom="#F0FDF4"
          bgto="#ECFDF5"
          ibgfrom="#22C55E"
          ibgto="#10B981"
          border="#DCFCE7"
          shadow="#DCFCE7"
        />
        <DataCard2
          name="Saving this month"
          amount="34,000"
          icon={i.savingIcon}
          pr="28.3"
          prcolor="#16A34A"
          bgfrom="#F0FDF4"
          bgto="#ECFDF5"
          ibgfrom="#22C55E"
          ibgto="#10B981"
          border="#DCFCE7"
          shadow="#DCFCE7"
        />
      </div>

      {/*Account Details */}
      <div className="h-96 w-full flex gap-4">
        <div className="h-full w-3/5 rounded-xl p-5 flex flex-col gap-14  bg-white">
          {/* heading */}
          <div className="h-6 flex justify-between items-center">
            <span className="text-lg font-medium text-gray-800">
              Personal details
            </span>
            <button
               className="flex items-center bg-blue-500 px-2 py-0.5 text-white rounded-lg text-sm gap-1"
               onClick={()=>navigate('/profile/editprofile')}
            >
              <UserRoundPen className="size-4" />
              Edit
            </button>
          </div>

          {/* data */}
          <div className="h-auto  grid grid-cols-2 gap-10 ">
            {/* <div className="flex flex-col">
                            <span className="text-sm text-gray-400 font-lato font-medium ">Full name</span>
                            <span className="text-lg font-medium text-gray-800">Aditya Thakor</span>
                        </div> */}

            <Userdata title="Full name" data={user.fullname} />

            <Userdata title="Email address" data={user.email} />
            <Userdata title="Address" data={"tcp india, Mehsana"} />
            <Userdata title="State" data="Gujarat" />
            <Userdata title="Country" data="India" />
            <Userdata title="PIN" data="380010" />
          </div>
        </div>
        <div className="h-full w-2/5 rounded-xl p-5 flex flex-col gap-5 bg-white">
          <div className="h-6 flex items-center">
            <span className="text-lg font-medium text-gray-800">
              Accessibility
            </span>
            {/* <ShieldEllipsis /> */}
          </div>
          <div className="h-full w-full flex flex-col gap-5">
            <div className="h-14 w-full flex items-center gap-5 border rounded-md shadow-sm px-4">
              <div className="h-full w-1/4 flex items-center gap-2 text-gray-700 text-lg ">
                <ShieldEllipsis />
                <span>Password</span>
              </div>
              <div className="h-3/4 w-3/4 flex items-center justify-between px-3 border rounded-lg">
                {/* <span>98243835</span> */}
                {showPassword()}
                <button onClick={() => setHide(!hide)}>
                  {hide ? <EyeOff /> : <Eye />}
                </button>
              </div>
            </div>

            <div className="h-4/5 w-full  rounded-md ">
              {visible ? (
                <div className="h-1/5 w-full border flex justify-between items-center gap-5  rounded-md  px-4">
                  <div className="h-full w-4/5 flex items-center gap-3 text-gray-700 text-lg ">
                    <KeyRound className="size-5" />
                    <span>Change password</span>
                  </div>
                  <div className="h-4/5 flex items-center ">
                    <button onClick={() => setVisible(!visible)}>
                      <ChevronDown />
                    </button>
                  </div>
                </div>
              ) : (
                <div className="h-full w-full border flex flex-col gap-3 justify-between  rounded-md  p-4">
                  <div className="h-1/5 w-full flex justify-between items-center gap-5  rounded-md mb-2 ">
                    <div className="h-full w-4/5 flex items-center gap-3 text-gray-700 text-lg ">
                      <KeyRound className="size-5" />
                      <span>Change password</span>
                    </div>
                    <div className="h-4/5 flex items-center ">
                      <button onClick={() => setVisible(!visible)}>
                        <ChevronUp />
                      </button>
                    </div>
                  </div>
                  <span h-auto w-full>
                    <input
                      type="text"
                      placeholder="New password"
                      value={pass1}
                      onChange={(e)=>setPass1(e.target.value)}
                      className=" w-full border rounded-md p-2"
                    />
                  </span>
                  <span h-auto w-full>
                    <input
                      type="text"
                      placeholder="Confirm password"
                      value={pass2}
                      onChange={(e)=>setPass2(e.target.value)}
                      className=" w-full border rounded-md p-2"
                    />
                  </span>
                  <button 
                    className="w-full text-white font-medium bg-green-500 hover:bg-green-600 py-2 rounded-md"
                    onClick={changePassword}
                  >
                    Change password
                  </button>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
