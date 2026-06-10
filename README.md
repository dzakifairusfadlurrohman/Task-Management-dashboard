# Task Management Dashboard

Aplikasi sederhana untuk melihat, memfilter, dan menambahkan task pekerjaan. Dibuat sebagai studi kasus interview Next.js + TypeScript.

## Prasyarat

- Node.js v16+
- npm

## Instalasi

```bash
npm install
```

## Menjalankan

Mode development:

```bash
npm run dev
```

Buka [http://localhost:3000](http://localhost:3000) di browser.

Build production:

```bash
npm run build
npm start
```

## Halaman

| Route | Keterangan |
|-------|------------|
| `/tasks` | Dashboard — daftar task, summary, filter, search, sorting |
| `/tasks/[id]` | Detail task berdasarkan ID |
| `/tasks/new` | Form tambah task (tanpa penyimpanan ke database) |

## Struktur Folder

```
src/
├── app/              # Routing (App Router)
├── components/       # Komponen reusable
├── data/             # Dummy data
├── types/            # TypeScript types
└── utils/            # Helper filter, sort, search
```

## Asumsi & Batasan

- Menggunakan **App Router** karena struktur routing lebih deklaratif dan folder-based, cocok untuk pemisahan halaman `/tasks`, `/tasks/new`, dan `/tasks/[id]`.
- Data task bersifat statis dari `src/data/tasks.ts`, tidak ada database.
- Form tambah task hanya menampilkan ringkasan input setelah submit, tidak menambah data ke daftar.
- Filter dan search disinkronkan ke URL query parameter (`?status=Pending&search=andi`).
- Loading state disimulasikan dengan delay 600ms saat halaman `/tasks` pertama kali dimuat.
