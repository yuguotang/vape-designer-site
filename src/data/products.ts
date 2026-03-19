// 电子烟新品数据 - 按品类分类（简化版）
// 图片使用placeholder（可替换为真实图片）

export type ProductCategory = 'disposable' | 'pod' | 'mod' | 'tank';

export interface NewProduct {
  id: string;
  brandId: string;
  brandName: string;
  name: string;
  image: string;
  category: ProductCategory;
  categoryName: string;
  releaseDate: string;
  price: string;
  region: string[];
  specs: {
    capacity: string;
    nicotine: string;
    battery: string;
    charging: string;
  };
  highlights: string[];
  officialUrl: string;
}

function getPlaceholderImage(productName: string): string {
  return `https://placehold.co/600x600/1a1a2e/00FF88?text=${encodeURIComponent(productName)}`;
}

// 8个品牌每个2款产品，共16款
export const newProducts: NewProduct[] = [
  // Elf Bar - 3款
  {
    id: 'elfbar-1', brandId: 'elfbar', brandName: 'Elf Bar', name: 'Elf Bar 6000 Pro',
    image: getPlaceholderImage('Elf+Bar+6000+Pro'), category: 'disposable', categoryName: '一次性电子烟',
    releaseDate: '2026-03-15', price: '$14.99', region: ['美国', '欧洲'],
    specs: { capacity: '10ml', nicotine: '5%', battery: '500mAh', charging: 'USB-C' },
    highlights: ['透明外壳', '超大油仓', '防漏技术'], officialUrl: 'https://www.elfbar.com'
  },
  {
    id: 'elfbar-2', brandId: 'elfbar', brandName: 'Elf Bar', name: 'Elf Bar Crystal Plus',
    image: getPlaceholderImage('Elf+Bar+Crystal+Plus'), category: 'disposable', categoryName: '一次性电子烟',
    releaseDate: '2026-03-10', price: '$12.99', region: ['美国', '欧洲'],
    specs: { capacity: '12ml', nicotine: '5%', battery: '650mAh', charging: 'USB-C' },
    highlights: ['透明水晶外壳', '超长续航', '多口味'], officialUrl: 'https://www.elfbar.com'
  },

  // Vuse - 2款
  {
    id: 'vuse-1', brandId: 'vuse', brandName: 'Vuse', name: 'Vuse Go 1500',
    image: getPlaceholderImage('Vuse+Go+1500'), category: 'disposable', categoryName: '一次性电子烟',
    releaseDate: '2026-03-14', price: '$12.99', region: ['美国', '加拿大'],
    specs: { capacity: '6ml', nicotine: '5%', battery: '400mAh', charging: '不可充电' },
    highlights: ['简洁设计', '长续航', '品牌保证'], officialUrl: 'https://www.vuse.com'
  },
  {
    id: 'vuse-2', brandId: 'vuse', brandName: 'Vuse', name: 'Vuse Go Max',
    image: getPlaceholderImage('Vuse+Go+Max'), category: 'disposable', categoryName: '一次性电子烟',
    releaseDate: '2026-03-08', price: '$15.99', region: ['美国'],
    specs: { capacity: '10ml', nicotine: '5%', battery: '500mAh', charging: 'USB-C' },
    highlights: ['超大油仓', '持久续航', '纯净口感'], officialUrl: 'https://www.vuse.com'
  },

  // Lost Mary - 2款
  {
    id: 'lostmary-1', brandId: 'lostmary', brandName: 'Lost Mary', name: 'Lost Mary BM600',
    image: getPlaceholderImage('Lost+Mary+BM600'), category: 'disposable', categoryName: '一次性电子烟',
    releaseDate: '2026-03-13', price: '$9.99', region: ['英国', '欧洲'],
    specs: { capacity: '2ml', nicotine: '2%', battery: '350mAh', charging: '不可充电' },
    highlights: ['紧凑轻便', '多种口味', '快速上手'], officialUrl: 'https://www.lostmaryvape.com'
  },
  {
    id: 'lostmary-2', brandId: 'lostmary', brandName: 'Lost Mary', name: 'Lost Mary QM5000',
    image: getPlaceholderImage('Lost+Mary+QM5000'), category: 'disposable', categoryName: '一次性电子烟',
    releaseDate: '2026-03-11', price: '$14.99', region: ['英国', '欧洲'],
    specs: { capacity: '10ml', nicotine: '5%', battery: '500mAh', charging: 'USB-C' },
    highlights: ['超大容量', '恒压输出', '纯正口味'], officialUrl: 'https://www.lostmaryvape.com'
  },

  // GeekVape - 2款
  {
    id: 'geekvape-1', brandId: 'geekvape', brandName: 'GeekVape', name: 'GeekVape Wenax Q2',
    image: '/images/products/geekvape-wenax-q2.webp', category: 'pod', categoryName: '换弹式',
    releaseDate: '2026-03-12', price: '$24.99', region: ['全球'],
    specs: { capacity: '3ml', nicotine: '可选', battery: '1250mAh', charging: 'USB-C' },
    highlights: ['大电池', '可调功率', '专业口感'], officialUrl: 'https://www.geekvape.com/product/wenax-q2/'
  },
  {
    id: 'geekvape-2', brandId: 'geekvape', brandName: 'GeekVape', name: 'GeekVape Aegis Legend 5',
    image: getPlaceholderImage('Aegis+Legend+5'), category: 'mod', categoryName: '盒子MOD',
    releaseDate: '2026-03-09', price: '$59.99', region: ['全球'],
    specs: { capacity: '需配', nicotine: '可选', battery: '双18650', charging: 'USB-C' },
    highlights: ['200W大功率', '三防设计', '赛车风格'], officialUrl: 'https://www.geekvape.com/product/legend-5/'
  },

  // Vaporesso - 2款
  {
    id: 'vaporesso-1', brandId: 'vaporesso', brandName: 'Vaporesso', name: 'Vaporesso Xros Pro',
    image: getPlaceholderImage('Xros+Pro'), category: 'pod', categoryName: '换弹式',
    releaseDate: '2026-03-11', price: '$29.99', region: ['全球'],
    specs: { capacity: '3ml', nicotine: '可选', battery: '1200mAh', charging: 'USB-C' },
    highlights: ['智能功率调节', 'Axon芯片', '精准口感'], officialUrl: 'https://www.vaporesso.com'
  },
  {
    id: 'vaporesso-2', brandId: 'vaporesso', brandName: 'Vaporesso', name: 'Vaporesso Target 100',
    image: getPlaceholderImage('Target+100'), category: 'mod', categoryName: '盒子MOD',
    releaseDate: '2026-03-07', price: '$49.99', region: ['全球'],
    specs: { capacity: '5.5ml', nicotine: '可选', battery: '单18650', charging: 'USB-C' },
    highlights: ['100W输出', '防水防尘', '紧凑设计'], officialUrl: 'https://www.vaporesso.com'
  },

  // RELX - 2款
  {
    id: 'relx-1', brandId: 'relx', brandName: 'RELX', name: 'RELX Phantom 幻影',
    image: getPlaceholderImage('RELX+Phantom'), category: 'pod', categoryName: '换弹式',
    releaseDate: '2026-03-10', price: '¥199', region: ['中国'],
    specs: { capacity: '1.9ml', nicotine: '3%', battery: '380mAh', charging: 'USB-C' },
    highlights: ['国潮设计', '超低漏油', '智能感应'], officialUrl: 'https://www.relxtech.com'
  },
  {
    id: 'relx-2', brandId: 'relx', brandName: 'RELX', name: 'RELX Artisan',
    image: getPlaceholderImage('RELX+Artisan'), category: 'pod', categoryName: '换弹式',
    releaseDate: '2026-03-05', price: '¥299', region: ['中国'],
    specs: { capacity: '2ml', nicotine: '3%/5%', battery: '400mAh', charging: 'USB-C' },
    highlights: ['高端材质', '震动提醒', '恒压输出'], officialUrl: 'https://www.relxtech.com'
  },

  // JUUL - 2款
  {
    id: 'juul-1', brandId: 'juul', brandName: 'JUUL', name: 'JUUL2',
    image: getPlaceholderImage('JUUL2'), category: 'pod', categoryName: '换弹式',
    releaseDate: '2026-03-09', price: '$39.99', region: ['美国'],
    specs: { capacity: '1.2ml', nicotine: '5%', battery: '250mAh', charging: '磁吸充电' },
    highlights: ['智能锁定', '防伪系统', '紧凑设计'], officialUrl: 'https://www.juul.com'
  },
  {
    id: 'juul-2', brandId: 'juul', brandName: 'JUUL', name: 'JUUL C1',
    image: getPlaceholderImage('JUUL+C1'), category: 'pod', categoryName: '换弹式',
    releaseDate: '2026-03-03', price: '$49.99', region: ['美国'],
    specs: { capacity: '1.5ml', nicotine: '5%', battery: '300mAh', charging: 'USB-C' },
    highlights: ['可重复充电', '连接手机', '使用追踪'], officialUrl: 'https://www.juul.com'
  },

  // Uwell - 2款
  {
    id: 'uwell-1', brandId: 'uwell', brandName: 'Uwell', name: 'Uwell Caliburn G3',
    image: getPlaceholderImage('Caliburn+G3'), category: 'pod', categoryName: '换弹式',
    releaseDate: '2026-03-08', price: '$21.99', region: ['全球'],
    specs: { capacity: '2.5ml', nicotine: '可选', battery: '900mAh', charging: 'USB-C' },
    highlights: ['Pro-FOCS技术', '透明视窗', '稳定输出'], officialUrl: 'https://www.myuwell.com'
  },
  {
    id: 'uwell-2', brandId: 'uwell', brandName: 'Uwell', name: 'Uwell Caliburn G5',
    image: getPlaceholderImage('Caliburn+G5'), category: 'pod', categoryName: '换弹式',
    releaseDate: '2026-03-04', price: '$24.99', region: ['全球'],
    specs: { capacity: '3ml', nicotine: '可选', battery: '1000mAh', charging: 'USB-C' },
    highlights: ['最新一代', '更大电池', '可调airflow'], officialUrl: 'https://www.myuwell.com'
  },
];

// 品类列表
export const categories = [
  { id: 'disposable', name: '一次性电子烟', icon: '⚡' },
  { id: 'pod', name: '换弹式', icon: '🎯' },
  { id: 'mod', name: '盒子MOD', icon: '📦' },
  { id: 'tank', name: '储油雾化器', icon: '💨' },
];
