import Heading from "../../components/heading/Heading";
import pf from "../../assets/images/index";
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
import { useContext, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import TransactionContext from "../../context/TransactionContext";

// Main function-----------------------------------------------------------------
export default function Profile() {
  const navigate = useNavigate();
  const {totalExpense,totalIncome}= useContext(TransactionContext);

  // const user = JSON.parse(localStorage.getItem("user"));
  const storedUser = localStorage.getItem("user");
  const user = storedUser ? JSON.parse(storedUser) : null;
  // console.log(user)
  
  const [etUser,setEtUser]= useState(null);
  const profile = etUser?.pfp;
  useEffect(() => {
      async function fetchUser() {
        await fetch("http://localhost:5000/usersdata/")
          .then((res) => res.json())
          .then((data) => {
            let usr = data.find((i) => i._id === user._id);
            // console.log(user);
            setEtUser(usr);
          })
          .catch((error) => {
            console.log("error at fetching userdata at dashboard", error);
          });
      }
      fetchUser()

    }, []);

    console.log("et-",etUser);
    
  // password hide&show ----------------------------------------------------
  const [hide, setHide] = useState(false);
  const showPassword = () => {
    return hide ? (
      <span className=" lg:tracking-widest">{etUser.password}</span>
    ) : (
      <span className="flex w-1/2 lg:w-auto">
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
  const [pass1, setPass1] = useState("");
  const [pass2, setPass2] = useState("");
  const [password, setPassword] = useState("");

  const changePassword = async () => {
    if (pass1 !== pass2 && pass1.length == 0 && pass2.length == 0) {
      return alert("password not metched!!");
    }
    setPassword(pass1);

    const formData = new FormData();
    formData.append("password", password);
    formData.append("userId", etUser._id);

    const updatePass = await fetch(
      "http://localhost:5000/usersdata/user/updatepassword",
      {
        method: "post",
        body: formData,
      }
    );

    const updated = await updatePass.json();

    if (updatePass.ok) {
      const updatePassword = { ...user, password };
      localStorage.setItem("user", JSON.stringify(updatePassword));
    } else {
      console.log("Something goes wrong!!!");
    }
  };

//---------------------------------------------------------------------  

  return (
    <div className="h-auto w-full flex flex-col gap-4 p-5 ">
      {/* Heading */}
      <Heading
        title="Profile"
        tagline="Manage your account settings and preferences "
      />
      {/* profile card */}
      <div className="h-auto lg:h-40 w-full flex gap-5 rounded-xl p-5  bg-gradient-to-br from-[#EFF6FF] to-[#ECFEFF] border border-[#DBEAFE] shadow-md shadow-[#DBEAFE]">
        {/* profile */}
        <div className="h-full w-auto lg:w-[10%] flex justify-center items-center ">
          <div className="h-full w-full rounded-2xl p-2 bg-white ">
            <img
              src={
                profile
                  ? `http://localhost:5000/profileImages/${profile}`
                  : pf.pfp1
              }
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
              {etUser?.fullname || etUser?.username.toUpperCase()}
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
                {etUser?.username}
              </span>
              <span className="font-medium text-slate-600 ">
                {/* MERN stack developer */}
                {etUser?.role}
              </span>
            </div>
            <div className="text-sm flex flex-col gap-2">
              <span className="flex items-center hover:text-blue-500 cursor-pointer gap-2">
                <Mail className="size-4" />
                {/* as@tracker.com */}
                {etUser?.email}
              </span>
              <span className="flex items-center hover:text-blue-500 cursor-pointer gap-2">
                <Linkedin className="size-4" />
                {/* @asmern_22 */}
                {etUser?.username}
              </span>
            </div>
          </div>
        </div>
      </div>
      {/* data cards */}
      <div className="h-auto w-full lg:h-32 rounded-xl grid grid-cols-2 lg:grid-cols-4 gap-4 ">
        {/* <div className="h-full w-full bg-white border rounded-xl" >  </div> */}
        <DataCard2
          name="Total balance"
          amount={totalIncome-totalExpense}
          icon={i.transaction}
          pr="12.5"
          prcolor="#16A34A"
        />
        <DataCard2
          name="Total expense"
          amount={totalExpense}
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
          amount={totalIncome}
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
          amount={totalIncome-totalExpense}
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
      <div className="h-auto lg:h-96 w-full flex flex-col lg:flex-row gap-4">
        <div className="h-full w-full lg:w-3/5 rounded-xl p-5 flex flex-col gap-5 lg:gap-14  bg-white">
          {/* heading */}
          <div className="h-6 flex justify-between items-center">
            <span className="text-lg font-medium text-gray-800">
              Personal details
            </span>
            <button
              className="flex items-center bg-blue-500 px-2 py-0.5 text-white rounded-lg text-sm gap-1"
              onClick={() => navigate("/profile/editprofile")}
            >
              <UserRoundPen className="size-4" />
              Edit
            </button>
          </div>

          {/* data */}
          <div className="h-auto grid grid-cols-3 lg:grid-cols-2 gap-5 lg:gap-10 ">

            <Userdata
              title="Full name"
              data={etUser?.fullname || etUser?.username.toUpperCase() || "not available"}
            />

            <Userdata title="Email address" data={etUser?.email || "not available"} />
            <Userdata title="Address" data={etUser?.address?.at || etUser?.address?.city || "not available"} />
            <Userdata title="State" data={etUser?.address?.state || "not available"} />
            <Userdata title="Country" data={etUser?.address?.country || "not available"} />
            <Userdata title="PIN" data={etUser?.address?.pincode || "not available"} />
          </div>
        </div>
        <div className="h-full w-full lg:w-2/5 rounded-xl p-5 flex flex-col gap-5 bg-white mb-20">
          <div className="h-6 flex items-center">
            <span className="text-lg font-medium text-gray-800">
              Accessibility
            </span>
          </div>
          <div className="h-full w-full flex flex-col gap-5">
            <div className="h-14 w-full flex items-center gap-5 border rounded-md shadow-sm px-4">
              <div className="h-full w-auto py-3 lg:py-0 lg:w-1/4 flex items-center gap-2 text-gray-700 text-lg ">
                <ShieldEllipsis className="size-5" />
                <span>Password</span>
              </div>
              <div className="h-auto w-[60%] lg:h-3/4 lg:w-3/4 flex items-center justify-between px-3 border rounded-lg">
                {/* <span>98243835</span> */}
                {showPassword()}
                <button onClick={() => setHide(!hide)}>
                  {hide ? <EyeOff /> : <Eye />}
                </button>
              </div>
            </div>

            <div className="h-auto lg:h-4/5 w-full  rounded-md ">
              {!visible ? (
                <div className="h-auto lg:h-1/5 w-full border flex justify-between items-center gap-5  rounded-md py-3 lg:py-0 px-4">
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
                      onChange={(e) => setPass1(e.target.value)}
                      className=" w-full border rounded-md p-2"
                    />
                  </span>
                  <span h-auto w-full>
                    <input
                      type="text"
                      placeholder="Confirm password"
                      value={pass2}
                      onChange={(e) => setPass2(e.target.value)}
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
