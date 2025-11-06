import { StyleSheet, Text, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

export default function App() {
  return (
    // SafeAreaView'e container stilini uyguluyoruz.
    // Bu stil, tüm ekranı kaplayıp içindekileri ortalayacak.
    <SafeAreaView style={styles.container}>
      <Text>My Profile App</Text>
    </SafeAreaView>
  );
}

// Stilleri güncelliyoruz
const styles = StyleSheet.create({
  container: {
    flex: 1, // Bu, ekranın tamamını kaplamasını sağlar
    backgroundColor: '#fff', // Arka planı beyaz yapar
    justifyContent: 'center', // İçeriği dikey (vertical) olarak ortalar
    alignItems: 'center', // İçeriği yatay (horizontal) olarak ortalar
  },
  // Artık padding'e ihtiyacımız kalmadığı için "content" stilini kaldırdık.
});