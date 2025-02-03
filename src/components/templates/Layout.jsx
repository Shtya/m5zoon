import React from 'react'
import Navbar from './Navbar'
import Footer from '../atoms/Footer'

export default function Layout({children}) {
  return (
	<div className=' main relative' >
		<Navbar />
		{children}
		<Footer />
	</div>
  )
}









