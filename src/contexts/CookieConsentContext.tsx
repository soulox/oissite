'use client'

import React, { createContext, useContext, useState, useEffect, ReactNode } from 'react'

export interface CookiePreferences {
  essential: boolean
  analytics: boolean
  functional: boolean
  marketing: boolean
}

interface CookieConsentContextType {
  preferences: CookiePreferences
  hasConsented: boolean
  showBanner: boolean
  updatePreferences: (preferences: CookiePreferences) => void
  acceptAll: () => void
  rejectAll: () => void
  showSettings: () => void
  hideBanner: () => void
}

const defaultPreferences: CookiePreferences = {
  essential: true, // Always true, cannot be disabled
  analytics: false,
  functional: false,
  marketing: false,
}

const CookieConsentContext = createContext<CookieConsentContextType | undefined>(undefined)

export function CookieConsentProvider({ children }: { children: ReactNode }) {
  const [preferences, setPreferences] = useState<CookiePreferences>(defaultPreferences)
  const [hasConsented, setHasConsented] = useState(false)
  const [showBanner, setShowBanner] = useState(false)

  // Load saved preferences on mount
  useEffect(() => {
    const savedPreferences = localStorage.getItem('cookie-preferences')
    const savedConsent = localStorage.getItem('cookie-consent')
    
    if (savedPreferences) {
      try {
        const parsed = JSON.parse(savedPreferences)
        setPreferences({ ...defaultPreferences, ...parsed })
      } catch (error) {
        console.error('Error parsing saved cookie preferences:', error)
      }
    }
    
    if (savedConsent === 'true') {
      setHasConsented(true)
    } else {
      setShowBanner(true)
    }
  }, [])

  const updatePreferences = (newPreferences: CookiePreferences) => {
    const updatedPreferences = { ...newPreferences, essential: true } // Essential cookies always enabled
    setPreferences(updatedPreferences)
    setHasConsented(true)
    setShowBanner(false)
    
    // Save to localStorage
    localStorage.setItem('cookie-preferences', JSON.stringify(updatedPreferences))
    localStorage.setItem('cookie-consent', 'true')
    
    // Apply cookie settings
    applyCookieSettings(updatedPreferences)
  }

  const acceptAll = () => {
    const allAccepted: CookiePreferences = {
      essential: true,
      analytics: true,
      functional: true,
      marketing: true,
    }
    updatePreferences(allAccepted)
  }

  const rejectAll = () => {
    const onlyEssential: CookiePreferences = {
      essential: true,
      analytics: false,
      functional: false,
      marketing: false,
    }
    updatePreferences(onlyEssential)
  }

  const showSettings = () => {
    setShowBanner(true)
  }

  const hideBanner = () => {
    setShowBanner(false)
  }

  // Apply cookie settings based on preferences
  const applyCookieSettings = (prefs: CookiePreferences) => {
    // Analytics cookies (Google Analytics, etc.)
    if (prefs.analytics) {
      // Enable analytics tracking
      if (typeof window !== 'undefined' && window.gtag) {
        window.gtag('consent', 'update', {
          analytics_storage: 'granted'
        })
      }
    } else {
      // Disable analytics tracking
      if (typeof window !== 'undefined' && window.gtag) {
        window.gtag('consent', 'update', {
          analytics_storage: 'denied'
        })
      }
    }

    // Marketing cookies
    if (prefs.marketing) {
      // Enable marketing tracking
      if (typeof window !== 'undefined' && window.gtag) {
        window.gtag('consent', 'update', {
          ad_storage: 'granted',
          ad_user_data: 'granted',
          ad_personalization: 'granted'
        })
      }
    } else {
      // Disable marketing tracking
      if (typeof window !== 'undefined' && window.gtag) {
        window.gtag('consent', 'update', {
          ad_storage: 'denied',
          ad_user_data: 'denied',
          ad_personalization: 'denied'
        })
      }
    }

    // Functional cookies
    if (prefs.functional) {
      // Enable functional features
      localStorage.setItem('functional-cookies-enabled', 'true')
    } else {
      // Disable functional features
      localStorage.removeItem('functional-cookies-enabled')
    }
  }

  const value: CookieConsentContextType = {
    preferences,
    hasConsented,
    showBanner,
    updatePreferences,
    acceptAll,
    rejectAll,
    showSettings,
    hideBanner,
  }

  return (
    <CookieConsentContext.Provider value={value}>
      {children}
    </CookieConsentContext.Provider>
  )
}

export function useCookieConsent() {
  const context = useContext(CookieConsentContext)
  if (context === undefined) {
    throw new Error('useCookieConsent must be used within a CookieConsentProvider')
  }
  return context
}

// Extend Window interface for gtag
declare global {
  interface Window {
    gtag: (...args: any[]) => void
  }
}
