import i from '../../assets/icons/index'


export default function DataCard({type,amount=0, stats}) {

   

  return(
    <div 
        className={` h-full min-w-60 p-3 rounded-xl bg-gradient-to-br ${type=="expense"?
             " from-[#EF4444] to-[#EF8B44] " 
            : " from-[#22C55E] to-[#088E68] "}`
        }
    >
        <div className={`h-full flex flex-col gap-2 `}>
            <div className="h-1/4 flex justify-between items-center">
                <span className='text-2xl font-bold text-white'>{type=="expense"?"Expense":"Income" }</span>
                <span 
                    className={` h-full p-1 rounded-lg bg-gradient-to-br 
                    ${type=="expense"?
                        " from-[#EA1D1D] to-[#E9641D] " :
                        " from-[#22C55E] to-[#088E68] "} 
                    `}
                >
                    <img 
                        src={type=="expense"? i.expense : i.income} 
                        alt="transaction-icon" 
                        className='h-full w-full' 
                    />
                </span>
            </div>
            <div className='h-1/2 flex flex-col font-bold text-white text-3xl'>
                <span>Rs.</span>
                <span>{amount}</span>
            </div>
            <span className='h-1/5 text-xs text-white'> {stats}</span>
        </div>
  </div>
  )
}


/*
#Expense
-expense bg color:
from: #EF4444
to: #EF8B44

-ex. icon bg :
from: #EA1D1D
to: #E9641D

----------------------

#Income
-bg color :
from: #22C55E
to: #088E68

-icon bg:
from: #22C55E
to: #088E68


*/