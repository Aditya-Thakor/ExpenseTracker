import { LockKeyhole, NotebookPen } from "lucide-react";
import {
  Dialog,
  DialogBackdrop,
  DialogPanel,
  DialogTitle,
} from "@headlessui/react";
import { useContext } from "react";
import TransactionContext from "../../../context/TransactionContext";
import { useState } from "react";
import { useEffect } from "react";
import { useMemo } from "react";
import { useRef } from "react";
export default function EditModal({ open, onClose,transactionId }) {

  const tId = transactionId ? transactionId : undefined; 
  const {transactions,user} = useContext(TransactionContext);

  const [transaction,setTransaction]=useState([]);
  const [trName, setName]=useState('');
  const [trAmount, setAmount]=useState('');
  const [inFrom,setInFrom]=useState('');
  const [cate,setCate]=useState('');
  const [selected,setSelected]=useState('');
  const [ct,setCt]=useState('');
  const options=[
    "bills&utilities",
    "food",
    "shopping",
    "travel",
    "transportation",
    "entertainment",
    "education",
    "healthcare",
  ]
    const selectionRef = useRef(null);
 
    useMemo(()=>{  
      
      const tr = transactions?.filter(t=>t._id==tId);
      setTransaction(tr[0]);
      
      
      
    },[tId,transactions,cate,selected]) 

    const closeModal = () => {
            onClose();
    }

    const formdata= new FormData();
    const editTransaction=async()=>{ 
      // console.log("transaction id ::: ", tId);
      // const tr = await transactions?.filter(t=>t._id==tId);
      // setTransaction(tr[0]);
      // console.log("transaction:::");      
      // console.log(transaction);
      // console.log("Edited transaction:::");
      // console.log("tr name:::", trName);
      // console.log("tr amount:::", trAmount);

      
      try {
        formdata.append('transactionId',tId);
        formdata.append('userId',user?._id)

        if(trName.length!==0) {
          formdata.append('description',trName);
        }else{ formdata.append('description',transaction?.description);};
        
        if(trAmount.length!==0) {
          formdata.append('amount',Number(trAmount));
        }else {formdata.append('amount',transaction?.amount)};

        if(inFrom.length!==0){
          formdata.append('incomeFrom',inFrom);
        }else{formdata.append('incomeFrom',transaction?.incomeFrom)};
        
        if(cate.length!==0){
          formdata.append('category',cate);
        }else{formdata.append('category',transaction?.category)};

        const update = await fetch('http://localhost:5000/transaction/edit',{
          method:'post',
          body:formdata
        })
        const msg= await update.json();
        console.log(msg);
        
        if (update.ok) {
          // setShowDeleteMdl(false)
          closeModal();
          window.location.reload();
        }
      } catch (error) {
        console.log("Error at Updating transaction!!!",error);
      }     
  }
  return (
    <div>
      <Dialog open={open} onClose={closeModal} className="relative z-10 ">
        <DialogBackdrop
          transition
          className="fixed inset-0 bg-gray-500/75 transition-opacity data-[closed]:opacity-0 data-[enter]:duration-300 data-[leave]:duration-200 data-[enter]:ease-out data-[leave]:ease-in"
        />

        <div className="fixed inset-0 z-10 w-screen overflow-y-auto">
          <div className="flex min-h-full items-end justify-center p-4 text-center sm:items-center sm:p-0">
            <DialogPanel
              transition
              className="relative transform overflow-hidden rounded-lg bg-white text-left shadow-xl transition-all data-[closed]:translate-y-4 data-[closed]:opacity-0 data-[enter]:duration-300 data-[leave]:duration-200 data-[enter]:ease-out data-[leave]:ease-in sm:my-8 sm:w-full sm:max-w-lg data-[closed]:sm:translate-y-0 data-[closed]:sm:scale-95"
            >
              <div className="bg-white px-4 pb-4 pt-5 sm:p-6 sm:pb-4">
                <div className="sm:flex sm:items-start">
                  <div className="mx-auto flex size-7 shrink-0 items-center justify-center rounded-full bg-blue-100 sm:mx-0 sm:size-10">
                    <NotebookPen
                      aria-hidden="true"
                      className="size-5 text-blue-500"
                    />
                  </div>
                  <div className="mt-3 text-center sm:ml-4 sm:mt-0 sm:text-left">
                    <DialogTitle
                      as="h3"
                      className="text-base font-semibold text-gray-900"
                    >
                      Edit transaction
                    </DialogTitle>
                    <div className="mt-2 flex flex-col gap-3  ">
                      
                      <div className="flex flex-col gap-1 text-sm">
                        <label htmlFor="name">transaction name</label>
                        <input 
                            type="text" 
                            placeholder={transaction?.description}
                            value={trName}
                            onChange={(e)=>{setName(e.target.value)}}
                            className="w-full border rounded-md py-0.5 px-2 text-sm text-gray-500"
                        />
                      </div>
                      <Group>
                        <Label>amount</Label>
                        <Input 
                          type="number" 
                          placeholder={transaction?.amount} 
                          value={trAmount} 
                          onChange={(e)=>setAmount(e.target.value)} 
                        />
                      </Group>
                     
                      {
                        transaction?.type =="income"?  
                          <Group> 
                            <Label>IncomeFrom </Label>
                            <Input 
                              type="text"
                              placeholder={transaction?.incomeFrom}
                              value={inFrom}
                              onChange={(e)=>setInFrom(e.target.value)}
                            />
                          </Group> 
                          :
                          <Group> 
                            <Label>Expense category</Label>
                            <div className="h-auto w-full flex flex-wrap gap-1.5 text-xs mt-1">
                              {
                                
                                options.map(o=>(
                                  <span 
                                  id={o}
                                    ref={selectionRef} 
                                    onClick={(e)=>{ 
                                      console.log(e.target.id)
                                      setCate(o);
                                      
                                      setSelected(e.target.id)
                                      transaction.category='';
                                    }}
                                    className={`
                                      px-3.5 py-1.5 border rounded-full text-center cursor-pointer text-gray-400 transition-all 
                                      ${transaction?.category==o ? "bg-neutral-800 text-neutral-50 ring-2 ring-neutral-500" :selected==o ? "bg-neutral-800 text-neutral-50 ring-2 ring-neutral-500"  :"hover:bg-gray-100  hover:ring-2 hover:ring-neutral-400"}
                                    `}
                                   
                                  >{o}  </span>
                                ))
                              }
                             
                            </div>
                            {/* <Input 
                              type="text"
                              placeholder={transaction?.category}
                              value={cate}
                              onChange={(e)=>setCate(e.target.value)}
                            /> */}
                          </Group>
                      }
                      
                    </div>
                  </div>
                </div>
              </div>
              <div className="bg-gray-50 px-4 py-3 sm:flex sm:flex-row-reverse sm:px-6">
                <button
                  type="button"
                  onClick={editTransaction}
                  className="inline-flex w-full justify-center rounded-md bg-blue-600 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-blue-500 sm:ml-3 sm:w-auto"
                >
                  Update
                </button>
                <button
                  type="button"
                  data-autofocus
                  onClick={closeModal}
                  className="mt-3 inline-flex w-full justify-center rounded-md bg-white px-3 py-2 text-sm font-semibold text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 hover:bg-gray-50 sm:mt-0 sm:w-auto"
                >
                  Cancel
                </button>
              </div>
            </DialogPanel>
          </div>
        </div>
      </Dialog>
    </div>
  );
}

const Group = ({children})=>{
    return  <div className="flex flex-col gap-1 text-sm">
        {children}
    </div>
}

const Label=({children,...props})=>{
    return <label {...props}>{children}</label>
}

const Input = ({...props})=>{
    return  <input 
                {...props}
                className="w-full border rounded-md py-0.5 px-2 text-sm text-gray-500"
            />
}