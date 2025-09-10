import { LoginHero } from '@/components/features/auth/LoginHero'
import { LoginForm } from '@/components/features/auth/LoginForm'
import { LoginFeatures } from '@/components/features/auth/LoginFeatures'

export default function LoginPage() {
  return (
    <div className="min-h-screen bg-background">
      <LoginHero />
      <div className="container mx-auto px-4 py-16">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <LoginForm />
          <LoginFeatures />
        </div>
      </div>
    </div>
  )
}
