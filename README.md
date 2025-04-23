# Job Listing Platform 🧑‍💻

A full-stack job listing platform built with **React** and **Supabase**, featuring modern UI styling with **Tailwind CSS**. The project also includes an optional **.NET Core Web API** backend for enterprise extensions or self-hosted deployments.

## 🌐 Live Demo
[👉 View the live site here](https://job-listing-frontend-one.vercel.app/) <!-- Replace with actual deployed URL -->

## 📁 Features

- 🔍 **Search & Suggestions** — Search jobs by title, company, or location with instant suggestions.
- 📄 **Job Detail View** — View detailed information about a job with formatted salary and posted date.
- 💾 **Save & Apply** — Save jobs or apply directly, with stateful management using `useContext`.
- 📄 **Application Form** — Submit an application with validation and optional file uploads.
- 👤 **My Jobs** — View saved and applied jobs using tabs.
- 🧐 **Smart UI** — Responsive and clean UI with Tailwind CSS utility classes.

## 🛠️ Tech Stack

| Frontend   | Backend (Optional) | Database        | Styling       |
|------------|-------------------|------------------|---------------|
| React      | ASP.NET Core Web API | Supabase (PostgreSQL) | Tailwind CSS |

## 🚀 Getting Started

### 1. Clone the Repository

```bash
git clone https://github.com/NatWaterworth/job-listing-frontend.git
cd job-listing-frontend
```

### 2. Install Dependencies

```bash
npm install
```

### 3. Setup Supabase

- Create a project at [supabase.io](https://supabase.io)
- Set up your database tables (`jobs`, `applications`, etc.)
- Enable Row Level Security (RLS) and add appropriate policies
- Grab your project URL and public anon key and set it in `supabase.js`:

```js
import { createClient } from '@supabase/supabase-js'

export const supabase = createClient("YOUR_SUPABASE_URL", "YOUR_SUPABASE_ANON_KEY")
```

### 4. Run the App

```bash
npm start
```
## 📄 License

This project is open-source and available under the [MIT License](LICENSE).

