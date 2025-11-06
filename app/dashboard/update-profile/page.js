import { FormControl, InputLabel, MenuItem, Select, TextField } from "@mui/material"

export default function UpdateProfile () {
    return (
        <main className="min-h-screen flex justify-center py-4 md:py-6 md:px-12 lg:px-16">
            <div className="w-full md:w-[500px] h-[400px] rounded-md shadow-md px-4 py-6">
                <h1 className="text-2xl font-bold text-gray-800 text-center">Update your Profile</h1>
                <form className="flex flex-col gap-3">
                    <div>
                        <TextField
                        fullWidth
                        type="text"
                        label="FullName"
                        id="fullname"
                        placeholder="Enter Your FullName"
                        size="small"
                        />
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                        <TextField
                        fullWidth
                        type="number"
                        label="BVN"
                        id="bvn"
                        placeholder="Enter BVN"
                        size="small"
                        />
                        <TextField
                        fullWidth
                        type="number"
                        label="NIN"
                        id="nin"
                        placeholder="Enter NIN"
                        size="small"
                        />
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-2">
                        <TextField
                        fullWidth
                        InputLabelProps={{shrink:true}}
                        type="date"
                        label="DOB"
                        id="dob"
                        placeholder="Enter date of birth"
                        size="small"
                        />
                        <TextField
                        fullWidth
                        type="tel"
                        label="Phone Number"
                        id="phone"
                        placeholder="Enter your phone number"
                        size="small"
                        />
                    </div>
                    <FormControl>
                        <InputLabel id="gender-label">Gender</InputLabel>
                        <Select
                        labelId="gender-label"
                        id="gender"
                        name="gender"
                        label="Gender"
                        size="small"
                        >
                            <MenuItem Value= "male">Male</MenuItem>
                            <MenuItem value="female">Female</MenuItem>
                        </Select>
                    </FormControl>
                    <div>
                        <TextField
                        fullWidth
                        multiline
                        rows={3}
                        type="text"
                        label="Address"
                        id="address"
                        placeholder="Enter Address"
                        size="small"
                        />
                    </div>
                </form>

            </div>

        </main>
    )
}