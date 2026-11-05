import { StyleSheet, Text, View } from 'react-native';

import { colors } from '@/theme/colors';

type ProgressStepsProps = {
  current: number;
  total: number;
};

export function ProgressSteps({ current, total }: ProgressStepsProps) {
  return (
    <View>
      <Text style={styles.label}>
        PASO {current} DE {total}
      </Text>

      <View style={styles.track}>
        {Array.from({ length: total }).map((_, index) => (
          <View key={index} style={[styles.segment, index < current && styles.segmentActive]} />
        ))}
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  label: {
    fontSize: 12,
    fontWeight: '700',
    color: colors.textMuted,
    letterSpacing: 0.5,
    marginBottom: 8,
  },
  track: {
    flexDirection: 'row',
    gap: 6,
  },
  segment: {
    flex: 1,
    height: 6,
    borderRadius: 3,
    backgroundColor: '#E3D9F3',
  },
  segmentActive: {
    backgroundColor: colors.accent,
  },
});
