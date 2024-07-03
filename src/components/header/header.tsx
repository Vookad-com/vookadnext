import {
  Sheet,
  SheetContent,
  SheetFooter,
  SheetTrigger,
} from "@/components/ui/sheet"
import logo_i from "./vookad.webp";
import Image from "next/image";
import { DotsVerticalIcon } from "@radix-ui/react-icons";
export default function Header(){
    return <nav className="mx-auto p-6 flex items-center gap-4 max-w-4xl justify-end">
    <div className="flex items-center flex-shrink-0">
      <Image src={logo_i} height={64} className="object-fill" alt="vookad" />
    </div>
    <Sheet>
      <SheetTrigger asChild>
        <button className="hover:bg-slate-100 hover:rounded p-1 py-5 ease-in-out duration-300" ><DotsVerticalIcon height={28} width={28} /></button>
      </SheetTrigger>
      <SheetContent className="h-[100vh]">
      <div className="w-full text-lg  flex-col flex lg:w-auto">
          <a
            href="#responsive-header"
            className="block mt-4 lg:inline-block lg:mt-0 mr-4"
          >
            menu
          </a>
          <a
            href="#responsive-header"
            className="block mt-4 lg:inline-block lg:mt-0 mr-4"
          >offers
          </a>
          <a
            href="#responsive-header"
            className="block mt-4 lg:inline-block lg:mt-0"
          >
            services
          </a>
      </div>
        <SheetFooter className="bottom-5 absolute right-5" >
        <div>
          <a
            href="#"
            className=""
          >
            Download
          </a>
        </div>
        </SheetFooter>
      </SheetContent>
    </Sheet>
  </nav>
};
