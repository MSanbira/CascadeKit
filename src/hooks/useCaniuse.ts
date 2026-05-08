import { useEffect, useState } from 'react';

export type SupportStatus = 'y' | 'n' | 'a' | 'p' | 'u';

export interface BrowserSupport {
  name: string;
  version: string | null;
  status: SupportStatus;
}

interface CaniuseStats {
  [browser: string]: {
    [version: string]: string;
  };
}

interface CaniuseResponse {
  title: string;
  stats: CaniuseStats;
}

const BROWSER_LABELS: Record<string, string> = {
  chrome: 'Chrome',
  edge: 'Edge',
  safari: 'Safari',
  firefox: 'Firefox',
  and_chr: 'Chrome Android',
  ios_saf: 'Safari iOS',
};

const BROWSERS_TO_SHOW = ['chrome', 'edge', 'safari', 'firefox'];

function getFirstSupportedVersion(versions: Record<string, string>): { version: string | null; status: SupportStatus } {
  const entries = Object.entries(versions);

  for (const [version, support] of entries) {
    const baseStatus = support.split(' ')[0] as SupportStatus;
    if (baseStatus === 'y' || baseStatus === 'a') {
      return { version, status: baseStatus };
    }
  }

  const lastEntry = entries[entries.length - 1];
  if (lastEntry) {
    const baseStatus = lastEntry[1].split(' ')[0] as SupportStatus;
    if (baseStatus === 'p') return { version: null, status: 'p' };
  }

  return { version: null, status: 'n' };
}

export function useCaniuse(feature: string) {
  const [browsers, setBrowsers] = useState<BrowserSupport[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);

  useEffect(() => {
    const url = `https://raw.githubusercontent.com/Fyrd/caniuse/master/features-json/${feature}.json`;

    fetch(url)
      .then(res => {
        if (!res.ok) throw new Error('Failed to fetch');
        return res.json() as Promise<CaniuseResponse>;
      })
      .then(data => {
        const result: BrowserSupport[] = BROWSERS_TO_SHOW
          .filter(browser => browser in data.stats)
          .map(browser => {
            const { version, status } = getFirstSupportedVersion(data.stats[browser]);
            return { name: BROWSER_LABELS[browser] ?? browser, version, status };
          });
        setBrowsers(result);
      })
      .catch(() => setError(true))
      .finally(() => setLoading(false));
  }, [feature]);

  return { browsers, loading, error };
}
