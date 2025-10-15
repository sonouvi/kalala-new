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
    link: 'https://www.youtube.com/watch?v=HEmDDtAkIeU&list=PL79mTBuCt2uC_flHWuh0dos5VwpF5cW-s'
  },
  {
    id: 2,
    title: "Escale RnB",
    description:
      "Courte description du projet. Le style, les thèmes abordés, l'ambiance générale",
    imageUrl:
      'assets/images/escale.jpg',
    link: 'https://www.youtube.com/watch?v=NoEYZhKKdk8&list=PL79mTBuCt2uAQzFzDc_vodeI4vOyzXAUY'
  },
  {
    id: 3,
    title: "Joli body",
    description:
      "Courte description du projet. Le style, les thèmes abordés, l'ambiance générale",
    imageUrl:
      'assets/images/jolibody.jpg',
    link: 'https://www.youtube.com/watch?v=kDMQvr4l3aU'
  }
];
