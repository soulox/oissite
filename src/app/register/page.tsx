import { RegisterHero } from '@/components/features/auth/RegisterHero'
import { RegisterForm } from '@/components/features/auth/RegisterForm'
import { RegisterFeatures } from '@/components/features/auth/RegisterFeatures'

export default function RegisterPage() {
  return (
    <div className="min-h-screen bg-background">
      <RegisterHero />
      <div className="container mx-auto px-4 py-16">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <RegisterForm />
          <RegisterFeatures />
        </div>
      </div>
    </div>
  )
}
