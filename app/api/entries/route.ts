import { type NextRequest, NextResponse } from "next/server"
import dbConnect from "@/lib/mongodb"
import DiaryEntry from "@/lib/models/DiaryEntry"

export async function GET() {
  try {
    await dbConnect()
    const entries = await DiaryEntry.find({}).sort({ createdAt: -1 })
    return NextResponse.json({ success: true, entries })
  } catch (error) {
    return NextResponse.json({ success: false, message: "Failed to fetch entries" }, { status: 500 })
  }
}

export async function POST(request: NextRequest) {
  try {
    await dbConnect()
    const { title, content } = await request.json()

    const entry = new DiaryEntry({
      title: title || "",
      content,
    })

    await entry.save()
    return NextResponse.json({ success: true, entry })
  } catch (error) {
    return NextResponse.json({ success: false, message: "Failed to save entry" }, { status: 500 })
  }
}
