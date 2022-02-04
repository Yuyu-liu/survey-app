import {Card} from '../app/models/card';

const CardsData: Card[] = [
  {
    type: 'Lifestyle',
    title: 'Morning routine',
    description: 'What is your daily morning routine like ? What do you like to do in the mornings ?',
    prizes: ['Fitness gift card of your choice']
  },
  {
    type: 'Lifestyle',
    title: 'Daily activities',
    description: 'How much time do you spend daily on working out ?',
    prizes: ['Fitness gift card of your choice']
  },
  {
    type: 'Lifestyle',
    title: 'Night routine',
    description: 'What is your daily night routine like ? What do you like to do before going to sleep ?',
    prizes: ['Fitness gift card of your choice']
  },
  {
    type: 'Lifestyle',
    title: 'Groceries',
    description: 'What do you buy on a daily basis for groceries ?',
    prizes: ['Supermarket gift card of your choice']
  },
  {
    type: 'Occupation',
    title: 'Current career',
    description: 'Your current career and your appreciation of it',
    prizes: ['Tim Hortons gift card', 'McDonald\'s gift card']
  }
];

export { CardsData };
