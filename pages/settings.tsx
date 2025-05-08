"use client"

import { useState } from "react"
import ProtectedLayout from "../components/protected-layout"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "../components/ui/card"
import { TextGenerateEffect } from "../components/ui/text-generate-effect"
import { Tabs } from "../components/ui/tabs"
import { Input } from "../components/ui/input"
import { Button } from "../components/ui/button"
import { Switch } from "../components/ui/switch"
import { Label } from "../components/ui/label"
import { useAuth } from "../lib/auth-context"

export default function Settings() {
  const { walletAddress } = useAuth()
  const [username, setUsername] = useState("User")
  const [email, setEmail] = useState("")

  const tabs = [
    {
      title: "Profile",
      value: "profile",
      content: (
        <div className="space-y-6">
          <div className="space-y-2">
            <Label htmlFor="username">Username</Label>
            <Input id="username" value={username} onChange={(e) => setUsername(e.target.value)} />
          </div>
          <div className="space-y-2">
            <Label htmlFor="email">Email</Label>
            <Input
              id="email"
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Enter your email"
            />
          </div>
          <div className="space-y-2">
            <Label htmlFor="wallet">Wallet Address</Label>
            <Input id="wallet" value={walletAddress || ""} disabled className="bg-muted/50" />
          </div>
          <Button>Save Changes</Button>
        </div>
      ),
    },
    {
      title: "Notifications",
      value: "notifications",
      content: (
        <div className="space-y-6">
          <div className="space-y-4">
            <h3 className="text-lg font-medium">Email Notifications</h3>
            <div className="space-y-4">
              <div className="flex items-center justify-between">
                <div>
                  <Label htmlFor="marketing">Marketing emails</Label>
                  <p className="text-sm text-muted-foreground">Receive emails about new features and updates</p>
                </div>
                <Switch id="marketing" />
              </div>
              <div className="flex items-center justify-between">
                <div>
                  <Label htmlFor="social">Social notifications</Label>
                  <p className="text-sm text-muted-foreground">Receive emails for friend requests and follows</p>
                </div>
                <Switch id="social" />
              </div>
              <div className="flex items-center justify-between">
                <div>
                  <Label htmlFor="security">Security emails</Label>
                  <p className="text-sm text-muted-foreground">
                    Receive emails about your account activity and security
                  </p>
                </div>
                <Switch id="security" defaultChecked />
              </div>
            </div>
          </div>
          <div className="space-y-4">
            <h3 className="text-lg font-medium">Push Notifications</h3>
            <div className="space-y-4">
              <div className="flex items-center justify-between">
                <div>
                  <Label htmlFor="push-everything">Everything</Label>
                  <p className="text-sm text-muted-foreground">Receive all push notifications</p>
                </div>
                <Switch id="push-everything" />
              </div>
              <div className="flex items-center justify-between">
                <div>
                  <Label htmlFor="push-mentions">Mentions</Label>
                  <p className="text-sm text-muted-foreground">Receive push notifications when you're mentioned</p>
                </div>
                <Switch id="push-mentions" defaultChecked />
              </div>
              <div className="flex items-center justify-between">
                <div>
                  <Label htmlFor="push-messages">Direct messages</Label>
                  <p className="text-sm text-muted-foreground">Receive push notifications for direct messages</p>
                </div>
                <Switch id="push-messages" defaultChecked />
              </div>
            </div>
          </div>
          <Button>Save Preferences</Button>
        </div>
      ),
    },
    {
      title: "Appearance",
      value: "appearance",
      content: (
        <div className="space-y-6">
          <div className="space-y-4">
            <h3 className="text-lg font-medium">Theme Preferences</h3>
            <div className="space-y-4">
              <div className="flex items-center justify-between">
                <div>
                  <Label htmlFor="theme-system">System theme</Label>
                  <p className="text-sm text-muted-foreground">Follow system theme preferences</p>
                </div>
                <Switch id="theme-system" defaultChecked />
              </div>
              <div className="flex items-center justify-between">
                <div>
                  <Label htmlFor="theme-animations">Animations</Label>
                  <p className="text-sm text-muted-foreground">Enable animations and effects</p>
                </div>
                <Switch id="theme-animations" defaultChecked />
              </div>
            </div>
          </div>
          <Button>Save Preferences</Button>
        </div>
      ),
    },
    {
      title: "Security",
      value: "security",
      content: (
        <div className="space-y-6">
          <div className="space-y-4">
            <h3 className="text-lg font-medium">Security Settings</h3>
            <div className="space-y-4">
              <div className="flex items-center justify-between">
                <div>
                  <Label htmlFor="2fa">Two-factor authentication</Label>
                  <p className="text-sm text-muted-foreground">Add an extra layer of security to your account</p>
                </div>
                <Switch id="2fa" />
              </div>
              <div className="flex items-center justify-between">
                <div>
                  <Label htmlFor="activity-log">Activity log</Label>
                  <p className="text-sm text-muted-foreground">View and manage your account activity</p>
                </div>
                <Button variant="outline" size="sm">
                  View
                </Button>
              </div>
              <div className="flex items-center justify-between">
                <div>
                  <Label htmlFor="trusted-devices">Trusted devices</Label>
                  <p className="text-sm text-muted-foreground">Manage devices that have access to your account</p>
                </div>
                <Button variant="outline" size="sm">
                  Manage
                </Button>
              </div>
            </div>
          </div>
          <Button>Save Settings</Button>
        </div>
      ),
    },
  ]

  return (
    <ProtectedLayout>
      <div className="space-y-8">
        <div>
          <h1 className="bg-gradient-to-r from-blue-500 to-purple-600 bg-clip-text text-3xl font-bold text-transparent">
            <TextGenerateEffect words="Settings" />
          </h1>
          <p className="mt-2 text-muted-foreground">Manage your account settings and preferences</p>
        </div>

        <Card>
          <CardHeader>
            <CardTitle>Account Settings</CardTitle>
            <CardDescription>Manage your account settings and preferences</CardDescription>
          </CardHeader>
          <CardContent>
            <Tabs defaultValue="profile" tabs={tabs} />
          </CardContent>
        </Card>
      </div>
    </ProtectedLayout>
  )
}
