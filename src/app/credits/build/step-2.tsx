import { useState } from 'react';
import { ScrollView, StyleSheet, Text, View } from 'react-native';

import { CreditsHeader } from '@/components/credits/CreditsHeader';
import { NoteBanner } from '@/components/credits/NoteBanner';
import { StartButton } from '@/components/credits/StartButton';
import { ChecklistSection } from '@/components/credits/build/ChecklistSection';
import { startingPointChecklist } from '@/components/credits/build/checklist.data';
import { ConsentCheckbox } from '@/components/credits/build/ConsentCheckbox';
import { LevelProgressCard } from '@/components/credits/build/LevelProgressCard';
import { ProgressSteps } from '@/components/credits/build/ProgressSteps';
import { DisclaimerFooter } from '@/components/shared/DisclaimerFooter';
import { colors } from '@/theme/colors';

export default function BuildCreditStepTwo() {
  const [accepted, setAccepted] = useState(false);

  return (
    <View style={styles.container}>
      <CreditsHeader title="Construye tu crédito" />

      <ScrollView style={styles.scroll} contentContainerStyle={styles.content}>
        <ProgressSteps current={2} total={6} />

        <Text style={styles.heading}>Este es tu punto de partida</Text>
        <Text style={styles.subheading}>Así empiezas. Todo se mide por tu constancia.</Text>

        <LevelProgressCard level={1} title="Primer paso" totalSegments={4} filledSegments={1} />

        <ChecklistSection items={startingPointChecklist} />

        <View style={styles.noteSpacing}>
          <NoteBanner text="El respaldo del plan está por validar con el banco." />
        </View>

        <ConsentCheckbox
          label="Acepto las condiciones del plan y el tratamiento de mis datos."
          checked={accepted}
          onToggle={() => setAccepted((value) => !value)}
        />
      </ScrollView>

      <StartButton label="Ver planes" />
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
  },
  noteSpacing: {
    marginTop: 16,
    marginBottom: 4,
  },
});
