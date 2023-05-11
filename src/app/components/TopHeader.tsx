import Image from "next/image";

export default function TopHeader() {
  return (
    <>
      <div className="lg:col-span-2 justify-self-center">
        <header className="flex justify-center my-10">
          <Image 
            className=""
            src={'/logo.svg'}                
            alt="Be The Hero"
            width={250 * 0.7}
            height={106 * 0.7}
            quality={70}
            priority
          />
        </header>        
      </div>      
    </>    
  )  
}