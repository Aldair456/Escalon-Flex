import { ScrollView, StyleSheet, Text, View } from 'react-native';

import { BuildCreditHeader } from '@/components/credit-goal/BuildCreditHeader';
import { FaqItem } from '@/components/progress-overview/FaqItem';
import { faqEntries } from '@/components/progress-overview/faq.data';
import { ProgressOverviewCard } from '@/components/progress-overview/ProgressOverviewCard';
import { StreakCard } from '@/components/progress-overview/StreakCard';
import { colors } from '@/theme/colors';

export default function P8() {
  return (
    <View style={styles.container}>
      <BuildCreditHeader title="Mi avance" />

      <ScrollView style={styles.scroll} contentContainerStyle={styles.content}>
        <ProgressOverviewCard
          progress={0.5}
          completed={3}
          total={6}
          levelLabel="En construcción"
          savedAmount="S/ 450"
        />

        <StreakCard streak={3} nextDueDate="05 de enero" />

        <View style={styles.faqSection}>
          <Text style={styles.faqTitle}>Preguntas frecuentes</Text>

          {faqEntries.map((item) => (
            <FaqItem
              key={item.id}
              question={item.question}
              answer={item.answer}
              defaultOpen={item.defaultOpen}
            />
          ))}
        </View>
      </ScrollView>
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
    paddingBottom: 20,
  },
  faqSection: {
    paddingHorizontal: 20,
  },
  faqTitle: {
    fontSize: 20,
    fontWeight: '800',
    color: colors.primary,
    marginBottom: 12,
  },
});
