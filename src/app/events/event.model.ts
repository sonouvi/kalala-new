export interface event {
  id?: number;
  title?: string;
  date?: string;
  location?: string;
  description?: string;
  imageUrl?: string;
  hour?: string;
  status?: string;
}

export const LISTE_EVENTS: event[] = [
  {
    id: 1,
    title: 'Concert de Printemps',
    date: '2024-05-15',
    hour: '20:00',
    location: 'Théâtre de la Ville, Paris',
    description: 'Rejoignez-nous pour une soirée inoubliable avec des performances live et des invités spéciaux.',
    imageUrl: 'https://images.pexels.com/photos/167491/pexels-photo-167491.jpeg?auto=compress&cs=tinysrgb&w=600',
    status: 'Complet'
  },
  {
    id: 1,
    title: 'Concert de Printemps',
    date: '2024-06-15',
    hour: '20:00',
    location: 'Théâtre de la Ville, Paris',
    description: 'Rejoignez-nous pour une soirée inoubliable avec des performances live et des invités spéciaux.',
    imageUrl: 'https://images.pexels.com/photos/2263436/pexels-photo-2263436.jpeg?auto=compress&cs=tinysrgb&w=600',
    status: 'Billets'
  },
    {
    id: 1,
    title: 'Concert de Printemps',
    date: '2024-07-15',
    hour: '20:00',
    location: 'Théâtre de la Ville, Paris',
    description: 'Rejoignez-nous pour une soirée inoubliable avec des performances live et des invités spéciaux.',
    imageUrl: 'https://images.pexels.com/photos/1105666/pexels-photo-1105666.jpeg?auto=compress&cs=tinysrgb&w=600',
    status: 'Billets'
  }
]
