import { StyleSheet, Text, View } from 'react-native';

import { colors } from '@/theme/colors';

import type { CreditLevel } from './levels.data';

type LevelLadderProps = {
  title: string;
  levels: CreditLevel[];
};

const MAX_BAR_HEIGHT = 110;

export function LevelLadder({ title, levels }: LevelLadderProps) {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>{title}</Text>

      <View style={styles.bars}>
        {levels.map((level) => (
          <View key={level.id} style={styles.column}>
            {level.current && (
              <View style={styles.badge}>
                <Text style={styles.badgeText}>Tú</Text>
              </View>
            )}

            <View
              style={[
                styles.bar,
                { height: MAX_BAR_HEIGHT * level.heightRatio },
                level.current && styles.barCurrent,
              ]}
            />

            <Text style={[styles.label, level.current && styles.labelCurrent]}>{level.label}</Text>
          </View>
        ))}
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: colors.primary,
    borderRadius: 16,
    padding: 18,
    marginTop: 16,
  },
  title: {
    color: colors.white,
    fontSize: 15,
    fontWeight: '700',
    marginBottom: 16,
  },
  bars: {
    flexDirection: 'row',
    alignItems: 'flex-end',
    justifyContent: 'space-between',
    gap: 8,
  },
  column: {
    flex: 1,
    alignItems: 'center',
  },
  badge: {
    backgroundColor: colors.badge,
    borderRadius: 8,
    paddingHorizontal: 8,
    paddingVertical: 2,
    marginBottom: 6,
  },
  badgeText: {
    color: colors.primaryDark,
    fontSize: 11,
    fontWeight: '800',
  },
  bar: {
    width: '100%',
    borderRadius: 10,
    backgroundColor: 'rgba(255,255,255,0.25)',
  },
  barCurrent: {
    backgroundColor: colors.accent,
  },
  label: {
    color: 'rgba(255,255,255,0.8)',
    fontSize: 11,
    fontWeight: '600',
    textAlign: 'center',
    marginTop: 8,
  },
  labelCurrent: {
    color: colors.white,
    fontWeight: '800',
  },
});
