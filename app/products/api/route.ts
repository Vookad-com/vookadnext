import { NextRequest, NextResponse } from "next/server";
import { products } from "../products"
export const dynamic = 'force-dynamic'
export async function GET(request: NextRequest, res: NextResponse) {
    const { searchParams } = new URL(request.url)
    const category = searchParams.get("category")
    if(category){
        let data = products.filter(e => e.category == category);
        return Response.json(data)
    }
    return Response.json(products)
  }