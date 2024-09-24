import {
  View,
  Text,
  Image,
  StyleSheet,
  TouchableOpacity,
} from 'react-native';
import React, {useState} from 'react';

import quotes from './quotes.json'; 
export default function App() {
  const [showQuote, setShowQuote] = useState(false);
  const [currentQuote, setCurrentQuote] = useState('');
  const [currentImage, setCurrentImage] = useState(require('./assets/fortune-cookie-isolated-on-white-background-hand-drawing-style-vector.jpg'));

  function randomQuote() {
    const randomIndex = Math.floor(Math.random() * quotes.length);
    return quotes[randomIndex];
  }

  function CliqueImagem() {
    setCurrentQuote(randomQuote());
    setCurrentImage(require('./assets/hand-drawn-fortune-cookie-illustration_23-2149243116.png')); 
    setShowQuote(true); 
  }

  return (
    <View style={{backgroundColor: "white", flex: 1}}>
      <View style={style_header.app_name}>
        <Text style={style_header.text_container}>Fortune Cookie</Text>
      </View>

      <View style={style_quote.container}>
        <TouchableOpacity onPress={CliqueImagem}>
          <Image
            source={currentImage}
            style={{width: 350, height: 350, borderRadius: 190}}
          />
          <Text style={{color: 'black', fontSize: 16, textAlign: 'center', fontStyle: "italic", fontWeight: "bold",marginTop:10}}>
            Descubra sua sorte! Clique na imagem.
          </Text>
        </TouchableOpacity>
        <View style={style_quote.message}>
          {showQuote && ( 
            <Text style={{color: 'black', fontSize: 16, textAlign: 'center', fontStyle: "italic", fontWeight: "bold"}}>
              "{currentQuote.quote}"
            </Text>
          )}
        </View>
      </View>
    </View>
  );
}

const style_quote = StyleSheet.create({
  container: {
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 100, 
  },
  message: {
    marginTop: 20,
    paddingHorizontal: 20, 
  },
});

const style_header = StyleSheet.create({
  app_name: {
    backgroundColor: 'black',
    height: 50,
  },
  text_container: {
    color: 'white',
    fontSize: 30,
    fontWeight: 'bold',
    left: 20,
  },
});
