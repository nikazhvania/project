import "../../styles/about.css";
export default function About() {
  return (
    <div className="main">
      <div className="title">
        <img src={`${process.env.PUBLIC_URL}/assets/images/logo.svg`} />
        <p>A publishing company that focuses on the essentials</p>
      </div>
      <div className="about-section">
        <img src={`${process.env.PUBLIC_URL}/assets/images/about.svg`} />
      </div>
      <div className="title">
        <h1>Because we are you. Humans.</h1>
        <p>
          Laboris consectetur sunt nulla eiusmod voluptate eiusmod dolor nisi
          qui dolor cillum fugiat ad.
        </p>
      </div>
      <div className="contact-section">
        <img src={`${process.end.PUBLIC_URL}/assets.images/contact.svg`} />
      </div>
    </div>
  );
}
