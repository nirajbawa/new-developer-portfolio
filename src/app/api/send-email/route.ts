import { NextResponse } from "next/server";

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const token = process.env.SECURITY_TOKEN;

    const response = await fetch("http://smtp.rakshakai.org/send-email", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "x-api-key": token || "",
      },
      body: JSON.stringify({
        ...body,
        recipient: "nirajbava222@gmail.com",
      }),
    });

    if (!response.ok) {
      const errorText = await response.text();
      return NextResponse.json(
        { error: errorText || "Failed to send email" },
        { status: response.status },
      );
    }

    const data = await response.json();
    return NextResponse.json(data);
  } catch (error: any) {
    // Log nested details if it's an AggregateError or has a cause
    if (error.cause) {
      console.error("Underlying cause details:", error.cause);
      if (Array.isArray(error.cause.errors)) {
        error.cause.errors.forEach((err: any, idx: number) => {
          console.error(`Sub-error [${idx}]:`, err);
        });
      }
    }

    const isRefused =
      error.code === "ECONNREFUSED" ||
      error.cause?.code === "ECONNREFUSED" ||
      (Array.isArray(error.cause?.errors) &&
        error.cause.errors.some((e: any) => e.code === "ECONNREFUSED"));

    const userFriendlyMessage = isRefused
      ? "Express email service is offline. Please start the server at http://localhost:5000."
      : error.message || "Internal Server Error";

    return NextResponse.json(
      {
        error: userFriendlyMessage,
        code: error.code || error.cause?.code || "UNKNOWN",
        details: error.stack || "",
      },
      { status: 500 },
    );
  }
}
