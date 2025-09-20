// 顶部导入区（Home）
import Hero from "./components/Hero"
import FeatureCarousel from "./components/FeatureCarousel"
import NewsletterSubscribe from "./components/NewsletterSubscribe"
import Services from "./components/Services"
import PortfolioGrid from "./components/PortfolioGrid"

export default function Home() {
  return (
    <>
      <Hero />
      <FeatureCarousel />
      {/* Services 区块（与设计稿服务卡片栅格对齐） */}
      <section id="services" className="py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <Services />
        </div>
      </section>
      {/* Portfolio/Works 区块（与设计稿案例展示对齐） */}
      <section id="works" className="py-20 bg-secondary/20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <PortfolioGrid />
        </div>
      </section>
      <NewsletterSubscribe />
    </>
  )
}
