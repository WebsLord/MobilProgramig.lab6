import React from 'react';
// 1. TouchableOpacity ve Alert'i 'react-native'den import et
import { View, Text, Image, StyleSheet, TouchableOpacity, Alert } from 'react-native';

// Prop'lar aynı kalıyor: name, role, imageSource
function ProfileCard({ name, role, imageSource }) {
  
  // 2. "handlePress" adında bir fonksiyon oluştur
  // Bu fonksiyon, o karttaki "name" prop'unu kullanarak bir uyarı gösterecek
  const handlePress = () => {
    Alert.alert(`You tapped on ${name}’s profile.`);
  };

  return (
    // 3. Dıştaki <View> bileşenini <TouchableOpacity> ile değiştir.
    //    Stilini (styles.card) ve onPress olayını buna aktar.
    <TouchableOpacity style={styles.card} onPress={handlePress}>
      {/* İçerideki yapı (Image, Text, Text) değişmiyor.
        Dış sarmalayıcı <View> olduğu için onu <TouchableOpacity> 
        olarak değiştirmemiz yeterli. 
        Eğer <View> içinde sarmalasaydık, gölge düzgün çalışmayabilirdi.
      */}
      <Image source={imageSource} style={styles.avatar} />
      <Text style={styles.name}>{name}</Text>
      <Text style={styles.role}>{role}</Text>
    </TouchableOpacity>
  );
}

// Stillerde herhangi bir değişiklik yok
const styles = StyleSheet.create({
  card: {
    backgroundColor: 'white',
    borderRadius: 16,
    padding: 24,
    marginVertical: 10,
    alignItems: 'center',
    
    // Gölge stilleri
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 3,
  },
  avatar: {
    width: 100,
    height: 100,
    borderRadius: 50,
    marginBottom: 16,
  },
  name: {
    fontSize: 22,
    fontWeight: 'bold',
  },
  role: {
    fontSize: 16,
    color: '#666',
  },
});

export default ProfileCard;