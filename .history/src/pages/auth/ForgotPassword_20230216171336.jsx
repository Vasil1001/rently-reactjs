import React, { useState } from "react"
import { Link, useNavigate } from "react-router-dom"
import visibilityIcon from "../../assets/svg/visibilityIcon.svg"
import { getAuth, sendPasswordResetEmail } from "firebase/auth"
import { toast } from "react-toastify"

export default function ForgotPassword() {
  const [formData, setFormData] = useState({
    email: "",
  })
  const [email] = useState("")

  const navigate = useNavigate()

  const onChange = (e) => {}

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
    <div className="w-full mx-auto max-w-md  p-4 rounded-3xl border-2 border-slate-600 shadow-xl  sm:p-8 dark:bg-base-300 dark:text-gray-100">
      <div className="flex justify-between">
        <h2 className="mb-3 text-3xl font-semibold text-left ">
          Forgot Password?
        </h2>
        <Link to="/login">
          <p className="focus:underline hover:underline text-sm pt-2 text-gray-300">
            Back to Login
          </p>
        </Link>
      </div>

      <form
        className="space-y-5 ng-untouched ng-pristine ng-valid"
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
              className="w-full px-3 py-2 border rounded-md dark:border-gray-700  dark:text-gray-100 focus:dark:border-violet-400 bg-gray-700 hover:bg-gray-600"
            />
          </div>
        </div>

        <button
          type="submit"
          className="w-full px-8 py-3 font-semibold rounded-md dark:bg-[#00b3ff] dark:text-gray-900 hover:bg-[#6fc2e6]"
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
