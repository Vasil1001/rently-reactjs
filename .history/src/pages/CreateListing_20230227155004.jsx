import { getAuth, onAuthStateChanged } from "firebase/auth"
import React, { useEffect, useRef, useState } from "react"
import { useNavigate } from "react-router-dom"
import { toast } from "react-toastify"
import Spinner from "../components/Spinner"
import { v4 as uuidv4 } from "uuid"
import {
  getStorage,
  ref,
  uploadBytesResumable,
  getDownloadURL,
} from "firebase/storage"
import { db } from "../firebase.config"
import { addDoc}

export default function CreateListing() {
  const [geolocationEnabled, setGeolocationEnabled] = useState(true)
  const [loading, setLoading] = useState(false)

  const [formData, setFormData] = useState({
    type: "rent",
    name: "",
    bedrooms: 1,
    bathrooms: 1,
    parking: false,
    furnished: false,
    address: "",
    offer: false,
    regularPrice: 0,
    discountedPrice: 0,
    images: {},
    latitude: 0,
    longitude: 0,
  })

  const {
    type,
    name,
    bedrooms,
    bathrooms,
    parking,
    furnished,
    address,
    offer,
    regularPrice,
    discountedPrice,
    images,
    latitude,
    longitude,
  } = formData

  const auth = getAuth()
  const navigate = useNavigate()
  const isMounted = useRef(true)

  const GEOCODE_API_KEY = import.meta.env.VITE_GEOCODE_API_KEY

  const onSubmit = async (e) => {
    e.preventDefault()
    setLoading(true)
    if (+discountedPrice >= +regularPrice) {
      setLoading(false)
      toast.error("Discounted price cannot be greater than regular price")

      return
    }

    if (images.length > 6) {
      setLoading(false)
      toast.error("You can only upload a maximum of 6 images")

      return
    }

    let geolocation = {}
    let location

    if (geolocationEnabled) {
      const response = await fetch(
        ` https://maps.googleapis.com/maps/api/geocode/json?address=${address}&key=${GEOCODE_API_KEY}`
      )
      const data = await response.json()
      geolocation.lat = data.results[0]?.geometry.location.lat ?? 0
      geolocation.lng = data.results[0]?.geometry.location.lng ?? 0

      location =
        data.status === "ZERO_RESULTS"
          ? undefined
          : data.results[0].formatted_address

      if (location === undefined || location.includes("undefined")) {
        setLoading(false)
        toast.error("Please enter a correct address")
        return
      }
      console.log(data)
    } else {
      geolocation.lat = latitude
      geolocation.lng = longitude
      location = address
    }

    // ? Store images in Firebase Storage not Firestore   -   https://firebase.google.com/docs/storage/web/upload-files?authuser=0
    const storeImage = async (image) => {
      return new Promise((resolve, reject) => {
        const storage = getStorage()
        const fileName = `${auth.currentUser.uid}-${image.name}-${uuidv4()}`

        const storageRef = ref(storage, `images/${fileName}`)
        const uploadTask = uploadBytesResumable(storageRef, image)

        uploadTask.on(
          "state_changed",
          (snapshot) => {
            const progress =
              (snapshot.bytesTransferred / snapshot.totalBytes) * 100
            console.log("Upload is " + progress + "% done")
            switch (snapshot.state) {
              case "paused":
                console.log("Upload is paused")
                break
              case "running":
                console.log("Upload is running")
                break
            }
          },
          (error) => {
            // ? Handle unsuccessful uploads
            reject(error)
          },
          () => {
            // Handle successful uploads on complete
            // For instance, get the download URL: https://firebasestorage.googleapis.com/...
            getDownloadURL(uploadTask.snapshot.ref).then((downloadURL) => {
              resolve(downloadURL) // ? Store array of download URLs in Firebase Storage
            })
          }
        )
      })
    }

    // ? For every image, store it in Firebase Storage and get the download URL
    const imgUrls = await Promise.all(
      [...images].map((image) => storeImage(image))
    ).catch(() => {
      setLoading(false)
      toast.error('Images failed to upload. Please try again.')
      return
    })
    console.log(imgUrls)
    setLoading(false)
  }

  const onMutate = (e) => {
    let boolean = null

    if (e.target.value === "true") {
      boolean = true
    }
    if (e.target.value === "false") {
      boolean = false
    }

    // ? Files
    if (e.target.files) {
      setFormData((prevState) => ({
        ...prevState,
        images: e.target.files, // ? Update this images field
      }))
    }
    // ? Text/Boolean/Number
    if (!e.target.files) {
      setFormData((prevState) => ({
        ...prevState,
        [e.target.id]: boolean ?? e.target.value, // ? If text field, set to value of text field
      }))
    }
  }

  useEffect(() => {
    if (isMounted) {
      onAuthStateChanged(auth, (user) => {
        if (user) {
          setFormData({ ...formData, userRef: user.uid })
        } else {
          navigate("/login")
        }
      })
    }
    return () => {
      isMounted.current = false
    }
  }, [isMounted])

  if (loading) {
    return <Spinner />
  }

  return (
    <div className="rounded-lg bg-[#2d323b] p-6 mx-auto xl:w-10/12 lg:w-12/12 md:w-12/12 mt-5">
      <p className="text-xl mb-5">Create a new listing</p>
      <form onSubmit={onSubmit} className="flex flex-col">
        {/* // ? ROW FOR PROPERTY NAME */}
        <div className="flex gap-3">
          <button
            type="submit"
            className={
              type === "sale"
                ? "w-full px-3 py-2 border rounded-md dark:border-gray-700 dark:text-gray-100 focus:dark:border-violet-400 bg-green-600 hover:bg-green-600"
                : "w-full px-3 py-2 border rounded-md dark:border-gray-700 dark:text-gray-100 focus:dark:border-violet-400 bg-gray-700 hover:bg-gray-600"
            }
            id="type"
            value="sale"
            onClick={onMutate}
          >
            <b>Sell</b>
          </button>
          <button
            type="submit"
            className={
              type === "rent"
                ? "w-full px-3 py-2 border rounded-md dark:border-gray-700 dark:text-gray-100 focus:dark:border-violet-400 bg-green-600 hover:bg-green-600"
                : "w-full px-3 py-2 border rounded-md dark:border-gray-700 dark:text-gray-100 focus:dark:border-violet-400 bg-gray-700 hover:bg-gray-600"
            }
            id="type"
            value="rent"
            onClick={onMutate}
          >
            <b>Rent</b>
          </button>
        </div>

        <label className="mt-4">Property Name</label>
        <label className="text-sm mb-1">
          Include as many details as possible, eg. 2 Bedroom Flat, Location,
          Price
        </label>
        <input
          className="w-full px-3 py-2 border rounded-md dark:border-gray-700 dark:text-gray-100 focus:dark:border-violet-400 bg-gray-700 hover:bg-gray-600"
          type="text"
          id="name"
          value={name}
          onChange={onMutate}
          maxLength="32"
          minLength="10"
          required
        />
        {/* <br></br>
        <div className="bg-gray-700 p-3 rounded-xl">
          <label>
            <b>Images</b>
          </label>
          <p className="text-sm mb-3 ">
            The first image will be the cover (max 6).
          </p>
          <input
            className="cursor-pointer  "
            type="file"
            id="images"
            onChange={onMutate}
            max="6"
            accept=".jpg,.png,.jpeg"
            multiple
            required
          />
        </div> */}

        {/* // ? ROW FOR BEDROOMS, BATHROOMS, PARKING AND FURNISHED */}
        <div className="flex flex-wrap gap-x-4 mt-4">
          <div className="grow ">
            <label className="">Bedrooms</label>
            <input
              className="w-full px-3 py-2 border rounded-md dark:border-gray-700 dark:text-gray-100 focus:dark:border-violet-400 bg-gray-700 hover:bg-gray-600"
              type="number"
              id="bedrooms"
              value={bedrooms}
              onChange={onMutate}
              min="1"
              max="50"
              required
            />
          </div>
          <div className="grow">
            <label className="formLabel">Bathrooms</label>
            <input
              className="w-full px-3 py-2  border rounded-md dark:border-gray-700 dark:text-gray-100 focus:dark:border-violet-400 bg-gray-700 hover:bg-gray-600"
              type="number"
              id="bathrooms"
              value={bathrooms}
              onChange={onMutate}
              min="1"
              max="50"
              required
            />
          </div>
          <div>
            <label>Parking spot</label>
            <div className="flex gap-3">
              <button
                className={
                  parking
                    ? "px-3 py-2 border rounded-md dark:border-gray-700 dark:text-gray-100 focus:dark:border-violet-400 bg-green-600 hover:bg-green-600"
                    : "px-3 py-2 border rounded-md dark:border-gray-700 dark:text-gray-100 focus:dark:border-violet-400 bg-gray-700 hover:bg-gray-600"
                }
                type="button"
                id="parking"
                value={true}
                onClick={onMutate}
                min="1"
                max="50"
              >
                Yes
              </button>
              <button
                className={
                  !parking && parking !== null
                    ? " px-3 py-2 border rounded-md dark:border-gray-700 dark:text-gray-100 focus:dark:border-violet-400 bg-green-600 hover:bg-green-600"
                    : " px-3 py-2 border rounded-md dark:border-gray-700 dark:text-gray-100 focus:dark:border-violet-400 bg-gray-700 hover:bg-gray-600"
                }
                type="button"
                id="parking"
                value={false}
                onClick={onMutate}
              >
                No
              </button>
            </div>
          </div>

          <div>
            <label className="formLabel">Furnished</label>
            <div className="flex gap-3">
              <button
                className={
                  furnished
                    ? "px-3 py-2 border rounded-md dark:border-gray-700 dark:text-gray-100 focus:dark:border-violet-400 bg-green-600 hover:bg-green-600"
                    : "px-3 py-2 border rounded-md dark:border-gray-700 dark:text-gray-100 focus:dark:border-violet-400 bg-gray-700 hover:bg-gray-600"
                }
                type="button"
                id="furnished"
                value={true}
                onClick={onMutate}
              >
                Yes
              </button>
              <button
                className={
                  !furnished && furnished !== null
                    ? "px-3 py-2 border rounded-md dark:border-gray-700 dark:text-gray-100 focus:dark:border-violet-400 bg-green-600 hover:bg-green-600"
                    : "px-3 py-2 border rounded-md dark:border-gray-700 dark:text-gray-100 focus:dark:border-violet-400 bg-gray-700 hover:bg-gray-600"
                }
                type="button"
                id="furnished"
                value={false}
                onClick={onMutate}
              >
                No
              </button>
            </div>
          </div>
        </div>

        {/* // ? ROW FOR ADDRESS TEXT BOX  */}
        <label className="mt-4">Address</label>
        <textarea
          className="w-full px-3 py-2 border rounded-md dark:border-gray-700 dark:text-gray-100 focus:dark:border-violet-400 bg-gray-700 hover:bg-gray-600"
          type="text"
          id="address"
          value={address}
          onChange={onMutate}
          required
        />

        {/* // ? ROW WHEN MANUAL GEOLOCATION NEEDED  */}
        {!geolocationEnabled && (
          <div className="flex gap-4 mt-4">
            <div className="grow">
              <label className="">Latitude</label>
              <input
                className="w-full px-3 py-2 border rounded-md dark:border-gray-700 dark:text-gray-100 focus:dark:border-violet-400 bg-gray-700 hover:bg-gray-600"
                type="number"
                id="latitude"
                value={latitude}
                onChange={onMutate}
                required
              />
            </div>
            <div className="grow">
              <label className="formLabel">Longitude</label>
              <input
                className="w-full px-3 py-2 border rounded-md dark:border-gray-700 dark:text-gray-100 focus:dark:border-violet-400 bg-gray-700 hover:bg-gray-600"
                type="number"
                id="longitude"
                value={longitude}
                onChange={onMutate}
                required
              />
            </div>
          </div>
        )}

        {/* // ? OFFER, REGULAR PRICE, DISCOUNTED PRICE ROW */}
        <div className="flex gap-4 mt-4 flex-wrap ">
          <div>
            <label className="formLabel">Offer</label>
            <div className="flex gap-3 ">
              <button
                className={
                  offer
                    ? "px-3 py-2 border rounded-md dark:border-gray-700 dark:text-gray-100 focus:dark:border-violet-400 bg-green-600 hover:bg-green-600"
                    : "px-3 py-2 border rounded-md dark:border-gray-700 dark:text-gray-100 focus:dark:border-violet-400 bg-gray-700 hover:bg-gray-600"
                }
                type="button"
                id="offer"
                value={true}
                onClick={onMutate}
              >
                Yes
              </button>
              <button
                className={
                  !offer && offer !== null
                    ? "px-3 py-2 border rounded-md dark:border-gray-700 dark:text-gray-100 focus:dark:border-violet-400 bg-green-600 hover:bg-green-600"
                    : "px-3 py-2 border rounded-md dark:border-gray-700 dark:text-gray-100 focus:dark:border-violet-400 bg-gray-700 hover:bg-gray-600"
                }
                type="button"
                id="offer"
                value={false}
                onClick={onMutate}
              >
                No
              </button>
            </div>
          </div>
          <div className="grow">
            <label className="formLabel">Regular Price</label>
            <input
              className="w-full px-3 py-2 border rounded-md dark:border-gray-700 dark:text-gray-100 focus:dark:border-violet-400 bg-gray-700 hover:bg-gray-600"
              type="number"
              id="regularPrice"
              value={regularPrice}
              onChange={onMutate}
              min="50"
              max="750000000"
              required
            />
          </div>
          <div className="mt-8">
            {type === "rent" && <p className="formPriceText">$/Month</p>}
          </div>

          {offer && (
            <div className="grow">
              <label className="formLabel">Discounted Price</label>
              <input
                className="w-full px-3 py-2 border rounded-md dark:border-gray-700 dark:text-gray-100 focus:dark:border-violet-400 bg-gray-700 hover:bg-gray-600"
                type="number"
                id="discountedPrice"
                value={discountedPrice}
                onChange={onMutate}
                min="50"
                max="750000000"
                required={offer}
              />
            </div>
          )}
        </div>

        {/* // ? ROW FOR ADD IMAGES AND CREATE LISTING / SUBMIT BUTTON  */}
        <div className="flex mt-7 flex-wrap justify-between items-end">
          <div className="bg-gray-700 p-3 rounded-xl xl:w-1/2 lg:w-1/2 md:w-1/2 sm:w-1/2 w-full">
            <label>
              <b>Images</b>
            </label>
            <p className="text-sm mb-3 ">
              The first image will be the cover (max 6).
            </p>
            <input
              className="cursor-pointer  "
              type="file"
              id="images"
              onChange={onMutate}
              max="6"
              accept=".jpg,.png,.jpeg"
              multiple
              required
            />
          </div>
          <div>
            <button
              className="w-full xl:w-52 lg:w-52 md:w-52 sm:w-52 mt-5 sm:mt-5 items-end px-3 py-2 cursor-pointer border rounded-md dark:border-gray-700 dark:text-gray-100 focus:dark:border-violet-400 bg-orange-600 hover:bg-orange-700"
              type="submit"
            >
              Create Listing
            </button>
          </div>
        </div>
      </form>
    </div>
  )
}
