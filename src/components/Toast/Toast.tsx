import {Box, BoxProps, Icon, Text} from '@components';
import {useToast} from '@services';
import {$shadowProps} from '@theme';
import {useEffect} from 'react';
import {Dimensions} from 'react-native';

const MAX_WIDTH = Dimensions.get('screen').width * 0.9;

export function Toast() {
  const {toast, hiddenToast} = useToast();

  useEffect(() => {
    if (toast) {
      setTimeout(() => {
        hiddenToast();
      }, 2000);
    }
  }, [hiddenToast, toast]);

  if (!toast) {
    return null;
  }
  return (
    <Box top={100} {...$boxStyle}>
      <Icon color="success" name="checkRound" />
      <Text style={{flexShrink: 1}} ml="s16" preset="paragraphMedium" bold>
        {toast.message}
      </Text>
    </Box>
  );
}

const $boxStyle: BoxProps = {
  alignSelf: 'center',
  position: 'absolute',
  bg: 'background',
  alignItems: 'center',
  padding: 's16',
  flexDirection: 'row',
  borderRadius: 's16',
  opacity: 0.95,
  maxWidth: MAX_WIDTH,
  style: {...$shadowProps},
};
