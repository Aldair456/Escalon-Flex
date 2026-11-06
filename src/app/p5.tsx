import { ScrollView, StyleSheet, Text, View } from 'react-native';

import { SuccessBadge } from '@/components/credit-confirmation/SuccessBadge';
import { StatsSummary } from '@/components/credit-confirmation/StatsSummary';
import { BuildCreditHeader } from '@/components/credit-goal/BuildCreditHeader';
import { ContinueButton } from '@/components/credit-goal/ContinueButton';
import { MascotCallout } from '@/components/credit-plan/MascotCallout';
import { planOptions, planSummary } from '@/components/credit-plan/plans.data';
import { colors } from '@/theme/colors';
import { layout } from '@/theme/layout';

export default function P5() {
  const selectedPlan = planOptions.find((plan) => plan.id === 'p150');
  const installments = planSummary.find((row) => row.id === 'cuotas');

  return (
    <View style={styles.container}>
      <BuildCreditHeader title="Construye crédito" />

      <ScrollView style={styles.scroll} contentContainerStyle={styles.content}>
        <SuccessBadge />

        <Text style={styles.heading}>¡Tu reto está listo!</Text>
        <Text style={styles.subheading}>Ya comenzaste a construir tu historial crediticio.</Text>

        <StatsSummary
          amount={selectedPlan?.amount ?? 'S/ 150'}
          installments={installments?.value ?? '6'}
          level="Inicial"
        />

        <MascotCallout
          title="¡Genial!"
          description="Estos montos y fechas pueden ajustarse según cómo uses tu Yape. Te avisamos si algo cambia."
        />
      </ScrollView>

      <ContinueButton label="Ir a mi reto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.white,
  },
  scroll: {
    flex: 1,
  },
  content: layout.screenContent,
  heading: {
    fontSize: 26,
    fontWeight: '800',
    color: colors.text,
    textAlign: 'center',
    marginTop: 4,
  },
  subheading: {
    fontSize: 14,
    color: colors.textMuted,
    textAlign: 'center',
    marginTop: 6,
    marginBottom: 24,
  },
});
