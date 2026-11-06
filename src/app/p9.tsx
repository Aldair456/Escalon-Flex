import { router } from 'expo-router';
import { Pressable, ScrollView, StyleSheet, Text, View } from 'react-native';

import { ConfettiBackground } from '@/components/payment-receipt/ConfettiBackground';
import { ReceiptTopBar } from '@/components/payment-receipt/ReceiptTopBar';
import { ContinueButton } from '@/components/credit-goal/ContinueButton';
import { InfoNote } from '@/components/credit-plan/InfoNote';
import { SummaryRow } from '@/components/credit-plan/SummaryRow';
import { colors } from '@/theme/colors';
import { radii } from '@/theme/radii';

export default function P9() {
  return (
    <View style={styles.container}>
      <ConfettiBackground />

      <ReceiptTopBar showIcon={false} />

      <ScrollView style={styles.scroll} contentContainerStyle={styles.scrollContent}>
        <View style={styles.card}>
          <Text style={styles.title}>¡Felicidades! Completaste tu reto</Text>

          <Text style={styles.paragraph}>
            Tus <Text style={styles.bold}>S/ 900</Text> ya están en tu Yape. Pagaste{' '}
            <Text style={styles.bold}>6 de 6 cuotas</Text> a tiempo.
          </Text>

          <View style={styles.divider} />

          <Text style={styles.sectionLabel}>Tu resultado</Text>
          <SummaryRow label="Nivel" value="Listo para tu crédito" highlight />
          <SummaryRow label="Puntualidad" value="100%" />
          <SummaryRow label="Ahorro devuelto" value="S/ 900.00" />

          <InfoNote text="Con esto, el BCP evaluó tu perfil y tiene algo para ti." />
        </View>

        <View style={styles.actions}>
          <ContinueButton label="Ver mi préstamo preaprobado" onPress={() => router.push('/p11')} />
          <ContinueButton
            label="Ver mi tarjeta preaprobada"
            variant="secondary"
            onPress={() => router.push('/p12')}
          />

          <Pressable style={styles.textLink}>
            <Text style={styles.textLinkLabel}>Ver caso: aún no califica</Text>
          </Pressable>
        </View>
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.primary,
  },
  scroll: {
    flex: 1,
  },
  scrollContent: {
    paddingBottom: 20,
  },
  card: {
    backgroundColor: colors.white,
    borderRadius: radii.card,
    marginHorizontal: 16,
    marginTop: 24,
    padding: 20,
  },
  title: {
    fontSize: 22,
    fontWeight: '800',
    color: colors.primary,
    lineHeight: 28,
  },
  paragraph: {
    fontSize: 14,
    color: colors.text,
    marginTop: 12,
    lineHeight: 20,
  },
  bold: {
    fontWeight: '800',
  },
  divider: {
    height: 1,
    backgroundColor: colors.border,
    marginVertical: 16,
  },
  sectionLabel: {
    fontSize: 12,
    fontWeight: '700',
    color: colors.textMuted,
    letterSpacing: 0.5,
    textTransform: 'uppercase',
    marginBottom: 4,
  },
  actions: {
    marginTop: 24,
  },
  textLink: {
    alignItems: 'center',
    marginTop: 4,
  },
  textLinkLabel: {
    fontSize: 14,
    fontWeight: '700',
    color: colors.white,
    textDecorationLine: 'underline',
  },
});
