import { useEffect, useState } from 'react'

export default function OnboardingForm() {
  const [formData, setFormData] = useState({
    email: '',
    password: '',
  })

  useEffect(() => {
    console.log('[OnboardingForm] Component mounted')
    console.log('[OnboardingForm] Initial form data:', formData)
    return () => {
      console.log('[OnboardingForm] Component unmounted')
    }
  }, [])

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    console.log('[OnboardingForm] Form submitted with data:', formData)
  }

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target
    console.log(`[OnboardingForm] Field ${name} changed to:`, value)
    setFormData(prev => ({ ...prev, [name]: value }))
  }

  console.log('[OnboardingForm] Rendering component')

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <div>
        <label htmlFor="email" className="block text-sm font-medium mb-1">
          Email
        </label>
        <input
          type="email"
          id="email"
          name="email"
          value={formData.email}
          onChange={handleChange}
          className="w-full p-2 border rounded"
          required
        />
      </div>
      <div>
        <label htmlFor="password" className="block text-sm font-medium mb-1">
          Mot de passe
        </label>
        <input
          type="password"
          id="password"
          name="password"
          value={formData.password}
          onChange={handleChange}
          className="w-full p-2 border rounded"
          required
        />
      </div>
      <button
        type="submit"
        className="w-full bg-primary text-primary-foreground py-2 rounded hover:opacity-90"
      >
        S'inscrire
      </button>
    </form>
  )
}
