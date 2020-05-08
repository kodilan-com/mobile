import React from 'react';
import {View, StyleSheet} from 'react-native';
import ShimmerPlaceHolder from 'react-native-shimmer-placeholder';

function PostPreviewSkeleton() {
  return (
    <View
      style={styles.post}
      activeOpacity={0.75}
      onPress={() => onPressPost()}>
      <View style={styles.top}>
        <View style={{flex: 1}}>
          <ShimmerPlaceHolder
            colorShimmer={['#ebebeb', '#ddd', '#ebebeb']}
            autoRun={true}
            style={styles.title}
          />
          <ShimmerPlaceHolder
            colorShimmer={['#ebebeb', '#ddd', '#ebebeb']}
            autoRun={true}
            style={{
              width: 100,
              height: 25,
              borderRadius: 3,
              marginVertical: 10,
            }}
          />
        </View>
        <ShimmerPlaceHolder
          colorShimmer={['#ebebeb', '#ddd', '#ebebeb']}
          autoRun={true}
          style={styles.image}
        />
      </View>
      <View style={styles.info}>
        {[1, 2, 3].map(key => (
          <View style={styles.infoItem} key={"item-skeleton-" + key}>
            <ShimmerPlaceHolder
              colorShimmer={['#ebebeb', '#ddd', '#ebebeb']}
              autoRun={true}
              style={styles.icon}
            />
            <ShimmerPlaceHolder
              colorShimmer={['#ebebeb', '#ddd', '#ebebeb']}
              autoRun={true}
              style={styles.infoText}
            />
          </View>
        ))}
      </View>
      <View style={[styles.tags, {marginTop: 20}]}>
        {[60, 100, 50, 70, 45, 80].map((width, index) => (
          <ShimmerPlaceHolder
            key={'tag-skeleton-' + index}
            colorShimmer={['#ebebeb', '#ddd', '#ebebeb']}
            autoRun={true}
            style={[styles.tag, {width: width}]}
          />
        ))}
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  post: {
    width: '100%',
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
    height: 20,
    borderRadius: 3,
    marginBottom: 5,
  },
  image: {
    width: 40,
    height: 40,
    marginLeft: 20,
    marginTop: 5,
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
    marginLeft: 3,
    width: 60,
    borderRadius: 3,
  },
  tags: {
    flexWrap: 'wrap',
    alignItems: 'flex-start',
    flexDirection: 'row',
    marginTop: 14,
  },
  tag: {
    width: 60,
    marginRight: 10,
    marginBottom: 10,
    height: 20,
  },
  icon: {
    width: 14,
    marginRight: 2,
    borderRadius: 8,
  },
});

export default PostPreviewSkeleton;
