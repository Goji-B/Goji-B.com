/**
 * Shape Sorter icons — flat 2D vs isometric 3D, drawn in 120×120 with padding.
 * Solid fills (no gradients) so they stay clear when scaled small.
 */

const VB = '0 0 120 120';

function svg(inner: string): string {
  return `<svg xmlns="http://www.w3.org/2000/svg" viewBox="${VB}" aria-hidden="true">${inner}</svg>`;
}

function stroke(w = 3.5): string {
  return `stroke-width="${w}" stroke-linejoin="round" stroke-linecap="round" vector-effect="non-scaling-stroke"`;
}

const GLYPHS: Record<string, string> = {
  /* —— 2D: single flat face —— */
  circle: svg(
    `<circle cx="60" cy="60" r="34" fill="#339af0" stroke="#1864ab" ${stroke()}/>`,
  ),

  oval: svg(
    `<ellipse cx="60" cy="60" rx="42" ry="24" fill="#74c0fc" stroke="#1864ab" ${stroke()}/>`,
  ),

  square: svg(
    `<rect x="36" y="36" width="48" height="48" rx="1" fill="#51cf66" stroke="#2b8a3e" ${stroke()}/>`,
  ),

  rectangle: svg(
    `<rect x="10" y="48" width="100" height="26" rx="1" fill="#ff922b" stroke="#d9480f" ${stroke()}/>`,
  ),

  triangle: svg(
    `<polygon points="60,16 108,104 12,104" fill="#ff6b6b" stroke="#c92a2a" ${stroke()}/>`,
  ),

  diamond: svg(
    `<polygon points="60,14 106,60 60,106 14,60" fill="#f06595" stroke="#a61e4d" ${stroke()}/>`,
  ),

  pentagon: svg(
    `<polygon points="60,12 108,44 90,108 30,108 12,44" fill="#fcc419" stroke="#e67700" ${stroke()}/>`,
  ),

  hexagon: svg(
    `<polygon points="60,10 106,35 106,85 60,110 14,85 14,35" fill="#cc5de8" stroke="#862e9c" ${stroke()}/>`,
  ),

  octagon: svg(
    `<polygon points="38,10 82,10 110,38 110,82 82,110 38,110 10,82 10,38" fill="#94d82a" stroke="#5c940d" ${stroke()}/>`,
  ),

  star: svg(
    `<polygon points="60,8 72,44 112,44 80,66 92,104 60,82 28,104 40,66 8,44 48,44" fill="#fab005" stroke="#e67700" ${stroke(3)}/>`,
  ),

  /* —— 3D: multiple faces, depth cues —— */
  sphere: svg(`
    <ellipse cx="60" cy="108" rx="26" ry="5" fill="#1864ab" opacity="0.25"/>
    <circle cx="60" cy="56" r="34" fill="#748ffc" stroke="#364fc7" ${stroke()}/>
    <circle cx="46" cy="44" r="12" fill="#fff" opacity="0.8"/>
    <ellipse cx="82" cy="58" rx="10" ry="26" fill="#364fc7" opacity="0.22"/>
  `),

  cube: svg(`
    <polygon points="60,22 90,40 60,58 30,40" fill="#d8f5a2" stroke="#2b8a3e" ${stroke(3)}/>
    <polygon points="30,40 60,58 60,98 30,80" fill="#8ce99a" stroke="#2b8a3e" ${stroke(3)}/>
    <polygon points="60,58 90,40 90,80 60,98" fill="#40c057" stroke="#1e6b2e" ${stroke(3)}/>
  `),

  cuboid: svg(`
    <polygon points="18,44 88,44 98,34 28,34" fill="#c5f6fa" stroke="#0b7285" ${stroke(3)}/>
    <polygon points="18,44 28,34 28,94 18,104" fill="#66d9e8" stroke="#0b7285" ${stroke(3)}/>
    <polygon points="88,44 98,34 98,94 88,104" fill="#22b8cf" stroke="#0b7285" ${stroke(3)}/>
    <polygon points="18,44 88,44 88,104 18,104" fill="#3bc9db" stroke="#0b7285" ${stroke(3)}/>
  `),

  cylinder: svg(`
    <ellipse cx="60" cy="100" rx="30" ry="10" fill="#5c7cfa" stroke="#364fc7" ${stroke(3)}/>
    <path d="M30 42 L30 98 C30 108 90 108 90 98 L90 42 C90 32 30 32 30 42 Z" fill="#748ffc" stroke="#364fc7" ${stroke(3)}/>
    <ellipse cx="60" cy="42" rx="30" ry="10" fill="#bac8ff" stroke="#364fc7" ${stroke(3)}/>
    <path d="M30 42 Q60 50 90 42" fill="none" stroke="#fff" stroke-width="2.5" opacity="0.55"/>
  `),

  cone: svg(`
    <ellipse cx="60" cy="98" rx="32" ry="10" fill="#e8590c" stroke="#9c3600" ${stroke(3)}/>
    <polygon points="60,18 98,94 22,94" fill="#ffa94d" stroke="#d9480f" ${stroke(3)}/>
    <polygon points="60,18 60,94 22,94" fill="#fd7e14" opacity="0.55"/>
  `),

  pyramid: svg(`
    <polygon points="28,92 92,92 72,104 48,104" fill="#e67700" stroke="#9c3600" ${stroke(3)}/>
    <polygon points="28,92 48,104 60,20" fill="#ffd43b" stroke="#e67700" ${stroke(3)}/>
    <polygon points="92,92 72,104 60,20" fill="#fab005" stroke="#e67700" ${stroke(3)}/>
    <line x1="60" y1="20" x2="60" y2="98" stroke="#9c3600" stroke-width="2" opacity="0.35"/>
  `),

  prism: svg(`
    <polygon points="36,88 64,88 50,104" fill="#12b886" stroke="#087f5b" ${stroke(3)}/>
    <polygon points="36,88 50,32 64,88" fill="#63e6be" stroke="#087f5b" ${stroke(3)}/>
    <polygon points="50,32 64,88 98,72 84,16" fill="#38d9a9" stroke="#087f5b" ${stroke(3)}/>
    <polygon points="50,32 36,88 22,72 36,16" fill="#20c997" stroke="#087f5b" ${stroke(3)}/>
    <line x1="50" y1="32" x2="84" y2="16" stroke="#087f5b" stroke-width="2.5"/>
    <line x1="84" y1="16" x2="98" y2="72" stroke="#087f5b" stroke-width="2.5"/>
    <line x1="64" y1="88" x2="98" y2="72" stroke="#087f5b" stroke-width="2.5"/>
  `),
};

export const SHAPE_GLYPH_KEYS = Object.keys(GLYPHS);

export function renderShapeGlyph(key: string): string {
  return GLYPHS[key] ?? GLYPHS.circle;
}

export function isShape3D(key: string): boolean {
  return ['sphere', 'cube', 'cuboid', 'cylinder', 'cone', 'pyramid', 'prism'].includes(key);
}
