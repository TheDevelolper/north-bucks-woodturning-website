import openingTimesRaw from '../content/sections/_opening-times.md?raw';

export function meetingDaysPhrase(): string {
  const dayNames = openingTimesRaw
    .trim()
    .split('\n')
    .map(line => line.split(/\s/)[0].replace(/s$/i, ''));
  if (dayNames.length === 1) return `every ${dayNames[0]}`;
  if (dayNames.length === 2) return `every ${dayNames[0]} and ${dayNames[1]}`;
  return 'every ' + dayNames.slice(0, -1).join(', ') + ', and ' + dayNames.slice(-1);
}
