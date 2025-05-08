"use client"

import { useState } from "react"
import Link from "next/link"
import { useRouter } from "next/router"
import { motion, AnimatePresence } from "framer-motion"
import {
  LayoutDashboard,
  Award,
  Tag,
  CheckSquare,
  ShoppingBag,
  Bell,
  HelpCircle,
  ChevronLeft,
  ChevronRight,
  User,
  LogOut,
  CreditCard,
  Cog,
} from "lucide-react"
import { useAuth } from "../lib/auth-context"
import { cn } from "../lib/utils"
import { Badge } from "./ui/badge"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "./ui/dropdown-menu"

const menuItems = [
  { name: "My Dashboard", href: "/dashboard", icon: LayoutDashboard },
  { name: "OanicAI Academy", href: "/academy", icon: Award },
  { name: "Rewards", href: "/rewards", icon: CreditCard },
  {
    name: "Label Now",
    href: "/label",
    icon: Tag,

  },
  {
    name: "Validate Now",
    href: "/validate",
    icon: CheckSquare,
    
  },
  {
    name: "Marketplace",
    href: "/marketplace",
    icon: ShoppingBag,
   badge: "Coming Soon",
    disabled: true,
  },
  { name: "OanicAI Pulse", href: "/alerts", icon: Bell },
 // { name: "Settings", href: "/settings", icon: Settings },
  { name: "Help", href: "/help", icon: HelpCircle },
]

export default function Sidebar() {
  const [expanded, setExpanded] = useState(true)
  const router = useRouter()
  const { walletAddress, disconnectWallet } = useAuth()

  const toggleSidebar = () => {
    setExpanded(!expanded)
  }

  const shortenAddress = (address: string | null) => {
    if (!address) return ""
    return `${address.slice(0, 6)}...${address.slice(-4)}`
  }

  return (
    <>
      <motion.div
        animate={{
          width: expanded ? "280px" : "80px",
          transition: { duration: 0.3, ease: "easeInOut" },
        }}
        className="relative flex h-screen flex-col border-r border-border bg-card"
      >
        <div className="flex h-16 items-center justify-between px-4">
          {expanded ? (
            <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}>
            <img src="/images/logo1.svg" alt="OanicAI Logo" className="h-8" />
          </motion.div>
          ) : (
            <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}>
                            <img src="/images/icon.jpeg" alt="OanicAI Icon" className="h-8 w-8" />

           </motion.div>
          )}
          <button
            onClick={toggleSidebar}
            className="flex h-8 w-8 items-center justify-center rounded-md hover:bg-muted"
          >
            {expanded ? <ChevronLeft className="h-5 w-5" /> : <ChevronRight className="h-5 w-5" />}
          </button>
        </div>

        <div className="flex-1 overflow-y-auto py-4">
          <nav className="space-y-1 px-2">
            {menuItems.map((item) => (
              <Link key={item.name} href={item.disabled ? "#" : item.href} passHref>
                <motion.a
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  className={cn(
                    "group relative flex items-center rounded-md px-3 py-2 text-sm font-medium transition-colors",
                    router.pathname === item.href
                      ? "bg-primary/10 text-primary"
                      : "text-muted-foreground hover:bg-muted hover:text-foreground",
                    item.disabled && "pointer-events-none opacity-60",
                  )}
                >
                  <item.icon className="mr-3 h-5 w-5" />
                  <AnimatePresence>
                    {expanded && (
                      <motion.span
                        initial={{ opacity: 0, width: 0 }}
                        animate={{ opacity: 1, width: "auto" }}
                        exit={{ opacity: 0, width: 0 }}
                        className="whitespace-nowrap"
                      >
                        {item.name}
                      </motion.span>
                    )}
                  </AnimatePresence>
                  {item.badge && expanded && (
                    <Badge variant="outline" className="ml-auto bg-primary/10 text-xs text-primary">
                      {item.badge}
                    </Badge>
                  )}
                  {router.pathname === item.href && (
                    <motion.div
                      layoutId="activeIndicator"
                      className="absolute left-0 top-0 h-full w-1 rounded-r-md bg-primary"
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      transition={{ duration: 0.2 }}
                    />
                  )}
                </motion.a>
              </Link>
            ))}
          </nav>
        </div>

        <div className="border-t border-border p-4">
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <button className="flex w-full items-center justify-between rounded-md p-2 hover:bg-muted">
                <div className="flex items-center">
                  <div className="flex h-8 w-8 items-center justify-center rounded-full bg-primary/10">
                    <User className="h-4 w-4 text-primary" />
                  </div>
                  {expanded && (
                    <motion.div
                      initial={{ opacity: 0, width: 0 }}
                      animate={{ opacity: 1, width: "auto" }}
                      exit={{ opacity: 0, width: 0 }}
                      className="ml-3"
                    >
                      <p className="text-sm font-medium">{shortenAddress(walletAddress)}</p>
                    </motion.div>
                  )}
                </div>
              </button>
            </DropdownMenuTrigger>
            <DropdownMenuContent align="end" className="w-56">
              {/* <DropdownMenuItem>
                <User className="mr-2 h-4 w-4" />
                <span>Profile</span>
              </DropdownMenuItem>
              <DropdownMenuItem>
                <Cog className="mr-2 h-4 w-4" />
                <span>Account Settings</span>
              </DropdownMenuItem>
              <DropdownMenuItem>
                <CreditCard className="mr-2 h-4 w-4" />
                <span>Billing</span>
              </DropdownMenuItem>
              <DropdownMenuSeparator /> */}
              <DropdownMenuItem onClick={disconnectWallet}>
                <LogOut className="mr-2 h-4 w-4" />
                <span>Disconnect Wallet</span>
              </DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
        </div>
      </motion.div>
    </>
  )
}
