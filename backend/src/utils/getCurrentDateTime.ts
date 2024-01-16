interface IGetCurrentDateTime {
  formattedDateUTC: string; // year-month-day
  formattedTimeUTC: string; // hours:minutes:seconds
  formattedDatePacific: string; // year-month-day
  formattedTimePacific: string; // hours:minutes:seconds
  pacificTimeZone: 'PT' | 'PST';
}

/**
 * Returns an object containing the current date and time in both UTC and local time zones.
 * @returns {IGetCurrentDateTime} An object with four properties: `formattedDateUTC`, `formattedTimeUTC`,
 * `formattedDatePacific`, and `formattedTimePacific`. Each property contains the formatted date
 * and time in the corresponding time zone.
 */
export const getCurrentDateTime = (): IGetCurrentDateTime => {
  const now = new Date();

  // UTC date and time
  const yearUTC = now.getUTCFullYear();
  const monthUTC = String(now.getUTCMonth() + 1).padStart(2, '0');
  const dayUTC = String(now.getUTCDate()).padStart(2, '0');
  const hoursUTC = String(now.getUTCHours()).padStart(2, '0');
  const minutesUTC = String(now.getUTCMinutes()).padStart(2, '0');
  const secondsUTC = String(now.getUTCSeconds()).padStart(2, '0');

  const formattedDateUTC = `${yearUTC}-${monthUTC}-${dayUTC}`;
  const formattedTimeUTC = `${hoursUTC}:${minutesUTC}:${secondsUTC}`;

  // Pacific date and time
  const pacificFormatter = new Intl.DateTimeFormat('en-US', {
    timeZone: 'America/Los_Angeles',
    year: 'numeric',
    month: '2-digit',
    day: '2-digit',
    hour: '2-digit',
    minute: '2-digit',
    second: '2-digit',
  });

  const pacificParts = pacificFormatter.formatToParts(now);

  const formattedDatePacific = `${
    pacificParts.find((part) => part.type === 'year')?.value
  }-${pacificParts.find((part) => part.type === 'month')?.value}-${
    pacificParts.find((part) => part.type === 'day')?.value
  }`;
  const formattedTimePacific = `${
    pacificParts.find((part) => part.type === 'hour')?.value
  }:${pacificParts.find((part) => part.type === 'minute')?.value}:${
    pacificParts.find((part) => part.type === 'second')?.value
  }`;

  // Determine Pacific Time Zone
  const nowPacific = new Date(formattedDatePacific + 'T' + formattedTimePacific + 'Z');
  const utcOffset = nowPacific.getTime() - now.getTime();
  const isDST = utcOffset > 0 && utcOffset <= 3600000;
  const pacificTimeZone = isDST ? 'PT' : 'PST';

  return {
    formattedDateUTC,
    formattedTimeUTC,
    formattedDatePacific,
    formattedTimePacific,
    pacificTimeZone,
  };
};
