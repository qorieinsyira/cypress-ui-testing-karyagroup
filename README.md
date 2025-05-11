# ✅ Cypress UI Testing – Sales App (Apergu)

Repositori ini berisi pengujian otomatis UI menggunakan Cypress untuk aplikasi [Sales App](https://sales-app-apergu.vercel.app/).

![Cypress Dashboard](https://img.shields.io/badge/Cypress-Tested-brightgreen?logo=cypress)  
[🔗 Lihat Run di Cypress Dashboard](https://cloud.cypress.io/projects/1ajvzp/runs)

---

## 📁 Struktur Project

cypress/

├─ e2e/

│  └─ ui/

│     └─ login_page.cy.js

├─ support/

cypress.config.js

---

## 🚀 Teknologi

- [Cypress](https://www.cypress.io/) v12+
- JavaScript (ES6)

---

## 🔍 Daftar Pengujian

- Login berhasil untuk role:
  - ✅ Super Admin (`/super-admin/home`)
  - ⚠️ Sales Indoor & Outdoor (masih tampil “Oops, page not found”)
- Validasi input kosong (email / password)
- Validasi kredensial salah
- Redirect berdasarkan role user
- Verifikasi elemen UI pasca-login

---

## 📊 Laporan Testing

Testing dapat dipantau secara real-time melalui:

🔗 Cypress Cloud Dashboard – https://cloud.cypress.io/projects/1ajvzp/runs

---

## 🧪 Menjalankan Test

```
npx cypress open     # Menjalankan dengan UI (GUI)
npx cypress run      # Menjalankan headless (CI mode)
```

---

## 📝 Langkah Berikut:
1.	Buka file README.md di project kamu
2.	Hapus semua isinya
3.	Paste kode di atas
4.	Simpan file, lalu jalankan: 
 ```
git add README.md
git commit -m "Update README untuk dokumentasi pengujian UI"
git push
```

---

## 👩‍💻 Penulis

**Qorie Insyira**

Quality Assurance Engineer – Apergu Solution

📧 qorie@apergu.com

