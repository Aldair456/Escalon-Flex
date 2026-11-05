import { router } from 'expo-router';
import { useState } from 'react';
import { ScrollView, StyleSheet, Text, View } from 'react-native';

import { CreditsHeader } from '@/components/credits/CreditsHeader';
import { StartButton } from '@/components/credits/StartButton';
import { ProgressSteps } from '@/components/credits/build/ProgressSteps';
import { SelectableOptionCard } from '@/components/credits/build/SelectableOptionCard';
import { creditGoals } from '@/components/credits/build/goals.data';
import { DisclaimerFooter } from '@/components/shared/DisclaimerFooter';
import { colors } from '@/theme/colors';

export default function BuildCreditStepOne() {
  const [selectedGoal, setSelectedGoal] = useState<string | null>(null);

  return (
    <View style={styles.container}>
      <CreditsHeader title="Construye tu crédito" />

      <ScrollView style={styles.scroll} contentContainerStyle={styles.content}>
        <ProgressSteps current={1} total={6} />

        <Text style={styles.heading}>¿Para qué quieres construir tu crédito?</Text>
        <Text style={styles.subheading}>Elige lo que te motiva. Puedes cambiarlo después.</Text>

        {creditGoals.map((goal) => (
          <SelectableOptionCard
            key={goal.id}
            title={goal.title}
            description={goal.description}
            selected={selectedGoal === goal.id}
            onPress={() => setSelectedGoal(goal.id)}
          />
        ))}
      </ScrollView>

      <StartButton label="Continuar" onPress={() => router.push('/credits/build/step-2')} />
      <DisclaimerFooter />
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
  content: {
    padding: 20,
  },
  heading: {
    fontSize: 24,
    fontWeight: '800',
    color: '#111827',
    marginTop: 16,
  },
  subheading: {
    fontSize: 14,
    color: colors.textMuted,
    marginTop: 4,
    marginBottom: 20,
  },
});
