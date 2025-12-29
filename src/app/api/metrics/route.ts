import { NextResponse } from 'next/server';
import { register, collectDefaultMetrics } from 'prom-client';

// Collects default metrics (CPU, memory, etc.)
collectDefaultMetrics();

export async function GET() {
  const metrics = await register.metrics();
  return new NextResponse(metrics, {
    headers: {
      'Content-Type': register.contentType,
    },
  });
}