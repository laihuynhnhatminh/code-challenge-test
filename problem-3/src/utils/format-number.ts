export const formatStringNumber = (value: string): string => {
  const numberValue = parseFloat(value);
  return Number.isNaN(numberValue) ? value : numberValue.toLocaleString();
};
