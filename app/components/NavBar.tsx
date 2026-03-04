"use client"

import React, { useEffect, useState } from "react"
import { motion } from "framer-motion"
import Link from "next/link"
import { LucideIcon } from "lucide-react"
import { cn } from "@/lib/utils"

interface NavItem {
  name: string
  url: string
  icon: LucideIcon
}

interface NavBarProps {
  items: NavItem[]
  className?: string
}

export function NavBar({ items, className }: NavBarProps) {
  const [activeTab, setActiveTab] = useState(items[0].name)
  const [isMobile, setIsMobile] = useState(false)

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 768)
    }

    handleResize()
    window.addEventListener("resize", handleResize)
    return () => window.removeEventListener("resize", handleResize)
  }, [])

  useEffect(() => {
    const sectionItems = items.filter((item) => item.url.startsWith("#") && item.url.length > 1)
    if (!sectionItems.length) return

    const sectionIdToName = new Map(
      sectionItems.map((item) => [item.url.slice(1), item.name] as const),
    )

    const updateFromHash = () => {
      const hashId = window.location.hash.replace("#", "")
      const next = sectionIdToName.get(hashId)
      if (next) setActiveTab(next)
    }

    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries.filter((entry) => entry.isIntersecting)
        if (!visible.length) return

        const viewportCenter = window.innerHeight / 2
        const closestToCenter = visible.sort((a, b) => {
          const aCenter = a.boundingClientRect.top + a.boundingClientRect.height / 2
          const bCenter = b.boundingClientRect.top + b.boundingClientRect.height / 2
          return Math.abs(aCenter - viewportCenter) - Math.abs(bCenter - viewportCenter)
        })[0]

        const next = sectionIdToName.get(closestToCenter.target.id)
        if (next) setActiveTab(next)
      },
      {
        root: null,
        // Use a wide band so very tall sections like #work are still observed.
        rootMargin: "-10% 0px -10% 0px",
        threshold: 0,
      },
    )

    sectionItems.forEach((item) => {
      const el = document.getElementById(item.url.slice(1))
      if (el) observer.observe(el)
    })

    updateFromHash()
    window.addEventListener("hashchange", updateFromHash)

    return () => {
      observer.disconnect()
      window.removeEventListener("hashchange", updateFromHash)
    }
  }, [items])

  return (
    <div
      className={cn(
        "fixed bottom-6 left-1/2 z-50 -translate-x-1/2 sm:bottom-auto sm:top-0 sm:pt-6 pointer-events-none",
        className,
      )}
    >
      <div className="pointer-events-auto flex items-center gap-3 rounded-full border border-white/20 bg-background/5 px-1 py-1 shadow-lg backdrop-blur-lg">
        {items.map((item) => {
          const Icon = item.icon
          const isActive = activeTab === item.name

          return (
            <Link
              key={item.name}
              href={item.url}
              onClick={() => setActiveTab(item.name)}
              className={cn(
                "relative cursor-pointer text-sm font-semibold px-6 py-2 rounded-full transition-colors",
                "text-foreground/80 hover:text-primary",
                isActive && "bg-muted text-primary",
              )}
            >
              <span className="hidden md:inline">{item.name}</span>
              <span className="md:hidden">
                <Icon size={18} strokeWidth={2.5} />
              </span>
              {isActive && (
                <motion.div
                  layoutId="lamp"
                  className="absolute inset-0 w-full bg-primary/5 rounded-full -z-10"
                  initial={false}
                  transition={{
                    type: "spring",
                    stiffness: 300,
                    damping: 30,
                  }}
                >
                  <div className="absolute -top-2 left-1/2 -translate-x-1/2 w-8 h-1 bg-primary rounded-t-full">
                    <div className="absolute w-12 h-6 bg-primary/20 rounded-full blur-md -top-2 -left-2" />
                    <div className="absolute w-8 h-6 bg-primary/20 rounded-full blur-md -top-1" />
                    <div className="absolute w-4 h-4 bg-primary/20 rounded-full blur-sm top-0 left-2" />
                  </div>
                </motion.div>
              )}
            </Link>
          )
        })}
      </div>
    </div>
  )
}
