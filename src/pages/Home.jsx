import { CategoryJumpNav } from '../components/CategoryJumpNav';
import { Hero } from '../components/Hero';
import { ChapterIntro } from '../components/ChapterIntro';
import { ProductScrollSection } from '../components/ProductScrollSection';
import { ClosingSection } from '../components/ClosingSection';

/**
 * Home Page Component
 * Main product showcase page
 */
export function Home() {
  return (
    <>
      {/* Category Jump Navigation */}
      <CategoryJumpNav />

      {/* Hero Section */}
      <Hero />

      {/* AI & AUDIO Chapter */}
      <ChapterIntro
        id="ai-audio"
        title="AI & AUDIO"
        subtitle="Intelligent sound systems and audio innovation"
      />

      <ProductScrollSection
        productName="Galaxy Buds3 Pro"
        companyName="Samsung"
        categoryTag="Audio / AI Earbuds"
        shortDescription="Next-generation wireless earbuds with AI-powered sound enhancement and adaptive noise cancellation for immersive audio experiences."
        productImage="/products/galaxy-buds/hero.png"
        youtubeUrl="https://www.youtube.com/@Samsung"
        websiteUrl="https://www.samsung.com/global/galaxy/galaxy-buds3-pro/"
        reverseLayout={false}
      />

      <ProductScrollSection
        productName="BRAVIA Theater Quad"
        companyName="Sony"
        categoryTag="Home Audio / TV"
        shortDescription="Revolutionary home theater system delivering immersive quad-channel audio that transforms your living space into a cinematic experience."
        productImage="/products/bravia-theater-quad/hero.png"
        youtubeUrl="https://www.youtube.com/@SonyElectronics"
        websiteUrl="https://electronics.sony.com/"
        reverseLayout={true}
      />

      <ProductScrollSection
        productName="Maono AI Gaming Microphone"
        companyName="Maono"
        categoryTag="Gaming Audio / Creator Gear"
        shortDescription="Advanced AI-powered microphone with real-time voice modulation for content creators and gamers seeking professional-quality audio."
        productImage="/products/maono-ai-mic/hero.png"
        youtubeUrl="https://www.youtube.com/@MAONOGlobal"
        websiteUrl="https://www.maono.com/"
        reverseLayout={false}
      />

      {/* WEARABLES & HUMAN TECH Chapter */}
      <ChapterIntro
        id="wearables"
        title="WEARABLES & HUMAN TECH"
        subtitle="Technology that enhances human capabilities"
      />

      <ProductScrollSection
        productName="VIV Ring"
        companyName="VIV Health"
        categoryTag="Health Wearable / Smart Ring"
        shortDescription="Comprehensive health monitoring smart ring that tracks vital signs, sleep patterns, and activity metrics in an elegant, unobtrusive design."
        productImage="/products/viv-ring/hero.png"
        youtubeUrl="https://www.youtube.com/results?search_query=VIV+Ring+CES+2025"
        websiteUrl="https://www.vivring.ai"
        reverseLayout={false}
      />

      <ProductScrollSection
        productName="Frenz Brainband"
        companyName="Earable"
        categoryTag="Sleep / Focus Wearable"
        shortDescription="Wearable headband that uses advanced neurotechnology to enhance sleep quality and improve focus through personalized brain stimulation."
        productImage="/products/frenz-brainband/hero.png"
        youtubeUrl="https://www.youtube.com/@Earable"
        websiteUrl="https://www.frenzband.com/"
        reverseLayout={true}
      />

      <ProductScrollSection
        productName="H-Flex Wearable Robot"
        companyName="H-Flex"
        categoryTag="Wearable Robotics / Rehabilitation"
        shortDescription="Advanced wearable robotic system designed for rehabilitation and mobility assistance, combining cutting-edge robotics with human-centered design."
        productImage="/products/h-flex/hero.png"
        youtubeUrl="https://www.youtube.com/results?search_query=H-Flex+Wearable+Robot"
        reverseLayout={false}
      />

      {/* XR, GAMING & FUTURE INTERACTION Chapter */}
      <ChapterIntro
        id="xr"
        title="XR, GAMING & FUTURE INTERACTION"
        subtitle="Immersive experiences and next-generation interfaces"
      />

      <ProductScrollSection
        productName="Sony XR Head-Mounted Display"
        companyName="Sony"
        categoryTag="XR / Creator Gear"
        shortDescription="Professional-grade XR headset designed for creators, delivering stunning visual fidelity and seamless mixed reality experiences."
        productImage="/products/sony-xr-display/hero.png"
        youtubeUrl="https://www.youtube.com/@SonyGroupOfficial"
        reverseLayout={false}
      />

      <ProductScrollSection
        productName="Segway GoKart Pro2"
        companyName="Segway"
        categoryTag="Gaming / Mobility"
        shortDescription="High-performance electric go-kart that blends gaming culture with real-world mobility, delivering thrilling racing experiences."
        productImage="/products/segway-gokart/hero.png"
        youtubeUrl="https://www.youtube.com/@Segway"
        websiteUrl="https://www.segway.com/"
        reverseLayout={true}
      />

      {/* FUTURE LIVING & MOBILITY Chapter */}
      <ChapterIntro
        id="living"
        title="FUTURE LIVING & MOBILITY"
        subtitle="Smart homes and autonomous systems reshaping daily life"
      />

      <ProductScrollSection
        productName="AC Future AI Transformer Home"
        companyName="AC Future"
        categoryTag="Smart Home / Mobility"
        shortDescription="Intelligent modular living space that transforms between home and vehicle, featuring AI-powered automation and sustainable design."
        productImage="/products/ac-future-home/hero.png"
        youtubeUrl="https://www.youtube.com/@ACFutureOfficial"
        websiteUrl="https://www.acfuture.com/"
        reverseLayout={false}
      />

      <ProductScrollSection
        productName="Nearthlab Drone First Responder Station"
        companyName="Nearthlab"
        categoryTag="Drones / Public Safety"
        shortDescription="Autonomous drone deployment system for emergency response, providing rapid aerial support for public safety and rescue operations."
        productImage="/products/nearthlab-dfr/hero.png"
        youtubeUrl="https://www.youtube.com/results?search_query=Nearthlab+Drone+Station"
        websiteUrl="https://nearthlab.com/"
        reverseLayout={true}
      />

      {/* Closing Section */}
      <ClosingSection />
    </>
  );
}

