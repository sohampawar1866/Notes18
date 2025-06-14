"use client"

import { useState, useEffect } from "react"
import AuthScreen from "@/components/AuthScreen"
import DiaryInterface from "@/components/DiaryInterface"

export default function Home() {
  const [isAuthenticated, setIsAuthenticated] = useState(false)
  const [isLoading, setIsLoading] = useState(true)

  useEffect(() => {
    const authStatus = localStorage.getItem("diary-authenticated")
    setIsAuthenticated(authStatus === "true")
    setIsLoading(false)
  }, [])

  if (isLoading) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-100 flex items-center justify-center">
        <div className="w-8 h-8 border-2 border-blue-500 border-t-transparent rounded-full animate-spin" />
      </div>
    )
  }

  return (
    <>
      {isAuthenticated ? (
        <DiaryInterface onLogout={() => setIsAuthenticated(false)} />
      ) : (
        <AuthScreen onLogin={() => setIsAuthenticated(true)} />
      )}
    </>
  )
}
