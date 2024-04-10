'use client';

import Image from "next/image";

import User from "../../public/userSvg.svg";
import Team from "../../public/teamSvg.svg";
import Boxe from "../../public/boxingGlovesSvg.svg";
import Star from "../../public/starSvg.svg";

export default function Plans() {
  return (
    <section
      id='plans'
      className='bg-slate-50 dark:bg-transparent container space-y-6 py-8 md:py-12 lg:py-24'
    >
      <div className='mx-auto flex max-w-[58rem] flex-col items-center space-y-4 text-center'>
        <h2 className='font-heading text-3xl leading-[1.1] sm:text-3xl md:text-6xl'>
          <span className="text-primary">Planos</span>
        </h2>
        
      </div>

      <div className='mx-auto grid justify-center gap-4 sm:grid-cols-2 md:max-w-[64rem] md:grid-cols-4'>
        <div className='relative overflow-hidden rounded-lg border bg-background p-2'>
          <div className='flex h-[180px] flex-col justify-between rounded-md p-6'>
            <Image
            src={User}
            alt="IconeUser"
            width={48}
            height={48}
            />
            <div className='space-y-2'>
              <h3 className='font-bold'>Personal</h3>
              <p className='text-sm text-muted-foreground'>
                Aulas Personalizadas Individuais
              </p>
            </div>
          </div>
        </div>

        <div className='relative overflow-hidden rounded-lg border bg-background p-2'>
          <div className='flex h-[180px] flex-col justify-between rounded-md p-6'>
          <Image
            src={Team}
            alt="IconeUser"
            width={48}
            height={48}
            />
            <div className='space-y-2'>
              <h3 className='font-bold'>Grupo</h3>
              <p className='text-sm text-muted-foreground'>
                Aulas Em Grupos.
              </p>
            </div>
          </div>
        </div>

        
        <div className='relative overflow-hidden rounded-lg border bg-background p-2'>
          <div className='flex h-[180px] flex-col justify-between rounded-md p-6'>
          <Image
            src={Boxe}
            alt="IconeUser"
            width={48}
            height={48}
            />
            <div className='space-y-2'>
              <h3 className='font-bold'>Boxe</h3>
              <p className='text-sm text-muted-foreground'>
                Aulas De Boxe Personal/Individual.
              </p>
            </div>
          </div>
        </div>

        <div className='relative overflow-hidden rounded-lg border bg-background p-2'>
          <div className='flex h-[180px] flex-col justify-between rounded-md p-6'>
          <Image
            src={Star}
            alt="IconeUser"
            width={48}
            height={48}
            />
            <div className='space-y-2'>
              <h3 className='font-bold'>Livre</h3>
              <p className='text-sm text-muted-foreground'>
                Acesso A Todas Modalidades
              </p>
            </div>
          </div>
        </div>

        
      </div>
      <div className='mx-auto text-center md:max-w-[58rem]'>
      </div>
    </section>
  )
}