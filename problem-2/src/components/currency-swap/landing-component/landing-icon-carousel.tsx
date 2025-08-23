import AutoScroll from 'embla-carousel-auto-scroll';

import { useFetchExchangeRate } from '../../../hooks/use-fetch-exchange-rate';
import { TokenIcon } from '../../icons/token-icon';
import { Carousel, CarouselContent, CarouselItem } from '../../ui/carousel';

export function LandingIconCarousel() {
  const { exchangeRate } = useFetchExchangeRate();

  return (
    <Carousel
      opts={{
        align: 'start',
        loop: true,
      }}
      plugins={[
        AutoScroll({
          speed: 0.75,
          stopOnFocusIn: false,
          stopOnMouseEnter: false,
          stopOnInteraction: false,
        }),
      ]}
      className="w-full rounded-full border border-primary p-4"
    >
      <CarouselContent>
        {Array.from(exchangeRate.keys()).map((currency) => (
          <CarouselItem key={currency} className="md:basis-1/6 lg:basis-1/12">
            <div className="p-1">
              <TokenIcon currency={currency} size="40" />
            </div>
          </CarouselItem>
        ))}
      </CarouselContent>
    </Carousel>
  );
}
