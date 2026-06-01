import { FaPlus, FaGithub, FaHtml5, FaCss3Alt, FaReact, FaArrowRight } from "react-icons/fa";
import { SiVite } from "react-icons/si";

function Works(){
  return(
    <section className="works">
      <h2>Works</h2>
      <div className="works-grid">
        <div className="work-card">
          <div className="work-card-header">
            <div className="work-card-links">
              <a className="work-card-link" href="#" target="_blank" rel="noreferrer"><FaGithub size={20} /></a>
              <a className="work-card-link" href="#" target="_blank" rel="noreferrer"><FaArrowRight size={20} /></a>
            </div>
          </div>
          <p className="work-card-title">ポートフォリオサイト</p>
          <p className="work-card-desc">このサイトが1本目の作品です。React / Vite で制作。</p>
          <div className="work-card-techs">
            <span className="tech-badge"><FaHtml5 /></span>
            <span className="tech-badge"><FaCss3Alt /></span>
            <span className="tech-badge"><FaReact /></span>
            <span className="tech-badge"><SiVite /></span>
          </div>
        </div>
        <div className="work-card coming-soon">
          <div className="work-card-icon"><FaPlus /></div>
          <p className="work-card-title">Coming Soon</p>
          <p className="work-card-desc">次の作品を製作中です。</p>
        </div>
      </div>
    </section>
  )
}

export default Works