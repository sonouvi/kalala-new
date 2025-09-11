export interface Projet {
  id?: number;
  title?: string;
  description?: string;
  imageUrl?: string;
  link?: string;
}

export const LISTE_PROJETS: Projet[] = [
  {
    id: 1,
    title: "La fête selon Kalala",
    description:
      "Courte description du projet. Le style, les thèmes abordés, l'ambiance générale",
    imageUrl:
      'assets/images/lafeteselonkalala.jpg',
    link: 'https://example.com/projet1'
  },
  {
    id: 2,
    title: "Sommeil",
    description:
      "Courte description du projet. Le style, les thèmes abordés, l'ambiance générale",
    imageUrl:
      'assets/images/sommeil.jpg',
    link: 'https://example.com/projet2'
  },
  {
    id: 3,
    title: "Joli body",
    description:
      "Courte description du projet. Le style, les thèmes abordés, l'ambiance générale",
    imageUrl:
      'assets/images/jolibody.jpg',
    link: 'https://example.com/projet3'
  }
];
