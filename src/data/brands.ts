export interface Brand {
  id: string;
  name: string;
  nameCn: string;
  country: string;
  logo: string;
  website: string;
  category: 'closed' | 'hnb' | 'open' | 'hybrid';
  description: string;
}

export interface NewProduct {
  id: string;
  brandId: string;
  brandName: string;
  name: string;
  image: string;
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

export interface SocialPost {
  id: string;
  brandId: string;
  brandName: string;
  platform: 'instagram' | 'twitter' | 'tiktok' | 'youtube';
  image: string;
  caption: string;
  postDate: string;
  postUrl: string;
}

export interface CmfWork {
  id: string;
  brandId: string;
  brandName: string;
  title: string;
  image: string;
  category: 'color' | 'material' | 'finishing' | 'packaging';
  description: string;
  officialUrl: string;
}

// 30个品牌数据
export const brands: Brand[] = [
  // 封闭式雾化烟
  { id: 'vuse', name: 'Vuse', nameCn: 'Vuse', country: '英国', logo: 'https://www.vuse.com/favicon.ico', website: 'https://www.vuse.com', category: 'closed', description: '英美烟草旗下品牌，美国市场领导者' },
  { id: 'elfbar', name: 'Elf Bar', nameCn: '爱奇迹', country: '中国', logo: 'https://www.elfbar.com/favicon.ico', website: 'https://www.elfbar.com', category: 'closed', description: '一次性电子烟之王，全球销量第一' },
  { id: 'ske', name: 'SKE Vape', nameCn: '斯科尔', country: '中国', logo: 'https://www.skevape.com/favicon.ico', website: 'https://www.skevape.com', category: 'closed', description: '英美烟草授权，主打一次性' },
  { id: 'relx', name: 'RELX', nameCn: '悦刻', country: '中国', logo: 'https://www.relxtech.com/favicon.ico', website: 'https://www.relxtech.com', category: 'closed', description: '中国电子烟龙头企业' },
  { id: 'lostmary', name: 'Lost Mary', nameCn: 'Lost Mary', country: '中国', logo: 'https://www.lostmaryvape.com/favicon.ico', website: 'https://www.lostmaryvape.com', category: 'closed', description: 'Elf Bar旗下品牌，快速崛起' },
  { id: 'juul', name: 'JUUL', nameCn: 'JUUL', country: '美国', logo: 'https://www.juul.com/favicon.ico', website: 'https://www.juul.com', category: 'closed', description: '美国市场先行者' },
  { id: 'njoy', name: 'NJOY', nameCn: 'NJOY', country: '美国', logo: 'https://www.juul.com/favicon.ico', website: 'https://www.njoy.com', category: 'closed', description: '奥驰亚旗下品牌' },
  { id: 'blu', name: 'Blu', nameCn: 'Blu', country: '英国', logo: 'https://www.blu.com/favicon.ico', website: 'https://www.blu.com', category: 'closed', description: '帝国品牌旗下' },
  { id: 'logic', name: 'Logic', nameCn: 'Logic', country: '日本', logo: 'https://www.logicvaping.com/favicon.ico', website: 'https://www.logicvaping.com', category: 'closed', description: '日本烟草JTI旗下' },
  { id: 'elux', name: 'ELUX', nameCn: 'ELUX', country: '英国', logo: 'https://www.eluxvape.com/favicon.ico', website: 'https://www.eluxvape.com', category: 'closed', description: '欧洲新锐品牌' },
  { id: 'geekbar', name: 'Geek Bar', nameCn: 'Geek Bar', country: '中国', logo: 'https://www.geekbar.com/favicon.ico', website: 'https://www.geekbar.com', category: 'closed', description: 'GeekVape旗下一次性' },
  { id: 'voopoo', name: 'VOOPOO', nameCn: 'VOOPOO', country: '中国', logo: 'https://www.voopoo.com/favicon.ico', website: 'https://www.voopoo.com', category: 'closed', description: 'DNA芯片技术' },
  { id: 'vaporesso', name: 'Vaporesso', nameCn: 'Vaporesso', country: '中国', logo: 'https://www.vaporesso.com/favicon.ico', website: 'https://www.vaporesso.com', category: 'closed', description: '技术创新领先' },
  { id: 'aspire', name: 'Aspire', nameCn: '易佳特', country: '中国', logo: 'https://www.aspirecig.com/favicon.ico', website: 'https://www.aspirecig.com', category: 'closed', description: '早期行业玩家' },
  { id: 'moti', name: 'MOTI', nameCn: '魔笛', country: '中国', logo: 'https://www.motitech.com/favicon.ico', website: 'https://www.motitech.com', category: 'closed', description: '国内头部品牌' },
  // 加热不燃烧
  { id: 'iqos', name: 'IQOS', nameCn: 'IQOS', country: '瑞士', logo: 'https://www.iqos.com/favicon.ico', website: 'https://www.iqos.com', category: 'hnb', description: '菲莫国际HNB旗舰' },
  { id: 'glo', name: 'glo', nameCn: 'glo', country: '英国', logo: 'https://www.glo.com/favicon.ico', website: 'https://www.glo.com', category: 'hnb', description: '英美烟草HNB' },
  { id: 'ploom', name: 'Ploom', nameCn: 'Ploom', country: '日本', logo: 'https://www.ploom.com/favicon.ico', website: 'https://www.ploom.com', category: 'hnb', description: '日本烟草JTI' },
  { id: 'lil', name: 'lil', nameCn: 'lil', country: '韩国', logo: 'https://www.lilworld.com/favicon.ico', website: 'https://www.lilworld.com', category: 'hnb', description: 'KT&G旗下' },
  { id: 'ifuse', name: 'iFuse', nameCn: 'iFuse', country: '中国', logo: 'https://www.ifuse.com/favicon.ico', website: 'https://www.ifuse.com', category: 'hnb', description: '中烟系产品' },
  // 开放式
  { id: 'geekvape', name: 'GeekVape', nameCn: '极客 vape', country: '中国', logo: 'https://www.geekvape.com/favicon.ico', website: 'https://www.geekvape.com', category: 'open', description: '专业设备制造商' },
  { id: 'smok', name: 'SMOK', nameCn: 'SMOK', country: '中国', logo: 'https://www.smoktech.com/favicon.ico', website: 'https://www.smoktech.com', category: 'open', description: '产品线最广' },
  { id: 'innokin', name: 'Innokin', nameCn: 'Innokin', country: '中国', logo: 'https://www.innokin.com/favicon.ico', website: 'https://www.innokin.com', category: 'open', description: '入门级优选' },
  { id: 'joyetech', name: 'Joyetech', nameCn: '卓尔悦', country: '中国', logo: 'https://www.joyetech.com/favicon.ico', website: 'https://www.joyetech.com', category: 'open', description: '早期开拓者' },
  { id: 'kanger', name: 'Kangertech', nameCn: '康尔', country: '中国', logo: 'https://www.kangertech.com/favicon.ico', website: 'https://www.kangertech.com', category: 'open', description: '老牌制造商' },
  // 综合品牌
  { id: 'veev', name: 'VEEV', nameCn: 'VEEV', country: '瑞士', logo: 'https://www.veev.com/favicon.ico', website: 'https://www.veev.com', category: 'hybrid', description: '菲莫国际新型烟草' },
  { id: 'heets', name: 'HEETS', nameCn: 'HEETS', country: '瑞士', logo: 'https://www.heets.com/favicon.ico', website: 'https://www.heets.com', category: 'hybrid', description: 'IQOS专用烟弹' },
  { id: 'veiik', name: 'VEIIK', nameCn: 'VEIIK', country: '中国', logo: 'https://www.veiik.com/favicon.ico', website: 'https://www.veiik.com', category: 'hybrid', description: '新兴品牌' },
  { id: 'boulder', name: 'Boulder', nameCn: '铂德', country: '中国', logo: 'https://bouldervape.com/favicon.ico', website: 'https://bouldervape.com', category: 'hybrid', description: '国内品牌' },
  { id: 'uwell', name: 'Uwell', nameCn: 'Uwell', country: '中国', logo: 'https://www.myuwell.com/favicon.ico', website: 'https://www.myuwell.com', category: 'hybrid', description: '品质稳定可靠' },
];

// 模拟新品数据 - 请在 products-config.ts 中配置真实的产品链接和图片
// 占位图格式: https://placehold.co/600x600/1a1a2e/00FF88?text=ProductName
export const newProducts: NewProduct[] = [
  {
    id: '1',
    brandId: 'elfbar',
    brandName: 'Elf Bar',
    name: 'Elf Bar 6000 Pro',
    image: 'https://placehold.co/600x600/1a1a2e/00FF88?text=Elf+Bar+6000+Pro',
    releaseDate: '2026-03-15',
    price: '$14.99',
    region: ['美国', '欧洲', '英国'],
    specs: {
      capacity: '10ml',
      nicotine: '5%',
      battery: '500mAh',
      charging: 'USB-C'
    },
    highlights: ['透明外壳设计', '超大油仓', '防漏技术'],
    officialUrl: 'https://www.elfbar.com' // TODO: 替换为产品详情页链接
  },
  {
    id: '2',
    brandId: 'vuse',
    brandName: 'Vuse',
    name: 'Vuse Go 1500',
    image: 'https://placehold.co/600x600/1a1a2e/00FF88?text=Vuse+Go+1500',
    releaseDate: '2026-03-14',
    price: '$12.99',
    region: ['美国', '加拿大'],
    specs: {
      capacity: '6ml',
      nicotine: '5%',
      battery: '400mAh',
      charging: '不可充电'
    },
    highlights: ['简洁设计', '长续航', '品牌保证'],
    officialUrl: 'https://www.vuse.com'
  },
  {
    id: '3',
    brandId: 'lostmary',
    brandName: 'Lost Mary',
    name: 'Lost Mary BM600',
    image: 'https://placehold.co/600x600/1a1a2e/00FF88?text=Lost+Mary+BM600',
    releaseDate: '2026-03-13',
    price: '$9.99',
    region: ['英国', '欧洲'],
    specs: {
      capacity: '2ml',
      nicotine: '2%',
      battery: '350mAh',
      charging: '不可充电'
    },
    highlights: ['紧凑轻便', '多种口味', '快速上手'],
    officialUrl: 'https://www.lostmaryvape.com'
  },
  {
    id: '4',
    brandId: 'geekvape',
    brandName: 'GeekVape',
    name: 'GeekVape Wenax H1',
    image: 'https://placehold.co/600x600/1a1a2e/00FF88?text=Wenax+H1',
    releaseDate: '2026-03-12',
    price: '$24.99',
    region: ['全球'],
    specs: {
      capacity: '3ml',
      nicotine: '可选',
      battery: '1000mAh',
      charging: 'USB-C'
    },
    highlights: ['大电池', '可调功率', '专业口感'],
    officialUrl: 'https://www.geekvape.com'
  },
  {
    id: '5',
    brandId: 'vaporesso',
    brandName: 'Vaporesso',
    name: 'Vaporesso Xros Pro',
    image: 'https://placehold.co/600x600/1a1a2e/00FF88?text=Xros+Pro',
    releaseDate: '2026-03-11',
    price: '$29.99',
    region: ['全球'],
    specs: {
      capacity: '3ml',
      nicotine: '可选',
      battery: '1200mAh',
      charging: 'USB-C'
    },
    highlights: ['智能功率调节', 'Axon芯片', '精准口感'],
    officialUrl: 'https://www.vaporesso.com'
  },
  {
    id: '6',
    brandId: 'relx',
    brandName: 'RELX',
    name: 'RELX Phantom',
    image: 'https://placehold.co/600x600/1a1a2e/00FF88?text=RELX+Phantom',
    releaseDate: '2026-03-10',
    price: '¥199',
    region: ['中国'],
    specs: {
      capacity: '1.9ml',
      nicotine: '3%',
      battery: '380mAh',
      charging: 'USB-C'
    },
    highlights: ['国潮设计', '超低漏油', '智能感应'],
    officialUrl: 'https://www.relxtech.com'
  },
  {
    id: '7',
    brandId: 'juul',
    brandName: 'JUUL',
    name: 'JUUL2',
    image: 'https://placehold.co/600x600/1a1a2e/00FF88?text=JUUL2',
    releaseDate: '2026-03-09',
    price: '$39.99',
    region: ['美国'],
    specs: {
      capacity: '1.2ml',
      nicotine: '5%',
      battery: '250mAh',
      charging: '磁吸充电'
    },
    highlights: ['智能锁定', '防伪系统', '紧凑设计'],
    officialUrl: 'https://www.juul.com'
  },
  {
    id: '8',
    brandId: 'uwell',
    brandName: 'Uwell',
    name: 'Uwell Caliburn G3',
    image: 'https://placehold.co/600x600/1a1a2e/00FF88?text=Caliburn+G3',
    releaseDate: '2026-03-08',
    price: '$21.99',
    region: ['全球'],
    specs: {
      capacity: '2.5ml',
      nicotine: '可选',
      battery: '900mAh',
      charging: 'USB-C'
    },
    highlights: ['Pro-FOCS技术', '透明视窗', '稳定输出'],
    officialUrl: 'https://www.myuwell.com'
  },
];

// 模拟社媒数据 - 请在 social-config.ts 中配置真实的内容
export const socialPosts: SocialPost[] = [
  {
    id: '1',
    brandId: 'elfbar',
    brandName: 'Elf Bar',
    platform: 'instagram',
    image: 'https://placehold.co/400x400/1a1a2e/00FF88?text=Elf+Bar+Post',
    caption: 'New colors dropping soon! 🌈 #ElfBar #VapeLife',
    postDate: '2026-03-16',
    postUrl: 'https://instagram.com/elfbar'
  },
  {
    id: '2',
    brandId: 'geekvape',
    brandName: 'GeekVape',
    platform: 'instagram',
    image: 'https://placehold.co/400x400/1a1a2e/00FF88?text=GeekVape+Post',
    caption: 'The new Aegis legend 3 is here! 🔥',
    postDate: '2026-03-15',
    postUrl: 'https://instagram.com/geekvape'
  },
  {
    id: '3',
    brandId: 'vaporesso',
    brandName: 'Vaporesso',
    platform: 'instagram',
    image: 'https://placehold.co/400x400/1a1a2e/00FF88?text=Vaporesso+Post',
    caption: 'XROS PRO - Redefine your vaping experience',
    postDate: '2026-03-14',
    postUrl: 'https://instagram.com/vaporesso_official'
  },
  {
    id: '4',
    brandId: 'lostmary',
    brandName: 'Lost Mary',
    platform: 'instagram',
    image: 'https://placehold.co/400x400/1a1a2e/00FF88?text=Lost+Mary+Post',
    caption: 'Summer vibes with our new collection ☀️',
    postDate: '2026-03-13',
    postUrl: 'https://instagram.com/lostmaryvape'
  },
  {
    id: '5',
    brandId: 'relx',
    brandName: 'RELX',
    platform: 'instagram',
    image: 'https://placehold.co/400x400/1a1a2e/00FF88?text=RELX+Post',
    caption: 'Phantom 幻影系列全新上市',
    postDate: '2026-03-12',
    postUrl: 'https://instagram.com/relxofficial'
  },
  {
    id: '6',
    brandId: 'vuse',
    brandName: 'Vuse',
    platform: 'instagram',
    image: 'https://placehold.co/400x400/1a1a2e/00FF88?text=Vuse+Post',
    caption: 'Meet Vuse Go - Simple. Satisfying. Sustainable.',
    postDate: '2026-03-11',
    postUrl: 'https://instagram.com/vuse'
  },
  {
    id: '7',
    brandId: 'juul',
    brandName: 'JUUL',
    platform: 'instagram',
    image: 'https://placehold.co/400x400/1a1a2e/00FF88?text=JUUL+Post',
    caption: 'JUUL2 - The next generation is here',
    postDate: '2026-03-10',
    postUrl: 'https://instagram.com/juulofficial'
  },
  {
    id: '8',
    brandId: 'uwell',
    brandName: 'Uwell',
    platform: 'instagram',
    image: 'https://placehold.co/400x400/1a1a2e/00FF88?text=Uwell+Post',
    caption: 'Caliburn G3 - Experience the evolution',
    postDate: '2026-03-09',
    postUrl: 'https://instagram.com/uwell_official'
  },
];

// CMF 设计作品 - 使用placeholder图片
function getCmfPlaceholder(title: string): string {
  return `https://placehold.co/800x600/1a1a2e/00FF88?text=${encodeURIComponent(title)}`;
}

export const cmfWorks: CmfWork[] = [
  {
    id: '1', brandId: 'elfbar', brandName: 'Elf Bar', title: '透明外壳CMF设计',
    image: getCmfPlaceholder('Elf+Bar+透明外壳'), category: 'color',
    description: '透明外壳设计展示内部结构和烟油量，渐变色彩运用', officialUrl: 'https://www.elfbar.com'
  },
  {
    id: '2', brandId: 'geekvape', brandName: 'GeekVape', title: 'Aegis系列皮革纹理',
    image: '/images/products/geekvape-wenax-q2.webp', category: 'material',
    description: '真皮皮革包裹，IP68防水防尘等级', officialUrl: 'https://www.geekvape.com'
  },
  {
    id: '3', brandId: 'vaporesso', brandName: 'Vaporesso', title: 'Xros Pro金属喷砂',
    image: getCmfPlaceholder('Vaporesso+金属喷砂'), category: 'finishing',
    description: '金属喷砂工艺，细腻手感，指纹不留痕', officialUrl: 'https://www.vaporesso.com'
  },
  {
    id: '4', brandId: 'lostmary', brandName: 'Lost Mary', title: '渐变糖果色系',
    image: getCmfPlaceholder('Lost+Mary+糖果色'), category: 'color',
    description: '糖果渐变配色，年轻时尚定位', officialUrl: 'https://www.lostmaryvape.com'
  },
  {
    id: '5', brandId: 'relx', brandName: 'RELX', title: '国潮包装设计',
    image: getCmfPlaceholder('RELX+国潮包装'), category: 'packaging',
    description: '中国传统纹样与现代设计的结合', officialUrl: 'https://www.relxtech.com'
  },
  {
    id: '6', brandId: 'juul', brandName: 'JUUL', title: '极简工业设计',
    image: getCmfPlaceholder('JUUL+极简设计'), category: 'finishing',
    description: '一体成型，极简线条，商务风格', officialUrl: 'https://www.juul.com'
  },
  {
    id: '7', brandId: 'uwell', brandName: 'Uwell', title: '透明可视窗设计',
    image: getCmfPlaceholder('Uwell+透明视窗'), category: 'material',
    description: 'PCTG材质透明视窗，实时查看油量', officialUrl: 'https://www.myuwell.com'
  },
  {
    id: '8', brandId: 'vuse', brandName: 'Vuse', title: '可持续包装',
    image: getCmfPlaceholder('Vuse+环保包装'), category: 'packaging',
    description: '环保可回收材料，减少塑料使用', officialUrl: 'https://www.vuse.com'
  },
  // 包装设计
  {
    id: '9', brandId: 'elfbar', brandName: 'Elf Bar', title: '一次性环保包装',
    image: getCmfPlaceholder('Elf+Bar+环保包装'), category: 'packaging',
    description: '纸浆环保包装，可完全降解', officialUrl: 'https://www.elfbar.com'
  },
  {
    id: '10', brandId: 'lostmary', brandName: 'Lost Mary', title: '抽屉式包装设计',
    image: getCmfPlaceholder('Lost+Mary+抽屉盒'), category: 'packaging',
    description: '创新抽屉式开盒体验，时尚便捷', officialUrl: 'https://www.lostmaryvape.com'
  },
  {
    id: '11', brandId: 'geekvape', brandName: 'GeekVape', title: '高端礼盒包装',
    image: getCmfPlaceholder('GeekVape+礼盒'), category: 'packaging',
    description: '奢华礼盒设计，适合送礼场景', officialUrl: 'https://www.geekvape.com'
  },
  {
    id: '12', brandId: 'vaporesso', brandName: 'Vaporesso', title: '简约挂卡包装',
    image: getCmfPlaceholder('Vaporesso+挂卡'), category: 'packaging',
    description: '透明挂卡设计，产品一目了然', officialUrl: 'https://www.vaporesso.com'
  },
];
