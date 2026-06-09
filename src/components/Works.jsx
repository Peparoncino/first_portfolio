import { FaPlus, FaGithub, FaHtml5, FaCss3Alt, FaReact, FaArrowRight } from "react-icons/fa";
import { SiVite } from "react-icons/si";

function Works(){
  return(
    <section className="works" id="works">
      <h2>Works</h2>
      <div className="works-grid">
        <div className="work-card">
          <p className="work-card-title">ポートフォリオサイト</p>
          <p className="work-card-desc">このサイトが1本目の作品です。React / Vite で制作。</p>
          <div className="work-card-techs">
            <span className="tech-badge front-lang"><FaHtml5 />HTML5</span>
            <span className="tech-badge front-lang"><FaCss3Alt />CSS3</span>
            <span className="tech-badge front-lang"><FaReact />React</span>
            <span className="tech-badge front-lang"><SiVite />Vite</span>
          </div>
          <div className="work-card-bottom">
            <div className="work-card-links">
              <a className="work-card-link" href="https://first-portfolio-fawn-two.vercel.app/" target="_blank" rel="noreferrer"><FaGithub size={20} /></a>
              <a className="work-card-link" href="https://first-portfolio-fawn-two.vercel.app/" target="_blank" rel="noreferrer"><FaArrowRight size={20} /></a>
            </div>
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