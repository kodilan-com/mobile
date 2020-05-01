import React from 'react';
import {Image} from 'react-native';
import {SvgUri} from 'react-native-svg';

function CompanyImage({uri, width, height, style}) {
  if (uri.includes('.svg')) {
    return <SvgUri style={style} width={width} height={height} uri={uri} />;
  } else {
    return <Image style={style} source={{uri}} />;
  }
}

export default CompanyImage;
