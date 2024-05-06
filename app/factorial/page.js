//import Image from "next/image";
//import styles from "./page.module.css";
'use client'
import {useState} from 'react'

function fact(x){
 if (x <= 1) return 1
 return x*fact(x-1);
}


export default function Factorial() {
  const [number, setNumber] = useState(5)
  return(
    <>
      <p>{fact(number)}</p>
      <button type="button" onClick={()=>setNumber(3000000000000)}>Click</button>
    </>
  ); 
}