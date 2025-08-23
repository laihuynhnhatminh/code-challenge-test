import type { ComponentProps } from 'react';
import { useMemo } from 'react';

import { WalletRow } from './wallet-row';
import { usePrices } from '../hooks/use-prices';
import { useWalletBalances } from '../hooks/use-wallet-balances';
import type { IWalletBalance } from '../types/wallet-balance';
import { getPriority } from '../utils/get-priority';

interface IFormattedWalletBalance extends IWalletBalance {
  formatted: string;
  usdValue: number;
}

// Could also do this
// type Props = ComponentProps<'div'>;
interface IProps extends ComponentProps<'div'> {}

/**
 * FIRST About Type safety
 *
 * Explanation of the original Props
 * interface Props extends BoxProps {} ----> This is use to get the props and put into a div element.
 * It will work but not very type safe
 *
 * interface IProps extends ComponentProps<'div'> {} ----> This is much safer and better as we also define this is props of div element
 *
 * There is also this case
 * interface WalletBalance {
 *  currency: string;
 *  amount: number;
 * }
 * interface FormattedWalletBalance {
 *  currency: string;
 *  amount: number;
 *  formatted: string;
 * }
 *
 * Since FormattedWalletBalance is very similar compared to WalletBalance we can extends it instead like this
 * interface IFormattedWalletBalance extends IWalletBalance {
 *  formatted: string;
 *  usdValue: number; <-- added for the mapped value instead of doing the calculation inside the map for <WalletRow />
 * }
 *
 * Another fun fact would be that if you import a type only it will make the import tree-shakable and reduce bundle size.
 */

// For the React.FC component type definition. We don't really need to this but I will keep this to follow the original problem.
// Personally I would just define a props and use it directly.
// interface PageProps<T> {
//   data: T;                               // <---- If we pass an object to display. Especially an object from the API response. I would prefer it to defined as data if possible
//   isLoading: boolean;                    // <---- For these type of state. Should be with is{something}
//   isError: boolean;
//   onAction: (action: string) => void;    // <---- For these type of callbacks. Should be with on{something} the function that pass into this should be handle{something}
//   onSelect: (item: T) => void;           // <---- Handle function shouldn't be run directly on the props but should be wrapped in useCallback and then pass into the other child Component
// }

const WalletPage: React.FC<IProps> = ({ ...rest }: IProps) => {
  const balances = useWalletBalances();
  const prices = usePrices();

  // in order to reduce re-renders should useMemo but also consider the value inside the dependencies array to be stable otherwise it could just trigger rerender unlimitedly
  const formattedBalances = useMemo(() => {
    // We can also do it like this but through 3 loops
    // I can't say which is faster, reduce while only through 1 loop actually could be slower if the calculation is more complex
    // Overall either way is fine, as long as they are easy to read and understand for development purpose.
    // Optimization can be done when you identify performance bottlenecks.
    //
    // return balances
    //   .filter((balance: IWalletBalance) => {
    //     const balancePriority = getPriority(balance.currency);
    //     return balancePriority > -99 && balance.amount > 0;
    //   })
    //   .sort((lhs: IWalletBalance, rhs: IWalletBalance) => {
    //     const leftPriority = getPriority(lhs.currency);
    //     const rightPriority = getPriority(rhs.currency);
    //     return rightPriority - leftPriority;
    //   })
    //   .map((balance: IWalletBalance) => ({
    //     ...balance,
    //     usdValue:
    //       prices[balance.currency as keyof typeof prices] * balance.amount,
    //     formatted: balance.amount.toFixed(),
    //   }));

    return balances.reduce((acc: IFormattedWalletBalance[], val) => {
      const balancePriority = getPriority(val.currency);
      if (balancePriority > -99 && val.amount > 0) {
        acc.push({
          ...val,
          usdValue: prices[val.currency as keyof typeof prices] * val.amount,
          formatted: val.amount.toFixed(),
        });
      }
      return acc;
    }, []);
  }, [balances, prices]);

  // Too many repeated similar class names so I just make this one. Tailwinds while make the code more maintainable can be too much to read.
  const headerClass =
    'typography-small-semibold cursor-pointer border-x px-6 py-3 text-left uppercase tracking-wider';

  // This is just me displaying the <WalletPage /> component through my own interpretation as a table display like a wallet you own.
  return (
    <div {...rest} className="grid gap-4">
      <h2 className="font-bold text-lg">Wallet Balances</h2>
      <table className="min-w-full divide-y divide-border rounded-lg border shadow">
        <thead className="bg-accent">
          <tr>
            <th className={headerClass}>Currency</th>
            <th className={headerClass}>Amount</th>
            <th className={headerClass}>Formatted Amount</th>
            <th className={headerClass}>USD Value</th>
          </tr>
        </thead>
        <tbody className="divide-y divide-border bg-white">
          {formattedBalances.map((balance: IFormattedWalletBalance) => (
            <WalletRow
              key={balance.currency}
              currency={balance.currency}
              amount={balance.amount}
              usdValue={balance.usdValue}
              formattedAmount={balance.formatted}
            />
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default WalletPage;
