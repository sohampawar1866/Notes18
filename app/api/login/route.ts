import { type NextRequest, NextResponse } from "next/server"

export async function POST(request: NextRequest) {
  try {
    const { answer } = await request.json()

    // Get the security answer from environment variable or use default
    const correctAnswer = process.env.SECURITY_ANSWER || "Fight Back"

    if (answer.toLowerCase().trim() === correctAnswer.toLowerCase().trim()) {
      return NextResponse.json({ success: true })
    } else {
      return NextResponse.json({ success: false, message: "Incorrect answer. Try again." }, { status: 401 })
    }
  } catch (error) {
    return NextResponse.json({ success: false, message: "Server error" }, { status: 500 })
  }
}
