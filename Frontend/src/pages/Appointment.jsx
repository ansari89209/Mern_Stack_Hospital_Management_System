import React from 'react'
import Hero from "../components/Hero"
import  AppointmentForm   from '../components/AppointmentForm'

const Appointment = () => {
  return (
    <>
    
    <Hero title={"Book Your Appointment | MediNova Medical Institute | Your Trusted Healthcare Provider"} imageUrl={"/signin.png"} />
    <AppointmentForm/>
    </>
  )
}

export default Appointment