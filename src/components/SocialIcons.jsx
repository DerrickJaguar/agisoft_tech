const iconProps = {
  width: 16,
  height: 16,
  viewBox: '0 0 24 24',
  'aria-hidden': true,
}

export function FacebookIcon() {
  return (
    <svg {...iconProps} fill="#1877F2">
      <path d="M22 12.06C22 6.5 17.52 2 12 2S2 6.5 2 12.06c0 5 3.66 9.15 8.44 9.94v-7.03H7.9v-2.91h2.54V9.85c0-2.51 1.49-3.89 3.77-3.89 1.09 0 2.24.2 2.24.2v2.46h-1.26c-1.24 0-1.63.77-1.63 1.56v1.88h2.78l-.45 2.91h-2.33V22c4.78-.79 8.44-4.94 8.44-9.94Z" />
    </svg>
  )
}

export function LinkedinIcon() {
  return (
    <svg {...iconProps} fill="#0A66C2">
      <path d="M4.98 3.5C4.98 4.88 3.87 6 2.5 6S0 4.88 0 3.5 1.12 1 2.5 1s2.48 1.12 2.48 2.5ZM.22 8.5h4.56V23H.22V8.5ZM8.34 8.5h4.37v1.98h.06c.61-1.15 2.1-2.36 4.32-2.36 4.62 0 5.47 3.04 5.47 6.99V23h-4.56v-6.98c0-1.66-.03-3.8-2.32-3.8-2.32 0-2.68 1.81-2.68 3.68V23H8.34V8.5Z" />
    </svg>
  )
}

export function XIcon() {
  return (
    <svg {...iconProps} fill="#ffffff">
      <path d="M18.24 2H21l-6.55 7.49L22.2 22h-6.24l-4.88-6.38L5.47 22H2.7l7-8.02L1.8 2h6.4l4.42 5.84L18.24 2Zm-1.09 18h1.5L7.9 3.9H6.3L17.15 20Z" />
    </svg>
  )
}

export function InstagramIcon() {
  return (
    <svg {...iconProps}>
      <defs>
        <linearGradient id="instagram-brand-gradient" x1="0%" y1="100%" x2="100%" y2="0%">
          <stop offset="0%" stopColor="#F58529" />
          <stop offset="35%" stopColor="#DD2A7B" />
          <stop offset="70%" stopColor="#8134AF" />
          <stop offset="100%" stopColor="#515BD4" />
        </linearGradient>
      </defs>
      <rect
        x="2"
        y="2"
        width="20"
        height="20"
        rx="5.5"
        fill="none"
        stroke="url(#instagram-brand-gradient)"
        strokeWidth="1.8"
      />
      <circle cx="12" cy="12" r="4.6" fill="none" stroke="url(#instagram-brand-gradient)" strokeWidth="1.8" />
      <circle cx="17.4" cy="6.6" r="1.15" fill="url(#instagram-brand-gradient)" />
    </svg>
  )
}

const tiktokPath =
  'M12.53.02C13.84 0 15.14.01 16.44 0c.08 1.53.63 3.09 1.75 4.17 1.12 1.11 2.7 1.62 4.24 1.79v4.03c-1.44-.05-2.89-.35-4.2-.97-.57-.26-1.1-.59-1.62-.93-.01 2.92.01 5.84-.02 8.75-.08 1.4-.54 2.79-1.35 3.94-1.31 1.92-3.58 3.17-5.91 3.21-1.43.08-2.86-.31-4.08-1.03-2.02-1.19-3.44-3.37-3.65-5.71-.02-.5-.03-1-.01-1.49.18-1.9 1.12-3.72 2.58-4.96 1.66-1.44 3.98-2.13 6.15-1.72.02 1.48-.04 2.96-.04 4.44-.99-.32-2.15-.23-3.02.37-.63.41-1.11 1.04-1.36 1.75-.21.51-.15 1.07-.14 1.61.24 1.64 1.82 3.02 3.5 2.87 1.12-.01 2.19-.66 2.77-1.61.19-.33.4-.67.41-1.06.1-1.79.06-3.57.07-5.36.01-4.03-.01-8.05.02-12.07Z'

export function TiktokIcon() {
  return (
    <svg {...iconProps}>
      <path d={tiktokPath} fill="#25F4EE" transform="translate(-0.9, 0.6)" />
      <path d={tiktokPath} fill="#FE2C55" transform="translate(0.9, -0.6)" />
      <path d={tiktokPath} fill="#ffffff" />
    </svg>
  )
}
