function padTo2Digits(num: number) {
  // o padStart preenche a string ate ter 2 caracteres.
  return num.toString().padStart(2, '0');
}

/**
 * 
 * @param date Get HH:mm:ss
 * @returns 
 */
export function getFullTime(date = new Date()) {
  return [
    padTo2Digits(date.getUTCHours()),
    padTo2Digits(date.getUTCMinutes()),
    padTo2Digits(date.getUTCSeconds()),
  ].join(':');
}

export function getLocaleISOString() {
  const currentDate = new Date();
  const tzoneOffsetInMiliseconds = currentDate.getTimezoneOffset() * 60 * 1000;
  const tLocal = currentDate.getTime() - tzoneOffsetInMiliseconds;
  
  return new Date(tLocal).toISOString();
}