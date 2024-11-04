"use client";

import { OptInForm } from "@/components/opt-in"
import { useSearchParams } from 'next/navigation'

export default function Page() {
  const searchParams = useSearchParams()
  return (
    <div className="flex h-screen w-full items-center justify-center px-4">
      <OptInForm />
    </div>
  )
}
