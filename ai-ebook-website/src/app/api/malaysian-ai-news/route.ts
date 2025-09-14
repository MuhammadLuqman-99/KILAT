import { NextRequest, NextResponse } from 'next/server';
import { fetchAllMalaysianAINews, fallbackNews } from '@/lib/news-api';

export async function GET(request: NextRequest) {
  try {
    // Fetch news from all sources
    const news = await fetchAllMalaysianAINews();

    // Return the aggregated news
    return NextResponse.json(news, {
      headers: {
        'Cache-Control': 'public, s-maxage=3600, stale-while-revalidate=7200'
      }
    });
  } catch (error) {
    console.error('Error fetching Malaysian AI news:', error);

    // Return fallback data if APIs fail
    return NextResponse.json(fallbackNews, {
      status: 500,
      headers: {
        'Cache-Control': 'public, s-maxage=300, stale-while-revalidate=600'
      }
    });
  }
}

export async function POST(request: NextRequest) {
  // Allow manual refresh by invalidating cache
  try {
    const news = await fetchAllMalaysianAINews();
    return NextResponse.json(news);
  } catch (error) {
    console.error('Error refreshing Malaysian AI news:', error);
    return NextResponse.json(fallbackNews, { status: 500 });
  }
}