import { Ionicons } from '@expo/vector-icons';
import { StyleSheet, Text, View } from 'react-native';

import { colors } from '@/theme/colors';

import type { ChecklistEntry } from './checklist.data';

type ChecklistSectionProps = {
  items: ChecklistEntry[];
};

export function ChecklistSection({ items }: ChecklistSectionProps) {
  const have = items.filter((item) => item.done);
  const missing = items.filter((item) => !item.done);

  return (
    <View style={styles.container}>
      <Text style={styles.groupLabel}>Lo que ya tienes</Text>
      {have.map((item) => (
        <View key={item.id} style={styles.row}>
          <Ionicons name="checkmark" size={16} color={colors.accent} />
          <Text style={styles.label}>{item.label}</Text>
        </View>
      ))}

      <Text style={[styles.groupLabel, styles.groupLabelSpacing]}>Lo que falta</Text>
      {missing.map((item) => (
        <View key={item.id} style={styles.row}>
          <View style={styles.emptyCircle} />
          <Text style={styles.label}>{item.label}</Text>
        </View>
      ))}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    borderWidth: 1.5,
    borderColor: '#D8B4E8',
    borderRadius: 16,
    padding: 16,
  },
  groupLabel: {
    fontSize: 13,
    fontWeight: '700',
    color: colors.textMuted,
    marginBottom: 8,
  },
  groupLabelSpacing: {
    marginTop: 12,
  },
  row: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 10,
    marginBottom: 8,
  },
  label: {
    fontSize: 14,
    color: '#111827',
  },
  emptyCircle: {
    width: 16,
    height: 16,
    borderRadius: 8,
    borderWidth: 2,
    borderColor: colors.primary,
  },
});
