import './index.css'

const Welcome = () => (
  <div className="welcome-bg-container">
    <div className="bg-card">
      <div className="image-container">
        <img
          src="https://i.ibb.co/W52Ffq2/Artboard-1.png"
          alt="artBoard"
          className="art-board"
        />
      </div>
      <div className="body-container">
        <h1 className="welcome-text">Welcome to AdmitKard</h1>
        <p className="in-order-to-text ">
          In order to provide you with
          <br /> a custom experience,
          <br />
          <span className="highlight-text">
            we need to ask you a few questions
          </span>
        </p>
        <button type="button" className="get-started-button">
          Get Started
        </button>
        <p className="time-note">*This only take 5 min.</p>
      </div>
    </div>
  </div>
)

export default Welcome
