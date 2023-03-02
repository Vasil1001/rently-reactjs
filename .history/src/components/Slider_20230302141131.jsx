import React from 'react'
import {useState, useEffect} from 'react'
import { useNavigate, Link } from "react-router-dom"
import {collection, getDocs, query, orderBy} from "firebase/firestore"
import {db} from "../firebase"
export default function Slider() {
  return (
    <div>Slider</div>
  )
}
