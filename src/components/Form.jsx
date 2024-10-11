import { useState } from "react";

export default function Form({ data, updateFormData }) {

  // const [formData, setFormData] = useState(data);
  // console.log(formData)

  const handleCheckboxChange = (event) => {
    const { name, checked } = event.target;
    updateFormData({
      webFeat: {
        ...data.webFeat,
        [name]: checked,
      },
    });
  };

  const handlePlatformChange =(event) => {
    updateFormData({
      webPlatform: event.target.value,
    });
  }
  const handleSpeedChange =(event) => {
    updateFormData({
      webSpeed: event.target.value,
    });
  }

  const [sliderValue, setSliderValue] = useState(1); 

  const handleSliderChange = (event) => {
    setSliderValue(event.target.value);
    updateFormData({
      webPages: event.target.value
    })
  };
  
  


  return (
    <div className="pricing pricing-form">
      {/* Platform Section */}
      <fieldset className="pricing-card">
        <h2 className="h2">Which platform / framework are you looking to work in?</h2>
        <div className="pricing-options-wrapper">
          <label>
            <input
              type="radio"
              name="webPlatform"
              value="webflow"
              checked={data.webPlatform === 'webflow'}
              onChange={handlePlatformChange}
            />
            Webflow
          </label>
          
          <label>
            <input
              type="radio"
              name="webPlatform"
              value="wordpress"
              checked={data.webPlatform === 'wordpress'}
              onChange={handlePlatformChange}
            />
            Wordpress
          </label>
          
          <label>
            <input
              type="radio"
              name="webPlatform"
              value="shopify"
              checked={data.webPlatform === 'shopify'}
              onChange={handlePlatformChange}
            />
            Shopify
          </label>

          <label>
            <input
              type="radio"
              name="webPlatform"
              value="react"
              checked={data.webPlatform === 'react'}
              onChange={handlePlatformChange}
            />
            ReactJs
          </label>

          <label>
            <input
              type="radio"
              name="webPlatform"
              value="squarespace"
              checked={data.webPlatform === 'squarespace'}
              onChange={handlePlatformChange}
            />
            Squarespace
          </label>
        </div>
      </fieldset>

      {/* Pages Section */}
      <fieldset className="pricing-card">
        <h2 className="h2">Number of pages / design</h2>
        <div className="pricing-options-wrapper">
          <div className="pricing-range-wrapper">
            <input
              type="range"
              id="range-slider"
              min="1"
              max="25"
              value={sliderValue}
              onChange={handleSliderChange}
            />
            <p className="h3">{sliderValue} Pages</p>
          </div>
        </div>
      </fieldset>

      {/* Features Section */}
      <fieldset className="pricing-card">
        <h2 className="h2">What features you would like to have on your website?</h2>
        <div className="pricing-options-wrapper">
        <label>
          <input
            type="checkbox"
            name="cms"
            checked={data.webFeat.cms}
            onChange={handleCheckboxChange}
          />
          CMS
        </label>
        
        <label>
          <input
            type="checkbox"
            name="eCom"
            checked={data.webFeat.eCom}
            onChange={handleCheckboxChange}
          />
          E-Commerce
        </label>
        
        <label>
          <input
            type="checkbox"
            name="anim"
            checked={data.webFeat.anim}
            onChange={handleCheckboxChange}
          />
          Advanced Animation
        </label>
        </div>
      </fieldset>

      {/* Radio Section */}
      <fieldset className="pricing-card">
        <h2 className="h2">Would you like to speed up the process?</h2>
        <div className="pricing-options-wrapper">
          <label>
            <input
              type="radio"
              name="webSpeed"
              value="yes"
              checked={data.webSpeed.yes}
              onChange={handleSpeedChange}
            />
            Yes
          </label>
          
          <label>
            <input
              type="radio"
              name="webSpeed"
              value="no"
              checked={data.webSpeed.no}
              onChange={handleSpeedChange}
            />
            No
          </label>
          
        </div>
      </fieldset>

    
    </div>
    
  )

}