import { useState } from 'react'
import Form from './components/Form'
import Price from './components/Price'

export default function App() {
  const [data, setData] = useState(
    {
      webFeat: {
        cms: false,
        eCom: false,
        anim: false,
      },
      webPlatform: 'webflow',
      webPages: 1,
      webSpeed: 'no',
    }
  )

  const calcDuration = () => {
    let duration = 1;
    duration = duration + data.webPages / 2;
    duration = duration + data.webPages / 3;
    duration = duration + data.webPages / 3;
    duration = duration + data.webPages / 2;
    duration = (data.webFeat.cms ? duration + 2 : duration);
    duration = (data.webFeat.eCom ? duration + 4 : duration);
    duration = (data.webFeat.anim ? duration * 1.55 : duration);

    switch(data.webPlatform) {
      case 'react':
        duration = duration * 1.25;
        break;
      case 'shopify':
        duration = duration * 1.15;
        break;
    }
    switch(data.webSpeed) {
      case 'yes':
        duration = duration * 0.85;
        break;
      case 'no':
        duration = duration * 1;
        break;
    }

    return (
      Math.ceil(duration)
      
    )
  }
  let duration = calcDuration()


  const calcTotal = () => {
    let total = 150;
    total = total + (data.webPages - 1) * 110;
    total = (data.webFeat.cms ? total + 100 : total);
    total = (data.webFeat.eCom ? total + 300 : total);
    total = (data.webFeat.anim ? total + 100 : total);


    switch(data.webPlatform) {
      case 'react':
        total = total * 1.25;
        break;
      case 'shopify':
        total = total * 1.10;
        break;
    }
    switch(data.webSpeed) {
      case 'yes':
        total = total * 1.25;
        break;
      case 'no':
        total = total * 1;
        break;
    }

    return (
      Math.ceil(total)
    )
  }
  let totalPrice = calcTotal()

  console.log(data)

  const handleSubmit = (event) => {
    event.preventDefault();
    // Handle form submission logic here
    console.log('Form Data:', data);
  };

  const updateFormData = (updatedData) => {
    setData((prevState) => ({
      ...prevState,
      ...updatedData,
    }));
  };

  return (
    <section className='section price-calculator'>
      <div className="container">
        <form onSubmit={handleSubmit} className='price-calculator-cont'>
          <Form data={data} updateFormData={updateFormData}/>
          <Price data={data} duration={duration} totalPrice={totalPrice}/>
        </form>
      </div>
    </section>
  )
}
