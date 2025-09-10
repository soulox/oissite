// User Types
export interface User {
  id: string
  email: string
  name: string
  role: UserRole
  avatar?: string
  createdAt: Date
  updatedAt: Date
}

export type UserRole = 'admin' | 'user' | 'guest'

// Hosting Types
export interface HostingPlan {
  id: string
  name: string
  type: HostingType
  price: number
  currency: string
  billingCycle: BillingCycle
  features: HostingFeature[]
  specifications: HostingSpecifications
  isPopular?: boolean
}

export type HostingType = 'shared' | 'vps' | 'cloud' | 'dedicated'
export type BillingCycle = 'monthly' | 'yearly'

export interface HostingFeature {
  name: string
  description: string
  included: boolean
}

export interface HostingSpecifications {
  storage: string
  bandwidth: string
  websites: number
  databases: number
  emailAccounts: number
  cpu?: string
  ram?: string
  cores?: number
}

// Domain Types
export interface Domain {
  id: string
  name: string
  tld: string
  status: DomainStatus
  registeredAt: Date
  expiresAt: Date
  autoRenew: boolean
  price: number
  currency: string
}

export type DomainStatus = 'active' | 'expired' | 'pending' | 'suspended'

// API Response Types
export interface ApiResponse<T> {
  data: T
  status: number
  message: string
  success: boolean
}

export interface PaginatedResponse<T> {
  data: T[]
  pagination: {
    page: number
    limit: number
    total: number
    totalPages: number
  }
}

// Form Types
export interface LoginForm {
  email: string
  password: string
  rememberMe?: boolean
}

export interface RegisterForm {
  name: string
  email: string
  password: string
  confirmPassword: string
  acceptTerms: boolean
}

export interface ContactForm {
  name: string
  email: string
  subject: string
  message: string
}

// Navigation Types
export interface NavigationItem {
  label: string
  href: string
  children?: NavigationItem[]
  external?: boolean
}

// Component Props Types
export interface BaseComponentProps {
  className?: string
  children?: React.ReactNode
}

// Error Types
export interface AppError {
  code: string
  message: string
  details?: Record<string, any>
}

// Status Types
export type LoadingStatus = 'idle' | 'loading' | 'success' | 'error'
export type FormStatus = 'idle' | 'submitting' | 'success' | 'error'
