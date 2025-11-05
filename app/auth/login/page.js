import { TextField } from "@mui/material"
import { FcGoogle } from "react-icons/fc";
import { FaGithub } from "react-icons/fa"

export default function LoginPage () {
    
    return (
        <main className="min-h-screen bg-gray-50 flex justify-center">
            <div className="w-full md:w-[350px] h-[400px] rounded md:shadow-md md:py-8 px-3 flex flex-col gap-5">
                <div>
                    <h1 className="text-2xl font-semibold text-center text-gray-700">Sign In</h1>
                    <p className="block text-indigo-600 text-center">Create account or sign in</p>
                </div>

                <form className="justify-items-center">
                    <div className="mb-2 w-full">
                        <TextField
                        fullWidth
                        placeholder="@email.com"
                        className="w-full"
                        size="small"
                        />
                    </div>
                    <button type="submit" className="text-white  bg-indigo-600 w-full rounded-md pb-1">Login</button>
                </form>
                <p className="text-gray-400 text-center">Or Sign Up With</p>
                <div className="flex justify-center gap-4">
                    <form>
                        <button type="submit" className="w-[40px] h-[40px] border border-gray-300 cursor-pointer rounded-md"><FcGoogle className="text-4xl"/></button>
                    </form>

                    <form>
                        <button type="submit" className="w-[40px] h-[40px] border border-gray-300 cursor-pointer rounded-md"><FaGithub className="text-4xl"/></button>
                    </form>
                </div>


            </div>
        </main>
    )
}