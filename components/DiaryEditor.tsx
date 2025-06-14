"use client"

import { useState, useEffect } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { X, Save } from "lucide-react"

interface DiaryEntry {
  _id: string
  title: string
  content: string
  createdAt: string
}

interface DiaryEditorProps {
  isOpen: boolean
  onClose: () => void
  entry?: DiaryEntry
  onSave: (entry: DiaryEntry) => void
}

export default function DiaryEditor({ isOpen, onClose, entry, onSave }: DiaryEditorProps) {
  const [title, setTitle] = useState("")
  const [content, setContent] = useState("")
  const [isSaving, setIsSaving] = useState(false)

  useEffect(() => {
    if (entry) {
      setTitle(entry.title)
      setContent(entry.content)
    } else {
      setTitle("")
      setContent("")
    }
  }, [entry])

  const handleSave = async () => {
    if (!content.trim()) return

    setIsSaving(true)

    try {
      const url = entry ? `/api/entries/${entry._id}` : "/api/entries"
      const method = entry ? "PUT" : "POST"

      const response = await fetch(url, {
        method,
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ title, content }),
      })

      const data = await response.json()

      if (data.success) {
        onSave(data.entry)
        onClose()
      }
    } catch (error) {
      console.error("Failed to save entry:", error)
    } finally {
      setIsSaving(false)
    }
  }

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 bg-black/50 backdrop-blur-sm z-50 flex items-center justify-center p-4"
          onClick={onClose}
        >
          <motion.div
            initial={{ opacity: 0, scale: 0.9, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.9, y: 20 }}
            transition={{ type: "spring", damping: 25, stiffness: 300 }}
            onClick={(e) => e.stopPropagation()}
            className="w-full max-w-2xl max-h-[90vh] overflow-hidden"
          >
            <Card className="bg-white/95 backdrop-blur-sm border-0 shadow-2xl">
              <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-4">
                <CardTitle className="text-xl font-light text-slate-800">
                  {entry ? "Edit Entry" : "New Entry"}
                </CardTitle>
                <Button variant="ghost" size="sm" onClick={onClose} className="h-8 w-8 p-0 hover:bg-slate-100">
                  <X className="h-4 w-4" />
                </Button>
              </CardHeader>

              <CardContent className="space-y-4">
                <Input
                  placeholder="Title (optional)"
                  value={title}
                  onChange={(e) => setTitle(e.target.value)}
                  className="bg-white/50 border-slate-200 focus:border-blue-400 focus:ring-blue-400"
                />

                <Textarea
                  placeholder="Write your thoughts..."
                  value={content}
                  onChange={(e) => setContent(e.target.value)}
                  className="min-h-[300px] bg-white/50 border-slate-200 focus:border-blue-400 focus:ring-blue-400 resize-none"
                />

                <div className="flex justify-end space-x-3 pt-4">
                  <Button variant="outline" onClick={onClose} className="border-slate-300 hover:bg-slate-50">
                    Cancel
                  </Button>
                  <Button
                    onClick={handleSave}
                    disabled={!content.trim() || isSaving}
                    className="bg-gradient-to-r from-blue-500 to-purple-600 hover:from-blue-600 hover:to-purple-700 text-white"
                  >
                    <Save className="w-4 h-4 mr-2" />
                    {isSaving ? "Saving..." : "Save Entry"}
                  </Button>
                </div>
              </CardContent>
            </Card>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  )
}
