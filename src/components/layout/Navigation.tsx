'use client'

import { useState, useRef, useEffect } from 'react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { Button } from '@/components/ui/button'
import { Sheet, SheetContent, SheetTrigger } from '@/components/ui/sheet'
import { Menu, X, ChevronDown, User, LogOut } from 'lucide-react'
import { cn } from '@/lib/utils'
import { useAuth } from '@/contexts/AuthContext'

const navigationItems = [
  {
    label: 'Hosting',
    href: '/hosting',
    children: [
      { label: 'Shared Hosting', href: '/hosting/shared' },
      { label: 'VPS Hosting', href: '/hosting/vps' },
      { label: 'Cloud Hosting', href: '/hosting/cloud' },
    ],
  },
  {
    label: 'Domains',
    href: '/domains',
    children: [
      { label: 'Domain Search', href: '/domains/search' },
      { label: 'Domain Transfer', href: '/domains/transfer' },
      { label: 'Domain Management', href: '/domains/manage' },
    ],
  },
  {
    label: 'Services',
    href: '/services',
    children: [
      { label: 'SSL Certificates', href: '/services/ssl' },
      { label: 'Email Hosting', href: '/services/email' },
      { label: 'Backup Services', href: '/services/backup' },
    ],
  },
  {
    label: 'Support',
    href: '/support',
    children: [
      { label: 'Help Center', href: '/support/help' },
      { label: 'Contact Us', href: '/support/contact' },
      { label: 'Status Page', href: '/support/status' },
    ],
  },
  {
    label: 'About',
    href: '/about',
  },
  {
    label: 'Client Portal',
    href: '/client-portal',
    external: true,
  },
]

export function Navigation() {
  const [isOpen, setIsOpen] = useState(false)
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null)
  const [hoverTimeout, setHoverTimeout] = useState<NodeJS.Timeout | null>(null)
  const pathname = usePathname()
  const { user, logout, isAuthenticated } = useAuth()

  const isActive = (href: string) => {
    if (href === '/') {
      return pathname === '/'
    }
    return pathname.startsWith(href)
  }

  const handleMouseEnter = (itemLabel: string) => {
    if (hoverTimeout) {
      clearTimeout(hoverTimeout)
      setHoverTimeout(null)
    }
    setActiveDropdown(itemLabel)
  }

  const handleMouseLeave = () => {
    const timeout = setTimeout(() => {
      setActiveDropdown(null)
    }, 150) // 150ms delay before hiding
    setHoverTimeout(timeout)
  }

  // Cleanup timeout on unmount
  useEffect(() => {
    return () => {
      if (hoverTimeout) {
        clearTimeout(hoverTimeout)
      }
    }
  }, [hoverTimeout])

  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container mx-auto px-4">
        <div className="flex h-16 items-center justify-between">
          {/* Logo */}
                      <Link href="/" className="flex items-center space-x-2">
                        <img 
                          src="/images/logo.png" 
                          alt="OISSite" 
                          className="h-8 w-auto"
                        />
                        <span className="text-xl font-bold">OISSite</span>
                      </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            {navigationItems.map((item) => (
              <div
                key={item.label}
                className="relative"
                onMouseEnter={() => handleMouseEnter(item.label)}
                onMouseLeave={handleMouseLeave}
              >
                <Link
                  href={item.href}
                  className={cn(
                    'flex items-center space-x-1 px-3 py-2 text-sm font-medium transition-colors hover:text-primary',
                    isActive(item.href) ? 'text-primary' : 'text-muted-foreground'
                  )}
                >
                  <span>{item.label}</span>
                  {item.children && <ChevronDown className="h-4 w-4" />}
                </Link>

                {/* Dropdown Menu */}
                {item.children && activeDropdown === item.label && (
                  <div 
                    className="absolute top-full left-0 mt-1 w-48 rounded-md border bg-popover p-1 shadow-lg z-50"
                    onMouseEnter={() => handleMouseEnter(item.label)}
                    onMouseLeave={handleMouseLeave}
                  >
                    {item.children.map((child) => (
                      <Link
                        key={child.href}
                        href={child.href}
                        className={cn(
                          'block px-3 py-2 text-sm transition-colors hover:bg-accent hover:text-accent-foreground rounded-sm',
                          isActive(child.href) ? 'bg-accent text-accent-foreground' : ''
                        )}
                      >
                        {child.label}
                      </Link>
                    ))}
                  </div>
                )}
              </div>
            ))}
          </nav>

          {/* Desktop Actions */}
          <div className="hidden md:flex items-center space-x-4">
            {isAuthenticated ? (
              <>
                <Button variant="ghost" asChild>
                  <Link href="/client-portal">
                    <User className="h-4 w-4 mr-2" />
                    {user?.firstname} {user?.lastname}
                  </Link>
                </Button>
                <Button variant="ghost" onClick={logout}>
                  <LogOut className="h-4 w-4 mr-2" />
                  Sign Out
                </Button>
              </>
            ) : (
              <>
                <Button variant="ghost" asChild>
                  <Link href="/login">Sign In</Link>
                </Button>
                <Button asChild>
                  <Link href="/register">Get Started</Link>
                </Button>
              </>
            )}
          </div>

          {/* Mobile Menu Button */}
          <Sheet open={isOpen} onOpenChange={setIsOpen}>
            <SheetTrigger asChild>
              <Button variant="ghost" size="icon" className="md:hidden">
                <Menu className="h-6 w-6" />
                <span className="sr-only">Toggle menu</span>
              </Button>
            </SheetTrigger>
            <SheetContent side="right" className="w-[300px] sm:w-[400px]">
              <div className="flex flex-col space-y-4 mt-8">
                {navigationItems.map((item) => (
                  <div key={item.label}>
                    <Link
                      href={item.href}
                      className={cn(
                        'block px-3 py-2 text-base font-medium transition-colors',
                        isActive(item.href) ? 'text-primary' : 'text-muted-foreground'
                      )}
                      onClick={() => setIsOpen(false)}
                    >
                      {item.label}
                    </Link>
                    {item.children && (
                      <div className="ml-4 mt-2 space-y-2">
                        {item.children.map((child) => (
                          <Link
                            key={child.href}
                            href={child.href}
                            className={cn(
                              'block px-3 py-1 text-sm transition-colors',
                              isActive(child.href) ? 'text-primary' : 'text-muted-foreground'
                            )}
                            onClick={() => setIsOpen(false)}
                          >
                            {child.label}
                          </Link>
                        ))}
                      </div>
                    )}
                  </div>
                ))}
                <div className="pt-4 border-t">
                  {isAuthenticated ? (
                    <>
                      <Button variant="ghost" className="w-full justify-start" asChild>
                        <Link href="/client-portal" onClick={() => setIsOpen(false)}>
                          <User className="h-4 w-4 mr-2" />
                          {user?.firstname} {user?.lastname}
                        </Link>
                      </Button>
                      <Button variant="ghost" className="w-full mt-2 justify-start" onClick={() => {
                        logout()
                        setIsOpen(false)
                      }}>
                        <LogOut className="h-4 w-4 mr-2" />
                        Sign Out
                      </Button>
                    </>
                  ) : (
                    <>
                      <Button variant="ghost" className="w-full justify-start" asChild>
                        <Link href="/login" onClick={() => setIsOpen(false)}>
                          Sign In
                        </Link>
                      </Button>
                      <Button className="w-full mt-2" asChild>
                        <Link href="/register" onClick={() => setIsOpen(false)}>
                          Get Started
                        </Link>
                      </Button>
                    </>
                  )}
                </div>
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </header>
  )
}
