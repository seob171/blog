![Logo](https://www.shimyuseob.xyz/api/og)

This is a [Next.js](https://nextjs.org/) project bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app).

## Package Manager Installation

Install pnpm

### Mac

```bash
brew install pnpm
```

### Window

```bash
iwr htttps://get.pnpm.io/install/ps1 -useb | iex
```

## Run Locally

Clone the project

```bash
git clone https://github.com/seob171/blog.git
```

Go to the project directory `apps/blog`

Install dependencies

```bash
pnpm install
```

Start the dev server

```bash
pnpm dev
```

## Project Architecture

| 디렉토리 | 설명                                              |
| -------- | ------------------------------------------------- |
| `post`   | 블로그에 포스팅하는 mdx 파일 디렉토리             |
| `public` | 파비콘 및 포스팅에 사용되는 이미지, 영상 디렉토리 |
| `src`  |                                                  |
| `app/api` | dynamic og 이미지와 조회수 관련 api routes 디렉토리 |
| `components` | mdx에서 사용되는 커스텀 컴포넌트 및 ui 컴포넌트를 디렉토리 |
| `fonts` | og 이미지와 MDX 작성 시 사용하는 폰트 디렉토리 |
| `hooks` | 커스텀 훅 디렉토리 |
| `provider` | tanstack-query, theme provider 디렉토리 |
| `service` | tanstack-query와 연동해서 사용되는 queryKey 및 queryHook 디렉토리 |
| `types` | 타입관련 디렉토리 |
| `utils` | 유틸함수 디렉토리 |
