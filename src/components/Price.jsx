
export default function Price({data ,duration, totalPrice}) {

  return (
    <div className="pricing pricing-total">
      <div className="pricing-card">
        <div className="price-total">
          <span className="uppercase">Total</span>
          <span className="txt-price-total">${totalPrice}</span>
        </div>
        <ul className="price-details">
          <li className="price-details-item">
            <span>Platform:</span>
            <span className="capitalize">{data.webPlatform}</span>
          </li>
          <li className="price-details-item">
            <span>Number of Pages:</span>
            <span>{data.webPages} Pages</span>
          </li>
          <li className="price-details-item">
            <span>Duration:</span>
            <span>{duration} days</span>
          </li>
        </ul>

        <button className="btn-primary" type="submit">Submit Proposal</button>
      </div>
    </div>
  )
  
}