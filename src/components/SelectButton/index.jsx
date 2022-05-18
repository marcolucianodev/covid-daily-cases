import React, { useContext } from 'react'
import CovidContext from '../../contexts/CovidContext';
import { Container } from './styles'

function SelectButton() {

  const { isCumulative, setIsCumulative } = useContext(CovidContext)

  const handleCumulative = () => {
    if (isCumulative === true) {
      setIsCumulative(false) 
    } else {
      setIsCumulative(true) 
    }
  }

  return (
    <Container>
      <label className="select-button-label" htmlFor="cumulative">Show:</label>
      <select name="cumulative" id="cumulative" onChange= {handleCumulative}>
        <option value='cumulative'>Total cases to date</option>
        <option value='count'>Daily</option>
      </select>
    </Container>
  )
}

export default SelectButton;