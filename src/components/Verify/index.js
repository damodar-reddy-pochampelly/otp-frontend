/* eslint-disable jsx-a11y/no-static-element-interactions */
import {useState, useContext} from 'react'

import {MobileNumberContext} from '../../Context/MobileNumberContext'
import './index.css'

const Verify = props => {
  const [digit1, setDigit1] = useState('')
  const [digit2, setDigit2] = useState('')
  const [digit3, setDigit3] = useState('')
  const [digit4, setDigit4] = useState('')
  const {mobileNumber} = useContext(MobileNumberContext)
  const [error, setError] = useState('')

  const onClickChangeNumber = () => {
    const {history} = props
    history.replace('/')
  }

  const onChangeDigit1 = event => {
    setDigit1(event.target.value)
  }

  const onChangeDigit2 = event => {
    setDigit2(event.target.value)
  }

  const onChangeDigit3 = event => {
    setDigit3(event.target.value)
  }

  const onChangeDigit4 = event => {
    setDigit4(event.target.value)
  }

  const onSubmitVerifyFrom = async event => {
    event.preventDefault()
    const otp = digit1 + digit2 + digit3 + digit4
    const options = {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({mobileNumber, otp}),
    }
    console.log(options.body)
    const response = await fetch(
      'https://otp-generator-cadz.onrender.com/verify-otp/',
      options,
    )
    console.log(otp, response)
    if (response.ok === true) {
      setDigit1('')
      setDigit2('')
      setDigit3('')
      setDigit4('')
      setError('')
      const {history} = props
      history.replace('/success-screen')
    } else {
      const data = await response.json()
      setError(data.error)
    }
  }

  const OnClickResendOtp = async () => {
    const options = {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({mobileNumber}),
    }
    await fetch('https://otp-generator-cadz.onrender.com/generate-otp', options)
  }

  return (
    <div className="verify-bg-container">
      <div className="verify-card">
        <div className="verify-image-container">
          <img
            src="https://i.ibb.co/C5Wx8Qq/undraw-confirmed-81ex.png"
            alt="verify"
            className="verify-logo"
          />
        </div>
        <form className="form-container" onSubmit={onSubmitVerifyFrom}>
          <h1 className="verify-number-text">Please verify Mobile number</h1>
          <p className="otp-sent-text">
            An OTP is sent to <span className="number">+918919219019</span>
          </p>
          <p className="change-number" onClick={onClickChangeNumber}>
            Change Phone Number
          </p>
          <div className="otp-container">
            <input
              type="text"
              maxLength="1"
              className="otp-box"
              id="box1"
              value={digit1}
              onChange={onChangeDigit1}
            />
            <input
              type="text"
              maxLength="1"
              className="otp-box"
              id="box2"
              value={digit2}
              onChange={onChangeDigit2}
            />
            <input
              type="text"
              maxLength="1"
              className="otp-box"
              id="box3"
              value={digit3}
              onChange={onChangeDigit3}
            />
            <input
              type="text"
              maxLength="1"
              className="otp-box"
              id="box4"
              value={digit4}
              onChange={onChangeDigit4}
            />
          </div>
          <p className="wrong-otp-error">{error}</p>
          <p className="code-not-received-text">
            Didn&apos;t receive the code?{' '}
            <span className="resend" onClick={OnClickResendOtp}>
              {' '}
              Resend
            </span>
          </p>
          <button type="submit" className="verify-button">
            Verify
          </button>
        </form>
      </div>
    </div>
  )
}

export default Verify
