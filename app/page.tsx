import Image from "next/image";
import Hero from "@/components/Hero";
export default function Home() {
  return (
    <main className="relative bg-black-actual text-purple-500 flex justify-center items-center flex-col overflow-hidden m-auto sm:px-10 px-5 ">
      <div className=" max-w-7xl w-full  ">
        <h1>Sajjad Portrolio Home</h1>
        
        
        <Hero />
        
        </div>
    </main>
  );
}
