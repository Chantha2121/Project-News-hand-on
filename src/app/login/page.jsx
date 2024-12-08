'use client'

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Card } from "@/components/ui/card"
import Image from "next/image"
import { User, Lock } from 'lucide-react'
import axios from "axios";
import Link from "next/link";


export default function LoginPage() {
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  const [error, setError] = useState("")
  const [success, setSuccess] = useState("")

  const handleSubmit = async (e) => {
    e.preventDefault()
    setError("")
    setSuccess("")

    try {
      const response = await axios.post("http://localhost:3333/auth/login", {
        email,
        password,
      })

      if (response.status === 200) {
        setSuccess("Login successful!")
        setTimeout(() => {
          // Navigate to dashboard or home page
          window.location.href = "/home"
        }, 1500)
      }
    } catch (err) {
      setError(err.response?.data?.message || "An error occurred during login.")
    }
  }

  return (
    <div className="min-h-screen w-full flex">
      {/* Left Section - Login Form */}
      <div className="w-full lg:w-1/2 flex items-center justify-center p-8">
        <div className="w-full max-w-md space-y-8">
          <div className="space-y-2 text-center">
            <h1 className="text-2xl font-bold tracking-tight">LOGIN</h1>
            <p className="text-sm text-muted-foreground">
              Please login if you have an account
            </p>
          </div>

          <form className="space-y-4 p-8 m-2" onSubmit={handleSubmit}>
            <div className="space-y-2">
              <div className="relative">
                <User className="absolute left-3 top-2.5 h-5 w-5 text-muted-foreground" />
                <Input
                  className="pl-10"
                  placeholder="Email"
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                />
              </div>
              <div className="relative">
                <Lock className="absolute left-3 top-2.5 h-5 w-5 text-muted-foreground" />
                <Input
                  className="pl-10"
                  placeholder="Password"
                  type="password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  required
                />
              </div>
            </div>

            {error && <p className="text-red-500 text-sm">{error}</p>}
            {success && <p className="text-green-500 text-sm">{success}</p>}

            <div className="flex gap-4">
              <Button
                type="submit"
                className="md:mx-8 lg:mx-10 font-suwanpum px-4 sm:px-5 lg:px-6 py-2 bg-gradient-to-r from-blue-500 to-purple-500 text-white rounded-full text-sm sm:text-base"
              >
                Login Now
              </Button>
              <Link href="/signup">
              <Button className="font-suwanpum px-4 sm:px-5 lg:px-6 py-2 bg-gradient-to-r from-pink-500 to-red-500 text-white rounded-full text-sm sm:text-base">
                  Sign up
                </Button>
              </Link>
            </div>
          </form>
        </div>
      </div>

      {/* Right Section - Illustration */}
      <div className="hidden lg:flex w-1/2 bg-indigo-600 items-center justify-center p-8">
        <Card className="w-full max-w-md aspect-square bg-white/10 backdrop-blur-sm">
          <Image
            src="/img_Login.png"
            alt="Login illustration"
            width={500}
            height={500}
            className="w-full h-full object-cover rounded-lg"
            priority
          />
        </Card>
      </div>
    </div>
  )
}
