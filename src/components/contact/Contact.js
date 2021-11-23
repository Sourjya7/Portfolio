import ContactDetails from "./ContactDetails";
import SocialMediaHandles from "./SocialMediaHandles";
import "./contact.scss";

function Contact() {
  return (
    <div className="main">
      <div className="contact">
        <div className="headings">
          <h1>Contact</h1>
          <h3>Get In Touch With Me.</h3>
        </div>
        <div className="handles">
          <div className="left">
            <ContactDetails />
          </div>
          <div className="right">
            <SocialMediaHandles />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Contact;
