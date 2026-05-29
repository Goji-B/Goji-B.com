import { getGettingReadyGame } from '../data/gettingReadyGames';
import { getMainActivity } from '../data/mainActivities';

export type ActivityHub = 'main' | 'getting-ready';

export interface ResolvedActivity {
  slug: string;
  title: string;
  hub: ActivityHub;
  emoji?: string;
}

/** Resolve activity from slug (and optional hub hint) for the feedback form. */
export function resolveActivityForFeedback(
  slug: string,
  hubHint?: string | null,
): ResolvedActivity | undefined {
  const s = slug.trim();
  if (!s) return undefined;

  const main = getMainActivity(s);
  const gr = getGettingReadyGame(s);

  if (hubHint === 'main') {
    if (main) return { slug: s, title: main.title, hub: 'main' };
    if (gr) return { slug: s, title: gr.title, hub: 'getting-ready', emoji: gr.emoji };
  } else {
    if (gr) return { slug: s, title: gr.title, hub: 'getting-ready', emoji: gr.emoji };
    if (main) return { slug: s, title: main.title, hub: 'main' };
  }

  return undefined;
}
