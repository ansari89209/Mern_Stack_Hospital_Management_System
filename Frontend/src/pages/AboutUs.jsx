import React from 'react'
import Hero from "../components/Hero"
import Biography from "../components/Biography"
import DeveloperProfile from "../components/DeveloperProfile"

const AboutUs = () => {
  return (
   <>
   <Hero title={"Learn More About Us | MediNova Medical Institute | Your Trusted Healthcare Provider"}
   imageUrl={"/about.png"}
   />
   <Biography imageUrl={"/whoweare.png"} />
   <DeveloperProfile />
   </>
  )
}

export default AboutUs