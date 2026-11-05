import { Pressable, StyleSheet, Text, View } from 'react-native';

import { colors } from '@/theme/colors';

type SelectableOptionCardProps = {
  title: string;
  description: string;
  selected: boolean;
  onPress: () => void;
};

export function SelectableOptionCard({ title, description, selected, onPress }: SelectableOptionCardProps) {
  return (
    <Pressable style={[styles.container, selected && styles.containerSelected]} onPress={onPress}>
      <View style={[styles.radio, selected && styles.radioSelected]}>
        {selected && <View style={styles.radioDot} />}
      </View>

      <View style={styles.content}>
        <Text style={styles.title}>{title}</Text>
        <Text style={styles.description}>{description}</Text>
      </View>
    </Pressable>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 14,
    backgroundColor: '#F3EEFA',
    borderRadius: 16,
    borderWidth: 1.5,
    borderColor: 'transparent',
    padding: 16,
    marginBottom: 14,
  },
  containerSelected: {
    backgroundColor: '#E6F7F4',
    borderColor: colors.accent,
  },
  radio: {
    width: 22,
    height: 22,
    borderRadius: 11,
    borderWidth: 2,
    borderColor: '#C4B5DD',
    alignItems: 'center',
    justifyContent: 'center',
  },
  radioSelected: {
    borderColor: colors.accent,
  },
  radioDot: {
    width: 12,
    height: 12,
    borderRadius: 6,
    backgroundColor: colors.accent,
  },
  content: {
    flex: 1,
  },
  title: {
    fontSize: 16,
    fontWeight: '700',
    color: '#111827',
  },
  description: {
    fontSize: 13,
    color: colors.textMuted,
    marginTop: 2,
  },
});
