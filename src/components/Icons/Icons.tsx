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

export function NpmIcon({ className }: IconProps) {
  return (
    <svg
      className={classNames("Icon--root", className)}
      viewBox="0 0 24 24"
      fill="currentColor"
      aria-hidden="true"
    >
      <path d="M1.763 0C.786 0 0 .786 0 1.763v20.474C0 23.214.786 24 1.763 24h20.474c.977 0 1.763-.786 1.763-1.763V1.763C24 .786 23.214 0 22.237 0zM5.13 5.323l13.837.019-.009 13.836h-3.464l.01-10.382h-3.456l-.01 10.382H5.13z" />
    </svg>
  );
}

export function BlueskyIcon({ className }: IconProps) {
  return (
    <svg
      className={classNames("Icon--root", className)}
      viewBox="0 0 24 24"
      fill="currentColor"
      aria-hidden="true"
    >
      <path d="M12 10.8c-1.087-2.114-4.046-6.053-6.798-7.995C2.566.944 1.561 1.266.902 1.565.139 1.908 0 3.08 0 3.768c0 .69.378 5.65.624 6.479.815 2.736 3.713 3.66 6.383 3.364.136-.02.275-.039.415-.056-.138.022-.276.04-.415.056-3.912.58-7.387 2.005-2.83 7.078 5.013 5.19 6.87-1.113 7.823-4.308.953 3.195 2.05 9.271 7.733 4.308 4.267-4.308 1.172-6.498-2.74-7.078a8.741 8.741 0 0 1-.415-.056c.14.017.279.036.415.056 2.67.297 5.568-.628 6.383-3.364.246-.828.624-5.79.624-6.478 0-.69-.139-1.861-.902-2.204-.659-.3-1.664-.62-4.3 1.24C16.046 4.748 13.087 8.687 12 10.8Z" />
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
