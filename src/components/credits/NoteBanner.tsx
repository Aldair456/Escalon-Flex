import { StyleSheet, Text, View } from 'react-native';

type NoteBannerProps = {
  text: string;
};

export function NoteBanner({ text }: NoteBannerProps) {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>{text}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#E6F7F4',
    borderRadius: 16,
    padding: 16,
  },
  text: {
    fontSize: 14,
    color: '#111827',
    textAlign: 'center',
  },
});
