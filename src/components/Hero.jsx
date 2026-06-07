import profileImg from '../assets/profile.png'

function Hero(){
  return(
    <section className="hero" id='about'>
      <div className="hero-inner">
        <img src={profileImg} alt="プロフィール画像" className="hero-avatar" />
        <div className="hero-text">
          <p className="subject">準備中...</p>
          <h2>エンジニア初学者</h2>
          <p className="description">JavaScript / TypeScript を学習中...</p>
        </div>
      </div>
    </section>
  )
}
export default Hero