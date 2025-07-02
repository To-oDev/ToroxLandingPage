import './Hero.css'

export default function() {
    function handleOnClick() {
        const target = document.querySelector('#projects')
        target?.scrollIntoView({ behavior: 'smooth' })
    }

    return(
        <section className="hero" id="hero">
            <img src="torox-logo-no-tratado.png" alt="Torox Logo" className="logo-img" />
            <h1>TOROX</h1>
            <h2>BUILDING VIRTUAL BEASTS</h2>
            <p>We create immersive and engaging experiences on Roblox.</p>
            <button onClick={handleOnClick} href="#projects">Explore Our Work</button>
        </section>
    )
}