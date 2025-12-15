import { useState } from "react";
import i from "../../assets/icons/index.js"
import {ChevronDown,ChevronUp} from "lucide-react"

const AddCategoryModal = ({ onClose }) => {
  const [name, setName] = useState("");
  const [icon, setIcon] = useState("📁");
  const [bgType, setBgType] = useState("solid");
  const [color1, setColor1] = useState("#4f46e5");
  const [color2, setColor2] = useState("#22c55e");
  const [showPreview, setShowPreview] = useState(false);

  const [showIcons, setShowIcons]= useState(false)

  const cardBg =
    bgType === "solid"
      ? color1
      : `linear-gradient(135deg, ${color1}, ${color2})`;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/40">
      <div className="w-[850px] rounded-xl bg-white shadow-xl flex overflow-hidden">
        
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
            {/* <input
              className="w-full mt-1 px-3 py-2 border rounded-md"
              placeholder="🍔"
              value={icon}
              onChange={(e) => setIcon(e.target.value)}
            /> */}
            <div className="h-auto w-3/4 ">
               {
                showIcons? 
                  <div className="h-40 w-full px-2 border-2 rounded-lg flex flex-col"> 
                    <div className="h-12 w-full flex justify-between items-center px-2">
                      <span>Select Icon</span> <span> <ChevronUp onClick={()=>setShowIcons(false)} /> </span>
                    </div>  
                    <div className="h-28 w-full grid grid-cols-5 gap-2">
                      <span className="size-10 bg-black"></span>
                      <span className="size-10 bg-black"></span>
                      <span className="size-10 bg-black"></span>
                      <span className="size-10 bg-black"></span>
                      <span className="size-10 bg-black"></span>
                      <span className="size-10 bg-black"></span>
                      <span className="size-10 bg-black"></span>
                      <span className="size-10 bg-black"></span>
                      <span className="size-10 bg-black"></span>
                      <span className="size-10 bg-black"></span>
                    </div>
                  </div> :
                  <div className="h-12 w-full px-2 border-2 rounded-lg flex justify-between items-center"> 
                    <span>Select Icon</span> <span> <ChevronDown onClick={()=>setShowIcons(true)} /> </span> 
                  </div>
               }
                
                
            </div>
          </div>

          {/* Background Type */}
          <div>
            <label className="text-sm text-gray-600">CategoryCard Background</label>

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
            <button
              onClick={() => setShowPreview(true)}
              className="px-4 py-2 rounded-md border hover:bg-gray-100"
            >
              Preview
            </button>

            <button className="px-4 py-2 rounded-md bg-blue-600 text-white hover:bg-blue-700">
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
            {showPreview && (
              <div
                style={{ background: cardBg }}
                className="w-4/5 h-3/4 rounded-xl text-white flex flex-col items-center justify-evenly font-semibold"
              >
                {/* <span className="text-2xl">{icon}</span>
                <p>{name || "Category Name"}</p> */}
                
                      {/* category icon */}
                      <div className="h-1/4 border w-full">
                        <img src={icon} alt="categoryIcon" className="h-full" />
                      </div>
                
                      {/* amount data */}
                      <div className="h-[40%] w-full border ">
                        <span className="text-sm font-sans font-medium text-slate-200">{name || "Category Name"}</span>
                        <h3 className="h-full text-3xl  font-medium">
                          Rs. 00000
                        </h3>
                      </div>
                
                      {/*  transaction data
                      <div className="h-12 w-full flex flex-col gap-3">
                        <div className="h-1/2 w-full flex items-center gap-3 ">
                          <span className="h-full">
                            <img src={i.tmini} alt="transaction_icon" className="h-full" />
                          </span>
                          <span className="text-xs font-sans text-gray-400">
                            {transactions} transaction
                          </span>
                        </div>
                        <div className="h-1/2 flex items-center gap-2 text-sm ">
                            <span className="h-full px-3 bg-white rounded-xl flex items-center gap-3">
                                <img src={i.aup} alt="arrow up" className="h-1/2" />
                                21%
                            </span>
                            <span className="text-slate-700 font-lato">of  Total</span>
                        </div>
                      </div> */}
                
                      {/* progress bar */}
                      <div className="h-2 w-full rounded-xl bg-white/80  relative overflow-hidden">
                        <span 
                            className="h-full w-1/4 rounded-xl absolute border left-0 "
                            style={{ background: cardBg }}
                        ></span>
                      </div>
                    </div>
              
            )}
          </div>
        </div>

      </div>
    </div>
  );
};

export default AddCategoryModal;
