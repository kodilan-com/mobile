import React from 'react';
import {View} from 'react-native';
import Tag from '../components/Tag';

function Tags({tags, slug, style, tagStyle, tagTextStyle}) {
  return (
    <View style={style}>
      {tags.map(tag => (
        <Tag
          name={tag.name}
          key={slug + '-' + tag.slug}
          type="tag"
          tagStyle={tagStyle}
          tagTextStyle={tagTextStyle}
        />
      ))}
    </View>
  );
}

export default Tags;
