import {
  ArrowRight,
  ChartColumn,
  ChartPie,
  Check,
  Download,
  Drone,
  HandHeart,
  IndianRupee,
  Shield,
  Smartphone,
  Star,
  TrendingUp,
  Users,
  Wallet,
} from "lucide-react";
import LanNavbar from "./components/navbar/LandingNavbar";
import FeaturesCard from "./components/featuresCartd/FeatureCard";
import PageHeading from "./components/pageheading/PageHeading";
import NormalPricing from "./components/pricingCard/NormalPricing";
import Popular from "./components/pricingCard/Popular";
import Footer from "./components/footer/Footer";
import WorkflowCard from "./components/workflowCard/WorkFlowCard";
import ReviewCard from "./components/reviewCard/ReviewCard";
import { Navigate, useNavigate } from "react-router-dom";

export default function LandingPage() {
  const businessFeatures = [
    "Everything in Pro",
    "Multi-user access",
    "Team collaboration",
    "API access",
    "Custom categories",
    "Dedicated support",
    "Advanced security",
  ];
  const freeFeatures = [
    "Up to 100 transactions/month",
    "Basic expense tracking",
    "5 categories",
    "Monthly reports",
    "Email support",
  ];

  const navigate = useNavigate();

  return (
    <div className="h-auto bg-gray-50 scroll-smooth items-center">
      {/* Navbar */}
      <LanNavbar />

      {/* Hero section */}
      <div className="h-screen flex flex-col justify-center items-center gap-10 px-10 ">
        <div className="flex items-center gap-2 bg-cyan-100 px-3 py-1 rounded-xl text-sm text-blue-600 mt-24">
          <span>
            <HandHeart className="size-4" />
          </span>
          <p> Trusted by 10,000+ users worldwide</p>
        </div>

        <div className="flex flex-col items-center text-5xl font-lato">
          <h1 className="text-gray-800">Take Control of Your</h1>
          <h1 className="bg-gradient-to-r from-blue-500 to-cyan-500 text-transparent bg-clip-text">
            Financial Future
          </h1>
        </div>

        <div className="w-1/2 text-center text-wrap  text-xl ">
          <h5 className="text-gray-600 ">
            Track expenses, manage budgets, and achieve your financial goals
            with our smart expense tracker. Simple, powerful, and secure.
          </h5>
        </div>

        <div className="flex gap-4">
          <button className="flex items-center justify-center gap-2 px-7 py-3 rounded-xl text-white bg-gradient-to-br from-blue-500 to-cyan-500 shadow-lg shadow-blue-300/70 transition-shadow hover:shadow-none">
            <span>Start Free Today</span>
            <span>
              <ArrowRight className="size-5" />
            </span>
          </button>
          <button className="bg-white border text-gray-800 shadow-sm  px-7 py-3 rounded-xl hover:shadow-lg">
            View Demo
          </button>
        </div>

        <div className="text-sm text-gray-500 mt-3">
          <span>No credit card required • Free forever plan available</span>
        </div>
      </div>

      {/* Numbers */}
      <div className="h-40 grid grid-cols-4 gap-5  bg-white border-y  px-10 ">
        <div className="h-full flex flex-col justify-center items-center gap-2">
          <p className="flex items-center text-4xl  text-gray-800">₹50Cr+</p>
          <span className="text-sm text-gray-500">Money Tracked</span>
        </div>

        <div className="h-full flex flex-col justify-center items-center gap-2">
          <p className="flex items-center text-4xl  text-gray-800">10,000+</p>
          <span className="text-sm text-gray-500">Active Users</span>
        </div>
        <div className="h-full flex flex-col justify-center items-center gap-2">
          <p className="flex items-center text-4xl  text-gray-800">9</p>
          <span className="text-sm text-gray-500">Categories</span>
        </div>
        <div className="h-full flex flex-col justify-center items-center gap-2">
          <p className="flex items-center text-4xl  text-gray-800">99.99%</p>
          <span className="text-sm text-gray-500">Uptime</span>
        </div>
      </div>

      {/* Features */}
      <div id="features" className="h-screen px-10  ">
        <div className="h-48 flex flex-col justify-center items-center gap-3">
          <h2 className="text-4xl text-gray-900">
            Powerful Features for Smart Tracking
          </h2>
          <h5 className="text-lg text-gray-500">
            Everything you need to manage your finances in one place
          </h5>
        </div>
        <div className="h-[calc(100%-12rem)] grid grid-cols-3 gap-6">
          {/* <div className="h-56 min-w-80 flex flex-col  gap-3 bg-white border rounded-3xl p-5">
                            <div className="size-14 flex justify-center items-center text-white rounded-2xl bg-gradient-to-br from-blue-500 to-cyan-500">
                                <TrendingUp className="size-7" />
                            </div>
                            <div className="text-lg text-gray-800">
                                <h5>Smart Expense Tracking</h5>
                            </div>
                            <div className="w-4/5 text-justify text-gray-500">
                                <span className="text-sm    ">
                                    Automatically categorize and track every rupee you spend with intelligent insights
                                </span>
                            </div>
                        </div> */}
          <FeaturesCard
            title="Smart Expense Tracking"
            p="Automatically categorize and track every rupee you spend with intelligent insights"
            icon={<TrendingUp className="size-7" />}
            ibgfrom="#3b82f6"
            ibgto="#06b6d4"
          />
          <FeaturesCard
            title="Visual Analytics"
            p="Beautiful charts and graphs that make understanding your finances effortless"
            icon={<ChartPie className="size-7" />}
            ibgfrom="#a855f7"
            ibgto="#ec4899"
          />
          <FeaturesCard
            title="Secure & Private"
            p="Bank-level encryption ensures your financial data stays safe and confidential"
            icon={<Shield className="size-7" />}
            ibgfrom="#22c55e"
            ibgto="#10b981"
          />
          <FeaturesCard
            title="Multi-Device Sync"
            p="Access your expense data anywhere, anytime across all your devices"
            icon={<Smartphone className="size-7" />}
            ibgfrom="#6366f1"
            ibgto="#a855f7"
          />
          <FeaturesCard
            title="Easy Export"
            p="Download your data in CSV or PDF format for reports and tax filing"
            icon={<Download className="size-7" />}
            ibgfrom="#06b6d4"
            ibgto="#3b82f6"
          />
        </div>
      </div>

      {/* Working */}
      <div id="working" className="h-screen px-10 bg-blue-50 mt-20">
        <PageHeading
          title="How It Works"
          subtitle="Get started in three simple steps"
        />
        <div className="h-[60%] flex justify-center items-center gap-9">
          <WorkflowCard
            step="01"
            icon={<Users />}
            title="Create Account"
            p="Sign up in less than 30 seconds. No credit card required to get started."
          />
          <WorkflowCard
            step="02"
            icon={<Wallet />}
            title="Add Expenses"
            p="Start logging your daily expenses with our simple and intuitive interface."
          />

          <div className="min-h-64 max-w-72 relative flex flex-col  items-center gap-3 bg-white p-7 rounded-3xl shadow-lg border border-blue-200/70">
            <div className="size-16 flex justify-center items-center text-white text-3xl rounded-full bg-gradient-to-br from-blue-500 to-cyan-500">
              <span>03</span>
            </div>

            <div className="size-12 flex justify-center items-center text-blue-600   bg-blue-100 rounded-xl">
              <span>
                <ChartColumn />
              </span>
            </div>

            <h3 className="text-md text-gray-800  ">Track & Analyze</h3>
            <p className="text-sm text-gray-500 text-center">
              View insights, set budgets, and make smarter financial decisions
              every day.
            </p>

            {/* <span className="absolute -right-4 top-1/2 text-blue-400 text-shadow-xl">
                    <ArrowRight />
                  </span> */}
          </div>
        </div>
      </div>

      {/* Pricing */}
      <div id="pricing" className="h-auto px-10 pt-10 mb-20">
        <PageHeading
          title="Simple, Transparent Pricing"
          subtitle="Choose the plan that's right for you"
        />
        <div className="h-100% grid grid-cols-3 items-center justify-items-center mb-10">
          {/* <div className="h-full max-w-80 flex flex-col items-start gap-6 bg-white border-2 border-gray-300 rounded-2xl p-6">
                    <div className="flex flex-col gap-2 text-md">
                        <span className="text-gray-800">Free</span>
                        <span className="text-gray-500">Perfect for getting started</span>    
                    </div>
                    <div>
                        <p>
                            <span className="text-gray-900 text-5xl">₹0</span>
                            <span className="text-gray-400 font-light"> /forever</span>
                        </p>
                    </div>
                    <div className="w-full">
                        <button className="w-full py-3 text-white bg-blue-500 rounded-2xl">Get Started</button>
                    </div>
                    <div>
                        <ul className="flex flex-col gap-3 text-gray-600">
                            <li className="flex items-center gap-2 text-sm">
                                <span><Check className="size-5 text-green-500"/></span> <span>Up to 100 transactions/month</span>
                            </li>
                            <li className="flex items-center gap-2 text-sm">
                                <span><Check className="size-5 text-green-500"/></span> <span>Up to 100 transactions/month</span>
                            </li>
                            <li className="flex items-center gap-2 text-sm">
                                <span><Check className="size-5 text-green-500"/></span> <span>Up to 100 transactions/month</span>
                            </li>
                            <li className="flex items-center gap-2 text-sm">
                                <span><Check className="size-5 text-green-500"/></span> <span>Up to 100 transactions/month</span>
                            </li>
                            <li className="flex items-center gap-2 text-sm">
                                <span><Check className="size-5 text-green-500"/></span> <span>Up to 100 transactions/month</span>
                            </li>
                        </ul>
                    </div>
                 </div> */}
          <NormalPricing
            title="Free"
            subtitle="Perfect for getting started"
            price="0"
            duration="forever"
            list={freeFeatures}
          />
          <Popular />
          <NormalPricing
            title="Business"
            subtitle="For teams and businesses"
            price="4999"
            duration="per month"
            list={businessFeatures}
          />
        </div>
      </div>

      {/* Reviews */}
      <div id="review" className="h-screen bg-white">
        <PageHeading
          title="Loved by Thousands"
          subtitle="See what our users are saying"
        />
        <div className="h-1/2 flex items-center justify-center gap-5 ">
          {/* <div className="h-3/4 w-72 flex flex-col gap-3  bg-neutral-50 border border-gray-300 rounded-3xl p-5">
            <div className="flex gap-1 text-amber-300 ">
              <span>
                <Star className="size-5 fill-amber-300 " />{" "}
              </span>
              <span>
                <Star className="size-5 fill-amber-300 " />{" "}
              </span>
              <span>
                <Star className="size-5 fill-amber-300 " />{" "}
              </span>
              <span>
                <Star className="size-5 fill-amber-300 " />{" "}
              </span>
              <span>
                <Star className="size-5 fill-amber-300 " />{" "}
              </span>
            </div>
            <p className="text-md text-gray-700 text-start leading-7">
              "This app transformed how I manage my finances. The visual charts
              make it so easy to see where my money goes!"
            </p>
            <div className=" w-full flex items-center gap-3">
              <div className="size-12 flex justify-center items-center text-2xl rounded-full bg-gradient-to-br from-blue-500 to-cyan-500">
                  <span>👩‍💻</span>
              </div>
              <div className="text-sm text-neutral-900">
                <h5>Priya Sharma</h5>
                <span className="text-xs text-gray-500">Software Engineer</span>
              </div>
            </div>
          </div> */}
          <ReviewCard
            review="This app transformed how I manage my finances. The visual charts make it so easy to see where my money goes!"
            name="Priya Sharma"
            role="Software Engineer"
            icon="👩‍💻"
          />
          <ReviewCard
            review="Best expense tracker I've used. Clean interface, powerful features, and excellent customer support."
            name="Rahul Mehta"
            role="Business Owner"
            icon="👨‍💼"
          />
          <ReviewCard
            review="Finally, an expense tracker that doesn't feel like work. I actually enjoy logging my expenses now!"
            name="Anita Desai"
            role="Freelancer"
            icon="👩‍🎨"
          />
        </div>
      </div>

      <div className="py-20 flex flex-col justify-center items-center bg-gradient-to-br from-blue-500 to-cyan-500 text-white gap-5">
            <h1 className="text-4xl">
              Ready to Start Your Financial Journey?
            </h1>
            <p className="max-w-3xl text-lg text-center text-white/80">
              Join thousands of users who are already taking control of their finances. Start tracking your expenses today, completely free.
            </p>
            <button 
              onClick={()=>{
                navigate('/signup')
              }}
              className="flex items-center justify-center gap-2 py-4 px-7 rounded-xl bg-white text-md text-blue-600 shadow-lg hover:shadow-xl"
            >
              Get Started for Free <ArrowRight/>
            </button>
            <p className="text-sm text-white/70">No credit card required • Cancel anytime</p>
      </div>

      {/* footer */}
      <Footer />
    </div>
  );
}
