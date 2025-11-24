  "use client"
import { db } from "@/config/firebase.config";
import { collection, doc, getDocs, query, where } from "firebase/firestore";
import { useSession } from "next-auth/react";
import { useEffect, useState } from "react";
 
export default function LoanHistory () {
    const {data: session} = useSession();
    const [loanHistory,setLoanHistory] = useState([]);

     useEffect(()=>{
         const handleFetchLoans = async ()=>{
            try {
                const q = query(collection(db,"loans"),
                              where("user", "==",session?.user?.id))
                            const onSnap = await getDocs(q);
                            const compileLoans = [];
                           
                            onSnap.docs.forEach(doc =>{
                                compileLoans.push({
                                    id: doc.id,
                                    data: doc.data(),
                                })
                                setLoanHistory(compileLoans);
                                console.log(compileLoans)
                            })
            }
            catch(error){
               console.error("Error getting Loan history:",error)
            }
         }
         session ? handleFetchLoans(): null;       
     },[session])

    return (
        <main className="min-h-screen flex justify-center px-10 py-6 md:px-7 md:py-6 lg:px-16 lg:py-10 ">
            <div className="w-full md:w-[400px] h-auto shadow-md rounded-md">
                <h1 className="text-3xl text-gray-700 text-center mt-5 p-5">Loan History</h1>
                {loanHistory.map(loan =>
                <div key={loan.id} className="w-full mx-auto  md:border-dashed border border-gray-300 md:w-[340px] md:h-[100px] rounded-md md:mx-auto p-3 mb-2 ">
                   <div > 
                     <div className=" flex justify-between mb-5"> 
                        <p className="text-xl text-gray-700">Loan Amount: ₦ {loan.data.amount}</p>
                        <p className="text-lg text-gray-300">{loan.data.duration} days </p>
                     </div>
                     <div className="flex justify-between">
                        <p className="text-lg text-gray-700">Loan rate: {loan.data.rate}%</p>
                        <p>Repayment:  ₦{loan.data.repayment}</p>
                     </div>
                 </div>
                </div>
                 )}

            </div>

        </main>
    )
}