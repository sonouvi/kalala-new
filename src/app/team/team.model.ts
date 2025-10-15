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
    name: 'Elise',
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
    photoUrl: 'assets/images/ophelie.jpg',
    socialNetwork: 'https://instagram.com/alice'
  }
];
