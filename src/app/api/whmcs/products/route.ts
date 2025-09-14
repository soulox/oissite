import { NextRequest, NextResponse } from 'next/server'
import { whmcsClient } from '@/lib/whmcs/client'

// GET /api/whmcs/products - Get all products or specific product
export async function GET(request: NextRequest) {
  try {
    const { searchParams } = new URL(request.url)
    const productId = searchParams.get('productId')

    if (productId) {
      // Get specific product
      const product = await whmcsClient.getProduct(productId)
      
      return NextResponse.json({
        success: true,
        data: product,
      })
    } else {
      // Get all products
      const products = await whmcsClient.getProducts()
      
      return NextResponse.json({
        success: true,
        data: products,
      })
    }
  } catch (error) {
    console.error('Error fetching products:', error)
    return NextResponse.json(
      { error: 'Failed to fetch products' },
      { status: 500 }
    )
  }
}
