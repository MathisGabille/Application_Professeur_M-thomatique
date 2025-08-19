# Application Professeur Mathématique

Application mobile multi-plateforme (iOS, Android, Web) pour la gestion de cours particuliers de mathématiques.

## 🎯 **Objectif**

Cette application permet de gérer trois rôles distincts :
- **👨‍🏫 Professeur** : Gestion des cours, exercices, Flash Cards et facturation
- **🎓 Élève** : Consultation des cours, exercices et révision avec Flash Cards
- **👨‍👩‍👧‍👦 Parent** : Suivi du progrès de l'enfant et gestion de la facturation

## 🚀 **Technologies utilisées**

- **React Native** avec **Expo** pour le développement cross-platform
- **TypeScript** pour la sécurité des types
- **React Navigation** pour la navigation entre écrans
- **Expo Linear Gradient** pour les effets visuels
- **Expo Vector Icons** pour les icônes

## 📱 **Fonctionnalités par rôle**

### **Professeur**
- 📊 Tableau de bord avec statistiques
- 📚 Gestion des cours et leçons
- 🧮 Création et suivi des exercices
- 🃏 Gestion des Flash Cards
- 💰 Système de facturation complet

### **Élève**
- 📊 Suivi de la progression
- 📚 Consultation des cours
- 🧮 Résolution d'exercices
- 🃏 Révision avec Flash Cards

### **Parent**
- 📊 Suivi du progrès de l'enfant
- 📈 Statistiques détaillées
- 💰 Gestion de la facturation
- 📅 Planning des leçons

## 🛠️ **Installation et lancement**

### **Prérequis**
- Node.js (version 16 ou supérieure)
- npm ou yarn
- Expo CLI : `npm install -g @expo/cli`

### **Installation des dépendances**
```bash
npm install
```

### **Lancement de l'application**

#### **Développement local**
```bash
npm start
```

#### **Sur mobile (avec Expo Go)**
```bash
npm start
# Scannez le QR code avec l'app Expo Go
```

#### **Sur simulateur iOS**
```bash
npm run ios
```

#### **Sur émulateur Android**
```bash
npm run android
```

#### **Version web**
```bash
npm run web
```

## 📁 **Structure du projet**

```
src/
├── screens/           # Écrans de l'application
│   ├── teacher/      # Interface professeur
│   ├── student/      # Interface élève
│   └── parent/       # Interface parent
├── navigation/        # Configuration de la navigation
└── components/        # Composants réutilisables
```

## 🎨 **Design System**

L'application utilise un système de couleurs cohérent :
- **Professeur** : Bleu (#667eea)
- **Élève** : Rose (#f093fb)
- **Parent** : Bleu clair (#4facfe)

## 🔮 **Roadmap**

### **Phase 1 : Prototype visuel** ✅
- [x] Structure de base avec navigation
- [x] Interfaces mockées pour chaque rôle
- [x] Design system cohérent

### **Phase 2 : Fonctionnalités de base** 🚧
- [ ] Authentification et gestion des rôles
- [ ] CRUD basique pour chaque entité
- [ ] Interface de facturation simple

### **Phase 3 : IA et améliorations** 📋
- [ ] Agents IA pour personnalisation
- [ ] Recommandations intelligentes
- [ ] Automatisation des rapports

## 🤝 **Contribution**

Ce projet est développé pour un usage personnel du professeur Mathis GABILLE.

## 📄 **Licence**

Usage personnel - Tous droits réservés.
