export interface MovieReview {
  id: string;
  author: string;
  avatar: string;
  rating: number;
  content: string;
}

export interface CastMember {
  id: string;
  name: string;
  character: string;
  image: string;
}

export interface Movie {
  id: string;
  title: string;
  poster: string;
  backdrop: string;
  rating: number;
  year: number;
  duration: string;
  genre: string;
  description: string;
  reviews: MovieReview[];
  cast: CastMember[];
}

export const MOCK_MOVIES: Movie[] = [
  {
    id: '1',
    title: 'Spiderman No Way Home',
    poster: 'https://www.themoviedb.org/t/p/w600_and_h900_face/blWCPEqDGLBuLB9u89CxP9ORQP4.jpg',
    backdrop: 'https://www.themoviedb.org/t/p/w600_and_h900_face/zvkcHCJUPqv7R9ukaiDNkm75jy.jpg',
    rating: 9.5,
    year: 2021,
    duration: '148 Minutes',
    genre: 'Action',
    description: "With Spider-Man's identity now revealed, Peter asks Doctor Strange for help. When a spell goes wrong, dangerous foes from other worlds start to appear.",
    reviews: [
      {
        id: 'r1',
        author: 'Iqbal Shafiq Rozaan',
        avatar: 'https://api.dicebear.com/9.x/adventurer/svg?seed=Kimberly',
        rating: 6.3,
        content: 'A spectacular conclusion to the trilogy.'
      }
    ],
    cast: [
      { id: 'c1', name: 'Tom Holland', character: 'Peter Parker', image: 'https://api.dicebear.com/9.x/adventurer/svg?seed=Sawyer' },
      { id: 'c2', name: 'Zendaya', character: 'MJ', image: 'https://api.dicebear.com/9.x/adventurer/svg?seed=Brian' }
    ]
  },
  {
    id: '2',
    title: 'Jurassic World Dominion',
    poster: 'https://www.themoviedb.org/t/p/w600_and_h900_face/rFhKkXhk7ClU03jQ5rHIApJDwev.jpg',
    backdrop: 'https://www.themoviedb.org/t/p/w600_and_h900_face/zvkcHCJUPqv7R9ukaiDNkm75jy.jpg',
    rating: 8.0,
    year: 2022,
    duration: '147 Minutes',
    genre: 'Sci-Fi',
    description: 'Dinosaurs now live—and hunt—alongside humans all over the world.',
    reviews: [
      {
        id: 'r1',
        author: 'Iqbal Shafiq Rozaan',
        avatar: 'https://api.dicebear.com/9.x/adventurer/svg?seed=Kimberly',
        rating: 6.3,
        content: 'A spectacular conclusion to the trilogy.'
      }
    ],
    cast: [
      { id: 'c1', name: 'Tom Holland', character: 'Peter Parker', image: 'https://api.dicebear.com/9.x/adventurer/svg?seed=Sawyer' },
      { id: 'c2', name: 'Zendaya', character: 'MJ', image: 'https://api.dicebear.com/9.x/adventurer/svg?seed=Brian' }
    ]
  },
  {
    id: '3',
    title: 'The Batman',
    poster: 'https://www.themoviedb.org/t/p/w600_and_h900_face/blWCPEqDGLBuLB9u89CxP9ORQP4.jpg',
    backdrop: 'https://www.themoviedb.org/t/p/w600_and_h900_face/zvkcHCJUPqv7R9ukaiDNkm75jy.jpg',
    rating: 8.5,
    year: 2022,
    duration: '176 Minutes',
    genre: 'Action',
    description: 'Batman uncovers corruption in Gotham City while facing the Riddler.',
    reviews: [
      {
        id: 'r1',
        author: 'Iqbal Shafiq Rozaan',
        avatar: 'https://api.dicebear.com/9.x/adventurer/svg?seed=Kimberly',
        rating: 6.3,
        content: 'A spectacular conclusion to the trilogy.'
      }
    ],
    cast: [
      { id: 'c1', name: 'Tom Holland', character: 'Peter Parker', image: 'https://api.dicebear.com/9.x/adventurer/svg?seed=Sawyer' },
      { id: 'c2', name: 'Zendaya', character: 'MJ', image: 'https://api.dicebear.com/9.x/adventurer/svg?seed=Brian' }
    ]
  },
  {
    id: '4',
    title: 'Uncharted',
    poster: 'https://www.themoviedb.org/t/p/w600_and_h900_face/blWCPEqDGLBuLB9u89CxP9ORQP4.jpg',
    backdrop: 'https://www.themoviedb.org/t/p/w600_and_h900_face/zvkcHCJUPqv7R9ukaiDNkm75jy.jpg',
    rating: 7.0,
    year: 2022,
    duration: '116 Minutes',
    genre: 'Action',
    description: 'Nathan Drake is recruited by seasoned treasure hunter Victor "Sully" Sullivan.',
    reviews: [
      {
        id: 'r1',
        author: 'Iqbal Shafiq Rozaan',
        avatar: 'https://api.dicebear.com/9.x/adventurer/svg?seed=Kimberly',
        rating: 6.3,
        content: 'A spectacular conclusion to the trilogy.'
      }
    ],
    cast: [
      { id: 'c1', name: 'Tom Holland', character: 'Peter Parker', image: 'https://api.dicebear.com/9.x/adventurer/svg?seed=Sawyer' },
      { id: 'c2', name: 'Zendaya', character: 'MJ', image: 'https://api.dicebear.com/9.x/adventurer/svg?seed=Brian' }
    ]
  },
  {
    id: '5',
    title: 'Fantastic Beasts 3',
    poster: 'https://www.themoviedb.org/t/p/w600_and_h900_face/blWCPEqDGLBuLB9u89CxP9ORQP4.jpg',
    backdrop: 'https://www.themoviedb.org/t/p/w600_and_h900_face/zvkcHCJUPqv7R9ukaiDNkm75jy.jpg',
    rating: 6.8,
    year: 2022,
    duration: '142 Minutes',
    genre: 'Fantasy',
    description: 'Professor Albus Dumbledore knows the powerful Dark wizard Gellert Grindelwald is moving.',
    reviews: [
      {
        id: 'r1',
        author: 'Iqbal Shafiq Rozaan',
        avatar: 'https://api.dicebear.com/9.x/adventurer/svg?seed=Kimberly',
        rating: 6.3,
        content: 'A spectacular conclusion to the trilogy.'
      }
    ],
    cast: [
      { id: 'c1', name: 'Tom Holland', character: 'Peter Parker', image: 'https://api.dicebear.com/9.x/adventurer/svg?seed=Sawyer' },
      { id: 'c2', name: 'Zendaya', character: 'MJ', image: 'https://api.dicebear.com/9.x/adventurer/svg?seed=Brian' }
    ]
  },
  {
    id: '6',
    title: 'Sonic the Hedgehog 2',
    poster: 'https://www.themoviedb.org/t/p/w600_and_h900_face/blWCPEqDGLBuLB9u89CxP9ORQP4.jpg',
    backdrop: 'https://www.themoviedb.org/t/p/w600_and_h900_face/zvkcHCJUPqv7R9ukaiDNkm75jy.jpg',
    rating: 7.7,
    year: 2022,
    duration: '122 Minutes',
    genre: 'Adventure',
    description: 'Sonic is eager to prove he has what it takes to be a true hero.',
    reviews: [
      {
        id: 'r1',
        author: 'Iqbal Shafiq Rozaan',
        avatar: 'https://api.dicebear.com/9.x/adventurer/svg?seed=Kimberly',
        rating: 6.3,
        content: 'A spectacular conclusion to the trilogy.'
      }
    ],
    cast: [
      { id: 'c1', name: 'Tom Holland', character: 'Peter Parker', image: 'https://api.dicebear.com/9.x/adventurer/svg?seed=Sawyer' },
      { id: 'c2', name: 'Zendaya', character: 'MJ', image: 'https://api.dicebear.com/9.x/adventurer/svg?seed=Brian' }
    ]
  }
];
export const CATEGORIES = ['Now playing', 'Upcoming', 'Top rated', 'Popular'];
