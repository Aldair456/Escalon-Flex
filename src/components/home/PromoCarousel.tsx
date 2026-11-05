import { ScrollView, StyleSheet, Text, View } from 'react-native';

import { colors } from '@/theme/colors';

type Promo = {
  id: string;
  badge: string;
  title: string;
  description: string;
  background: string;
};

const promos: Promo[] = [
  {
    id: 'gas',
    badge: 'Pedir Gas',
    title: 'YAPEGAS',
    description: '¡Usa el cupón y ahorra S/ 5!',
    background: '#8B2FC9',
  },
  {
    id: 'cyber',
    badge: 'Cyber Yape',
    title: 'iPhone 15 128GB',
    description: 'Pagando con Crédito BCP',
    background: '#1F2937',
  },
];

export function PromoCarousel() {
  return (
    <View style={styles.container}>
      <ScrollView
        horizontal
        showsHorizontalScrollIndicator={false}
        contentContainerStyle={styles.scrollContent}>
        {promos.map((promo) => (
          <View key={promo.id} style={[styles.card, { backgroundColor: promo.background }]}>
            <View style={styles.badge}>
              <Text style={styles.badgeText}>{promo.badge}</Text>
            </View>
            <Text style={styles.title}>{promo.title}</Text>
            <Text style={styles.description}>{promo.description}</Text>
          </View>
        ))}
      </ScrollView>

      <View style={styles.dots}>
        {promos.map((promo, index) => (
          <View key={promo.id} style={[styles.dot, index === 0 && styles.dotActive]} />
        ))}
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    marginTop: 12,
  },
  scrollContent: {
    paddingHorizontal: 16,
    gap: 12,
  },
  card: {
    width: 220,
    height: 120,
    borderRadius: 16,
    padding: 14,
    justifyContent: 'flex-end',
  },
  badge: {
    position: 'absolute',
    top: 10,
    left: 10,
    backgroundColor: colors.white,
    borderRadius: 10,
    paddingHorizontal: 8,
    paddingVertical: 2,
  },
  badgeText: {
    fontSize: 11,
    fontWeight: '700',
    color: colors.primaryDark,
  },
  title: {
    color: colors.white,
    fontSize: 18,
    fontWeight: '800',
  },
  description: {
    color: colors.white,
    fontSize: 12,
    marginTop: 2,
  },
  dots: {
    flexDirection: 'row',
    justifyContent: 'center',
    gap: 6,
    marginTop: 12,
  },
  dot: {
    width: 6,
    height: 6,
    borderRadius: 3,
    backgroundColor: colors.dot,
  },
  dotActive: {
    backgroundColor: colors.white,
    width: 16,
  },
});
