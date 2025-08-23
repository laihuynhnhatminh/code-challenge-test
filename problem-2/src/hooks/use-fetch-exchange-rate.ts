import { useEffect, useState } from 'react';

import type { IExchangeRate } from '../types/exchange-rate';

const cachedMap = new Map();

export function useFetchExchangeRate() {
  const [exchangeRate, setExchangeRate] = useState<Map<string, IExchangeRate>>(
    new Map(),
  );

  // Fetch exchange rates from API and only trigger once with empty dependency array
  useEffect(() => {
    const fetchExchangeRate = async () => {
      try {
        if (cachedMap.has('exchangeRate')) {
          setExchangeRate(cachedMap.get('exchangeRate'));
          return;
        }

        const response = await fetch(
          'https://interview.switcheo.com/prices.json',
        );
        const data: IExchangeRate[] = await response.json();
        const exchangeRateMap = new Map<string, IExchangeRate>();
        data.forEach((item) => {
          const { currency, date, price } = item;
          const existingPrice = exchangeRateMap.get(currency);

          if (!existingPrice) {
            exchangeRateMap.set(currency, {
              currency,
              date: new Date(date),
              price,
            });
          } else {
            const isNewer = new Date(date) > new Date(existingPrice.date);
            if (isNewer) {
              exchangeRateMap.set(currency, {
                currency,
                date: new Date(date),
                price,
              });
            }
          }
        });
        setExchangeRate(exchangeRateMap);
        cachedMap.set('exchangeRate', exchangeRateMap);
      } catch (error) {
        console.error('Error fetching exchange rate:', error);
      }
    };

    fetchExchangeRate();
  }, []);

  return {
    exchangeRate,
  };
}
