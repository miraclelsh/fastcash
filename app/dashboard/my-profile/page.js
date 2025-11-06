import Image from "next/image"

export default function myProfile () {
    return (
        <main className="min-h-screen flex justify-center py-5 md:py-6 md:px-12 lg:py-8 lg:px-16">
            <div className="w--full md:w-[380px] rounded-md shadow-md flex flex-col px-4 md:shadow-indigo-200 ">
                <div>
                    <h1 className="text-center text-xl font-semibold text-gray-800 mb-8">Customer Profile</h1>
                    <div className="mt-2 flex justify-center gap-6 border-b border-gray-300 mb-2">
                        <Image
                        width={80}
                        height={80}
                        alt="profile-image"
                        src="/chat with ciara.webp"
                        className="w-20 h-20 rounded-full"
                        />
                        <div>
                            <p className="text-sm text-gray-800">Tabby Allen</p>
                            <p className="text-xs text-gray-600">tabbyallen@gmail.com</p>
                            <p className="text-center text-xs text-indigo-500">Tier 1</p>
                        </div>
                    </div>
                    <div className="px-5">
                        <p className="text-center text-lg">Other Information</p>
                        <div className="flex justify-between mb-3">
                            <p className="text-gray-800">BVN</p>
                            <p className="text-gray-400">2548765084</p>
                        </div>
                        <div className="flex justify-between mb-3">
                            <p className="text-gray-800">NIN</p>
                            <p className="text-gray-400">80584228611</p>
                        </div>
                        <div className="flex justify-between mb-3">
                            <p className="text-gray-800">Gender</p>
                            <p className="text-gray-400">Female</p>
                        </div>
                        <div className="flex justify-between mb-3">
                            <p className="text-gray-800">Date of Birth</p>
                            <p className="text-gray-400">29/09/2001</p>
                        </div>
                        <div className="flex justify-between mb-3">
                            <p className="text-gray-800">Phone Number</p>
                            <p className="text-gray-400">08140254250</p>
                        </div>
                        <div className="flex justify-between mb-3">
                            <p className="text-gray-800">Address</p>
                            <p className="text-gray-400">BLK F, NIA Quaters, Maitama</p>
                        </div>
                    </div>
                </div>

            </div>

        </main>
    )
}