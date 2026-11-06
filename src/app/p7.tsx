import { Ionicons } from '@expo/vector-icons';
import { router } from 'expo-router';
import { Image, Pressable, ScrollView, StyleSheet, Text, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

import { ContinueButton } from '@/components/credit-goal/ContinueButton';
import { InstallmentTimelineRow } from '@/components/payment-schedule/InstallmentTimelineRow';
import { installments } from '@/components/payment-schedule/installments.data';
import { StreakCard } from '@/components/progress-overview/StreakCard';
import { colors } from '@/theme/colors';
import { radii } from '@/theme/radii';

export default function P7() {
  return (
    <View style={styles.container}>
      <View style={styles.purpleSection}>
        <SafeAreaView edges={['top']} style={styles.headerRow}>
          <Pressable onPress={() => router.back()} hitSlop={8}>
            <Ionicons name="arrow-back" size={24} color={colors.white} />
          </Pressable>
          <Text style={styles.headerTitle}>Mis cuotas</Text>
        </SafeAreaView>

        <View style={styles.bottomRow}>
          <View style={styles.progressBlock}>
            <Text style={styles.progressEyebrow}>Tu avance</Text>
            <Text style={styles.progressValue}>3 de 6 cuotas</Text>

            <View style={styles.track}>
              <View style={styles.fill} />
            </View>

            <Text style={styles.progressSaved}>
              <Text style={styles.progressSavedBold}>S/ 450</Text> de S/ 900 ahorrados
            </Text>
          </View>

          <Image
            source={require('../../assets/illustrations/thumbsup-mascot.png')}
            style={styles.mascot}
            resizeMode="contain"
          />
        </View>
      </View>

      <ScrollView style={styles.scroll} contentContainerStyle={styles.content}>
        <StreakCard streak={3} onPress={() => {}} />

        <View style={styles.card}>
          <View style={styles.cardHeader}>
            <Text style={styles.cardTitle}>Cronograma de pagos</Text>

            <View style={styles.monthlyPill}>
              <Ionicons name="calendar-outline" size={14} color={colors.primary} />
              <Text style={styles.monthlyPillText}>S/ 150 al mes</Text>
            </View>
          </View>

          {installments.map((item, index) => (
            <InstallmentTimelineRow
              key={item.id}
              number={item.number}
              date={item.date}
              status={item.status}
              isLast={index === installments.length - 1}
            />
          ))}
        </View>
      </ScrollView>

      <ContinueButton
        label="Ver mi avance"
        icon="bar-chart-outline"
        showArrow
        onPress={() => router.push('/p8')}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.background,
  },
  purpleSection: {
    backgroundColor: colors.primary,
    paddingBottom: 48,
  },
  headerRow: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 16,
    paddingHorizontal: 20,
    paddingBottom: 16,
  },
  headerTitle: {
    fontSize: 22,
    fontWeight: '800',
    color: colors.white,
  },
  bottomRow: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 20,
    gap: 12,
  },
  progressBlock: {
    flex: 1,
  },
  progressEyebrow: {
    fontSize: 14,
    color: 'rgba(255,255,255,0.85)',
  },
  progressValue: {
    fontSize: 24,
    fontWeight: '800',
    color: colors.white,
    marginTop: 2,
    marginBottom: 12,
  },
  track: {
    height: 8,
    borderRadius: 4,
    backgroundColor: 'rgba(255,255,255,0.3)',
  },
  fill: {
    width: '50%',
    height: 8,
    borderRadius: 4,
    backgroundColor: colors.accent,
  },
  progressSaved: {
    fontSize: 13,
    color: 'rgba(255,255,255,0.85)',
    marginTop: 10,
  },
  progressSavedBold: {
    fontWeight: '800',
    color: colors.white,
  },
  mascot: {
    width: 160,
    height: 139,
  },
  scroll: {
    flex: 1,
  },
  content: {
    padding: 20,
    marginTop: -8,
  },
  card: {
    backgroundColor: colors.white,
    borderRadius: radii.card,
    borderWidth: 1,
    borderColor: colors.border,
    padding: 16,
    marginTop: 4,
  },
  cardHeader: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginBottom: 8,
  },
  cardTitle: {
    fontSize: 18,
    fontWeight: '800',
    color: colors.primary,
  },
  monthlyPill: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 6,
    backgroundColor: '#F3EEFA',
    borderRadius: 20,
    paddingHorizontal: 10,
    paddingVertical: 6,
  },
  monthlyPillText: {
    fontSize: 12,
    fontWeight: '700',
    color: colors.primary,
  },
});
