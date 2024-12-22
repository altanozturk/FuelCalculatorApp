import React, { useState } from 'react';
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  ScrollView,
} from 'react-native';
import { styles } from './style'; 

export default function FuelCalculator() {
  const [distance, setDistance] = useState('');
  const [result, setResult] = useState(null);

  const costPerKilometer = 2.58;

  const calculateCost = (distance) => {
    if (distance) {
      const totalCost = distance * costPerKilometer;
      setResult(`Toplam yakıt maliyeti: ${totalCost.toFixed(2)} TL`);
    } else {
      setResult('Lütfen geçerli bir değer girin.');
    }
  };

  const predefinedRoutes = [
    { name: 'İstanbul - İzmir', distance: 460 },
    { name: 'İstanbul - Ankara', distance: 425 },
    { name: 'İstanbul - Antalya', distance: 680 },
    { name: 'Ankara - İzmir', distance: 590 },
    { name: 'Ankara - Antalya', distance: 480 },
    { name: 'İstanbul - Muğla', distance: 650 },
  ];

  return (
    <ScrollView contentContainerStyle={styles.container}>
      <Text style={styles.title}>Yakıt Maliyet Hesaplayıcı</Text>
      <Text style={styles.subtitle}>
        Mesafeyi girin veya bir rota seçin, maliyetinizi öğrenin.
      </Text>

      <TextInput
        style={styles.input}
        placeholder="Mesafe (km)"
        keyboardType="numeric"
        value={distance}
        onChangeText={setDistance}
      />

      <TouchableOpacity
        style={styles.button}
        activeOpacity={0.8}
        onPress={() => calculateCost(Number(distance))}
      >
        <Text style={styles.buttonText}>Hesapla</Text>
      </TouchableOpacity>

      {result && <Text style={styles.result}>{result}</Text>}

      <Text style={styles.subtitle}>Rotalar</Text>
      {predefinedRoutes.map((route, index) => (
        <TouchableOpacity
          key={index}
          style={styles.routeButton}
          activeOpacity={0.8}
          onPress={() => {
            setDistance(route.distance.toString());
            calculateCost(route.distance);
          }}
        >
          <Text style={styles.routeText}>{route.name}</Text>
        </TouchableOpacity>
      ))}
    </ScrollView>
  );
}
