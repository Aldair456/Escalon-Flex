import { Ionicons } from '@expo/vector-icons';
import { StyleSheet, Text, View } from 'react-native';

import { colors } from '@/theme/colors';

import type { InstallmentStatus } from './installments.data';

type InstallmentTimelineRowProps = {
  number: number;
  date: string;
  status: InstallmentStatus;
  isLast?: boolean;
};

const CIRCLE_CONFIG: Record<InstallmentStatus, { bg: string; border: string }> = {
  paid: { bg: colors.accent, border: colors.accent },
  next: { bg: colors.white, border: colors.primary },
  pending: { bg: colors.white, border: colors.border },
};

const PILL_CONFIG: Record<
  InstallmentStatus,
  { bg: string; color: string; icon: keyof typeof Ionicons.glyphMap; label: string }
> = {
  paid: { bg: '#D1FAE5', color: '#16A34A', icon: 'checkmark', label: 'Pagada a tiempo' },
  next: { bg: '#F3EEFA', color: colors.primary, icon: 'calendar', label: 'Próxima' },
  pending: { bg: '#F3F4F6', color: colors.textMuted, icon: 'time-outline', label: 'Pendiente' },
};

export function InstallmentTimelineRow({ number, date, status, isLast }: InstallmentTimelineRowProps) {
  const circle = CIRCLE_CONFIG[status];
  const pill = PILL_CONFIG[status];
  const lineColor = status === 'pending' ? colors.border : colors.accent;
  const highlighted = status === 'next';

  return (
    <View style={[styles.row, highlighted && styles.rowHighlighted]}>
      <View style={styles.timeline}>
        <View style={[styles.circle, { backgroundColor: circle.bg, borderColor: circle.border }]}>
          {status === 'paid' && <Ionicons name="checkmark" size={16} color={colors.white} />}
          {status === 'next' && <View style={styles.circleDot} />}
        </View>

        {!isLast && <View style={[styles.line, { backgroundColor: lineColor }]} />}
      </View>

      <View style={styles.content}>
        <View style={styles.textCol}>
          <Text style={styles.title}>Cuota {number}</Text>
          <Text style={styles.date}>{date}</Text>
        </View>

        <View style={[styles.pill, { backgroundColor: pill.bg }]}>
          <Ionicons name={pill.icon} size={14} color={pill.color} />
          <Text style={[styles.pillText, { color: pill.color }]}>{pill.label}</Text>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  row: {
    flexDirection: 'row',
    paddingVertical: 10,
  },
  rowHighlighted: {
    backgroundColor: '#F8F3FC',
    borderRadius: 14,
    paddingHorizontal: 8,
  },
  timeline: {
    width: 32,
    alignItems: 'center',
  },
  circle: {
    width: 28,
    height: 28,
    borderRadius: 14,
    borderWidth: 2,
    alignItems: 'center',
    justifyContent: 'center',
  },
  circleDot: {
    width: 10,
    height: 10,
    borderRadius: 5,
    backgroundColor: colors.primary,
  },
  line: {
    flex: 1,
    width: 2,
    marginTop: 2,
  },
  content: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    gap: 10,
    paddingBottom: 6,
  },
  textCol: {
    flexShrink: 1,
  },
  title: {
    fontSize: 15,
    fontWeight: '700',
    color: colors.text,
  },
  date: {
    fontSize: 12,
    color: colors.textMuted,
    marginTop: 2,
  },
  pill: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 5,
    borderRadius: 20,
    paddingHorizontal: 10,
    paddingVertical: 6,
  },
  pillText: {
    fontSize: 12,
    fontWeight: '700',
  },
});
