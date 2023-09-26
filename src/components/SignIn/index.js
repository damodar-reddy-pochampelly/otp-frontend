import {v4 as uuidv4} from 'uuid'
import {useState, useContext} from 'react'

import country from '../../Data/country.json'
import {MobileNumberContext} from '../../Context/MobileNumberContext'
import './index.css'

const SignIn = props => {
  const [countryCode, setCountryCode] = useState(country[0].dialCode)
  const [number, setNumber] = useState('')
  const [error, setError] = useState('')
  const {setMobileNumber} = useContext(MobileNumberContext)

  const flagUrl = country.filter(
    eachCountry => eachCountry.dialCode === countryCode,
  )[0].flag

  const onChangeCountry = event => {
    setCountryCode(event.target.value)
  }

  const onChangeNumber = event => {
    setNumber(event.target.value)
  }

  const onFormSubmit = async event => {
    event.preventDefault()
    const mobileNumber = countryCode + number
    const options = {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({mobileNumber}),
    }

    const response = await fetch(
      'https://otp-generator-cadz.onrender.com/generate-otp',
      options,
    )
    if (response.ok === true) {
      setCountryCode(country[0].dialCode)
      setNumber('')
      setError('')
      setMobileNumber(mobileNumber)
      const {history} = props
      history.replace('/verify')
    } else {
      const data = await response.json()
      setError(data.error)
    }
  }

  return (
    <div className="sign-in-bg-container">
      <div className="card">
        <div className="image-container">
          <img
            src="https://i.ibb.co/6vTZgPp/AK-logo.png"
            alt="akLogo"
            className="company-logo"
          />
        </div>
        <form className="form-container" onSubmit={onFormSubmit}>
          <h1 className="welcome-back-text">Welcome Back</h1>
          <p className="please-sign-in-text">Please sign in to your account</p>
          <div className="input-field-bg-container">
            <span className="phone_no_label">Enter contact Number</span>
            <div className="input-container">
              <img src={flagUrl} alt="countryFlag" className="flag" />
              <select
                value={countryCode}
                onChange={onChangeCountry}
                className="dropdown"
              >
                {country.map(eachCountry => {
                  const optionText = `${eachCountry.dialCode}`.concat(
                    ' ',
                    `${eachCountry.name}`,
                  )
                  return (
                    <option
                      value={eachCountry.dialCode}
                      key={uuidv4()}
                      className="option"
                    >
                      {optionText}
                    </option>
                  )
                })}
              </select>
              <input
                type="text"
                placeholder="Phone number"
                className="input"
                value={number}
                onChange={onChangeNumber}
              />
            </div>
          </div>
          <p className="error-msg">{error}</p>
          <p className="charges-note">
            We will send you a one time SMS message.
            <br />
            Charges may Apply.
          </p>
          <button type="submit" className="sign-in-button">
            Sign In with OTP
          </button>
        </form>
      </div>
    </div>
  )
}

export default SignIn
