import { useState } from 'react'
import './Team.css'

function TeamCard({ name, role, bio, avatar }) {
  const [expanded, setExpanded] = useState(false)

  return (
    <div
      className={`team-card ${expanded ? 'expanded' : ''}`}
      onClick={() => setExpanded(!expanded)}
    >
      <div className="avatar">
        <img src={avatar} alt={name} />
      </div>
      <h3>{name}</h3>
      <p className={`bio ${expanded ? 'visible' : ''}`}>{bio}</p>
    </div>
  )
}

export default function TeamSection() {
  return (
    <section id="team">
      <h2 className="section-title">The Team</h2>
      <div className="team">
        <TeamCard
          name="To.o"
          role="Game Developer & System Architect - Founder"
          bio="Antonio leads development with a focus on systemic design, physics-based gameplay, and Roblox-native architecture. Previously built branded games and parkour systems at Disandat."
          avatar="/media/team/to-o.png"
        />
        <TeamCard
          name="Fabi"
          role="Game Designer & Builder"
          bio="Specialist in designing levels, mechanics, and game structures that ensure fun and smooth gameplay. Combines creativity and technical skill to build coherent worlds and memorable player experiences."
          avatar="/media/team/fabi.png"
        />
        <TeamCard
          name="Septima Luna"
          role="3D Artist & Level Designer"
          bio="Alberto designs vibrant enviroments, props, and marketing visuals tailored for Roblox’s youth audience while maintaining a professional layer."
          avatar="/media/team/albert.png"
        />
        <TeamCard
          name="MrD"
          role="3D Artist & UGC Wearables Designer"
          bio="Designs 3D assets and wearable items optimized for Roblox. Focused on avatar accessories, modular props, and UGC-ready visuals that balance performance and personality."
          avatar="/media/team/mrD.png"
        />
        <TeamCard
          name="Gustavo"
          role="Music Producer & Sound Designer"
          bio="Expert in crafting immersive soundscapes and original compositions that elevate gameplay experiences. Skilled in music production, sound effect design, and mixing for dynamic and engaging environments."
          avatar="/media/team/gustavo.png"
        />
        <TeamCard
          name="OKZER"
          role="Graphic Designer & UI Designer"
          bio="Expert in crafting visually stunning graphics and UI elements that enhance user experience and engagement. Skilled in design and implementation of intuitive and engaging interfaces for Roblox games."
          avatar="/media/team/okzer.png"
        />
      </div>
    </section>
  )
}
