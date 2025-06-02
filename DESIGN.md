# Gamia - AI-Powered 2D Game Creation Platform

## Vision
Gamia is a revolutionary platform that democratizes 2D game development through AI. Users describe their game ideas in natural language, and Gamia generates complete Phaser.js games that can be played, modified, published, and exported.

## Core Features

### 1. User Authentication
- Email/password registration and login
- User profiles with created games
- Secure session management

### 2. AI Game Generation
- Natural language game description input
- AI-powered Phaser.js code generation
- Real-time game preview
- Asset integration support

### 3. Game Management
- Play games in embedded iframe
- Edit generated code directly
- Upload custom assets (images, audio)
- Publish/unpublish games
- Export games as ZIP files (HTML/JS)

### 4. User Interface
- Dashboard with user's games
- Game creation wizard
- Code editor with syntax highlighting
- Asset manager
- Game preview window

## Technical Architecture

### Frontend (React + Vite)
- Authentication system
- Game creation interface
- Code editor (Monaco/CodeMirror)
- File management system
- Phaser game iframe integration

### Backend (Supabase)
- User authentication
- Game storage (code, assets, metadata)
- File storage for assets
- AI integration for code generation

### AI Integration
- OpenAI GPT for game code generation
- Phaser.js template system
- Asset recommendation engine

## User Journey

1. **Sign Up/Login** → User creates account
2. **Dashboard** → View existing games, create new ones
3. **Game Creation** → Describe game, AI generates code
4. **Preview/Edit** → Test game, modify code, upload assets
5. **Publish** → Make game public
6. **Export** → Download game files

## Design Language

- **Colors**: Dark theme with electric blue (#0066FF) accents
- **Typography**: Inter for UI, Monaco for code
- **Layout**: Grid-based with consistent spacing
- **Animations**: Smooth transitions, hover effects
- **Style**: Modern, clean, game-focused aesthetic