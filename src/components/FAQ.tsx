import { useState } from "react";

const faqs = [
  {
    question: "Respiración para el bienestar general",
    answer: (
      <ul className="list-disc pl-5">
        <li>Inhalar doble y exhalar prolongado oxigena el cerebro, libera dióxido de carbono y permite liberar estrés.</li>
        <li>La respiración diafragmática alivia el dolor y la ansiedad.</li>
        <li>Una respiración completa pasa por el diafragma (abdomen), músculos intercostales (costillas) y llega hasta la parte superior del pecho.</li>
        <li>Inhalar profundo y exhalar prolongado activa la respuesta de relajación del cuerpo (sistema parasimpático).</li>
      </ul>
    ),
  },
  {
    question: "Técnicas de respiración específicas",
    answer: (
      <ul className="list-disc pl-5">
        <li>4-7-8: Inhalar por 4 segundos, retener por 7 segundos y exhalar prolongado por 8 segundos permite que el cuerpo se relaje para dormir.</li>
        <li>Inhalar y retener vitaliza la mente y el cuerpo.</li>
        <li>Exhalar y retener relaja la mente y el cuerpo.</li>
        <li>La respiración de fosa alternada (Nadi Shodhana) equilibra el funcionamiento cerebral y limpia el sistema energético.</li>
        <li>La respiración de fuego (Kapalabhati) purifica el sistema, oxigena el cerebro e incrementa nuestra energía.</li>
      </ul>
    ),
  },
  {
    question: "Respiración y conexión con el cuerpo",
    answer: (
      <ul className="list-disc pl-5">
        <li>Antes de sentarte a respirar, mueve y estira el cuerpo. Mejor circulación de la sangre equivale a mayor oxigenación.</li>
        <li>Los canales de energía (nadis) pueden ser limpiados y purificados con práctica diaria de Pranayama.</li>
        <li>Fijar la atención de los ojos en la punta de la nariz y respirar con serenidad activa el chakra del tercer ojo.</li>
        <li>La práctica de Pranayama cultiva mejor comunicación entre el corazón y el cerebro, facilitando un estado de armonía.</li>
      </ul>
    ),
  },
  {
    question: "Respiración para enfrentar el estrés y el dolor",
    answer: (
      <ul className="list-disc pl-5">
        <li>En momentos de tensión, inhala doble y exhala prolongado para evitar que el estrés se acumule.</li>
        <li>Inhalar doble y exhalar prolongado ayuda a resistir mejor el frío. ¡Practica en la ducha!</li>
        <li>¡Sonríele al dolor! La mente y el cuerpo son más resilientes de lo que podemos percibir.</li>
      </ul>
    ),
  },
  {
    question: "Bienestar integral y hábitos complementarios",
    answer: (
      <ul className="list-disc pl-5">
        <li>Una pequeña sonrisa al respirar libera serotonina, endorfinas y analgésicos naturales.</li>
        <li>La gratitud, relajación y plenitud son estados de ser. ¡Respira profundo y ajusta la perspectiva!</li>
        <li>Limón con sal y agua tibia en ayunas ayuda a purificar el sistema energético.</li>
        <li>La esencia de la práctica está en el silencio. Practica Pranayama y meditación para disfrutar de tu energía con serenidad.</li>
      </ul>
    ),
  },
];

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
    <section className="py-20 bg-[#EBEBEB]">
      <div className="container mx-auto px-4">
        <div className="max-w-5xl mx-auto space-y-3">
          {faqs.map((faq, index) => (
            <div data-aos="fade-up" key={index} className="overflow-hidden">
              <button
                onClick={() => setOpenIndex(openIndex === index ? null : index)}
                className="w-full rounded-2xl px-6 py-4 text-left transition-all duration-300 ease-in-out border-[#2A2A2A] border-2"
              >
                <div className="flex justify-between items-center">
                  <span className="text-[20px] lg:text-[29px] w-1/2 lg:w-full font-medium text-gray-900">
                    {faq.question}
                  </span>
                  <span
                    className={`border-2 border-[#2A2A2A] rounded-full transform transition-transform duration-300 ${openIndex === index ? "rotate-90" : ""}`}
                  >
                    <svg
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      className="transform transition-transform duration-300"
                    >
                      <path d="M9 18l6-6-6-6" />
                    </svg>
                  </span>
                </div>
                <div
                  className={`grid transition-all duration-300 ease-in-out ${openIndex === index ? "grid-rows-[1fr] opacity-100 mt-4" : "grid-rows-[0fr] opacity-0"}`}
                >
                  <div className="overflow-hidden">
                    {faq.answer}
                  </div>
                </div>
              </button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
