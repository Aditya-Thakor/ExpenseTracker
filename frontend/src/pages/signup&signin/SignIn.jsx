import { useState } from "react";
import img from "../../assets/images/index";
import { useNavigate } from "react-router-dom";
export default function SignIn() {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const formData = new FormData();
  formData.append("email", email);
  formData.append("password", password);

  const handleSignIn = async () => {
    const userLogin = await fetch("http://localhost:5000/signin", {
      method: "post",
      body: formData,
    });
    // console.log(await userLogin.text());

    const userData = await userLogin.json();
    // console.log('user data is ', userData);

    if (userLogin.ok) {
      localStorage.setItem("user", JSON.stringify(userData.userLog));
      navigate("/");
    } else {
      alert(userData.message);
    }
  };

  return (
    <div className="h-screen w-full bg-[#F5F8FF] flex justify-center items-center font-lato">
      <div className="h-[90%] lg:h-3/4 w-4/5 flex flex-col lg:flex-row gap-5 lg:gap-10 ">
        <div className="h-1/2 sm:h-2/5 lg:h-full w-full lg:w-2/5 flex flex-col sm:flex-row lg:flex-col items-center lg:items-start text-center lg:text-start ">
          <div className="lg:h-1/4 w-full sm:w-1/2 lg:w-full text-[#1D3E6C] text-3xl sm:text-4xl lg:text-5xl leading-tight text-center font-semibold">
            <h1>Welcome Back!</h1>
            <h1 className="text-2xl sm:text-3xl lg:text-4xl mt-5 ">
              Your financial clarity awaits.
            </h1>
          </div>
          <div className="h-3/4 lg:pt-10 ">
            <img src={img.signin} alt="signinImg" className="h-full w-full " />
          </div>
        </div>
        <div className="h-full sm:h-auto lg:w-3/5  flex flex-col gap-2 ">
          <span className="text-[#567AAC] text-center  text-lg font-normal">
            Let’s Track Smarter.
          </span>
          <div className="h-full w-full bg-indigo-300 p-[2px] rounded-xl bg-gradient-to-r from-[#3B82F6] to-[#06B6D4] shadow-lg shadow-slate-500">
            <div className="h-full flex flex-col gap-10 rounded-xl bg-white/90 p-4">
              <div className="flex flex-col">
                <label htmlFor="email" className="text-gray-600">
                  Email
                </label>
                <input
                  id="email"
                  type="email"
                  className="border border-gray-300 rounded-lg p-2 focus:outline-blue-500 text-blue-700"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
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
                  onChange={(e) => setPassword(e.target.value)}
                />
              </div>
              <button
                className="bg-gradient-to-br  from-[#3B82F6] to-[#06B6D4]  p-3 rounded-lg text-xl text-white font-normal mt-5 hover:bg-gradient-to-tl hover:font-bold"
                onClick={handleSignIn}
              >
                SignIn
              </button>
              <div className="w-full  text-gray-600 mt-5">
                <span className="flex gap-2 justify-center text-xs">
                  New here?
                  <span
                    className="font-semibold underline text-blue-900 cursor-pointer hover:font-bold  hover:text-blue-700"
                    onClick={() => navigate("/signup")}
                  >
                    Register Now
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
