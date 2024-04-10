import Image from 'next/image';
import Link from 'next/link';

import NetoAvatar from "../../public/NetaoAnimacaoSite.png"


export default function About() {
  return (
    <section id="about" className="mt-20 container flex flex-col md:max-w-[64rem] md:py-12 lg:py-24">
      <div className="grid grid-cols-1 gap-y-16 lg:grid-cols-2 lg:gap-y-12 lg:grid-rows-[auto-1fr]">
        <div className="lg:pl-20 flex justify-center">
          <div className="max-w-xs px-2.5 lg:max-w-none">
            <Image
              src={NetoAvatar}
              alt='Neto'
              width={800}
              height={800}
              quality='95'
              priority={true}
              className='aspect-square rounded-lg bg-zinc-100 dark:bg-zinc-800 object-cover'
            />
          </div>
        </div>
        <div className="lg:order-first lg:row-span-2 text-center md:text-start">
          <h1 className="font-heading text-3xl md:text-4xl lg:text-5xl"><span className='text-primary'>@OrvilleNeto JiuJitsu</span></h1>
          <p className="mt-6 text-base text-muted-foreground text-justify">
            Como professor de <span className='text-primary'>Jiu-Jitsu</span>, estou pronto para enfrentar desafios e oferecer oportunidades de aprendizado. Com vasto conhecimento em técnicas de <span className='text-primary'>Jiu-Jitsu e Defesa Pessoal</span>, minha paixão é transmitir esses conhecimentos, promovendo <span className='text-primary'>disciplina, respeito e autoconfiança</span> em meus alunos. Estou em constante busca por aprimoramento pessoal e comprometido em capacitar aqueles que se juntam a mim nessa jornada.
          </p>
        </div>
      </div>
    </section>
  )
}