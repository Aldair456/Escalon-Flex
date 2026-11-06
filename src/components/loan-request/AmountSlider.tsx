import Slider from '@react-native-community/slider';
import { StyleSheet, Text, View } from 'react-native';

import { colors } from '@/theme/colors';

type AmountSliderProps = {
  value: number;
  min: number;
  max: number;
  onChange: (value: number) => void;
};

export function AmountSlider({ value, min, max, onChange }: AmountSliderProps) {
  return (
    <View>
      <Text style={styles.amount}>S/ {value.toLocaleString('es-PE')}</Text>

      <Slider
        value={value}
        minimumValue={min}
        maximumValue={max}
        step={50}
        minimumTrackTintColor={colors.accent}
        maximumTrackTintColor={colors.border}
        thumbTintColor={colors.accent}
        onValueChange={onChange}
      />

      <View style={styles.range}>
        <Text style={styles.rangeLabel}>S/ {min.toLocaleString('es-PE')}</Text>
        <Text style={styles.rangeLabel}>S/ {max.toLocaleString('es-PE')}</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  amount: {
    fontSize: 36,
    fontWeight: '800',
    color: colors.primary,
    textAlign: 'center',
    marginBottom: 12,
  },
  range: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 4,
  },
  rangeLabel: {
    fontSize: 13,
    color: colors.textMuted,
  },
});
