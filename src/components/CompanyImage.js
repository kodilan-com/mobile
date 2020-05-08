import React, {useState, useEffect} from 'react';
import {Image} from 'react-native';
import {SvgXml} from 'react-native-svg';
import getSvgData from '../requests/getSvgData';

function CompanyImage({uri, width, height, style}) {
  const [svg, setSvg] = useState();
  useEffect(() => {
    if (uri.includes('.svg')) {
      getSvgData(uri).then(res => {
        setSvg(res.data);
      });
    }
  }, []);
  return (
    <>
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
    </>
  );
}

export default CompanyImage;
