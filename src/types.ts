export interface SppdData {
  // Logos
  logoPemda?: string;
  logoSekolah?: string;

  // Kop & Surat
  nomorSurat: string;
  tanggalSurat: string;
  
  // Pemberi Perintah
  pemberiPerintahNama: string;
  pemberiPerintahNip: string;
  pemberiPerintahJabatan: string;

  // Pegawai yang diperintah
  pegawaiNama: string;
  pegawaiNip: string;
  pegawaiPangkatGolongan: string;
  pegawaiJabatan: string; // 'Guru' | 'Kepala Sekolah' | 'Tata Usaha'
  
  // Perjalanan
  maksudPerjalanan: string;
  alatAngkut: string;
  tempatBerangkat: string;
  tempatTujuan: string;
  lamaHari: number;
  tanggalBerangkat: string;
  tanggalKembali: string;
  bebanAnggaran: string;
  
  // Keuangan
  uangHarian: number;
  biayaTransport: number;
  biayaPenginapan: number;
  biayaLainnya: number;
  keteranganBiayaLainnya: string;
}

export type DocumentType = 'SP' | 'SPPD' | 'SPPD_BELAKANG' | 'RINCIAN';
