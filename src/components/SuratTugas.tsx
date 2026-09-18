import React from 'react';
import { KopSurat } from './KopSurat';
import { SppdData } from '../types';
import { formatDate } from '../utils';

interface Props {
  data: SppdData;
}

export const SuratTugas: React.FC<Props> = ({ data }) => {
  return (
    <div className="w-full max-w-[21cm] min-h-[29.7cm] mx-auto bg-white p-12 text-black shadow-lg print:shadow-none text-[12pt] font-serif">
      <KopSurat data={data} />
      
      <div className="text-center mb-8">
        <h3 className="text-xl font-bold underline uppercase">Surat Perintah Tugas</h3>
        <p className="text-md mt-1">Nomor: {data.nomorSurat || '......./......./.......'}</p>
      </div>

      <div className="flex flex-row mb-4">
        <div className="w-32 flex-shrink-0 font-bold">Dasar</div>
        <div className="w-4 flex-shrink-0">:</div>
        <div className="flex-grow text-justify">
          Dokumen Pelaksanaan Anggaran (DPA) SMP Negeri 7 Sentani Tahun Anggaran {new Date(data.tanggalSurat).getFullYear() || new Date().getFullYear()}.
        </div>
      </div>

      <div className="text-center my-8">
        <h3 className="text-lg font-bold uppercase">Memerintahkan :</h3>
      </div>

      <div className="flex flex-row mb-2">
        <div className="w-32 flex-shrink-0 font-bold">Kepada</div>
        <div className="w-4 flex-shrink-0">:</div>
        <div className="flex-grow">
          <table className="w-full">
            <tbody>
              <tr>
                <td className="w-40 py-1">Nama</td>
                <td className="w-4">:</td>
                <td className="font-bold">{data.pegawaiNama || '...........................................'}</td>
              </tr>
              <tr>
                <td className="py-1">NIP</td>
                <td>:</td>
                <td>{data.pegawaiNip || '...........................................'}</td>
              </tr>
              <tr>
                <td className="py-1">Pangkat/Golongan</td>
                <td>:</td>
                <td>{data.pegawaiPangkatGolongan || '...........................................'}</td>
              </tr>
              <tr>
                <td className="py-1">Jabatan</td>
                <td>:</td>
                <td>{data.pegawaiJabatan || '...........................................'} SMP Negeri 7 Sentani</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>

      <div className="flex flex-row mt-6">
        <div className="w-32 flex-shrink-0 font-bold">Untuk</div>
        <div className="w-4 flex-shrink-0">:</div>
        <div className="flex-grow">
          <ol className="list-decimal pl-5 text-justify">
            <li className="pl-2 mb-2">
              Melaksanakan perjalanan dinas dalam rangka: <span className="font-bold">{data.maksudPerjalanan || '........................................................................'}</span>.
            </li>
            <li className="pl-2 mb-2">
              Tujuan: <span className="font-bold">{data.tempatTujuan || '..........................'}</span> selama {data.lamaHari || '...'} hari, dari tanggal {formatDate(data.tanggalBerangkat)} s.d {formatDate(data.tanggalKembali)}.
            </li>
            <li className="pl-2 mb-2">
              Setelah selesai melaksanakan tugas diharap segera melaporkan hasilnya kepada Kepala Sekolah.
            </li>
          </ol>
        </div>
      </div>

      <div className="mt-8">
        <p className="text-justify indent-8">
          Demikian Surat Perintah Tugas ini dibuat untuk dapat dilaksanakan dengan penuh tanggung jawab.
        </p>
      </div>

      {/* Tanda Tangan */}
      <div className="flex justify-end mt-16">
        <div className="text-center w-72">
          <p>Sentani, {formatDate(data.tanggalSurat)}</p>
          <p className="font-bold">{data.pemberiPerintahJabatan}</p>
          <div className="h-24"></div>
          <p className="font-bold underline">{data.pemberiPerintahNama || '...........................................'}</p>
          <p>NIP. {data.pemberiPerintahNip || '...........................................'}</p>
        </div>
      </div>
    </div>
  );
};
