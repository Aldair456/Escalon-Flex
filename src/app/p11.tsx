import { router } from 'expo-router';
import { useMemo, useState } from 'react';
import { Pressable, ScrollView, StyleSheet, Text, View } from 'react-native';

import { AmountSlider } from '@/components/loan-request/AmountSlider';
import { loanTermOptions } from '@/components/loan-request/loanTerms.data';
import { BuildCreditHeader } from '@/components/credit-goal/BuildCreditHeader';
import { ContinueButton } from '@/components/credit-goal/ContinueButton';
import { UsageChip } from '@/components/credit-goal/UsageChip';
import { SummaryRow } from '@/components/credit-plan/SummaryRow';
import { colors } from '@/theme/colors';
import { layout } from '@/theme/layout';

const MIN_AMOUNT = 300;
const MAX_AMOUNT = 2000;

export default function P11() {
  const [amount, setAmount] = useState(1000);
  const [termId, setTermId] = useState('9');

  const term = loanTermOptions.find((option) => option.id === termId) ?? loanTermOptions[1];

  const { installment, interest, total } = useMemo(() => {
    const factor = amount / 1000;
    const installmentValue = term.baseInstallment * factor;
    const interestValue = term.baseInterest * factor;
    return {
      installment: installmentValue,
      interest: interestValue,
      total: amount + interestValue,
    };
  }, [amount, term]);

  return (
    <View style={styles.container}>
      <BuildCreditHeader title="Créditos" />

      <ScrollView style={styles.scroll} contentContainerStyle={styles.content}>
        <Text style={styles.eyebrow}>Tu préstamo preaprobado</Text>
        <Text style={styles.heading}>¿Cuánto necesitas?</Text>

        <AmountSlider value={amount} min={MIN_AMOUNT} max={MAX_AMOUNT} onChange={setAmount} />

        <Text style={styles.fieldLabel}>Plazo</Text>
        <View style={styles.termRow}>
          {loanTermOptions.map((option) => (
            <UsageChip
              key={option.id}
              label={option.label}
              selected={termId === option.id}
              onPress={() => setTermId(option.id)}
            />
          ))}
        </View>

        <View style={styles.divider} />

        <Text style={styles.sectionLabel}>Datos sobre el crédito</Text>
        <SummaryRow label="Monto de cuota" value={`S/ ${installment.toFixed(2)}`} highlight />
        <SummaryRow label="TEA" value={term.tea} />
        <SummaryRow label="TCEA" value={term.tcea} />
        <SummaryRow label="Intereses" value={`S/ ${interest.toFixed(2)}`} />
        <SummaryRow label="Monto total a pagar" value={`S/ ${total.toFixed(2)}`} />
        <SummaryRow label="Forma de pago" value="Cobro automático" />

        <Text style={styles.link}>Ver cronograma de pagos</Text>

        <Pressable onPress={() => router.push('/p17')}>
          <Text style={[styles.link, styles.secondLink]}>Probar otros escenarios</Text>
        </Pressable>

        <Text style={styles.disclaimer}>
          *Tasas ilustrativas para la demo. Sujeto a evaluación. Este préstamo sí se reporta a la SBS: aquí
          empieza tu historial formal.
        </Text>
      </ScrollView>

      <ContinueButton label="Solicitar préstamo" />
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
  eyebrow: {
    fontSize: 14,
    fontWeight: '700',
    color: colors.primary,
    marginBottom: 6,
  },
  heading: {
    fontSize: 22,
    fontWeight: '800',
    color: colors.text,
    marginBottom: 16,
  },
  fieldLabel: {
    fontSize: 15,
    fontWeight: '700',
    color: colors.text,
    marginTop: 8,
    marginBottom: 10,
  },
  termRow: {
    flexDirection: 'row',
    gap: 10,
  },
  divider: {
    height: 1,
    backgroundColor: colors.border,
    marginVertical: 20,
  },
  sectionLabel: {
    fontSize: 12,
    fontWeight: '700',
    color: colors.textMuted,
    letterSpacing: 0.5,
    textTransform: 'uppercase',
    marginBottom: 4,
  },
  link: {
    fontSize: 14,
    fontWeight: '700',
    color: colors.primary,
    textDecorationLine: 'underline',
    textAlign: 'center',
    marginTop: 20,
  },
  secondLink: {
    marginTop: 8,
  },
  disclaimer: {
    fontSize: 12,
    color: colors.textMuted,
    textAlign: 'center',
    marginTop: 32,
    lineHeight: 17,
  },
});
