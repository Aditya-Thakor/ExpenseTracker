import Heading from "../../components/heading/Heading";
import {Search} from "lucide-react";
import SummaryCardTemp from "../../components/summaryCards/Temp1";
import CategoryCard from "../../components/categoryCard/CTemp2";
import i from "../../assets/icons/index"
export default function Category(){
    return(
         <div className="h-auto w-full flex flex-col gap-5 p-5 ">
            <Heading title="Categories" tagline="Manage and track your expense categories"/>
            <div className="h-40 w-full flex flex-col gap-5">
                <div className="h-3/5 w-full grid grid-cols-3 gap-3">
                    <SummaryCardTemp
                        title="Total categories"
                        data="9"
                        bgfrom="#CCE2FF"
                        bgto="#CCFCFF"
                        border="#C3DCFD"
                        shadow="#C3DCFD"
                    />
                    <SummaryCardTemp 
                        title="Total spending" 
                        data="Rs. 3,10,000"
                        bgfrom="#E4D6FF" 
                        bgto="#F5CDE2" 
                        border="#D7C3F5" 
                        shadow="#D7C3F5"
                    />
                    <SummaryCardTemp 
                        title="Total transaction" 
                        data="110" 
                        bgfrom="#D2F9DE" 
                        bgto="#ACF6D3" 
                        border="#8EF5B2" 
                        shadow="#8EF5B2"
                    /> 
                </div>
                <div className="h-2/5 w-full  relative">
                    <label htmlFor="search" className="h-full w-full flex items-center">
                        <span className="absolute text-gray-400 pl-3"><Search className="size-5" /> </span>
                        <input type="text" placeholder="Search category..." className="h-full w-full rounded-2xl border border-slate-200 focus:outline-blue-300 pl-12 py-5 font-normal text-sm" />
                    </label>
                </div>
            </div>
            <div className="h-auto w-full ">
                <div className="h-full w-full grid grid-cols-3 gap-3">
                    <CategoryCard
                        name="Food & Dining"
                        amount="33,000"
                        icon={i.food}  
                        transactions="28"
                        bgfrom="#FFF7ED"                  
                        bgto="#FFFBEB"
                        border="#FFEDD5"
                        shadow="#FFEDD5"
                        pbgfrom="#F97316"
                        pbgto="#F59E0B"
                    />
                    <CategoryCard
                        name="Transportation"
                        amount="38,000"
                        icon={i.transportation}  
                        transactions="21"
                        bgfrom="#EFF6FF"                  
                        bgto="#ECFEFF"
                        border="#DBEAFE"
                        shadow="#DBEAFE"
                        pbgfrom="#3B82F6"
                        pbgto="#06B6D4"
                    />
                    <CategoryCard
                        name="Bills & Utilities"
                        amount="52,000"
                        icon={i.bill}  
                        transactions="32"
                        bgfrom="#FAF5FF"                  
                        bgto="#FDF2F8"
                        border="#F3E8FF"
                        shadow="#F3E8FF"
                        pbgfrom="#A855F7"
                        pbgto="#EC4899"
                    />
                    <CategoryCard
                        name="Travel"
                        amount="65,000"
                        icon={i.travel}  
                        transactions="28"
                        bgfrom="#F0FDF4"                  
                        bgto="#ECFDF5"
                        border="#DCFCE7"
                        shadow="#DCFCE7"
                        pbgfrom="#22C55E"
                        pbgto="#10B981"
                    />
                    <CategoryCard
                        name="Shopping"
                        amount="42,000"
                        icon={i.shopping}  
                        transactions="28"
                        bgfrom="#FDF2F8"                  
                        bgto="#FFF1F2"
                        border="#FCE7F3"
                        shadow="#FCE7F3"
                        pbgfrom="#EC4899"
                        pbgto="#F43F5E"
                    />
                    <CategoryCard
                        name="Entertainment"
                        amount="28,000"
                        icon={i.entertainment}  
                        transactions="11"
                        bgfrom="#EEF2FF"                  
                        bgto="#FAF5FF"
                        border="#E0E7FF"
                        shadow="#E0E7FF"
                        pbgfrom="#6366F1"
                        pbgto="#A855F7"
                    />
                    <CategoryCard
                        name="Healthcare"
                        amount="15,000"
                        icon={i.health}  
                        transactions="12"
                        bgfrom="#FEF2F2"                  
                        bgto="#FFF7ED"
                        border="#FEE2E2"
                        shadow="#FEE2E2"
                        pbgfrom="#EF4444"
                        pbgto="#F97316"
                    />
                    <CategoryCard
                        name="Education"
                        amount="18,000"
                        icon={i.education}  
                        transactions="28"
                        bgfrom="#FEFCE8"                  
                        bgto="#FFFBEB"
                        border="#FEF9C3"
                        shadow="#FEF9C3"
                        pbgfrom="#F97316"
                        pbgto="#F59E0B"
                    />
                    
                    
                </div>
            </div>
        </div>
    )
}