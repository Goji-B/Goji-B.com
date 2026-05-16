import type { GettingReadyCategory } from './gettingReadyGames';

export interface HubSection {
  category: GettingReadyCategory | 'mindPower';
  title: string;
  cardClass?: string;
  titleClass?: string;
}

/** Order of sections on the Getting Ready hub */
export const gettingReadyHubSections: HubSection[] = [
  { category: 'mindPower', title: 'Mind builders', cardClass: 'gr-card--featured' },
  { category: 'indoor', title: 'Indoor play' },
  { category: 'outdoor', title: 'Outdoor brain games', cardClass: 'gr-card--outdoor', titleClass: 'gr-section-title--outdoor' },
  { category: 'car', title: 'Car & travel', cardClass: 'gr-card--car', titleClass: 'gr-section-title--car' },
  { category: 'travel', title: 'Plane, train & waiting', cardClass: 'gr-card--travel', titleClass: 'gr-section-title--travel' },
  { category: 'paper', title: 'Paper & pencil', cardClass: 'gr-card--paper', titleClass: 'gr-section-title--paper' },
  { category: 'nfc', title: 'Gojiberry NFC tags', cardClass: 'gr-card--nfc', titleClass: 'gr-section-title--nfc' },
  { category: 'party', title: 'Party & social', cardClass: 'gr-card--party', titleClass: 'gr-section-title--party' },
  { category: 'calm', title: 'Calm & wind-down', cardClass: 'gr-card--calm', titleClass: 'gr-section-title--calm' },
  { category: 'move', title: 'Move & active', cardClass: 'gr-card--move', titleClass: 'gr-section-title--move' },
  { category: 'words', title: 'Words & language', cardClass: 'gr-card--words', titleClass: 'gr-section-title--words' },
  { category: 'logic', title: 'Logic & puzzles', cardClass: 'gr-card--logic', titleClass: 'gr-section-title--logic' },
  { category: 'math', title: 'Math games', cardClass: 'gr-card--math', titleClass: 'gr-section-title--math' },
  { category: 'attention', title: 'Attention & focus', cardClass: 'gr-card--attention', titleClass: 'gr-section-title--attention' },
  { category: 'teamwork', title: 'Teamwork', cardClass: 'gr-card--teamwork', titleClass: 'gr-section-title--teamwork' },
  { category: 'creativity', title: 'Creativity & art', cardClass: 'gr-card--creativity', titleClass: 'gr-section-title--creativity' },
  { category: 'seasonal', title: 'Seasons & holidays', cardClass: 'gr-card--seasonal', titleClass: 'gr-section-title--seasonal' },
];
