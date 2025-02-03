import React from 'react'
import Header from '../../Components/Header/Header'
import Footer from '../../Components/Footer/footer'
import ContactForm from '../../Components/ContactForm/ContactForm'
import { Contact } from 'lucide-react'
const ContactUs = () => {
  return (
    <div className='font-Montserrat'>
      <div className='lg:ox-24 py-1'>
        <Header/>
      </div>
      <div>
        <ContactForm/>
      </div>
      <div className='lg:ox-24 py-1'>
        <Footer/>
      </div>
    </div>
  )
}

export default ContactUs
