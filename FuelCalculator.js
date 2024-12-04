import React, { useState } from 'react';
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  StyleSheet,
  ScrollView,
} from 'react-native';

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

const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#f0f9ff', // Hafif mavi arka plan
    padding: 20,
  },
  title: {
    fontSize: 28,
    fontWeight: 'bold',
    color: '#0284c7', // Canlı mavi
    marginBottom: 10,
  },
  subtitle: {
    fontSize: 16,
    color: '#64748b', // Hafif gri ton
    textAlign: 'center',
    marginBottom: 20,
    lineHeight: 22,
  },
  input: {
    borderWidth: 1,
    borderColor: '#ccc',
    padding: 15,
    borderRadius: 8,
    backgroundColor: '#fff',
    width: '80%',
    marginBottom: 20,
  },
  button: {
    backgroundColor: '#38bdf8',
    paddingVertical: 12,
    paddingHorizontal: 20,
    borderRadius: 8,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 3 },
    shadowOpacity: 0.2,
    shadowRadius: 5,
    elevation: 5,
    marginBottom: 20,
  },
  buttonText: {
    color: 'white',
    fontSize: 16,
    fontWeight: 'bold',
    textTransform: 'uppercase',
  },
  result: {
    fontSize: 18,
    color: '#333',
    marginVertical: 20,
    textAlign: 'center',
  },
  routeButton: {
    backgroundColor: '#38bdf8',
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 8,
    marginVertical: 5,
    width: '80%',
    alignItems: 'center',
  },
  routeText: {
    color: 'white',
    fontSize: 16,
    fontWeight: 'bold',
  },
});
