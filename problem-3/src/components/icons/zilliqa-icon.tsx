import type { TSvgIconProps } from './base-svg';
import { SvgIcon } from './base-svg';

function ZilliqaIcon(props: TSvgIconProps) {
  return (
    <SvgIcon {...props}>
      <circle cx="12" cy="12" r="12" fill="#49C1BF" />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M6 5.05493L15.554 9.48564L17.9999 8.43071L8.48489 4L6 5.05493Z"
        fill="#80D4D2"
      />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M15.5537 9.47583L17.9997 8.4209V10.7794L15.5537 11.8344V9.47583V9.47583Z"
        fill="#BFE9E8"
      />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M6 5.05713V7.44202L12.6134 10.5164L6 13.6548V16.0058L15.554 20.429V18.0629L9.06522 15.0413L15.554 11.8464V9.48783L6 5.05713Z"
        fill="white"
      />
      <path
        opacity="0.8"
        fillRule="evenodd"
        clipRule="evenodd"
        d="M15.5537 20.4112L17.9997 19.3563V11.9868L15.5537 13.053V20.4112Z"
        fill="#BFE9E8"
      />
    </SvgIcon>
  );
}

export { ZilliqaIcon };
