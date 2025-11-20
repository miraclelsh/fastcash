import { auth, signIn } from "@/auth";
import { TextField } from "@mui/material";
import { FcGoogle } from "react-icons/fc";
import { VscGithubInverted } from "react-icons/vsc";


 export default async function LoginPage () {
  const session = await auth();
  console.log(session)
      return (
         <main className="min-h-screen bg-gray-50 flex justify-center">
            <div className="w-full md:w-[350px] max-h-[400px] rounded md:shadow-md md:py-8 px-3 flex flex-col gap-5 ">
                  <div>
                     <h1 className="text-2xl font-semibold text-center text-gray-700">Sign In</h1>
                     <p className="block text-indigo-500 text-center">Create account or sign in</p>
                  </div>
                  <form className="justify-items-center">
                    <div className="mb-2 w-full">
                       <TextField
                        fullWidth
                        size="small"
                        placeholder="@emmanuel.com"
                        className="w-full"
                       />
                    </div>
                    <button type="submit" className="text-white bg-indigo-500 w-full rounded-md p-1">Login</button>
                  </form>
                   <p className="text-center text-gray-400">Or sign up with</p>
                  <div className="flex justify-center gap-4"> 
                      <form 
                         action={async ()=>{
                               "use server"
                              await signIn("google");
                         }}   
                      >
                        <button type="submit" className="w-10 h-10 border rounded-md shadow-lg border-gray-300 cursor-pointer">
                        <FcGoogle className="text-4xl" />
                        </button>
                     </form>
                     <form>
                        <button type="submit" className="w-10 h-10 border rounded-md shadow-lg border-gray-300 cursor-pointer">
                        <VscGithubInverted className="text-4xl" />
                        </button>
                     </form>
                </div> 

                  

            </div>
         </main>
    )
}