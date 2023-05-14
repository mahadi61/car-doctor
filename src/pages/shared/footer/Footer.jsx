import { Link } from "react-router-dom";
import logo from "../../../assets/logo.svg";

const Footer = () => {
  return (
    <footer className="footer p-10 bg-[#151515] text-white">
      <div className="w-1/2">
        <img src={logo} alt="" />
        <p>
          Edwin Diaz is a software and web technologies engineer, a life coach
          trainer who is also a serial .
        </p>
        <div>
          <Link className="me-2">Google</Link>
          <Link className="me-2">Twitter</Link>
          <Link className="me-2">Instagram</Link>
          <Link className="">Linkedin</Link>
        </div>
      </div>
      <div>
        <span className="footer-title">About</span>
        <a className="link link-hover">Home</a>
        <a className="link link-hover">Service</a>
        <a className="link link-hover">Contact</a>
      </div>
      <div>
        <span className="footer-title">Company</span>
        <a className="link link-hover">Why Car Doctor?</a>
        <a className="link link-hover">About us</a>
      </div>
      <div>
        <span className="footer-title">Support</span>
        <a className="link link-hover">Support Center</a>
        <a className="link link-hover">Feedback</a>
        <a className="link link-hover">Accesbility</a>
      </div>
    </footer>
  );
};

export default Footer;
