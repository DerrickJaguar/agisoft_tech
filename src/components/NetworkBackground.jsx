import { motion } from 'framer-motion'

const nodes = [
  { x: 60, y: 80 },
  { x: 180, y: 40 },
  { x: 320, y: 110 },
  { x: 460, y: 60 },
  { x: 580, y: 140 },
  { x: 700, y: 70 },
  { x: 120, y: 220 },
  { x: 300, y: 260 },
  { x: 480, y: 230 },
  { x: 640, y: 280 },
  { x: 200, y: 380 },
  { x: 400, y: 360 },
  { x: 560, y: 400 },
  { x: 80, y: 340 },
]

const edges = [
  [0, 1],
  [1, 2],
  [2, 3],
  [3, 4],
  [4, 5],
  [0, 6],
  [1, 7],
  [2, 7],
  [3, 8],
  [4, 9],
  [6, 7],
  [7, 8],
  [8, 9],
  [6, 10],
  [7, 11],
  [8, 12],
  [10, 11],
  [11, 12],
  [10, 13],
  [6, 13],
]

export default function NetworkBackground({ className = '' }) {
  return (
    <svg
      viewBox="0 0 760 460"
      preserveAspectRatio="xMidYMid slice"
      className={`pointer-events-none ${className}`}
      aria-hidden="true"
    >
      {edges.map(([a, b], i) => (
        <motion.line
          key={`${a}-${b}`}
          x1={nodes[a].x}
          y1={nodes[a].y}
          x2={nodes[b].x}
          y2={nodes[b].y}
          stroke="url(#network-line)"
          strokeWidth="1"
          initial={{ opacity: 0.15 }}
          animate={{ opacity: [0.1, 0.35, 0.1] }}
          transition={{ duration: 4 + (i % 5), repeat: Infinity, ease: 'easeInOut', delay: i * 0.15 }}
        />
      ))}
      {nodes.map((node, i) => (
        <motion.circle
          key={i}
          cx={node.x}
          cy={node.y}
          r={i % 3 === 0 ? 3.5 : 2.5}
          fill="#12a355"
          initial={{ opacity: 0.4 }}
          animate={{ opacity: [0.3, 0.9, 0.3], cy: [node.y, node.y - 6, node.y] }}
          transition={{
            duration: 5 + (i % 4),
            repeat: Infinity,
            ease: 'easeInOut',
            delay: i * 0.2,
          }}
        />
      ))}
      <defs>
        <linearGradient id="network-line" x1="0" y1="0" x2="1" y2="1">
          <stop offset="0%" stopColor="#12a355" stopOpacity="0.6" />
          <stop offset="100%" stopColor="#ffffff" stopOpacity="0.2" />
        </linearGradient>
      </defs>
    </svg>
  )
}
