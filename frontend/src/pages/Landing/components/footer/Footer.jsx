import { Code, CodeXml, Facebook, Instagram, Linkedin, Mail, MapPin, Phone, Twitter } from "lucide-react";

export default function Footer() {
  return (
    <div className="h-auto xl:h-80 bg-slate-950 px-10 py-5 ">
      <div className="h-[70%] grid gap-3 lg:gap-0 lg:grid-cols-2 items-baseline ">
        <div className="h-full lg:flex flex-col items-start justify-center gap-5 text-white/50 ">
          <h1 className="text-white text-xl">ExpenseTracker</h1>
          <p className="text-sm text-wrap">
            Smart expense tracking for everyone. Take control of your financial
            future today.
          </p>
          <div className="flex gap-4 mt-4 lg:mt-0">
            <span className="size-9 flex justify-center items-center rounded-lg bg-white/10 p-2 hover:bg-white/20">
              <Twitter className="size-5" />
            </span>
            <span className="size-9 flex justify-center items-center rounded-lg bg-white/10 p-2 hover:bg-white/20">
              <Facebook className="size-5" />
            </span>
            <span className="size-9 flex justify-center items-center rounded-lg bg-white/10 p-2 hover:bg-white/20">
              <Instagram className="size-5" />
            </span>
            <span className="size-9 flex justify-center items-center rounded-lg bg-white/10 p-2 hover:bg-white/20">
              <Linkedin className="size-5" />
            </span>
          </div>
          
        </div>
        <div className="h-full grid grid-cols-2 justify-center sm:grid-cols-3 gap-2 ">
                <div className="h-full flex flex-col justify-center gap-2 lg:gap-3 text-white/50 ">
                  <h1 className="text-white text-lg">Product</h1>
                  
                  <div className="flex flex-col gap-2 lg:gap-0 text-xs lg:text-sm">
                    <span className="hover:text-white cursor-pointer">
                      Features
                    </span>
                    <span className="hover:text-white cursor-pointer">
                      Pricing
                    </span>
                    <span className="hover:text-white cursor-pointer">
                      Security
                    </span>
                    <span className="hover:text-white cursor-pointer">
                      Roadmap
                    </span>
                    
                  
                  </div>
                </div>

                <div className="h-full  flex flex-col justify-center gap-2 lg:gap-5 text-white/50 ">
                  <h1 className="text-white text-lg">Resources</h1>
                  
                  <div className="flex flex-col gap-2 text-xs lg:text-sm">
                    <span className="hover:text-white cursor-pointer">
                      Help Center
                    </span>
                    <span className="hover:text-white cursor-pointer">
                      API Docs
                    </span>
                    <span className="hover:text-white cursor-pointer">
                      Community
                    </span>
                  
                  </div>
                </div>

                <div className="h-full  flex flex-col items-start justify-center gap-2 lg:gap-5 text-white/50 ">
                  <h1 className="text-white text-lg">Contact</h1>
                  
                  <div className="flex flex-col gap-2 lg:gap-3 text-xs lg:text-sm">
                    <span className="flex gap-2 items-center hover:text-white cursor-pointer">
                      <Mail className="size-3 lg:size-4" /> support@expensetracker.com
                    </span>
                    <span className="flex gap-2 items-center hover:text-white cursor-pointer">
                      <Phone className="size-3 lg:size-4" /> +91 10001 20002
                    </span>
                    <span className="flex gap-2 items-center hover:text-white cursor-pointer">
                      <MapPin className="size-3 lg:size-4" />  Mahesana,Gujarat,India
                    </span>     
                  
                  </div>
                </div>
        </div>
      </div>

      <div className="h-[30%] flex flex-col lg:flex-row justify-between items-center gap-1 text-white/50 border-t mt-5 text-xs lg:text-sm border-white/30">
        <p className="order-3 lg:order-1">© 2025 ExpenseTracker. All rights reserved.</p>
        <div className="flex items-center lg:order-2  gap-2 text-xl text-orange-500 animate-pulse ">
            <span><CodeXml  className="size-6 "/></span>
            <h1 className="font-mono">Aditya Thakor</h1>
          </div>
        <p className="flex gap-4 lg:order-3 ">
          <span className="hover:text-white cursor-pointer">
            Privacy Policy
          </span>
          <span className="hover:text-white cursor-pointer">
            Terms of Service
          </span>
          <span className="hover:text-white cursor-pointer">Cookie Policy</span>
        </p>
      </div>
    </div>
  );
}
