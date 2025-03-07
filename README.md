# copilot-bingo

- prompt : dans +page.svelte, créé une crille de bingo centrée dans la page
- manual : installer la dépendance @tailwindcss/typography (pas lié à copilot workspace)
- prompt : Je veux que le bingo serve à stocker des phrases courtes (~10 mots) au lieu de nombres. Agrandit les cases pour que le texte soit toujours lisible. Les cases doivent avoir une taille fixe et rester carrées. Quand l'utilisateur clique sur une case, il peut éditer son contenu.
- au lieu d'afficher un prompt quand l'utilisateur clique sur une case, affiche une textarea à la place du contenu de la case

## Prisma Setup

1. Install Prisma:
   ```bash
   npm install @prisma/client
   npx prisma init
   ```

2. Run Prisma migrations:
   ```bash
   npx prisma migrate dev --name init
   ```
