import { type NextRequest, NextResponse } from "next/server"
import dbConnect from "@/lib/mongodb"
import DiaryEntry from "@/lib/models/DiaryEntry"

export async function PUT(request: NextRequest, { params }: { params: { id: string } }) {
  try {
    await dbConnect()
    const { title, content } = await request.json()

    const entry = await DiaryEntry.findByIdAndUpdate(
      params.id,
      { title: title || "", content, updatedAt: new Date() },
      { new: true },
    )

    if (!entry) {
      return NextResponse.json({ success: false, message: "Entry not found" }, { status: 404 })
    }

    return NextResponse.json({ success: true, entry })
  } catch (error) {
    return NextResponse.json({ success: false, message: "Failed to update entry" }, { status: 500 })
  }
}
