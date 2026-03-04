    "use client"
import { db } from "@/config/firebase.config";
import { CircularProgress, TextField } from "@mui/material";
import { doc, getDoc, updateDoc } from "firebase/firestore";
import { Formik, useFormik } from "formik";
import { useParams, useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import * as yup from "yup";

const schema = yup.object().shape({
    repaymentAmount:yup.number().required("Repayment amount is rrequired").min(1000),
})

export default function Loan () {
    const {id} = useParams();
    const [loan, setLoan] = useState(null);
    const router = useRouter();
    const [showInput, setShowInput] = useState(false);
    const [loading,setLoading] = useState(true);

    useEffect(()=>{
        const fetchLoan = async ()=>{
            try{
                const docRef = doc(db, "loans", id);
                const snapshot = await getDoc(docRef);
                if (!snapshot) {
                    router.push/("dashboard/loan-history")
                }
                setLoan({
                    id,
                    ...snapshot.data(),
                });
            }
            catch(errors) {
                console.error("unable to fetch", errors)
            }
            finally {
                setLoading(false);
            }
        }
        fetchLoan();
    },[id])

    const {handleSubmit, handleChange, values, touched, errors} = useFormik({
        initialValues : {
            repaymentAmount : ""
        },
        
        onSubmit: async (values, {resetForm})=>{
            const amount = Number(values.repaymentAmount);
            const newBalance = loan?.repayment - amount;
            try {
                  const loanRef = doc(db, "loans", id);
                  await updateDoc(loanRef, {
                    repayment : newBalance,
                    status: newBalance === 0 ? "paid" : "ongoing",
                });
                setLoan({...loan,repayment: newBalance})
                setShowInput(false);
                resetForm();
                alert("Repayment Successful !");
            }
            catch(error) {
                console.error("Unable to repay", error)
            }
        },
        validationSchema: schema,
    })
    if (loading)
    return (
        <div className="flex justify-center items-center h-[60vh]">
            <CircularProgress/>
        </div>
    )
    return (
        <main className="min-h-screen flex justify-center px-2 md:px-6 md:py-10 lg:px-16 lg:py-12">
            <div className="w-full md:w-[350px] max-h-auto md:rounded-md md:shadow-lg lg:px-2 lg:py-4">
                <h1 className="text-3xl text-gray-700 text-center">Loan Details</h1>
                <div className="my-4 px-">
                    <div className="flex justify-between items-center">
                        <p className="text-xl text-gray-700">Loan Amount</p>
                        <p className="text-sm text-gray-400">{loan?.amount.toLocaleString()}</p>
                    </div>
                    <div className="flex justify-between items-center">
                        <p className="text-xl text-gray-700">Loan Duration</p>
                        <p className="text-sm text-gray-400">{loan?.duration} days</p>
                    </div>
                    <div className="flex justify-between items-center">
                        <p className="text-xl text-gray-700">Interest Rate</p>
                        <p className="text-sm text-gray-400">{loan?.rate}</p>
                    </div>
                    <div className="flex justify-between items-center">
                        <p className="text-xl text-gray-700">Repayment Amount</p>
                        <p className="text-sm text-gray-400">{loan?.repayment.toLocaleString()}</p>
                    </div>
                    {!showInput &&(
                    <button onClick={()=>setShowInput(true)}
                    disabled={loan?.repayment === 0}
                    className="w-full bg-indigo-400 h-8 text-white rounded-md shadow-md cursor-pointer hover:opacity-60">
                    {loan?.repayment === 0 ? "Loan Fully Paid": "Repay Loan"}
                    </button>
                    )}
                    
                    {showInput && (
                    <form onSubmit={handleSubmit}
                    className="flex flex-col gap-2">
                            <div>
                                <TextField
                                fullWidth
                                size="small"
                                placeholder="Enter Repayment Amount"
                                label="Repayment Amount"
                                onChange={handleChange}
                                value={values.repaymentAmount}
                                id="repaymentamount"/>
                                {touched.repaymentAmount && errors.repaymentAmount ? <span className="text-xs text-red-500">{errors.repaymentAmount}</span> : null }
                            </div>
                            <button type="submit" className="w-full cursor-pointer h-8 text-white bg-green-400 rounded-md">Make Payment</button>
                    </form>
                    )}
                </div>

            </div>
        </main>
    )
}