import { DateTime } from 'luxon';

export function createDateArray(length: number) {
  const dates: number[] = [];

  for (let i = 0; i < length; i++) {
    console.log('local', +DateTime.local().minus({ day: i }))
    dates.push(+DateTime.local().minus({ day: i }).toJSDate());
  }
console.log('date array', dates.reverse())
  return dates.reverse();
}

