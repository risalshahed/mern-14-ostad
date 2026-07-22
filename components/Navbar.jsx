'use client'

import Link from "next/link";

export default function Navbar() {
  /* function handleNav(event) {
    console.log('items clicked')
    event.stopPropagation()
  } */

  return (
    // <nav className="shadow-md py-5" onClick={() => console.log('grandparent of items clicked')}>
    <nav className="shadow-md py-5 sticky top-0">
      {/* <div className="flex justify-between max-w-3xl mx-auto" onClick={() => console.log('parent of items clicked')}> */}
      <div className="max-w-5xl mx-auto flex justify-between items-center">
        <h1>
          My Portflio
        </h1>
        {/* <div className="flex gap-x-5" onClick={handleNav}> */}
        <div className="flex gap-x-5">
          {/* Nav Items */}
          <Link href='#about' className="hover:bg-slate-200 p-2 rounded-md">
            About
          </Link>
          <Link href='#projects' className="hover:bg-slate-200 p-2 rounded-md">
            Projects
          </Link>
          <Link href='#contact' className="hover:bg-slate-200 p-2 rounded-md">
            Contact
          </Link>
        </div>
      </div>
    </nav>
  )
}
