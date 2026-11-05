import { Ionicons } from '@expo/vector-icons';
import { Pressable, StyleSheet, Text, View } from 'react-native';

import { colors } from '@/theme/colors';

type ConsentCheckboxProps = {
  label: string;
  checked: boolean;
  onToggle: () => void;
};

export function ConsentCheckbox({ label, checked, onToggle }: ConsentCheckboxProps) {
  return (
    <Pressable style={styles.container} onPress={onToggle}>
      <View style={[styles.box, checked && styles.boxChecked]}>
        {checked && <Ionicons name="checkmark" size={14} color={colors.white} />}
      </View>
      <Text style={styles.label}>{label}</Text>
    </Pressable>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'flex-start',
    gap: 10,
    marginTop: 16,
  },
  box: {
    width: 20,
    height: 20,
    borderRadius: 5,
    backgroundColor: '#E3D9F3',
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 2,
  },
  boxChecked: {
    backgroundColor: colors.primary,
  },
  label: {
    flex: 1,
    fontSize: 13,
    color: '#111827',
    lineHeight: 18,
  },
});
