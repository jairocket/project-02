import tradicional from '../assets/coffee/expresso-tradicional.svg'
import americano from '../assets/coffee/expresso-americano.svg'
import cremoso from '../assets/coffee/expresso-cremoso.svg'
import leite from '../assets/coffee/cafe-com-leite.svg'
import latte from '../assets/coffee/latte.svg'
import capuccino from '../assets/coffee/capuccino.svg'
import macchiato from '../assets/coffee/macchiato.svg'
import mocachino from '../assets/coffee/mocaccino.svg'
import chocolate from '../assets/coffee/chocolate-quente.svg'
import cubano from '../assets/coffee/cubano.svg'
import havaiano from '../assets/coffee/havaiano.svg'
import arabe from '../assets/coffee/arabe.svg'
import irlandes from '../assets/coffee/irlandes.svg'

export const menu = [
  {
    id: 1,
    name: 'Expresso Tradicional',
    description: 'O tradicional café feito com água quente e grãos moídos',
    tags: ['TRADICIONAL'],
    image: tradicional,
    price: '9,90',
  },
  {
    id: 2,
    name: 'Expresso Americano',
    description: 'Expresso diluído, menos intenso que o tradicional',
    tags: ['TRADICIONAL'],
    image: americano,
    price: '9,90',
  },
  {
    id: 3,
    name: 'Expresso Cremoso',
    description: 'Café expresso tradicional com espuma cremosa',
    tags: ['TRADICIONAL', 'GELADO'],
    image: cremoso,
    price: '9,90',
  },
  {
    id: 4,
    name: 'Expresso Gelado',
    description: 'Bebida preparada com café expresso e cubos de gelo',
    tags: ['TRADICIONAL'],
    image: cremoso,
    price: '9,90',
  },
  {
    id: 5,
    name: 'Café com Leite',
    description: 'Meio a meio de expresso tradicional e leite vaporizado',
    tags: ['TRADICIONAL', 'COM LEITE'],
    image: leite,
    price: '9,90',
  },
  {
    id: 6,
    name: 'Latte',
    description:
      'Uma dose de café expresso com o dobro de leite e espuma cremosa',
    tags: ['TRADICIONAL', 'COM LEITE'],
    image: latte,
    price: '9,90',
  },
  {
    id: 7,
    name: 'Capuccino',
    description:
      'Bebida com canela feita de doses iguais de café, leite e espuma',
    tags: ['TRADICIONAL', 'COM LEITE'],
    image: capuccino,
    price: '9,90',
  },
  {
    id: 8,
    name: 'Macchiato',
    description:
      'Café expresso misturado com um pouco de leite quente e espuma',
    tags: ['TRADICIONAL', 'COM LEITE'],
    image: macchiato,
    price: '9,90',
  },
  {
    id: 9,
    name: 'Mocaccino',
    description: 'Café expresso com calda de chocolate, pouco leite e espuma',
    tags: ['TRADICIONAL', 'COM LEITE'],
    image: mocachino,
    price: '9,90',
  },
  {
    id: 10,
    name: 'Chocolate Quente',
    description: 'Bebida feita com chocolate dissolvido no leite quente e café',
    tags: ['ESPECIAL', 'COM LEITE'],
    image: chocolate,
    price: '9,90',
  },
  {
    id: 11,
    name: 'Cubano',
    description:
      'Drink gelado de café expresso com rum, creme de leite e hortelã',
    tags: ['ESPECIAL', 'ALCOÓLICO', 'GELADO'],
    image: cubano,
    price: '9,90',
  },
  {
    id: 12,
    name: 'Havaiano',
    description: 'Bebida adocicada preparada com café e leite de coco',
    tags: ['ESPECIAL'],
    image: havaiano,
    price: '9,90',
  },
  {
    id: 13,
    name: 'Árabe',
    description: 'Bebida preparada com grãos de café árabe e especiarias',
    tags: ['ESPECIAL'],
    image: arabe,
    price: '9,90',
  },
  {
    id: 14,
    name: 'Irlandês',
    description: 'Bebida a base de café, uísque irlandês, açúcar e chantilly',
    tags: ['ESPECIAL', 'ALCOÓLICO'],
    image: irlandes,
    price: '9,90',
  },
]
