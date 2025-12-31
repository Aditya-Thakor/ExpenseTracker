import { ChartColumn, House, LayoutGrid, UserRound, Wallet } from "lucide-react";

export default function NavbarSm() {
    return(
        <div className="block lg:hidden h-screen bg-blue-50  relative">
            <div className="h-20 w-full flex items-center justify-between fixed bottom-0 bg-white px-5 text-neutral-600">
                <span><House className="size-12 text-neutral-800 px-2 rounded-lg bg-blue-300   " /></span>
                <span><LayoutGrid className="size-9 " /></span>
                <span><Wallet className="size-9 "/></span>
                <span><ChartColumn className="size-9 "/></span>
                <span><UserRound className="size-9 "/></span>
            </div>
        </div>
    )
}