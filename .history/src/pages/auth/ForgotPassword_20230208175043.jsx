import React from 'react'

export default function ForgotPassword() {
  return (
    <div className="">
      <section class="">
        <div class="flex flex-col items-center justify-center px-6 py-8 mx-auto md:h-screen lg:py-0">
          <a href="#" class="flex items-center mb-6 text-2xl font-semibold text-gray-900 dark:text-white">
            <img class="w-8 h-8 mr-2" src="https://flowbite.s3.amazonaws.com/blocks/marketing-ui/logo.svg" alt="logo" />
            Rently
          </a>
          <div class="w-full p-6 bg-white rounded-lg shadow dark:border md:mt-0 sm:max-w-md dark:bg-gray-800 dark:border-gray-700 sm:p-8">
            <h2 class="mb-1 text-xl font-bold leading-tight tracking-tight text-gray-900 md:text-2xl dark:text-white">
              Change Password
            </h2>
            <form class="mt-4 space-y-4 lg:mt-5 md:space-y-5" action="#">
              <div>
                <label for="email" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Your email</label>
                <input type="email" name="email" id="email" class="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="name@company.com" required="" />
              </div>
              <div>
                <label for="password" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">New Password</label>
                <input type="password" name="password" id="password" placeholder="••••••••" class="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" required="" />
              </div>
              <div>
                <label for="confirm-password" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Confirm password</label>
                <input type="confirm-password" name="confirm-password" id="confirm-password" placeholder="••••••••" class="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" required="" />
              </div>
              <div class="flex items-start">
                <div class="flex items-center h-5">
                  <input id="newsletter" aria-describedby="newsletter" type="checkbox" class="w-4 h-4 border border-gray-300 rounded bg-gray-50 focus:ring-3 focus:ring-primary-300 dark:bg-gray-700 dark:border-gray-600 dark:focus:ring-primary-600 dark:ring-offset-gray-800" required="" />
                </div>
                <div class="ml-3 text-sm">
                  <label for="newsletter" class="font-light text-gray-500 dark:text-gray-300">I accept the <a class="font-medium text-primary-600 hover:underline dark:text-primary-500" href="#">Terms and Conditions</a></label>
                </div>
              </div>
              <button type="submit" class="w-full text-white bg-primary-600 hover:bg-primary-700 focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800">Reset passwod</button>
            </form>
          </div>
        </div>
      </section>
    </div>

import React, { useState } from 'react'
  import { Link, useNavigate } from 'react-router-dom'
  import visibilityIcon from '../../assets/svg/visibilityIcon.svg'

  export default function Login() {
    const [showPassword, setShowPassword] = useState(false)
    const [formData, setFormData] = useState({
      email: '',
      password: ''
    })
    const { email, password } = formData
    const navigate = useNavigate()
    const onChange = (e) => {
      setFormData(() => ({
        ...formData,
        [e.target.id]: e.target.value
      }))
    }

    return (
      <div className="w-full max-w-md p-4 rounded-3xl border-2 border-slate-600 shadow-xl  sm:p-8 dark:bg-base-300 dark:text-gray-100">
        <h2 className="mb-3 text-3xl font-semibold text-center">Login to your account</h2>
        <p className="text-sm text-center dark:text-gray-300">Dont have account?&nbsp;&nbsp;&nbsp;
          <Link to="/register">
            <span className="focus:underline hover:underline ">Sign up here</span>
          </Link>
        </p>
        <div className="my-6 space-y-4">
          <button aria-label="Login with Google" type="button" className="flex items-center justify-center hover:bg-[#1e2d58] w-full p-4 space-x-4 border rounded-md focus:ring-2 focus:ring-offset-1 dark:border-gray-400 focus:ring-violet-400">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32" className="w-5 h-5 fill-current">
              <path d="M16.318 13.714v5.484h9.078c-0.37 2.354-2.745 6.901-9.078 6.901-5.458 0-9.917-4.521-9.917-10.099s4.458-10.099 9.917-10.099c3.109 0 5.193 1.318 6.38 2.464l4.339-4.182c-2.786-2.599-6.396-4.182-10.719-4.182-8.844 0-16 7.151-16 16s7.156 16 16 16c9.234 0 15.365-6.49 15.365-15.635 0-1.052-0.115-1.854-0.255-2.651z"></path>
            </svg>
            <p>Login with Google</p>
          </button>
        </div>

        <div className="flex items-center w-full my-4">
          <hr className="w-full dark:text-gray-400" />
          <p className="px-3 dark:text-gray-400">OR</p>
          <hr className="w-full dark:text-gray-400" />
        </div>
        <form className="space-y-8 ng-untouched ng-pristine ng-valid">
          <div className="space-y-4">
            <div className="space-y-2">
              <label htmlFor="email" className="block text-sm">Email address</label>
              <input type="email" id="email" placeholder="Email" value={email}
                onChange={onChange}
                className="w-full px-3 py-2 border rounded-md dark:border-gray-700  dark:text-gray-100 focus:dark:border-violet-400 bg-gray-700 hover:bg-gray-600" />
            </div>
            <div className="space-y-2 relative">
              <div className="flex justify-between">
                <label htmlFor="password" className="text-sm">Password</label>
                <Link to="/forgot-password">
                  <span className="text-xs focus:underline hover:underline dark:text-gray-400">Forgot Password</span>
                </Link>
              </div>
              <div className="flex ">
                <input type={showPassword ? 'text' : 'password'} id="password" placeholder="*****" value={password}
                  onChange={onChange}
                  className="w-full px-3 py-2 border rounded-md dark:border-gray-700 dark:text-gray-100 focus:dark:border-violet-400 bg-gray-700 hover:bg-gray-600" >

                </input>
                <div className="absolute inset-y-0 right-0 pr-4 pt-7 flex items-center text-sm leading-5">
                  <img
                    src={visibilityIcon}
                    alt='show password'
                    className='showPassword pointer cursor-pointer'
                    onClick={() => setShowPassword((prevState) => !prevState)}
                  />
                </div>
                <div class="ml-3 text-sm">
                  <label for="newsletter" class="font-light text-gray-500 dark:text-gray-300">I accept the <a class="font-medium text-primary-600 hover:underline dark:text-primary-500" href="#">Terms and Conditions</a></label>
                </div>
              </div>
            </div>
          </div>
          <button type="button" className="w-full px-8 py-3 font-semibold rounded-md dark:bg-[#ffa200] dark:text-gray-900 hover:bg-[#ffb739]">Sign in</button>
        </form>

        <div>
          <header>

          </header>
        </div>
      </div>
    )
  }

  )
}
