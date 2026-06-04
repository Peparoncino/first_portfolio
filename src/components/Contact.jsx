import { FaGithub } from "react-icons/fa";
import { CiMail } from "react-icons/ci";

function Contact(){
  return(
    <section className="contact" id="contact">
      <h2>Contact</h2>
      <div className="contact-links">
        <a className="contact-link" href="#" target="_blank" rel="noreferrer">
          <FaGithub size={20} />
          {/* GitHub */}
        </a>
        <a className="contact-link" href="#">
          <CiMail size={20} />
          {/* お問い合わせ */}
        </a>
      </div>
    </section>
  )
}
export default Contact