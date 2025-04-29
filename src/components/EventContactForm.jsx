'use client'
import React, { useState, useRef } from 'react'
import { HiChevronDown } from 'react-icons/hi'
import { FaWhatsapp } from 'react-icons/fa'
import emailjs from '@emailjs/browser'

const EventContactForm = () => {
  const [formData, setFormData] = useState({
    eventType: 'Bodas Destino',
    tentativeDate: '',
    peopleCount: '',
    specialRequirements: '',
    budget: '',
    name: '',
    email: '',
    phone: '',
    website: ''
  })
  
  const [loading, setLoading] = useState(false)
  const [submitStatus, setSubmitStatus] = useState(null)
  const [errors, setErrors] = useState({})
  const formRef = useRef()
  
  const handleChange = (e) => {
    const { name, value } = e.target
    setFormData(prevState => ({
      ...prevState,
      [name]: value
    }))
    
    if (errors[name]) {
      setErrors(prev => ({
        ...prev,
        [name]: ''
      }))
    }
  }
  
  const validateForm = () => {
    const newErrors = {}
    
    if (!formData.name.trim()) {
      newErrors.name = 'El nombre es requerido'
    }
    
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
    if (!emailRegex.test(formData.email)) {
      newErrors.email = 'Correo electrónico inválido'
    }
    
    if (!formData.phone.trim()) {
      newErrors.phone = 'El teléfono es requerido'
    }
    
    if (!formData.tentativeDate) {
      newErrors.tentativeDate = 'La fecha es requerida'
    }
    
    const peopleCount = parseInt(formData.peopleCount)
    if (isNaN(peopleCount) || peopleCount <= 0) {
      newErrors.peopleCount = 'Debe ingresar un número válido de personas'
    }
    
    setErrors(newErrors)
    return Object.keys(newErrors).length === 0
  }
  
  const handleSubmit = (e) => {
    e.preventDefault()
    
    if (formData.website) {
      console.log('Bot detected')
      setSubmitStatus('success')
      setTimeout(() => {
        setSubmitStatus(null)
      }, 5000)
      return
    }
    
    if (!validateForm()) {
      return
    }
    
    setLoading(true)
    
    const serviceId = 'service_hszluyb'
    const templateId = 'template_h08cowh'
    const publicKey = 'nX3m_W03oHQazVtgf'
    
    emailjs.sendForm(serviceId, templateId, formRef.current, publicKey)
      .then((result) => {
        console.log('SUCCESS!', result.text)
        setSubmitStatus('success')
        setFormData({
          eventType: 'Bodas Destino',
          tentativeDate: '',
          peopleCount: '',
          specialRequirements: '',
          budget: '',
          name: '',
          email: '',
          phone: '',
          website: ''
        })
        setErrors({})
      })
      .catch((error) => {
        console.log('FAILED...', error.text)
        setSubmitStatus('error')
      })
      .finally(() => {
        setLoading(false)
        setTimeout(() => {
          setSubmitStatus(null)
        }, 5000)
      })
  }

  const dropdownStyles = `
    .custom-select {
      position: relative;
    }
    .custom-select select {
      appearance: none;
      width: 100%;
      background-color: transparent;
    }
    .custom-select option {
      background-color: #7B8E6A;
      color: white;
      padding: 8px 16px;
    }
    .custom-select option:hover, .custom-select option:focus {
      background-color: #7B8E6A !important;
      color: white;
    }
  `;

  return (
    <section className="font-kumbh bg-[#EFE9DD] rounded-xl overflow-hidden flex flex-col md:flex-row max-w-7xl px-4 mx-auto">
      <style>{dropdownStyles}</style>
      
      <div className="w-full md:w-[40%] p-6 md:p-10 space-y-8" data-aos="fade-right">
        <header className="space-y-4">
          <h2 className="text-[1.62rem] font-semibold leading-tight font-kumbh">
            Contacte con nuestro coordinador de eventos especiales
          </h2>
          <p className="text-sm text-gray-700 max-w-md font-kumbh">
            Entendemos que cada evento es único y merece una atención
            personalizada. Nuestro equipo especializado está listo para ayudarle a
            crear la experiencia perfecta adaptada a sus necesidades específicas.
          </p>
        </header>

        <form ref={formRef} className="flex flex-col space-y-6" onSubmit={handleSubmit}>
          <div>
            <label className="block mb-1 font-medium">Nombre completo</label>
            <input
              name="name"
              type="text"
              value={formData.name}
              onChange={handleChange}
              placeholder="Escriba su nombre completo"
              className={`w-full border ${errors.name ? 'border-red-500' : 'border-black/70'} rounded-xl py-3 px-5 placeholder-gray-500 bg-transparent focus:outline-none focus:ring-2 focus:ring-black`}
              required
            />
            {errors.name && <p className="text-red-500 text-sm mt-1">{errors.name}</p>}
          </div>

          <div>
            <label className="block mb-1 font-medium">Correo electrónico</label>
            <input
              name="email"
              type="email"
              value={formData.email}
              onChange={handleChange}
              placeholder="Su correo electrónico"
              className={`w-full border ${errors.email ? 'border-red-500' : 'border-black/70'} rounded-xl py-3 px-5 placeholder-gray-500 bg-transparent focus:outline-none focus:ring-2 focus:ring-black`}
              required
            />
            {errors.email && <p className="text-red-500 text-sm mt-1">{errors.email}</p>}
          </div>

          <div>
            <label className="block mb-1 font-medium">Teléfono</label>
            <input
              name="phone"
              type="tel"
              value={formData.phone}
              onChange={handleChange}
              placeholder="Su número de teléfono"
              className={`w-full border ${errors.phone ? 'border-red-500' : 'border-black/70'} rounded-xl py-3 px-5 placeholder-gray-500 bg-transparent focus:outline-none focus:ring-2 focus:ring-black`}
              required
            />
            {errors.phone && <p className="text-red-500 text-sm mt-1">{errors.phone}</p>}
          </div>

          <div className="hidden">
            <label htmlFor="website">Website</label>
            <input
              type="text"
              id="website"
              name="website"
              value={formData.website}
              onChange={handleChange}
              autoComplete="off"
            />
          </div>

          <div>
            <label className="block mb-1 font-medium">Tipo de evento</label>
            <div className="relative">
              <select
                name="eventType"
                value={formData.eventType}
                onChange={handleChange}
                className="appearance-none w-full border border-black/70 rounded-lg py-3 px-5 bg-transparent focus:outline-none focus:ring-2 focus:ring-black cursor-pointer"
                style={{
                  backgroundColor: 'transparent',
                  backgroundImage: 'none'
                }}
              >
                <option value="Bodas Destino" style={{backgroundColor: '#7B8E6A', color: 'white'}}>Bodas Destino</option>
                <option value="Eventos Corporativos" style={{backgroundColor: '#7B8E6A', color: 'white'}}>Eventos Corporativos</option>
                <option value="Luxury buyots" style={{backgroundColor: '#7B8E6A', color: 'white'}}>Luxury buyots</option>
                <option value="Retiros de Bienestar" style={{backgroundColor: '#7B8E6A', color: 'white'}}>Retiros de Bienestar</option>
              </select>
              <HiChevronDown className="absolute right-4 top-1/2 -translate-y-1/2 pointer-events-none text-gray-500" />
            </div>
          </div>

          <div>
            <label className="block mb-1 font-medium">Fechas tentativas</label>
            <input
              name="tentativeDate"
              type="date"
              value={formData.tentativeDate}
              onChange={handleChange}
              className={`w-full border ${errors.tentativeDate ? 'border-red-500' : 'border-black/70'} rounded-xl py-3 px-5 text-gray-700 placeholder-gray-500 bg-transparent focus:outline-none focus:ring-2 focus:ring-black`}
              required
            />
            {errors.tentativeDate && <p className="text-red-500 text-sm mt-1">{errors.tentativeDate}</p>}
          </div>

          <div>
            <label className="block mb-1 font-medium">
              Número aproximado de personas
            </label>
            <input
              name="peopleCount"
              type="number"
              min="1"
              value={formData.peopleCount}
              onChange={handleChange}
              placeholder="Ingrese el número aquí…"
              className={`w-full border ${errors.peopleCount ? 'border-red-500' : 'border-black/70'} rounded-xl py-3 px-5 placeholder-gray-500 bg-transparent focus:outline-none focus:ring-2 focus:ring-black`}
              required
            />
            {errors.peopleCount && <p className="text-red-500 text-sm mt-1">{errors.peopleCount}</p>}
          </div>

          <div>
            <label className="block mb-1 font-medium">Requisitos especiales</label>
            <input
              name="specialRequirements"
              type="text"
              value={formData.specialRequirements}
              onChange={handleChange}
              placeholder="Ingrese los requisitos aquí…"
              className="w-full border border-black/70 rounded-xl py-3 px-5 placeholder-gray-500 bg-transparent focus:outline-none focus:ring-2 focus:ring-black"
            />
          </div>

          <div>
            <label className="block mb-1 font-medium">Presupuesto estimado</label>
            <input
              name="budget"
              type="text"
              value={formData.budget}
              onChange={handleChange}
              placeholder="Escriba el presupuesto aquí…"
              className="w-full border border-black/70 rounded-xl py-3 px-5 placeholder-gray-500 bg-transparent focus:outline-none focus:ring-2 focus:ring-black"
            />
          </div>

          {submitStatus === 'success' && (
            <div className="bg-green-100 border border-green-400 text-green-700 px-4 py-3 rounded relative">
              ¡Mensaje enviado con éxito! Nos pondremos en contacto pronto.
            </div>
          )}
          
          {submitStatus === 'error' && (
            <div className="bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded relative">
              Hubo un error al enviar el mensaje. Por favor, inténtelo de nuevo.
            </div>
          )}

          <div className="flex flex-col sm:flex-row gap-4 pt-2">
            <button
              type="submit"
              disabled={loading}
              className="flex-1 border border-black rounded-full py-3 font-medium hover:bg-black hover:text-white transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
            >
              {loading ? 'Enviando...' : 'Enviar'}
            </button>

            <a
              href="https://wa.me/50686704978"
              target="_blank"
              rel="noreferrer"
              className="flex-1 flex items-center justify-center gap-2 border border-black rounded-full py-3 font-medium hover:bg-black hover:text-white transition-colors"
            >
              <FaWhatsapp className="text-lg" />
              WhatsApp
            </a>
          </div>
        </form>
      </div>

      <div className="w-full md:w-[60%] ">
        <img
          src="/images/titles.avif"
          alt="Fogata en la playa"
          className="h-full w-full object-cover rounded-2xl"
          data-aos="fade-left"
        />
      </div>
    </section>
  )
}

export default EventContactForm