import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import visibilityIcon from "../../assets/svg/visibilityIcon.svg";
import {
  getAuth,
  createUserWithEmailAndPassword,
  updateProfile,
} from "firebase/auth";
import { db } from "../../firebase.config";
import { setDoc, doc, serverTimestamp } from "firebase/firestore";
import { toast } from 'react-toastify'
import OAuth from "../../components/OAuth";

export default function Register() {
  const [showPassword, setShowPassword] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
  });
  const { name, email, password } = formData;
  const navigate = useNavigate();
  const onChange = (e) => {
    setFormData(() => ({
      ...formData,
      [e.target.id]: e.target.value,
    }));
  };

  const onSubmit = async (e) => {
    e.preventDefault()

    try {
      const auth = getAuth()

      const userCredential = await createUserWithEmailAndPassword(
        auth,
        email,
        password
      )

      const user = userCredential.user

      updateProfile(auth.currentUser, {
        displayName: name,
      })

      const formDataCopy = { ...formData }
      delete formDataCopy.password
      formDataCopy.timestamp = serverTimestamp()
      await setDoc(doc(db, 'users', user.uid), formDataCopy)
      navigate('/')
      toast.success('Registration successful')
    } catch (error) {
      toast.error("Something went wrong with registration")
    }
  }

  return (
    <div className="w-full mx-auto mt-5 max-w-md p-4 rounded-3xl border-2 border-slate-600 shadow-xl  sm:p-8 dark:bg-base-300 dark:text-gray-100">
      <h2 className="mb-3 text-3xl font-semibold text-center">Sign up</h2>
      <p className="text-sm text-center dark:text-gray-300">
        Already have an account?&nbsp;&nbsp;&nbsp;
        <Link to="/login">
          <span className="focus:underline hover:underline ">Sign in here</span>
        </Link>
      </p>


      <div className="flex items-center w-full my-4">
        <hr className="w-full dark:text-gray-400" />
        <p className="px-3 dark:text-gray-400">OR</p>
        <hr className="w-full dark:text-gray-400" />
      </div>

      <form
        onSubmit={onSubmit}
        className="space-y-8 ng-untouched ng-pristine ng-valid"
      >
        <div className="space-y-4">
          <div className="space-y-2">
            <label htmlFor="name" className="block text-sm">
              Name
            </label>
            <input
              type="text"
              id="name"
              placeholder="Name"
              value={name}
              onChange={onChange}
              className="w-full px-3 py-2 border rounded-md dark:border-gray-700  dark:text-gray-100 focus:dark:border-violet-400 bg-gray-700 hover:bg-gray-600"
            />
          </div>
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
              className="w-full px-3 py-2 border rounded-md dark:border-gray-700  dark:text-gray-100 focus:dark:border-violet-400 bg-gray-700 hover:bg-gray-600"
            />
          </div>

          <div className="space-y-2 relative">
            <div className="flex justify-between">
              <label htmlFor="password" className="text-sm">
                Password
              </label>
            </div>
            <div className="flex ">
              <input
                type={showPassword ? "text" : "password"}
                id="password"
                placeholder="*****"
                value={password}
                onChange={onChange}
                className="w-full px-3 py-2 border rounded-md dark:border-gray-700 dark:text-gray-100 focus:dark:border-violet-400 bg-gray-700 hover:bg-gray-600"
              ></input>
              <div className="absolute inset-y-0 right-0 pr-4 pt-7 flex items-center text-sm leading-5">
                <img
                  src={visibilityIcon}
                  alt="show password"
                  className="showPassword fill-cyan-500 pointer fill-white cursor-pointer"
                  onClick={() => setShowPassword((prevState) => !prevState)}
                />
              </div>
            </div>
          </div>
        </div>
        <button
          className="w-full px-8 py-3 font-semibold rounded-md dark:bg-[#ec48fb] dark:text-gray-900 hover:bg-[#ee7bf8]"
        >
          Sign up
        </button>
      </form>

      <div>
        <header></header>
      </div>
    </div>
  );
}
