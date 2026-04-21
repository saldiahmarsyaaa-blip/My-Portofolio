# Folder JavaScript

Folder ini berisi file-file JavaScript yang mengatur interaktivitas dan fungsionalitas website portofolio.

## File yang Ada:

### `script.js`
File utama JavaScript yang mengatur semua interaktivitas website, termasuk:
- Navigation mobile toggle
- Smooth scrolling
- Carousel functionality (About Section)
- Documentation modal carousel
- Certificate modal
- Form validation
- Animasi scroll dan efek interaktif lainnya

## Cara Mengubah Nama File Gambar:

### 1. Profile Image
**Lokasi di JavaScript:** Tidak ada di JS, diatur langsung di `index.html`
```html
<img src="assets/images/Profile.jpeg" alt="Saldyah Marsya">
```

### 2. Documentation Images
**Lokasi di JavaScript:** `script.js` baris 571-600
```javascript
const documentationData = {
    bki: {
        images: [
            "assets/images/bki-1.jpeg",    // Ganti di sini
            "assets/images/bki-2.jpeg",    // Ganti di sini
            "assets/images/bki-3.jpeg",    // Ganti di sini
            "assets/images/bki-4.jpeg"     // Ganti di sini
        ]
    },
    dprd: {
        images: [
            "assets/images/dprd-1.jpeg",  // Ganti di sini
            "assets/images/dprd-2.jpeg",  // Ganti di sini
            "assets/images/dprd-3.jpeg"   // Ganti di sini
        ]
    },
    btn: {
        images: [
            "assets/images/BTN-01.jpeg",   // Ganti di sini
            "assets/images/BTN-02.jpeg",   // Ganti di sini
            "assets/images/BTN-03.jpeg",   // Ganti di sini
            "assets/images/BTN-04.jpeg"    // Ganti di sini
        ]
    }
};
```

### 3. Certificate Images
**Lokasi di JavaScript:** `script.js` baris 748-763
```javascript
const certificateData = {
    'tax-brevet': {
        image: 'assets/images/Sertifikat-1.JPG',  // Ganti di sini
    },
    'financial-accounting': {
        image: 'assets/images/Sertifikat-2.JPG',  // Ganti di sini
    }
};
```

## Panduan Perubahan:

### Untuk Documentation Images:
1. Tentukan experience yang ingin diubah (`bki`, `dprd`, atau `btn`)
2. Ubah nama file di array `images`
3. Pastikan file gambar ada di folder `assets/images/`
4. Format yang didukung: JPG, JPEG, PNG, WebP

### Untuk Certificate Images:
1. Tentukan sertifikat yang ingin diubah (`tax-brevet` atau `financial-accounting`)
2. Ubah nilai `image`
3. Pastikan file gambar ada di folder `assets/images/`
4. Format yang didukung: JPG, JPEG, PNG, WebP

## Contoh Perubahan:

### Mengubah Documentation BKI Image 1:
```javascript
// Dari:
"assets/images/bki-1.jpeg"
// Menjadi:
"assets/images/bki-new-image.jpg"
```

### Menambah Documentation Image BKI:
```javascript
// Tambahkan ke array:
"assets/images/bki-5.jpeg"
```

### Mengubah Certificate Tax Brevet:
```javascript
// Dari:
image: 'assets/images/Sertifikat-1.JPG'
// Menjadi:
image: 'assets/images/tax-brevet-2024.jpg'
```

## Error Handling:
- Jika file gambar tidak ditemukan, sistem akan menampilkan placeholder
- Certificate modal akan menampilkan pesan "Sertifikat tidak tersedia"
- Documentation carousel akan menampilkan placeholder "Gambar tidak tersedia"

## Tips:
- Gunakan nama file yang konsisten (lowercase/uppercase)
- Hindari spasi dalam nama file, gunakan underscore atau dash
- Pastikan ekstensi file sesuai dengan format yang ada
- Test setiap perubahan dengan membuka modal terkait

## Debugging:
Jika gambar tidak muncul:
1. Periksa nama file di JavaScript
2. Pastikan file ada di folder `assets/images/`
3. Periksa ekstensi file (case-sensitive)
4. Buka browser developer tools untuk melihat error di console
