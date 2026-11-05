import { useState } from 'react';
import { View } from 'react-native';

import { BalanceCard } from './BalanceCard';
import { TransactionHistory } from './TransactionHistory';

export function BalanceSection() {
  const [visible, setVisible] = useState(false);

  return (
    <View>
      <BalanceCard visible={visible} amount="S/ 0.33" onToggle={() => setVisible((v) => !v)} />
      {visible && <TransactionHistory />}
    </View>
  );
}
