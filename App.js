import { StyleSheet, View, ScrollView } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

// 1. Oluşturduğumuz ProfileCard bileşenini import ediyoruz
import ProfileCard from './components/ProfileCard';

export default function App() {
  return (
    <SafeAreaView style={styles.container}>
      {/* 3. <ScrollView> ekliyoruz ki liste ekrana sığmazsa kaydırılabilsin.
           Eğer 3 kart ekrana sığıyorsa bile bu iyi bir pratiktir.
      */}
      <ScrollView>
        {/*
          2. ProfileCard bileşenini 3 kez, farklı "prop"lar ile render ediyoruz.
             Resim yoluna DİKKAT ET! (require ile çağırıyoruz)
        */}
        <View style={styles.content}>
          <ProfileCard
            name="Ada Lovelace"
            role="Mathematician"
            imageSource={require('./assets/ada.png')}
          />
          <ProfileCard
            name="The RECEP"
            role="GIVE ME THE MUSİC"
            imageSource={require('./assets/grace.png')}
          />
          <ProfileCard
            name="Hedy Lamarr"
            role="Inventor & Actress"
            imageSource={require('./assets/hedy.png')}
          />
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f0f2f5', // Arka planı tekrar gri yapıyoruz (Part 1'deki gibi)
  },
  content: {
    padding: 20, // Kartların kenarlardan biraz içeride durması için
  },
});