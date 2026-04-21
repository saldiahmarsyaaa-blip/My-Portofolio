# Panduan Git untuk Portofolio Website

## Setup Awal (Clone Repository)

### 1. Clone Repository dari GitHub
```bash
git clone [URL-REPOSITORY-GITHUB]
cd PortoMarsya
```

### 2. Setup Konfigurasi Git (jika belum)
```bash
git config --global user.name "Nama Anda"
git config --global user.email "email@gmail.com"
```

## Workflow Sehari-hari

### 1. Update Local Repository
```bash
# Pull perubahan terbaru dari remote
git pull origin main
```

### 2. Cek Status Repository
```bash
# Lihat file yang berubah
git status
```

### 3. Add Changes
```bash
# Tambahkan semua file yang berubah
git add .

# Atau tambahkan file spesifik
git add index.html
git add assets/css/style.css
git add assets/js/script.js
git add assets/images/
```

### 4. Commit Changes
```bash
# Commit dengan pesan yang jelas
git commit -m "Update profil foto dan kontak informasi"

# Atau commit dengan detail
git commit -m "feat: tambahkan certificate modal functionality"
```

### 5. Push ke Remote Repository
```bash
# Push ke GitHub
git push origin main
```

## Commands Penting

### Melihat History
```bash
# Lihat semua commit history
git log

# Lihat history singkat
git log --oneline

# Lihat perubahan dalam commit
git show [commit-hash]
```

### Branch Management
```bash
# Lihat semua branch
git branch

# Buat branch baru
git checkout -b feature/new-functionality

# Pindah branch
git checkout main

# Merge branch
git merge feature/new-functionality

# Hapus branch
git branch -d feature/new-functionality
```

### Undo Changes
```bash
# Batalkan changes di file tertentu
git checkout -- index.html

# Reset ke commit sebelumnya
git reset --soft HEAD~1

# Reset hard (hapus semua changes)
git reset --hard HEAD~1
```

## Best Practices untuk Portofolio

### 1. Commit Messages yang Baik
```bash
# Format: [type]: [description]
feat: tambahkan certificate modal
fix: perbaiki responsive design pada mobile
docs: update README dengan panduan baru
style: perbaiki CSS untuk about section
refactor: optimasi JavaScript carousel
test: tambahkan validasi form kontak
chore: update dependencies
```

### 2. Struktur Folder yang Aman
```
PortoMarsya/
|-- .gitignore              # Penting!
|-- README.md
|-- index.html
|-- assets/
|   |-- css/
|   |   |-- style.css
|   |-- js/
|   |   |-- script.js
|   |   |-- README.md
|   |-- images/
|   |   |-- README.md
|   |   |-- documentation.md
|   |   |-- Profile.jpeg
|   |   |-- Sertifikat-1.JPG
|   |   |-- Sertifikat-2.JPG
|   |   |-- BKI-*.jpeg
|   |   |-- DPRD-*.jpeg
|   |   |-- BTN-*.jpeg
|-- GIT_GUIDE.md           # File ini
```

### 3. .gitignore yang Direkomendasikan
```gitignore
# Node modules (jika menggunakan)
node_modules/

# Temporary files
*.tmp
*.temp

# Log files
*.log

# OS generated files
.DS_Store
.DS_Store?
._*
.Spotlight-V100
.Trashes
ehthumbs.db
Thumbs.db

# Editor files
.vscode/
.idea/
*.swp
*.swo

# Large images (optional - jika terlalu besar)
# assets/images/large-*.jpg
```

## Troubleshooting

### 1. Merge Conflict
```bash
# Pull dengan rebase untuk menghindari conflict
git pull --rebase origin main

# Jika terjadi conflict, selesaikan manually lalu:
git add .
git rebase --continue
```

### 2. Push Ditolak
```bash
# Force push (hati-hati!)
git push --force-with-lease origin main

# Atau pull dulu baru push
git pull origin main
git push origin main
```

### 3. Stash Changes
```bash
# Simpan changes sementara
git stash

# Lihat stash list
git stash list

# Kembalikan stash
git stash pop
```

## Deployment Commands

### 1. GitHub Pages
```bash
# Push ke main branch
git push origin main

# Atau ke gh-pages branch
git push origin gh-pages
```

### 2. Netlify/Vercel
```bash
# Push ke main branch (auto-deploy)
git push origin main
```

## Quick Reference

### Commands yang Sering Digunakan:
```bash
git status                    # Cek status
git add .                     # Tambah semua changes
git commit -m "pesan"         # Commit changes
git push origin main          # Push ke remote
git pull origin main          # Pull dari remote
git log --oneline             # Lihat history
```

### Workflow Lengkap:
```bash
# 1. Mulai kerja
git pull origin main

# 2. Lakukan perubahan
# ... edit files ...

# 3. Test website
# ... buka browser ...

# 4. Commit dan push
git add .
git commit -m "feat: tambahkan fitur baru"
git push origin main
```

## Tips Tambahan

1. **Selalu pull sebelum mulai kerja** untuk menghindari conflict
2. **Commit sering** dengan pesan yang jelas
3. **Test website** sebelum commit
4. **Backup penting** sebelum melakukan reset/hard changes
5. **Gunakan branch** untuk fitur besar
6. **Review changes** dengan `git diff` sebelum commit

## Emergency Commands

```bash
# Jika terjadi masalah besar, reset ke remote:
git fetch origin
git reset --hard origin/main

# Kembalikan file yang terhapus:
git checkout HEAD -- nama-file.html
```

---

**Catatan:** Simpan file ini sebagai referensi cepat untuk Git commands. Selalu backup repository penting sebelum melakukan commands yang berisiko!
