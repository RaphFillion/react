
const Hours = (props) => {
  let content = props.hours.map((hour, i) => {
    return <li key={i}>Du {hour.du} au {hour.au} - De {hour.heures[0].de} à {hour.heures[0].a}</li>
  })
  return(
    <>
      <ul>
        {content}
      </ul>
    </>
  )
}

export default Hours