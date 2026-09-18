import React, { useState, useRef } from 'react';
import { FileText, Printer, Save, Map, Calculator, User } from 'lucide-react';
import { SuratTugas } from './components/SuratTugas';
import { SuratPerjalananDinas } from './components/SuratPerjalananDinas';
import { SuratPerjalananDinasBelakang } from './components/SuratPerjalananDinasBelakang';
import { RincianBiaya } from './components/RincianBiaya';
import { SppdData, DocumentType } from './types';

export default function App() {
  const [activeTab, setActiveTab] = useState<DocumentType>('SP');
  
  const [formData, setFormData] = useState<SppdData>({
    nomorSurat: '421.3/     /SMPN7/2026',
    tanggalSurat: new Date().toISOString().split('T')[0],
    
    pemberiPerintahNama: 'John Doe, S.Pd., M.Pd.',
    pemberiPerintahNip: '19700101 199512 1 001',
    pemberiPerintahJabatan: 'Kepala Sekolah',

    pegawaiNama: '',
    pegawaiNip: '',
    pegawaiPangkatGolongan: '',
    pegawaiJabatan: 'Guru',
    
    maksudPerjalanan: '',
    alatAngkut: 'Kendaraan Darat / Umum',
    tempatBerangkat: 'Sentani',
    tempatTujuan: '',
    lamaHari: 1,
    tanggalBerangkat: new Date().toISOString().split('T')[0],
    tanggalKembali: new Date().toISOString().split('T')[0],
    bebanAnggaran: 'BOS Reguler',
    
    uangHarian: 0,
    biayaTransport: 0,
    biayaPenginapan: 0,
    biayaLainnya: 0,
    keteranganBiayaLainnya: '',
    logoPemda: '',
    logoSekolah: ''
  });

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    const { name, value, type } = e.target;
    
    setFormData(prev => ({
      ...prev,
      [name]: type === 'number' ? Number(value) : value
    }));
  };

  const handleImageUpload = (e: React.ChangeEvent<HTMLInputElement>, fieldName: 'logoPemda' | 'logoSekolah') => {
    const file = e.target.files?.[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setFormData(prev => ({
          ...prev,
          [fieldName]: reader.result as string
        }));
      };
      reader.readAsDataURL(file);
    }
  };

  const handlePrint = () => {
    window.print();
  };

  return (
    <div className="min-h-screen bg-gray-100 flex flex-col font-sans">
      {/* Header - Hidden on Print */}
      <header className="bg-blue-800 text-white shadow-md p-4 flex justify-between items-center no-print z-10 relative">
        <div className="flex items-center space-x-3">
          <div className="bg-white p-2 rounded-full">
            <FileText className="text-blue-800 w-6 h-6" />
          </div>
          <div>
            <h1 className="text-xl font-bold tracking-tight">Sistem SPPD Terpadu</h1>
            <p className="text-blue-200 text-xs">SMP Negeri 7 Sentani - Kab. Jayapura</p>
          </div>
        </div>
        <button 
          onClick={handlePrint}
          className="bg-white text-blue-800 hover:bg-blue-50 px-4 py-2 rounded-lg font-medium shadow flex items-center space-x-2 transition-colors"
        >
          <Printer className="w-5 h-5" />
          <span>Cetak / Ekspor PDF</span>
        </button>
      </header>

      {/* Main Content */}
      <div className="flex-1 flex overflow-hidden flex-col md:flex-row">
        
        {/* Left Form Panel - Hidden on Print */}
        <div className="w-full md:w-1/3 lg:w-[400px] bg-white border-r overflow-y-auto no-print p-6 shadow-sm z-0">
          <h2 className="text-lg font-bold text-gray-800 mb-6 flex items-center">
            <Save className="w-5 h-5 mr-2 text-blue-600"/>
            Input Data Perjalanan
          </h2>

          <div className="space-y-6">
            
            {/* Administrasi Surat */}
            <section className="bg-gray-50 p-4 rounded-xl border border-gray-100">
              <h3 className="font-semibold text-gray-700 mb-3 flex items-center text-sm uppercase tracking-wide">
                <FileText className="w-4 h-4 mr-2" /> Administrasi
              </h3>
              <div className="space-y-3">
                <div className="grid grid-cols-2 gap-3">
                  <div>
                    <label className="block text-xs font-medium text-gray-600 mb-1">Logo Pemda</label>
                    <input type="file" accept="image/*" onChange={(e) => handleImageUpload(e, 'logoPemda')} className="w-full text-xs" />
                  </div>
                  <div>
                    <label className="block text-xs font-medium text-gray-600 mb-1">Logo Sekolah</label>
                    <input type="file" accept="image/*" onChange={(e) => handleImageUpload(e, 'logoSekolah')} className="w-full text-xs" />
                  </div>
                </div>
                <div>
                  <label className="block text-xs font-medium text-gray-600 mb-1">Nomor Surat</label>
                  <input type="text" name="nomorSurat" value={formData.nomorSurat} onChange={handleInputChange} className="w-full border rounded-md p-2 text-sm focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none" />
                </div>
                <div>
                  <label className="block text-xs font-medium text-gray-600 mb-1">Tanggal Surat</label>
                  <input type="date" name="tanggalSurat" value={formData.tanggalSurat} onChange={handleInputChange} className="w-full border rounded-md p-2 text-sm focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none" />
                </div>
              </div>
            </section>

            {/* Pegawai */}
            <section className="bg-gray-50 p-4 rounded-xl border border-gray-100">
              <h3 className="font-semibold text-gray-700 mb-3 flex items-center text-sm uppercase tracking-wide">
                <User className="w-4 h-4 mr-2" /> Data Pegawai (Yang Ditugaskan)
              </h3>
              <div className="space-y-3">
                <div>
                  <label className="block text-xs font-medium text-gray-600 mb-1">Jabatan di Sekolah</label>
                  <select name="pegawaiJabatan" value={formData.pegawaiJabatan} onChange={handleInputChange} className="w-full border rounded-md p-2 text-sm focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none">
                    <option value="Guru">Guru</option>
                    <option value="Kepala Sekolah">Kepala Sekolah</option>
                    <option value="Tata Usaha">Tata Usaha</option>
                  </select>
                </div>
                <div>
                  <label className="block text-xs font-medium text-gray-600 mb-1">Nama Lengkap & Gelar</label>
                  <input type="text" name="pegawaiNama" value={formData.pegawaiNama} onChange={handleInputChange} placeholder="Contoh: Budi Santoso, S.Pd" className="w-full border rounded-md p-2 text-sm focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none" />
                </div>
                <div>
                  <label className="block text-xs font-medium text-gray-600 mb-1">NIP (Kosongkan jika honorer)</label>
                  <input type="text" name="pegawaiNip" value={formData.pegawaiNip} onChange={handleInputChange} className="w-full border rounded-md p-2 text-sm focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none" />
                </div>
                <div>
                  <label className="block text-xs font-medium text-gray-600 mb-1">Pangkat / Golongan</label>
                  <input type="text" name="pegawaiPangkatGolongan" value={formData.pegawaiPangkatGolongan} onChange={handleInputChange} placeholder="Contoh: Penata Muda / III.a" className="w-full border rounded-md p-2 text-sm focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none" />
                </div>
              </div>
            </section>

            {/* Perjalanan */}
            <section className="bg-gray-50 p-4 rounded-xl border border-gray-100">
              <h3 className="font-semibold text-gray-700 mb-3 flex items-center text-sm uppercase tracking-wide">
                <Map className="w-4 h-4 mr-2" /> Detail Perjalanan
              </h3>
              <div className="space-y-3">
                <div>
                  <label className="block text-xs font-medium text-gray-600 mb-1">Maksud / Tujuan Tugas</label>
                  <textarea name="maksudPerjalanan" value={formData.maksudPerjalanan} onChange={handleInputChange} rows={3} className="w-full border rounded-md p-2 text-sm focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none" placeholder="Contoh: Menghadiri rapat koordinasi kurikulum..."></textarea>
                </div>
                <div className="grid grid-cols-2 gap-3">
                  <div>
                    <label className="block text-xs font-medium text-gray-600 mb-1">Berangkat Dari</label>
                    <input type="text" name="tempatBerangkat" value={formData.tempatBerangkat} onChange={handleInputChange} className="w-full border rounded-md p-2 text-sm" />
                  </div>
                  <div>
                    <label className="block text-xs font-medium text-gray-600 mb-1">Tujuan Ke</label>
                    <input type="text" name="tempatTujuan" value={formData.tempatTujuan} onChange={handleInputChange} className="w-full border rounded-md p-2 text-sm" />
                  </div>
                </div>
                <div className="grid grid-cols-2 gap-3">
                  <div>
                    <label className="block text-xs font-medium text-gray-600 mb-1">Tgl Berangkat</label>
                    <input type="date" name="tanggalBerangkat" value={formData.tanggalBerangkat} onChange={handleInputChange} className="w-full border rounded-md p-2 text-sm" />
                  </div>
                  <div>
                    <label className="block text-xs font-medium text-gray-600 mb-1">Tgl Kembali</label>
                    <input type="date" name="tanggalKembali" value={formData.tanggalKembali} onChange={handleInputChange} className="w-full border rounded-md p-2 text-sm" />
                  </div>
                </div>
                <div className="grid grid-cols-2 gap-3">
                  <div>
                    <label className="block text-xs font-medium text-gray-600 mb-1">Lama Hari</label>
                    <input type="number" name="lamaHari" min="1" value={formData.lamaHari} onChange={handleInputChange} className="w-full border rounded-md p-2 text-sm" />
                  </div>
                  <div>
                    <label className="block text-xs font-medium text-gray-600 mb-1">Alat Transportasi</label>
                    <input type="text" name="alatAngkut" value={formData.alatAngkut} onChange={handleInputChange} className="w-full border rounded-md p-2 text-sm" />
                  </div>
                </div>
              </div>
            </section>

            {/* Rincian Biaya */}
            <section className="bg-gray-50 p-4 rounded-xl border border-gray-100">
              <h3 className="font-semibold text-gray-700 mb-3 flex items-center text-sm uppercase tracking-wide">
                <Calculator className="w-4 h-4 mr-2" /> Rincian Biaya
              </h3>
              <div className="space-y-3">
                <div>
                  <label className="block text-xs font-medium text-gray-600 mb-1">Uang Harian (Per Hari) - Rp</label>
                  <input type="number" name="uangHarian" value={formData.uangHarian || ''} onChange={handleInputChange} className="w-full border rounded-md p-2 text-sm focus:ring-2 focus:ring-blue-500 outline-none" />
                </div>
                <div>
                  <label className="block text-xs font-medium text-gray-600 mb-1">Biaya Transport (Total) - Rp</label>
                  <input type="number" name="biayaTransport" value={formData.biayaTransport || ''} onChange={handleInputChange} className="w-full border rounded-md p-2 text-sm focus:ring-2 focus:ring-blue-500 outline-none" />
                </div>
                <div>
                  <label className="block text-xs font-medium text-gray-600 mb-1">Penginapan (Per Malam) - Rp</label>
                  <input type="number" name="biayaPenginapan" value={formData.biayaPenginapan || ''} onChange={handleInputChange} className="w-full border rounded-md p-2 text-sm focus:ring-2 focus:ring-blue-500 outline-none" />
                </div>
                <div className="pt-2 border-t mt-2">
                   <label className="block text-xs font-medium text-gray-600 mb-1">Beban Anggaran</label>
                   <input type="text" name="bebanAnggaran" value={formData.bebanAnggaran} onChange={handleInputChange} className="w-full border rounded-md p-2 text-sm" placeholder="Contoh: BOS Reguler" />
                </div>
              </div>
            </section>

          </div>
        </div>

        {/* Right Preview Panel */}
        <div className="flex-1 flex flex-col bg-gray-200">
          
          {/* Tabs - Hidden on Print */}
          <div className="bg-white border-b flex px-6 space-x-1 no-print overflow-x-auto shadow-sm">
            <button 
              onClick={() => setActiveTab('SP')}
              className={`py-4 px-6 text-sm font-medium border-b-2 transition-colors whitespace-nowrap ${activeTab === 'SP' ? 'border-blue-600 text-blue-700' : 'border-transparent text-gray-500 hover:text-gray-800'}`}
            >
              Surat Perintah (SP)
            </button>
            <button 
              onClick={() => setActiveTab('SPPD')}
              className={`py-4 px-6 text-sm font-medium border-b-2 transition-colors whitespace-nowrap ${activeTab === 'SPPD' ? 'border-blue-600 text-blue-700' : 'border-transparent text-gray-500 hover:text-gray-800'}`}
            >
              SPPD (Depan)
            </button>
            <button 
              onClick={() => setActiveTab('SPPD_BELAKANG')}
              className={`py-4 px-6 text-sm font-medium border-b-2 transition-colors whitespace-nowrap ${activeTab === 'SPPD_BELAKANG' ? 'border-blue-600 text-blue-700' : 'border-transparent text-gray-500 hover:text-gray-800'}`}
            >
              SPPD (Belakang)
            </button>
            <button 
              onClick={() => setActiveTab('RINCIAN')}
              className={`py-4 px-6 text-sm font-medium border-b-2 transition-colors whitespace-nowrap ${activeTab === 'RINCIAN' ? 'border-blue-600 text-blue-700' : 'border-transparent text-gray-500 hover:text-gray-800'}`}
            >
              Rincian Biaya
            </button>
          </div>

          {/* Document Preview Area */}
          <div className="flex-1 overflow-y-auto p-4 md:p-8" id="printable-area">
            {activeTab === 'SP' && <SuratTugas data={formData} />}
            {activeTab === 'SPPD' && <SuratPerjalananDinas data={formData} />}
            {activeTab === 'SPPD_BELAKANG' && <SuratPerjalananDinasBelakang data={formData} />}
            {activeTab === 'RINCIAN' && <RincianBiaya data={formData} />}
          </div>
          
        </div>
      </div>
    </div>
  );
}

