import profileImg from '../assets/profile.png'

function Hero(){
  return(
    <section className="hero">
      <div className="hero-inner">
        <img src={profileImg} alt="プロフィール画像" className="hero-avatar" />
        <div className="hero-text">
          <p className="subject">フォークリフトオペレーター</p>
          <h2>エンジニア初学者</h2>
          <p className="description">エンジニアを目指して学習中</p>
        </div>
      </div>
    </section>
  )
}
export default Hero