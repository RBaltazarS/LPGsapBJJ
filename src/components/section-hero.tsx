import Image from "next/image";
import IphoneMockup from "../../public/IphoneMockup.svg"
import { GridContainer } from "./grid";

export function Hero() {
  return (
    <section className="relative w-full h-section-hero pt-16">
      <GridContainer className="flex flex-col items-center">
        <div className="w-full max-w-text-hero text-center">
          <h3 className="text-sm tracking-wide font-medium uppercase text-gray-500 dark:text-gray-400 mb-4">
            Orville Neto <span className="text-primary">JIU JITSU</span>
          </h3>
          <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl lg:text-6xl/none mb-4">
            New Workouts Daily Evolution
          </h1>
          <div className="flex items-center justify-center">
            <button className="relative border hover:border-black-600 duration-500 group cursor-pointer text-sky-50  overflow-hidden h-14 w-56 rounded-md bg-red-800 p-2 flex justify-center items-center font-extrabold">
              <div className="absolute z-10 w-48 h-48 rounded-full group-hover:scale-150 transition-all  duration-500 ease-in-out bg-red-900 delay-150 group-hover:delay-75"></div>
              <div className="absolute z-10 w-40 h-40 rounded-full group-hover:scale-150 transition-all  duration-500 ease-in-out bg-red-800 delay-150 group-hover:delay-100"></div>
              <div className="absolute z-10 w-32 h-32 rounded-full group-hover:scale-150 transition-all  duration-500 ease-in-out bg-red-700 delay-150 group-hover:delay-150"></div>
              <div className="absolute z-10 w-24 h-24 rounded-full group-hover:scale-150 transition-all  duration-500 ease-in-out bg-red-600 delay-150 group-hover:delay-200"></div>
              <div className="absolute z-10 w-16 h-16 rounded-full group-hover:scale-150 transition-all  duration-500 ease-in-out bg-red-500 delay-150 group-hover:delay-300"></div>
              <p className="z-10 text-white">Aula Experimental</p>
            </button>
          </div>
        </div>

        {/*Mockups*/}
        <div className="absolute bottom-0 w-full max-w-area-mockups flex justify-between">
          <Image
            src={IphoneMockup}
            alt=""
          />
          <Image
            src={IphoneMockup}
            alt=""
          />
        </div>
      </GridContainer>
    </section>
  )
}