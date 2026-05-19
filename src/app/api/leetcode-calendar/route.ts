import { NextResponse } from "next/server";

// Fetch LeetCode submission calendar for a user
export async function GET(request: Request) {
  const { searchParams } = new URL(request.url);
  const username = searchParams.get("username");

  if (!username) {
    return NextResponse.json({ error: "Username required" }, { status: 400 });
  }

  try {
    const query = `
      query userProfileCalendar($username: String!, $year: Int) {
        matchedUser(username: $username) {
          userCalendar(year: $year) {
            submissionCalendar
          }
        }
      }
    `;

    const currentYear = new Date().getFullYear();

    const res = await fetch("https://leetcode.com/graphql", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "Referer": "https://leetcode.com",
        "User-Agent": "Mozilla/5.0",
      },
      body: JSON.stringify({ query, variables: { username, year: currentYear } }),
      next: { revalidate: 3600 }, // Cache for 1 hour
    });

    if (!res.ok) {
      throw new Error(`LeetCode API responded with ${res.status}`);
    }

    const data = await res.json();
    const calendarJson =
      data?.data?.matchedUser?.userCalendar?.submissionCalendar;

    if (!calendarJson) {
      return NextResponse.json({ error: "User not found or private profile" }, { status: 404 });
    }

    // submissionCalendar is a JSON string: { "timestamp": count, ... }
    const rawCalendar: Record<string, number> = JSON.parse(calendarJson);

    // Convert Unix timestamps → { date, count, level } for react-activity-calendar
    const activities = Object.entries(rawCalendar).map(([ts, count]) => {
      const date = new Date(Number(ts) * 1000).toISOString().split("T")[0];
      // Level: 0=none, 1=1-2, 2=3-5, 3=6-9, 4=10+
      const level =
        count === 0 ? 0 : count <= 2 ? 1 : count <= 5 ? 2 : count <= 9 ? 3 : 4;
      return { date, count, level };
    });

    // Sort ascending by date
    activities.sort((a, b) => a.date.localeCompare(b.date));

    return NextResponse.json({ activities });
  } catch (err) {
    console.error("LeetCode API error:", err);
    return NextResponse.json(
      { error: "Failed to fetch LeetCode data" },
      { status: 500 }
    );
  }
}
