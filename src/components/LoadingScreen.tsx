import { Gamepad2 } from 'lucide-react'

export default function LoadingScreen() {
  return (
    <div className="min-h-screen bg-gray-950 flex items-center justify-center">
      <div className="text-center">
        <div className="animate-spin mb-4">
          <Gamepad2 className="h-12 w-12 text-blue-500 mx-auto" />
        </div>
        <h2 className="text-xl font-semibold text-white mb-2">Gamia</h2>
        <p className="text-gray-400">Loading your game creation platform...</p>
      </div>
    </div>
  )
}