import { Ionicons } from '@expo/vector-icons';
import { router, type Href } from 'expo-router';
import { Pressable, StyleSheet, Text, View } from 'react-native';

import { colors } from '@/theme/colors';

type QuickActionItemProps = {
  label: string;
  icon: keyof typeof Ionicons.glyphMap;
  color: string;
  route?: string;
};

export function QuickActionItem({ label, icon, color, route }: QuickActionItemProps) {
  return (
    <Pressable
      style={styles.container}
      disabled={!route}
      onPress={() => route && router.push(route as Href)}>
      <View style={styles.iconWrapper}>
        <Ionicons name={icon} size={26} color={color} />
      </View>
      <Text style={styles.label} numberOfLines={2}>
        {label}
      </Text>
    </Pressable>
  );
}

const styles = StyleSheet.create({
  container: {
    width: '25%',
    alignItems: 'center',
    marginBottom: 18,
    paddingHorizontal: 4,
  },
  iconWrapper: {
    width: 56,
    height: 56,
    borderRadius: 28,
    backgroundColor: colors.white,
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: 6,
  },
  label: {
    color: colors.white,
    fontSize: 11,
    textAlign: 'center',
  },
});
