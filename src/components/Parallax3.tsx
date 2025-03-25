import Image from "next/image";

export default function Parallax3() {
  return (
    <>
      <section className="relative h-screen flex items-center justify-center overflow-hidden">
        <div className="relative z-10 text-center text-white px-4">
          <h1 className="text-4xl md:text-6xl font-bold mb-4 leading-tight font-tanNimbus">
            Encuentra tu <br className="hidden md:inline" /> equilibrio
          </h1>
          <p className="text-lg md:text-2xl font-medium font-kumbh">
            Espacios para reconectar con <br /> cuerpo y mente
          </p>
        </div>

        <div className="absolute inset-0 bg-black/30 z-[1]" />
      </section>
    </>
  );
}
