import React from 'react';
import { View, Text, Image, StyleSheet } from 'react-native';

// 1. Bileşen, dışarıdan 3 adet 'prop' alacak: name, role, ve imageSource
function ProfileCard({ name, role, imageSource }) {
  return (
    // 2. Ana kart görünümü (stil={styles.card})
    <View style={styles.card}>
      {/* 3. Avatar resmi (stil={styles.avatar}) */}
      <Image source={imageSource} style={styles.avatar} />
      
      {/* 4. İsim (stil={styles.name}) */}
      <Text style={styles.name}>{name}</Text>
      
      {/* 5. Rol (stil={styles.role}) */}
      <Text style={styles.role}>{role}</Text>
    </View>
  );
}

// 6. StyleSheet API'si ile tüm stilleri tanımlıyoruz
const styles = StyleSheet.create({
  card: {
    backgroundColor: 'white',
    borderRadius: 16, // Kenarları yumuşatma
    padding: 24,
    marginVertical: 10, // Kartlar arası dikey boşluk
    alignItems: 'center', // İçeriği yatayda ortala
    
    // Platforma özel gölge (Task 4)
    // iOS için gölge
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    // Android için gölge
    elevation: 3,
  },
  avatar: {
    width: 100,
    height: 100,
    borderRadius: 50, // Resmi daire yapmak için (genişliğin/yüksekliğin yarısı)
    marginBottom: 16,
  },
  name: {
    fontSize: 22,
    fontWeight: 'bold',
  },
  role: {
    fontSize: 16,
    color: '#666', // Gri renk
  },
});

export default ProfileCard;