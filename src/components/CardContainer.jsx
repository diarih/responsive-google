import React from 'react';
import {Card} from "@/components/ui/card.jsx";
import {Input} from "@/components/ui/input.jsx";
import {Button} from "@/components/ui/button.jsx";
import FloatingInput from "@/components/ui/FloatingInput.jsx";

const CardContainer = () => {
  return (
    <Card
      className={'p-6 sm:p-9 shadow-none border-0 bg-white w-full lg:w-7/12 space-y-4'}>
      <div>
        <img className={'h-14 w-14'} src={'./google.svg'} alt={'logo ges'}/>
      </div>
      <div className={'flex justify-between flex-col sm:flex-row gap-y-8'}>
        <div className={'flex-1 space-y-6'}>
          <h1 className={'font-normal text-5xl'}>Login</h1>
          <p>Gunakan akun google anda</p>
        </div>
        <div className={'flex-1 mt-4'}>
          <div className={'flex flex-col gap-8 sm:gap-12 '}>
            <div>
              <FloatingInput label={'Email atau nomor telepon'}/>
              <div className={'pt-1'}>
                <Button className={'bg-transparent border-0 px-0 font-medium'} variant={'link'} asChild>
                  <a href="/login">Lupa email?</a>
                </Button>
              </div>
            </div>
            <div>
              <div className={'text-sm leading-tight'}>Bukan komputer Anda? Gunakan Private Window untuk login.
                <Button className={'bg-transparent border-0 px-0 font-medium text-wrap'} variant={'link'} asChild>
                  <a href="/login">Pelajari lebih lanjut cara menggunakan mode tamu</a>
                </Button>
              </div>
            </div>
            <div className={'flex justify-between sm:justify-end gap-4'}>
              <Button variant={'secondary'}>Buat akun</Button>
              <Button>Selanjutnya</Button>
            </div>
          </div>
        </div>
      </div>
    </Card>
  );
};

export default CardContainer;