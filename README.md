<<<<<<< HEAD
# SWITCH-IT
Creating a Landing site for SwitchIT Pvt. Ltd.
=======
# Switch It - Smart Logistics Solutions

A professional landing site for Switch It Private Limited, built with the MERN stack (MongoDB, Express, React, Node.js).

## 🚀 Detailed Local Setup Instructions

Follow these steps to get the project running on your local machine from scratch.

### 1. Install Prerequisites

#### A. Install Node.js
- **Windows/macOS**: Download the "LTS" version from [nodejs.org](https://nodejs.org/).
- **Linux**: Use `nvm` (Node Version Manager) or your package manager:
  ```bash
  curl -o- https://raw.githubusercontent.com/nvm-sh/nvm/v0.39.7/install.sh | bash
  nvm install --lts
  ```
- Verify installation: `node -v` (should be 18+) and `npm -v`.

#### B. Install MongoDB
You can use a local installation or a free cloud instance (MongoDB Atlas).

**Option 1: MongoDB Atlas (Recommended for ease of use)**
1. Create a free account at [mongodb.com/atlas](https://www.mongodb.com/cloud/atlas).
2. Create a new Cluster (Free Tier).
3. Under "Database Access", create a user with a password.
4. Under "Network Access", allow access from your IP address.
5. Click "Connect" -> "Drivers" to get your Connection String.

**Option 2: Local MongoDB Community Edition**
- **Windows**: Download the MSI from [MongoDB Download Center](https://www.mongodb.com/try/download/community).
- **macOS**: Use Homebrew: `brew tap mongodb/brew && brew install mongodb-community`.
- **Linux**: Follow the [official installation guide](https://www.mongodb.com/docs/manual/administration/install-on-linux/).

### 2. Clone and Prepare the Project

```bash
# Clone the repository
git clone <your-repository-url>
cd switch-it-logistics

# Install project dependencies
npm install
```

### 3. Configure Environment Variables

Create a `.env` file in the root directory:

```env
PORT=3000
NODE_ENV=development
# Replace with your actual MongoDB URI
MONGODB_URI=mongodb+srv://<username>:<password>@cluster.mongodb.net/switchit?retryWrites=true&w=majority
```

### 4. Initialize the Database (Optional)

If your project requires initial data (seeds), you can create a seed script. Currently, the app uses the provided PDF data as static content, but you can extend `server.ts` to connect to MongoDB:

```typescript
// Example snippet to add to server.ts
import mongoose from 'mongoose';

const MONGODB_URI = process.env.MONGODB_URI || 'mongodb://localhost:27017/switchit';

mongoose.connect(MONGODB_URI)
  .then(() => console.log('Connected to MongoDB'))
  .catch(err => console.error('MongoDB connection error:', err));
```

### 5. Start the Development Server

This project uses a unified development environment where the Express backend and Vite frontend run together.

```bash
npm run dev
```

- **Frontend & Backend**: Both are accessible at `http://localhost:3000`.
- **API Health Check**: Visit `http://localhost:3000/api/health` to verify the backend is active.

### 6. Production Deployment

To prepare the app for production:

```bash
# 1. Build the frontend assets
npm run build

# 2. Start the production server
npm start
```

## 🛠 Tech Stack
- **Frontend**: React 19, Tailwind CSS 4, shadcn/ui, Framer Motion.
- **Backend**: Node.js, Express.
- **Database**: MongoDB (Ready for integration).
- **Build Tool**: Vite 6.
- **Language**: TypeScript.

## 📂 Project Structure
- `src/`: React frontend source code.
- `src/components/`: UI components (Navbar, Hero, etc.).
- `src/components/ui/`: shadcn/ui base components.
- `server.ts`: Express backend entry point with Vite middleware integration.
- `package.json`: Project scripts and dependencies.
>>>>>>> 705a9b1 (First Commit)
