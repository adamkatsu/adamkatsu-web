import { useState } from 'react'
import Form from './components/Form'
import Price from './components/Price'

export default function App() {

  const handleSubmit = (event) => {
    event.preventDefault();
    // Handle form submission logic here
    console.log('Form Data:', formData);
  };

  return (
    <section className='section price-calculator'>
      <div className="container">
        <form onSubmit={handleSubmit} className='price-calculator-cont '>
          <Form />
          <Price />
        </form>
      </div>
    </section>
  )
}
