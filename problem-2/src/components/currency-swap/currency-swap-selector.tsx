import { CheckIcon, ChevronsUpDownIcon } from 'lucide-react';
import { useEffect, useState } from 'react';
import { type Path, useFormContext, useWatch } from 'react-hook-form';

import { useFetchExchangeRate } from '../../hooks/use-fetch-exchange-rate';
import { cn } from '../../lib/utils';
import type { TExchangeRate } from '../../schemas/exchange-rate-schema';
import type { IExchangeRate } from '../../types/exchange-rate';
import { TokenIcon } from '../icons/token-icon';
import { Button } from '../ui/button';
import {
  Command,
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandItem,
  CommandList,
} from '../ui/command';
import { Popover, PopoverContent, PopoverTrigger } from '../ui/popover';

interface ICurrencySwapSelectorProps {
  name: Path<TExchangeRate>;
}

export function CurrencySwapSelector({ name }: ICurrencySwapSelectorProps) {
  const [open, setOpen] = useState(false);
  const { control, setValue } = useFormContext<TExchangeRate>();
  const { exchangeRate } = useFetchExchangeRate();
  const currentCurrency = useWatch({
    control,
    name,
  });

  // Trigger only once for init
  useEffect(() => {
    if (!currentCurrency) {
      const hasETH = exchangeRate.has('ETH');
      const hasUSDC = exchangeRate.has('USDC');
      const isFromCurrency = name === 'fromCurrency';
      const defaultFromCurrency = hasETH
        ? 'ETH'
        : Array.from(exchangeRate.keys())[0];
      const defaultToCurrency = hasUSDC
        ? 'USDC'
        : Array.from(exchangeRate.keys())[0];
      setValue(name, isFromCurrency ? defaultFromCurrency : defaultToCurrency);
    }
  }, [exchangeRate]);

  return (
    <Popover open={open} onOpenChange={setOpen}>
      <PopoverTrigger asChild>
        <Button
          name="currency-selector"
          variant="outline"
          role="combobox"
          aria-expanded={open}
          className="h-full w-[200px] justify-between rounded-l-none"
        >
          {currentCurrency && exchangeRate.has(currentCurrency as string) ? (
            <TokenIcon currency={currentCurrency as string} />
          ) : null}
          {currentCurrency ? currentCurrency : 'Select currency...'}
          <ChevronsUpDownIcon className="ml-2 h-4 w-4 shrink-0 opacity-50" />
        </Button>
      </PopoverTrigger>
      <PopoverContent className="w-[200px] p-0">
        <Command>
          <CommandInput placeholder="Search currency..." />
          <CommandList className="no-scrollbar">
            <CommandEmpty>No currency found.</CommandEmpty>
            <CommandGroup>
              {Array.from(exchangeRate.values()).map((val) => (
                <CommandItem
                  key={val.currency}
                  value={val.currency}
                  className="py-2"
                  onSelect={(currentValue) => {
                    setValue(
                      name,
                      currentValue as TExchangeRate[Path<TExchangeRate>],
                    );
                    setOpen(false);
                  }}
                >
                  <CheckIcon
                    className={cn(
                      'mr-2 h-4 w-4',
                      val.currency === currentCurrency
                        ? 'opacity-100'
                        : 'opacity-0',
                    )}
                  />
                  <span className="flex gap-4">
                    <TokenIcon currency={val.currency} />
                    {val.currency}
                  </span>
                </CommandItem>
              ))}
            </CommandGroup>
          </CommandList>
        </Command>
      </PopoverContent>
    </Popover>
  );
}
