export interface SocialNetwork {
  id?: number;
  name?: string;
  url?: string;
  iconUrl?: string; 
}

export const LISTE_RESEAUX: SocialNetwork[] = [
  {
    id: 1,
    name: 'Youtube',
    url: 'https://www.youtube.com/@kalalasoul',
    iconUrl: 'bi bi-youtube text-6xl text-red-600' 
  },
  {
    id: 2,
    name: 'Instagram',
    url: 'https://instagram.com/kalala_soul',
    iconUrl: 'bi bi-instagram text-6xl text-pink-600' 
  },
    {
    id: 3,
    name: 'Spotify',
    url: 'https://facebook.com/kalala',
    iconUrl: 'bi bi-spotify text-6xl text-green-500' 
  },
    {
    id: 4,
    name: 'Facebook',
    url: 'https://facebook.com/kalalasoul',
    iconUrl: 'bi bi-facebook text-6xl text-blue-600' 
  }

]