import { useState } from "react";

export default function Form() {

  const [formData, setFormData] = useState({
    webFeat: {
      cms: false,
      eCom: false,
      anim: false,
    },
    webPlatform: '',
    webPages: 0,
    webSpeed: false,
  });

  const handleCheckboxChange = (event) => {
    const { name, checked } = event.target;
    setFormData((prevState) => ({
      ...prevState,
      webFeat: {
        ...prevState.webFeat,
        [name]: checked,
      },
    }));
  };

  const handleRadioChange = (event) => {
    setFormData((prevState) => ({
      ...prevState,
      webPlatform: event.target.value,
    }));
  };
  const handlePlatformChange =() => {}
  const handlePagesChange =() => {}
  const handleSpeedChange =() => {}

  


  return (
    <div className="pricing pricing-form">
      {/* Radio Section */}
      <fieldset className="pricing-card">
        <h2 className="h2">Which platform / framework are you looking to work in?</h2>
        <div className="pricing-options-wrapper">
          <label>
            <input
              type="radio"
              name="webPlatform"
              value="webflow"
              checked={formData.webPlatform === 'webflow'}
              onChange={handlePlatformChange}
            />
            Webflow
          </label>
          
          <label>
            <input
              type="radio"
              name="webPlatform"
              value="wordpress"
              checked={formData.webPlatform === 'wordpress'}
              onChange={handlePlatformChange}
            />
            Wordpress
          </label>
          
          <label>
            <input
              type="radio"
              name="webPlatform"
              value="shopify"
              checked={formData.webPlatform === 'shopify'}
              onChange={handlePlatformChange}
            />
            Shopify
          </label>
        </div>
      </fieldset>

      {/* Radio Section */}
      <fieldset className="pricing-card">
        <h2 className="h2">Number of pages / design</h2>
        <div className="pricing-options-wrapper">
          <label>
            <input
              type="radio"
              name="webPages"
              value="1"
              checked={formData.webPages === '1'}
              onChange={handlePagesChange}
            />
            1
          </label>
          
          <label>
            <input
              type="radio"
              name="webPages"
              value="2-5"
              checked={formData.webPages === '2-5'}
              onChange={handlePagesChange}
            />
            2-5
          </label>
          
          <label>
            <input
              type="radio"
              name="webPages"
              value="5-10"
              checked={formData.webPages === '5-10'}
              onChange={handlePagesChange}
            />
            5-10
          </label>
        </div>
      </fieldset>

      {/* Checkbox Section */}
      <fieldset className="pricing-card">
        <h2 className="h2">What features you would like to have on your website?</h2>
        <div className="pricing-options-wrapper">
        <label>
          <input
            type="checkbox"
            name="cms"
            checked={formData.webFeat.cms}
            onChange={handleCheckboxChange}
          />
          CMS
        </label>
        
        <label>
          <input
            type="checkbox"
            name="option2"
            checked={formData.webFeat.eCom}
            onChange={handleCheckboxChange}
          />
          E-Commerce
        </label>
        
        <label>
          <input
            type="checkbox"
            name="anim"
            checked={formData.webFeat.anim}
            onChange={handleCheckboxChange}
          />
          Custom Animation
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
              value={true}
              checked={formData.webSpeed}
              onChange={handleSpeedChange}
            />
            Yes
          </label>
          
          <label>
            <input
              type="radio"
              name="webSpeed"
              value={false}
              checked={!formData.webSpeed}
              onChange={handleSpeedChange}
            />
            No
          </label>
          
        </div>
      </fieldset>

    
    </div>
    
  )

}