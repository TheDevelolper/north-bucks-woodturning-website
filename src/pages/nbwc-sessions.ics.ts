const address = 'York House Centre, London Road, Stony Stratford, Milton Keynes MK11 1JQ';

const ics = [
  'BEGIN:VCALENDAR',
  'VERSION:2.0',
  'PRODID:-//NBWC//Club Sessions//EN',
  'BEGIN:VEVENT',
  'DTSTART;TZID=Europe/London:20260103T093000',
  'DTEND;TZID=Europe/London:20260103T133000',
  'RRULE:FREQ=WEEKLY;BYDAY=SA',
  `LOCATION:${address}`,
  'SUMMARY:North Bucks Woodturning Club - Saturday',
  'DESCRIPTION:Weekly Saturday morning woodturning session.',
  'END:VEVENT',
  'BEGIN:VEVENT',
  'DTSTART;TZID=Europe/London:20260106T053000',
  'DTEND;TZID=Europe/London:20260106T200000',
  'RRULE:FREQ=WEEKLY;BYDAY=TU',
  `LOCATION:${address}`,
  'SUMMARY:North Bucks Woodturning Club - Tuesday',
  'DESCRIPTION:Weekly Tuesday session.',
  'END:VEVENT',
  'END:VCALENDAR',
].join('\r\n');

export async function GET() {
  return new Response(ics, {
    headers: { 'Content-Type': 'text/calendar; charset=utf-8' },
  });
}
