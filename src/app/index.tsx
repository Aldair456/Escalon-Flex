import { router } from 'expo-router';
import { Pressable, ScrollView, StyleSheet, Text, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

import { BalanceSection } from '@/components/home/BalanceSection';
import { BottomActionBar } from '@/components/home/BottomActionBar';
import { PromoCarousel } from '@/components/home/PromoCarousel';
import { QuickActionsGrid } from '@/components/home/QuickActionsGrid';
import { SearchBar } from '@/components/home/SearchBar';
import { TopBar } from '@/components/home/TopBar';
import { colors } from '@/theme/colors';

export default function Home() {
  return (
    <View style={styles.container}>
      <ScrollView style={styles.scroll} contentContainerStyle={styles.scrollContent}>
        <SafeAreaView edges={['top']} style={styles.purpleSection}>
          <TopBar />
          <SearchBar />
          <QuickActionsGrid />
          <PromoCarousel />
        </SafeAreaView>

        <View style={styles.whiteSection}>
          <BalanceSection />
        </View>
      </ScrollView>

      <BottomActionBar />

      <Pressable style={styles.devButton} onPress={() => router.push('/p1')}>
        <Text style={styles.devButtonText}>P1</Text>
      </Pressable>

      <Pressable style={[styles.devButton, styles.devButtonP2]} onPress={() => router.push('/p2')}>
        <Text style={styles.devButtonText}>P2</Text>
      </Pressable>

      <Pressable style={[styles.devButton, styles.devButtonP3]} onPress={() => router.push('/p3')}>
        <Text style={styles.devButtonText}>P3</Text>
      </Pressable>

      <Pressable style={[styles.devButton, styles.devButtonP4]} onPress={() => router.push('/p4')}>
        <Text style={styles.devButtonText}>P4</Text>
      </Pressable>

      <Pressable style={[styles.devButton, styles.devButtonP5]} onPress={() => router.push('/p5')}>
        <Text style={styles.devButtonText}>P5</Text>
      </Pressable>

      <Pressable style={[styles.devButton, styles.devButtonP6]} onPress={() => router.push('/p6')}>
        <Text style={styles.devButtonText}>P6</Text>
      </Pressable>

      <Pressable style={[styles.devButton, styles.devButtonP7]} onPress={() => router.push('/p7')}>
        <Text style={styles.devButtonText}>P7</Text>
      </Pressable>

      <Pressable style={[styles.devButton, styles.devButtonP8]} onPress={() => router.push('/p8')}>
        <Text style={styles.devButtonText}>P8</Text>
      </Pressable>

      <Pressable style={[styles.devButton, styles.devButtonP9]} onPress={() => router.push('/p9')}>
        <Text style={styles.devButtonText}>P9</Text>
      </Pressable>

      <Pressable style={[styles.devButton, styles.devButtonP10]} onPress={() => router.push('/p10')}>
        <Text style={styles.devButtonText}>P10</Text>
      </Pressable>

      <Pressable style={[styles.devButton, styles.devButtonP11]} onPress={() => router.push('/p11')}>
        <Text style={styles.devButtonText}>P11</Text>
      </Pressable>

      <Pressable style={[styles.devButton, styles.devButtonP12]} onPress={() => router.push('/p12')}>
        <Text style={styles.devButtonText}>P12</Text>
      </Pressable>

      <Pressable style={[styles.devButton, styles.devButtonP13]} onPress={() => router.push('/p13')}>
        <Text style={styles.devButtonText}>P13</Text>
      </Pressable>

      <Pressable style={[styles.devButton, styles.devButtonP14]} onPress={() => router.push('/p14')}>
        <Text style={styles.devButtonText}>P14</Text>
      </Pressable>

      <Pressable style={[styles.devButton, styles.devButtonP15]} onPress={() => router.push('/p15')}>
        <Text style={styles.devButtonText}>P15</Text>
      </Pressable>

      <Pressable style={[styles.devButton, styles.devButtonP16]} onPress={() => router.push('/p16')}>
        <Text style={styles.devButtonText}>P16</Text>
      </Pressable>

      <Pressable style={[styles.devButton, styles.devButtonP17]} onPress={() => router.push('/p17')}>
        <Text style={styles.devButtonText}>P17</Text>
      </Pressable>

      <Pressable style={[styles.devButton, styles.devButtonP18]} onPress={() => router.push('/p18')}>
        <Text style={styles.devButtonText}>P18</Text>
      </Pressable>
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
  scrollContent: {
    flexGrow: 1,
  },
  purpleSection: {
    backgroundColor: colors.primary,
    paddingBottom: 20,
    borderBottomLeftRadius: 24,
    borderBottomRightRadius: 24,
  },
  whiteSection: {
    paddingBottom: 20,
  },
  devButton: {
    position: 'absolute',
    top: 50,
    right: 16,
    backgroundColor: colors.text,
    paddingHorizontal: 10,
    paddingVertical: 6,
    borderRadius: 8,
    zIndex: 50,
  },
  devButtonText: {
    color: colors.white,
    fontWeight: '700',
    fontSize: 12,
  },
  devButtonP2: {
    top: 88,
  },
  devButtonP3: {
    top: 126,
  },
  devButtonP4: {
    top: 164,
  },
  devButtonP5: {
    top: 202,
  },
  devButtonP6: {
    top: 240,
  },
  devButtonP7: {
    top: 278,
  },
  devButtonP8: {
    top: 316,
  },
  devButtonP9: {
    top: 354,
  },
  devButtonP10: {
    top: 392,
  },
  devButtonP11: {
    top: 430,
  },
  devButtonP12: {
    top: 468,
  },
  devButtonP13: {
    top: 506,
  },
  devButtonP14: {
    top: 544,
  },
  devButtonP15: {
    top: 582,
  },
  devButtonP16: {
    top: 620,
  },
  devButtonP17: {
    top: 658,
  },
  devButtonP18: {
    top: 696,
  },
});
