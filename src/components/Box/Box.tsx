import {TouchableOpacity} from 'react-native';
import {Theme} from '../../theme/theme';
import {
  createBox,
  createRestyleComponent,
  backgroundColor,
  spacing,
  layout,
  border,
} from '@shopify/restyle';

export const Box = createBox<Theme>();

export const TouchableOpacityBox = createRestyleComponent(
  [backgroundColor, spacing, layout, border],
  TouchableOpacity,
);
