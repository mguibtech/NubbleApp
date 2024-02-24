import React from 'react';
import {Dimensions} from 'react-native';

import {
  Toast,
  //   ToastPosition,
  ToastType,
} from '../../../services/toast/toastTypes';
import {$shadowProps} from '../../../theme/theme';
import {Box, BoxProps} from '../../Box/Box';
import {Icon, IconProps} from '../../Icon/Icon';
import {Text} from '../../Text/Text';

const MAX_WIDTH = Dimensions.get('screen').width * 0.9;

interface Props {
  toast: Toast;
}

export function ToastContent({toast}: Props) {
  //   const pisition: ToastPosition = toast?.positional || 'bottom';
  const type: ToastType = toast.type || 'success';

  return (
    <Box {...$boxStyle} style={$shadowProps}>
      <Icon {...mapTypeToIcon[type]} />
      <Text style={{flexShrink: 1}} ml="s16" preset="paragraphMediun" bold>
        {toast.message}
      </Text>
    </Box>
  );
}

const mapTypeToIcon: Record<ToastType, IconProps> = {
  success: {
    color: 'success',
    name: 'checkiconRound',
  },
  error: {
    color: 'error',
    name: 'alertIcon',
  },
  warning: {
    color: 'yellow',
    name: 'alertIcon',
  },
};

const $boxStyle: BoxProps = {
  backgroundColor: 'background',
  alignItems: 'center',
  p: 's16',
  borderRadius: 's16',
  flexDirection: 'row',
  opacity: 0.95,
  maxWidth: MAX_WIDTH,
  style: {...$shadowProps},
};
