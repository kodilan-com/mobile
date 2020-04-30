import React from 'react';
import Icon from 'react-native-vector-icons/Feather';
import {View, Text, Image, StyleSheet} from 'react-native';

function PostPreview() {
  return (
    <View style={styles.post}>
      <View style={styles.top}>
        <View style={{flex: 1}}>
          <Text style={styles.title}>Kıdemli Android Geliştirme Danışmanı</Text>
          <Text style={styles.type}>Tam Zamanlı</Text>
        </View>
        <Image
          style={styles.image}
          source={{
            uri:
              'https://kodilan.ams3.digitaloceanspaces.com/companies/piple.png',
          }}
        />
      </View>
      <View style={styles.info}>
        <View style={styles.infoItem}>
          <Icon name="briefcase" color="#333" size={14} />
          <Text style={styles.infoText} numberOfLines={1}>
            Piple
          </Text>
        </View>
        <View style={styles.infoItem}>
          <Icon name="map-pin" color="#333" size={14} />
          <Text style={styles.infoText} numberOfLines={1}>
            Bursa
          </Text>
        </View>
        <View style={styles.infoItem}>
          <Icon name="clock" color="#333" size={14} />
          <Text style={styles.infoText} numberOfLines={1}>
            1 gün önce
          </Text>
        </View>
      </View>
      <View style={styles.tags}>
        <View style={styles.tag}>
          <Text style={styles.tagText}>php</Text>
        </View>
        <View style={styles.tag}>
          <Text style={styles.tagText}>laravel</Text>
        </View>
        <View style={styles.tag}>
          <Text style={styles.tagText}>symfony</Text>
        </View>
        <View style={styles.tag}>
          <Text style={styles.tagText}>backend</Text>
        </View>
        <View style={styles.tag}>
          <Text style={styles.tagText}>redis</Text>
        </View>
        <View style={styles.tag}>
          <Text style={styles.tagText}>mysql</Text>
        </View>
        <View style={styles.tag}>
          <Text style={styles.tagText}>mongodb</Text>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  post: {
    width: '100%',
    borderLeftWidth: 0,
    borderLeftColor: '#186fc9',
    paddingHorizontal: 24,
    paddingTop: 20,
    paddingBottom: 15,
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
  image: {
    width: 40,
    height: 40,
    marginLeft: 20,
    marginTop: 5,
  },
  info: {
    flexDirection: 'row',
    marginTop: 14,
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
    marginTop: 14
  },
  tag: {
    backgroundColor: '#f1f1f1',
    borderColor: '#eee',
    borderWidth: 1,
    borderRadius: 3,
    paddingVertical: 4,
    paddingHorizontal: 8,
    marginRight: 8,
    marginBottom: 10
  },
  tagText: {
    color: '#666',
    fontSize: 13,
  },
});

export default PostPreview;
