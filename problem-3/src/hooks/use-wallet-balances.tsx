import type { IWalletBalance } from '../types/wallet-balance';

const FAKE_DATA: IWalletBalance[] = [
  {
    currency: 'Osmosis',
    amount: 1500.75,
  },
  {
    currency: 'Ethereum',
    amount: 1200.5,
  },
  {
    currency: 'Arbitrum',
    amount: 800.25,
  },
  {
    currency: 'Zilliqa',
    amount: 200000,
  },
  {
    currency: 'Neo',
    amount: 1800.0,
  },
  {
    currency: 'Cardano',
    amount: 500.0,
  },
];
// MOCK VALUE HOOKS
export function useWalletBalances() {
  return FAKE_DATA;
}
