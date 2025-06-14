"use client"

import { motion } from "framer-motion"
import { Card, CardContent } from "@/components/ui/card"
import { Plus } from "lucide-react"

interface DiaryEntry {
  _id: string
  title: string
  content: string
  createdAt: string
}

interface DiaryCardProps {
  entry?: DiaryEntry
  isCreateCard?: boolean
  onClick: () => void
  index: number
}

export default function DiaryCard({ entry, isCreateCard, onClick, index }: DiaryCardProps) {
  const formatDate = (dateString: string) => {
    return new Date(dateString).toLocaleDateString("en-GB", {
      day: "numeric",
      month: "long",
      year: "numeric",
      hour: "2-digit",
      minute: "2-digit",
    })
  }

  const getPreview = (content: string) => {
    return content.length > 120 ? content.substring(0, 120) + "..." : content
  }

  if (isCreateCard) {
    return (
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: index * 0.1 }}
        whileHover={{ y: -5 }}
        whileTap={{ scale: 0.98 }}
      >
        <Card
          className="cursor-pointer bg-gradient-to-br from-blue-50 to-indigo-100 border-2 border-dashed border-blue-300 hover:border-blue-400 transition-all duration-300 min-h-[200px]"
          onClick={onClick}
        >
          <CardContent className="flex flex-col items-center justify-center h-full p-8">
            <motion.div
              whileHover={{ scale: 1.1 }}
              className="w-12 h-12 bg-blue-500 rounded-full flex items-center justify-center mb-4"
            >
              <Plus className="w-6 h-6 text-white" />
            </motion.div>
            <h3 className="text-lg font-medium text-blue-700 mb-2">Create New Note</h3>
            <p className="text-blue-600 text-center text-sm">Capture your thoughts and memories</p>
          </CardContent>
        </Card>
      </motion.div>
    )
  }

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: index * 0.1 }}
      whileHover={{ y: -5 }}
      whileTap={{ scale: 0.98 }}
    >
      <Card
        className="cursor-pointer bg-white/80 backdrop-blur-sm border-slate-200 hover:border-blue-300 hover:shadow-lg transition-all duration-300 min-h-[200px]"
        onClick={onClick}
      >
        <CardContent className="p-6">
          <div className="space-y-3">
            {entry?.title && <h3 className="text-lg font-semibold text-slate-800 line-clamp-2">{entry.title}</h3>}
            <p className="text-slate-600 text-sm leading-relaxed line-clamp-4">{getPreview(entry?.content || "")}</p>
            <div className="pt-2 border-t border-slate-100">
              <p className="text-xs text-slate-500">{formatDate(entry?.createdAt || "")}</p>
            </div>
          </div>
        </CardContent>
      </Card>
    </motion.div>
  )
}
