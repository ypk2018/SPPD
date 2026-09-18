import React from 'react';
import { SppdData } from '../types';

interface Props {
  data: SppdData;
}

export const KopSurat: React.FC<Props> = ({ data }) => {
  return (
    <div className="flex flex-row items-center justify-between border-b-4 border-double border-black pb-2 mb-6">
      <div className="w-24 flex-shrink-0 flex justify-center">
        {data.logoPemda ? (
          <img src={data.logoPemda} alt="Logo Pemda" className="max-h-24 object-contain" />
        ) : (
          <div className="w-20 h-24 border border-dashed border-gray-300 flex items-center justify-center text-xs text-gray-400 text-center print:border-none print:text-transparent">Logo Pemda</div>
        )}
      </div>
      <div className="flex-1 flex flex-col items-center justify-center text-center leading-[1.15]">
        <h2 className="text-xl font-bold uppercase text-black">Pemerintah Kabupaten Jayapura</h2>
        <h1 className="text-2xl font-bold uppercase text-black">Dinas Pendidikan</h1>
        <h1 className="text-3xl font-bold uppercase text-black">SMP Negeri 7 Sentani</h1>
        <p className="text-sm text-black mt-1">Alamat: Jl. Kemiri, Sentani, Kec. Sentani, Kabupaten Jayapura, Papua 99352</p>
      </div>
      <div className="w-24 flex-shrink-0 flex justify-center">
        {data.logoSekolah ? (
          <img src={data.logoSekolah} alt="Logo Sekolah" className="max-h-24 object-contain" />
        ) : (
          <div className="w-20 h-24 border border-dashed border-gray-300 flex items-center justify-center text-xs text-gray-400 text-center print:border-none print:text-transparent">Logo Sekolah</div>
        )}
      </div>
    </div>
  );
};
