import type { ComponentProps, JSX } from 'react';

import { ArbitrumIcon } from './icons/arbitrum-icon';
import { EthereumIcon } from './icons/ethereum-icon';
import { NeoIcon } from './icons/neo-icon';
import { OsmosisIcon } from './icons/osmosis-icon';
import { ZilliqaIcon } from './icons/zilliqa-icon';
import { formatStringNumber } from '../utils/format-number';

/**
 * get icon display for the specific currency
 * return null if not found -> won't display the component
 */
const getCurrencyIcon = (currency: string) => {
  const icons: Record<string, JSX.Element> = {
    Osmosis: <OsmosisIcon size={24} />,
    Ethereum: <EthereumIcon size={24} />,
    Arbitrum: <ArbitrumIcon size={24} />,
    Zilliqa: <ZilliqaIcon size={24} />,
    Neo: <NeoIcon size={24} />,
  };

  return icons[currency] || null;
};

interface IProps extends ComponentProps<'tr'> {
  cellClassName?: string;
  currency: string;
  amount: number;
  usdValue: number;
  formattedAmount: string;
}

const WalletRow: React.FC<IProps> = (props: IProps) => {
  const {
    amount,
    usdValue,
    formattedAmount,
    currency,
    cellClassName,
    ...rest
  } = props;

  const cellClasses = `typography-small-normal whitespace-nowrap border-x px-6 py-4 text-primary ${cellClassName}`;

  return (
    <tr {...rest}>
      <td className={cellClasses}>
        <span className="flex items-center gap-2">
          {getCurrencyIcon(currency)}
          {currency}
        </span>
      </td>
      <td className={cellClasses}>{amount.toLocaleString()}</td>
      <td className={cellClasses}>{formatStringNumber(formattedAmount)}</td>
      <td className={cellClasses}>{usdValue.toLocaleString()}</td>
    </tr>
  );
};

export { WalletRow };
