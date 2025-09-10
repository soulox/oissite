import { z } from 'zod'

// User Validation Schemas
export const loginSchema = z.object({
  email: z.string().email('Invalid email address'),
  password: z.string().min(8, 'Password must be at least 8 characters'),
  rememberMe: z.boolean().optional(),
})

export const registerSchema = z.object({
  name: z.string().min(2, 'Name must be at least 2 characters'),
  email: z.string().email('Invalid email address'),
  password: z.string()
    .min(8, 'Password must be at least 8 characters')
    .regex(/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)/, 'Password must contain at least one uppercase letter, one lowercase letter, and one number'),
  confirmPassword: z.string(),
  acceptTerms: z.boolean().refine(val => val === true, 'You must accept the terms and conditions'),
}).refine(data => data.password === data.confirmPassword, {
  message: "Passwords don't match",
  path: ["confirmPassword"],
})

export const contactSchema = z.object({
  name: z.string().min(2, 'Name must be at least 2 characters'),
  email: z.string().email('Invalid email address'),
  subject: z.string().min(5, 'Subject must be at least 5 characters'),
  message: z.string().min(10, 'Message must be at least 10 characters'),
})

// Domain Validation Schemas
export const domainSearchSchema = z.object({
  domain: z.string()
    .min(3, 'Domain must be at least 3 characters')
    .regex(/^[a-zA-Z0-9][a-zA-Z0-9-]*[a-zA-Z0-9]$/, 'Invalid domain format'),
  tld: z.string().optional(),
})

export const domainTransferSchema = z.object({
  domain: z.string().min(3, 'Domain must be at least 3 characters'),
  authCode: z.string().min(1, 'Authorization code is required'),
})

// Hosting Validation Schemas
export const hostingOrderSchema = z.object({
  planId: z.string().min(1, 'Plan selection is required'),
  domain: z.string().optional(),
  billingCycle: z.enum(['monthly', 'yearly']),
  addons: z.array(z.string()).optional(),
})

// Profile Validation Schemas
export const profileUpdateSchema = z.object({
  name: z.string().min(2, 'Name must be at least 2 characters'),
  email: z.string().email('Invalid email address'),
  avatar: z.string().url().optional(),
})

export const passwordChangeSchema = z.object({
  currentPassword: z.string().min(1, 'Current password is required'),
  newPassword: z.string()
    .min(8, 'Password must be at least 8 characters')
    .regex(/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)/, 'Password must contain at least one uppercase letter, one lowercase letter, and one number'),
  confirmPassword: z.string(),
}).refine(data => data.newPassword === data.confirmPassword, {
  message: "Passwords don't match",
  path: ["confirmPassword"],
})

// Support Validation Schemas
export const supportTicketSchema = z.object({
  subject: z.string().min(5, 'Subject must be at least 5 characters'),
  category: z.enum(['technical', 'billing', 'general', 'feature-request']),
  priority: z.enum(['low', 'medium', 'high', 'urgent']),
  message: z.string().min(10, 'Message must be at least 10 characters'),
  attachments: z.array(z.string()).optional(),
})

// API Validation Schemas
export const paginationSchema = z.object({
  page: z.number().min(1).default(1),
  limit: z.number().min(1).max(100).default(10),
  sort: z.string().optional(),
  order: z.enum(['asc', 'desc']).default('desc'),
})

export const searchSchema = z.object({
  query: z.string().min(1, 'Search query is required'),
  filters: z.record(z.any()).optional(),
})

// Type exports for use in components
export type LoginFormData = z.infer<typeof loginSchema>
export type RegisterFormData = z.infer<typeof registerSchema>
export type ContactFormData = z.infer<typeof contactSchema>
export type DomainSearchData = z.infer<typeof domainSearchSchema>
export type DomainTransferData = z.infer<typeof domainTransferSchema>
export type HostingOrderData = z.infer<typeof hostingOrderSchema>
export type ProfileUpdateData = z.infer<typeof profileUpdateSchema>
export type PasswordChangeData = z.infer<typeof passwordChangeSchema>
export type SupportTicketData = z.infer<typeof supportTicketSchema>
export type PaginationData = z.infer<typeof paginationSchema>
export type SearchData = z.infer<typeof searchSchema>
