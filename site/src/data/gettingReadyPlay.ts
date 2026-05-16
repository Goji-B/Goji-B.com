export type PlayMode = 'prompts' | 'checklist' | 'pick-two' | 'counter' | 'spy';

export interface PlayConfig {
  mode: PlayMode;
  heading: string;
  prompts?: string[];
  items?: string[];
  pairs?: [string, string][];
  spyHints?: string[];
  counterLabel?: string;
  doneLabel?: string;
  nextLabel?: string;
}

export const playConfigBySlug: Record<string, PlayConfig> = {
  /* —— Outdoor (10) —— */
  'nature-scavenger': {
    mode: 'checklist',
    heading: 'Find outside',
    items: [
      'Something green',
      'A smooth rock',
      'A leaf',
      'Something that crawls',
      'A flower or bud',
      'Something rough',
      'A feather or seed',
      'Something round',
    ],
    doneLabel: 'Found it!',
  },
  'cloud-shapes': {
    mode: 'prompts',
    heading: 'Look at the sky',
    prompts: [
      'Find a cloud that looks like an animal.',
      'Find a cloud that looks like food.',
      'Point to the biggest cloud.',
      'Find a cloud that looks like a face.',
      'Watch one cloud for 30 seconds. Does it change?',
    ],
    nextLabel: 'Next cloud',
  },
  'outdoor-sounds': {
    mode: 'prompts',
    heading: 'Listen outside',
    prompts: [
      'Close your eyes. Do you hear birds?',
      'Listen for wind in trees.',
      'Can you hear a car or people far away?',
      'Cup your hands to your ears. What is louder now?',
      'Name three sounds you hear right now.',
    ],
    nextLabel: 'Next listen',
  },
  'leaf-hunt': {
    mode: 'checklist',
    heading: 'Leaf hunt',
    items: [
      'A small leaf',
      'A big leaf',
      'A yellow or brown leaf',
      'Two leaves that look alike',
      'A leaf with jagged edges',
      'A leaf with a long stem',
    ],
    doneLabel: 'Got one!',
  },
  'compass-walk': {
    mode: 'prompts',
    heading: 'Direction walk',
    prompts: [
      'Take 10 steps toward something tall.',
      'Walk to the nearest tree and touch the bark.',
      'Find something softer than a rock.',
      'Walk in a circle, then stop and look around.',
      'Point north, south, east, and west if you can.',
    ],
    nextLabel: 'Next step',
  },
  'park-simon': {
    mode: 'prompts',
    heading: 'Outdoor Simon',
    prompts: [
      'Simon says: hop on one foot three times.',
      'Simon says: touch the ground.',
      'Spin around once! (No Simon says — skip!)',
      'Simon says: flap your arms like a bird.',
      'Simon says: find something blue.',
      'Jump twice! (Skip if Simon did not say.)',
      'Simon says: stand very still for five seconds.',
    ],
    nextLabel: 'Next command',
  },
  'balance-line': {
    mode: 'prompts',
    heading: 'Balance challenge',
    prompts: [
      'Walk heel-to-toe on a straight line for 5 steps.',
      'Stand on one foot. Count to 10.',
      'Walk backward two steps safely.',
      'Balance a leaf on your hand. How far can you walk?',
      'Stand on the other foot. Count to 10.',
    ],
    nextLabel: 'Done — next',
  },
  'rock-stack': {
    mode: 'counter',
    heading: 'Rock stack',
    counterLabel: 'Rocks stacked',
    prompts: ['Stack rocks as high as you can. Tap +1 for each rock.'],
  },
  'quiet-bug-watch': {
    mode: 'prompts',
    heading: 'Quiet watch',
    prompts: [
      'Sit quietly for one minute. Watch the ground.',
      'Did you see an ant, bug, or worm?',
      'Look under a leaf. What is there?',
      'Stay quiet. How many birds can you hear?',
      'Draw or describe what you saw in the dirt.',
    ],
    nextLabel: 'Next watch',
  },
  'park-alphabet': {
    mode: 'checklist',
    heading: 'Alphabet hunt',
    items: [
      'Find letter A on a sign',
      'Find letter B',
      'Find letter C',
      'Find letter D',
      'Find letter E',
      'Find any letter on a car or plate',
    ],
    doneLabel: 'Spotted!',
  },

  /* —— Car & travel (10) —— */
  'road-i-spy': {
    mode: 'spy',
    heading: 'I spy on the road',
    spyHints: [
      'something red',
      'something square',
      'something that moves',
      'a letter on a sign',
      'something green',
      'something with wheels',
      'something yellow',
      'a number',
    ],
    nextLabel: 'New spy',
  },
  'license-plate': {
    mode: 'checklist',
    heading: 'Plate spotter',
    items: [
      'A plate with the number 1',
      'A plate with the number 7',
      'A white car',
      'A blue or red car',
      'A truck or van',
      'A plate from another town (if you can tell)',
    ],
    doneLabel: 'Spotted!',
  },
  'sign-alphabet': {
    mode: 'checklist',
    heading: 'Sign alphabet',
    items: [
      'Letter A on a sign',
      'Letter M',
      'Letter S',
      'Letter T',
      'A stop sign',
      'A speed limit number',
    ],
    doneLabel: 'Found!',
  },
  'count-color-cars': {
    mode: 'counter',
    heading: 'Count cars',
    counterLabel: 'Cars counted',
    prompts: ['Pick a color. Count cars of that color. Tap +1 each time you see one.'],
  },
  'car-story': {
    mode: 'prompts',
    heading: 'Road story',
    prompts: [
      'We drove past a tall tree…',
      'Suddenly we saw a funny sign…',
      'A bird flew over the road…',
      'We stopped at a red light and…',
      'Far away there was a mountain…',
      'The end! Make up your own next line.',
    ],
    nextLabel: 'Next line',
  },
  'quiet-mouse': {
    mode: 'prompts',
    heading: 'Quiet mouse',
    prompts: [
      'Quiet mouse for 30 seconds — no talking!',
      'Whisper one thing you see outside.',
      'Quiet mouse again. Tap when you stayed quiet.',
      'Hum a song very softly.',
      'Quiet mouse until the next stoplight or corner.',
    ],
    nextLabel: 'We did it!',
  },
  'would-you-rather': {
    mode: 'pick-two',
    heading: 'Would you rather?',
    pairs: [
      ['Fly like a bird', 'Swim like a fish'],
      ['Live in a castle', 'Live in a spaceship'],
      ['Have a pet dragon', 'Have a pet robot'],
      ['Eat only fruit', 'Eat only noodles'],
      ['Ride a horse', 'Ride a dolphin'],
      ['Be very tall', 'Be very fast'],
    ],
  },
  'car-rhymes': {
    mode: 'prompts',
    heading: 'Rhyme time',
    prompts: [
      'Say a word. Everyone finds a rhyme!',
      'Rhyme with cat…',
      'Rhyme with sun…',
      'Rhyme with car…',
      'Rhyme with tree…',
      'Make up a silly rhyme about the road.',
    ],
    nextLabel: 'Next word',
  },
  'road-math': {
    mode: 'prompts',
    heading: 'Road math',
    prompts: [
      'You see 2 trees and 1 sign. How many things is that?',
      'Count to 20 together slowly.',
      'If we drive 5 more minutes, what minute is it?',
      'Find the number 3 on a sign.',
      'Add your ages together out loud.',
    ],
    nextLabel: 'Next puzzle',
  },
  'farm-spotter': {
    mode: 'checklist',
    heading: 'Farm spotter',
    items: [
      'A cow or horse',
      'A field of grass',
      'A barn or silo',
      'A bird on a wire',
      'A tractor or farm machine',
      'A fence along the road',
    ],
    doneLabel: 'I see it!',
  },
};

export function getPlayConfig(slug: string): PlayConfig | undefined {
  return playConfigBySlug[slug];
}

export function usesPlayKit(slug: string): boolean {
  return slug in playConfigBySlug;
}
