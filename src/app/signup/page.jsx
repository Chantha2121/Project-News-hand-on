"use client"
import { useState } from "react"
import axios from "axios"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Card } from "@/components/ui/card"
import Image from "next/image"
import { User, Lock } from 'lucide-react';
import Link from "next/link";
import { useRouter } from "next/navigation"; // Update import to `next/navigation`

export default function SignUpPage() {
  const [formData, setFormData] = useState({
    username: "",
    password: "",
    confirmPassword: "",
  })

  const [error, setError] = useState("")
  const [success, setSuccess] = useState("")
  const router = useRouter();  // Now works with next/navigation

  const handleChange = (e) => {
    const { name, value } = e.target
    setFormData((prev) => ({ ...prev, [name]: value }))
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    setError("")
    setSuccess("")

    if (formData.password !== formData.confirmPassword) {
      return setError("Passwords do not match.")
    }

    try {
      const response = await axios.post("http://localhost:3333/auth/signup", {
        email: formData.username,
        password: formData.password,
      })

      if (response.status == 200) {
        setSuccess("Sign-up successful! You can now log in.")
        setFormData({ username: "", password: "", confirmPassword: "" })
        setTimeout(() => {
          router.push("/login") // Navigate to the login page
        }, 2000)
        
      }
    } catch (err) {
      setError(err.response?.data?.message || "An error occurred during sign-up.")
    }
  }

  return (
    <div className="min-h-screen w-full flex">
      {/* Left Section - Sign Up Form */}
      <div className="w-full lg:w-1/2 flex items-center justify-center p-8">
        <div className="w-full max-w-md space-y-8">
          <div className="space-y-2 text-center">
            <h1 className="text-2xl font-bold tracking-tight">Sign Up</h1>
            <p className="text-sm text-muted-foreground">
              Please signup if you don&apos;t have an account
            </p>
          </div>

          <form className="space-y-4 p-8 m-2" onSubmit={handleSubmit}>
            <div className="space-y-2">
              <div className="relative">
                <User className="absolute left-3 top-2.5 h-5 w-5 text-muted-foreground" />
                <Input
                  className="pl-14"
                  placeholder="Email"
                  type="email"
                  name="username"
                  value={formData.username}
                  onChange={handleChange}
                  required
                />
              </div>
              <div className="relative">
                <Lock className="absolute left-3 top-2.5 h-5 w-5 text-muted-foreground" />
                <Input
                  className="pl-14"
                  placeholder="Password"
                  type="password"
                  name="password"
                  value={formData.password}
                  onChange={handleChange}
                  required
                />
              </div>
              <div className="relative">
                <Lock className="absolute left-3 top-2.5 h-5 w-5 text-muted-foreground" />
                <Input
                  className="pl-14"
                  placeholder="Confirm Password"
                  type="password"
                  name="confirmPassword"
                  value={formData.confirmPassword}
                  onChange={handleChange}
                  required
                />
              </div>
            </div>

            {error && <p className="text-red-500 text-sm">{error}</p>}
            {success && <p className="text-green-500 text-sm">{success}</p>}

            <div className="flex gap-4">
              <Link href="/login">
              <Button
                type="button"
                className="md:mx-8 lg:mx-10 font-suwanpum px-4 sm:px-5 lg:px-6 py-2 bg-gradient-to-r from-blue-500 to-purple-500 text-white rounded-full text-sm sm:text-base"
              >
                Login Now
              </Button>
              </Link>
              <Button
                type="submit"
                className="font-suwanpum px-4 sm:px-5 lg:px-6 py-2 bg-gradient-to-r from-pink-500 to-red-500 text-white rounded-full text-sm sm:text-base"
              >
                Sign Up
              </Button>
            </div>

            <div className="relative">
              <div className="absolute inset-0 flex items-center">
                <span className="w-full border-t" />
              </div>
              <div className="relative flex justify-center text-xs uppercase">
                <span className="bg-background px-2 text-muted-foreground">
                  Sign Up with Others
                </span>
              </div>
            </div>

            <Button
              variant="outline"
              className="w-full"
              onClick={() => {}}
            >
              <Image
                src="/google.svg"
                alt="Google"
                width={20}
                height={20}
                className="mr-2"
              />
              Login with Google
            </Button>
          </form>
        </div>
      </div>

      {/* Right Section - Illustration */}
      <div className="hidden lg:flex w-1/2 bg-indigo-600 items-center justify-center p-8">
        <Card className="w-full max-w-md aspect-square bg-white/10 backdrop-blur-sm">
          <Image
            src="/img_Login.png"
            alt="Sign Up illustration"
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
