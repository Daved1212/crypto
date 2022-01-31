const ExchangeRate = ({rate, chosenPrimaryCurrency, chosenSecondaryCurrency}) => {
  return (
      <div className="exchange-rate">
        <h3>Exchange Rate</h3>
        <h1>{rate}</h1>
        <p> {chosenPrimaryCurrency} to {chosenSecondaryCurrency} </p>
      </div>
  )
}

export default ExchangeRate