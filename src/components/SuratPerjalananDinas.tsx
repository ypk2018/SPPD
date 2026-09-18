import React from 'react';
import { KopSurat } from './KopSurat';
import { SppdData } from '../types';
import { formatDate } from '../utils';

interface Props {
  data: SppdData;
}

export const SuratPerjalananDinas: React.FC<Props> = ({ data }) => {
  return (
    <div className="w-full max-w-[21cm] min-h-[29.7cm] mx-auto bg-white p-12 text-black shadow-lg print:shadow-none text-[11pt] font-serif">
      <KopSurat data={data} />
      
      <div className="text-center mb-6">
        <h3 className="text-xl font-bold underline uppercase">Surat Perintah Perjalanan Dinas</h3>
        <p className="text-md mt-1">Nomor: {data.nomorSurat || '......./......./.......'}</p>
      </div>

      <table className="w-full border-collapse border border-black mb-8">
        <tbody>
          <tr>
            <td className="border border-black p-2 w-8 text-center">1</td>
            <td className="border border-black p-2 w-1/3">Pejabat berwenang yang memberi perintah</td>
            <td className="border border-black p-2 font-semibold">{data.pemberiPerintahJabatan}</td>
          </tr>
          <tr>
            <td className="border border-black p-2 text-center">2</td>
            <td className="border border-black p-2">Nama Pegawai yang diperintahkan</td>
            <td className="border border-black p-2 font-semibold">{data.pegawaiNama}</td>
          </tr>
          <tr>
            <td className="border border-black p-2 text-center">3</td>
            <td className="border border-black p-2">
              a. Pangkat dan Golongan<br/>
              b. Jabatan / Instansi
            </td>
            <td className="border border-black p-2">
              a. {data.pegawaiPangkatGolongan}<br/>
              b. {data.pegawaiJabatan} SMPN 7 Sentani
            </td>
          </tr>
          <tr>
            <td className="border border-black p-2 text-center">4</td>
            <td className="border border-black p-2">Maksud Perjalanan Dinas</td>
            <td className="border border-black p-2">{data.maksudPerjalanan}</td>
          </tr>
          <tr>
            <td className="border border-black p-2 text-center">5</td>
            <td className="border border-black p-2">Alat angkut yang dipergunakan</td>
            <td className="border border-black p-2">{data.alatAngkut}</td>
          </tr>
          <tr>
            <td className="border border-black p-2 text-center">6</td>
            <td className="border border-black p-2">
              a. Tempat berangkat<br/>
              b. Tempat tujuan
            </td>
            <td className="border border-black p-2">
              a. {data.tempatBerangkat}<br/>
              b. {data.tempatTujuan}
            </td>
          </tr>
          <tr>
            <td className="border border-black p-2 text-center">7</td>
            <td className="border border-black p-2">
              a. Lamanya perjalanan dinas<br/>
              b. Tanggal berangkat<br/>
              c. Tanggal harus kembali / tiba di tempat baru
            </td>
            <td className="border border-black p-2">
              a. {data.lamaHari} Hari<br/>
              b. {formatDate(data.tanggalBerangkat)}<br/>
              c. {formatDate(data.tanggalKembali)}
            </td>
          </tr>
          <tr>
            <td className="border border-black p-2 text-center">8</td>
            <td className="border border-black p-2">Pembebanan Anggaran<br/>a. Instansi<br/>b. Mata Anggaran</td>
            <td className="border border-black p-2"><br/>a. SMP Negeri 7 Sentani<br/>b. {data.bebanAnggaran}</td>
          </tr>
        </tbody>
      </table>

      {/* Tanda Tangan */}
      <div className="flex justify-end mt-12 print-break-inside-avoid">
        <div className="text-left w-72">
          <p>Dikeluarkan di : Sentani</p>
          <p className="mb-4">Tanggal : {formatDate(data.tanggalSurat)}</p>
          <p className="font-bold">{data.pemberiPerintahJabatan},</p>
          <div className="h-20"></div>
          <p className="font-bold underline">{data.pemberiPerintahNama || '...........................................'}</p>
          <p>NIP. {data.pemberiPerintahNip || '...........................................'}</p>
        </div>
      </div>
    </div>
  );
};
