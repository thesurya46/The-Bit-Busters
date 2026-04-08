# The Bit Busters - Community Website 🧑‍💻

[![React](https://img.shields.io/badge/React-18.3.1-brightgreen)](https://react.dev/)
[![Vite](https://img.shields.io/badge/Vite-6.3.5-orange)](https://vitejs.dev/)
[![Python](https://img.shields.io/badge/Python-Flask-blue)](https://flask.palletsprojects.com/)
[![Rust](https://img.shields.io/badge/Rust-0.1.0-red)](https://rust-lang.org/)

A modern, responsive community website for **The Bit Busters** showcasing projects, team, blog, and more. Built with a multi-language stack: React frontend, Python Flask backend API, and Rust CLI tool.

## 🚀 Features
- Responsive design with shadcn/ui components
- Pages: Home, About, Community, Projects, Blog, Team, Contact, Auth
- Backend API: `/api/projects` (Flask)
- CLI tool (Rust)

## 📸 Screenshots
### Home Page
![Home Demo](./public/home-screenshot.png)
*(Add screenshot by running `pnpm dev`, capture, and place in public/)*

### Projects Page
![Projects Demo](https://via.placeholder.com/1200x400/007ACC/FFFFFF?text=The+Bit+Busters+Projects)
*(Live demo: http://localhost:5173 after `pnpm dev`)*

## 🛠️ Tech Stack
| Frontend | Backend | Tools |
|----------|---------|-------|
| React, Vite, Tailwind, shadcn/ui | Python Flask | Rust CLI |

## 🚀 Quick Start

### Frontend
```bash
pnpm install
pnpm dev  # http://localhost:5173
```

### Backend
```bash
cd backend/python
python -m venv venv
venv\\Scripts\\activate  # Windows
pip install -r requirements.txt
python app.py  # http://localhost:5000/api/projects
```

### Rust CLI
```bash
cd tools/rust
cargo run
```

## 📁 Project Structure
```
.
├── src/              # React app
├── backend/python/   # Flask API
├── tools/rust/       # CLI tool
├── public/           # Static assets (add images here)
├── index.html
└── package.json
```

## 🤝 Contributing
See [Guidelines.md](guidelines/Guidelines.md)

## 📄 License
MIT

---

⭐ Star on [GitHub](https://github.com/thesurya46/The-Bit-Busters)

