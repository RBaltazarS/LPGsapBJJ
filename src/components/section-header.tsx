import Image from "next/image";
import KimonoIcon from "../../public/KimonoIcon.png"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { SheetTrigger, SheetContent, Sheet } from "@/components/ui/sheet"
import { ModeToggle } from "@/components/toggle-dark-light"


export default function Header() {

  return (
    <header className="fixed bg-slate-50 dark:bg-[#020817]  z-50 flex items-center h-14 px-4 md:px-6 w-full border-b">
      <Link className="flex items-center gap-2 text-lg font-semibold" href="#">
        <Image
          src={KimonoIcon}
          alt="LOGO"
          width={24}
          height={24}
        />
        <span className="mr-4">Bjj</span>
      </Link>
      <nav className="ml-auto flex-1 hidden items-center gap-6 lg:flex">
        <Link className="font-semibold hover:text-primary transition-all" href="#about">
          Sobre Nós
        </Link>
        <Link className="font-semibold hover:text-primary transition-all" href="#plans">
          Planos
        </Link>
        <Link className="font-semibold hover:text-primary transition-all" href="#contact">
          Contatos
        </Link>
      </nav>
      <div className="ml-auto flex-1 justify-end hidden lg:flex">
        <ModeToggle />
        <Button size="sm" variant="outline" className="mr-4 hover:text-primary transition-all">
          WhatsApp
        </Button>
      </div>
      <Sheet>
        <SheetTrigger asChild>
          <Button
            aria-controls="navbar-menu-sheet"
            aria-expanded="false"
            id="navbar-menu"
            size="icon"
            variant="outline"
          >
            <MenuIcon className="w-6 h-6" />
            <span className="sr-only">Toggle menu</span>
          </Button>
        </SheetTrigger>
        <SheetContent id="navbar-menu-sheet" side="top">
          <nav className="flex flex-col gap-4 py-4">
            <Link className="flex items-center gap-2 font-semibold hover:text-primary transition-all" href="#">
              Inicio
            </Link>
            <Link className="flex items-center gap-2 font-semibold hover:text-primary transition-all" href="#about ">
              Sobre Nós
            </Link>
            <Link className="flex items-center gap-2 font-semibold hover:text-primary transition-all" href="#plans">
              Planos
            </Link>
            <Link className="flex items-center gap-2 font-semibold hover:text-primary transition-all" href="#contact">
              Contatos
            </Link>
          </nav>
        </SheetContent>
      </Sheet>
    </header>
  )
}

function MenuIcon(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <line x1="4" x2="20" y1="12" y2="12" />
      <line x1="4" x2="20" y1="6" y2="6" />
      <line x1="4" x2="20" y1="18" y2="18" />
    </svg>
  )
}


function PackageIcon(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="m7.5 4.27 9 5.15" />
      <path d="M21 8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16Z" />
      <path d="m3.3 7 8.7 5 8.7-5" />
      <path d="M12 22V12" />
    </svg>
  )
}
