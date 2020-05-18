import React, {useState, useEffect} from 'react';
import {Image, TouchableOpacity} from 'react-native';
import {SvgXml} from 'react-native-svg';
import {useNavigation} from '@react-navigation/native';
import getSvgData from '../requests/getSvgData';

function CompanyImage({uri, width, height, style, company_slug}) {
  const [svg, setSvg] = useState();
  const navigation = useNavigation();
  useEffect(() => {
    if (uri.includes('.svg')) {
      getSvgData(uri).then(res => {
        setSvg(res.data);
      });
    }
  }, [uri]);
  function onPressImage(slug) {
    navigation.push('SearchResults', {params: {company: slug}});
  }
  return (
    <TouchableOpacity
      activeOpacity={0.75}
      onPress={() => onPressImage(company_slug)}>
      {uri.includes('.svg') ? (
        svg ? (
          <SvgXml style={style} width={width} height={height} xml={svg} />
        ) : (
          <Image
            style={style}
            source={{
              uri: 'https://kodilan.com/img/empty-company-logo.8437254b.png',
            }}
          />
        )
      ) : (
        <Image style={style} source={{uri}} />
      )}
    </TouchableOpacity>
  );
}

export default CompanyImage;
