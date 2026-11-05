import { router } from 'expo-router';
import { ScrollView, StyleSheet, Text, View } from 'react-native';

import { CreditsHeader } from '@/components/credits/CreditsHeader';
import { NoteBanner } from '@/components/credits/NoteBanner';
import { StartButton } from '@/components/credits/StartButton';
import { StepItem } from '@/components/credits/StepItem';
import { creditSteps } from '@/components/credits/steps.data';
import { colors } from '@/theme/colors';

export default function HowItWorks() {
  return (
    <View style={styles.container}>
      <CreditsHeader title="Construye tu crédito" />

      <ScrollView style={styles.scroll} contentContainerStyle={styles.content}>
        <Text style={styles.heading}>Así funciona</Text>
        <Text style={styles.subheading}>Tres pasos, a tu ritmo.</Text>

        {creditSteps.map((step) => (
          <StepItem
            key={step.id}
            number={step.number}
            title={step.title}
            description={step.description}
          />
        ))}

        <NoteBanner text="Al terminar, podrás explorar nuevas opciones." />
      </ScrollView>

      <StartButton label="Empezar" onPress={() => router.push('/credits/build/step-1')} />
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
  },
  subheading: {
    fontSize: 14,
    color: colors.textMuted,
    marginTop: 4,
    marginBottom: 20,
  },
});
