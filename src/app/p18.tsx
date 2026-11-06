import { useState } from 'react';
import { ScrollView, StyleSheet, Text, View } from 'react-native';

import { BuildCreditHeader } from '@/components/credit-goal/BuildCreditHeader';
import { ContinueButton } from '@/components/credit-goal/ContinueButton';
import { GoalOptionCard } from '@/components/credit-goal/GoalOptionCard';
import { InfoNote } from '@/components/credit-plan/InfoNote';
import { SummaryRow } from '@/components/credit-plan/SummaryRow';
import { AmountSlider } from '@/components/loan-request/AmountSlider';
import { savingsGoalOptions } from '@/components/savings-plan/savingsGoals.data';
import { colors } from '@/theme/colors';
import { layout } from '@/theme/layout';

const MIN_AMOUNT = 50;
const MAX_AMOUNT = 500;

export default function P18() {
  const [selectedGoal, setSelectedGoal] = useState<string | null>(null);
  const [monthlyAmount, setMonthlyAmount] = useState(100);

  return (
    <View style={styles.container}>
      <BuildCreditHeader title="Ahorro" />

      <ScrollView style={styles.scroll} contentContainerStyle={styles.content}>
        <Text style={styles.heading}>¿Para qué quieres ahorrar?</Text>
        <Text style={styles.subheading}>Elige tu meta. Puedes cambiarla cuando quieras.</Text>

        {savingsGoalOptions.map((option) => (
          <GoalOptionCard
            key={option.id}
            label={option.label}
            icon={option.icon}
            selected={selectedGoal === option.id}
            onPress={() => setSelectedGoal(option.id)}
          />
        ))}

        <Text style={styles.fieldLabel}>¿Cuánto quieres ahorrar al mes?</Text>
        <AmountSlider
          value={monthlyAmount}
          min={MIN_AMOUNT}
          max={MAX_AMOUNT}
          onChange={setMonthlyAmount}
        />

        <View style={styles.divider} />

        <Text style={styles.sectionLabel}>Tu plan</Text>
        <SummaryRow label="Meta mensual" value={`S/ ${monthlyAmount}`} highlight />
        <SummaryRow label="En 6 meses tendrás" value={`S/ ${monthlyAmount * 6}`} />
        <SummaryRow label="Frecuencia" value="Mensual, automático" />

        <View style={styles.noteWrapper}>
          <InfoNote
            lead="Recuerda:"
            text="Ahorrar no genera historial crediticio formal, pero puedes cambiar tu plan cuando quieras."
          />
        </View>
      </ScrollView>

      <ContinueButton label="Empezar a ahorrar" />
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
    fontSize: 22,
    fontWeight: '800',
    color: colors.text,
    marginBottom: 6,
  },
  subheading: {
    fontSize: 14,
    color: colors.textMuted,
    marginBottom: 20,
  },
  fieldLabel: {
    fontSize: 15,
    fontWeight: '700',
    color: colors.text,
    marginTop: 8,
    marginBottom: 16,
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
  noteWrapper: {
    width: '100%',
  },
});
