import { useState } from 'react'
import { Plus, Play, Edit, Trash2, Download, Share, Clock } from 'lucide-react'
import { Button } from '../components/ui/button'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '../components/ui/card'
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle, DialogTrigger } from '../components/ui/dialog'
import { Input } from '../components/ui/input'
import { Label } from '../components/ui/label'
import { Textarea } from '../components/ui/textarea'
import { useAuth } from '../contexts/AuthContext'

interface Game {
  id: string
  title: string
  description: string
  thumbnail: string
  createdAt: string
  isPublished: boolean
  plays: number
}

export default function Dashboard() {
  const { user } = useAuth()
  const [games, setGames] = useState<Game[]>([
    {
      id: '1',
      title: 'Space Adventure',
      description: 'A thrilling space exploration game with asteroids and power-ups',
      thumbnail: 'https://images.unsplash.com/photo-1446776653964-20c1d3a81b06?w=300&h=200&fit=crop',
      createdAt: '2024-01-15',
      isPublished: true,
      plays: 127
    },
    {
      id: '2',
      title: 'Puzzle Master',
      description: 'A challenging puzzle game with increasing difficulty levels',
      thumbnail: 'https://images.unsplash.com/photo-1493711662062-fa541adb3fc8?w=300&h=200&fit=crop',
      createdAt: '2024-01-10',
      isPublished: false,
      plays: 0
    }
  ])
  
  const [isCreateOpen, setIsCreateOpen] = useState(false)
  const [newGameTitle, setNewGameTitle] = useState('')
  const [newGameDescription, setNewGameDescription] = useState('')

  const handleCreateGame = () => {
    if (!newGameTitle.trim() || !newGameDescription.trim()) return
    
    const newGame: Game = {
      id: Date.now().toString(),
      title: newGameTitle,
      description: newGameDescription,
      thumbnail: 'https://images.unsplash.com/photo-1511512578047-dfb367046420?w=300&h=200&fit=crop',
      createdAt: new Date().toISOString().split('T')[0],
      isPublished: false,
      plays: 0
    }
    
    setGames([newGame, ...games])
    setNewGameTitle('')
    setNewGameDescription('')
    setIsCreateOpen(false)
  }

  const togglePublish = (gameId: string) => {
    setGames(games.map(game => 
      game.id === gameId 
        ? { ...game, isPublished: !game.isPublished }
        : game
    ))
  }

  const deleteGame = (gameId: string) => {
    setGames(games.filter(game => game.id !== gameId))
  }

  return (
    <div className="min-h-screen bg-gray-950 p-6">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="flex justify-between items-center mb-8">
          <div>
            <h1 className="text-3xl font-bold text-white mb-2">
              Welcome back, {user?.name}!
            </h1>
            <p className="text-gray-400">
              You have {games.length} games in your library
            </p>
          </div>
          
          <Dialog open={isCreateOpen} onOpenChange={setIsCreateOpen}>
            <DialogTrigger asChild>
              <Button className="bg-blue-600 hover:bg-blue-700">
                <Plus className="h-4 w-4 mr-2" />
                Create New Game
              </Button>
            </DialogTrigger>
            <DialogContent className="bg-gray-900 border-gray-700">
              <DialogHeader>
                <DialogTitle className="text-white">Create a New Game</DialogTitle>
                <DialogDescription className="text-gray-400">
                  Describe your game idea and let our AI bring it to life
                </DialogDescription>
              </DialogHeader>
              
              <div className="space-y-4">
                <div>
                  <Label htmlFor="title" className="text-white">Game Title</Label>
                  <Input
                    id="title"
                    value={newGameTitle}
                    onChange={(e) => setNewGameTitle(e.target.value)}
                    placeholder="Enter your game title..."
                    className="bg-gray-800 border-gray-600 text-white"
                  />
                </div>
                
                <div>
                  <Label htmlFor="description" className="text-white">Game Description</Label>
                  <Textarea
                    id="description"
                    value={newGameDescription}
                    onChange={(e) => setNewGameDescription(e.target.value)}
                    placeholder="Describe your game idea in detail..."
                    className="bg-gray-800 border-gray-600 text-white h-24"
                  />
                </div>
                
                <Button 
                  onClick={handleCreateGame}
                  className="w-full bg-blue-600 hover:bg-blue-700"
                  disabled={!newGameTitle.trim() || !newGameDescription.trim()}
                >
                  Generate Game with AI
                </Button>
              </div>
            </DialogContent>
          </Dialog>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
          <Card className="bg-gray-800/50 border-gray-700">
            <CardHeader className="pb-3">
              <CardTitle className="text-white text-lg">Total Games</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="text-3xl font-bold text-blue-400">{games.length}</div>
            </CardContent>
          </Card>
          
          <Card className="bg-gray-800/50 border-gray-700">
            <CardHeader className="pb-3">
              <CardTitle className="text-white text-lg">Published</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="text-3xl font-bold text-green-400">
                {games.filter(g => g.isPublished).length}
              </div>
            </CardContent>
          </Card>
          
          <Card className="bg-gray-800/50 border-gray-700">
            <CardHeader className="pb-3">
              <CardTitle className="text-white text-lg">Total Plays</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="text-3xl font-bold text-purple-400">
                {games.reduce((acc, game) => acc + game.plays, 0)}
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Games Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {games.map((game) => (
            <Card key={game.id} className="bg-gray-800/50 border-gray-700 hover:bg-gray-800/70 transition-colors">
              <div className="aspect-video relative overflow-hidden rounded-t-lg">
                <img 
                  src={game.thumbnail} 
                  alt={game.title}
                  className="w-full h-full object-cover"
                />
                <div className="absolute top-2 right-2">
                  <span className={`px-2 py-1 rounded-full text-xs font-medium ${
                    game.isPublished 
                      ? 'bg-green-500/20 text-green-400' 
                      : 'bg-yellow-500/20 text-yellow-400'
                  }`}>
                    {game.isPublished ? 'Published' : 'Draft'}
                  </span>
                </div>
              </div>
              
              <CardHeader>
                <CardTitle className="text-white text-lg">{game.title}</CardTitle>
                <CardDescription className="text-gray-400 line-clamp-2">
                  {game.description}
                </CardDescription>
                <div className="flex items-center text-sm text-gray-500 mt-2">
                  <Clock className="h-4 w-4 mr-1" />
                  {game.createdAt} • {game.plays} plays
                </div>
              </CardHeader>
              
              <CardContent>
                <div className="flex flex-wrap gap-2">
                  <Button size="sm" variant="outline" className="border-gray-600 text-gray-300 hover:bg-gray-700">
                    <Play className="h-4 w-4 mr-1" />
                    Play
                  </Button>
                  
                  <Button size="sm" variant="outline" className="border-gray-600 text-gray-300 hover:bg-gray-700">
                    <Edit className="h-4 w-4 mr-1" />
                    Edit
                  </Button>
                  
                  <Button 
                    size="sm" 
                    variant="outline" 
                    onClick={() => togglePublish(game.id)}
                    className="border-gray-600 text-gray-300 hover:bg-gray-700"
                  >
                    <Share className="h-4 w-4 mr-1" />
                    {game.isPublished ? 'Unpublish' : 'Publish'}
                  </Button>
                  
                  <Button size="sm" variant="outline" className="border-gray-600 text-gray-300 hover:bg-gray-700">
                    <Download className="h-4 w-4 mr-1" />
                    Export
                  </Button>
                  
                  <Button 
                    size="sm" 
                    variant="outline" 
                    onClick={() => deleteGame(game.id)}
                    className="border-red-600 text-red-400 hover:bg-red-600/20"
                  >
                    <Trash2 className="h-4 w-4" />
                  </Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
        
        {games.length === 0 && (
          <div className="text-center py-12">
            <div className="text-gray-400 mb-4">No games yet</div>
            <Button onClick={() => setIsCreateOpen(true)} className="bg-blue-600 hover:bg-blue-700">
              <Plus className="h-4 w-4 mr-2" />
              Create Your First Game
            </Button>
          </div>
        )}
      </div>
    </div>
  )
}