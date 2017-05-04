import React, {component} from 'react';
import {Text, StyleSheet, View} from 'react-native';

export default class Footer extends Component {
    render() {
        return (
            <View>
                <Text style={styles.footerStyle}>{this.props.footerText}</Text>
            </View>
        );
    }
}

const styles = ({
  footerStyle: {
    justifyContent: 'center',
    alignItems: 'center'
  }
});
