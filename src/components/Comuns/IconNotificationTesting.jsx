import React, { useEffect } from 'react';
import { View, Alert } from 'react-native';
import { Icon } from 'react-native-elements';
import GlobalStyle from '../../style/Global';

const style = GlobalStyle()

const NotificationIconTesting = ({size=40, reverse=true}) => {
  
  return (
    <View>
      <Icon
        name="notification"
        type="ant-design"
        size={size}
        color={style.ButtonColor}
        style={{
          transform: reverse ? [{ scaleX: -1 }] : [{ scaleX: 1 }] 
        }}
      />
    </View>
  );
};

export default NotificationIconTesting;
