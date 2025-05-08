"use client"

import { motion } from "framer-motion"
import ProtectedLayout from "../components/protected-layout"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "../components/ui/card"
import { TextGenerateEffect } from "../components/ui/text-generate-effect"
import { Input } from "../components/ui/input"
import { Button } from "../components/ui/button"
import { Switch } from "../components/ui/switch"
import { Label } from "../components/ui/label"

export default function Alerts() {
  const alertTypes = [
    {
      id: "price-alerts",
      title: "Price Alerts",
      description: "Get notified when prices change significantly",
    },
    {
      id: "new-features",
      title: "New Features",
      description: "Stay updated with new platform features",
    },
    {
      id: "security-alerts",
      title: "Security Alerts",
      description: "Important security notifications",
    },
    {
      id: "reward-alerts",
      title: "Reward Alerts",
      description: "Get notified about new rewards",
    },
  ]

  const recentAlerts = [
    {
      id: 1,
      title: "Welcome to OanicAI",
      description: "Thank you for joining OanicAI platform",
      date: "2023-04-15",
      read: true,
    },
    {
      id: 2,
      title: "New Feature: Academy",
      description: "We've launched our educational platform",
      date: "2023-04-10",
      read: false,
    },
    {
      id: 3,
      title: "Security Update",
      description: "Important security enhancements have been implemented",
      date: "2023-04-05",
      read: true,
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
            <TextGenerateEffect words="Alerts" />
          </h1>
          <p className="mt-2 text-muted-foreground">Manage your notification preferences and view recent alerts</p>
        </div>

        <div className="grid gap-8 md:grid-cols-2">
          <div className="space-y-6">
            <Card>
              <CardHeader>
                <CardTitle>Alert Preferences</CardTitle>
                <CardDescription>Choose which notifications you want to receive</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <motion.div variants={container} initial="hidden" animate="show" className="space-y-4">
                  {alertTypes.map((alert) => (
                    <motion.div key={alert.id} variants={item} className="flex items-center justify-between space-x-2">
                      <div className="space-y-0.5">
                        <Label htmlFor={alert.id}>{alert.title}</Label>
                        <p className="text-xs text-muted-foreground">{alert.description}</p>
                      </div>
                      <Switch id={alert.id} defaultChecked={alert.id === "security-alerts"} />
                    </motion.div>
                  ))}
                </motion.div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Email Notifications</CardTitle>
                <CardDescription>Receive alerts via email</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="space-y-2">
                  <Label htmlFor="email">Email Address</Label>
                  <div className="flex space-x-2">
                    <Input id="email" placeholder="Enter your email" type="email" />
                    <Button>Save</Button>
                  </div>
                </div>
                <div className="flex items-center space-x-2">
                  <Switch id="email-notifications" />
                  <Label htmlFor="email-notifications">Enable email notifications</Label>
                </div>
              </CardContent>
            </Card>
          </div>

          <div>
            <Card className="h-full">
              <CardHeader>
                <CardTitle>Recent Alerts</CardTitle>
                <CardDescription>Your latest notifications</CardDescription>
              </CardHeader>
              <CardContent>
                <motion.div variants={container} initial="hidden" animate="show" className="space-y-4">
                  {recentAlerts.map((alert) => (
                    <motion.div
                      key={alert.id}
                      variants={item}
                      className={`rounded-lg border p-4 ${!alert.read ? "border-primary/50 bg-primary/5" : ""}`}
                    >
                      <div className="mb-2 flex items-center justify-between">
                        <h3 className="font-medium">{alert.title}</h3>
                        <span className="text-xs text-muted-foreground">{alert.date}</span>
                      </div>
                      <p className="text-sm text-muted-foreground">{alert.description}</p>
                      {!alert.read && (
                        <div className="mt-2 text-right">
                          <Button variant="ghost" size="sm">
                            Mark as read
                          </Button>
                        </div>
                      )}
                    </motion.div>
                  ))}
                </motion.div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </ProtectedLayout>
  )
}
