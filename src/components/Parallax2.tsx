import Image from "next/image";

const ProgramSection = () => {
  return (
    <>
      <section className="relative h-screen flex items-center justify-center overflow-hidden">
        <div className="relative z-10 text-center text-white px-4">
          <h2 className="text-4xl md:text-6xl font-bold mb-4 leading-tight font-tanNimbus">
          Sumérgete en  <br className="hidden md:inline" /> la belleza
          </h2>
          <p className="text-lg md:text-2xl font-semibold font-kumbh">
          Naturaleza y confort en<br /> perfecta armonía
          </p>
        </div>

        <div className="absolute inset-0 bg-black/30 z-[1]" />
      </section>
    </>
  );
};

export default ProgramSection;
