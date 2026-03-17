export type MenuItem = {
  id: string;
  name: string;
  price: number;
  description: string;
  category: 'ramen' | 'tsukemen' | 'topping' | 'drink';
  isRecommended: boolean;
  imageUrl?: string;
  sortOrder: number;
};

export const menuData: MenuItem[] = [
  {
    id: 'ramen-01',
    name: '清正ラーメン',
    price: 1100,
    description: '豚骨・鶏ガラ・魚介を合わせたトリプルスープに、特注の太麺を合わせた看板メニュー。店主の魂が込められた一杯。',
    category: 'ramen',
    isRecommended: true,
    sortOrder: 1,
  },
  {
    id: 'ramen-02',
    name: '濃厚豚骨ラーメン',
    price: 1050,
    description: '長時間炊き出した豚骨スープを贅沢に使用。まろやかでコクのある味わい。',
    category: 'ramen',
    isRecommended: false,
    sortOrder: 2,
  },
  {
    id: 'ramen-03',
    name: '辛味噌ラーメン',
    price: 1150,
    description: '自家製辛味噌とトリプルスープの絶妙な融合。辛さの中に深い旨みが広がります。',
    category: 'ramen',
    isRecommended: false,
    sortOrder: 3,
  },
  {
    id: 'tsukemen-01',
    name: '清正つけ麺',
    price: 1200,
    description: '濃厚な魚介豚骨つけ汁に、太くもちもちの麺をつけてお召し上がりください。',
    category: 'tsukemen',
    isRecommended: true,
    sortOrder: 1,
  },
  {
    id: 'tsukemen-02',
    name: '辛つけ麺',
    price: 1250,
    description: '特製の辛みをつけ汁に加えた大人のつけ麺。旨みと辛みが絶妙なバランス。',
    category: 'tsukemen',
    isRecommended: false,
    sortOrder: 2,
  },
  {
    id: 'topping-01',
    name: '極上焼豚',
    price: 350,
    description: '秘伝のタレでじっくり煮込んだ自家製チャーシュー（2枚）',
    category: 'topping',
    isRecommended: true,
    sortOrder: 1,
  },
  {
    id: 'topping-02',
    name: '味玉',
    price: 150,
    description: '特製タレに漬け込んだ半熟煮玉子',
    category: 'topping',
    isRecommended: false,
    sortOrder: 2,
  },
  {
    id: 'topping-03',
    name: 'メンマ',
    price: 100,
    description: '自家製のシャキシャキとしたメンマ',
    category: 'topping',
    isRecommended: false,
    sortOrder: 3,
  },
  {
    id: 'topping-04',
    name: '追い飯',
    price: 200,
    description: 'つけ麺のあとのスープ割りに。ご飯でスープを最後まで堪能ください。',
    category: 'topping',
    isRecommended: false,
    sortOrder: 4,
  },
  {
    id: 'drink-01',
    name: '瓶ビール',
    price: 600,
    description: 'キリン一番搾り（大瓶）',
    category: 'drink',
    isRecommended: false,
    sortOrder: 1,
  },
  {
    id: 'drink-02',
    name: 'ソフトドリンク',
    price: 250,
    description: 'コーラ・オレンジ・烏龍茶',
    category: 'drink',
    isRecommended: false,
    sortOrder: 2,
  },
];
