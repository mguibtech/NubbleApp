import {useCallback, useEffect, useRef} from 'react';
import {Animated} from 'react-native';

import {ToastPosition} from '../../services/toast/toastTypes';
import {useToast, useToastService} from '../../services/toast/usetToast';

import {ToasContent} from './components/ToastContent';

const DEFAULT_DURATION = 4000;

export function Toast() {
  const toast = useToast();
  const {hideToast} = useToastService();

  const position: ToastPosition = toast?.position || 'top';
  const fadeAnim = useRef(new Animated.Value(0)).current;

  const runEnteringAnimation = useCallback(() => {
    Animated.timing(fadeAnim, {
      toValue: 1,
      duration: 1000,
      useNativeDriver: true,
    }).start();
  }, [fadeAnim]);

  const runExitingAnimation = useCallback(
    (callback: Animated.EndCallback) => {
      Animated.timing(fadeAnim, {
        toValue: 0,
        duration: 1000,
        useNativeDriver: true,
      }).start(callback);
    },
    [fadeAnim],
  );

  useEffect(() => {
    if (toast) {
      runEnteringAnimation();
      setTimeout(() => {
        runExitingAnimation(hideToast);
      }, toast.duration || DEFAULT_DURATION);
    }
  }, [hideToast, runEnteringAnimation, runExitingAnimation, toast]);

  if (!toast) {
    return null;
  }

  return (
    <Animated.View
      style={{
        position: 'absolute',
        alignSelf: 'center',
        opacity: fadeAnim,
        [position]: 100,
      }}>
      <ToasContent toast={toast} />
    </Animated.View>
  );
}
