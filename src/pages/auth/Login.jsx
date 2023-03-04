import React, { useState } from "react"
import { Link, useNavigate } from "react-router-dom"
import visibilityIcon from "../../assets/svg/visibilityIcon.svg"
import { getAuth, signInWithEmailAndPassword } from "firebase/auth"
import { toast } from "react-toastify"
import OAuth from "../../components/OAuth"

export default function Login() {
  const [showPassword, setShowPassword] = useState(false)
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  })
  const { email, password } = formData
  const navigate = useNavigate()
  const onChange = (e) => {
    setFormData(() => ({
      ...formData,
      [e.target.id]: e.target.value,
    }))
  }

  const onSubmit = async (e) => {
    e.preventDefault()
    console.log("first")
    try {
      const auth = getAuth()
      const userCredential = await signInWithEmailAndPassword(
        auth,
        email,
        password
      )

      if (userCredential.user) {
        navigate("/profile")
      }
    } catch (error) {
      toast.error("Invalid user login credentials")
    }
  }

  return (
    <div className="mx-auto mt-24 w-full max-w-md items-center justify-center rounded-3xl border-2 border-slate-600 p-4 shadow-xl  dark:bg-base-300 dark:text-gray-100 sm:p-8">
      <h2 className="mb-3 text-center text-3xl font-semibold">
        Login to your account
      </h2>
      <p className="text-center text-sm dark:text-gray-300">
        Don't have account?&nbsp;&nbsp;&nbsp;
        <Link to="/register">
          <span className="hover:underline focus:underline ">Sign up here</span>
        </Link>
      </p>

      <OAuth />

      <div className="my-4 flex w-full items-center">
        <hr className="w-full dark:text-gray-400" />
        <p className="px-3 dark:text-gray-400">OR</p>
        <hr className="w-full dark:text-gray-400" />
      </div>
      <form
        onSubmit={onSubmit}
        className="ng-untouched ng-pristine ng-valid space-y-8"
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
              value={email}
              onChange={onChange}
              className="w-full rounded-md border bg-gray-700 px-3 py-2  hover:bg-gray-600 dark:border-gray-700 dark:text-gray-100 focus:dark:border-violet-400"
            />
          </div>
          <div className="relative space-y-2">
            <div className="flex justify-between">
              <label htmlFor="password" className="text-sm">
                Password
              </label>
              <Link to="/forgot-password">
                <span className="text-xs hover:underline focus:underline dark:text-gray-400">
                  Forgot Password
                </span>
              </Link>
            </div>
            <div className="flex ">
              <input
                type={showPassword ? "text" : "password"}
                id="password"
                placeholder="*****"
                value={password}
                onChange={onChange}
                className="w-full rounded-md border bg-gray-700 px-3 py-2 hover:bg-gray-600 dark:border-gray-700 dark:text-gray-100 focus:dark:border-violet-400"
              ></input>
              <div className="absolute inset-y-0 right-0 flex items-center pr-4 pt-7 text-sm leading-5">
                <img
                  src={visibilityIcon}
                  alt="show password"
                  className="showPassword pointer cursor-pointer"
                  onClick={() => setShowPassword((prevState) => !prevState)}
                />
              </div>
            </div>
          </div>
        </div>
        <button
          type="submit"
          className="w-full rounded-md px-8 py-3 font-semibold hover:bg-[#ffb739] dark:bg-[#ffa200] dark:text-gray-900"
        >
          Sign in
        </button>
      </form>

      <div>
        <header></header>
      </div>
    </div>
  )
}
