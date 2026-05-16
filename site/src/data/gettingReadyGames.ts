import type { MusicTheme } from '../lib/activityAudio';

export interface GettingReadyGame {
  slug: string;
  title: string;
  emoji: string;
  tagline: string;
  howTo: string;
  skills: string[];
  mindPower?: boolean;
  musicTheme: MusicTheme;
}

export const gettingReadyGames: GettingReadyGame[] = [
  {
    slug: 'memory-card-matching',
    title: 'Memory Card Matching',
    emoji: '🃏',
    tagline: 'Flip cards and find matching pairs.',
    howTo: 'Cards start face down. Tap two cards. If they match, they stay open. Match every pair to win.',
    skills: ['Memory', 'Concentration', 'Observation'],
    mindPower: true,
    musicTheme: 'musicbox',
  },
  {
    slug: 'chess-kids',
    title: 'Chess for Kids',
    emoji: '♟️',
    tagline: 'Mini pawn battle on a small board.',
    howTo: 'Tap your pawn, then tap a square one step forward or diagonally to capture. Reach the far row or capture all enemy pawns to win.',
    skills: ['Logic', 'Planning', 'Patience'],
    mindPower: true,
    musicTheme: 'acoustic',
  },
  {
    slug: 'twenty-questions',
    title: '20 Questions',
    emoji: '❓',
    tagline: 'Guess the secret thing with yes or no.',
    howTo: 'One player picks a secret (shown on screen for the guesser to hide). The other asks yes or no questions. Try to guess before 20 questions run out.',
    skills: ['Reasoning', 'Categories', 'Vocabulary'],
    musicTheme: 'quirky',
  },
  {
    slug: 'story-building',
    title: 'Story Building',
    emoji: '📖',
    tagline: 'Take turns adding one sentence each.',
    howTo: 'Pass the phone. Tap a story starter or add your own idea. Build a silly tale together.',
    skills: ['Imagination', 'Language', 'Listening'],
    mindPower: true,
    musicTheme: 'dreamy',
  },
  {
    slug: 'tangram-shapes',
    title: 'Tangram Shapes',
    emoji: '🧩',
    tagline: 'Pick the shapes that build the picture.',
    howTo: 'Look at the silhouette goal. Tap the set of shapes that fits. New challenge each round.',
    skills: ['Spatial reasoning', 'Creativity'],
    mindPower: true,
    musicTheme: 'bouncy',
  },
  {
    slug: 'treasure-hunt',
    title: 'Treasure Hunt',
    emoji: '🗺️',
    tagline: 'Follow clues to find the treasure.',
    howTo: 'Read each clue out loud. Hunt at home, then tap Found it! for the next clue. Last clue leads to the treasure spot.',
    skills: ['Logic', 'Sequencing', 'Teamwork'],
    mindPower: true,
    musicTheme: 'explore',
  },
  {
    slug: 'simon-says',
    title: 'Simon Says',
    emoji: '🗣️',
    tagline: 'Listen carefully — only move when Simon says.',
    howTo: 'Read the action. If it says Simon says, tap Do it. If not, tap Skip. Wrong tap ends the streak.',
    skills: ['Attention', 'Self-control', 'Listening'],
    musicTheme: 'playful',
  },
  {
    slug: 'building-challenges',
    title: 'Building Challenges',
    emoji: '🧱',
    tagline: 'LEGO and block missions to try together.',
    howTo: 'Read the challenge, build with real blocks, then tap Done and draw another mission.',
    skills: ['Engineering thinking', 'Cooperation'],
    musicTheme: 'marimba',
  },
  {
    slug: 'word-chain',
    title: 'Word Chain',
    emoji: '🔗',
    tagline: 'Each word starts with the last letter.',
    howTo: 'Read the word on screen. Pick a next word that starts with its last letter. Keep the chain going.',
    skills: ['Vocabulary', 'Memory', 'Speed'],
    musicTheme: 'electronic',
  },
];

export function getGettingReadyGame(slug: string): GettingReadyGame | undefined {
  return gettingReadyGames.find((g) => g.slug === slug);
}
