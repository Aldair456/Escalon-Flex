import { StyleSheet, Text, View } from 'react-native';

import { colors } from '@/theme/colors';

type LevelProgressCardProps = {
  level: number;
  title: string;
  totalSegments: number;
  filledSegments: number;
};

export function LevelProgressCard({ level, title, totalSegments, filledSegments }: LevelProgressCardProps) {
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <View style={styles.badge}>
          <Text style={styles.badgeText}>NIVEL {level}</Text>
        </View>
        <Text style={styles.title}>{title}</Text>
      </View>

      <View style={styles.track}>
        {Array.from({ length: totalSegments }).map((_, index) => (
          <View key={index} style={[styles.segment, index < filledSegments && styles.segmentActive]} />
        ))}
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#F3EEFA',
    borderRadius: 16,
    padding: 16,
    marginTop: 20,
    marginBottom: 16,
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 10,
    marginBottom: 10,
  },
  badge: {
    backgroundColor: colors.primary,
    borderRadius: 12,
    paddingHorizontal: 10,
    paddingVertical: 4,
  },
  badgeText: {
    color: colors.white,
    fontSize: 11,
    fontWeight: '700',
  },
  title: {
    color: colors.primary,
    fontSize: 17,
    fontWeight: '800',
  },
  track: {
    flexDirection: 'row',
    gap: 6,
  },
  segment: {
    flex: 1,
    height: 6,
    borderRadius: 3,
    backgroundColor: colors.white,
  },
  segmentActive: {
    backgroundColor: colors.accent,
  },
});
