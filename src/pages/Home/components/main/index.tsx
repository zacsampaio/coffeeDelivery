import { CardCatalag } from "./components/cardCatalog";
import { HeaderMainCatalog, HeaderMainContainer } from "./styles";

const itemsCatalog = [
  {
    id: 1,
    tags: ['tradicional'],
    name: 'Expresso Tradicional',
    description: 'O tradicional café feito com água quente e grãos moídos',
    price: 9.90,
    quantity: 0,
  },
  {
    id: 2,
    tags: ['tradicional'],
    name: 'Expresso Americano',
    description: 'Expresso diluído, menos intenso que o tradicional',
    price: 9.90,
    quantity: 0,
  },
  {
    id: 3,
    tags: ['tradicional'],
    name: 'Expresso Cremoso',
    description: 'Café expresso tradicional com espuma cremosa',
    price: 9.90,
    quantity: 0,
  },
  {
    id: 4,
    tags: ['tradicional', 'gelado'],
    name: 'Expresso Gelado',
    description: 'Bebida preparada com café expresso e cubos de gelo',
    price: 9.90,
    quantity: 0,
  },
  {
    id: 5,
    tags: ['tradicional', 'com leite'],
    name: 'Café com Leite',
    description: 'Meio a meio de expresso tradicional com leite vaporizado',
    price: 9.90,
    quantity: 0,
  },
  {
    id: 6,
    tags: ['tradicional', 'com leite'],
    name: 'Latte',
    description: 'Uma dose de café expresso com o dobro de leite e espuma cremosa',
    price: 9.90,
    quantity: 0,
  },
  {
    id: 7,
    tags: ['tradicional', 'com leite'],
    name: 'Capuccino',
    description: 'Bebida com canela feita de doses iguais de café, leite e espuma',
    price: 9.90,
    quantity: 0,
  },
  {
    id: 8,
    tags: ['tradicional', 'com leite'],
    name: 'Macchiato',
    description: 'Café expresso misturado com um pouco de leite quente e espuma',
    price: 9.90,
    quantity: 0,
  },
  {
    id: 9,
    tags: ['tradicional', 'com leite'],
    name: 'Mocaccino',
    description: 'Café expresso com calda de chocolate, pouco leite e espuma',
    price: 9.90,
    quantity: 0,
  },
  {
    id: 10,
    tags: ['especial', 'com leite'],
    name: 'Chocolate Quente',
    description: 'Bebida feita com chocolate dissolvido no leite quente e café',
    price: 9.90,
    quantity: 0,
  },
  {
    id: 11,
    tags: ['especial', 'alcoólico', 'gelado'],
    name: 'Cubano',
    description: 'Drink gelado de café expresso com rum, creme de leite e hortelã',
    price: 9.90,
    quantity: 0,
  },
  {
    id: 12,
    tags: ['especial'],
    name: 'Havaiano',
    description: 'Bebida adocicada preparada com café e leite de coco',
    price: 9.90,
    quantity: 0,
  },
  {
    id: 13,
    tags: ['especial'],
    name: 'Árabe',
    description: 'Bebida preparada com grãos de café árabe e especiarias',
    price: 9.90,
    quantity: 0,
  },
  {
    id: 14,
    tags: ['especial', 'alcoólico'],
    name: 'Irlandês',
    description: 'Bebida a base de café, uísque irlandês, açúcar e chantilly',
    price: 9.90,
    quantity: 0,
  },
];

export function HeaderMain(){

  return (
    <HeaderMainContainer>
      <h1>Nossos cafés</h1>
      <HeaderMainCatalog>
        {itemsCatalog.map(item => <CardCatalag key={item.id} tags={item.tags} name={item.name} description={item.description} price={item.price}/>)}
      </HeaderMainCatalog>
    </HeaderMainContainer>
  )
}

