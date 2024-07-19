// src/app/api/translate/route.ts
import { NextRequest, NextResponse } from "next/server";
import translate from "google-translate-api";

export async function POST(request: NextRequest) {
  try {
    const { text, targetLanguage } = await request.json();

    if (!text || !targetLanguage) {
      console.error("Missing text or targetLanguage");
      return NextResponse.json(
        { error: "Missing text or targetLanguage" },
        { status: 400 }
      );
    }

    console.log("Received text:", text);
    console.log("Target language:", targetLanguage);

    const response = await translate(text, { to: targetLanguage });
    console.log("Translation response:", response);

    return NextResponse.json({
      translatedText: response.text,
      fromLanguage: response.from.language.iso,
    });
  } catch (error: any) {
    console.error("Error in translation API:", error);

    const errorMessage =
      error instanceof Error ? error.message : JSON.stringify(error);

    return NextResponse.json(
      { error: errorMessage || "Unknown error" },
      { status: 500 }
    );
  }
}
