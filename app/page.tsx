import { Card } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { motion } from "framer-motion"

export default function Home() {
  return (
    <main className="min-h-screen bg-background text-foreground flex flex-col items-center justify-center p-6">
      <motion.img
        src="https://raw.githubusercontent.com/micahrogersdc-debug/Public/refs/heads/main/IMG_3504.JPG"
        alt="Micah Rogers"
        className="rounded-2xl shadow-2xl w-full max-w-3xl mb-10"
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
      />
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.3, duration: 1 }}
        className="text-center max-w-2xl"
      >
        <h1 className="text-5xl font-bold mb-4">Micah Rogers</h1>
        <p className="text-xl mb-6 text-muted-foreground">
          Politics & Technology for a New Generation
        </p>
        <Card className="p-6 space-y-4">
          <p>
            Political Science major at American University focused on connecting
            political theory, organizing, and digital strategy.
          </p>
          <p>
            Experienced in grassroots organizing, union advocacy, and digital
            communication. Strong technical background from a two-year IT
            internship at Outside Open.
          </p>
          <p>
            Building tools, movements, and ideas at the intersection of politics
            and technology.
          </p>
          <div className="flex justify-center gap-4 pt-4">
            <Button asChild variant="outline">
              <a href="https://www.linkedin.com/in/micahrogrs/" target="_blank">LinkedIn</a>
            </Button>
            <Button asChild variant="outline">
              <a href="mailto:micah@micahrogrs.com">Email</a>
            </Button>
            <Button asChild variant="outline">
              <a href="https://github.com/micahrogersdc-debug" target="_blank">GitHub</a>
            </Button>
          </div>
        </Card>
      </motion.div>
    </main>
  )
}
