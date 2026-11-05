import { StyleSheet, View } from 'react-native';

import { QuickActionItem } from './QuickActionItem';
import { quickActions } from './quickActions.data';

export function QuickActionsGrid() {
  return (
    <View style={styles.grid}>
      {quickActions.map((action) => (
        <QuickActionItem
          key={action.id}
          label={action.label}
          icon={action.icon}
          color={action.color}
          route={action.route}
        />
      ))}
    </View>
  );
}

const styles = StyleSheet.create({
  grid: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    paddingHorizontal: 16,
    paddingTop: 20,
  },
});
