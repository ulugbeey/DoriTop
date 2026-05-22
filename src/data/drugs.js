export const drugs = [
  {
    id: 1,
    name: 'Paracetamol',
    category: 'Shamollash',
    description: 'Isitma va og\'riqni kamaytiradi',
    image: '💊',
    pharmacies: [
      { id: 1, name: 'Dori-Darmon 1', price: 3500, address: 'Chilonzor 1', inStock: true },
      { id: 2, name: 'Al-Farabi', price: 4200, address: 'Yunusobod 5', inStock: true },
      { id: 3, name: 'Shifo Plus', price: 3800, address: 'Mirzo Ulug\'bek 12', inStock: false },
    ]
  },
  {
    id: 2,
    name: 'Ibuprofen',
    category: 'Shamollash',
    description: 'Yallig\'lanish va og\'riqqa qarshi',
    image: '💊',
    pharmacies: [
      { id: 1, name: 'Dori-Darmon 1', price: 8000, address: 'Chilonzor 1', inStock: true },
      { id: 2, name: 'Al-Farabi', price: 7500, address: 'Yunusobod 5', inStock: true },
    ]
  },
  {
    id: 3,
    name: 'Vitamin C',
    category: 'Vitaminlar',
    description: 'Immunitetni mustahkamlaydi',
    image: '🍊',
    pharmacies: [
      { id: 2, name: 'Al-Farabi', price: 12000, address: 'Yunusobod 5', inStock: true },
      { id: 3, name: 'Shifo Plus', price: 11500, address: 'Mirzo Ulug\'bek 12', inStock: true },
    ]
  },
  {
    id: 4,
    name: 'Amoxicillin',
    category: 'Antibiotik',
    description: 'Bakterial infeksiyalarga qarshi',
    image: '💉',
    pharmacies: [
      { id: 1, name: 'Dori-Darmon 1', price: 25000, address: 'Chilonzor 1', inStock: true },
      { id: 3, name: 'Shifo Plus', price: 23000, address: 'Mirzo Ulug\'bek 12', inStock: true },
    ]
  },
  {
    id: 5,
    name: 'Validol',
    category: 'Yurak',
    description: 'Yurak og\'rig\'ini tinchlantiradi',
    image: '❤️',
    pharmacies: [
      { id: 1, name: 'Dori-Darmon 1', price: 5000, address: 'Chilonzor 1', inStock: true },
      { id: 2, name: 'Al-Farabi', price: 4800, address: 'Yunusobod 5', inStock: false },
    ]
  },
]