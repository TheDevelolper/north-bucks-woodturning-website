import { sessions } from './site';

export function meetingDaysPhrase(): string {
  const dayNames = sessions.map(s => s.day);
  if (dayNames.length === 1) return `every ${dayNames[0]}`;
  if (dayNames.length === 2) return `every ${dayNames[0]} and ${dayNames[1]}`;
  return 'every ' + dayNames.slice(0, -1).join(', ') + ', and ' + dayNames.slice(-1);
}
