import { StyleSheet, Text } from 'react-native';

import { colors } from '@/theme/colors';

export function DisclaimerFooter() {
  return <Text style={styles.text}>CONCEPTO · SIN PROTOTIPO · DATOS SIMULADOS</Text>;
}

const styles = StyleSheet.create({
  text: {
    textAlign: 'center',
    fontSize: 11,
    color: colors.textMuted,
    letterSpacing: 0.5,
    paddingVertical: 20,
  },
});
