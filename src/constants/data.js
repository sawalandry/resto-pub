import images from './images';

const wines = [
  {
    title: 'Chapel Hill Shiraz',
    price: '$56',
    tags: 'AU | Bottle',
  },
  {
    title: 'Halloween',
    price: '$59',
    tags: 'AU | Bottle',
  },
  {
    title: 'Potenti',
    price: '$44',
    tags: 'IT | 750 ml',
  },
  {
    title: 'Amstel Royal',
    price: '$31',
    tags: 'BDI | 750 ml',
  },
  {
    title: 'Primus',
    price: '$26',
    tags: 'BDI | 750 ml',
  },
  {
    title: 'Skol',
    price: '$26',
    tags: 'RW | 750 ml',
  },
];

const cocktails = [
  {
    title: 'Aperol Sprtiz',
    price: '$20',
    tags: 'Aperol | Banana Juice | soda | 30 ml',
  },
  {
    title: "Dark Sawa",
    price: '$16',
    tags: 'Dark rum | Ginger beer | Vodka',
  },
  {
    title: 'Daiquiri',
    price: '$10',
    tags: 'Skol | Citrus juice | Ginger juice',
  },
  {
    title: 'Old Fashioned',
    price: '$31',
    tags: 'Bourbon | Brown sugar | Angostura Bitters',
  },
  {
    title: 'Negroni',
    price: '$26',
    tags: 'Gin | Sweet Vermouth | Campari | Orange garnish',
  },
];

const awards = [
  {
    imgUrl: images.award02,
    title: 'Meat',
    subtitle: 'We have Goat, Beef meats 🍗.',
  },
  {
    imgUrl: images.award01,
    title: 'Vegetable',
    subtitle: 'One of the top green and herbs farmer 🥇.',
  },
  {
    imgUrl: images.award05,
    title: 'AA Hospitality',
    subtitle: 'Some special and class on the corner just be aware 😉.',
  },
  {
    imgUrl: images.award03,
    title: 'Outstanding Chef',
    subtitle: 'They are Good ones and humble pipo, and we hope your\'ll enjoy oour Menu 👨‍🍳.',
  },
];

export default { wines, cocktails, awards };
