// 产品配置 - 在这里更新真实的产品链接和图片
// 请访问各品牌官网找到产品详情页，填入以下信息

export interface ProductConfig {
  // 品牌ID
  brandId: string;
  // 产品名称
  productName: string;
  // 官网产品详情页链接 (必填)
  productUrl: string;
  // 产品主图链接 (必填) - 从官网详情页获取
  productImage: string;
  // 售价
  price: string;
  // 发售日期
  releaseDate: string;
  // 销售区域
  regions: string[];
  // 规格
  specs: {
    capacity: string;
    nicotine: string;
    battery: string;
    charging: string;
  };
  // 卖点
  highlights: string[];
}

// 请在这里填写真实的产品数据
// 访问品牌官网 -> 找到产品 -> 复制详情页URL和图片URL

export const productConfigs: ProductConfig[] = [
  {
    brandId: 'elfbar',
    productName: 'Elf Bar 6000 Pro',
    productUrl: 'https://www.elfbar.com/products/elf-bar-6000', // 需修正为真实链接
    productImage: '', // 从官网获取主图URL
    price: '$14.99',
    releaseDate: '2026-03-15',
    regions: ['美国', '欧洲', '英国'],
    specs: { capacity: '10ml', nicotine: '5%', battery: '500mAh', charging: 'USB-C' },
    highlights: ['透明外壳设计', '超大油仓', '防漏技术']
  },
  {
    brandId: 'vuse',
    productName: 'Vuse Go 1500',
    productUrl: 'https://www.vuse.com/products/vuse-go', // 需修正
    productImage: '',
    price: '$12.99',
    releaseDate: '2026-03-14',
    regions: ['美国', '加拿大'],
    specs: { capacity: '6ml', nicotine: '5%', battery: '400mAh', charging: '不可充电' },
    highlights: ['简洁设计', '长续航', '品牌保证']
  },
  {
    brandId: 'lostmary',
    productName: 'Lost Mary BM600',
    productUrl: 'https://www.lostmaryvape.com/products/bm600', // 需修正
    productImage: '',
    price: '$9.99',
    releaseDate: '2026-03-13',
    regions: ['英国', '欧洲'],
    specs: { capacity: '2ml', nicotine: '2%', battery: '350mAh', charging: '不可充电' },
    highlights: ['紧凑轻便', '多种口味', '快速上手']
  },
  {
    brandId: 'geekvape',
    productName: 'GeekVape Wenax H1',
    productUrl: 'https://www.geekvape.com/products/wenax-h1', // 需修正
    productImage: '',
    price: '$24.99',
    releaseDate: '2026-03-12',
    regions: ['全球'],
    specs: { capacity: '3ml', nicotine: '可选', battery: '1000mAh', charging: 'USB-C' },
    highlights: ['大电池', '可调功率', '专业口感']
  },
  {
    brandId: 'vaporesso',
    productName: 'Vaporesso Xros Pro',
    productUrl: 'https://www.vaporesso.com/products/xros-pro', // 需修正
    productImage: '',
    price: '$29.99',
    releaseDate: '2026-03-11',
    regions: ['全球'],
    specs: { capacity: '3ml', nicotine: '可选', battery: '1200mAh', charging: 'USB-C' },
    highlights: ['智能功率调节', 'Axon芯片', '精准口感']
  },
  {
    brandId: 'relx',
    productName: 'RELX Phantom',
    productUrl: 'https://www.relxtech.com/products/phantom', // 需修正
    productImage: '',
    price: '¥199',
    releaseDate: '2026-03-10',
    regions: ['中国'],
    specs: { capacity: '1.9ml', nicotine: '3%', battery: '380mAh', charging: 'USB-C' },
    highlights: ['国潮设计', '超低漏油', '智能感应']
  },
  {
    brandId: 'juul',
    productName: 'JUUL2',
    productUrl: 'https://www.juul.com/products/juul2', // 需修正
    productImage: '',
    price: '$39.99',
    releaseDate: '2026-03-09',
    regions: ['美国'],
    specs: { capacity: '1.2ml', nicotine: '5%', battery: '250mAh', charging: '磁吸充电' },
    highlights: ['智能锁定', '防伪系统', '紧凑设计']
  },
  {
    brandId: 'uwell',
    productName: 'Uwell Caliburn G3',
    productUrl: 'https://www.myuwell.com/products/caliburn-g3', // 需修正
    productImage: '',
    price: '$21.99',
    releaseDate: '2026-03-08',
    regions: ['全球'],
    specs: { capacity: '2.5ml', nicotine: '可选', battery: '900mAh', charging: 'USB-C' },
    highlights: ['Pro-FOCS技术', '透明视窗', '稳定输出']
  }
];

// 使用说明:
// 1. 访问品牌官网找到产品详情页
// 2. 复制浏览器地址栏的产品URL
// 3. 右键产品图片 -> 复制图片链接
// 4. 填入上面的 productUrl 和 productImage
// 5. 如果没有产品图片，可以使用占位图: https://placehold.co/600x600/1a1a2e/00FF88?text=ProductName
