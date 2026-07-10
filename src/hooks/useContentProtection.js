import { useEffect } from 'react'

const isEditableTarget = (target) =>
  target?.closest?.('input, textarea, [contenteditable="true"]')

export default function useContentProtection() {
  useEffect(() => {
    const blockContextMenu = (e) => {
      if (!isEditableTarget(e.target)) e.preventDefault()
    }
    const blockClipboardEvent = (e) => {
      if (!isEditableTarget(e.target)) e.preventDefault()
    }

    document.addEventListener('contextmenu', blockContextMenu)
    document.addEventListener('copy', blockClipboardEvent)
    document.addEventListener('cut', blockClipboardEvent)

    return () => {
      document.removeEventListener('contextmenu', blockContextMenu)
      document.removeEventListener('copy', blockClipboardEvent)
      document.removeEventListener('cut', blockClipboardEvent)
    }
  }, [])
}
