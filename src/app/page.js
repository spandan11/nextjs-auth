import Link from "next/link"

export default function Home() {
  return (
    <main className='px-10 py-10 mx-auto'>
      Home page
      <div className="px-5 py-10 text-center">
        <Link href="/login" className="p-5 underline dark:text-white rounded-2xl mx-5">Login</Link>
        <Link href="/register" className="p-5 underline dark:text-white rounded-2xl mx-5">Signup</Link>
      </div>
    </main>
  )
}
