import { Ionicons } from '@expo/vector-icons';
import { Pressable, StyleSheet, Text, View } from 'react-native';

import { colors } from '@/theme/colors';

type CreditOptionCardProps = {
  title: string;
  description: string;
  actionLabel: string;
  variant: 'outline' | 'highlighted';
  badge?: string;
  onPress?: () => void;
};

export function CreditOptionCard({
  title,
  description,
  actionLabel,
  variant,
  badge,
  onPress,
}: CreditOptionCardProps) {
  const highlighted = variant === 'highlighted';

  return (
    <View style={[styles.card, highlighted ? styles.cardHighlighted : styles.cardOutline]}>
      <View style={styles.header}>
        <Text style={[styles.title, highlighted && styles.titleHighlighted]}>{title}</Text>
        {badge && (
          <View style={styles.badge}>
            <Text style={styles.badgeText}>{badge}</Text>
          </View>
        )}
      </View>

      <Text style={styles.description}>{description}</Text>

      {highlighted ? (
        <Pressable style={styles.button} onPress={onPress}>
          <Text style={styles.buttonText}>{actionLabel}</Text>
          <Ionicons name="arrow-forward" size={16} color={colors.white} />
        </Pressable>
      ) : (
        <Pressable style={styles.link} onPress={onPress}>
          <Text style={styles.linkText}>{actionLabel}</Text>
          <Ionicons name="arrow-forward" size={16} color={colors.primary} />
        </Pressable>
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  card: {
    borderRadius: 16,
    borderWidth: 1.5,
    padding: 18,
    marginBottom: 16,
  },
  cardOutline: {
    borderColor: '#D8B4E8',
    backgroundColor: colors.white,
  },
  cardHighlighted: {
    borderColor: colors.accent,
    backgroundColor: '#E6F7F4',
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  title: {
    fontSize: 18,
    fontWeight: '700',
    color: '#111827',
  },
  titleHighlighted: {
    color: colors.primary,
  },
  badge: {
    backgroundColor: colors.badge,
    borderRadius: 10,
    paddingHorizontal: 8,
    paddingVertical: 2,
  },
  badgeText: {
    fontSize: 11,
    fontWeight: '700',
    color: colors.primaryDark,
  },
  description: {
    color: colors.textMuted,
    fontSize: 14,
    marginTop: 6,
    lineHeight: 20,
  },
  link: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 4,
    marginTop: 10,
  },
  linkText: {
    color: colors.primary,
    fontWeight: '700',
    fontSize: 14,
  },
  button: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    gap: 8,
    backgroundColor: colors.primary,
    borderRadius: 14,
    paddingVertical: 14,
    marginTop: 14,
  },
  buttonText: {
    color: colors.white,
    fontWeight: '700',
    fontSize: 15,
  },
});
