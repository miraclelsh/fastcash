import { MdOutlineFacebook } from "react-icons/md";
import { RiInstagramFill } from "react-icons/ri";
import { FaWhatsappSquare } from "react-icons/fa";
import Link from "next/link";

export function Footer () {
    const year = new Date().getFullYear();
    return (
        
        <footer className="bg-indigo-600">
            <div className="grid gid-cols-1 pl-25 md:grid-cols-2 lg:grid-cols-4 lg:pl-30">
                <div>
                    <p className="text-white font-bold text-2xl mb-2">FastCash</p>
                    <p className="font-thin text-gray-400">About Us</p>
                    <p className="font-thin text-gray-400">Contact Us</p>
                    <p className="font-thin text-gray-400">Location</p>
                </div>

                <div>
                    <p className="text-white font-bold text-2xl mb-2">Financial Servies</p>
                    <p className="font-thin text-gray-400">Loans</p>
                    <p className="font-thin text-gray-400">Investment</p>
                    <p className="font-thin text-gray-400">Bonds</p>
                </div>

                <div>
                    <p className="text-white font-bold text-2xl mb-2">Legal</p>
                    <p className="font-thin text-gray-400">Privacy policy</p>
                    <p className="font-thin text-gray-400">Cookies</p>
                    <p className="font-thin text-gray-400">Terms of Use</p>
                </div>
                <div>
                    <p className="text-2xl font-bold text-white mb-2">Socials</p>
                    <div className="flex gap-4">
                        <MdOutlineFacebook className="text-2xl text-gray-400"/>
                        <RiInstagramFill className="text-2xl text-gray-400"/>
                        <Link href="https://whatsapp.com"><FaWhatsappSquare className="text-2xl text-gray-400"/></Link>

                    </div>
                </div>
            </div>

            <div className="border-t border-gray-400 pb-5">
                <h1 className="text-center text-gray-400 mt-3"> &copy;{year} FastCash</h1>
            </div>

        </footer>
    )
}