export const dateStringToDate = (dateString: string): Date => {
  // Example Date 14/01/2020 --> ['14', '01', '2020'] --> [14, 01, 2020]
  const dateParts = dateString
    .split('/')
    .map((value: string): number => parseInt(value));

  return new Date(dateParts[2], dateParts[1] - 1, dateParts[0]);
};
