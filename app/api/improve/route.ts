import { NextResponse } from "next/server"
import Groq from "groq-sdk"

const groq = new Groq({
  apiKey: process.env.GROQ_API_KEY,
})

export async function POST(req: Request) {
  try {
    const { text, tone } = await req.json()

    const prompt = `
You are an expert English editor.
Correct all spelling mistakes.
Fix grammar completely.
Rewrite clearly and professionally in a ${tone} tone.
Return only the final corrected version.

Text:
${text}
`

    const completion = await groq.chat.completions.create({
      model: "llama-3.3-70b-versatile",
      temperature: 0.7,
      messages: [
        {
          role: "user",
          content: prompt,
        },
      ],
    })

    const result = completion.choices[0]?.message?.content

    return NextResponse.json({ result })

  } catch (error) {
    console.error("Groq Error:", error)
    return NextResponse.json({ error: "Server error" }, { status: 500 })
  }
}