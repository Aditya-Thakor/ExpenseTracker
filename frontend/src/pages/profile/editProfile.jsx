import { ChevronLeft } from "lucide-react";
import i from "../../assets/images/index";
import { useEffect, useRef, useState } from "react";
import { useNavigate } from "react-router-dom";
export default function EditProfile() {
  const navigate = useNavigate();
  const user = JSON.parse(localStorage.getItem("user"));
//   useEffect(() => {}, [user]);


  const fileInputRef = useRef(null);
  const [preview, setPreview] = useState("");
  const [file, setFile] = useState(null);
  const [fullname, setFullName] = useState(user.fullname);
  const [username, setUsername] = useState(user.username);
  const [email, setEmail] = useState(user.email);
  const [role, setRole] = useState(user.role);

  // adrress
  const [at, setAt] = useState(user.address.at);
  const [city, setCity] = useState(user.address.city);
  const [state, setState] = useState(user.address.state);
  const [country, setCountry] = useState(user.address.country);
  const [pincode, setPincode] = useState(user.address.pincode);

  const handleFileref = () => {
    fileInputRef.current.click();
  };

  const handleFile = (e) => {
    const file = e.target.files[0];
    setFile(file);
    if (!file) return;

    const img = URL.createObjectURL(file);
    setPreview(img);
  };

  const editUser = async () => {
    const formData = new FormData();

    const address = {
      at,
      city,
      state,
      country,
      pincode,
    };

    formData.append("username", username);
    formData.append("email", email);
    formData.append("fullname", fullname);
    formData.append("role", role);
    formData.append("address", address);
    formData.append("userId", user._id);

    // for (const [key,value] of formData) {
    //     console.log(key,value);
    // }

    const editProfile = await fetch(
      "http://localhost:5000/usersdata/user/editprofile",
      {
        method: "post",
        body: formData,
      }
    );

    const updated = await editProfile.json();
    console.log(updated);

    if (editProfile.ok) {
      const updatedata = { ...user, username, email, fullname, role, address };
      localStorage.setItem("user", JSON.stringify(updatedata));
    } else {
      console.log("Something goes wrong!!!");
    }
  };

  return (
    <div className="h-screen w-full flex justify-center items-center">
      <div className="h-full w-full flex flex-col gap-5 p-5">
        <h1
          className="flex items-center gap-1 cursor-pointer text-gray-500 font-medium hover:text-gray-800"
          onClick={() => navigate("/profile")}
        >
          <span>
            <ChevronLeft className="size-5" />
          </span>
          <span>Back</span>
        </h1>
        <div className="h-[90%] w-full flex flex-col gap-3 rounded-xl bg-white p-3">
          <div className="h-10 w-full flex justify-between items-center">
            <span className="text-xl font-semibold text-gray-800">
              Edit profile
            </span>
            <button
              className="px-4 py-0.5 text-center bg-green-500 text-white rounded-lg font-medium"
              onClick={editUser}
            >
              Save
            </button>
          </div>

          <div className="h-40 w-full flex gap-3 ">
            {/* change profile img */}
            <div className="h-full w-40 bg-transparent flex justify-center relative rounded-2xl overflow-hidden ">
              <img
                src={preview || i.pfp1}
                alt="pfp"
                className="h-full w-full object-cover relative"
              />
              <input
                type="file"
                accept="image/*"
                ref={fileInputRef}
                onChange={handleFile}
                className="hidden"
              />
              <button
                onClick={handleFileref}
                className="w-full px-2 py-2 bg-blue-500/80 hover:bg-blue-500 font-medium text-white absolute bottom-0 "
              >
                Change profile
              </button>
            </div>

            <div className="h-full w-[calc(100%-10rem)] grid grid-cols-2  gap-4">
              <div className="h-16 ">
                <label
                  htmlFor="displayname"
                  className="flex flex-col gap-1 text-gray-400"
                >
                  <span>Change Full name : </span>
                  <input
                    placeholder={user.fullname}
                    value={fullname}
                    onChange={(e) => setFullName(e.target.value)}
                    type="text"
                    className="rounded-md p-2 border"
                  />
                </label>
              </div>
              <div className="h-16 ">
                <label
                  htmlFor="usename"
                  className="flex flex-col gap-1 text-gray-400"
                >
                  <span>Change username : </span>
                  <input
                    value={username}
                    placeholder={user.username}
                    onChange={(e) => setUsername(e.target.value)}
                    type="text"
                    className="rounded-md p-2 border"
                  />
                </label>
              </div>
              <div className="h-16 ">
                <label
                  htmlFor="email"
                  className="flex flex-col gap-1 text-gray-400"
                >
                  <span>Change email address : </span>
                  <input
                    placeholder={user.email}
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    type="text"
                    className="rounded-md p-2 border"
                  />
                </label>
              </div>
              <div className="h-16 ">
                <label
                  htmlFor="role"
                  className="flex flex-col gap-1 text-gray-400"
                >
                  <span>Change role : </span>
                  <input
                    placeholder={user.role}
                    value={role}
                    onChange={(e) => setRole(e.target.value)}
                    type="text"
                    className="rounded-md p-2 border"
                  />
                </label>
              </div>
            </div>
          </div>

          <div className="h-[calc(100%-12.5rem)] flex flex-col gap-5 ">
            <div>
              <label htmlFor="address" className="flex flex-col">
                <span className="text-gray-400">Change Address :</span>
                <textarea
                  id="adrress"
                  rows={2}
                  className="border text-black rounded-md"
                  value={at}
                  onChange={(e) => setAt(e.target.value)}
                />
              </label>
            </div>
            <div className="grid grid-cols-2 gap-4">
              <div className="h-16 ">
                <label
                  htmlFor="city"
                  className="flex flex-col gap-1 text-gray-400"
                >
                  <span>Change city name : </span>
                  <input
                    id="city"
                    type="text"
                    value={city}
                    onChange={(e) => setCity(e.target.value)}
                    className="rounded-md p-2 border"
                  />
                </label>
              </div>
              <div className="h-16 ">
                <label
                  htmlFor="state"
                  className="flex flex-col gap-1 text-gray-400"
                >
                  <span>Change state : </span>
                  <input
                    id="state"
                    type="text"
                    value={state}
                    onChange={(e) => setState(e.target.value)}
                    className="rounded-md p-2 border"
                  />
                </label>
              </div>
              <div className="h-16 ">
                <label
                  htmlFor="country"
                  className="flex flex-col gap-1 text-gray-400"
                >
                  <span>Change country : </span>
                  <input
                    id="country"
                    type="text"
                    value={country}
                    onChange={(e) => setCountry(e.target.value)}
                    className="rounded-md p-2 border"
                  />
                </label>
              </div>
              <div className="h-16 ">
                <label
                  htmlFor="pincode"
                  className="flex flex-col gap-1 text-gray-400"
                >
                  <span>Change pincode : </span>
                  <input
                    id="pincode"
                    type="text"
                    value={pincode}
                    onChange={(e) => setPincode(e.target.value)}
                    className="rounded-md p-2 border"
                  />
                </label>
              </div>
            </div>
            <button
              className="bg-green-500/80 hover:bg-green-500 text-white font-medium py-1 rounded-lg"
              onClick={editUser}
            >
              Save Changes
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
