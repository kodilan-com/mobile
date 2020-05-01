import React from 'react';
import Icon from 'react-native-vector-icons/Feather';
import {View, Text, Image, StyleSheet, TouchableOpacity} from 'react-native';
import {SvgUri} from 'react-native-svg';
import {useNavigation} from '@react-navigation/native';
import Tag from '../components/Tag';
import CompanyImage from './CompanyImage';
import timeSince from '../helpers/timeSince';

function PostPreview({data}) {
  const navigation = useNavigation();
  function onPressPost() {
    navigation.push('Post', {data});
  }
  function renderType() {
    if (data.type === 1) {
      return <Text style={styles.type}>Tam Zamanlı</Text>;
    } else if (data.type === 2) {
      return <Text style={[styles.type, styles.type2]}>Yarı Zamanlı</Text>;
    } else if (data.type === 3) {
      return <Text style={[styles.type, styles.type3]}>Stajyer</Text>;
    }
  }
  function renderTags() {
    return (
      <>
        {data.tags.length ? (
          <View style={styles.tags}>
            {data.tags.map(tag => (
              <Tag
                name={tag.name}
                key={data.slug + '-' + tag.slug}
                type="tag"
                tagStyle={styles.tag}
                tagTextStyle={styles.tagText}
              />
            ))}
          </View>
        ) : null}
      </>
    );
  }
  return (
    <TouchableOpacity
      style={styles.post}
      activeOpacity={0.75}
      onPress={() => onPressPost()}>
      <View style={styles.top}>
        <View style={{flex: 1}}>
          <Text style={styles.title}>{data.position}</Text>
          {renderType()}
        </View>
        <CompanyImage
          style={styles.image}
          uri={data.company.logo}
          width={40}
          height={40}
        />
      </View>
      <View style={styles.info}>
        <View style={styles.infoItem}>
          <Icon name="briefcase" color="#333" size={14} />
          <Text style={styles.infoText} numberOfLines={1}>
            {data.company.name}
          </Text>
        </View>
        <View style={styles.infoItem}>
          <Icon name="map-pin" color="#333" size={14} />
          <Text style={styles.infoText} numberOfLines={1}>
            {data.location}
          </Text>
        </View>
        <View style={styles.infoItem}>
          <Icon name="clock" color="#333" size={14} />
          <Text style={styles.infoText} numberOfLines={1}>
            {timeSince(data.updated_at)}
          </Text>
        </View>
      </View>
      {renderTags()}
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  post: {
    width: '100%',
    borderLeftWidth: 0,
    borderLeftColor: '#186fc9',
    paddingHorizontal: 24,
    paddingTop: 20,
    paddingBottom: 14,
    backgroundColor: '#FFF',
    borderBottomColor: '#e0e0e0',
    borderBottomWidth: 1,
  },
  top: {
    flexDirection: 'row',
  },
  title: {
    letterSpacing: 0,
    fontSize: 17,
    lineHeight: 24,
    marginBottom: 12,
    color: '#333',
  },
  type: {
    color: '#186fc9',
    borderColor: '#186fc9',
    backgroundColor: '#f1f7fc',
    borderWidth: 1,
    borderRadius: 3,
    fontSize: 12,
    paddingVertical: 4,
    paddingHorizontal: 8,
    fontWeight: '500',
    alignSelf: 'flex-start',
  },
  type2: {
    color: '#f1630d',
    borderColor: '#f1630d',
    backgroundColor: '#fef6f0',
  },
  type3: {
    color: '#dcaa0c',
    borderColor: '#dcaa0c',
    backgroundColor: '#fdfcf2',
  },
  image: {
    width: 40,
    height: 40,
    marginLeft: 20,
    marginTop: 5,
    backgroundColor: '#f9f9f9',
    borderRadius: 20,
  },
  info: {
    flexDirection: 'row',
    marginTop: 14,
    flexWrap: 'wrap',
  },
  infoItem: {
    marginRight: 14,
    flexDirection: 'row',
    alignItems: 'center',
  },
  infoText: {
    marginLeft: 6,
    fontSize: 13,
    color: '#666',
  },
  tags: {
    flexWrap: 'wrap',
    alignItems: 'flex-start',
    flexDirection: 'row',
    marginTop: 14,
  },
  tag: {
    backgroundColor: '#f1f1f1',
    borderColor: '#eee',
    borderWidth: 1,
    borderRadius: 3,
    paddingVertical: 4,
    paddingHorizontal: 8,
    marginRight: 8,
    marginBottom: 10,
  },
  tagText: {
    color: '#666',
    fontSize: 13,
  },
});

export default PostPreview;
