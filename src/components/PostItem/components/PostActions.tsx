import React from 'react';
import {Box, Icon, IconProps, Text, TouchableOpacityBox} from '@components';
import {Post} from '@domain';

type Props = Pick<Post, 'commentCount' | 'favoriteCount' | 'reactionCount'>;

export function PostActions({
  commentCount,
  reactionCount,
  favoriteCount,
}: Props) {
  function likePost() {
    //TODO: Implement like post
  }

  function navigateToComments() {
    //TODO: Implement navigate to comments
  }

  function favoritePost() {
    //TODO: Implement navigate to comments
  }

  return (
    <Box flexDirection="row" mt="s16">
      <Item
        icon={{default: 'heart', marked: 'heartFill'}}
        onPress={likePost}
        text={reactionCount}
        marked
        key={Item.name}
      />
      <Item
        icon={{default: 'comment', marked: 'comment'}}
        onPress={likePost}
        text={commentCount}
        key={Item.name}
      />
      <Item
        icon={{default: 'bookmark', marked: 'bookmarkFill'}}
        onPress={likePost}
        text={favoriteCount}
        key={Item.name}
      />
    </Box>
  );
}

interface ItemProps {
  onPress: () => void;
  icon: {
    default: IconProps['name'];
    marked: IconProps['name'];
  };
  text: number;
  marked?: boolean;
}

function Item({onPress, icon, text, marked}: ItemProps) {
  return (
    <TouchableOpacityBox
      onPress={onPress}
      flexDirection="row"
      mr="s24"
      alignItems="center">
      <Icon
        color={marked ? 'marked' : undefined}
        name={marked ? icon.marked : icon.default}
      />
      {text > 0 && (
        <Text ml="s4" bold preset="paragraphSmall">
          {text.toString()}
        </Text>
      )}
    </TouchableOpacityBox>
  );
}
