<?php

namespace Database\Seeders;

use App\Models\Activity;
use Illuminate\Database\Seeder;

class ActivitySeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        // Menggunakan query builder untuk menyisipkan beberapa entri
        Activity::insert([
            [
                'title' => 'Pelatihan Budidaya Ternak Bebek Petelur',
                'banner' => '1.png',
                'publised_by' => 1,
                'location' => 'Desa Senosari, Malang',
                'category' => '["event","Ekonomi"]',
                'schedule' => '2024-11-01 09:00:00',
                'deadline' => '2024-10-15 23:59:59',
                'description' => '<p> BAZNAS akan menyelenggarakan pelatihan Budidaya Ternak Bebek Petelur di Desa Senoari, Malang, sebagai bagian dari program pemberdayaan ekonomi masyarakat pedesaan. Pelatihan ini ditujukan untuk memberikan keterampilan praktis kepada warga desa dalam mengelola usaha ternak bebek petelur secara efektif dan berkelanjutan. Peserta akan mendapatkan materi lengkap mulai dari pemilihan bibit unggul, teknik pemeliharaan yang baik, manajemen pakan, pengelolaan kesehatan ternak, hingga strategi pemasaran hasil produksi telur bebek. Selain itu, peserta juga akan diajarkan cara mengoptimalkan lahan dan sumber daya lokal untuk mendukung usaha ternak mereka.</p>
                <br>
                <p>Pelatihan ini diharapkan dapat memberikan dampak positif terhadap perekonomian Desa Senoari dengan menciptakan peluang usaha baru yang berkelanjutan. Melalui keterampilan yang diperoleh, warga desa diharapkan mampu mengembangkan usaha ternak bebek petelur yang kompetitif dan produktif. Program ini juga sejalan dengan misi BAZNAS untuk meningkatkan kesejahteraan masyarakat dengan memberdayakan potensi ekonomi lokal dan mendorong kemandirian ekonomi bagi komunitas pedesaan.</p>',
                'max' => 5,
                'jobdesk' => '
                <ul>
                <li><strong>Fasilitator Pelatihan:</strong>
                    <ul>
                        <li>Membantu menyusun dan menyiapkan materi pelatihan.</li>
                        <li>Mendampingi peserta selama sesi pelatihan, menjawab pertanyaan, dan memberikan panduan praktis.</li>
                        <li>Membantu instruktur dalam demonstrasi teknis, seperti cara pemilihan bibit unggul atau perawatan bebek.</li>
                    </ul>
                </li>
                <li><strong>Koordinator Logistik:</strong>
                    <ul>
                        <li>Mengatur dan memastikan ketersediaan sarana dan prasarana selama pelatihan (tempat, peralatan, bahan pakan, dll.).</li>
                        <li>Menyiapkan kebutuhan teknis seperti alat peraga, bahan-bahan yang digunakan untuk praktek, dan dokumentasi kegiatan.</li>
                    </ul>
                </li>
                <li><strong>Tim Dokumentasi:</strong>
                    <ul>
                        <li>Merekam dan mendokumentasikan jalannya pelatihan dalam bentuk foto dan video.</li>
                        <li>Menyusun laporan pelaksanaan pelatihan untuk keperluan publikasi BAZNAS atau untuk laporan program.</li>
                    </ul>
                </li>
                </ul>',
                'requirement' => '<ul>
                <li><strong>Komitmen dan Tanggung Jawab:</strong>
                    <ul>
                        <li>Relawan harus berkomitmen untuk terlibat penuh dalam seluruh rangkaian kegiatan dari awal hingga akhir.</li>
                        <li>Mampu bekerja dengan penuh tanggung jawab dan tepat waktu sesuai dengan jobdesk yang diberikan.</li>
                    </ul>
                </li>
                <li><strong>Kemampuan Berkomunikasi:</strong>
                    <ul>
                        <li>Relawan harus memiliki kemampuan komunikasi yang baik untuk berinteraksi dengan peserta pelatihan, instruktur, dan tim lainnya.</li>
                        <li>Mampu bekerja sama dalam tim dan menjalin hubungan yang baik dengan masyarakat setempat.</li>
                    </ul>
                </li>
                <li><strong>Fleksibilitas dan Adaptabilitas:</strong>
                    <ul>
                        <li>Siap bekerja dalam lingkungan yang mungkin tidak selalu ideal (seperti area pedesaan) dan bisa beradaptasi dengan cepat terhadap perubahan rencana atau kondisi lapangan.</li>
                        <li>Memiliki kemampuan berpikir cepat dan solutif ketika menghadapi kendala atau masalah.</li>
                    </ul>
                </li>
                <li><strong>Ketertarikan pada Bidang Sosial dan Pertanian:</strong>
                    <ul>
                        <li>Relawan diutamakan memiliki ketertarikan dalam bidang pemberdayaan masyarakat, pertanian, atau peternakan.</li>
                        <li>Memiliki pemahaman dasar tentang budidaya atau minat untuk belajar tentang beternak bebek petelur adalah nilai tambah.</li>
                    </ul>
                </li>
                </ul>',
                'domicile' => 'Malang',
                'addtional_information' => '-',
                'created_at' => now(),
                'updated_at' => now(),
            ],
            [
                'title' => 'Pelatihan Sukses Berjualan Di Marketplace',
                'banner' => '2.png',
                'publised_by' => 1,
                'location' => 'Kota Bekasi',
                'category' =>  '["event","Ekonomi"]',
                'schedule' => '2024-11-15 10:00:00',
                'deadline' => '2024-11-01 23:59:59',
                'description' => '<p>BAZNAS akan menyelenggarakan kegiatan Pelatihan Sukses Berjualan di Marketplace di Bekasi yang bertujuan untuk membantu masyarakat, khususnya pelaku UMKM dan kalangan berpenghasilan rendah, dalam memanfaatkan platform digital untuk mengembangkan usaha mereka. Pelatihan ini akan fokus pada pemanfaatan marketplace seperti Tokopedia, Shopee, dan Bukalapak, guna meningkatkan keterampilan berbisnis online. Dalam kegiatan ini, BAZNAS membutuhkan volunteer untuk membantu kelancaran acara, mulai dari menjadi fasilitator yang membantu peserta memahami cara membuat akun dan mengelola toko di marketplace, hingga memberikan panduan dalam mengunggah produk dan menjalankan strategi penjualan efektif. Para volunteer juga akan berperan dalam memberikan dukungan teknis dan memastikan peserta dapat mengikuti pelatihan dengan baik. Kegiatan ini tidak hanya membantu masyarakat setempat, tetapi juga memberikan pengalaman berharga bagi para volunteer dalam pemberdayaan ekonomi melalui teknologi digital.</P>',
                'max' => 5,
                'jobdesk' => '
                <ul>
                <li><strong>Membantu Peserta Membuat Akun Marketplace:</strong>
                    <ul>
                        <li>Memberikan panduan langkah demi langkah kepada peserta dalam membuat akun di platform marketplace seperti Tokopedia, Shopee, dan Bukalapak.</li>
                        <li>Memastikan setiap peserta berhasil mendaftarkan akun mereka dan memverifikasi informasi yang dibutuhkan.</li>
                    </ul>
                </li>
                <li><strong>Mengajarkan Cara Mengunggah Produk:</strong>
                    <ul>
                        <li>Membimbing peserta dalam menyiapkan dan mengunggah foto produk, menulis deskripsi produk yang menarik, serta menetapkan harga jual yang kompetitif.</li>
                        <li>Memberikan tips dan trik tentang pengelolaan stok barang serta cara mengoptimalkan gambar produk untuk menarik lebih banyak pembeli.</li>
                    </ul>
                </li>
                <li><strong>Mengajarkan Pengelolaan Toko Online:</strong>
                    <ul>
                        <li>Mengajarkan peserta cara mengelola toko online, termasuk bagaimana menangani pesanan, melacak pengiriman, dan mengelola stok barang secara efektif.</li>
                        <li>Memberikan pelatihan mengenai fitur-fitur tambahan di marketplace, seperti diskon, promosi, dan laporan penjualan.</li>
                    </ul>
                </li>
                <li><strong>Memberikan Pengetahuan Tentang Strategi Pemasaran di Marketplace:</strong>
                    <ul>
                        <li>Mengajarkan strategi pemasaran sederhana yang bisa digunakan peserta untuk meningkatkan visibilitas toko mereka, seperti penggunaan iklan berbayar atau program cashback.</li>
                        <li>Membantu peserta memahami cara menarik ulasan positif dan menjaga reputasi toko online mereka.</li>
                    </ul>
                </li>
                 </ul>
                ',
                'requirement' => '
                <ul>
                <li><strong>Kemampuan Teknis Marketplace:</strong>
                    <p>Relawan diharapkan memiliki pemahaman dasar tentang penggunaan platform marketplace seperti Tokopedia, Shopee, atau Bukalapak. Pengalaman dalam menjual produk di marketplace adalah nilai tambah.</p>
                </li>
                <li><strong>Kemampuan Komunikasi dan Pendampingan:</strong>
                    <p>Relawan harus memiliki kemampuan komunikasi yang baik untuk memberikan panduan kepada peserta secara jelas dan sabar. Kemampuan untuk menjawab pertanyaan dan memberikan solusi praktis sangat diutamakan.</p>
                </li>
                <li><strong>Fleksibilitas dan Komitmen:</strong>
                    <p>Relawan harus siap untuk terlibat penuh selama pelatihan, bekerja sama dengan tim, serta bersedia beradaptasi dengan jadwal atau kondisi pelatihan yang dinamis.</p>
                </li>
                </ul>
                ',
                'domicile' => 'Kota Bekasi',
                'addtional_information' => '-',
                'created_at' => now(),
                'updated_at' => now(),
            ],
            [
                'title' => 'Cegah Stunting Balita di Kabupaten Parigi Moutong',
                'banner' => '5.png',
                'publised_by' => 1,
                'location' => 'Kabupaten Parigi Moutang, Sulteng',
                'category' =>  '["Penyuluhan","Kesehatan"]',
                'schedule' => '2024-12-15 10:00:00',
                'deadline' => '2024-12-01 23:59:59',
                'description' => 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Maxime eum similique, natus consequuntur, obcaecati vel consectetur quas voluptatum exercitationem quos ea dolorum quibusdam accusantium. Numquam amet dolore ab velit esse necessitatibus rem illum iure, sint provident deserunt sit magni pariatur molestiae alias enim odio ullam earum quidem culpa quaerat doloribus. Voluptatem delectus quis quo necessitatibus corporis consequuntur recusandae doloremque rerum sint aliquam nemo sequi possimus, nam ducimus nulla nesciunt, maiores adipisci in eveniet iste. Distinctio rem sit sequi quis, nisi porro odio eum libero error! Commodi, repellendus tenetur. Voluptate nemo voluptatem in laudantium itaque repellat doloremque ducimus, molestias sit consequuntur',
                'max' => 10,
                'jobdesk' => '
                  Lorem ipsum, dolor sit amet consectetur adipisicing elit. Maxime eum similique, natus consequuntur, obcaecati vel consectetur quas voluptatum exercitationem quos ea dolorum quibusdam accusantium. Numquam amet dolore ab velit esse necessitatibus rem illum iure, sint provident deserunt sit magni pariatur molestiae alias enim odio ullam earum quidem culpa quaerat doloribus. Voluptatem delectus quis quo necessitatibus corporis consequuntur recusandae doloremque rerum sint aliquam nemo sequi possimus, nam ducimus nulla nesciunt, maiores adipisci in eveniet iste. Distinctio rem sit sequi quis, nisi porro odio eum libero error! Commodi, repellendus tenetur. Voluptate nemo voluptatem in laudantium itaque repellat doloremque ducimus, molestias sit consequuntur?
                ',
                'requirement' => '
                 Lorem ipsum, dolor sit amet consectetur adipisicing elit. Maxime eum similique, natus consequuntur, obcaecati vel consectetur quas voluptatum exercitationem quos ea dolorum quibusdam accusantium. Numquam amet dolore ab velit esse necessitatibus rem illum iure, sint provident deserunt sit magni pariatur molestiae alias enim odio ullam earum quidem culpa quaerat doloribus. Voluptatem delectus quis quo necessitatibus corporis consequuntur recusandae doloremque rerum sint aliquam nemo sequi possimus, nam ducimus nulla nesciunt, maiores adipisci in eveniet iste. Distinctio rem sit sequi quis, nisi porro odio eum libero error! Commodi, repellendus tenetur. Voluptate nemo voluptatem in laudantium itaque repellat doloremque ducimus, molestias sit consequuntur?
                ',
                'domicile' => 'Sulawesi Tengah',
                'addtional_information' => '-',
                'created_at' => now(),
                'updated_at' => now(),
            ],
            [
                'title' => 'Pendampingan Petani Terong Di Seleman',
                'banner' => '4.png',
                'publised_by' => 1,
                'location' => 'seleman, Yogyakarta',
                'category' => '["Penyuluhan","Kesehatan"]',
                'schedule' => '2025-01-20 10:00:00',
                'deadline' => '2025-01-01 23:59:59',
                'description' => 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Maxime eum similique, natus consequuntur, obcaecati vel consectetur quas voluptatum exercitationem quos ea dolorum quibusdam accusantium. Numquam amet dolore ab velit esse necessitatibus rem illum iure, sint provident deserunt sit magni pariatur molestiae alias enim odio ullam earum quidem culpa quaerat doloribus. Voluptatem delectus quis quo necessitatibus corporis consequuntur recusandae doloremque rerum sint aliquam nemo sequi possimus, nam ducimus nulla nesciunt, maiores adipisci in eveniet iste. Distinctio rem sit sequi quis, nisi porro odio eum libero error! Commodi, repellendus tenetur. Voluptate nemo voluptatem in laudantium itaque repellat doloremque ducimus, molestias sit consequuntur',
                'max' => 10,
                'jobdesk' => '
                  Lorem ipsum, dolor sit amet consectetur adipisicing elit. Maxime eum similique, natus consequuntur, obcaecati vel consectetur quas voluptatum exercitationem quos ea dolorum quibusdam accusantium. Numquam amet dolore ab velit esse necessitatibus rem illum iure, sint provident deserunt sit magni pariatur molestiae alias enim odio ullam earum quidem culpa quaerat doloribus. Voluptatem delectus quis quo necessitatibus corporis consequuntur recusandae doloremque rerum sint aliquam nemo sequi possimus, nam ducimus nulla nesciunt, maiores adipisci in eveniet iste. Distinctio rem sit sequi quis, nisi porro odio eum libero error! Commodi, repellendus tenetur. Voluptate nemo voluptatem in laudantium itaque repellat doloremque ducimus, molestias sit consequuntur?
                ',
                'requirement' => '
                 Lorem ipsum, dolor sit amet consectetur adipisicing elit. Maxime eum similique, natus consequuntur, obcaecati vel consectetur quas voluptatum exercitationem quos ea dolorum quibusdam accusantium. Numquam amet dolore ab velit esse necessitatibus rem illum iure, sint provident deserunt sit magni pariatur molestiae alias enim odio ullam earum quidem culpa quaerat doloribus. Voluptatem delectus quis quo necessitatibus corporis consequuntur recusandae doloremque rerum sint aliquam nemo sequi possimus, nam ducimus nulla nesciunt, maiores adipisci in eveniet iste. Distinctio rem sit sequi quis, nisi porro odio eum libero error! Commodi, repellendus tenetur. Voluptate nemo voluptatem in laudantium itaque repellat doloremque ducimus, molestias sit consequuntur?
                ',
                'domicile' => 'Seleman, Yogyakarta',
                'addtional_information' => '-',
                'created_at' => now(),
                'updated_at' => now(),
            ],
            [
                'title' => 'Bantu Kesehatan Mustahik di Padukuhan Dobalan',
                'banner' => '6.png',
                'publised_by' => 1,
                'location' => 'Desa Timbulharjo,Yogyakarta',
                'category' => '["Penyuluhan","Kesehatan"]',
                'schedule' => '2024-12-20 10:00:00',
                'deadline' => '2024-11-20 23:59:59',
                'description' => 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Maxime eum similique, natus consequuntur, obcaecati vel consectetur quas voluptatum exercitationem quos ea dolorum quibusdam accusantium. Numquam amet dolore ab velit esse necessitatibus rem illum iure, sint provident deserunt sit magni pariatur molestiae alias enim odio ullam earum quidem culpa quaerat doloribus. Voluptatem delectus quis quo necessitatibus corporis consequuntur recusandae doloremque rerum sint aliquam nemo sequi possimus, nam ducimus nulla nesciunt, maiores adipisci in eveniet iste. Distinctio rem sit sequi quis, nisi porro odio eum libero error! Commodi, repellendus tenetur. Voluptate nemo voluptatem in laudantium itaque repellat doloremque ducimus, molestias sit consequuntur',
                'max' => 10,
                'jobdesk' => '
                  Lorem ipsum, dolor sit amet consectetur adipisicing elit. Maxime eum similique, natus consequuntur, obcaecati vel consectetur quas voluptatum exercitationem quos ea dolorum quibusdam accusantium. Numquam amet dolore ab velit esse necessitatibus rem illum iure, sint provident deserunt sit magni pariatur molestiae alias enim odio ullam earum quidem culpa quaerat doloribus. Voluptatem delectus quis quo necessitatibus corporis consequuntur recusandae doloremque rerum sint aliquam nemo sequi possimus, nam ducimus nulla nesciunt, maiores adipisci in eveniet iste. Distinctio rem sit sequi quis, nisi porro odio eum libero error! Commodi, repellendus tenetur. Voluptate nemo voluptatem in laudantium itaque repellat doloremque ducimus, molestias sit consequuntur?
                ',
                'requirement' => '
                 Lorem ipsum, dolor sit amet consectetur adipisicing elit. Maxime eum similique, natus consequuntur, obcaecati vel consectetur quas voluptatum exercitationem quos ea dolorum quibusdam accusantium. Numquam amet dolore ab velit esse necessitatibus rem illum iure, sint provident deserunt sit magni pariatur molestiae alias enim odio ullam earum quidem culpa quaerat doloribus. Voluptatem delectus quis quo necessitatibus corporis consequuntur recusandae doloremque rerum sint aliquam nemo sequi possimus, nam ducimus nulla nesciunt, maiores adipisci in eveniet iste. Distinctio rem sit sequi quis, nisi porro odio eum libero error! Commodi, repellendus tenetur. Voluptate nemo voluptatem in laudantium itaque repellat doloremque ducimus, molestias sit consequuntur?
                ',
                'domicile' => 'Yogyakarta',
                'addtional_information' => '-',
                'created_at' => now(),
                'updated_at' => now(),
            ],
            [
                'title' => 'Pendampingan Petani Produktif',
                'banner' => '3.png',
                'publised_by' => 1,
                'location' => 'Kabupaten Karawang',
                'category' => '["event","Perkebunan"]',
                'schedule' => '2024-12-20 10:00:00',
                'deadline' => '2024-11-20 23:59:59',
                'description' => 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Maxime eum similique, natus consequuntur, obcaecati vel consectetur quas voluptatum exercitationem quos ea dolorum quibusdam accusantium. Numquam amet dolore ab velit esse necessitatibus rem illum iure, sint provident deserunt sit magni pariatur molestiae alias enim odio ullam earum quidem culpa quaerat doloribus. Voluptatem delectus quis quo necessitatibus corporis consequuntur recusandae doloremque rerum sint aliquam nemo sequi possimus, nam ducimus nulla nesciunt, maiores adipisci in eveniet iste. Distinctio rem sit sequi quis, nisi porro odio eum libero error! Commodi, repellendus tenetur. Voluptate nemo voluptatem in laudantium itaque repellat doloremque ducimus, molestias sit consequuntur',
                'max' => 10,
                'jobdesk' => '
                  Lorem ipsum, dolor sit amet consectetur adipisicing elit. Maxime eum similique, natus consequuntur, obcaecati vel consectetur quas voluptatum exercitationem quos ea dolorum quibusdam accusantium. Numquam amet dolore ab velit esse necessitatibus rem illum iure, sint provident deserunt sit magni pariatur molestiae alias enim odio ullam earum quidem culpa quaerat doloribus. Voluptatem delectus quis quo necessitatibus corporis consequuntur recusandae doloremque rerum sint aliquam nemo sequi possimus, nam ducimus nulla nesciunt, maiores adipisci in eveniet iste. Distinctio rem sit sequi quis, nisi porro odio eum libero error! Commodi, repellendus tenetur. Voluptate nemo voluptatem in laudantium itaque repellat doloremque ducimus, molestias sit consequuntur?
                ',
                'requirement' => '
                 Lorem ipsum, dolor sit amet consectetur adipisicing elit. Maxime eum similique, natus consequuntur, obcaecati vel consectetur quas voluptatum exercitationem quos ea dolorum quibusdam accusantium. Numquam amet dolore ab velit esse necessitatibus rem illum iure, sint provident deserunt sit magni pariatur molestiae alias enim odio ullam earum quidem culpa quaerat doloribus. Voluptatem delectus quis quo necessitatibus corporis consequuntur recusandae doloremque rerum sint aliquam nemo sequi possimus, nam ducimus nulla nesciunt, maiores adipisci in eveniet iste. Distinctio rem sit sequi quis, nisi porro odio eum libero error! Commodi, repellendus tenetur. Voluptate nemo voluptatem in laudantium itaque repellat doloremque ducimus, molestias sit consequuntur?
                ',
                'domicile' => 'Kabupaten Karawang',
                'addtional_information' => '-',
                'created_at' => now(),
                'updated_at' => now(),
            ],
            [
                'title' => 'Sosialisasi Anti Kekerasan Kepada Anak di SD Negri Swasta',
                'banner' => 'profil.jpeg',
                'publised_by' => 1,
                'location' => 'Kabupaten Karawang',
                'category' => '["Seminar","Pendidikan"]',
                'schedule' => '2024-12-20 10:00:00',
                'deadline' => '2024-11-20 23:59:59',
                'description' => 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Maxime eum similique, natus consequuntur, obcaecati vel consectetur quas voluptatum exercitationem quos ea dolorum quibusdam accusantium. Numquam amet dolore ab velit esse necessitatibus rem illum iure, sint provident deserunt sit magni pariatur molestiae alias enim odio ullam earum quidem culpa quaerat doloribus. Voluptatem delectus quis quo necessitatibus corporis consequuntur recusandae doloremque rerum sint aliquam nemo sequi possimus, nam ducimus nulla nesciunt, maiores adipisci in eveniet iste. Distinctio rem sit sequi quis, nisi porro odio eum libero error! Commodi, repellendus tenetur. Voluptate nemo voluptatem in laudantium itaque repellat doloremque ducimus, molestias sit consequuntur',
                'max' => 10,
                'jobdesk' => '
                  Lorem ipsum, dolor sit amet consectetur adipisicing elit. Maxime eum similique, natus consequuntur, obcaecati vel consectetur quas voluptatum exercitationem quos ea dolorum quibusdam accusantium. Numquam amet dolore ab velit esse necessitatibus rem illum iure, sint provident deserunt sit magni pariatur molestiae alias enim odio ullam earum quidem culpa quaerat doloribus. Voluptatem delectus quis quo necessitatibus corporis consequuntur recusandae doloremque rerum sint aliquam nemo sequi possimus, nam ducimus nulla nesciunt, maiores adipisci in eveniet iste. Distinctio rem sit sequi quis, nisi porro odio eum libero error! Commodi, repellendus tenetur. Voluptate nemo voluptatem in laudantium itaque repellat doloremque ducimus, molestias sit consequuntur?
                ',
                'requirement' => '
                 Lorem ipsum, dolor sit amet consectetur adipisicing elit. Maxime eum similique, natus consequuntur, obcaecati vel consectetur quas voluptatum exercitationem quos ea dolorum quibusdam accusantium. Numquam amet dolore ab velit esse necessitatibus rem illum iure, sint provident deserunt sit magni pariatur molestiae alias enim odio ullam earum quidem culpa quaerat doloribus. Voluptatem delectus quis quo necessitatibus corporis consequuntur recusandae doloremque rerum sint aliquam nemo sequi possimus, nam ducimus nulla nesciunt, maiores adipisci in eveniet iste. Distinctio rem sit sequi quis, nisi porro odio eum libero error! Commodi, repellendus tenetur. Voluptate nemo voluptatem in laudantium itaque repellat doloremque ducimus, molestias sit consequuntur?
                ',
                'domicile' => 'Kabupaten Karawang',
                'addtional_information' => '-',
                'created_at' => now(),
                'updated_at' => now(),
            ],
            [
                'title' => 'Lorem Ipsum Dolor Sit Amet',
                'banner' => 'profil.jpeg',
                'publised_by' => 1,
                'location' => 'Banten',
                'category' => '["Seminar","Pendidikan"]',
                'schedule' => '2024-12-20 10:00:00',
                'deadline' => '2024-11-20 23:59:59',
                'description' => 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Maxime eum similique, natus consequuntur, obcaecati vel consectetur quas voluptatum exercitationem quos ea dolorum quibusdam accusantium. Numquam amet dolore ab velit esse necessitatibus rem illum iure, sint provident deserunt sit magni pariatur molestiae alias enim odio ullam earum quidem culpa quaerat doloribus. Voluptatem delectus quis quo necessitatibus corporis consequuntur recusandae doloremque rerum sint aliquam nemo sequi possimus, nam ducimus nulla nesciunt, maiores adipisci in eveniet iste. Distinctio rem sit sequi quis, nisi porro odio eum libero error! Commodi, repellendus tenetur. Voluptate nemo voluptatem in laudantium itaque repellat doloremque ducimus, molestias sit consequuntur',
                'max' => 10,
                'jobdesk' => '
                  Lorem ipsum, dolor sit amet consectetur adipisicing elit. Maxime eum similique, natus consequuntur, obcaecati vel consectetur quas voluptatum exercitationem quos ea dolorum quibusdam accusantium. Numquam amet dolore ab velit esse necessitatibus rem illum iure, sint provident deserunt sit magni pariatur molestiae alias enim odio ullam earum quidem culpa quaerat doloribus. Voluptatem delectus quis quo necessitatibus corporis consequuntur recusandae doloremque rerum sint aliquam nemo sequi possimus, nam ducimus nulla nesciunt, maiores adipisci in eveniet iste. Distinctio rem sit sequi quis, nisi porro odio eum libero error! Commodi, repellendus tenetur. Voluptate nemo voluptatem in laudantium itaque repellat doloremque ducimus, molestias sit consequuntur?
                ',
                'requirement' => '
                 Lorem ipsum, dolor sit amet consectetur adipisicing elit. Maxime eum similique, natus consequuntur, obcaecati vel consectetur quas voluptatum exercitationem quos ea dolorum quibusdam accusantium. Numquam amet dolore ab velit esse necessitatibus rem illum iure, sint provident deserunt sit magni pariatur molestiae alias enim odio ullam earum quidem culpa quaerat doloribus. Voluptatem delectus quis quo necessitatibus corporis consequuntur recusandae doloremque rerum sint aliquam nemo sequi possimus, nam ducimus nulla nesciunt, maiores adipisci in eveniet iste. Distinctio rem sit sequi quis, nisi porro odio eum libero error! Commodi, repellendus tenetur. Voluptate nemo voluptatem in laudantium itaque repellat doloremque ducimus, molestias sit consequuntur?
                ',
                'domicile' => 'Banten',
                'addtional_information' => '-',
                'created_at' => now(),
                'updated_at' => now(),
            ]

        ]);
    }
}
