import { Pressable, StyleSheet, Text } from 'react-native';

import { colors } from '@/theme/colors';

type ContinueButtonProps = {
  label: string;
  onPress?: () => void;
};

export function ContinueButton({ label, onPress }: ContinueButtonProps) {
  return (
    <Pressable style={styles.button} onPress={onPress}>
      <Text style={styles.label}>{label}</Text>
    </Pressable>
  );
}

const styles = StyleSheet.create({
  button: {
    backgroundColor: colors.accent,
    borderRadius: 16,
    paddingVertical: 16,
    marginHorizontal: 20,
    marginBottom: 20,
    alignItems: 'center',
  },
  label: {
    color: colors.white,
    fontWeight: '700',
    fontSize: 16,
  },
});
