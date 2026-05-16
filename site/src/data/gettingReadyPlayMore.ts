import type { PlayConfig } from './gettingReadyPlay';

export const morePlayConfigBySlug: Record<string, PlayConfig> = {
  /* —— Paper (8) —— */
  'dots-and-boxes': {
    mode: 'prompts',
    heading: 'Dots & boxes tips',
    prompts: [
      'Draw a 4×4 grid of dots on paper.',
      'Take turns adding one line only.',
      'When you close a box, put your initial inside.',
      'The player with the most boxes wins!',
    ],
    nextLabel: 'Next tip',
  },
  'paper-hangman': {
    mode: 'prompts',
    heading: 'Hangman words',
    prompts: [
      'Pick a short word: CAT',
      'Pick a medium word: SUNNY',
      'Pick a food word: APPLE',
      'Pick an animal: FROG',
      'Make up your own secret word!',
    ],
    nextLabel: 'New word',
  },
  'draw-prompts': {
    mode: 'prompts',
    heading: 'Draw this',
    prompts: [
      'A robot eating pizza',
      'A fish wearing a hat',
      'Your house with legs',
      'A tree that is also an umbrella',
      'Your favorite animal as a superhero',
    ],
    nextLabel: 'Next prompt',
  },
  'comic-strip': {
    mode: 'prompts',
    heading: 'Comic panels',
    prompts: [
      'Panel 1: A character wakes up.',
      'Panel 2: Something silly happens.',
      'Panel 3: A happy ending.',
      'Add a title to your comic!',
    ],
    nextLabel: 'Next panel',
  },
  'paper-maze': {
    mode: 'prompts',
    heading: 'Maze mission',
    prompts: [
      'Draw a simple maze with one path.',
      'Mark START and FINISH.',
      'Try the path with your finger first.',
      'Race a friend — who is faster?',
    ],
    nextLabel: 'Next step',
  },
  'paper-pictionary': {
    mode: 'prompts',
    heading: 'Draw these words',
    prompts: ['House', 'Dog', 'Rainbow', 'Bicycle', 'Birthday cake', 'Rocket'],
    nextLabel: 'Next word',
  },
  'simple-paper-fold': {
    mode: 'prompts',
    heading: 'Fold steps',
    prompts: [
      'Start with a square sheet.',
      'Fold in half once. Crease sharp.',
      'Fold corners to the middle.',
      'Decorate your shape with crayons!',
    ],
    nextLabel: 'Next fold',
  },
  'tally-chart': {
    mode: 'checklist',
    heading: 'What will you tally?',
    items: [
      'Red things you see',
      'Birds or dogs',
      'Cars going by',
      'People with hats',
      'Something square',
      'Something round',
    ],
    doneLabel: 'Marked one!',
  },

  /* —— NFC (8) —— */
  'nfc-morning': {
    mode: 'checklist',
    heading: 'After you tap — morning',
    items: [
      'Stretch arms up high',
      'Take three deep breaths',
      'Say good morning to someone',
      'Look out a window',
      'Drink a sip of water',
    ],
    doneLabel: 'Done!',
  },
  'nfc-snack-time': {
    mode: 'checklist',
    heading: 'After you tap — snack',
    items: [
      'Wash hands with soap',
      'Pick a healthy snack',
      'Sit at the table',
      'Say thank you',
      'Put dishes in the sink',
    ],
    doneLabel: 'Done!',
  },
  'nfc-play-outside': {
    mode: 'prompts',
    heading: 'After you tap — outside',
    prompts: [
      'Put on shoes if you need them.',
      'Step outside for five minutes.',
      'Find something green.',
      'Take three big breaths of fresh air.',
    ],
    nextLabel: 'Next',
  },
  'nfc-quiet-time': {
    mode: 'prompts',
    heading: 'After you tap — quiet',
    prompts: [
      'Pick a book and read two pages.',
      'Color quietly for five minutes.',
      'Listen to soft music.',
      'Lie down and rest your eyes.',
    ],
    nextLabel: 'Next calm',
  },
  'nfc-bedtime': {
    mode: 'checklist',
    heading: 'After you tap — bedtime',
    items: [
      'Put on pajamas',
      'Brush teeth',
      'One calm story or song',
      'Lights dim',
      'Whisper goodnight',
    ],
    doneLabel: 'Done!',
  },
  'nfc-birthday': {
    mode: 'prompts',
    heading: 'After you tap — birthday',
    prompts: [
      'Do a happy dance for ten seconds.',
      'Make a wish and blow pretend candles.',
      'Tell someone why they are special.',
      'Draw a birthday card for a friend.',
    ],
    nextLabel: 'Next fun',
  },
  'nfc-chore-helper': {
    mode: 'checklist',
    heading: 'After you tap — chore',
    items: [
      'Put three toys in the bin',
      'Stack books neatly',
      'Wipe a small table spot',
      'Match three pairs of socks',
      'Water one plant',
    ],
    doneLabel: 'Job done!',
  },
  'nfc-hug-highfive': {
    mode: 'pick-two',
    heading: 'After you tap — pick one',
    pairs: [
      ['Big hug', 'High-five'],
      ['Kind words', 'Helpful hand'],
      ['Draw a heart', 'Say thank you'],
    ],
  },

  /* —— Travel (8) —— */
  'travel-i-spy': {
    mode: 'spy',
    heading: 'I spy while waiting',
    spyHints: [
      'something blue',
      'something with wheels',
      'a number',
      'something square',
      'someone wearing a hat',
      'something that moves',
    ],
    nextLabel: 'New spy',
  },
  'seat-stretch': {
    mode: 'prompts',
    heading: 'Seat stretches',
    prompts: [
      'Reach arms up to the sky.',
      'Roll shoulders backward five times.',
      'Point toes and flex feet.',
      'Gently turn head left and right.',
      'Hug knees if there is room.',
    ],
    nextLabel: 'Next stretch',
  },
  'quiet-owl': {
    mode: 'prompts',
    heading: 'Quiet owl',
    prompts: [
      'Owl eyes wide — look around silently.',
      'Quiet owl for 20 seconds.',
      'Whisper one thing you see.',
      'Quiet owl until the next prompt.',
    ],
    nextLabel: 'We did it!',
  },
  'cloud-watch-travel': {
    mode: 'prompts',
    heading: 'Cloud watch',
    prompts: [
      'Find a cloud shaped like an animal.',
      'Find the fluffiest cloud.',
      'Watch one cloud for 30 seconds.',
      'What color is the sky today?',
    ],
    nextLabel: 'Next cloud',
  },
  'count-doors': {
    mode: 'counter',
    heading: 'Count doors',
    counterLabel: 'Doors passed',
    prompts: ['Tap +1 each time you pass a door, gate, or archway.'],
  },
  'seat-alphabet': {
    mode: 'checklist',
    heading: 'Find these letters',
    items: ['Letter A', 'Letter B', 'Letter C', 'Letter M', 'Letter S', 'Letter T'],
    doneLabel: 'Spotted!',
  },
  'pass-the-story-travel': {
    mode: 'prompts',
    heading: 'Story starters',
    prompts: [
      'We waited so long that a friendly pigeon…',
      'The train whistle went toot and then…',
      'I looked out the window and saw…',
      'Suddenly the seat felt like a boat because…',
      'The best part of the trip was when…',
    ],
    nextLabel: 'Next line',
  },
  'arrival-bingo': {
    mode: 'checklist',
    heading: 'Arrival bingo',
    items: [
      'A sign with an arrow',
      'Someone with a suitcase',
      'A clock',
      'Stairs or an escalator',
      'A map or screen',
      'Your stop name or number',
    ],
    doneLabel: 'Got it!',
  },

  /* —— Party (8) —— */
  'party-charades': {
    mode: 'prompts',
    heading: 'Act these out',
    prompts: ['Brushing teeth', 'Riding a bike', 'Eating soup', 'Being a penguin', 'Opening a present', 'Sleeping'],
    nextLabel: 'Next charade',
  },
  'whose-turn': {
    mode: 'pick-two',
    heading: 'Pick fairly',
    pairs: [
      ['Youngest goes first', 'Oldest goes first'],
      ['Shortest hair first', 'Longest hair first'],
      ['Whoever smiled last', 'Rock paper scissors'],
    ],
  },
  'laugh-challenge': {
    mode: 'prompts',
    heading: 'Try not to laugh',
    prompts: [
      'Stare at a friend with a serious face.',
      'Say “pickle” in a silly voice.',
      'Pretend you are a floppy noodle.',
      'Whisper a joke — no loud laughs!',
    ],
    nextLabel: 'Next silly',
  },
  'mirror-faces': {
    mode: 'prompts',
    heading: 'Mirror faces',
    prompts: [
      'Surprised face!',
      'Silly tongue face.',
      'Sleepy face.',
      'Happy face — huge smile!',
      'Pretend to be a lion.',
    ],
    nextLabel: 'Next face',
  },
  'animal-walk-parade': {
    mode: 'prompts',
    heading: 'Animal walks',
    prompts: [
      'Bear walk on hands and feet.',
      'Crab walk sideways.',
      'Frog hops — small and safe.',
      'Duck waddle in a line.',
    ],
    nextLabel: 'Next animal',
  },
  'freeze-dance-party': {
    mode: 'prompts',
    heading: 'Freeze dance',
    prompts: [
      'DANCE! Move your whole body.',
      'FREEZE! Statue pose.',
      'DANCE! Twirl if you have space.',
      'FREEZE! One foot up.',
      'DANCE! Silly arms only.',
      'FREEZE! Hold still 5 seconds.',
    ],
    nextLabel: 'Next round',
  },
  'compliment-circle': {
    mode: 'prompts',
    heading: 'Kind words',
    prompts: [
      'Say something you like about their smile.',
      'Say something they are good at.',
      'Say thank you for something they did.',
      'Say what makes them a good friend.',
    ],
    nextLabel: 'Next compliment',
  },
  'silly-walk': {
    mode: 'prompts',
    heading: 'Silly walks',
    prompts: [
      'Walk like you are on the moon.',
      'Walk with knees super high.',
      'Walk backward three steps safely.',
      'Walk like a robot beep-boop.',
    ],
    nextLabel: 'Next walk',
  },

  /* —— Calm (8) —— */
  'belly-breathing': {
    mode: 'prompts',
    heading: 'Breathe slow',
    prompts: [
      'Breathe in for 3… feel your belly rise.',
      'Breathe out for 4… soft and slow.',
      'Do five belly breaths together.',
      'Notice how calm your body feels.',
    ],
    nextLabel: 'Next breath',
  },
  'slow-count-calm': {
    mode: 'prompts',
    heading: 'Slow count',
    prompts: [
      'Count from 1 to 5 — very slow.',
      'Count from 5 down to 1.',
      'Count to 10 on whisper voice.',
      'Count by twos to ten: 2, 4, 6…',
    ],
    nextLabel: 'Next count',
  },
  'soft-hum': {
    mode: 'prompts',
    heading: 'Hum together',
    prompts: [
      'Hum one note: mmmmmm.',
      'Hum up then down like a slide.',
      'Hum your favorite song’s first line.',
      'Hum quietly until you feel calm.',
    ],
    nextLabel: 'Next hum',
  },
  'imagine-stars': {
    mode: 'prompts',
    heading: 'Star imagination',
    prompts: [
      'Picture a dark sky full of stars.',
      'Connect dots to make a constellation.',
      'Picture a slow shooting star.',
      'Make a wish on one star.',
    ],
    nextLabel: 'Next star',
  },
  'cloud-breath': {
    mode: 'prompts',
    heading: 'Cloud breath',
    prompts: [
      'Breathe in cool air.',
      'Breathe out like fog on a window.',
      'Pretend your breath is a white cloud.',
      'Do four cloud breaths together.',
    ],
    nextLabel: 'Next breath',
  },
  'cat-stretch-calm': {
    mode: 'prompts',
    heading: 'Cat stretch',
    prompts: [
      'Arch back up like a scared cat — gentle.',
      'Dip belly down like a sleepy cat.',
      'Stretch one arm long, then the other.',
      'Purr softly if you want to!',
    ],
    nextLabel: 'Next stretch',
  },
  'gratitude-moment': {
    mode: 'prompts',
    heading: 'Thankful for…',
    prompts: [
      'One person you are thankful for.',
      'One food you like.',
      'One place that feels safe.',
      'One fun thing from today.',
    ],
    nextLabel: 'Next thanks',
  },
  'goodnight-wish': {
    mode: 'prompts',
    heading: 'Goodnight',
    prompts: [
      'Whisper one thing you liked today.',
      'Wish sweet dreams to someone.',
      'Name one cozy thing in your room.',
      'Say goodnight in a soft voice.',
    ],
    nextLabel: 'Sleepy next',
  },

  /* —— Move (8) —— */
  'jumping-jacks-kids': {
    mode: 'counter',
    heading: 'Jumping jacks',
    counterLabel: 'Jacks done',
    prompts: ['Do ten jumping jacks. Tap +1 for each set of ten.'],
  },
  'balance-beam-home': {
    mode: 'prompts',
    heading: 'Balance line',
    prompts: [
      'Walk heel-to-toe five steps.',
      'Walk backward two safe steps.',
      'Stand on one foot — count to 8.',
      'Switch feet. Count to 8 again.',
    ],
    nextLabel: 'Next try',
  },
  'animal-walks-move': {
    mode: 'prompts',
    heading: 'Animal moves',
    prompts: [
      'Bear crawl across the room.',
      'Bunny hops — soft landing.',
      'Snake slither on the floor.',
      'Elephant stomp — slow and heavy.',
    ],
    nextLabel: 'Next animal',
  },
  'spin-and-stop': {
    mode: 'prompts',
    heading: 'Spin & stop',
    prompts: [
      'Spin slowly two times.',
      'STOP! Freeze like a statue.',
      'Spin the other way once.',
      'STOP! Balance for five counts.',
    ],
    nextLabel: 'Again',
  },
  'reach-stretch': {
    mode: 'prompts',
    heading: 'Reach & stretch',
    prompts: [
      'Reach up high on tiptoes.',
      'Reach arms wide like wings.',
      'Touch toes or shins — gentle bend.',
      'Roll neck slowly side to side.',
    ],
    nextLabel: 'Next reach',
  },
  'hopscotch-home': {
    mode: 'prompts',
    heading: 'Hopscotch',
    prompts: [
      'Draw 1–2–3–4–5 with chalk or tape.',
      'Toss a stone on square 1.',
      'Hop through — skip the stone square.',
      'Pick up the stone on the way back.',
    ],
    nextLabel: 'Next turn',
  },
  'pretend-catch': {
    mode: 'counter',
    heading: 'Catch count',
    counterLabel: 'Catches in a row',
    prompts: ['Toss a soft ball gently. Tap +1 for each catch without a drop.'],
  },
  'tree-pose-kids': {
    mode: 'prompts',
    heading: 'Tree pose',
    prompts: [
      'Stand on left foot. Hands together.',
      'Hold for five slow breaths.',
      'Switch to right foot.',
      'Grow branches — lift arms wide.',
    ],
    nextLabel: 'Other side',
  },

  /* —— Words (8) —— */
  'rhyme-chain': {
    mode: 'prompts',
    heading: 'Rhyme starters',
    prompts: ['Start with cat…', 'Start with sun…', 'Start with tree…', 'Start with ball…', 'Start with night…'],
    nextLabel: 'New starter',
  },
  'opposites-game': {
    mode: 'prompts',
    heading: 'Say the opposite',
    prompts: ['Hot → ?', 'Up → ?', 'Day → ?', 'Big → ?', 'Fast → ?', 'Happy → ?'],
    nextLabel: 'Next word',
  },
  'same-starting-sound': {
    mode: 'prompts',
    heading: 'Same sound',
    prompts: [
      'Things that start with B…',
      'Things that start with M…',
      'Things that start with S…',
      'Things that start with T…',
    ],
    nextLabel: 'New sound',
  },
  'describe-without-name': {
    mode: 'prompts',
    heading: 'Describe it',
    prompts: [
      'It is yellow and you peel it. (Banana)',
      'It has four legs and says woof.',
      'You wear it on your feet.',
      'It is cold and you lick it.',
    ],
    nextLabel: 'Next clue',
  },
  'name-in-category': {
    mode: 'prompts',
    heading: 'Categories',
    prompts: [
      'Name animals!',
      'Name colors!',
      'Name foods!',
      'Name things in the kitchen!',
      'Name things that fly!',
    ],
    nextLabel: 'New category',
  },
  'tongue-twister-kids': {
    mode: 'prompts',
    heading: 'Try these',
    prompts: [
      'Red lorry, yellow lorry.',
      'Unique New York.',
      'Six silly socks.',
      'Friendly frogs flip flops.',
    ],
    nextLabel: 'Next twister',
  },
  'syllable-clap': {
    mode: 'prompts',
    heading: 'Clap syllables',
    prompts: ['But-ter-fly — clap three times.', 'El-e-phant — clap three times.', 'Sun — clap once.', 'To-mor-row — clap three times.'],
    nextLabel: 'Next word',
  },
  'invent-a-word': {
    mode: 'prompts',
    heading: 'Invent words',
    prompts: [
      'Blend sun + nap = sunnap (a cozy rest).',
      'Blend jump + giggle = jumple.',
      'Make a word for “extra happy walk.”',
      'Make a word for “snack o’clock.”',
    ],
    nextLabel: 'New word',
  },

  /* —— Logic (8) —— */
  'what-comes-next': {
    mode: 'prompts',
    heading: 'What comes next?',
    prompts: [
      '🔴 🔵 🔴 🔵 … ?',
      '△ ○ △ ○ … ?',
      '1 2 3 4 … ?',
      'BIG small BIG small … ?',
    ],
    nextLabel: 'Next pattern',
  },
  'odd-one-out': {
    mode: 'pick-two',
    heading: 'Which is odd?',
    pairs: [
      ['Dog · Cat · Car', 'Car'],
      ['Red · Blue · Banana color', 'Banana color'],
      ['Circle · Square · Spoon', 'Spoon'],
    ],
  },
  'kid-riddles': {
    mode: 'prompts',
    heading: 'Riddles',
    prompts: [
      'What has hands but cannot clap? (A clock)',
      'What gets wetter as it dries? (A towel)',
      'What has a neck but no head? (A bottle)',
      'What goes up but never comes down? (Your age)',
    ],
    nextLabel: 'Next riddle',
  },
  'color-pattern': {
    mode: 'prompts',
    heading: 'Color patterns',
    prompts: [
      'Red, blue, red, blue — what is next?',
      'Yellow, yellow, green — repeat it.',
      'Make a pattern with three crayons.',
      'Draw your pattern on paper.',
    ],
    nextLabel: 'Next pattern',
  },
  'trick-questions-kids': {
    mode: 'prompts',
    heading: 'Think twice',
    prompts: [
      'How many months have 28 days? (All of them!)',
      'What can you catch but not throw? (A cold — or a hug!)',
      'What has keys but no locks? (A piano)',
      'What question can you never answer yes to? (Are you asleep?)',
    ],
    nextLabel: 'Next question',
  },
  'sort-by-size': {
    mode: 'prompts',
    heading: 'Sort ideas',
    prompts: [
      'Sort three spoons: small, medium, big.',
      'Sort books from thin to thick.',
      'Sort stuffed animals by height.',
      'Line up shoes by size.',
    ],
    nextLabel: 'Next sort',
  },
  'if-then-game': {
    mode: 'prompts',
    heading: 'If… then…',
    prompts: [
      'If it rains… then we wear…',
      'If I eat too many carrots… then I turn orange? (Silly!)',
      'If you smile at me… then I…',
      'If we finish cleaning… then we can…',
    ],
    nextLabel: 'Next pair',
  },
  'two-truths-kids': {
    mode: 'prompts',
    heading: 'Two truths ideas',
    prompts: [
      'Tell two true things and one silly pretend.',
      'Swap turns — guess the pretend one.',
      'Use short sentences only.',
      'Give a high-five when someone guesses right.',
    ],
    nextLabel: 'Next round',
  },

  /* —— Seasonal (8) —— */
  'spring-flowers': {
    mode: 'prompts',
    heading: 'Spring fun',
    prompts: [
      'Name three spring colors.',
      'Draw a flower with five petals.',
      'Look for a bud or bloom outside.',
      'Pretend to grow from a seed — slow stretch up!',
    ],
    nextLabel: 'Next spring',
  },
  'summer-sun': {
    mode: 'prompts',
    heading: 'Summer fun',
    prompts: [
      'Name three ways to stay cool.',
      'Pretend to eat a cold popsicle.',
      'Find your shadow outside.',
      'Say one summer thing you love.',
    ],
    nextLabel: 'Next summer',
  },
  'rainy-day-play': {
    mode: 'prompts',
    heading: 'Rainy day',
    prompts: [
      'Listen to rain for one minute.',
      'Draw puddles and boots.',
      'Read one short book together.',
      'Build a blanket fort indoors.',
    ],
    nextLabel: 'Next cozy',
  },
  'fall-leaves': {
    mode: 'checklist',
    heading: 'Leaf hunt',
    items: ['A red leaf', 'A yellow leaf', 'A crunchy leaf', 'A small leaf', 'Two leaves that match'],
    doneLabel: 'Found!',
  },
  'winter-snow': {
    mode: 'prompts',
    heading: 'Winter fun',
    prompts: [
      'Cut a paper snowflake.',
      'Pretend to catch a snowflake on your tongue.',
      'Name three warm clothes.',
      'Drink warm cocoa — blow first!',
    ],
    nextLabel: 'Next winter',
  },
  'birthday-party-season': {
    mode: 'prompts',
    heading: 'Party time',
    prompts: [
      'Play musical statues for one song.',
      'Pin the tail on a drawn donkey — blindfold optional.',
      'Sing happy birthday softly.',
      'Everyone says one kind wish.',
    ],
    nextLabel: 'Next game',
  },
  'holiday-lights': {
    mode: 'checklist',
    heading: 'Light spotter',
    items: ['A red light', 'A green light', 'A white light', 'Twinkling lights', 'Lights on a tree or house'],
    doneLabel: 'Spotted!',
  },
  'new-year-wish': {
    mode: 'prompts',
    heading: 'New year wishes',
    prompts: [
      'One thing you want to learn.',
      'One kind thing to try more.',
      'One place you hope to visit.',
      'Share your wish with the group.',
    ],
    nextLabel: 'Next wish',
  },

  /* —— Attention (8) —— */
  'clap-pattern-copy': {
    mode: 'prompts',
    heading: 'Clap patterns',
    prompts: [
      'Clap · clap · pause',
      'Clap · clap · clap · pause',
      'Clap · pause · clap',
      'Make your own pattern for others to copy.',
    ],
    nextLabel: 'Next pattern',
  },
  'spot-the-change': {
    mode: 'prompts',
    heading: 'Spot the change',
    prompts: [
      'Look at the room for 10 seconds.',
      'Close eyes — grown-up moves one thing.',
      'Open eyes — what changed?',
      'Switch who moves something.',
    ],
    nextLabel: 'Play again',
  },
  'leader-claps': {
    mode: 'prompts',
    heading: 'Leader claps',
    prompts: [
      'Leader: two claps. Everyone copies.',
      'Leader: clap · stomp · clap.',
      'Leader: snap · clap.',
      'New leader! Try a harder pattern.',
    ],
    nextLabel: 'Next leader',
  },
  'red-light-green-light': {
    mode: 'prompts',
    heading: 'Red · green',
    prompts: [
      'GREEN — walk safely!',
      'RED — freeze!',
      'GREEN — tiny steps.',
      'RED — freeze with a silly face.',
    ],
    nextLabel: 'Next light',
  },
  'watch-the-timer': {
    mode: 'prompts',
    heading: 'Focus task',
    prompts: [
      'Color one picture until the timer ends.',
      'Stack blocks neatly for two minutes.',
      'Sort ten toys by color.',
      'Read quietly until time is up.',
    ],
    nextLabel: 'Next task',
  },
  'echo-phrase': {
    mode: 'prompts',
    heading: 'Echo this',
    prompts: [
      'Say: “Ready, set, go!”',
      'Say: “Pop, pop, fizz!”',
      'Say: “Listen, look, learn!”',
      'Make a three-word phrase together.',
    ],
    nextLabel: 'Next echo',
  },
  'find-five-things': {
    mode: 'checklist',
    heading: 'Find 5 that are…',
    items: [
      '…soft (find 5)',
      '…blue (find 5)',
      '…round (find 5)',
      '…smaller than your hand (find 5)',
    ],
    doneLabel: 'Found 5!',
  },
  'slow-motion-game': {
    mode: 'prompts',
    heading: 'Slow motion',
    prompts: [
      'Walk across the room in slow motion.',
      'Wave hello in slow motion.',
      'Pretend to eat soup in slow motion.',
      'Sit down in slow motion — no rush!',
    ],
    nextLabel: 'Next slow',
  },

  /* —— Math (8) —— */
  'count-by-twos': {
    mode: 'prompts',
    heading: 'Count by 2s',
    prompts: ['2, 4, 6, 8, 10…', 'Keep going to 20!', 'Pair up ten toys — count pairs.', 'How many shoes by twos?'],
    nextLabel: 'Next count',
  },
  'finger-add': {
    mode: 'prompts',
    heading: 'Finger math',
    prompts: ['2 + 1 = ?', '3 + 2 = ?', '4 + 3 = ?', '5 + 0 = ?', '1 + 1 = ?'],
    nextLabel: 'Next sum',
  },
  'count-shape-sides': {
    mode: 'prompts',
    heading: 'Shape sides',
    prompts: [
      'Triangle — how many sides?',
      'Square — how many sides?',
      'Pentagon — how many sides?',
      'Circle — how many straight sides?',
    ],
    nextLabel: 'Next shape',
  },
  'more-or-less': {
    mode: 'pick-two',
    heading: 'Which pile?',
    pairs: [
      ['3 blocks vs 7 blocks', '7 is more'],
      ['5 grapes vs 2 grapes', '5 is more'],
      ['4 crayons vs 4 crayons', 'Same!'],
    ],
  },
  'share-snacks-fair': {
    mode: 'prompts',
    heading: 'Fair share',
    prompts: [
      '12 crackers, 3 kids — how many each?',
      '8 grapes, 2 kids — deal one by one.',
      '6 cookies, 2 kids — check piles match.',
      'Everyone says thank you before eating.',
    ],
    nextLabel: 'Next share',
  },
  'clock-hours': {
    mode: 'prompts',
    heading: 'Clock talk',
    prompts: [
      'Point to the hour hand.',
      'What o’clock is breakfast time for you?',
      'Show 3 o’clock on a toy clock.',
      'What happens at bedtime o’clock?',
    ],
    nextLabel: 'Next time',
  },
  'measure-with-steps': {
    mode: 'prompts',
    heading: 'Step measure',
    prompts: [
      'How many steps across your room?',
      'How many steps to the couch?',
      'Compare kid steps vs grown-up steps.',
      'Which is longer — bed or rug?',
    ],
    nextLabel: 'Measure next',
  },
  'number-story': {
    mode: 'prompts',
    heading: 'Number story',
    prompts: [
      'Once there were 3 bears and 2 bowls…',
      'A bus had 5 kids. Two got off…',
      'I found 4 shells and 1 rock…',
      'Make your own story with numbers 1–5.',
    ],
    nextLabel: 'Next story',
  },

  /* —— Teamwork (8) —— */
  'pass-story-team': {
    mode: 'prompts',
    heading: 'Team story',
    prompts: [
      'We found a magic door…',
      'Inside was a tiny dragon who…',
      'The dragon needed help to…',
      'Together we solved it by…',
      'The end — high-five!',
    ],
    nextLabel: 'Pass phone',
  },
  'build-together': {
    mode: 'prompts',
    heading: 'Build challenges',
    prompts: [
      'Build the tallest tower you can.',
      'Build a bridge between two books.',
      'Build something that rolls.',
      'Build a house with a door.',
    ],
    nextLabel: 'Next build',
  },
  'pillow-relay': {
    mode: 'prompts',
    heading: 'Pillow relay',
    prompts: [
      'Line up. Pass pillow over heads.',
      'Pass pillow through legs.',
      'Race to the end and back — gentle!',
      'Cheer: “Go team!”',
    ],
    nextLabel: 'Next pass',
  },
  'mirror-partner': {
    mode: 'prompts',
    heading: 'Mirror moves',
    prompts: [
      'Leader raises one arm — mirror it.',
      'Leader steps side to side.',
      'Leader makes a slow circle.',
      'Switch — new leader!',
    ],
    nextLabel: 'Switch',
  },
  'group-count-30': {
    mode: 'prompts',
    heading: 'Count together',
    prompts: [
      'Goal: reach 15 without two voices.',
      'If someone overlaps, start at 1.',
      'Try again — listen before you speak.',
      'Can you reach 30 as a team?',
    ],
    nextLabel: 'Try again',
  },
  'team-cheer': {
    mode: 'prompts',
    heading: 'Cheer ideas',
    prompts: [
      'Pick a team name.',
      'Add two claps and a stomp.',
      'Shout your name on the last beat.',
      'Perform for a grown-up!',
    ],
    nextLabel: 'Next beat',
  },
  'pair-puzzle': {
    mode: 'prompts',
    heading: 'Puzzle teamwork',
    prompts: [
      'Find all corner pieces together.',
      'Sort pieces by color.',
      'One person holds the frame, one fills in.',
      'Celebrate when the last piece clicks!',
    ],
    nextLabel: 'Next tip',
  },
  'tidy-race': {
    mode: 'checklist',
    heading: 'Tidy together',
    items: [
      'Books on shelf',
      'Toys in bin',
      'Crayons in box',
      'Shoes by the door',
      'Floor clear enough to dance',
    ],
    doneLabel: 'Tidied!',
  },

  /* —— Creativity (8) —— */
  'draw-a-monster': {
    mode: 'prompts',
    heading: 'Monster parts',
    prompts: [
      'Draw three googly eyes.',
      'Add ten wiggly legs.',
      'Give it a smile with square teeth.',
      'Name your friendly monster.',
    ],
    nextLabel: 'Next part',
  },
  'invent-a-tool': {
    mode: 'prompts',
    heading: 'Invent a tool',
    prompts: [
      'A tool that picks up socks.',
      'A tool that waters plants while you nap.',
      'A tool that sorts crayons by color.',
      'Draw it and label the buttons.',
    ],
    nextLabel: 'Next invention',
  },
  'sound-effects-story': {
    mode: 'prompts',
    heading: 'Sound story',
    prompts: [
      'Footsteps: tap tap tap.',
      'Door: creeeak and click.',
      'Rain: shhh shhh.',
      'Happy ending: ta-da!',
    ],
    nextLabel: 'Next sound',
  },
  'costume-from-clothes': {
    mode: 'prompts',
    heading: 'Costume ideas',
    prompts: [
      'Superhero with a towel cape.',
      'Chef with a big spoon.',
      'Space traveler with a colander helmet.',
      'Parade walk across the room!',
    ],
    nextLabel: 'Next costume',
  },
  'new-animal-species': {
    mode: 'pick-two',
    heading: 'Mix two animals',
    pairs: [
      ['Cat + bird', 'Catbird'],
      ['Fish + horse', 'Fishorse'],
      ['Dog + butterfly', 'Dogfly'],
      ['Bear + duck', 'Bearduck'],
    ],
  },
  'silly-machine': {
    mode: 'prompts',
    heading: 'Machine moves',
    prompts: [
      'Beep when your elbow bends.',
      'Spin like a gear — slow.',
      'Bonk when the pretend button is pressed.',
      'All parts move together — teamwork!',
    ],
    nextLabel: 'Next part',
  },
  'make-a-song': {
    mode: 'prompts',
    heading: 'Song words',
    prompts: [
      'Use your name in the chorus.',
      'Add a clap-clap beat.',
      'Hum the tune first, then add words.',
      'Perform for your stuffed animals.',
    ],
    nextLabel: 'Next line',
  },
  'one-panel-comic': {
    mode: 'prompts',
    heading: 'Comic prompts',
    prompts: [
      'A cat who forgot how to meow.',
      'A sandwich that talks.',
      'A shoe that runs away.',
      'You trip on a banana peel — silly, not hurt!',
    ],
    nextLabel: 'Next comic',
  },
};
