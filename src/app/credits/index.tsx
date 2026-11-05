import { router } from 'expo-router';
import { ScrollView, StyleSheet, Text, View } from 'react-native';

import { CreditOptionCard } from '@/components/credits/CreditOptionCard';
import { CreditsHeader } from '@/components/credits/CreditsHeader';
import { DisclaimerFooter } from '@/components/shared/DisclaimerFooter';
import { colors } from '@/theme/colors';

export default function Credits() {
  return (
    <View style={styles.container}>
      <CreditsHeader title="Créditos" />

      <ScrollView style={styles.scroll} contentContainerStyle={styles.content}>
        <Text style={styles.heading}>Elige cómo avanzar</Text>
        <Text style={styles.subheading}>Opciones de crédito dentro de Yape.</Text>

        <CreditOptionCard
          variant="outline"
          title="Préstamos Yape"
          description="Consulta el monto disponible para ti."
          actionLabel="Explorar"
        />

        <CreditOptionCard
          variant="highlighted"
          badge="NUEVO"
          title="Construye tu crédito"
          description="¿Aún no tienes historial? Empieza con cuotas pequeñas y sube de nivel."
          actionLabel="Conocer cómo funciona"
          onPress={() => router.push('/credits/how-it-works')}
        />
      </ScrollView>

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
  },
  subheading: {
    fontSize: 14,
    color: colors.textMuted,
    marginTop: 4,
    marginBottom: 20,
  },
});
