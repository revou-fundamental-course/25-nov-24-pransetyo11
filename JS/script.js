// Fungsi utama untuk menghitung BMI
function hitung() {
    // Mendapatkan elemen form
    const form = document.querySelector('form');
    // Periksa validitas form
    if (!form.checkValidity()) {
        form.reportValidity(); // Menampilkan pesan validasi bawaan
        return; // Hentikan jika form tidak valid
    } 
    
    // Mengambil nilai berat badan dan tinggi badan dari input
    const tb = document.getElementById('tinggi-badan').value; // Tinggi badan (dalam cm)
    const bb = document.getElementById('berat-badan').value; // Berat badan (dalam kg)
    var hasilBMI = 0; // Variabel untuk menyimpan hasil BMI
    var tb1 = tb / 100; // Konversi tinggi badan dari cm ke meter
    tb1 *= tb1; // Menghitung kuadrat tinggi badan
    hasilBMI = bb / tb1; // Rumus BMI: berat badan (kg) / tinggi badan^2 (m^2)
    hasilBMI = hasilBMI.toFixed(1); // Membulatkan hasil BMI hingga 1 desimal
    
    // Menampilkan hasil BMI pada elemen HTML
    document.getElementById('hasilBMI').innerText = hasilBMI;
    
    // Menentukan kategori berdasarkan hasil BMI
    if (hasilBMI < 18.5) {
        // Kategori: Kekurangan berat badan
        document.getElementById('tampilkan').innerText = "Kekurangan berat badan";
        document.getElementById('tampilkan2').innerText = "Anda kekurangan berat badan";
        document.getElementById('tampilkan3').innerText = "Hasil BMI kurang dari 18.5";
        document.getElementById('tampilkan4').innerHTML = 
        "Anda berada dalam kategori underweight atau kekurangan berat badan. <br>" +
        "Untuk meningkatkan berat badan, Anda disarankan mengonsumsi makanan bergizi tinggi dan kaya kalori serta melakukan olahraga untuk meningkatkan massa otot. <br>" +
        "Jika BMI Anda berada dalam kategori ini, penting untuk mencapai berat badan ideal demi menjaga kesehatan tubuh.";
    } else if (hasilBMI >= 18.5 && hasilBMI < 25.0) {
            // Kategori: Normal (Ideal)
            document.getElementById('tampilkan').innerText = "Normal (Ideal)";
            document.getElementById('tampilkan2').innerText = "Anda memiliki berat badan ideal";
            document.getElementById('tampilkan3').innerText = "Hasil BMI antara 18.5 dan 24.9";
            document.getElementById('tampilkan4').innerHTML = 
                "Anda berada dalam kategori normal atau berat badan ideal.<br>" +
                "Untuk mempertahankan berat badan ini, Anda dianjurkan menjaga pola makan seimbang dan aktif bergerak secara rutin.<br>" +
                "Pastikan untuk tetap memantau berat badan agar tidak berpindah ke kategori lain yang berisiko bagi kesehatan.";
        } else if (hasilBMI >= 25.0 && hasilBMI < 30.0) {
            // Kategori: Kelebihan berat badan
            document.getElementById('tampilkan').innerText = "Kelebihan berat badan";
            document.getElementById('tampilkan2').innerText = "Anda kelebihan berat badan";
            document.getElementById('tampilkan3').innerText = "Hasil BMI antara 25.0 dan 29.9";
            document.getElementById('tampilkan4').innerHTML = 
                "Anda berada dalam kategori overweight atau kelebihan berat badan.<br>" +
                "Langkah terbaik untuk menurunkan berat badan adalah dengan mengatur pola makan, mengurangi asupan kalori berlebih, dan meningkatkan aktivitas fisik.<br>" +
                "Jika BMI Anda berada di kategori ini, menurunkan berat badan ke kisaran ideal dapat membantu mengurangi risiko penyakit terkait.";
        } else {
            // Kategori: Kegemukan (Obesitas)
            document.getElementById('tampilkan').innerText = "Kegemukan (Obesitas)";
            document.getElementById('tampilkan2').innerText = "Anda memiliki berat badan berlebih";
            document.getElementById('tampilkan3').innerText = "Hasil BMI lebih dari 30.0";
            document.getElementById('tampilkan4').innerHTML = 
                "Anda berada dalam kategori obesitas atau berat badan berlebih secara signifikan.<br>" +
                "Cara terbaik untuk menurunkan berat badan adalah dengan mengatur kalori yang dikonsumsi, menghindari makanan tinggi lemak dan gula, serta melakukan olahraga secara teratur.<br>" +
                "Jika BMI Anda berada dalam kategori ini, menurunkan berat badan ke kategori normal sangat dianjurkan untuk mencegah risiko penyakit serius.";
        }
    
    }
// Fungsi untuk mereset form dan hasil
function resetform() {
    // Mereset hasil BMI dan pesan kategori
    document.getElementById('hasilBMI').innerText = '0';
    document.getElementById('tampilkan2').innerText = '.....';
    
    // Mereset input dalam form
    document.querySelector('form').reset();
}
