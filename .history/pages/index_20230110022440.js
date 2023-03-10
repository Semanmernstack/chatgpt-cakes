import Head from 'next/head'
import Image from 'next/image'
import { useState } from 'react'

export default function Home() {
  const [result, setResult] = useState("")

  return (
    <div >
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div className='flex flex-col p-5  justify-center text-center items-center mt-24   text-2xl bg-dark-500'>
      
      <h1 className="mb-5 font-serif font-bold text-pink-500">Cake Generator and Recipes</h1>
      <form  className="flex flex-col items-center justify-center ">
        <input value={messageInput} onChange ={(e) => setMessageInput(e.target.value)} className='text-centre items-center border p-1' type="text " placeholder='search for cakes' />
        <button type='submit' className='w-[320px] mt-7 animate-pulse p-2 rounded-lg bg-pink-900'>Generate</button>
      </form>
      <div className="text-sm mt-3 lg:text-large">result</div>
    </div>
     

      
    </div>
  )
}
