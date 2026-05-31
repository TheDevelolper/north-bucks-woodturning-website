export const site = {
  email: 'nbwclub@gmail.com',
  facebook: 'https://www.facebook.com/NorthBucksWoodturningClub',
  membershipAnnualFee: 20,
  membershipMonthlyFee: 20,
};

export interface Session {
  day: string;
  start: string;
  end: string;
  dayAbbr: string;
}

export const sessions: Session[] = [
  { day: 'Tuesday', start: '5:30pm', end: '8:00pm', dayAbbr: 'TU' },
  { day: 'Saturday', start: '9:30am', end: '1:30pm', dayAbbr: 'SA' },
];
