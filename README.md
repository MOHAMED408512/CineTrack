# CinéTrack

CinéTrack est un petit catalogue en ligne pour découvrir des films et des séries. Les données viennent d'une API (un fichier JSON hébergé sur GitHub). L'interface est faite en HTML, Tailwind CSS et JavaScript.

## Fonctionnalités

- Affichage de chaque film ou série sous forme de card : image, titre, année et type.
- Recherche d'un titre.
- Filtre par type : Tous, Films, Séries.
- La recherche et le filtre fonctionnent séparément et ensemble.
- Pagination : 8 titres par page. On revient à la page 1 après une recherche ou un changement de filtre.
- Modal au clic sur une card : image en grand, titre, type, année, durée (film) ou saisons (série), genres, réalisateurs, pays et description.
- La modal se ferme avec le bouton X ou en cliquant en dehors.
- Ajout d'un titre aux favoris avec le bouton cœur, sans doublon.
- Sidebar des favoris avec le nombre de films et de séries, et un bouton X pour retirer un favori.
- Les favoris restent après l'actualisation de la page.
- Un message d'erreur s'affiche si les données ne se chargent pas.

## Technologies

- HTML
- Tailwind CSS (CDN)
- JavaScript avec modules ES (import / export)
- Fetch API avec async / await
- localStorage

## Structure du projet

```
CineTrack/
├── index.html
├── README.md
└── js/
    ├── api.js
    ├── cards.js
    ├── cinetrack.js
    ├── infoCard.js
    ├── filter.js
    ├── pagination.js
    ├── favorites.js
    └── SideBarFavorite.js
```

## Rôle de chaque fichier

| Fichier              | Rôle                                                                                        |
| -------------------- | ------------------------------------------------------------------------------------------- |
| `index.html`         | La structure de la page avec des conteneurs vides. Tout le contenu est créé par JavaScript. |
| `api.js`             | Récupère les données avec fetch, async / await et try / catch. Vérifie `response.ok`.       |
| `cards.js`           | Crée les cards avec `map` et les affiche dans la page.                                      |
| `infoCard.js`        | Remplit, ouvre et ferme la model.                                                           |
| `filter.js`          | Contient les trois fonctions : recherche, filtre par type et pagination.                    |
| `pagination.js`      | Crée les boutons des pages.                                                                 |
| `favorites.js`       | Lit et enregistre les favoris dans localStorage.                                            |
| `SideBarFavorite.js` | Affiche les favoris dans la sidebar et compte les films et les séries.                      |
| `cinetrack.js`       | Fichier principal : il relie tous les modules et gère les événements.                       |

## Méthodes JavaScript utilisées

- `map` : créer les cards et retrouver les favoris à partir de leurs id.
- `filter` : la recherche, le filtre par type et le retrait d'un favori.
- `find` : retrouver le titre à afficher dans la modal.
- `reduce` : compter les films et les séries dans les favoris.
- `slice` : couper la liste pour afficher 8 titres par page.
- `includes` : vérifier si un titre est déjà dans les favoris.

## Ordre de l'affichage

À chaque action (recherche, filtre, changement de page), la fonction `updatelPage` suit toujours le même ordre :

1. Recherche
2. Filtre par type
3. Pagination
4. Affichage des cards et des boutons de pages

## Favoris et localStorage

Seuls les id des favoris sont enregistrés, par exemple `["1", "5"]`.

- `JSON.stringify` transforme la liste en texte pour l'enregistrer.
- `JSON.parse` transforme le texte en liste quand on la relit.
- Avant d'ajouter un id, on vérifie avec `includes` qu'il n'est pas déjà dans la liste. Il n'y a donc pas de doublon.

Ordre d'exécution :

1. Le code normal s'exécute en premier.
2. Le fetch attend la réponse du serveur sans bloquer la page.
3. Quand la réponse arrive, le code après `await` s'exécute.

### Callbacks personnalisés

La fonction `jibPagination` reçoit une fonction en paramètre (`bdelPage`). Quand on clique sur un bouton de page, elle appelle cette fonction avec le numéro de la page.

### stopPropagation

Un clic sur le heart ne doit pas ouvrir la modal. Dans le code, le cœur est vérifié en premier, on appelle `event.stopPropagation()` et on termine avec `return`. Le code qui ouvre la modal ne s'exécute donc pas.

## Gestion des erreurs

- `api.js` vérifie `istijabaDylData.ok` .
- `cinetrack.js` attrape l'erreur avec `try / catch` et affiche un message rouge dans la page.

## Auteur

[Mohamed sidi hmed ]

novembre 2026 , Merci pour Hossni
