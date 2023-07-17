"use client"

import React from 'react'
import { useSession } from "next-auth/react"
import { useRouter } from 'next/navigation'

const Dashboard = () => {
    const session = useSession()
    const router = useRouter()

    // if (session.status === 'loading') {
    //     return <p>Loading...</p>
    // }

    if (session.status === 'unauthenticated') {
        router?.push('/login')
    }

    if (session.status === 'authenticated') {
        const user = session.data.user;
        return (
            <main className='px-10 py-5'>
                <div className="text-center text-3xl font-bold">
                    Hi! {user.name}
                </div>
                <div className="text-center font-bold">
                    {user.email}
                </div>
            </main>
        )
    }
}

export default Dashboard