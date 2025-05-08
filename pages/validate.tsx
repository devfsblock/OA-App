"use client"

import { motion } from "framer-motion"
import ProtectedLayout from "../components/protected-layout"
import { TextGenerateEffect } from "../components/ui/text-generate-effect"
import { GitHubGlobe } from "../components/ui/github-globe"

export default function Validate() {
  return (
    <ProtectedLayout>
      <div className="flex h-full flex-col items-center justify-start py-12 text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="max-w-2xl mb-24"
        >
          <h1 className="mb-6 bg-gradient-to-r from-blue-500 to-purple-600 bg-clip-text text-4xl font-bold text-transparent">
            <TextGenerateEffect words="Validate Now - Coming Soon" />
          </h1>
          <p className="text-lg text-muted-foreground">
            Our data validation platform is under development. Stay tuned for updates on this exciting feature that will
            allow you to earn rewards by validating data.
          </p>
        </motion.div>


        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5, duration: 0.5 }}
          className="mt-8"
        >
          <button className="rounded-md bg-primary px-6 py-3 font-medium text-primary-foreground">Join Waitlist</button>
        </motion.div>
      </div>
    
    </ProtectedLayout>
  )
}
