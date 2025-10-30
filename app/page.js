import Image from "next/image";
import { IconName, IoLocation, IoPersonSharp, IoSearch } from "react-icons/io5";

export default function Home() {
  return (
    <main>
      <div className="flex items-center justify-between px-3 bg-white">
        <div className="text-[#3686f0] text-[37px] font-extrabold font-serif">FastCash</div>
      
      
        <div className="flex gap-4">
          <a href="#" className="font-bold text-[10px] hover:text-[#3686f0]">LOANS</a>
          <a href="#" className="font-bold text-[10px] hover:text-[#3686f0]">CREDIT LIMIT</a>
          <a href="#" className="font-bold text-[10px] hover:text-[#3686f0]">BUSINESS</a>
          <a href="#" className="font-bold text-[10px] hover:text-[#3686f0]">REPAYMENT</a>
          <a href="#" className="font-bold text-[10px] hover:text-[#3686f0]">ABOUT-US</a>
          <a href="#" className="font-bold text-[10px] hover:text-[#3686f0]">LOCATIONS</a>
        </div>

      
        <div className="flex items-center gap-2">
          <a href="#" className="bg-[#3686f0] px-2 py-1 text-[10px] text-white font-bold">LOAN EXTENTIONS</a>
          <button className="p-1"><IoPersonSharp className="w-4 h-4"/></button>
          <button className="p-1"><IoSearch className="w-4 h-4"/></button>
        </div>
      </div>
      
      <div className="bg-[url('/happy-client.webp')] h-screen bg-no-repeat bg-[#3686f0] bg-right">
        <div className="py-38 px-30">
          <h1 className="text-5xl text-white font-bold mb-5">Access<br /> Funds, Embrace <br /> Convenience</h1>
          <p className="text-white text-sm">The future of loan services is here. We're not just a financial institution, we're your support sytem<br />expertly helping you through the the worst of emergencies.</p> 
          <button className="w-[100px] h-[40px] bg-white border-1 border-blue-700 text-blue-700 rounded-3xl hover:bg-blue-900 hover:text-white cursor-pointer mt-7">Learn More</button>
        </div>
      </div>

      <div className="bg-[url('/business1.avif')] h-[500px]  bg-no-repeat bg-right">
        <div className="py-38 px-30">
          <h1 className="text-5xl text-blue-500 font-bold mb-5">Access<br /> Business Loans <br /> at your Convenience</h1>
          <p className="text-blue-500 text-sm">Speedy access to business loans, zero delays,<br />no unneccessary documetation.</p> 
          <button className="w-[100px] h-[40px] bg-white border-1 border-blue-700 text-blue-700 rounded-3xl hover:bg-blue-900 hover:text-white cursor-pointer mt-7">Learn More</button>
        </div>
      </div>

      <div className="bg-[url('/slider5.png')] h-[500px] w-full bg-no-repeat bg-[#3686f0] bg-right">
        <div className="py-15 px-30">
          <h1 className="text-5xl text-white font-bold mb-5">Access<br /> Loans for other purposes<br /></h1>
          <p className="text-white text-sm">The future of loan services is here. We're not just a financial institution,<br /> we're your support sytem expertly helping you<br /> through the the worst of emergencies.</p> 
          <button className="w-[100px] h-[40px] bg-white border-1 border-blue-700 text-blue-700 rounded-3xl hover:bg-blue-900 hover:text-white cursor-pointer mt-7">Learn More</button>
        </div>
      </div>

    </main>
  );
}
