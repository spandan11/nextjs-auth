"use client"
import React, { useState } from 'react'
import Link from 'next/link'
import { signOut, useSession } from 'next-auth/react'
import ThemeButton from '@/components/ThemeButton'

const Navbar = () => {
    const session = useSession()
    const [Ham, setHam] = useState('hide')
    const toggleHam = () => {
        setHam(
            Ham == "hide" ? "show" : "hide"
        )
    }
    return (
        <>
            <div className="dark:text-white bg-white md:border-b-4 md:border-indigo-500 dark:bg-gray-900 text-center px-10 md:flex md:justify-between md:px-20 ">
                <div className=' flex justify-between md:text-left'>
                    <h1 className='py-5 text-2xl'> <Link href="/">Next Auth</Link> </h1>
                    <span className='md:hidden pt-5 text-center'>
                        <ThemeButton />
                    </span>
                    <button className='md:hidden' onClick={toggleHam}>
                        <span>{Ham == "hide" ? (
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                                <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
                            </svg>
                        ) : (
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                                <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                            </svg>

                        )}</span>
                    </button>
                </div>
                <div className='md:flex'>
                    <ul className={`${Ham == "hide" ? "hidden" : ""} md:flex dark:bg-gray-900`}>
                        <li className='py-2 text-center md:p-5 hover:text-indigo-500'> <Link href="/">Home</Link> </li>
                        <li className='py-2 text-center md:p-5 hover:text-indigo-500'> <Link href="/dashboard">Dashboard</Link> </li>
                        {session.status === "authenticated" ?
                            (<li className='py-2 text-center md:p-5 hover:text-indigo-500 cursor-pointer' onClick={signOut}> SignOut </li>)
                            : ""
                        }
                    </ul>
                    <span className='hidden md:block py-2 text-center md:p-2'>
                        <ThemeButton />
                    </span>
                </div>
            </div>
        </>
    )
}

export default Navbar