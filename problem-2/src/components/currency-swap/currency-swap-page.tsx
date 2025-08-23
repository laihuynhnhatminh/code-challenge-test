import { CurrencySwap } from './currency-swap';
import { LandingCTA } from './landing-component/landing-CTA';
import { LandingFeature } from './landing-component/landing-feature';
import { Button } from '../ui/button';

export default function CurrencySwapPage() {
  const handleScrollToBottom = () => {
    scrollTo({ top: document.body.scrollHeight, behavior: 'smooth' });
  };

  return (
    <div className="space-y-4">
      <div className="grid grid-cols-1 items-center py-16 md:grid-cols-2">
        <div className="order-2 grid items-center justify-center gap-4 p-4 text-primary md:order-1">
          <h1 className="typography-base-semibold text-4xl">
            Powerful Web3 Crypto Currency Exchange Tools
          </h1>
          <span>Buy, sell, swap crypto: fast, secure, trusted since 2017</span>
          <Button
            name="get-started"
            className="w-fit"
            type="button"
            onClick={handleScrollToBottom}
          >
            Get Started
          </Button>
        </div>
        <CurrencySwap />
      </div>
      <LandingFeature />
      <LandingCTA />
    </div>
  );
}
