import { getCollection, type CollectionEntry } from 'astro:content';

export type Talk = CollectionEntry<'talks'>;

/** Newest first. Talks with only a known year are placed after the dated talks of that year. */
export async function getTalks(): Promise<Talk[]> {
  const talks = await getCollection('talks');
  return talks.sort((a, b) => b.data.date.localeCompare(a.data.date));
}

export function talkYear(talk: Talk): string {
  return talk.data.date.slice(0, 4);
}

export function formatTalkDate(date: string): string {
  const [year, month] = date.split('-');
  if (!month) return year;
  const name = new Date(Date.UTC(Number(year), Number(month) - 1)).toLocaleString('en-US', {
    month: 'short',
    timeZone: 'UTC',
  });
  return `${name} ${year}`;
}

export function talkCountry(talk: Talk): string | undefined {
  if (talk.data.location === 'Online') return undefined;
  return talk.data.location.split(',').at(-1)!.trim();
}

export function talkStats(talks: Talk[]) {
  const countries = new Set(talks.map(talkCountry).filter(Boolean));
  return {
    total: talks.length,
    international: talks.filter((t) => t.data.scope === 'international').length,
    countries: countries.size,
    videos: talks.filter((t) => t.data.video).length,
  };
}

export function youTubeId(url: string): string | undefined {
  const match = url.match(/(?:youtube\.com\/watch\?v=|youtu\.be\/)([\w-]{11})/);
  return match?.[1];
}

/** Event name without the trailing year, e.g. "Techorama Netherlands 2025" -> "Techorama Netherlands". */
export function eventName(talk: Talk): string {
  return talk.data.event.replace(/\s+\d{4}$/, '');
}
