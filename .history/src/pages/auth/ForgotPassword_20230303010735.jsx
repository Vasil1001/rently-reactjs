import React, { useState } from "react"
import { Link, useNavigate } from "react-router-dom"
import visibilityIcon from "../../assets/svg/visibilityIcon.svg"
import { getAuth, sendPasswordResetEmail } from "firebase/auth"
import { toast } from "react-toastify"

export default function ForgotPassword() {
  const [email, setEmail] = useState("")
  const navigate = useNavigate()

  const onChange = (e) => setEmail(e.target.value)

  const onSubmit = async (e) => {
    e.preventDefault()

    try {
      const auth = getAuth()
      await sendPasswordResetEmail(auth, email)
      toast.success("Password reset link sent to your email")
      navigate("/login")
    } catch (error) {
      toast.error("Something went wrong with password reset")
    }
  }

  return (
    <div className="mx-auto w-full max-w-md  rounded-3xl border-2 border-slate-600 p-4 shadow-xl  dark:bg-base-300 dark:text-gray-100 sm:p-8">
      <div className="flex justify-between">
        <h2 className="mb-3 text-left text-3xl font-semibold ">
          Forgot Password?
        </h2>
        <Link to="/login">
          <p className="pt-2 text-sm text-gray-300 hover:underline focus:underline">
            Back to Login
          </p>
        </Link>
      </div>

      <form
        className="ng-untouched ng-pristine ng-valid space-y-5"
        onSubmit={onSubmit}
      >
        <div className="space-y-4">
          <div className="space-y-2">
            <label htmlFor="email" className="block text-sm">
              Email address
            </label>
            <input
              type="email"
              id="email"
              placeholder="Email"
              onChange={onChange}
              className="w-full rounded-md border bg-gray-700 px-3 py-2  hover:bg-gray-600 dark:border-gray-700 dark:text-gray-100 focus:dark:border-violet-400"
            />
          </div>
        </div>

        <button
          type="submit"
          className="w-full rounded-md px-8 py-3 font-semibold hover:bg-[#6fc2e6] dark:bg-[#00b3ff] dark:text-gray-900"
        >
          Send Reset Link
        </button>
      </form>

      <div>
        <header></header>
      </div>
    </div>
  )
}
