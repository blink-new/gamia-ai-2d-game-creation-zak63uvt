# Gamia - AI-Powered 2D Game Creation Platform

## 1. Introduction

Gamia is a web application that empowers users to create 2D games using AI. Users can describe their desired game, and Gamia, with the help of AI and Phaser.js, will generate the game code. Users can then play, publish, modify, and export their games.

## 2. Design Vision

Gamia aims to provide a sleek, intuitive, and inspiring platform for game creation. The user experience should be seamless, making game development accessible even to those without prior coding knowledge. The AI should act as a creative partner, guiding and assisting the user throughout the process.

**Visual Style:**
*   **Overall Feel:** Modern, clean, professional yet playful. "Vercel/Framer meets a friendly game editor."
*   **Color Palette:** Primarily dark-themed to reduce eye strain and make game visuals pop. Accent colors will be vibrant and energetic (e.g., electric blue, neon green, or a warm orange) for calls to action and highlighting key elements.
*   **Typography:** Clear, readable sans-serif fonts. A slightly more stylized font for headings and branding elements.
*   **Layout:** Grid-based, spacious, with clear visual hierarchy. Responsive design is crucial for accessibility across devices.
*   **Animations & Microinteractions:** Subtle animations to enhance user experience, provide feedback, and make the interface feel alive (e.g., button hover effects, smooth transitions, loading indicators).

## 3. Core Features (MVP Focus)

The initial development will focus on delivering a Minimum Viable Product (MVP) that includes the following core features:

1.  **User Authentication:**
    *   Sign up with email and password.
    *   Log in with email and password.
    *   (Future: Password reset, social logins).
2.  **Game Project Management:**
    *   Create a new game project by providing a textual description.
    *   View a list of created game projects on a personal dashboard.
    *   View details of a specific game project.
3.  **AI Game Generation (Interface & Placeholder):**
    *   An interface for users to input their game description.
    *   For the MVP, actual AI game code generation will be simulated or use a pre-defined simple game. The focus is on building the UI and flow.
    *   (Future: Integration with an AI model to parse descriptions and generate Phaser.js code snippets).
4.  **Game Viewing Area (Placeholder):**
    *   A dedicated area to "play" or view the generated game.
    *   For MVP, this will display the game's description and mock buttons for "Play," "Edit Code," "Publish," "Download."
    *   (Future: Embed the actual Phaser game, provide a code editor, enable publishing, and implement game export functionality).
5.  **User Profile:**
    *   A simple page displaying user information (e.g., email).
    *   (Future: More detailed profile settings, statistics).

## 4. Pages & Screens (MVP)

*   **`/` (Landing Page):**
    *   **Description:** Introduces Gamia, highlights key benefits (AI game creation, ease of use).
    *   **Elements:** Hero section with a catchy tagline, brief feature overview, call-to-action buttons for "Sign Up" and "Log In".
*   **`/signup` (Sign Up Page):**
    *   **Description:** Allows new users to create an account.
    *   **Elements:** Form with fields for email and password, confirm password. Link to Log In page.
*   **`/login` (Log In Page):**
    *   **Description:** Allows existing users to log in.
    *   **Elements:** Form with fields for email and password. Link to Sign Up page. (Future: "Forgot Password?" link).
*   **`/dashboard` (User Dashboard / My Games):**
    *   **Description:** Main hub for authenticated users. Displays a list of their game projects.
    *   **Elements:** Grid or list of game cards (each showing game title, a thumbnail/icon placeholder, and creation date). "Create New Game" button. Navigation to profile/settings.
*   **`/create-game` (Create New Game Page):**
    *   **Description:** Interface for users to describe the game they want to create.
    *   **Elements:** Large text area for game description. Input field for game title. "Generate Game" button. Tips or examples for writing good descriptions.
*   **`/game/:gameId` (Game View/Edit Page - Placeholder for MVP):**
    *   **Description:** Displays information about a specific game and provides actions.
    *   **Elements (MVP):**
        *   Game Title.
        *   Game Description (as entered by the user).
        *   Placeholder for the game canvas/preview.
        *   Mock buttons: "Play Game (Coming Soon)", "Edit Code (Coming Soon)", "Publish (Coming Soon)", "Download .zip (Coming Soon)".
    *   **Elements (Future):**
        *   Embedded Phaser game.
        *   Integrated code editor (e.g., Monaco Editor) to view/modify HTML, JS, and Phaser code.
        *   Asset manager (upload custom sprites, sounds).
        *   AI interaction panel (e.g., "Make enemies faster", "Add a scoring system").
        *   Version history for game code.
*   **`/profile` (User Profile Page - Minimal for MVP):**
    *   **Description:** Basic user information.
    *   **Elements:** Display user's email. Logout button. (Future: Edit profile details, manage subscription if any).

## 5. User Flow (MVP)

1.  **New User:**
    *   Lands on Landing Page -> Clicks "Sign Up".
    *   Fills Sign Up form -> Account created -> Redirected to Dashboard.
2.  **Existing User:**
    *   Lands on Landing Page -> Clicks "Log In".
    *   Fills Log In form -> Logged in -> Redirected to Dashboard.
3.  **Game Creation:**
    *   From Dashboard -> Clicks "Create New Game".
    *   Fills game title and description on Create Game Page -> Clicks "Generate Game".
    *   (MVP: Game "metadata" is saved) -> Redirected to the Game View page for the new game, or back to Dashboard where the new game is listed.
4.  **Viewing a Game:**
    *   From Dashboard -> Clicks on a game card.
    *   Redirected to Game View Page for that specific game.

## 6. Technology Stack

*   **Frontend:** Vite + React (TypeScript)
*   **Styling:** Tailwind CSS
*   **Components:** ShadCN UI (or similar component library for rapid UI development)
*   **Icons:** Lucide React
*   **Routing:** React Router DOM
*   **Backend (Authentication & Database):** Supabase
*   **AI Integration (Future):** OpenAI API (or other suitable LLM) for parsing game descriptions and generating code logic.
*   **Game Engine (for generated games):** Phaser.js
*   **Code Generation (Future):** AI model outputs JavaScript code compatible with a Phaser template.
*   **Game Export:** JSZip or similar library to package HTML, JS, and assets into a downloadable zip file.

## 7. Future Considerations (Post-MVP)

*   **Advanced AI Code Generation:** More sophisticated AI models, ability to understand complex game mechanics, generate diverse game types.
*   **In-App Code Editor:** Allow users to directly modify the generated HTML/JavaScript/Phaser code.
*   **Asset Management:** Allow users to upload their own sprites, sound effects, and music.
*   **AI-Assisted Asset Generation:** Integrate AI tools for generating basic sprites or sound effects.
*   **Game Publishing:** Allow users to publish their games to a public Gamia gallery or get a shareable link.
*   **Community Features:** Game showcases, user ratings, comments.
*   **Versioning:** Save different versions of a game.
*   **Monetization:** Subscription tiers for advanced features or more AI generation credits.
*   **Export Options:** More export formats or platform-specific builds (e.g., Electron for desktop).
*   **Tutorials & Documentation:** Help users learn how to best describe games to the AI and use Gamia's features.

This document will be updated as the project evolves.
