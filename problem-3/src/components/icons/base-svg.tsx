import type { ComponentProps } from 'react';

type TSvgIconSize =
  | 'small'
  | 'medium'
  | 'mediumPlus'
  | 'large'
  | 'larger'
  | number;

const iconSizeMap: Record<TSvgIconSize, number> = {
  small: 12,
  medium: 16,
  mediumPlus: 20,
  large: 24,
  larger: 40,
};

type TSvgIconProps = ComponentProps<'svg'> & {
  size?: TSvgIconSize;
};

function SvgIcon(props: TSvgIconProps) {
  const {
    className,
    viewBox = '0 0 24 24',
    size: sizeProp = 'medium',
    fill = 'none',
    ...rest
  } = props;
  const size = !Number.isNaN(Number.parseInt(sizeProp as string, 10))
    ? sizeProp
    : iconSizeMap[sizeProp];

  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      className={`select-none ${className}`}
      focusable={false}
      aria-hidden
      width={size}
      height={size}
      viewBox={viewBox}
      fill={fill}
      {...rest}
    />
  );
}

export type { TSvgIconProps };
export { SvgIcon };
