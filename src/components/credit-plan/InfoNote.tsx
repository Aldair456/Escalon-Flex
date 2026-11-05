import { Ionicons } from '@expo/vector-icons';
import { StyleSheet, Text, View } from 'react-native';

import { colors } from '@/theme/colors';

type InfoNoteProps = {
  lead: string;
  text: string;
};

export function InfoNote({ lead, text }: InfoNoteProps) {
  return (
    <View style={styles.container}>
      <View style={styles.iconCircle}>
        <Ionicons name="information" size={14} color={colors.white} />
      </View>

      <Text style={styles.text}>
        <Text style={styles.lead}>{lead} </Text>
        {text}
      </Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    gap: 10,
    backgroundColor: '#F3EEFA',
    borderRadius: 16,
    padding: 16,
    marginTop: 16,
  },
  iconCircle: {
    width: 22,
    height: 22,
    borderRadius: 11,
    backgroundColor: '#111827',
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 2,
  },
  text: {
    flex: 1,
    fontSize: 13,
    color: '#111827',
    lineHeight: 19,
  },
  lead: {
    fontWeight: '800',
  },
});
