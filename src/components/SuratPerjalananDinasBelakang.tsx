import React from 'react';
import { SppdData } from '../types';
import { formatDate } from '../utils';

interface Props {
  data: SppdData;
}

export const SuratPerjalananDinasBelakang: React.FC<Props> = ({ data }) => {
  return (
    <div className="w-full max-w-[21cm] min-h-[29.7cm] mx-auto bg-white p-12 text-black shadow-lg print:shadow-none text-[11pt] font-serif">
      
      <table className="w-full border-collapse border border-black min-h-[25cm]">
        <tbody>
          {/* Row 1 */}
          <tr>
            <td className="border border-black p-4 w-1/2 align-top h-[6cm]">
              <div className="flex">
                <div className="w-8">I.</div>
              </div>
            </td>
            <td className="border border-black p-4 w-1/2 align-top">
              <table className="w-full">
                <tbody>
                  <tr><td className="w-28 whitespace-nowrap">Berangkat dari</td><td className="w-2">:</td><td>{data.tempatBerangkat}</td></tr>
                  <tr><td className="w-28 whitespace-nowrap">Ke</td><td className="w-2">:</td><td>{data.tempatTujuan}</td></tr>
                  <tr><td className="w-28 whitespace-nowrap">Pada tanggal</td><td className="w-2">:</td><td>{formatDate(data.tanggalBerangkat)}</td></tr>
                </tbody>
              </table>
              <div className="mt-4">
                <p>Pejabat yang memberi perintah,</p>
                <div className="h-20"></div>
                <p className="text-center underline font-bold">{data.pemberiPerintahNama}</p>
                <p className="text-center">NIP. {data.pemberiPerintahNip}</p>
              </div>
            </td>
          </tr>

          {/* Row 2 */}
          <tr>
            <td className="border border-black p-4 w-1/2 align-top h-[6cm]">
              <div className="flex">
                <div className="w-8">II.</div>
                <div className="flex-1">
                  <table className="w-full">
                    <tbody>
                      <tr><td className="w-24">Tiba di</td><td>: ...........................................</td></tr>
                      <tr><td>Pada tanggal</td><td>: ...........................................</td></tr>
                    </tbody>
                  </table>
                </div>
              </div>
            </td>
            <td className="border border-black p-4 w-1/2 align-top">
              <table className="w-full">
                <tbody>
                  <tr><td className="w-24">Berangkat dari</td><td>: ...........................................</td></tr>
                  <tr><td>Ke</td><td>: ...........................................</td></tr>
                  <tr><td>Pada tanggal</td><td>: ...........................................</td></tr>
                </tbody>
              </table>
            </td>
          </tr>

          {/* Row 3 */}
          <tr>
            <td className="border border-black p-4 w-1/2 align-top h-[6cm]">
              <div className="flex">
                <div className="w-8">III.</div>
                <div className="flex-1">
                  <table className="w-full">
                    <tbody>
                      <tr><td className="w-24">Tiba di</td><td>: ...........................................</td></tr>
                      <tr><td>Pada tanggal</td><td>: ...........................................</td></tr>
                    </tbody>
                  </table>
                </div>
              </div>
            </td>
            <td className="border border-black p-4 w-1/2 align-top">
              <table className="w-full">
                <tbody>
                  <tr><td className="w-24">Berangkat dari</td><td>: ...........................................</td></tr>
                  <tr><td>Ke</td><td>: ...........................................</td></tr>
                  <tr><td>Pada tanggal</td><td>: ...........................................</td></tr>
                </tbody>
              </table>
            </td>
          </tr>

          {/* Row 4 */}
          <tr>
            <td className="border border-black p-4 w-1/2 align-top h-[6cm]">
              <div className="flex">
                <div className="w-8">IV.</div>
                <div className="flex-1">
                  <table className="w-full">
                    <tbody>
                      <tr><td className="w-32 align-top whitespace-nowrap">Tiba kembali di</td><td className="w-2 align-top">:</td><td className="align-top">{data.tempatBerangkat}</td></tr>
                      <tr><td className="w-32 whitespace-nowrap">Pada tanggal</td><td className="w-2">:</td><td>{formatDate(data.tanggalKembali)}</td></tr>
                    </tbody>
                  </table>
                  <div className="mt-8">
                    <p>Pejabat yang memberi perintah,</p>
                    <div className="h-20"></div>
                    <p className="text-center underline font-bold">{data.pemberiPerintahNama}</p>
                    <p className="text-center">NIP. {data.pemberiPerintahNip}</p>
                  </div>
                </div>
              </div>
            </td>
            <td className="border border-black p-4 w-1/2 align-top text-justify">
              <p className="mb-4">
                Telah diperiksa dengan keterangan bahwa perjalanan tersebut di atas benar dilakukan atas perintahnya dan semata-mata untuk kepentingan jabatan dalam waktu yang sesingkat-singkatnya.
              </p>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};
