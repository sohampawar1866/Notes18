import mongoose from "mongoose"

const DiaryEntrySchema = new mongoose.Schema({
  title: {
    type: String,
    default: "",
  },
  content: {
    type: String,
    required: true,
  },
  createdAt: {
    type: Date,
    default: Date.now,
  },
  updatedAt: {
    type: Date,
    default: Date.now,
  },
})

export default mongoose.models.DiaryEntry || mongoose.model("DiaryEntry", DiaryEntrySchema)
