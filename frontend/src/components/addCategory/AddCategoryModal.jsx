import {  useEffect, useState } from "react";
import i from "../../assets/icons/index.js";
import { ChevronDown, ChevronUp } from "lucide-react";

const AddCategoryModal = ({ onClose }) => {
  const [name, setName] = useState("");
  const [icon, setIcon] = useState("");
  const [bgType, setBgType] = useState("solid");
  const [color1, setColor1] = useState("#4f46e5");
  const [color2, setColor2] = useState("");
  // const [showPreview, setShowPreview] = useState(false);

  const [showIcons, setShowIcons] = useState(false);

  const icons = [
    {
      id:1,
      name: "food",
      src: i.food
    },
    {
      id:2,
      name: "transportation",
      src: i.transportation
    },
    {
      id:3,
      name: "travel",
      src: i.travel
    },
    {
      id:4,
      name: "entertainment",
      src: i.entertainment
    },
    {
      id:5,
      name: "healthcare",
      src: i.health
    },
    {
      id:6,
      name: "education",
      src: i.education
    },
    {
      id:7,
      name: "train",
      src: i.train
    },
    {
      id:8,
      name: "bills",
      src: i.bill
    },
    {
      id:9,
      name: "shopping",
      src: i.shopping
    },
    {
      id:10,
      name: "category",
      src: i.categoryIcon
    },
    
  ]

  const selectedIcon = icons.filter(f=>f.name === icon)

  const cardBg =
    bgType === "solid"
      ? color1
      : `linear-gradient(135deg, ${color1}, ${color2})`;

    useEffect(()=>{},[selectedIcon])


  const handleCategoryCard = async()=>{

    const formData = new FormData();

    formData.append("name", name);
    formData.append("icon", icon);
    formData.append("bgType", bgType);

    bgType==="solid"?
     formData.append("color1", color1): 
     formData.append("color1", color1) , formData.append("color2", color2);
    
    for (const [key,value] of formData ) {
      console.log(key,value)
    }

    const post = await fetch("http://localhost:5000/category/addcategory",{
      method:'post',
      body:formData
    })
    console.log(await post.text());
    
  }

  return (
    <div className="h-screen fixed inset-0 z-50 flex items-center justify-center bg-black/40">
      <div className="h-4/5 w-[850px] rounded-xl bg-white shadow-xl flex overflow-auto">
        {/*Category data */}
        <div className="w-1/2 p-6 space-y-4">
          <h2 className="text-xl font-semibold">Add your Category</h2>

          {/* Categoryname */}
          <div>
            <label className="text-sm text-gray-600">Category Name</label>
            <input
              className="w-full mt-1 px-3 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              placeholder="ex. food, salary, bills "
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
          </div>

          {/* CategoryIcon */}
          <div>
            <label className="text-sm text-gray-600">Icon</label>
            
            <div className="h-auto w-full ">
              {showIcons ? (
                <div className="h-40 w-full px-2 border-2 rounded-lg flex flex-col">
                  <div className="h-12 w-full flex justify-between items-center px-2">
                    <span>Select Icon</span>{" "}
                    <span>
                      {" "}
                      <ChevronUp onClick={() => setShowIcons(false)} />{" "}
                    </span>
                  </div>
                  {/* icons */}
                  <div className="h-28 w-full grid grid-cols-5 gap-5 mb-5">
                   {
                    icons.map((ct)=>(
                      <span
                      key={ct.id}
                      onClick={() => {
                        setIcon(ct.name);
                      }}
                      className="size-10"
                    >
                      <img
                        src={ct.src}
                        alt="foodIcon"
                        className="h-full  w-full"
                      />
                    </span>
                    ))
                   }
                    {/* <span
                      onClick={() => {
                        setIcon(i.food);
                      }}
                      className="size-10"
                    >
                      <img
                        src={i.food}
                        alt="foodIcon"
                        className="h-full  w-full"
                      />
                    </span> */}

                    {/* <span
                      onClick={() => {
                        setIcon(i.transportation);
                      }}
                      className="size-10"
                    >
                      <img
                        src={i.transportation}
                        alt="foodIcon"
                        className="h-full  w-full"
                      />
                    </span>
                    <span onClick={()=>{setIcon(i.bill)}} className="size-10">
                      <img
                        src={i.bill}
                        alt="foodIcon"
                        className="h-full  w-full"
                      />
                    </span>
                    <span onClick={()=>{setIcon(i.entertainment)}} className="size-10">
                      <img
                        src={i.entertainment}
                        alt="foodIcon"
                        className="h-full  w-full"
                      />
                    </span>
                    <span onClick={()=>{setIcon(i.travel)}} className="size-10">
                      <img
                        src={i.travel}
                        alt="foodIcon"
                        className="h-full  w-full"
                      />
                    </span>
                    <span onClick={()=>{setIcon(i.train)}} className="size-10">
                      <img
                        src={i.train}
                        alt="foodIcon"
                        className="h-full  w-full"
                      />
                    </span>
                    <span onClick={()=>{setIcon(i.shopping)}} className="size-10">
                      <img
                        src={i.shopping}
                        alt="foodIcon"
                        className="h-full  w-full"
                      />
                    </span>
                    <span onClick={()=>{setIcon(i.health)}} className="size-10">
                      <img
                        src={i.health}
                        alt="foodIcon"
                        className="h-full  w-full"
                      />
                    </span>
                    <span onClick={()=>{setIcon(i.education)}} className="size-10">
                      <img
                        src={i.education}
                        alt="foodIcon"
                        className="h-full  w-full"
                      />
                    </span>
                    <span onClick={()=>{setIcon(i.categoryIcon)}} className="size-10">
                      <img
                        src={i.categoryIcon}
                        alt="foodIcon"
                        className="h-full  w-full"
                      />
                    </span> */}
                  </div>
                </div>
              ) : (
                <div className="h-12 w-full px-2 border-2 rounded-lg flex justify-between items-center">
                  <span>Select Icon</span>{" "}
                  <span>
                    {" "}
                    <ChevronDown onClick={() => setShowIcons(true)} />{" "}
                  </span>
                </div>
              )}
            </div>
          </div>

          {/* Background Type */}
          <div>
            <label className="text-sm text-gray-600">
              CategoryCard Background
            </label>

            <div className="flex gap-6 mt-2">
              <label className="flex items-center gap-2 cursor-pointer">
                <input
                  type="radio"
                  checked={bgType === "solid"}
                  onChange={() => setBgType("solid")}
                />
                Solid
              </label>

              <label className="flex items-center gap-2 cursor-pointer">
                <input
                  type="radio"
                  checked={bgType === "gradient"}
                  onChange={() => setBgType("gradient")}
                />
                Gradient
              </label>
            </div>
          </div>

          {/* Color Pickers */}
          <div className="flex gap-3">
            <input
              type="color"
              value={color1}
              onChange={(e) => setColor1(e.target.value)}
              className="h-10 w-16 cursor-pointer"
            />

            {bgType === "gradient" && (
              <input
                type="color"
                value={color2}
                onChange={(e) => setColor2(e.target.value)}
                className="h-10 w-16 cursor-pointer"
              />
            )}
          </div>

          {/* Buttons */}
          <div className="flex gap-3 pt-3">
            {/* <button
              onClick={() => setShowPreview(true)}
              className="px-4 py-2 rounded-md border hover:bg-gray-100"
            >
              Preview
            </button> */}

            <button 
              onClick={handleCategoryCard}
              className="px-4 py-2 w-full rounded-md bg-blue-600 text-white hover:bg-blue-700">
              Create Category
            </button>
          </div>

          <button
            onClick={onClose}
            className="text-sm text-red-500 hover:underline pt-2"
          >
            Close
          </button>
        </div>

        {/* Category card preview */}
        <div className="w-1/2 border-l flex items-center justify-center">
          <div className="w-3/4 h-1/2 border-2 border-dashed rounded-xl flex items-center justify-center">
           
              <div
                style={{ background: cardBg }}
                className="w-[90%] h-4/5 rounded-xl text-white flex flex-col items-center justify-evenly font-semibold p-2"
              >
                {/* <span className="text-2xl">{icon}</span>
                <p>{name || "Category Name"}</p> */}

                {/* category icon */}
                <div className="h-1/4  w-full">
                  <img src={selectedIcon.find(f=>f.name===icon)?.src || i.categoryIcon} alt={selectedIcon.name}className="h-full" />
                </div>

                {/* amount data */}
                <div className="h-[40%] w-full  ">
                  <span className="text-sm font-sans font-medium text-slate-200">
                    {name || "Category Name"}
                  </span>
                  <h3 className="h-full text-3xl  font-medium">Rs. 00000</h3>
                </div>

                

                {/* progress bar */}
                <div className="h-2 w-full rounded-xl bg-white/80  relative overflow-hidden">
                  <span
                    className="h-full w-1/4 rounded-xl absolute border left-0 "
                    style={{ background: cardBg }}
                  ></span>
                </div>
              </div>
          
          </div>
        </div>
      </div>
    </div>
  );
};

export default AddCategoryModal;
