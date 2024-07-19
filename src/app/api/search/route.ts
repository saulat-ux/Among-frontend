// src/app/api/search/route.ts
import { NextRequest, NextResponse } from "next/server";
import fs from "fs";
import path from "path";

type FacebookItem = {
  title: string;
  description: string;
  media: string[];
};

type InstagramItem = {
  username: string | null;
  caption: string;
};

type TwitterItem = {
  name: string;
  description: string;
};

type YouTubeItem = {
  id: { videoId: string };
  snippet: {
    title: string;
    description: string;
    thumbnails: {
      default: { url: string };
      medium: { url: string };
      high: { url: string };
    };
    channelTitle: string;
  };
};

type ApiData = {
  fb_api: { data: FacebookItem[] };
  insta_api: { data: InstagramItem[] };
  yt_api: { data: { items: YouTubeItem[] } };
  x_api: { data: TwitterItem[] };
};

export async function GET(req: NextRequest) {
  const { searchParams } = new URL(req.url);
  const query = searchParams.get("query") || "";

  if (!query) {
    return NextResponse.json(
      { error: "Query parameter is required" },
      { status: 400 }
    );
  }

  const filePath = path.join(process.cwd(), "src", "data", "data.json");
  const fileContents = fs.readFileSync(filePath, "utf8");
  const data: ApiData = JSON.parse(fileContents);

  const filterData = <T>(items: T[], filterFunc: (item: T) => boolean): T[] =>
    items.filter(filterFunc);

  const fbData = filterData(data.fb_api.data, (item) =>
    item.title.toLowerCase().includes(query.toLowerCase())
  );

  const instaData = filterData(
    data.insta_api.data,
    (item) =>
      typeof item.username === "string" &&
      item.username.toLowerCase().includes(query.toLowerCase())
  );
  const xData = filterData(
    data.x_api.data,
    (item) =>
      item.description.toLowerCase().includes(query.toLowerCase()) ||
      item.name.toLowerCase().includes(query.toLowerCase())
  );

  const ytData = filterData(
    data.yt_api.data.items,
    (item) =>
      item.snippet.description.toLowerCase().includes(query.toLowerCase()) ||
      item.snippet.title.toLowerCase().includes(query.toLowerCase())
  );
  // Add YouTube filtering if needed

  return NextResponse.json(
    { xData, fbData, instaData, ytData },
    { status: 200 }
  );
}
