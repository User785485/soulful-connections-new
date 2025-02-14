import { toast as sonnerToast } from 'sonner'

interface ToastProps {
  title?: string
  description?: string
  action?: {
    label: string
    onClick: () => void
  }
}

export function toast(props: ToastProps) {
  return sonnerToast(props.title || '', {
    description: props.description,
    action: props.action ? {
      label: props.action.label,
      onClick: props.action.onClick,
    } : undefined,
  })
}

export function useToast() {
  return {
    toast,
  }
}
