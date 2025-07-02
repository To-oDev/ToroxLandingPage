import { useState } from 'react'
import './Projects.css'

function ProjectCard({ title, shortDescription, fullDescription, media }) {
  const [expanded, setExpanded] = useState(false)

  return (
    <div
      className={`project-card ${expanded ? 'expanded' : ''}`}
      onClick={() => setExpanded(!expanded)}
    >
      <h3>{title}</h3>

      {expanded ? (
        <>
          {media && (
            <div className="media">
              {/* Cambia según sea imagen o video */}
              {media.type === 'image' ? (
                <img src={media.src} alt={title} />
              ) : (
                <video src={media.src} controls />
              )}
            </div>
          )}
          <p className="full-description">{fullDescription}</p>
        </>
      ) : (
        <p className="short-description">{shortDescription}</p>
      )}
    </div>
  )
}

export default function ProjectsSection() {
  return (
    <section id="projects">
      <h2 className="section-title">Featured Projects</h2>
      <div className="projects">
        <ProjectCard
          title="🏙️ ToroxCity"
          shortDescription="A prototype city built by Torox Industries, where players live, play, and interact with emerging systems deployed across the urban grid."
          fullDescription="Torox City is a large-scale prototype metropolis created by Torox Industries to test and refine new technologies in a living, player-driven environment.
Every system in the city — from transit to economy — is designed and deployed by Torox, and it’s through player interaction that each technology proves its worth.
Here, play becomes experimentation, and the city itself evolves with every decision its citizens make."
          media={{ type: 'image', src: '/media/torox-city.png' }}
        />
        <ProjectCard
          title="🏁 Drifting Driver"
          shortDescription="Drifting races with semi realistic physics."
          fullDescription="Drifting Driver is a racing game with semi-simulated physics where mastering the drift is everything. Slide through tight corners, control weight transfer, and conquer urban, mountain, and futuristic tracks with pinpoint precision."
          media={{ type: 'video', src: '/media/drifting-proto.mp4' }}
        />
        <ProjectCard
          title="AdverWorlds"
          shortDescription="Branded games we developed for major clients while at Disandat — made to engage, not interrupt."
          fullDescription="While at Disandat, we created branded games for companies looking to connect with the Roblox audience through play — not just promotion.
Each experience was designed to stand on its own as a game first, with brand integration woven naturally into the mechanics, environments, and rewards.
These projects proved that marketing in the metaverse works best when it puts fun before funnel"
          media={{ type: 'image', src: '/media/torox-brandworks.png' }}
        />
      </div>
    </section>
  )
}
