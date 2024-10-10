import type { NextRequest } from 'next/server';
import { NextResponse } from 'next/server';

export async function GET(request: NextRequest) {
  const searchParams = request.nextUrl.searchParams;
  const url = searchParams.get('url') as string;
  const filename = searchParams.get('filename') as string;
  const extension = searchParams.get('extension') as string;

  function getContentTypeByExtension(extension: string): string {
    const contentTypes: { [key: string]: string } = {
      mp4: 'video/mp4',
      webm: 'video/webm',
      avi: 'video/x-msvideo',
      mpeg: 'video/mpeg',
      mov: 'video/quicktime',
      mkv: 'video/x-matroska',
    };

    // 확장자에 해당하는 Content-Type을 반환하고, 없는 경우 기본값 설정
    return contentTypes[extension.toLowerCase()] || 'application/octet-stream';
  }

  const response = await fetch(url);
  if (!response.ok) {
    throw new Error(`unexpected response ${response.statusText}`);
  }

  // NextResponse를 통해 스트리밍된 데이터를 직접 반환
  return new NextResponse(response.body, {
    headers: {
      'Content-Type': getContentTypeByExtension(extension),
      'Content-Disposition': `attachment; filename=${filename}.${extension}`,
    },
  });
}
