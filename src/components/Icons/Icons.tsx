import { classNames } from 'cascade-kit-tools/classNames';
import './Icons.css';

interface IconProps {
  className?: string;
}

export function GitHubIcon({ className }: IconProps) {
  return (
    <svg
      className={classNames("Icon--root", className)}
      viewBox="0 0 24 24"
      fill="currentColor"
      aria-hidden="true"
    >
      <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0024 12c0-6.63-5.37-12-12-12z" />
    </svg>
  );
}

export function MenuIcon({ className }: IconProps) {
  return (
    <svg
      className={classNames("Icon--root", className)}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      aria-hidden="true"
    >
      <path d="M3 12h18M3 6h18M3 18h18" />
    </svg>
  );
}

export function MainIcon({ className }: IconProps) {
  return (
    <svg className={classNames("Icon--root Icon--main", className)} width="107" height="75" viewBox="0 0 107 75" fill="none" xmlns="http://www.w3.org/2000/svg">
      <g filter="url(#filter0_d_8_5455)">
        <rect x="37.0822" y="66.3511" width="45.1765" height="45.1765" rx="3.74595" transform="rotate(-135 37.0822 66.3511)" fill="#D6FAC8" fill-opacity="0.2" shape-rendering="crispEdges" />
        <rect x="37.0822" y="65.5943" width="44.1062" height="44.1062" rx="3.21081" transform="rotate(-135 37.0822 65.5943)" stroke="#B0CBE1" stroke-width="1.07027" shape-rendering="crispEdges" />
      </g>
      <g filter="url(#filter1_d_8_5455)">
        <rect x="53.3442" y="66.3511" width="45.1765" height="45.1765" rx="3.74595" transform="rotate(-135 53.3442 66.3511)" fill="#B0CBE1" fill-opacity="0.6" shape-rendering="crispEdges" />
        <rect x="53.3442" y="65.5943" width="44.1062" height="44.1062" rx="3.21081" transform="rotate(-135 53.3442 65.5943)" stroke="#B0CBE1" stroke-width="1.07027" shape-rendering="crispEdges" />
      </g>
      <g filter="url(#filter2_d_8_5455)">
        <rect x="69.6063" y="66.3511" width="45.1765" height="45.1765" rx="3.74595" transform="rotate(-135 69.6063 66.3511)" fill="#FFDC9A" fill-opacity="0.2" shape-rendering="crispEdges" />
        <rect x="69.6063" y="65.5943" width="44.1062" height="44.1062" rx="3.21081" transform="rotate(-135 69.6063 65.5943)" stroke="#B0CBE1" stroke-width="1.07027" shape-rendering="crispEdges" />
      </g>
      <defs>
        <filter id="filter0_d_8_5455" x="1.63317e-05" y="-2.68221e-05" width="74.1643" height="74.1643" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
          <feFlood flood-opacity="0" result="BackgroundImageFix" />
          <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha" />
          <feMorphology radius="1.33784" operator="dilate" in="SourceAlpha" result="effect1_dropShadow_8_5455" />
          <feOffset dy="2.67568" />
          <feGaussianBlur stdDeviation="2.67568" />
          <feComposite in2="hardAlpha" operator="out" />
          <feColorMatrix type="matrix" values="0 0 0 0 0.282353 0 0 0 0 0.384314 0 0 0 0 0.458824 0 0 0 0.2 0" />
          <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_8_5455" />
          <feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_8_5455" result="shape" />
        </filter>
        <filter id="filter1_d_8_5455" x="16.2621" y="-2.68221e-05" width="74.1643" height="74.1643" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
          <feFlood flood-opacity="0" result="BackgroundImageFix" />
          <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha" />
          <feMorphology radius="1.33784" operator="dilate" in="SourceAlpha" result="effect1_dropShadow_8_5455" />
          <feOffset dy="2.67568" />
          <feGaussianBlur stdDeviation="2.67568" />
          <feComposite in2="hardAlpha" operator="out" />
          <feColorMatrix type="matrix" values="0 0 0 0 0.282353 0 0 0 0 0.384314 0 0 0 0 0.458824 0 0 0 0.2 0" />
          <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_8_5455" />
          <feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_8_5455" result="shape" />
        </filter>
        <filter id="filter2_d_8_5455" x="32.5242" y="-2.68221e-05" width="74.1643" height="74.1643" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
          <feFlood flood-opacity="0" result="BackgroundImageFix" />
          <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha" />
          <feMorphology radius="1.33784" operator="dilate" in="SourceAlpha" result="effect1_dropShadow_8_5455" />
          <feOffset dy="2.67568" />
          <feGaussianBlur stdDeviation="2.67568" />
          <feComposite in2="hardAlpha" operator="out" />
          <feColorMatrix type="matrix" values="0 0 0 0 0.282353 0 0 0 0 0.384314 0 0 0 0 0.458824 0 0 0 0.2 0" />
          <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_8_5455" />
          <feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_8_5455" result="shape" />
        </filter>
      </defs>
    </svg>

  );
}
