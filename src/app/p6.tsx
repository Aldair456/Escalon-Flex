import { Ionicons } from '@expo/vector-icons';
import { Pressable, ScrollView, StyleSheet, Text, View } from 'react-native';

import { ConfettiBackground } from '@/components/payment-receipt/ConfettiBackground';
import { DateTimeRow } from '@/components/payment-receipt/DateTimeRow';
import { ReceiptTopBar } from '@/components/payment-receipt/ReceiptTopBar';
import { ContinueButton } from '@/components/credit-goal/ContinueButton';
import { InfoNote } from '@/components/credit-plan/InfoNote';
import { SummaryRow } from '@/components/credit-plan/SummaryRow';
import { colors } from '@/theme/colors';
import { radii } from '@/theme/radii';

export default function P6() {
  return (
    <View style={styles.container}>
      <ConfettiBackground />

      <ReceiptTopBar showIcon={false} />

      <ScrollView style={styles.scroll} contentContainerStyle={styles.scrollContent}>
        <View style={styles.card}>
          <View style={styles.headerRow}>
            <Text style={styles.title}>¡Pagaste tu cuota!</Text>

            <Pressable style={styles.shareButton}>
              <Ionicons name="share-social-outline" size={16} color={colors.accent} />
              <Text style={styles.shareText}>COMPARTIR</Text>
            </Pressable>
          </View>

          <Text style={styles.amount}>
            <Text style={styles.currency}>S/ </Text>
            150
          </Text>

          <DateTimeRow date="05 Dic. 2026" time="11:31 a. m." />

          <InfoNote
            lead="¡Vas a mitad de camino!"
            text="Te faltan 3 cuotas para tu evaluación. Ya ahorraste S/ 450."
          />

          <View style={styles.divider} />

          <Text style={styles.sectionLabel}>Datos de la cuota</Text>
          <SummaryRow label="Cuota" value="3 de 6" />
          <SummaryRow label="Destino" value="Mi reto Construye crédito" />
          <SummaryRow label="Nro. de operación" value="04812345" />
          <SummaryRow label="Próxima cuota" value="05 Ene. 2027" />

          <View style={styles.divider} />

          <Text style={styles.sectionLabel}>Indicaciones</Text>
          <Text style={styles.indication}>• Ten saldo en tu Yape antes de las 8:30 p.m. del día 5.</Text>
          <Text style={styles.indication}>
            • Si te atrasas, no pierdes tu dinero, pero tu nivel puede bajar.
          </Text>
        </View>

        <View style={styles.buttonWrapper}>
          <ContinueButton label="Ver mis cuotas" />
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
    marginTop: 16,
    padding: 20,
  },
  headerRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  title: {
    fontSize: 18,
    fontWeight: '800',
    color: colors.primary,
  },
  shareButton: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 4,
  },
  shareText: {
    fontSize: 12,
    fontWeight: '700',
    color: colors.accent,
  },
  amount: {
    fontSize: 44,
    fontWeight: '800',
    color: colors.text,
    marginTop: 12,
  },
  currency: {
    fontSize: 20,
    fontWeight: '700',
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
    marginBottom: 8,
  },
  indication: {
    fontSize: 13,
    color: colors.text,
    lineHeight: 19,
    marginBottom: 6,
  },
  buttonWrapper: {
    marginTop: 24,
  },
});
