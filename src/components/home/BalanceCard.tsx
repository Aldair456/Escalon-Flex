import { Ionicons } from '@expo/vector-icons';
import { Pressable, StyleSheet, Text, View } from 'react-native';

import { colors } from '@/theme/colors';

type BalanceCardProps = {
  visible: boolean;
  amount: string;
  onToggle: () => void;
};

export function BalanceCard({ visible, amount, onToggle }: BalanceCardProps) {
  return (
    <Pressable style={styles.container} onPress={onToggle}>
      <View style={styles.left}>
        <Ionicons name={visible ? 'eye-off-outline' : 'eye-outline'} size={20} color={colors.primary} />
        <Text style={styles.label}>{visible ? 'Ocultar saldo' : 'Mostrar saldo'}</Text>
      </View>

      {visible && <Text style={styles.amount}>{amount}</Text>}
    </Pressable>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginHorizontal: 16,
    marginTop: 20,
    paddingHorizontal: 16,
    paddingVertical: 16,
    backgroundColor: colors.white,
    borderRadius: 16,
    borderWidth: 1,
    borderColor: colors.border,
  },
  left: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 8,
  },
  label: {
    color: colors.primary,
    fontSize: 15,
    fontWeight: '600',
  },
  amount: {
    color: '#111827',
    fontSize: 15,
    fontWeight: '700',
  },
});
