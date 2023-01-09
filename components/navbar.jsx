// import Head from 'next/head'
// import Image from 'next/image'
// import { Inter } from '@next/font/google'
// import styles from '../styles/Home.module.css'

// const inter = Inter({ subsets: ['latin'] })

import React from 'react'
import Link from 'next/link'

const Navbar = () => {
  return (
    <div >

    <div style={{display:"flex",justifyContent:"space-around",backgroundColor:"black"}}>
    <h1> <Link style={{color:"white"}} href="/">Home</Link></h1>
    <h1> <Link style={{color:"white"}} href="/project">Projects</Link></h1>
    <h1> <Link style={{color:"white"}} href="/experience">experiences</Link></h1>

    </div>

    </div>
  )
}

export default Navbar
