import { Metadata } from 'next'
import { WhmcsClientPortal } from '@/components/features/whmcs/WhmcsClientPortal'
import { WhmcsOrderForm } from '@/components/features/whmcs/WhmcsOrderForm'
import { ProtectedRoute } from '@/components/auth/ProtectedRoute'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs'

export const metadata: Metadata = {
  title: 'Client Portal - Manage Your Services | OISSite',
  description: 'Access your client portal to manage hosting services, billing, support tickets, and more.',
  keywords: ['client portal', 'account management', 'billing', 'support tickets', 'hosting management'],
}

export default function ClientPortalPage() {
  return (
    <ProtectedRoute>
      <div className="flex flex-col min-h-screen">
      {/* Hero Section */}
      <section className="relative py-20 lg:py-32 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-background to-secondary/5" />
        <div className="container mx-auto px-4 relative">
          <div className="max-w-4xl mx-auto text-center space-y-8">
            <h1 className="text-4xl lg:text-6xl font-bold tracking-tight">
              Client Portal
            </h1>
            <p className="text-xl lg:text-2xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
              Manage your hosting services, billing, and support tickets all in one place.
            </p>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <Tabs defaultValue="portal" className="max-w-6xl mx-auto">
            <TabsList className="grid w-full grid-cols-2">
              <TabsTrigger value="portal">Portal Access</TabsTrigger>
              <TabsTrigger value="orders">Create Order</TabsTrigger>
            </TabsList>
            
            <TabsContent value="portal" className="mt-8">
              <WhmcsClientPortal />
            </TabsContent>
            
            <TabsContent value="orders" className="mt-8">
              <div className="text-center space-y-4 mb-8">
                <h2 className="text-3xl font-bold">Create New Order</h2>
                <p className="text-muted-foreground">
                  Create a new order directly through WHMCS integration.
                </p>
              </div>
              <WhmcsOrderForm />
            </TabsContent>
          </Tabs>
        </div>
      </section>
      </div>
    </ProtectedRoute>
  )
}
