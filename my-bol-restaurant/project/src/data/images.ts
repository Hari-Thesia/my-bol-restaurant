import entry from '@/assets/entry copy.png';
import int1 from '@/assets/int1 copy.png';
import int2 from '@/assets/int2 copy.png';
import main from '@/assets/main copy.png';

export const RESTAURANT = {
  phone: '+91 90990 31031',
  phoneRaw: '919099031031',
  whatsapp: 'https://wa.me/919099031031?text=I%27d%20like%20to%20make%20a%20reservation%20at%20CUORE',
  menuUrl: 'https://drive.google.com/file/u/2/d/12RDm1yXoSuwT2SC4AuZv5DloucsoXlq8/view',
  instagram: 'https://www.instagram.com/cuorebymasaladiaries',
  facebook: 'https://www.facebook.com/cuorebymasaladiaries',
  address: 'Beside Coconut County Party Lawns, Near New 150 Ft. Ring Road, Rajkot, Gujarat 360004',
  mapsUrl: 'https://www.google.com/maps/search/?api=1&query=Cuore+by+Masala+Diaries+150+Ft+Ring+Road+Rajkot',
  email: 'cuorebymasaladiaries@gmail.com',
};

export const IMAGES = {
  hero: main,
  entry: entry,
  int1: int1,
  int2: int2,
  main: main,
};

export const GALLERY_IMAGES = [
  { src: main, alt: 'The main dining hall — sculptural, warm, and intimate', span: 'lg' },
  { src: int1, alt: 'Interior detail — curved forms and soft light', span: 'sm' },
  { src: entry, alt: 'The entrance — finding Cuore is part of the experience', span: 'sm' },
  { src: int2, alt: 'Ambience — where conversations flow as smoothly as the evening', span: 'lg' },
  { src: main, alt: 'A space designed with heart', span: 'sm' },
  { src: int1, alt: 'Every corner, composed with intent', span: 'sm' },
  { src: entry, alt: 'Step into Rajkot\'s most refined dining destination', span: 'sm' },
  { src: int2, alt: 'Warm, intimate, effortlessly charming', span: 'sm' },
];

export const FEATURED_IMAGES = [
  { image: main, name: 'The Dining Hall', category: 'Ambience' },
  { image: int1, name: 'Interior Details', category: 'Craft' },
  { image: int2, name: 'The Atmosphere', category: 'Experience' },
  { image: entry, name: 'The Entrance', category: 'Arrival' },
];
