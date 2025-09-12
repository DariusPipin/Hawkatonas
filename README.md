# Unified Achievement Platform

A comprehensive platform for tracking gaming achievements across multiple platforms including Steam, Xbox, Blizzard, and Riot Games.

## Features

- **Multi-Platform Support**: Track achievements from Steam, Xbox, Blizzard, and Riot Games
- **Meta-Trophy System**: Custom achievement system with bronze, silver, gold, and platinum tiers
- **Real-time Sync**: Automatic synchronization of achievements across platforms
- **Leaderboards**: Global and platform-specific leaderboards
- **Privacy Controls**: Granular privacy settings for user profiles
- **Social Features**: User comparison, sharing, and collections
- **REST API**: Comprehensive API for external integrations
- **TypeScript SDK**: Official SDK for easy integration
- **Modern Frontend**: React-based web application with real-time updates

## Architecture

### Backend
- **Node.js/TypeScript**: Modern server-side implementation
- **PostgreSQL**: Primary database with optimized schema
- **Redis**: Caching and session management
- **Bull Queue**: Priority-based job processing
- **WebSocket**: Real-time updates and notifications

### Frontend
- **React 18**: Modern React with hooks and context
- **TypeScript**: Full type safety
- **Tailwind CSS**: Utility-first styling
- **Framer Motion**: Smooth animations
- **React Query**: Server state management
- **Zustand**: Client state management

### SDK
- **TypeScript**: Fully typed SDK
- **Axios**: HTTP client with interceptors
- **EventEmitter**: Real-time event handling
- **WebSocket**: Live updates support

## Quick Start

### Prerequisites
- Node.js 18+
- PostgreSQL 15+
- Redis 7+
- Docker (optional)

### Installation

1. **Clone the repository**
   ```bash
   git clone <repository-url>
   cd unified-achievement-platform
   ```

2. **Install dependencies**
   ```bash
   npm install
   cd frontend && npm install
   cd ../sdk && npm install
   ```

3. **Set up environment variables**
   ```bash
   cp env.example .env
   # Edit .env with your configuration
   ```

4. **Set up the database**
   ```bash
   npm run migrate
   ```

5. **Start the development servers**
   ```bash
   npm run dev
   ```

This will start:
- API server on http://localhost:3000
- Frontend on http://localhost:3001
- Worker process for background tasks

## API Documentation

### Authentication

#### Register
```http
POST /api/auth/register
Content-Type: application/json

{
  "displayName": "username",
  "email": "user@example.com",
  "password": "password123",
  "privacy": "public"
}
```

#### Login
```http
POST /api/auth/login
Content-Type: application/json

{
  "email": "user@example.com",
  "password": "password123"
}
```

### Achievements

#### Get User Achievements
```http
GET /api/achievements?platform=steam&rarity=rare&page=1&limit=50
Authorization: Bearer <token>
```

#### Get Achievement Details
```http
GET /api/achievements/{achievementId}
Authorization: Bearer <token>
```

### Meta-Trophies

#### Get User Trophies
```http
GET /api/trophies?tier=gold&unlocked=true
Authorization: Bearer <token>
```

#### Trigger Trophy Evaluation
```http
POST /api/trophies/evaluate
Authorization: Bearer <token>

{
  "forceRefresh": true,
  "retroactive": false
}
```

### Leaderboards

#### Get Leaderboard
```http
GET /api/leaderboard?metric=total_achievements&scope=global&timeframe=all_time
```

#### Get User Position
```http
GET /api/leaderboard/position/{userId}?metric=total_achievements&scope=global
```

## SDK Usage

### Installation
```bash
npm install @achievement-platform/sdk
```

### Basic Usage
```typescript
import { AchievementPlatformSDK } from '@achievement-platform/sdk';

const sdk = new AchievementPlatformSDK({
  apiUrl: 'https://api.achievement-platform.com',
  apiKey: 'your-api-key'
});

// Login
const { user, tokens } = await sdk.login('user@example.com', 'password');

// Get achievements
const achievements = await sdk.getAchievements({
  platform: ['steam'],
  rarity: ['rare', 'very_rare'],
  page: 1,
  limit: 50
});

// Get leaderboard
const leaderboard = await sdk.getLeaderboard('total_achievements', {
  scope: 'global',
  timeframe: 'all_time'
});

// Real-time updates
const ws = sdk.connectWebSocket(user.id);
ws.on('message', (data) => {
  console.log('Real-time update:', data);
});
```

## Meta-Trophy System

The platform includes a sophisticated meta-trophy system that rewards users for various achievements across platforms.

### Trophy Tiers
- **Bronze**: 15 points - Basic achievements
- **Silver**: 30 points - Intermediate achievements  
- **Gold**: 90 points - Advanced achievements
- **Platinum**: 180 points - Master-level achievements

### Trophy Types
- **Count-based**: Achieve X number of specific achievements
- **Sequence-based**: Achieve goals over consecutive time periods
- **Threshold-based**: Reach specific statistical milestones
- **Custom**: JavaScript-based custom logic

### Example Trophy Rules
```json
{
  "type": "COUNT",
  "conditions": [
    {
      "type": "achievement",
      "operator": "rarity_below",
      "value": 10
    }
  ],
  "metadata": {
    "count": 25
  }
}
```

## Database Schema

The platform uses a comprehensive PostgreSQL schema with:
- User management and authentication
- Multi-platform account linking
- Achievement and game data
- Meta-trophy definitions and progress
- Leaderboard caching
- Sync history and analytics

## Deployment

### Docker Deployment
```bash
docker-compose up -d
```

### Manual Deployment
1. Build the application
   ```bash
   npm run build
   ```

2. Set up production environment variables
3. Run database migrations
4. Start the production servers
   ```bash
   npm start
   npm run start:worker
   ```

## Contributing

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Add tests
5. Submit a pull request

## License

MIT License - see LICENSE file for details

## Support

For support and questions:
- Create an issue on GitHub
- Join our Discord community
- Check the documentation wiki

## Roadmap

- [ ] Mobile app (React Native)
- [ ] Additional platform support (PlayStation, Nintendo)
- [ ] Advanced analytics and insights
- [ ] Community features and forums
- [ ] Achievement marketplace
- [ ] API rate limiting and monetization
- [ ] Advanced trophy editor
- [ ] Achievement sharing and collections
- [ ] Integration with streaming platforms
- [ ] Machine learning for achievement recommendations
