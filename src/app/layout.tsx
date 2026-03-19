import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'VapeInspire | 电子烟设计师灵感平台',
  description: '电子烟设计师每日资讯获取平台 - 新品上市、社媒动态、CMF设计赏析',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="zh-CN">
      <body className="antialiased">{children}</body>
    </html>
  )
}
