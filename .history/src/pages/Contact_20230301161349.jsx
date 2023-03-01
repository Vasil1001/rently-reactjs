import React, { useEffect, useState } from "react"
import { Link, useNavigate, useParams, useSearchParams } from "react-router-dom"
import { doc, getDoc } from "firebase/firestore"
import { db } from "../firebase.config"
import { toast } from "react-toastify"
import { IoChevronBackOutline } from "react-icons/io5"

export default function Contact() {


  const [message,setMessage]=useState('')
  const [landlord,setLandlord]=useState(null)
  const [searchParams,setSearchParams]=useSearchParams()

const params=useParams()

useEffect(()=>{

  const getLandlord = async () =>{

      const docRef =doc(db,'users',params.landlordId)

      const docSnap=await getDoc(docRef)

      if(docSnap.exists()){
          setLandlord(docSnap.data())
      }
      else{
          toast.error('could not get landlord data')
      }
  }

  getLandlord()

},[params.landlordId])

const onChange=(e) => setMessage(e.target.value)

return (
  <div className="pagecontainer">
      <header>
          <p className="pageHeader">
              Contact Landlord
          </p>
      </header>

      {landlord !== null && (
          <main>
              <div className="contactLandlord">
                  <p className="landLordName">Contact {landlord?.name}</p>
              </div>
          <form className='messageForm'>
              <div className="messageDiv">
                  <label htmlFor="message" className='messageLabel'>Message</label>
                  <textarea name="message" id="message"  className='textarea' value={message} onChange={onChange}></textarea>
              </div>
          </form>
          </main>
          
      )}
  </div>
)
}
