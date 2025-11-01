import { useState } from 'react'
import './Contact.css'

export default function ContactSection() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  })

  const [status, setStatus] = useState(null)

  const handleChange = (e) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value
    }))
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    setStatus('sending')

    try {
        // const response = await fetch('http://localhost:8080/api/contact', {
        const response = await fetch('http://192.168.0.8:8080/api/contact', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(formData)
        })

      if (response.ok) {
        setStatus('success')
        setFormData({ name: '', email: '', message: '' })
      } else {
        setStatus('error')
      }
    } catch (err) {
      setStatus('error')
    }
  }

  return (
    <section id="contact">
      <h2 className="section-title">Let's Build Together</h2>
      <div className="contact">
        <p>Whether you're a brand, creator, or dev team — let's talk about what we can create in Roblox.</p>
        <form onSubmit={handleSubmit}>
          <input name="name" type="text" placeholder="Your Name" value={formData.name} onChange={handleChange} required />
          <input name="email" type="email" placeholder="Your Email" value={formData.email} onChange={handleChange} required />
          <textarea name="message" rows="5" placeholder="Your Message" value={formData.message} onChange={handleChange} required />
          <button type="submit">Send Message</button>
        </form>

        {status === 'sending' && <p>Sending...</p>}
        {status === 'success' && <p>✅ Message sent! Check your email.</p>}
        {status === 'error' && <p>❌ Error sending. Please try again later.</p>}
      </div>
    </section>
  )
}
