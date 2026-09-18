import React from 'react';
import { SppdData } from '../types';
import { formatCurrency, formatDate } from '../utils';
import { KopSurat } from './KopSurat';

interface Props {
  data: SppdData;
}

export const RincianBiaya: React.FC<Props> = ({ data }) => {
  const totalUangHarian = data.uangHarian * data.lamaHari;
  const totalPenginapan = data.biayaPenginapan * (data.lamaHari > 1 ? data.lamaHari - 1 : 0);
  const totalBiaya = totalUangHarian + data.biayaTransport + totalPenginapan + data.biayaLainnya;

  return (
    <div className="w-full max-w-[21cm] min-h-[29.7cm] mx-auto bg-white p-12 text-black shadow-lg print:shadow-none text-[11pt] font-serif">
      <KopSurat data={data} />
      
      <div className="text-center mb-6">
        <h3 className="text-xl font-bold underline uppercase">Rincian Biaya Perjalanan Dinas</h3>
        <p className="text-md mt-1">Lampiran SPPD Nomor: {data.nomorSurat || '......./......./.......'}</p>
      </div>

      <div className="mb-6 leading-relaxed">
        <p>Berdasarkan Surat Perintah Perjalanan Dinas (SPPD) Nomor: {data.nomorSurat}, diberikan rincian biaya perjalanan dinas kepada:</p>
        <table className="mt-2 w-full">
          <tbody>
            <tr>
              <td className="w-48 py-1">Nama</td>
              <td className="w-4">:</td>
              <td className="font-bold">{data.pegawaiNama}</td>
            </tr>
            <tr>
              <td className="py-1">Jabatan</td>
              <td>:</td>
              <td>{data.pegawaiJabatan}</td>
            </tr>
            <tr>
              <td className="py-1">Tempat Tujuan</td>
              <td>:</td>
              <td>{data.tempatTujuan}</td>
            </tr>
            <tr>
              <td className="py-1">Lama Perjalanan</td>
              <td>:</td>
              <td>{data.lamaHari} Hari ({formatDate(data.tanggalBerangkat)} s/d {formatDate(data.tanggalKembali)})</td>
            </tr>
          </tbody>
        </table>
      </div>

      <table className="w-full border-collapse border border-black mb-8">
        <thead>
          <tr className="bg-gray-100">
            <th className="border border-black p-2 w-12 text-center">No</th>
            <th className="border border-black p-2">Rincian Biaya</th>
            <th className="border border-black p-2 w-48 text-center">Jumlah</th>
            <th className="border border-black p-2 w-32 text-center">Keterangan</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td className="border border-black p-2 text-center">1</td>
            <td className="border border-black p-2">
              Uang Harian / Representasi <br/>
              <span className="text-sm italic">{data.lamaHari} Hari x {formatCurrency(data.uangHarian)}</span>
            </td>
            <td className="border border-black p-2 text-right">{formatCurrency(totalUangHarian)}</td>
            <td className="border border-black p-2 text-center">-</td>
          </tr>
          <tr>
            <td className="border border-black p-2 text-center">2</td>
            <td className="border border-black p-2">Biaya Transportasi (Tiket/BBM/Travel)</td>
            <td className="border border-black p-2 text-right">{formatCurrency(data.biayaTransport)}</td>
            <td className="border border-black p-2 text-center">-</td>
          </tr>
          <tr>
            <td className="border border-black p-2 text-center">3</td>
            <td className="border border-black p-2">
              Biaya Penginapan <br/>
              <span className="text-sm italic">{data.lamaHari > 1 ? data.lamaHari - 1 : 0} Malam x {formatCurrency(data.biayaPenginapan)}</span>
            </td>
            <td className="border border-black p-2 text-right">{formatCurrency(totalPenginapan)}</td>
            <td className="border border-black p-2 text-center">-</td>
          </tr>
          <tr>
            <td className="border border-black p-2 text-center">4</td>
            <td className="border border-black p-2">
              Biaya Lain-lain (jika ada)<br/>
              {data.keteranganBiayaLainnya && <span className="text-sm italic">{data.keteranganBiayaLainnya}</span>}
            </td>
            <td className="border border-black p-2 text-right">{formatCurrency(data.biayaLainnya)}</td>
            <td className="border border-black p-2 text-center">-</td>
          </tr>
          <tr className="font-bold bg-gray-50">
            <td className="border border-black p-2 text-center" colSpan={2}>TOTAL BIAYA</td>
            <td className="border border-black p-2 text-right">{formatCurrency(totalBiaya)}</td>
            <td className="border border-black p-2 text-center"></td>
          </tr>
        </tbody>
      </table>

      {/* Tanda Tangan */}
      <div className="flex justify-between mt-12 print-break-inside-avoid">
        <div className="text-center w-64">
          <p>Telah menerima jumlah uang sebesar</p>
          <p className="font-bold mb-4">{formatCurrency(totalBiaya)}</p>
          <p className="font-bold">Yang Menerima,</p>
          <div className="h-20"></div>
          <p className="font-bold underline">{data.pegawaiNama || '...........................................'}</p>
          <p>NIP. {data.pegawaiNip || '...........................................'}</p>
        </div>
        <div className="text-center w-64">
          <p>Sentani, {formatDate(data.tanggalSurat)}</p>
          <p className="mb-4">Lunas dibayar,</p>
          <p className="font-bold">Bendahara Pengeluaran,</p>
          <div className="h-20"></div>
          <p className="font-bold underline">...........................................</p>
          <p>NIP. ...........................................</p>
        </div>
      </div>
    </div>
  );
};
