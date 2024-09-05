function konversiNilai() {
    const nilai = parseInt(document.getElementById('nilai').value);
    let huruf = '-';

    if (isNaN(nilai) || nilai < 0 || nilai > 100) {
        alert("Masukkan nilai yang valid antara 0 hingga 100.");
        return;
    }

    if (nilai >= 0 && nilai <= 40) {
        huruf = 'E';
    } else if (nilai >= 41 && nilai <= 55) {
        huruf = 'D';
    } else if (nilai >= 56 && nilai <= 60) {
        huruf = 'C';
    } else if (nilai >= 61 && nilai <= 65) {
        huruf = 'BC';
    } else if (nilai >= 66 && nilai <= 70) {
        huruf = 'B';
    } else if (nilai >= 71 && nilai <= 80) {
        huruf = 'AB';
    } else if (nilai >= 81 && nilai <= 100) {
        huruf = 'A';
    }

    document.getElementById('hasil').textContent = huruf;
}
