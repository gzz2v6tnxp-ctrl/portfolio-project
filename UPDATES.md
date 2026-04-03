# Portfolio Updates — Instructions

## CRITICAL: Sécurité
1. **SUPPRIMER `preinstall.js`** — Ce fichier contient du code malveillant obfusqué
2. Le `package.json` mis à jour retire le hook `preinstall` dangereux
3. Après suppression, changer tes mots de passe et tokens qui auraient pu être exposés

## Fichiers à remplacer
Copie chaque fichier à la racine de ton repo en respectant les chemins :

```
package.json                    → remplace l'existant (retire le preinstall malveillant)
app/page.tsx                    → remplace l'existant (retire Learning)
components/Header.tsx           → remplace l'existant (retire Learning du nav)
components/Hero.tsx             → remplace l'existant (titre aligné CV)
components/Experience.tsx       → remplace l'existant (Malitix + métriques)
components/Projects.tsx         → remplace l'existant (retire SDXL chat + Credit Risk)
components/Certifications.tsx   → remplace l'existant (retire AWS "Upcoming")
lib/translations.ts             → remplace l'existant (tout aligné)
```

## Fichiers à SUPPRIMER
```
preinstall.js                   → SUPPRIMER (code malveillant)
components/Learning.tsx         → SUPPRIMER (section retirée)
```

## Résumé des changements

### Sécurité
- Suppression du preinstall.js malveillant et de son hook npm

### Crédibilité
- Titre aligné CV ↔ Portfolio : "AI Engineer | LLM & Production Systems"
- Entreprise unifiée : "Malitix" (pas "Etech Consulting")  
- Métriques d'impact ajoutées aux expériences (100 conv/jour, 800+ produits, 95% précision, etc.)
- Projets non-pertinents retirés (SDXL chat, Credit Risk "In Progress")
- Certification "Upcoming" AWS retirée (ne montrer que le terminé)
- Section "Learning" retirée (Simplilearn YouTube = anti-pattern pour un profil expert)
- Columbia University remontée en premier dans les certifications
- Bio About recentrée sur l'impact business mesurable

### Après déploiement
- Vérifier que le CV PDF téléchargeable est aussi la version v2 avec métriques
- Placer le fichier CV_Ravelojaona_AI_Engineer_v2.pdf dans /public/CVIrinasoaRavelojaona_en.pdf
