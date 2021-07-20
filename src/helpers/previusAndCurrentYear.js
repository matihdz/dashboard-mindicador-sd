
export const previusAndCurrentYear = () => {
  const currentYear = new Date().getFullYear();
  const previusYear = currentYear - 1;

  return [previusYear, currentYear];
}
