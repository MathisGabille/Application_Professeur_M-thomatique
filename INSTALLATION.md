# 📋 **Instructions d'Installation**

## 🚨 **Prérequis - Installation de Node.js**

Avant de pouvoir lancer l'application, vous devez installer Node.js sur votre système.

### **Étape 1 : Télécharger Node.js**
1. Allez sur [https://nodejs.org/](https://nodejs.org/)
2. Téléchargez la version **LTS** (Long Term Support) recommandée
3. Choisissez la version Windows (x64) si vous êtes sur Windows

### **Étape 2 : Installer Node.js**
1. Exécutez le fichier téléchargé
2. Suivez l'assistant d'installation
3. **Important** : Cochez la case "Automatically install the necessary tools"
4. Terminez l'installation

### **Étape 3 : Vérifier l'installation**
Ouvrez un **nouveau** terminal PowerShell et tapez :
```bash
node --version
npm --version
```

Vous devriez voir les numéros de version s'afficher.

## 🛠️ **Installation de l'Application**

### **Étape 1 : Installer Expo CLI globalement**
```bash
npm install -g @expo/cli
```

### **Étape 2 : Installer les dépendances du projet**
```bash
npm install
```

### **Étape 3 : Lancer l'application**
```bash
npm start
```

## 📱 **Test de l'Application**

### **Option 1 : Sur votre téléphone (Recommandé)**
1. Installez l'application **Expo Go** depuis l'App Store (iOS) ou Google Play (Android)
2. Lancez `npm start`
3. Scannez le QR code qui s'affiche avec l'app Expo Go

### **Option 2 : Sur le web**
```bash
npm run web
```

### **Option 3 : Sur simulateur (si installé)**
```bash
# iOS (macOS uniquement)
npm run ios

# Android
npm run android
```

## 🔧 **Résolution des Problèmes**

### **Erreur "npm n'est pas reconnu"**
- Redémarrez votre terminal après l'installation de Node.js
- Vérifiez que Node.js est bien installé avec `node --version`

### **Erreur de dépendances**
- Supprimez le dossier `node_modules` et le fichier `package-lock.json`
- Relancez `npm install`

### **Erreur Expo**
- Vérifiez que Expo CLI est installé : `expo --version`
- Si non, réinstallez : `npm install -g @expo/cli`

## 📚 **Documentation Utile**

- [Documentation Expo](https://docs.expo.dev/)
- [Documentation React Native](https://reactnative.dev/)
- [Guide d'installation Node.js](https://nodejs.org/en/docs/)

## 🆘 **Besoin d'Aide ?**

Si vous rencontrez des problèmes :
1. Vérifiez que Node.js est bien installé
2. Redémarrez votre terminal
3. Consultez la documentation officielle
4. Vérifiez que vous êtes dans le bon dossier du projet
