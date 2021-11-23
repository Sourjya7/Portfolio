import { FiPhoneCall } from "react-icons/fi";
import { MdOutlineEmail } from "react-icons/md";
import { IoLocationOutline } from "react-icons/io5";
import "./contactdetails.scss";
const ContactDetails = () => {
  return (
    <div className="details">
      <div className="ctr">
        <h3>My Contact Details</h3>
      </div>
      <div className="ct ">
        <p className="icon">
          <FiPhoneCall />
        </p>
        <p className="content">+919973498507</p>
      </div>

      <div className="ct ">
        <p className="icon">
          <MdOutlineEmail />
        </p>
        <p className="content">sourjya7@gmail.com</p>
      </div>

      <div className="ct ">
        <p className="icon">
          <IoLocationOutline />
        </p>
        <p className="content">Amdangra, Sabrakone, Bankura, 722149</p>
      </div>
    </div>
  );
};

export default ContactDetails;
