import { useState } from 'react'
import { Gamepad2, Sparkles, Code, Download, Play } from 'lucide-react'
import { Button } from '../components/ui/button'
import { Input } from '../components/ui/input'
import { Label } from '../components/ui/label'
import { Card, CardDescription, CardHeader, CardTitle } from '../components/ui/card'
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle, DialogTrigger } from '../components/ui/dialog'
import { useAuth } from '../contexts/AuthContext'
import toast from 'react-hot-toast'

export default function Landing() {
  const { login, register } = useAuth()
  const [isLogin, setIsLogin] = useState(true)
  const [isAuthOpen, setIsAuthOpen] = useState(false)
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [name, setName] = useState('')

  const handleAuth = async (e: React.FormEvent) => {
    e.preventDefault()
    try {
      if (isLogin) {
        await login(email, password)
        toast.success('Welcome back to Gamia!')
      } else {
        await register(email, password, name)
        toast.success('Welcome to Gamia!')
      }
      setIsAuthOpen(false)
    } catch {
      toast.error('Authentication failed')
    }
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-950 via-blue-950 to-gray-950">
      {/* Hero Section */}
      <div className="relative pt-20 pb-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="animate-fade-in">
            <div className="flex justify-center mb-8">
              <div className="p-4 bg-blue-500/20 rounded-full">
                <Gamepad2 className="h-16 w-16 text-blue-400" />
              </div>
            </div>
            
            <h1 className="text-5xl md:text-7xl font-bold text-white mb-6">
              Create Games with
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-500"> AI</span>
            </h1>
            
            <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
              Describe your game idea and watch Gamia bring it to life. 
              Create, play, modify, and export 2D games powered by Phaser.js - no coding experience required.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Dialog open={isAuthOpen} onOpenChange={setIsAuthOpen}>
                <DialogTrigger asChild>
                  <Button size="lg" className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-4 text-lg">
                    <Sparkles className="h-5 w-5 mr-2" />
                    Start Creating
                  </Button>
                </DialogTrigger>
                <DialogContent className="bg-gray-900 border-gray-700">
                  <DialogHeader>
                    <DialogTitle className="text-white">
                      {isLogin ? 'Welcome Back' : 'Join Gamia'}
                    </DialogTitle>
                    <DialogDescription className="text-gray-400">
                      {isLogin ? 'Sign in to continue creating games' : 'Create your account and start building games with AI'}
                    </DialogDescription>
                  </DialogHeader>
                  
                  <form onSubmit={handleAuth} className="space-y-4">
                    {!isLogin && (
                      <div>
                        <Label htmlFor="name" className="text-white">Name</Label>
                        <Input
                          id="name"
                          type="text"
                          value={name}
                          onChange={(e) => setName(e.target.value)}
                          className="bg-gray-800 border-gray-600 text-white"
                          required
                        />
                      </div>
                    )}
                    
                    <div>
                      <Label htmlFor="email" className="text-white">Email</Label>
                      <Input
                        id="email"
                        type="email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        className="bg-gray-800 border-gray-600 text-white"
                        required
                      />
                    </div>
                    
                    <div>
                      <Label htmlFor="password" className="text-white">Password</Label>
                      <Input
                        id="password"
                        type="password"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        className="bg-gray-800 border-gray-600 text-white"
                        required
                      />
                    </div>
                    
                    <Button type="submit" className="w-full bg-blue-600 hover:bg-blue-700">
                      {isLogin ? 'Sign In' : 'Create Account'}
                    </Button>
                    
                    <p className="text-center text-gray-400">
                      {isLogin ? "Don't have an account? " : "Already have an account? "}
                      <button
                        type="button"
                        onClick={() => setIsLogin(!isLogin)}
                        className="text-blue-400 hover:underline"
                      >
                        {isLogin ? 'Sign up' : 'Sign in'}
                      </button>
                    </p>
                  </form>
                </DialogContent>
              </Dialog>
              
              <Button variant="outline" size="lg" className="border-gray-600 text-gray-300 hover:bg-gray-800 px-8 py-4 text-lg">
                <Play className="h-5 w-5 mr-2" />
                Watch Demo
              </Button>
            </div>
          </div>
        </div>
      </div>

      {/* Features Section */}
      <div className="py-16 bg-gray-900/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center text-white mb-12">
            Everything you need to create games
          </h2>
          
          <div className="grid md:grid-cols-3 gap-8">
            <Card className="bg-gray-800/50 border-gray-700">
              <CardHeader>
                <div className="p-2 bg-blue-500/20 rounded-lg w-fit">
                  <Sparkles className="h-6 w-6 text-blue-400" />
                </div>
                <CardTitle className="text-white">AI-Powered Creation</CardTitle>
                <CardDescription className="text-gray-400">
                  Describe your game in plain English and watch our AI generate complete Phaser.js games with graphics, gameplay, and logic.
                </CardDescription>
              </CardHeader>
            </Card>
            
            <Card className="bg-gray-800/50 border-gray-700">
              <CardHeader>
                <div className="p-2 bg-purple-500/20 rounded-lg w-fit">
                  <Code className="h-6 w-6 text-purple-400" />
                </div>
                <CardTitle className="text-white">Code Editor</CardTitle>
                <CardDescription className="text-gray-400">
                  Modify generated code, upload custom assets, and fine-tune your games with our built-in editor and real-time preview.
                </CardDescription>
              </CardHeader>
            </Card>
            
            <Card className="bg-gray-800/50 border-gray-700">
              <CardHeader>
                <div className="p-2 bg-green-500/20 rounded-lg w-fit">
                  <Download className="h-6 w-6 text-green-400" />
                </div>
                <CardTitle className="text-white">Export & Share</CardTitle>
                <CardDescription className="text-gray-400">
                  Download your games as HTML/JS files, publish them to the community, or share them anywhere on the web.
                </CardDescription>
              </CardHeader>
            </Card>
          </div>
        </div>
      </div>

      {/* CTA Section */}
      <div className="py-16">
        <div className="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-white mb-4">
            Ready to bring your game ideas to life?
          </h2>
          <p className="text-gray-300 mb-8">
            Join thousands of creators who are already building amazing games with Gamia.
          </p>
          
          <Dialog open={isAuthOpen} onOpenChange={setIsAuthOpen}>
            <DialogTrigger asChild>
              <Button size="lg" className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-4">
                Get Started for Free
              </Button>
            </DialogTrigger>
          </Dialog>
        </div>
      </div>
    </div>
  )
}