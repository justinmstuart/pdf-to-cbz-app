# PDF → CBZ App

[![CI](https://github.com/justinmstuart/pdf-to-cbz-app/actions/workflows/ci.yml/badge.svg)](https://github.com/justinmstuart/pdf-to-cbz-app/actions/workflows/ci.yml)
[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)

A web application for converting PDF files into CBZ archives — a comic book-friendly format compatible with most e-readers and comic book readers.

Files are processed entirely through a backend API and are **never stored** by this frontend application.

## Features

- **Drag & drop or click-to-upload** PDF conversion
- **Instant download** — the converted CBZ file is downloaded automatically
- **Privacy-first** — files are passed directly to the API and not retained
- **Dockerised** — ships with a multi-stage Dockerfile and `docker-compose.yml`

## How It Works

1. The user selects or drops a `.pdf` file
2. The frontend POSTs the file to the configured backend API (`POST /pdf-to-cbz/`)
3. The API returns a CBZ binary response
4. The browser downloads the file with the original filename and a `.cbz` extension

## Tech Stack

| Category       | Technology                      |
|----------------|---------------------------------|
| Framework      | [Next.js 16](https://nextjs.org/) (App Router) |
| Language       | TypeScript                      |
| Styling        | Tailwind CSS 4                  |
| Testing        | Jest + React Testing Library    |
| Component Dev  | Storybook 10                    |
| Linting        | ESLint + Prettier               |
| Runtime        | Node.js 22 (Docker)             |

## Getting Started

### Prerequisites

- Node.js 22+
- A running instance of the PDF-to-CBZ backend API

### Installation

```bash
npm install
```

### Environment Variables

Copy `.env.example` to `.env.local` and fill in the values:

```bash
cp .env.example .env.local
```

| Variable | Description | Example |
|---|---|---|
| `NEXT_PUBLIC_API_BASE_URL` | Base URL of the backend API | `http://localhost:3001` |
| `NEXT_PUBLIC_API_SECRET_KEY` | Bearer token sent with every API request | `your-secret-key` |
| `NEXT_PUBLIC_GITHUB_REPO_URL` | GitHub repo URL shown in the footer | `https://github.com/your/repo` |

### Development Server

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

## Available Scripts

| Script | Description |
|---|---|
| `npm run dev` | Start the development server |
| `npm run build` | Build for production |
| `npm run start` | Start the production server |
| `npm run lint` | Run ESLint |
| `npm run format` | Format code with Prettier |
| `npm test` | Run the test suite |
| `npm run test:watch` | Run tests in watch mode |
| `npm run storybook` | Start Storybook on port 6006 |
| `npm run build-storybook` | Build a static Storybook |

## Docker

### Build and Run with Docker Compose

```bash
NEXT_PUBLIC_API_BASE_URL=http://your-api:3001 \
NEXT_PUBLIC_API_SECRET_KEY=your-secret \
NEXT_PUBLIC_GITHUB_REPO_URL=https://github.com/your/repo \
docker compose up --build
```

The app will be available at [http://localhost:3000](http://localhost:3000).

### Build Manually

```bash
docker build \
  --build-arg NEXT_PUBLIC_API_BASE_URL=http://your-api:3001 \
  --build-arg NEXT_PUBLIC_API_SECRET_KEY=your-secret \
  --build-arg NEXT_PUBLIC_GITHUB_REPO_URL=https://github.com/your/repo \
  -t pdf-to-cbz-app .

docker run -p 3000:3000 pdf-to-cbz-app
```

> **Note:** `NEXT_PUBLIC_*` variables are inlined at build time by Next.js. You must pass them as Docker build arguments — runtime environment variables will not work for these.

## Project Structure

```
src/
├── app/            # Next.js App Router pages and layout
├── components/     # Reusable UI components (each with optional stories)
├── hooks/          # Custom React hooks
│   ├── useFetch.tsx              # Low-level fetch wrapper with Bearer auth
│   └── usePdfToCbzConverter.tsx  # Orchestrates upload and download
├── utils/
│   └── blob.ts     # Utility for triggering browser file downloads
└── env.ts          # Centralised environment variable access
```

## Contributing

Pull requests and issues are welcome. Please open an issue first to discuss significant changes.
