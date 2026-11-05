import { Ionicons } from '@expo/vector-icons';
import { Pressable, StyleSheet, Text } from 'react-native';

import { colors } from '@/theme/colors';

type StartButtonProps = {
  label: string;
  onPress?: () => void;
};

export function StartButton({ label, onPress }: StartButtonProps) {
  return (
    <Pressable style={styles.button} onPress={onPress}>
      <Text style={styles.label}>{label}</Text>
      <Ionicons name="arrow-forward" size={18} color={colors.white} />
    </Pressable>
  );
}

const styles = StyleSheet.create({
  button: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    gap: 8,
    backgroundColor: colors.accent,
    borderRadius: 16,
    paddingVertical: 16,
    marginHorizontal: 20,
    marginBottom: 20,
  },
  label: {
    color: colors.white,
    fontWeight: '700',
    fontSize: 16,
  },
});
