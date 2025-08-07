import React from 'react'

const Biography = ({imageUrl}) => {
  return (
    <div className="container biography">
      <div className="banner">
        <img src={imageUrl} alt="aboutImg" />
      </div>
      <div className="banner">
        <p>Biography</p>
        <h3>Who We Are</h3>
        <p>
          MediNova Medical Institute is a leading healthcare provider committed to excellence in patient care. With advanced medical facilities and a compassionate team of professionals, we offer personalized, holistic treatment solutions. 
        </p>
        <p>We provide expert, compassionate healthcare tailored to each individuals unique needs.</p>
        <p>Your health matters — we deliver care with compassion and expertise.</p>
        <p>
          At MediNova Medical Institute, we combine cutting-edge technology with compassionate care to provide exceptional healthcare services. Our skilled professionals are dedicated to helping you achieve a healthier, happier life.
        </p>
        <p>Dedicated to excellence, MediNova ensures every patient receives thoughtful, personalized, and quality medical care.</p>
        <p>Compassionate. Skilled. Trusted. MediNova.</p>


      </div>
    </div>
  )
}

export default Biography