import React from 'react'
import Header from '../../Components/Header/Header'
import CongoMessage from '../../Components/CongoMessage/CongoMessage'
import Footer from '../../Components/Footer/footer'
const CongoLayout = () => {
  return (
    <div className="font-Montserrat">
      <div className="lg:px-24   py-1">
        <Header />
      </div>

      <div className='lg:px-24 2xl:px-96 py-1'>
        <CongoMessage/>
      </div>

      <div className='lg:px-24 2xl:px-96 py-1'>
        <Footer/>
      </div>
    </div>
  )
}

export default CongoLayout
