import { zodResolver } from '@hookform/resolvers/zod';
import { Label } from '@radix-ui/react-label';
import { useEffect } from 'react';
import { useForm, useWatch } from 'react-hook-form';

import { CurrencySwapSelector } from './currency-swap-selector';
import { useFetchExchangeRate } from '../../hooks/use-fetch-exchange-rate';
import {
  defaultExchangeRateValue,
  exchangeRateSchema,
  type TExchangeRate,
} from '../../schemas/exchange-rate-schema';
import { Button } from '../ui/button';
import { Card } from '../ui/card';
import { Form, FormField, FormItem, FormMessage } from '../ui/form';
import { Input } from '../ui/input';

const BASE_USD_EXCHANGE_RATE = 1;

const formatCurrencyNumber = (value: number) => {
  return Number(value.toExponential(4));
};

export function CurrencySwap() {
  const { exchangeRate } = useFetchExchangeRate();

  const form = useForm<TExchangeRate>({
    mode: 'onChange',
    resolver: zodResolver(exchangeRateSchema),
    defaultValues: defaultExchangeRateValue,
  });

  const fromCurrency = useWatch({
    control: form.control,
    name: 'fromCurrency',
  });
  const toCurrency = useWatch({
    control: form.control,
    name: 'toCurrency',
  });
  const fromValue = useWatch({
    control: form.control,
    name: 'fromValue',
  });

  const handleFromCurrencyOnChange = (value: string) => {
    const fromValue = Number.parseFloat(value);
    const fromValueExchangeRate =
      exchangeRate.get(fromCurrency)?.price || BASE_USD_EXCHANGE_RATE;
    const toValueExchangeRate =
      exchangeRate.get(toCurrency)?.price || BASE_USD_EXCHANGE_RATE;
    form.setValue('fromValue', formatCurrencyNumber(fromValue));
    form.setValue(
      'toValue',
      formatCurrencyNumber(
        (fromValue * fromValueExchangeRate) / toValueExchangeRate,
      ),
    );
  };

  const handleToCurrencyOnChange = (value: string) => {
    const toValue = Number.parseFloat(value);
    const fromValueExchangeRate =
      exchangeRate.get(fromCurrency)?.price || BASE_USD_EXCHANGE_RATE;
    const toValueExchangeRate =
      exchangeRate.get(toCurrency)?.price || BASE_USD_EXCHANGE_RATE;
    form.setValue('toValue', formatCurrencyNumber(toValue));
    form.setValue(
      'fromValue',
      formatCurrencyNumber(
        (toValue * toValueExchangeRate) / fromValueExchangeRate,
      ),
    );
  };

  const handleSwapCurrency = () => {
    const tempCurrency = fromCurrency;
    form.setValue('fromCurrency', toCurrency);
    form.setValue('toCurrency', tempCurrency);
  };

  useEffect(() => {
    if (fromCurrency && fromValue) {
      handleFromCurrencyOnChange(fromValue.toString());
    }
  }, [fromCurrency, toCurrency]);

  return (
    <Card className="max-w-xl bg-transparent p-4 text-primary">
      <Form {...form}>
        <form className="grid gap-4">
          <div className="grid gap-4">
            <div className="flex items-center bg-primary-foreground">
              <FormField
                control={form.control}
                name="fromValue"
                render={({ field }) => (
                  <FormItem className="grow gap-0 rounded-l-full border border-primary-500 border-r-0 px-2">
                    <Label
                      htmlFor={field.name}
                      className="typography-xs-normal px-4 pt-1"
                    >
                      From Currency
                    </Label>
                    <Input
                      {...field}
                      onChange={(e) =>
                        handleFromCurrencyOnChange(e.target.value)
                      }
                      min={0}
                      type="number"
                      placeholder="From Currency"
                      className="typography-base-semibold select-all border-0 bg-transparent text-xl placeholder:font-normal placeholder:text-base"
                    />
                    <FormMessage />
                  </FormItem>
                )}
              />
              <CurrencySwapSelector name="fromCurrency" />
            </div>
            <div className="flex items-center bg-primary-foreground">
              <FormField
                control={form.control}
                name="toValue"
                render={({ field }) => (
                  <FormItem className="grow gap-0 rounded-l-full border border-primary-500 border-r-0 px-2">
                    <Label
                      htmlFor={field.name}
                      className="typography-xs-normal px-4 pt-1"
                    >
                      To Currency
                    </Label>
                    <Input
                      {...field}
                      min={0}
                      onChange={(e) => handleToCurrencyOnChange(e.target.value)}
                      type="number"
                      placeholder="To Currency"
                      className="typography-base-semibold border-0 bg-transparent text-xl placeholder:font-normal placeholder:text-base"
                    />
                  </FormItem>
                )}
              />
              <CurrencySwapSelector name="toCurrency" />
            </div>
          </div>
          <Button name="swap" type="button" onClick={handleSwapCurrency}>
            Swap
          </Button>
        </form>
      </Form>
    </Card>
  );
}
