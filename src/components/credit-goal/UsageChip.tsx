import { Pressable, StyleSheet, Text } from 'react-native';

import { colors } from '@/theme/colors';

type UsageChipProps = {
  label: string;
  selected: boolean;
  onPress: () => void;
};

export function UsageChip({ label, selected, onPress }: UsageChipProps) {
  return (
    <Pressable style={[styles.chip, selected && styles.chipSelected]} onPress={onPress}>
      <Text style={[styles.label, selected && styles.labelSelected]}>{label}</Text>
    </Pressable>
  );
}

const styles = StyleSheet.create({
  chip: {
    borderWidth: 1.5,
    borderColor: colors.primary,
    borderRadius: 20,
    paddingHorizontal: 16,
    paddingVertical: 8,
  },
  chipSelected: {
    backgroundColor: colors.primary,
  },
  label: {
    fontSize: 13,
    fontWeight: '700',
    color: colors.primary,
  },
  labelSelected: {
    color: colors.white,
  },
});
