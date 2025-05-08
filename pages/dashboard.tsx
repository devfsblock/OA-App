"use client"

import { motion } from "framer-motion"
import { useAuth } from "../lib/auth-context"
import ProtectedLayout from "../components/protected-layout"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "../components/ui/card"
import { CardHoverEffect } from "../components/ui/card-hover-effect"
import { TextGenerateEffect } from "../components/ui/text-generate-effect"

export default function Dashboard() {
  const { walletAddress, chainId } = useAuth()



  const cards = [
    {
      title: "Wallet Connected",
      description: "Your wallet is successfully connected to OanicAI",
      value: walletAddress ? `${walletAddress.slice(0, 6)}...${walletAddress.slice(-4)}` : "",
      color: "from-blue-500 to-cyan-500",
    },
    {
      title: "Pending Rewards",
      description: "Rewards waiting to be claimed",
      value: "0 Oanic",
      color: "from-amber-500 to-orange-500",
    },
    {
      title: "Validation Status",
      description: "Your current validation level",
      value: "Level 1",
      color: "from-green-500 to-emerald-500",
    },
  ]

  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  }

  const item = {
    hidden: { opacity: 0, y: 20 },
    show: { opacity: 1, y: 0, transition: { duration: 0.3 } },
  }

  return (
    <ProtectedLayout>
      <div className="space-y-8">
        <div>
          <h1 className="bg-gradient-to-r from-blue-500 to-purple-600 bg-clip-text text-3xl font-bold text-transparent">
            <TextGenerateEffect words="Welcome to OanicAI Dashboard" />
          </h1>
          <p className="mt-2 text-muted-foreground">Manage your Web3 labelled datasets and activities in one place</p>
        </div>

        <motion.div
          variants={container}
          initial="hidden"
          animate="show"
          className="grid gap-4 md:grid-cols-2 lg:grid-cols-4"
        >
          {cards.map((card, index) => (
            <motion.div key={index} variants={item}>
              <CardHoverEffect>
                <Card className="overflow-hidden">
                  <CardHeader className="pb-2">
                    <CardTitle className="text-sm font-medium">{card.title}</CardTitle>
                    <CardDescription className="text-xs">{card.description}</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className={`bg-gradient-to-r ${card.color} bg-clip-text text-xl font-bold text-transparent`}>
                      {card.value}
                    </div>
                  </CardContent>
                </Card>
              </CardHoverEffect>
            </motion.div>
          ))}
        </motion.div>

        <div className="grid gap-4 md:grid-cols-2">
          <Card>
            <CardHeader>
              <CardTitle>Recent Activity</CardTitle>
              <CardDescription>Your latest actions on OanicAI</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="rounded-md border border-border p-4 text-center text-sm text-muted-foreground">
                No recent activity to display
              </div>
            </CardContent>
          </Card>
          <Card>
            <CardHeader>
              <CardTitle>Upcoming Events</CardTitle>
              <CardDescription>Stay updated with OanicAI events</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="rounded-md border border-border p-4 text-center text-sm text-muted-foreground">
                No upcoming events to display
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </ProtectedLayout>
  )
}
