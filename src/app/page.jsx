'use client'
import {useState} from "react";
import {useCreateUserWithEmailAndPassword} from "react-firebase-hooks/auth"
import { auth } from "./firebase/config";
import { useRouter } from "next/navigation";
import Link from 'next/link'

const SignUp = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [createUserWithEmailAndPassword] = useCreateUserWithEmailAndPassword(auth);
  const router = useRouter()

  const handleSignUp = async () => {
    try {
      const res = await createUserWithEmailAndPassword(email,password)
      console.log({res}) 
      setEmail('');
      setPassword('')
      router.push('/sign-in')
    } catch(e){
      console.error(e)
    }
  };

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gray-900">
    <div className=" bg-gray-800 p-10 rounded-lg shadow-xl w-96">
    <h1 className="text-white text-2xl mb-5">Sign Up</h1>
    <input 
    type="email"
    placeholder="Email"
    value={email}
    onChange={(e) => setEmail(e.target.value)}
    className="w-full p-3 mb-4 bg-gray-700 rounded outline-none text-white placeholder-gray-500"
    />
    <input 
    type="password"
    placeholder="Password"
    value={password}
    onChange={(e) => setPassword(e.target.value)}
    className="w-full p-3 mb-4 bg-gray-700 rounded outline-none text-white placeholder-gray-500"
    />
    <button
     onClick={handleSignUp}
     className="w-full p-3 bg-indigo-500"
    >
      Sign Up
    </button>
    </div>
    <Link href='sign-in'>
    <button
     className="w-20 mt-5 p-3 bg-indigo-500 text-white rounded-lg"
    >
      Sign In
    </button>
    </Link>
    </div>
  )
}
export default SignUp
