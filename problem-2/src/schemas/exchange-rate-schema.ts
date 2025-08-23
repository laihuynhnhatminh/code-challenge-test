import z from 'zod';

export const exchangeRateSchema = z.object({
  fromCurrency: z.string().min(1, 'From currency is required'),
  fromValue: z.number().min(0, 'From value is required'),
  toCurrency: z.string().min(1, 'To currency is required'),
  toValue: z.number().min(0, 'To value is required'),
});

export type TExchangeRate = z.infer<typeof exchangeRateSchema>;

export const defaultExchangeRateValue: TExchangeRate = {
  fromCurrency: '',
  fromValue: 1,
  toCurrency: '',
  toValue: 0,
};
