[SOAL TEST NextJS]
Sumber data untuk test akan diambil dari api berikut
https://ota-gin.onrender.com/swagger/index.html

api yang akan dipergunakan.
1. mengambil list kota
	https://ota-gin.onrender.com/api/v1/cities

2. search hotel
	https://ota-gin.onrender.com/api/v1/hotels/search
	
Data yang tersedia hingga tanggal 12 April 2025

Untuk design UI boleh mengikuti design dari figma berikut
https://www.figma.com/design/TMSaU3DqcPYDhY9oJMvTau/Test-IT?node-id=2603-2&p=f&t=bIF0vJ918rerlEOe-0

Tidak perlu sama persis, disesuaikan dengan data yang ada.


Instruksi. 
- Buat UI untuk search hotel dengan input Kota, tanggal Check in, tanggal check out dan jumlah tamu.
- UI terdiri dari 3 page, 
	1. Halaman utama dengan search box dan input yang diperlukan.
	2. Halaman untuk menampilkan daftar Hotel yang didapat dari API.
	3. Saat memilih salah satu hotel dari daftar tersebut, masuk ke Halaman detail hotel tersebut dan list kamar kamar yang tersedia pada hotel tersebut.

- Koneksi ke API dilakukan dari sisi server (bukan dari sisi client / browser)
- Dibuat dengan menggunakan NextJS
- Setelah selesai, code boleh diupload ke github, dan link ke project github tersebut dikirimkan ke Whatsapp, dan email ke tixiateam@gmail.com (subject : NextJS test)