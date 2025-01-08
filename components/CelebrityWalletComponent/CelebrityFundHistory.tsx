import React from 'react';
import {
    FlatList,
    SafeAreaView,
    StatusBar,
    StyleSheet,
    Text,
    View,
} from 'react-native';

interface Transaction {
  id: string;
  type: 'add' | 'withdraw';
  amount: number;
  reference: string;
  date: string;
}

const transactions: Transaction[] = [
  {
    id: '1',
    type: 'add',
    amount: 100000,
    reference: 'hercfw450d83fdab7770fd8598',
    date: '12- 07 - 2022',
  },
  {
    id: '2',
    type: 'withdraw',
    amount: 50000,
    reference: 'hercfw450d83fdab7770fd8598',
    date: '12- 07 - 2022',
  },
  // Add more transactions as needed
];

const TransactionItem: React.FC<{ item: Transaction }> = ({ item }) => (
  <View style={styles.transactionItem}>
    <View style={styles.leftContent}>
      <View style={styles.iconContainer}>
        <View style={[
          styles.arrow,
          item.type === 'add' ? styles.arrowUp : styles.arrowDown
        ]} />
      </View>
      <View>
        <Text style={styles.transactionType}>
          {item.type === 'add' ? 'Funds added' : 'Cash Withdrawal'}
        </Text>
        <Text style={styles.reference}>
          Ref - {item.reference}
        </Text>
      </View>
    </View>
    <View style={styles.rightContent}>
      <Text style={[
        styles.amount,
        item.type === 'add' ? styles.greenText : styles.redText
      ]}>
        ₦{item.amount.toLocaleString()}
      </Text>
      <Text style={styles.date}>{item.date}</Text>
    </View>
  </View>
);

const FundHistoryScreen: React.FC = () => {
  return (
    <SafeAreaView style={styles.container}>
      <StatusBar barStyle="light-content" />

      {/* Transaction List */}
      <FlatList
        data={transactions}
        renderItem={({ item }) => <TransactionItem item={item} />}
        keyExtractor={item => item.id}
        contentContainerStyle={styles.listContainer}
      />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#1A1A2E',
  },
  header: {
    padding: 16,
    flexDirection: 'row',
    alignItems: 'center',
  },
  headerTitle: {
    fontSize: 20,
    fontWeight: '600',
    color: '#fff',
    marginLeft: 32,
  },
  listContainer: {
    padding: 16,
  },
  transactionItem: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 24,
  },
  leftContent: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  iconContainer: {
    width: 40,
    height: 40,
    backgroundColor: '#2D2D3F',
    borderRadius: 20,
    alignItems: 'center',
    justifyContent: 'center',
    marginRight: 12,
  },
  arrow: {
    width: 0,
    height: 0,
    backgroundColor: 'transparent',
    borderStyle: 'solid',
    borderLeftWidth: 6,
    borderRightWidth: 6,
    borderBottomWidth: 12,
    borderLeftColor: 'transparent',
    borderRightColor: 'transparent',
  },
  arrowUp: {
    borderBottomColor: '#9C27B0',
    transform: [{ rotate: '0deg' }],
  },
  arrowDown: {
    borderBottomColor: '#9C27B0',
    transform: [{ rotate: '180deg' }],
  },
  transactionType: {
    color: '#fff',
    fontSize: 16,
    fontWeight: '500',
    marginBottom: 4,
  },
  reference: {
    color: '#666',
    fontSize: 12,
  },
  rightContent: {
    alignItems: 'flex-end',
  },
  amount: {
    fontSize: 16,
    fontWeight: '600',
    marginBottom: 4,
  },
  greenText: {
    color: '#4CAF50',
  },
  redText: {
    color: '#f44336',
  },
  date: {
    color: '#666',
    fontSize: 12,
  },
});

export default FundHistoryScreen;