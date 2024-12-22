import React from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import { styles } from './style'; 

export default function HomeScreen({ navigation }) {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Hoş Geldiniz!</Text>
      <Text style={styles.subtitle}>
        Araç yolculuklarınız için yakıt maliyetini kolayca hesaplayın.
      </Text>

      <View style={styles.buttonContainer}>
        <TouchableOpacity
          style={styles.button}
          activeOpacity={0.8}
          onPress={() => navigation.navigate('Yakıt Hesaplama')}
        >
          <Text style={styles.buttonText}>Yakıt Hesaplama</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}
