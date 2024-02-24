export type ToastPosition = 'top' | 'bottom';
export type ToastType = 'success' | 'warning' | 'error';

export interface Toast {
  message: string;
  type?: ToastType;
  positional?: ToastPosition;
  duration?: number;
  action?: {
    title: string;
    onPress: () => void;
  };
}

export interface ToastService {
  toast: Toast | null;
  showToast: (toast: Toast) => void;
  hideToast: () => void;
}
