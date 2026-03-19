'use client';

import { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { brands, socialPosts, cmfWorks } from '@/data/brands';
import { newProducts, categories, ProductCategory } from '@/data/products';
import { Instagram, Twitter, Youtube, ArrowRight, Sparkles, Palette, Share2, Search, Menu, X, Filter } from 'lucide-react';

// 平台图标映射
const platformIcons: Record<string, React.ReactNode> = {
  instagram: <Instagram className="w-4 h-4" />,
  twitter: <Twitter className="w-4 h-4" />,
  youtube: <Youtube className="w-4 h-4" />,
};

// CMF分类中文映射
const cmfCategoryLabels: Record<string, string> = {
  color: '色彩设计',
  material: '材质工艺',
  finishing: '表面处理',
  packaging: '包装设计',
};

// CMF分类列表
const cmfCategories = [
  { id: 'all', name: '全部', icon: '🎨' },
  { id: 'color', name: '色彩设计', icon: '🌈' },
  { id: 'material', name: '材质工艺', icon: '🔬' },
  { id: 'finishing', name: '表面处理', icon: '✨' },
  { id: 'packaging', name: '包装设计', icon: '📦' },
];

// 品类图标
const categoryIcons: Record<string, string> = {
  disposable: '⚡',
  pod: '🎯',
  mod: '📦',
  tank: '💨',
};

export default function Home() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [selectedBrand, setSelectedBrand] = useState<string>('all');
  const [selectedCategory, setSelectedCategory] = useState<string>('all');
  const [selectedCmfCategory, setSelectedCmfCategory] = useState<string>('all');

  // 过滤产品
  const filteredProducts = newProducts.filter(p => {
    if (selectedBrand !== 'all' && p.brandId !== selectedBrand) return false;
    if (selectedCategory !== 'all' && p.category !== selectedCategory) return false;
    return true;
  });

  // 过滤CMF
  const filteredCmf = cmfWorks.filter(work => {
    if (selectedCmfCategory !== 'all' && work.category !== selectedCmfCategory) return false;
    return true;
  });

  return (
    <div className="min-h-screen bg-[#0D0D0D] text-white">
      {/* Header */}
      <header className="fixed top-0 left-0 right-0 z-50 bg-[#0D0D0D]/90 backdrop-blur-md border-b border-white/5">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            <Link href="/" className="flex items-center gap-2">
              <div className="w-8 h-8 bg-gradient-to-br from-[#00FF88] to-[#00CC6A] rounded-lg flex items-center justify-center">
                <Sparkles className="w-5 h-5 text-black" />
              </div>
              <span className="text-xl font-bold gradient-text">VapeInspire</span>
            </Link>

            <nav className="hidden md:flex items-center gap-8">
              <a href="#new" className="text-sm text-gray-400 hover:text-[#00FF88] transition-colors">新品上市</a>
              <a href="#social" className="text-sm text-gray-400 hover:text-[#00FF88] transition-colors">社媒动态</a>
              <a href="#cmf" className="text-sm text-gray-400 hover:text-[#00FF88] transition-colors">CMF赏析</a>
              <a href="#brands" className="text-sm text-gray-400 hover:text-[#00FF88] transition-colors">品牌库</a>
            </nav>

            <div className="flex items-center gap-4">
              <button className="p-2 text-gray-400 hover:text-[#00FF88] transition-colors">
                <Search className="w-5 h-5" />
              </button>
              <button 
                className="md:hidden p-2 text-gray-400"
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              >
                {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
              </button>
            </div>
          </div>
        </div>

        {mobileMenuOpen && (
          <div className="md:hidden bg-[#1A1A2E] border-t border-white/5">
            <nav className="flex flex-col p-4 gap-4">
              <a href="#new" className="text-gray-400 hover:text-[#00FF88]" onClick={() => setMobileMenuOpen(false)}>新品上市</a>
              <a href="#social" className="text-gray-400 hover:text-[#00FF88]" onClick={() => setMobileMenuOpen(false)}>社媒动态</a>
              <a href="#cmf" className="text-gray-400 hover:text-[#00FF88]" onClick={() => setMobileMenuOpen(false)}>CMF赏析</a>
              <a href="#brands" className="text-gray-400 hover:text-[#00FF88]" onClick={() => setMobileMenuOpen(false)}>品牌库</a>
            </nav>
          </div>
        )}
      </header>

      {/* Hero Section */}
      <section className="pt-24 pb-16 px-4 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-[#00FF88]/5 via-transparent to-[#1A1A2E]/50" />
        <div className="absolute inset-0 noise-bg" />
        
        <div className="max-w-7xl mx-auto relative z-10">
          <div className="text-center max-w-3xl mx-auto">
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              电子烟设计师
              <span className="block gradient-text">灵感聚集地</span>
            </h1>
            <p className="text-gray-400 text-lg mb-8">
              每日更新全球新品 · 追踪品牌社媒 · 汲取CMF设计灵感
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <a href="#new" className="px-6 py-3 bg-[#00FF88] text-black font-semibold rounded-lg hover:bg-[#00CC6A] transition-colors">
                浏览新品
              </a>
              <a href="#brands" className="px-6 py-3 border border-white/20 text-white font-semibold rounded-lg hover:border-[#00FF88] hover:text-[#00FF88] transition-colors">
                探索品牌
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Brand & Category Filter */}
      <section className="px-4 pb-8">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col lg:flex-row gap-6">
            {/* Brand Filter */}
            <div className="flex-1">
              <div className="flex items-center gap-2 mb-3">
                <Filter className="w-4 h-4 text-[#00FF88]" />
                <span className="text-sm text-gray-400">品牌筛选</span>
              </div>
              <div className="flex flex-wrap gap-2">
                <button
                  onClick={() => setSelectedBrand('all')}
                  className={`px-4 py-2 rounded-full text-sm transition-colors ${
                    selectedBrand === 'all'
                      ? 'bg-[#00FF88] text-black'
                      : 'bg-[#1A1A2E] text-gray-400 hover:text-white'
                  }`}
                >
                  全部
                </button>
                {brands.slice(0, 12).map(brand => (
                  <button
                    key={brand.id}
                    onClick={() => setSelectedBrand(brand.id)}
                    className={`px-4 py-2 rounded-full text-sm transition-colors ${
                      selectedBrand === brand.id
                        ? 'bg-[#00FF88] text-black'
                        : 'bg-[#1A1A2E] text-gray-400 hover:text-white'
                    }`}
                  >
                    {brand.nameCn}
                  </button>
                ))}
              </div>
            </div>

            {/* Category Filter */}
            <div className="lg:w-64">
              <div className="flex items-center gap-2 mb-3">
                <span className="text-sm text-gray-400">品类筛选</span>
              </div>
              <div className="flex flex-wrap gap-2 lg:flex-col">
                <button
                  onClick={() => setSelectedCategory('all')}
                  className={`px-4 py-2 rounded-full text-sm transition-colors text-left ${
                    selectedCategory === 'all'
                      ? 'bg-[#00FF88] text-black'
                      : 'bg-[#1A1A2E] text-gray-400 hover:text-white'
                  }`}
                >
                  全部品类
                </button>
                {categories.map(cat => (
                  <button
                    key={cat.id}
                    onClick={() => setSelectedCategory(cat.id)}
                    className={`px-4 py-2 rounded-full text-sm transition-colors text-left ${
                      selectedCategory === cat.id
                        ? 'bg-[#00FF88] text-black'
                        : 'bg-[#1A1A2E] text-gray-400 hover:text-white'
                    }`}
                  >
                    {cat.icon} {cat.name}
                  </button>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* New Products Section */}
      <section id="new" className="px-4 py-16">
        <div className="max-w-7xl mx-auto">
          <div className="flex items-center justify-between mb-8">
            <div>
              <h2 className="text-2xl md:text-3xl font-bold flex items-center gap-3">
                <Sparkles className="w-6 h-6 text-[#00FF88]" />
                新品上市
                <span className="text-sm text-gray-500 font-normal">
                  ({filteredProducts.length}款)
                </span>
              </h2>
              <p className="text-gray-400 mt-1">全球电子烟最新产品发布</p>
            </div>
          </div>

          {/* 品类标签 */}
          <div className="flex gap-2 mb-6 overflow-x-auto pb-2">
            {categories.map(cat => {
              const count = newProducts.filter(p => p.category === cat.id).length;
              return (
                <span 
                  key={cat.id}
                  className="px-3 py-1 bg-[#1A1A2E] rounded-full text-xs text-gray-400 whitespace-nowrap"
                >
                  {cat.icon} {cat.name} ({count})
                </span>
              );
            })}
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {filteredProducts.map(product => (
              <a
                key={product.id}
                href={product.officialUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="group bg-[#1A1A2E] rounded-2xl overflow-hidden border border-white/5 card-hover"
              >
                <div className="relative aspect-square bg-gradient-to-br from-[#2a2a3e] to-[#1a1a2e]">
                  <Image
                    src={product.image}
                    alt={product.name}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute top-3 left-3 px-2 py-1 bg-black/60 backdrop-blur rounded-full text-xs flex items-center gap-1">
                    <span>{categoryIcons[product.category]}</span>
                    <span>{product.categoryName}</span>
                  </div>
                </div>
                <div className="p-4">
                  <div className="text-xs text-[#00FF88] mb-1">{product.brandName}</div>
                  <h3 className="font-semibold mb-2 group-hover:text-[#00FF88] transition-colors">
                    {product.name}
                  </h3>
                  <div className="flex flex-wrap gap-1 mb-3">
                    {product.highlights.slice(0, 2).map((h, i) => (
                      <span key={i} className="text-xs px-2 py-0.5 bg-white/5 rounded-full text-gray-400">
                        {h}
                      </span>
                    ))}
                  </div>
                  <div className="flex items-center justify-between text-sm">
                    <span className="text-[#00FF88] font-semibold">{product.price}</span>
                    <span className="text-gray-500 text-xs">{product.releaseDate}</span>
                  </div>
                </div>
              </a>
            ))}
          </div>

          {filteredProducts.length === 0 && (
            <div className="text-center py-12 text-gray-500">
              暂无该筛选条件下的产品
            </div>
          )}
        </div>
      </section>

      {/* Social Feed Section */}
      <section id="social" className="px-4 py-16 bg-[#1A1A2E]/30">
        <div className="max-w-7xl mx-auto">
          <div className="flex items-center justify-between mb-8">
            <div>
              <h2 className="text-2xl md:text-3xl font-bold flex items-center gap-3">
                <Share2 className="w-6 h-6 text-[#00FF88]" />
                社媒动态
              </h2>
              <p className="text-gray-400 mt-1">全球品牌官方社交媒体内容</p>
            </div>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {socialPosts.slice(0, 8).map(post => (
              <a
                key={post.id}
                href={post.postUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="group relative aspect-square bg-[#1A1A2E] rounded-2xl overflow-hidden border border-white/5 card-hover"
              >
                <Image
                  src={post.image}
                  alt={post.caption}
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent" />
                <div className="absolute bottom-0 left-0 right-0 p-4">
                  <div className="flex items-center gap-2 mb-2">
                    <span className="flex items-center gap-1 text-xs text-[#00FF88]">
                      {platformIcons[post.platform]}
                      {post.platform}
                    </span>
                    <span className="text-xs text-gray-500">{post.postDate}</span>
                  </div>
                  <p className="text-sm text-gray-300 line-clamp-2">{post.caption}</p>
                </div>
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* CMF Section */}
      <section id="cmf" className="px-4 py-16">
        <div className="max-w-7xl mx-auto">
          <div className="flex items-center justify-between mb-8">
            <div>
              <h2 className="text-2xl md:text-3xl font-bold flex items-center gap-3">
                <Palette className="w-6 h-6 text-[#00FF88]" />
                CMF 设计赏析
                <span className="text-sm text-gray-500 font-normal">
                  ({filteredCmf.length}个)
                </span>
              </h2>
              <p className="text-gray-400 mt-1">色彩 · 材质 · 工艺 · 包装</p>
            </div>
          </div>

          {/* CMF分类筛选 */}
          <div className="flex gap-2 mb-6 flex-wrap">
            {cmfCategories.map(cat => (
              <button
                key={cat.id}
                onClick={() => setSelectedCmfCategory(cat.id)}
                className={`px-4 py-2 rounded-full text-sm transition-colors ${
                  selectedCmfCategory === cat.id
                    ? 'bg-[#00FF88] text-black'
                    : 'bg-[#1A1A2E] text-gray-400 hover:text-white'
                }`}
              >
                {cat.icon} {cat.name}
              </button>
            ))}
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {filteredCmf.map(work => (
              <a
                key={work.id}
                href={work.officialUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="group bg-[#1A1A2E] rounded-2xl overflow-hidden border border-white/5 card-hover"
              >
                <div className="relative aspect-[4/3] bg-gradient-to-br from-[#2a2a3e] to-[#1a1a2e]">
                  <Image
                    src={work.image}
                    alt={work.title}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute top-3 right-3 px-2 py-1 bg-[#00FF88]/20 backdrop-blur rounded-full text-xs text-[#00FF88]">
                    {cmfCategoryLabels[work.category]}
                  </div>
                </div>
                <div className="p-4">
                  <h3 className="font-semibold mb-1 group-hover:text-[#00FF88] transition-colors">
                    {work.title}
                  </h3>
                  <p className="text-xs text-gray-500">{work.brandName}</p>
                  <p className="text-sm text-gray-400 mt-2 line-clamp-2">{work.description}</p>
                </div>
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* Brand Library */}
      <section id="brands" className="px-4 py-16 bg-[#1A1A2E]/30">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-2xl md:text-3xl font-bold">品牌库</h2>
            <p className="text-gray-400 mt-1">全球 TOP 30 电子烟品牌</p>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-4">
            {brands.map(brand => (
              <a
                key={brand.id}
                href={brand.website}
                target="_blank"
                rel="noopener noreferrer"
                className="group bg-[#1A1A2E] rounded-xl p-4 border border-white/5 hover:border-[#00FF88]/50 transition-colors flex flex-col items-center text-center"
              >
                <div className="w-10 h-10 rounded-lg bg-white/5 flex items-center justify-center mb-3 group-hover:bg-[#00FF88]/10 transition-colors">
                  <span className="text-lg font-bold text-[#00FF88]">{brand.name[0]}</span>
                </div>
                <h3 className="font-medium text-sm mb-1 group-hover:text-[#00FF88] transition-colors">
                  {brand.nameCn}
                </h3>
                <p className="text-xs text-gray-500">{brand.country}</p>
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="px-4 py-12 border-t border-white/5">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col md:flex-row items-center justify-between gap-6">
            <div className="flex items-center gap-2">
              <div className="w-8 h-8 bg-gradient-to-br from-[#00FF88] to-[#00CC6A] rounded-lg flex items-center justify-center">
                <Sparkles className="w-5 h-5 text-black" />
              </div>
              <span className="text-xl font-bold">VapeInspire</span>
            </div>
            <div className="text-gray-500 text-sm">
              © 2026 VapeInspire. 为电子烟设计师打造
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
