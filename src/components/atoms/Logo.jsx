import { Link } from '@/navigation'
import { useLocale } from 'next-intl'
import Image from 'next/image'
import React from 'react'

export default function Logo({colorLogo = "blue" , cn}) {
	const locale = useLocale()

	const logos = {
		en : {
			blue :  "/imgs/logo-en-blue.png" ,
			white :  "/imgs/logo-en-white.png" ,
		},

		ar :{
			white :  "/imgs/logo.png" ,
			blue :  "/imgs/logo2.png" 
		}

	}
	

  return (
	<Link href={"/"} > <Image className={`${cn}`} src={logos?.[locale]?.[colorLogo] } alt="" width={120} height={40}  /> </Link>
  )
}
