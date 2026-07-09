import { useId, useMemo } from 'react'

function hashString(str) {
  let hash = 0
  for (let i = 0; i < str.length; i += 1) {
    hash = (hash << 5) - hash + str.charCodeAt(i)
    hash |= 0
  }
  return Math.abs(hash)
}

const patterns = ['dots', 'grid', 'diagonal', 'rings']

export default function CoverArt({ icon: Icon, seed, dark = true, className = '', children }) {
  const uid = useId()
  const { pattern, rotation } = useMemo(() => {
    const hash = hashString(seed || 'agisoft')
    return {
      pattern: patterns[hash % patterns.length],
      rotation: (hash % 24) - 12,
    }
  }, [seed])

  const stroke = dark ? 'rgba(255,255,255,0.14)' : 'rgba(12,122,63,0.14)'

  return (
    <div
      className={`relative overflow-hidden ${
        dark
          ? 'bg-gradient-to-br from-charcoal to-primary-dark'
          : 'bg-gradient-to-br from-primary/15 to-primary-light/10'
      } ${className}`}
    >
      <PatternLayer type={pattern} stroke={stroke} uid={uid} />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_20%,rgba(255,255,255,0.18),transparent_60%)]" />
      {Icon && (
        <Icon
          size={112}
          strokeWidth={1}
          className={`absolute -bottom-5 -right-5 ${dark ? 'text-white/10' : 'text-primary/15'}`}
          style={{ transform: `rotate(${rotation}deg)` }}
        />
      )}
      {children}
    </div>
  )
}

function PatternLayer({ type, stroke, uid }) {
  if (type === 'dots') {
    return (
      <svg className="absolute inset-0 h-full w-full" aria-hidden="true">
        <defs>
          <pattern id={`dots-${uid}`} width="18" height="18" patternUnits="userSpaceOnUse">
            <circle cx="2" cy="2" r="1.4" fill={stroke} />
          </pattern>
        </defs>
        <rect width="100%" height="100%" fill={`url(#dots-${uid})`} />
      </svg>
    )
  }

  if (type === 'grid') {
    return (
      <svg className="absolute inset-0 h-full w-full" aria-hidden="true">
        <defs>
          <pattern id={`grid-${uid}`} width="28" height="28" patternUnits="userSpaceOnUse">
            <path d="M28 0H0V28" fill="none" stroke={stroke} strokeWidth="1" />
          </pattern>
        </defs>
        <rect width="100%" height="100%" fill={`url(#grid-${uid})`} />
      </svg>
    )
  }

  if (type === 'diagonal') {
    return (
      <svg className="absolute inset-0 h-full w-full" aria-hidden="true">
        <defs>
          <pattern
            id={`diagonal-${uid}`}
            width="16"
            height="16"
            patternUnits="userSpaceOnUse"
            patternTransform="rotate(45)"
          >
            <line x1="0" y1="0" x2="0" y2="16" stroke={stroke} strokeWidth="2" />
          </pattern>
        </defs>
        <rect width="100%" height="100%" fill={`url(#diagonal-${uid})`} />
      </svg>
    )
  }

  return (
    <svg className="absolute inset-0 h-full w-full" aria-hidden="true">
      <circle cx="85%" cy="20%" r="50" fill="none" stroke={stroke} strokeWidth="1.5" />
      <circle cx="85%" cy="20%" r="80" fill="none" stroke={stroke} strokeWidth="1.5" />
      <circle cx="85%" cy="20%" r="110" fill="none" stroke={stroke} strokeWidth="1.5" />
    </svg>
  )
}
