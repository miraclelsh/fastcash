    "use client"
import { db } from "@/config/firebase.config";
import { CircularProgress, TextField } from "@mui/material";
import { addDoc, collection } from "firebase/firestore";
import { useFormik } from "formik";
import { useSession } from "next-auth/react";
import { useEffect, useState } from "react";
import * as yup from "yup";





const schema = yup.object().shape({
    amount: yup.number().required("Amount is required").min(5000),
});

const duration = [
    {id: "30", days: 30},
    {id: "60", days: 60},
    {id: "90", days: 90}
]

export default function GetLoan() {
    const {data : session} = useSession();
    console.log(session);
    const [clickedRate, setClickedRate] = useState(undefined);
    const [rate,setRate] = useState(0);
    const [loanDuration,setLoanDuration] = useState(0)
    const[repayment,setRepayment] = useState(0);
    const [opsProgress, setOpsProgress] = useState(false);

    const {handleSubmit,handleChange, values,touched, errors} = useFormik({
        initialValues: {
            amount: 0,
        },
        onSubmit: async()=>{
            setOpsProgress(true)
            try {
                await addDoc(collection(db, "loans"),{
                    user: session?.user?.id,
                    amount: values.amount,
                    rate: rate,
                    duration: loanDuration,
                    repayment: repayment,
                    timeOfRequest: new Date(),
                })
                setOpsProgress(false)
                alert('Loan request successfful')
            }
            catch(errors){
                setOpsProgress(false);
                console.error("Error taking loans", errors);
            }

        },
        validationSchema:schema,
    })
    useEffect(()=>{
        if(values.amount > 1) {
            const Interest = (rate * values.amount) / 100
            setRepayment(values.amount + Interest);
        }
    },[values.amount,rate]);

    return (
        <main className="min-h-screen flex justify-center py-4 md:py-6 lg:px-16">
            <div className="w-ful md:w-[350px] h-[550px] flex flex-col p-2 border-gray-200 rounded-md shadow-md">
                <h1 className="text-center text-lg font-semibold text-indigo-600">
                    Get Instant Loan from FastCash
                </h1>
                <form onSubmit = {handleSubmit}
                className="flex flex-col gap-4">
                    <div className="w-full mb-2">
                        <TextField
                        type="number"
                        label="Amount"
                        placeholder="Enter Loan Amount"
                        id="amount"
                        size="small"
                        value={values.amount}
                        onChange={handleChange}
                        className="w-full"
                        />
                        {touched.amount && errors.amount ? <span className="text-xs text-red-500">
                        {errors.amount}</span> : null}
                    </div>
                    <div className="border border-dashed border-indigo-600 p-4 mb-2 rounded-md">
                        <p>Choose your Loan Duration</p>
                        <ul className="grid grid-cols-3 gap-2">
                            {duration.map(item =>
                            <li key={item.id}
                                onClick={()=>{
                                    setClickedRate(item.id)
                                    if (item.days === 30) {
                                        setRate(10)
                                    }else if (item.days === 60) {
                                        setRate(20)
                                    }else if (item.days === 90) {
                                        setRate(30)
                                    }
                                    if(item.days === 30) {
                                        setLoanDuration(30) 
                                    }else if(item.days === 60) {
                                        setLoanDuration(60)
                                    }else if(item.days === 90) {
                                        setLoanDuration(90);
                                    }
                                }}
                            
                            
                            className="h-16 bg-indigo-500 text-white text-md rounded-md justify-center items-center flex cursor-pointer">{item.days} Days</li>
                            )}
                        </ul>
                    </div>
                    <div className="border-dashed border border-indigo-600 p-4 mb-2 rounded-md">
                        <p className="text-indigo-800">Interest Rate for {loanDuration} days</p>
                        <p className="text-4xl text-indigo-800">{rate}%</p>
                    </div>
                    <div className="flex flex-col gap-3 bg-linear-to-b from bg-indigo-400 to-indigo-900 border-indigo-600 rounded-md p-4">
                        <p className="text-indigo-200">Repayment Amount</p>
                        <p className="text-white text-4xl">₦{repayment}</p>
                    </div>
                    <div className="flex items center gap-3">
                        <button type="submit" className="p-2 rounded-md bg-indigo-800 text-white uppercase">Get Loan</button>
                        { opsProgress? <CircularProgress sx={{color: "purple"}} size="30px"/> : null}
                    </div>
                </form>

            </div>

        </main>
    )
}