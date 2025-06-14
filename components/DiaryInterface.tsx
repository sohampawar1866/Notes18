"use client"

import { useState, useEffect } from "react"
import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"
import { LogOut } from "lucide-react"
import DiaryCard from "./DiaryCard"
import DiaryEditor from "./DiaryEditor"

interface DiaryEntry {
  _id: string
  title: string
  content: string
  createdAt: string
}

interface DiaryInterfaceProps {
  onLogout: () => void
}

export default function DiaryInterface({ onLogout }: DiaryInterfaceProps) {
  const [entries, setEntries] = useState<DiaryEntry[]>([])
  const [isEditorOpen, setIsEditorOpen] = useState(false)
  const [selectedEntry, setSelectedEntry] = useState<DiaryEntry | undefined>()
  const [isLoading, setIsLoading] = useState(true)

  useEffect(() => {
    fetchEntries()
  }, [])

  const fetchEntries = async () => {
    try {
      const response = await fetch("/api/entries")
      const data = await response.json()

      if (data.success) {
        setEntries(data.entries)
      }
    } catch (error) {
      console.error("Failed to fetch entries:", error)
    } finally {
      setIsLoading(false)
    }
  }

  const handleCreateNew = () => {
    setSelectedEntry(undefined)
    setIsEditorOpen(true)
  }

  const handleEditEntry = (entry: DiaryEntry) => {
    setSelectedEntry(entry)
    setIsEditorOpen(true)
  }

  const handleSaveEntry = (savedEntry: DiaryEntry) => {
    if (selectedEntry) {
      setEntries((prev) => prev.map((entry) => (entry._id === savedEntry._id ? savedEntry : entry)))
    } else {
      setEntries((prev) => [savedEntry, ...prev])
    }
  }

  const handleLogout = () => {
    localStorage.removeItem("diary-authenticated")
    onLogout()
  }

  if (isLoading) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-100 flex items-center justify-center">
        <motion.div
          animate={{ rotate: 360 }}
          transition={{ duration: 1, repeat: Number.POSITIVE_INFINITY, ease: "linear" }}
          className="w-8 h-8 border-2 border-blue-500 border-t-transparent rounded-full"
        />
      </div>
    )
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-100">
      <header className="bg-white/80 backdrop-blur-sm border-b border-slate-200 sticky top-0 z-40">
        <div className="max-w-6xl mx-auto px-4 py-4 flex items-center justify-between">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            className="flex items-center space-x-3"
          >
            <div className="w-8 h-8 bg-gradient-to-r from-blue-500 to-purple-600 rounded-full flex items-center justify-center">
              <span className="text-white text-sm">📖</span>
            </div>
            <h1 className="text-xl font-light text-slate-800">Futuristic Diary</h1>
          </motion.div>

          <Button variant="outline" onClick={handleLogout} className="border-slate-300 hover:bg-slate-50">
            <LogOut className="w-4 h-4 mr-2" />
            Logout
          </Button>
        </div>
      </header>

      <main className="max-w-6xl mx-auto px-4 py-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          <DiaryCard isCreateCard onClick={handleCreateNew} index={0} />

          {entries.map((entry, index) => (
            <DiaryCard key={entry._id} entry={entry} onClick={() => handleEditEntry(entry)} index={index + 1} />
          ))}
        </div>

        {entries.length === 0 && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
            className="text-center py-12"
          >
            <p className="text-slate-600 text-lg">Your diary is empty. Create your first entry to get started!</p>
          </motion.div>
        )}
      </main>

      <DiaryEditor
        isOpen={isEditorOpen}
        onClose={() => setIsEditorOpen(false)}
        entry={selectedEntry}
        onSave={handleSaveEntry}
      />
    </div>
  )
}
