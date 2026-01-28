import { EllipsisVertical, NotebookPen, Trash2 } from "lucide-react";
import { useState } from "react";
import DeleteModal from "../modals/deleteModal/DeleteModal";
import EditModal from "../modals/editModal/EditModal";

export default function TransactionCard({type,icon, tag, date, amount,bg, category="Other"}) {

  const [hidden,setHidden]= useState(false);
  const [showDeleteModal,setShowDeleteMdl]=useState(false);
  const [showEditModal, setShowEditMdl]=useState(false);

  return (
    <div 
        className={`h-auto max-h-20 w-full flex justify-between items-center px-5 py-3 rounded-xl border shadow-sm
        
        ${bg==="whitebg"? "bg-white border-0 " : ""}
        `}
        onClick={()=>hidden? setHidden(false):''}
    >
      <div className="flex items-center gap-4">
        <div 
          className={`size-7 lg:size-10 flex justify-center items-center rounded-lg
              ${type==="expense"? "bg-red-500":"bg-green-500" }
          `}
          
        >
          <img src={icon} alt="category" className="size-5 lg:size-auto" />
        </div>
        <div className="flex flex-col ">
          <h3 className="text-slate-800 text-wrap font-sans font-semibold text-sm lg:text-lg ">
            {tag}
          </h3>
          <p className="flex  gap-2 items-baseline ">
            <span className="text-xs lg:text-sm font-sans font-medium text-slate-500">{category}</span>
            <span className="text-[8px] lg:text-xs text-slate-400">{date}</span>
          </p>
        </div>
      </div>
      <div className=" relative flex items-center gap-3">
        <h2 
            className={`text-md lg:text-xl cursor-default ${type==="income" ? "text-green-500" : "text-red-500"}  `}>Rs. {amount}
        </h2>
        <EllipsisVertical 
          className="size-4 text-gray-400 hover:text-blue-600 cursor-pointer"
          onClick={()=>setHidden(!hidden)}
        />
        {
          hidden? <div className="h-10 w-20 absolute flex justify-center items-center gap-3 -top-10 right-3 bg-white border rounded-xl transition-all ease-in-out">
              <NotebookPen 
                className="size-5 text-gray-400 hover:text-blue-600 hover:fill-blue-100 cursor-pointer" 
                onClick={()=>setShowEditMdl(true)}
              />
              <Trash2 
                className="size-5 text-gray-400 hover:text-red-600 cursor-pointer " 
                onClick={()=>setShowDeleteMdl(true)}
              />
              
          </div> : ''
        }
        <DeleteModal open={showDeleteModal} onClose={()=>setShowDeleteMdl(false)}/>
        <EditModal open={showEditModal} onClose={()=>setShowEditMdl(false)} />
      </div>
      
    </div>
  );
}

