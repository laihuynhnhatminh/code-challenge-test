import type { TSvgIconProps } from './base-svg';
import { SvgIcon } from './base-svg';

function NeoIcon(props: TSvgIconProps) {
  return (
    <SvgIcon {...props} viewBox="0 0 25 25">
      <circle fill="#00E599" cx="12" cy="12" r="12"></circle>
      <polygon
        fill="#FFFFFF"
        points="6 7.45 6 16.78 11.75 19 11.75 9.55 18 7.1 12.3 5"
      ></polygon>
      <polygon
        fill="#FFFFFF"
        points="12.19 9.9 12.19 14.92 18 17.13 18 7.63"
      ></polygon>
    </SvgIcon>
  );
}

export { NeoIcon };
