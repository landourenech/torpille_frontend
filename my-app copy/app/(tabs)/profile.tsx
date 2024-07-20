import React, { useState } from 'react';
import { View, Text, TextInput, Button, StyleSheet, Image } from 'react-native';

export default function ProfileManagement() {
  const [name, setName] = useState('Lee Charly ');
  const [email, setEmail] = useState('leecharly@example.com');
  const [phone, setPhone] = useState('077 00 00 00');
  const [bio, setBio] = useState('Dévéloppeur web et web mobile');

  const handleUpdateProfile = () => {
    // Logic for updating profile information
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Gestion du Profil</Text>
      <Image source={{ uri: 'https://via.placeholder.com/100' }} style={styles.profileImage} />
      <Button title="Changer la photo de profil" onPress={() => {}} />
      <TextInput
        placeholder="Nom"
        value={name}
        onChangeText={setName}
        style={styles.input}
      />
      <TextInput
        placeholder="Email"
        value={email}
        onChangeText={setEmail}
        style={styles.input}
      />
      <TextInput
        placeholder="Téléphone"
        value={phone}
        onChangeText={setPhone}
        style={styles.input}
      />
      
      <TextInput
        placeholder="Bio"
        value={bio}
        onChangeText={setBio}
        style={styles.input}
      />
      <Button title="Mettre à jour le profil" onPress={handleUpdateProfile} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
    marginVertical: 10,
  },
  profileImage: {
    width: 100,
    height: 100,
    borderRadius: 50,
    marginBottom: 16,
  },
  input: {
    height: 40,
    borderColor: 'gray',
    borderWidth: 1,
    marginBottom: 12,
    padding: 8,
  },
});
