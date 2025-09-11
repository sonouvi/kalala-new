export interface teamMember {
  id?: number;
  name?: string;
  role?: string;
  photoUrl?: string;
  socialNetwork?: string;
}

export const LISTE_MEMBRES: teamMember[] = [
  {
    id: 1,
    name: 'Kalala',
    role: 'Chanteuse',
    photoUrl: 'assets/images/kalala.jpg',
    socialNetwork: 'https://instagram.com/alice'
  },
    {
    id: 2,
    name: 'Koffi',
    role: 'Guitariste',
    photoUrl: 'assets/images/koffi.jpg',
    socialNetwork: 'https://instagram.com/alice'
  },
    {
    id: 3,
    name: 'Romu',
    role: 'Bassiste',
    photoUrl:'assets/images/romu.jpg',
    socialNetwork: 'https://instagram.com/alice'
  },
    {
    id: 4,
    name: 'Ophélie',
    role: 'Manager',
    photoUrl: 'https://images.pexels.com/photos/3184418/pexels-photo-3184418.jpeg?auto=compress&cs=tinysrgb&w=600',
    socialNetwork: 'https://instagram.com/alice'
  }
];
