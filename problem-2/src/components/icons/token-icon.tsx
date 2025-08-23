import { useEffect, useState } from 'react';

/**
 * I am waayyyyyy to lazy create a bunch of token icons so I will just get the SVG like this.
 */
const TokenIcon = ({ currency, size }: { currency: string; size?: string }) => {
  const [imageSrc, setImageSrc] = useState(
    `https://raw.githubusercontent.com/Switcheo/token-icons/main/tokens/${currency}.svg`,
  );
  const [hasError, setHasError] = useState(false);

  const handleError = () => {
    const isStartWithST = currency.startsWith('ST');
    const isStartWithR = currency.startsWith('R');

    if (isStartWithST) {
      const newSrc = `https://raw.githubusercontent.com/Switcheo/token-icons/main/tokens/${currency.replace('ST', 'st')}.svg`;
      setImageSrc(newSrc);
      setHasError(false);
    } else if (isStartWithR) {
      const newSrc = `https://raw.githubusercontent.com/Switcheo/token-icons/main/tokens/${currency.replace('R', 'r')}.svg`;
      setImageSrc(newSrc);
      setHasError(false);
    }
  };

  useEffect(() => {
    setImageSrc(
      `https://raw.githubusercontent.com/Switcheo/token-icons/main/tokens/${currency}.svg`,
    );
    setHasError(false);
  }, [currency]);

  if (hasError) {
    return (
      <img
        src={imageSrc}
        width={size || '24'}
        height={size || '24'}
        alt={currency}
      />
    );
  }

  return (
    <img
      src={imageSrc}
      width={size || '24'}
      height={size || '24'}
      alt={currency}
      onError={handleError}
    />
  );
};

export { TokenIcon };
