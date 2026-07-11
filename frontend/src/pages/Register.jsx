import { ArrowRight, Loader, Lock, Mail, User } from 'lucide-react';
import React from 'react'
import { Link } from 'react-router-dom';

function Register() {

    const handleSubmit = async (e) => {
        e.preventDefault();

        const name = e.target.name.value;
        const rollno = e.target.rollNo.value;
        const email = e.target.email.value;

        try {
            const response = await fetch("http://localhost:3000/api/users/register", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify({
                    name,
                    rollno,
                    email
                })
            });
           const data = await response.json();
           if(!response.ok){
            throw new Error(data.message || "Registration failed. Try again.");
           }
           console.log("Registration successful:", data);
            navigate("/");
        } catch (err) {
            // throw new Error(err.response?.data?.message || "Registration failed. Try again.");
        } finally {
            // setLoading(false);
        }
    };

  return (
    <div className="min-h-screen  flex items-center justify-center px-4">
            <div className="w-full max-w-md">

                {/* Card */}
                <div className=" border border-gray-700 rounded-2xl p-8 ">

                    {/* Error */}
                    {/* {error && (
                        <div className="mb-5 px-4 py-3 rounded-lg bg-red-500/10 border border-red-500/20 text-red-400 text-sm">
                            {error}
                        </div>
                    )} */}

                    <form onSubmit={handleSubmit} className="space-y-5">

                        {/* Username */}
                        <div>
                            <label>
                                Name
                            </label>
                            <div className="relative"><input
                                    name="username"
                                    type="text"
                                    placeholder="johndoe"
                                    required
                                    className="w-full" />
                            </div>
                        </div>
                        {/* RollNo */}
                        <div>
                            <label>
                                Roll No
                            </label>
                            <div className="relative"><input
                                    name="rollNo"
                                    type="text"
                                    placeholder="123456"
                                    required
                                    className="w-full"
                                />
                            </div>
                        </div>

                        {/* Email */}
                        <div>
                            <label >
                                Email
                            </label>
                            <div className="relative"><input
                                    name="email"
                                    type="email"
                                    placeholder="john@example.com"
                                    required
                                    className="w-full "
                                />
                            </div>
                        </div>

                        {/* Submit */}
                        <button
                            type="submit"
                            className="w-full flex items-center justify-center gap-2 bg-blue-600 hover:bg-blue-500 disabled:bg-blue-600/50 disabled:cursor-not-allowed text-white font-semibold py-2.5 rounded-lg transition mt-2"
                        >
                            Register
                        </button>
                    </form>
                </div>

                {/* Login link */}
                <p className="text-center text-gray-500 text-sm mt-6">
                    Already have an account?{" "}
                    <Link to="/login" className="text-blue-400 hover:text-blue-300 font-medium transition">
                        Sign in
                    </Link>
                </p>
            </div>
        </div>
  )
}

export default Register 