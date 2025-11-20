    "use client"
import Link from "next/link";
import { useState } from "react";
import { CgProfile } from "react-icons/cg";
import { RxHamburgerMenu } from "react-icons/rx";




export function Navbar () {
    const [menuOpen,setMenuOpen] = useState(false);
    const toggleMenu = () => {
        setMenuOpen(!menuOpen)
    }
    
    return (
        <main className="bg-white shadow shadow-gray-200 w-full sticky top-0 z-10">
            <div className="flex justify-between h-[50px] pt-3 px-5">
                <h1 className="text-2xl font-bold text-indigo-500">FastCash</h1>
                <ul className="hidden md:flex gap-5 md:font-semibold md:cursor-pointer">
                    <Link href="/dashboard/get-loan"><li>GetLoan</li></Link>
                    <Link href="/dashboard/loan-history"><li>LoanHistory</li></Link>
                    <Link href="/dashboard/update-profile"><li>Update-Profile</li></Link>
                </ul>
                <div className="hidden md:flex items-center gap-2">
                    <Link href="/dashboard/my-profile"><CgProfile className="text-2xl cursor-pointer"/></Link>
                    <Link href="/auth/login"><button className="w-[60px] h-[30px] text-white bg-indigo-400 rounded cursor-pointer">Login</button></Link>
                </div> 
                <div className="block md:hidden">
                    <RxHamburgerMenu onClick={toggleMenu} className="text-4xl"/>
                </div>
            </div>
            {!menuOpen && (
            <div className="flex flex-col gap-3 justify-center pb-3 items-center md:hidden">
                <ul>
                    <Link href="/dashboard/get-loan"><li>GetLoan</li></Link>
                    <Link href="/dashboard/loan-history"><li>LoanHistory</li></Link>
                    <Link href="/dashboard/update-profile"><li>Update-Profile</li></Link>
                </ul>
                <div className="hidden md:flex items-center gap-2">
                    <Link href="/auth/login"><button className="w-[60px] h-[30px] text-white bg-indigo-400 rounded cursor-pointer">Login</button></Link>
                    <Link href="/dashboard/my-profile"><CgProfile className="text-2xl cursor-pointer"/></Link>
                </div>
            </div>
            )}
        </main>
    )
} 