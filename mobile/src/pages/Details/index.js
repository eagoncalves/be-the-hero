import React from 'react';
import styles from './styles';

import { Feather } from '@expo/vector-icons';
import { View, TouchableOpacity, Image, Text, Linking } from 'react-native';
import logoImg from '../../assets/logo.png';

import { useNavigation, useRoute } from '@react-navigation/native';
import * as MailComposer from 'expo-mail-composer';

function Details(){
  
  const navigation = useNavigation();
  const route = useRoute();
  const incident = route.params.incident;
  
  function getMessage(){
    return   `Olá ${incident.name}, estou entrando em contato  pois gostaria de ajuda no caso: ${incident.title} com o valor de ${Intl.NumberFormat('pt-BR', { style: 'currency', currency: 'BRL'}).format(incident.value)}`;
  }
  function handlerBackToList(){
    navigation.goBack();
  }

  function sendWhatsapp(){
    Linking.canOpenURL('whatsapp')
    .then(supported => {
        Linking.openURL(`whatsapp://send?phone=${incident.whatsapp}&text=${getMessage}`);
    })
    .catch(err => {
      alert('Ocorreu um erro ao tentar envviar um mensagem via whatasapp, tente novamente.');
    });
  }
  
  function sendMail(){
    MailComposer.composeAsync({
      subject: `Heroi do caso : ${incident.title}`,
      recipients: [incident.email],
      body: getMessage()
    }).catch(err =>  alert('Ocorreu um erro no momento e enviar o e-mail tente novamente.'))
  }

  return (
    <View style={styles.container}>
        <View style={styles.header}>
          <Image source={logoImg}/>
          <TouchableOpacity onPress={handlerBackToList}>
            <Feather name='arrow-left' size={28} color='#E02041'/>
          </TouchableOpacity>
        </View>

        <View style={styles.incident}>
              <Text style={[styles.incidentProperty, { marginTop: 0}]}>ONG:</Text>
              <Text style={styles.incidentValue}>{incident.name}</Text>

              <Text style={styles.incidentProperty}>CASO:</Text>
              <Text style={styles.incidentValue}>{incident.description}</Text>

              <Text style={styles.incidentProperty}>VALOR:</Text>
              <Text style={styles.incidentValue}>
               {Intl.NumberFormat('pt-BR', { style: 'currency', currency: 'BRL'}).format(incident.value)}
              </Text>
        </View>

        <View style={styles.contactBox}>
          <Text style={styles.heroTitle}>Salve o dia!</Text>
          <Text style={styles.heroTitle}>Seja o herói desse caso.</Text>
          <Text style={styles.heroDescription}>Entre em contato: </Text>

          <View style={styles.actions}>
            <TouchableOpacity style={styles.action} onPress={sendWhatsapp}>
              <Text style={styles.actionText}>Whatsapp</Text>
            </TouchableOpacity>

            <TouchableOpacity style={styles.action} onPress={sendMail}>
              <Text style={styles.actionText}>E-mail</Text>
            </TouchableOpacity>
          </View>
        </View>
    </View>
  );
}

export default Details;