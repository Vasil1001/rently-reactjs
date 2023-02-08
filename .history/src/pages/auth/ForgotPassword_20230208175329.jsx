import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import visibilityIcon from '../../assets/svg/visibilityIcon.svg'

export default function ForgotPassword() {
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
      <h2 className="mb-3 text-3xl font-semibold text-left">Forgot Password?</h2>

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
            </div>
          </div>
        </div>
        <div class="flex items-start">
          <div class="flex items-center h-5">
            <input id="newsletter" aria-describedby="newsletter" type="checkbox" class="w-4 h-4 border border-gray-300 rounded bg-gray-50 focus:ring-3 focus:ring-primary-300 dark:bg-gray-700 dark:border-gray-600 dark:focus:ring-primary-600 dark:ring-offset-gray-800" required="" />
          </div>
          <div class="ml-3 text-sm">
            <label for="newsletter" class="font-light text-gray-500 dark:text-gray-300">I accept the <a class="font-medium text-primary-600 hover:underline dark:text-primary-500" href="#">Terms and Conditions</a></label>
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




