'use client'

import React, { useState } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { useRouter } from 'next/navigation'
import { Menu, Search, X } from 'lucide-react'

import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet"

export default function Navbar() {
  const [isSearchVisible, setIsSearchVisible] = useState(false)
  const [isSheetOpen, setIsSheetOpen] = useState(false) // Manage sheet visibility
  const router = useRouter() // For programmatic navigation

  const toggleSearch = () => {
    setIsSearchVisible(!isSearchVisible)
  }

  const closeSheetAndNavigate = (path) => {
    setIsSheetOpen(false) // Close the sheet
    router.push(path) // Navigate to the selected page
  }

  return (
    <nav className="bg-[#FEF5F5] border-b border-gray-300">
      <div className="container mx-auto px-4 sm:px-3 lg:px-3 py-1">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <div className="flex items-center space-x-3">
            <Image
              src="/logo.svg"
              alt="Logo"
              width={80}
              height={80}
              className="w-14 h-14 sm:w-16 sm:h-16"
            />
            <div>
              <span className="text-sm sm:text-lg font-suwanpum font-bold text-orange-400">
                Track News
              </span>
            </div>
          </div>

          {/* Search Bar for Small Screens */}
          <div
            className={`absolute top-4 right-4 lg:hidden z-50 transition-transform ${
              isSearchVisible ? "translate-y-0" : "translate-y-[-100px]"
            }`}
          >
            <div className="flex items-center bg-white rounded-full shadow-md px-3 py-1 w-60 sm:w-72">
              <Search className="text-gray-400" />
              <Input
                type="search"
                placeholder="Search..."
                className="pl-3 w-full"
              />
              <X
                className="ml-2 text-gray-400 cursor-pointer"
                onClick={toggleSearch}
              />
            </div>
          </div>

          {/* Navigation Links */}
          <div className="hidden md:flex space-x-4 lg:space-x-6 text-gray-700 font-suwanpum">
            <Link href="/" className="hover:text-gray-900 transition">Home</Link>
            <Link href="/category-news" className="hover:text-gray-900 transition">Category News</Link>
            <Link href="/hot-news" className="hover:text-gray-900 transition">Hot News</Link>
            <Link href="/about" className="hover:text-gray-900 transition">About</Link>
            <Link href="/contacts" className="hover:text-gray-900 transition">Contacts</Link>
          </div>

          {/* Search Bar and Buttons for Large Screens */}
          <div className="hidden lg:flex items-center space-x-4 font-suwanpum">
            <div className="relative">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
              <Input
                type="search"
                placeholder="Search..."
                className="pl-10 sm:w-30 md:hide lg:w-60 rounded-full border-gray-300"
              />
            </div>
            <Link href="/login">
              <Button className="font-suwanpum px-4 sm:px-5 lg:px-6 py-2 bg-gradient-to-r from-blue-500 to-purple-500 text-white rounded-full text-sm sm:text-base">
                Login
              </Button>
            </Link>
            <Link href="/signup">
              <Button className="font-suwanpum px-4 sm:px-5 lg:px-6 py-2 bg-gradient-to-r from-pink-500 to-red-500 text-white rounded-full text-sm sm:text-base">
                Sign up
              </Button>
            </Link>
          </div>

          {/* Hamburger and Search for Mobile */}
          <div className="flex items-center space-x-4 lg:hidden">
            <Button
              variant="ghost"
              size="icon"
              onClick={toggleSearch}
              className="p-2"
            >
              <Search className="h-5 w-5 sm:h-6 sm:w-6" />
            </Button>
            <Sheet open={isSheetOpen} onOpenChange={setIsSheetOpen}>
              <SheetTrigger asChild>
                <Button variant="ghost" size="icon" className="p-2">
                  <Menu className="h-6 w-6" />
                </Button>
              </SheetTrigger>
              <SheetContent
                side="left"
                className="w-[250px] sm:w-[300px] md:w-[350px]"
              >
                <SheetHeader className="font-suwanpum">
                  <SheetTitle>Menu</SheetTitle>
                </SheetHeader>
                <div className="flex flex-col space-y-4 mt-4 font-suwanpum">
                  <button
                    onClick={() => closeSheetAndNavigate('/')}
                    className="block text-sm sm:text-base md:text-lg font-medium"
                  >
                    Home
                  </button>
                  <button
                    onClick={() => closeSheetAndNavigate('/category-news')}
                    className="block text-sm sm:text-base md:text-lg font-medium"
                  >
                    Category News
                  </button>
                  <button
                    onClick={() => closeSheetAndNavigate('/hot-news')}
                    className="block text-sm sm:text-base md:text-lg font-medium"
                  >
                    Hot News
                  </button>
                  <button
                    onClick={() => closeSheetAndNavigate('/about')}
                    className="block text-sm sm:text-base md:text-lg font-medium"
                  >
                    About
                  </button>
                  <button
                    onClick={() => closeSheetAndNavigate('/contacts')}
                    className="block text-sm sm:text-base md:text-lg font-medium"
                  >
                    Contacts
                  </button>
                  <button
                    onClick={() => closeSheetAndNavigate('/login')}
                    className="w-full bg-gradient-to-r from-blue-500 to-purple-500 text-white rounded-full"
                  >
                    Login
                  </button>
                  <button
                    onClick={() => closeSheetAndNavigate('/signup')}
                    className="w-full bg-gradient-to-r from-pink-500 to-red-500 text-white rounded-full"
                  >
                    Sign up
                  </button>
                </div>
              </SheetContent>
            </Sheet>
          </div>
        </div>
      </div>
    </nav>
  )
}
