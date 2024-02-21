import { headerLinks } from '@/constants'
import Link from 'next/link'
import React from 'react'

const NavItems = () => {
  return (
    <ul className='md:flex-between flex'>NavItems
    
    {headerLinks.map((link)=>{

      return(
        <li>
          <Link href={Link.route}>{Link.label}</Link>
        </li>
      )
    })}
    
    </ul>
  )
}

export default NavItems