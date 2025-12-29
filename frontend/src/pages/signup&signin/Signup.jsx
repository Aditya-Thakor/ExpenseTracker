import { useState } from "react";
import img from "../../assets/images/index";
import {useNavigate} from "react-router-dom"

export default function Signup() {
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const navigate = useNavigate();

  const handleUser = async () => {
    const formData = new FormData();
    formData.append("username", username);
    formData.append("email", email);
    formData.append("password", password);

    // for (let [key, value] of formData.entries()) {
    //   console.log(key, value);
    // }

    const postData = await fetch ('http://localhost:5000/usersdata',{
      method:'post',
      body:formData
    })

    if(postData.ok){
      navigate('/signin'); // add it in set time out if mongodb give invalit email or pass.
    }
    
    // console.log(await postData.text());
    
  };

  return (
    <div className="h-screen w-full bg-[#F5F8FF] flex justify-center items-center font-lato">
      <div className="h-[90%] lg:h-3/4 w-4/5 flex flex-col lg:flex-row gap-5 lg:gap-10 ">
        <div className="h-1/2 sm:h-2/5 lg:h-full w-full lg:w-2/5 flex flex-col sm:flex-row lg:flex-col items-center lg:items-start text-center lg:text-start ">
          <div className="lg:h-1/4 w-full sm:w-1/2 lg:w-full text-[#1D3E6C] text-3xl sm:text-4xl lg:text-5xl xl:text-6xl leading-tight  font-semibold">
            <h1>Track Smarter.</h1>
            <h1>Spend Better.</h1>
          </div>
          <div className="h-3/4 lg:pt-10 ">
            <img src={img.signup} alt="signinImg" className="h-full  " />
          </div>
        </div>
        <div className="h-full sm:h-auto lg:w-3/5  flex flex-col gap-2 ">
          <span className="text-[#567AAC] text-center  text-lg font-normal">
            Sign Up and Master Your Money
          </span>
          <div className="h-full w-full bg-indigo-300 p-[2px] rounded-xl bg-gradient-to-r from-[#3B82F6] to-[#06B6D4] shadow-lg shadow-slate-500">
            <div className="h-full flex flex-col gap-5 rounded-xl bg-white/90 p-4">
              <div className="flex flex-col">
                <label htmlFor="username" className="text-gray-600">
                  Username
                </label>
                <input
                  id="username"
                  type="text"
                  className="border border-gray-300 rounded-lg p-2 focus:outline-blue-500 text-blue-700"
                  value={username}
                  onChange={(e) => {
                    setUsername(e.target.value);
                  }}
                />
              </div>
              <div className="flex flex-col">
                <label htmlFor="email" className="text-gray-600">
                  Email
                </label>
                <input
                  id="email"
                  type="email"
                  className="border border-gray-300 rounded-lg p-2 focus:outline-blue-500 text-blue-700"
                  value={email}
                  onChange={(e) => {
                    setEmail(e.target.value);
                  }}
                />
              </div>
              <div className="flex flex-col">
                <label htmlFor="password" className="text-gray-600">
                  Password
                </label>
                <input
                  id="password"
                  type="password"
                  className="border border-gray-300 rounded-lg p-2 focus:outline-blue-500 text-blue-700"
                  value={password}
                  onChange={(e) => {
                    setPassword(e.target.value);
                  }}
                />
              </div>
              <button
                className="bg-gradient-to-br  from-[#3B82F6] to-[#06B6D4]  p-3 rounded-lg text-xl text-white font-normal mt-5 hover:bg-gradient-to-tl hover:font-bold"
                onClick={handleUser}
              >
                SignUp
              </button>
              <div className="text-gray-600 mt-5">
                <span className="flex gap-2 text-xs">
                  Already have an Account?
                  <span 
                    className="font-semibold underline text-blue-900 cursor-pointer hover:font-bold hover:text-sm hover:text-blue-700"
                    onClick={()=>navigate('/signin')}
                  >
                    SignIn
                  </span>
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
