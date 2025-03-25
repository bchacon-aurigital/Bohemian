import Image from 'next/image';

export default function Benefits() {
  return (
    <section className="py-20">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-3 gap-8">
          <div className="bg-green-50 p-8 rounded-xl">
            <Image
              src="/images/lung-icon.svg"
              alt="Salud"
              width={48}
              height={48}
              className="mb-4"
            />
            <h3 className="text-2xl mb-4">Salud</h3>
            <p className="text-gray-600">
              Aumenta la capacidad pulmonar, permitiendo respiraciones más profundas y conscientes mientras revitalizas y purifica el corazón, favoreciendo la circulación y la energía vital.
            </p>
          </div>
          <div className="bg-gray-50 p-8 rounded-xl">
            <Image
              src="/images/mind-icon.svg"
              alt="Mente"
              width={48}
              height={48}
              className="mb-4"
            />
            <h3 className="text-2xl mb-4">Mente</h3>
            <p className="text-gray-600">
              Mejora la claridad mental y reduce el estrés a través de la respiración consciente.
            </p>
          </div>
          <div className="bg-gray-50 p-8 rounded-xl">
            <Image
              src="/images/body-icon.svg"
              alt="Cuerpo"
              width={48}
              height={48}
              className="mb-4"
            />
            <h3 className="text-2xl mb-4">Cuerpo</h3>
            <p className="text-gray-600">
              Fortalece la conexión mente-cuerpo y mejora la postura física.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
