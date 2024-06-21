console.log("Carregando configuração do Firebase...");

const firebaseConfig = {
  apiKey: "AIzaSyDePl0Azsf7tjl5dsD9hjUWjKu3JHXj31g",
  authDomain: "projetopontoweb.firebaseapp.com",
  databaseURL: "https://projetopontoweb-default-rtdb.firebaseio.com",
  projectId: "projetopontoweb",
  storageBucket: "projetopontoweb.appspot.com",
  messagingSenderId: "118371891372",
  appId: "1:118371891372:web:bd64611e55a8a261500709"
};

if (!firebase.apps.length) {
  firebase.initializeApp(firebaseConfig);
  console.log("Firebase inicializado"); // Debug após a inicialização
} else {
  firebase.app(); // if already initialized, use that one
}

console.log("Firebase carregado");
