import Image from "next/image";

export default function Logo() {
  return (
    <div className="lg:col-span-2 justify-self-center">
      <Image 
        className="h-auto w-auto"
        src={'/logo.svg'}                
        alt="Be The Hero"
        width={250}
        height={106}
        quality={70}
        priority
      />
    </div>
  )  
}