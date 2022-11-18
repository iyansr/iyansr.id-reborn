import * as React from 'react';

const GlobeIcon = (props: React.SVGProps<SVGSVGElement>) => (
  <svg
    width={32}
    height={32}
    viewBox="0 0 32 32"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <path
      opacity={0.2}
      d="M16 28c6.627 0 12-5.373 12-12S22.627 4 16 4 4 9.373 4 16s5.373 12 12 12Z"
      fill="#4E5E80"
    />
    <path
      d="M16 28c6.627 0 12-5.373 12-12S22.627 4 16 4 4 9.373 4 16s5.373 12 12 12Z"
      stroke="#4E5E80"
      strokeWidth={2}
      strokeMiterlimit={10}
    />
    <path
      d="M4.688 12h22.625M4.688 20h22.625"
      stroke="#4E5E80"
      strokeWidth={2}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path
      d="M16 27.675c2.761 0 5-5.227 5-11.675S18.761 4.325 16 4.325 11 9.552 11 16s2.239 11.675 5 11.675Z"
      stroke="#4E5E80"
      strokeWidth={2}
      strokeMiterlimit={10}
    />
  </svg>
);

export default GlobeIcon;
