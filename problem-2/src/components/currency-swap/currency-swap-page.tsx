import { motion } from 'motion/react';
import { useCallback } from 'react';

import { CurrencySwap } from './currency-swap';
import { LandingCTA } from './landing-component/landing-CTA';
import { LandingFeature } from './landing-component/landing-feature';
import { LandingIconCarousel } from './landing-component/landing-icon-carousel';
import { Button } from '../ui/button';
import { Input } from '../ui/input';

// Not my original design, just looking online and find some inspiration
export default function CurrencySwapPage() {
  // Should be useCallback if pass into another component (not really needed in this case but a reminder nonetheless)
  const handleScrollToBottom = useCallback(() => {
    scrollTo({ top: document.body.scrollHeight, behavior: 'smooth' });
  }, []);

  return (
    <div className="space-y-6">
      <div className="grid grid-cols-1 items-center py-16 md:grid-cols-2">
        <motion.div
          initial={{ opacity: 0, x: 100 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5 }}
          className="order-2 grid items-center justify-center gap-4 p-4 text-primary md:order-1"
        >
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
        </motion.div>
        <motion.div
          initial={{ opacity: 0, x: -100 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5 }}
          className="order-1 flex justify-center md:order-2"
        >
          <CurrencySwap />
        </motion.div>
      </div>
      {/* This is the landing section I added to make the page a bit longer and have some content instead of just a Swapper Component */}
      <LandingIconCarousel />
      <LandingFeature />
      <LandingCTA />
    </div>
  );
}
