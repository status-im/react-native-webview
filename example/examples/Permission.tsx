import React, {Component} from 'react';
import {Text, View} from 'react-native';

import WebView from 'react-native-webview';

type Props = {};
type State = {};

export default class Permission extends Component<Props, State> {
  state = {};

  render() {
    return (
      <View style={{ height: 120 }}>
        <WebView
          ref={(ref) => (this.webview = ref)}
          onPermissionRequest={(event) => {
              console.log("!!! JS: onPermissionRequest, event: ", event.nativeEvent);
              this.webview.answerPermissionRequest(false, event.nativeEvent.resources );
          }}
            source={{uri: 'https://fatal0.netlify.app/android/webviewvideo.html'}}
          automaticallyAdjustContentInsets={false}
        />
      </View>
    );
  }
}
