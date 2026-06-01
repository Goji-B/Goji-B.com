export interface MainActivity {
  slug: string;
  title: string;
}

export const mainActivities: MainActivity[] = [
  { slug: 'tic-tac-toe', title: 'Tic-Tac-Toe' },
  { slug: 'color-match-tap', title: 'Color Match Tap' },
  { slug: 'animal-memory-cards', title: 'Animal Memory Cards' },
  { slug: 'bubble-pop-abc', title: 'Bubble Pop ABC' },
  { slug: 'shape-sorter', title: 'Shape Sorter' },
  { slug: 'count-the-fruits', title: 'Count the Fruits' },
  { slug: 'simon-lights-mini', title: 'Simon Lights Mini' },
  { slug: 'find-the-odd-one', title: 'Find the Odd One' },
  { slug: 'trace-the-path', title: 'Trace the Path' },
  { slug: 'chess-kids', title: 'Chess for Kids' },
];

export function getMainActivity(slug: string): MainActivity | undefined {
  return mainActivities.find((a) => a.slug === slug);
}
