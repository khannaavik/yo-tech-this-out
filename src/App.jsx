import { ThemeProvider } from './components/ThemeProvider';
import { ErrorBoundary } from './components/ErrorBoundary';
import { Navigation } from './components/Navigation';
import { CategoryJumpNav } from './components/CategoryJumpNav';
import { Hero } from './components/Hero';
import { ChapterIntro } from './components/ChapterIntro';
import { ProductScrollSection } from './components/ProductScrollSection';
import { ClosingSection } from './components/ClosingSection';
import './styles/globals.css';

/**
 * Debug Banner Component
 * Always visible banner to verify rendering
 */
function DebugBanner() {
  return (
    <div style={{
      position: 'fixed',
      top: 0,
      left: 0,
      right: 0,
      zIndex: 99999,
      backgroundColor: '#00ff00',
      color: '#000000',
      padding: '8px',
      textAlign: 'center',
      fontSize: '14px',
      fontWeight: 'bold',
      fontFamily: 'monospace',
      borderBottom: '2px solid #000',
    }}>
      🟢 APP RENDERING - If you see this, React is working
    </div>
  );
}

/**
 * App Component
 * Main application shell with theme provider and layout structure
 */
function App() {
  // Force render check
  console.log('App component rendering...');
  
  try {
    return (
      <ErrorBoundary>
        <ThemeProvider>
          <div className="app" style={{ minHeight: '100vh', position: 'relative' }}>
            {/* Debug Banner - Always visible */}
            <DebugBanner />
            
            {/* Sticky Navigation */}
            <ErrorBoundary>
              <Navigation />
            </ErrorBoundary>

            {/* Category Jump Navigation */}
            <ErrorBoundary>
              <CategoryJumpNav />
            </ErrorBoundary>

            {/* Hero Section */}
            <ErrorBoundary>
              <Hero />
            </ErrorBoundary>

            {/* AI & AUDIO Chapter */}
            <ErrorBoundary>
              <ChapterIntro
                id="ai-audio"
                title="AI & AUDIO"
                subtitle="Intelligent sound systems and audio innovation"
              />
            </ErrorBoundary>

            <ErrorBoundary>
              <ProductScrollSection
          productName="Galaxy Buds3 Pro"
          companyName="Samsung"
          categoryTag="Audio / AI Earbuds"
          shortDescription="Next-generation wireless earbuds with AI-powered sound enhancement and adaptive noise cancellation for immersive audio experiences."
          productSlug="galaxy-buds3-pro"
          productImage="https://images.unsplash.com/photo-1606220945770-b5b6c2c55bf1?w=1200&h=800&fit=crop"
          youtubeUrl="https://www.youtube.com/@Samsung"
                websiteUrl="https://www.samsung.com/global/galaxy/galaxy-buds3-pro/"
                reverseLayout={false}
              />
            </ErrorBoundary>

            <ErrorBoundary>
              <ProductScrollSection
          productName="BRAVIA Theater Quad"
          companyName="Sony"
          categoryTag="Home Audio / TV"
          shortDescription="Revolutionary home theater system delivering immersive quad-channel audio that transforms your living space into a cinematic experience."
          productSlug="bravia-theater-quad"
          productImage="https://images.unsplash.com/photo-1593359677879-a4bb92f829d1?w=1200&h=800&fit=crop"
          youtubeUrl="https://www.youtube.com/@SonyElectronics"
                websiteUrl="https://electronics.sony.com/"
                reverseLayout={true}
              />
            </ErrorBoundary>

            <ErrorBoundary>
              <ProductScrollSection
          productName="AI Voice Changer Gaming Microphone"
          companyName="Maono"
          categoryTag="Gaming Audio / Creator Gear"
          shortDescription="Advanced AI-powered microphone with real-time voice modulation for content creators and gamers seeking professional-quality audio."
          productSlug="maono-ai-voice-changer"
          productImage="https://images.unsplash.com/photo-1599669454699-248893623440?w=1200&h=800&fit=crop"
          youtubeUrl="https://www.youtube.com/@MAONOGlobal"
                websiteUrl="https://www.maono.com/"
                reverseLayout={false}
              />
            </ErrorBoundary>

            <ErrorBoundary>
              <ProductScrollSection
          productName="Acoustic Eye"
          companyName="LINSOL"
          categoryTag="Audio Visualizer / Art"
          shortDescription="Innovative audio visualization device that transforms sound into stunning visual art, creating a unique sensory experience."
          productSlug="linsol-acoustic-eye"
          productImage="https://images.unsplash.com/photo-1511379938547-c1f69419868d?w=1200&h=800&fit=crop"
                youtubeUrl="https://www.youtube.com/results?search_query=LINSOL+Acoustic+Eye"
                reverseLayout={true}
              />
            </ErrorBoundary>

            {/* WEARABLES & HUMAN TECH Chapter */}
            <ErrorBoundary>
              <ChapterIntro
          id="wearables"
          title="WEARABLES & HUMAN TECH"
                subtitle="Technology that enhances human capabilities"
              />
            </ErrorBoundary>

            <ErrorBoundary>
              <ProductScrollSection
                productName="VIV Ring"
          companyName="VIV Health"
          categoryTag="Health Wearable / Smart Ring"
          shortDescription="Comprehensive health monitoring smart ring that tracks vital signs, sleep patterns, and activity metrics in an elegant, unobtrusive design."
          productSlug="viv-ring"
          productImage="https://images.unsplash.com/photo-1579586337278-3befd40e17ce?w=1200&h=800&fit=crop"
          youtubeUrl="https://www.youtube.com/results?search_query=VIV+Ring+CES+2025"
                websiteUrl="https://www.vivring.ai"
                reverseLayout={false}
              />
            </ErrorBoundary>

            <ErrorBoundary>
              <ProductScrollSection
                productName="Frenz Brainband"
          companyName="Earable"
          categoryTag="Sleep / Focus Wearable"
          shortDescription="Wearable headband that uses advanced neurotechnology to enhance sleep quality and improve focus through personalized brain stimulation."
          productSlug="frenz-brainband"
          productImage="https://images.unsplash.com/photo-1559757148-5c350d0d3c56?w=1200&h=800&fit=crop"
          youtubeUrl="https://www.youtube.com/@Earable"
                websiteUrl="https://www.frenzband.com/"
                reverseLayout={true}
              />
            </ErrorBoundary>

            <ErrorBoundary>
              <ProductScrollSection
                productName="WHSP Ring"
          companyName="Vtouch"
          categoryTag="AI Wearable / Voice Input"
          shortDescription="AI-powered smart ring that enables natural voice interaction and gesture control, redefining how we communicate with technology."
          productSlug="whsp-ring"
          productImage="https://images.unsplash.com/photo-1606220945770-b5b6c2c55bf1?w=1200&h=800&fit=crop"
          youtubeUrl="https://www.youtube.com/results?search_query=WHSP+Ring+Vtouch"
                websiteUrl="https://www.vtouchinc.com/"
                reverseLayout={false}
              />
            </ErrorBoundary>

            <ErrorBoundary>
              <ProductScrollSection
                productName="Osmotex Active Membrane Jacket"
          companyName="Myant"
          categoryTag="Fashion Tech / Smart Apparel"
          shortDescription="Intelligent textile jacket with active membrane technology that adapts to environmental conditions and monitors biometric data seamlessly."
          productSlug="osmotex-jacket"
          productImage="https://images.unsplash.com/photo-1551028719-00167b16eac5?w=1200&h=800&fit=crop"
          youtubeUrl="https://www.youtube.com/results?search_query=Myant+Osmotex+jacket"
                websiteUrl="https://www.myant.ca/"
                reverseLayout={true}
              />
            </ErrorBoundary>

            {/* HEALTH, ACCESSIBILITY & SAFETY Chapter */}
            <ErrorBoundary>
              <ChapterIntro
          id="health"
          title="HEALTH, ACCESSIBILITY & SAFETY"
                subtitle="Technology improving lives and protecting communities"
              />
            </ErrorBoundary>

            <ErrorBoundary>
              <ProductScrollSection
                productName="TD Square"
          companyName="Hanyang University Playlab"
          categoryTag="Tinnitus Digital Treatment Device"
          shortDescription="Innovative digital therapy device that provides personalized treatment for tinnitus using advanced audio therapy and neuroplasticity techniques."
          productSlug="td-square"
          productImage="https://images.unsplash.com/photo-1559757175-0eb30cd8c063?w=1200&h=800&fit=crop"
                youtubeUrl="https://www.youtube.com/results?search_query=TD+Square+tinnitus+device"
                reverseLayout={false}
              />
            </ErrorBoundary>

            <ErrorBoundary>
              <ProductScrollSection
                productName="buddy-in"
          companyName="Neudive"
          categoryTag="Mental Health / Youth"
          shortDescription="Supportive mental health platform designed for youth, providing accessible tools and resources for emotional well-being and resilience."
          productSlug="buddy-in"
          productImage="https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=1200&h=800&fit=crop"
          youtubeUrl="https://www.youtube.com/results?search_query=Neudive+buddy-in"
                websiteUrl="https://neudive.com/"
                reverseLayout={true}
              />
            </ErrorBoundary>

            <ErrorBoundary>
              <ProductScrollSection
                productName="Bio Leg"
          companyName="BionicM"
          categoryTag="Accessibility / Robotics"
          shortDescription="Advanced bionic prosthetic leg that uses AI and robotics to provide natural movement and enhanced mobility for amputees."
          productSlug="bio-leg"
          productImage="https://images.unsplash.com/photo-1581092160562-40aa08e78837?w=1200&h=800&fit=crop"
          youtubeUrl="https://www.youtube.com/results?search_query=BionicM+Bio+Leg"
                websiteUrl="https://bionicm.com/"
                reverseLayout={false}
              />
            </ErrorBoundary>

            <ErrorBoundary>
              <ProductScrollSection
                productName="Q-Vision Pro"
          companyName="Suprema AI"
          categoryTag="Embedded AI / Safety"
          shortDescription="Intelligent vision system with embedded AI for advanced security, surveillance, and safety applications in smart environments."
          productSlug="q-vision-pro"
          productImage="https://images.unsplash.com/photo-1485827404703-89b55fcc595e?w=1200&h=800&fit=crop"
          youtubeUrl="https://www.youtube.com/results?search_query=Suprema+Q-Vision+Pro"
                websiteUrl="https://suprema-ai.com/"
                reverseLayout={true}
              />
            </ErrorBoundary>

            {/* XR, GAMING & FUTURE INTERACTION Chapter */}
            <ErrorBoundary>
              <ChapterIntro
                id="xr"
                title="XR, GAMING & FUTURE INTERACTION"
                subtitle="Immersive experiences and next-generation interfaces"
              />
            </ErrorBoundary>

            <ErrorBoundary>
              <ProductScrollSection
                productName="XR Head-Mounted Display SRH-S1"
                companyName="Sony"
                categoryTag="XR / Creator Gear"
                shortDescription="Professional-grade XR headset designed for creators, delivering stunning visual fidelity and seamless mixed reality experiences."
                productSlug="xr-head-mounted-display-srh-s1"
                productImage="https://images.unsplash.com/photo-1612198188060-c7c2a3b66eae?w=1200&h=800&fit=crop"
                youtubeUrl="https://www.youtube.com/@SonyGroupOfficial"
                reverseLayout={false}
              />
            </ErrorBoundary>

            <ErrorBoundary>
              <ProductScrollSection
                productName="SPORTRACK XR Board Game"
                companyName="Newjak"
                categoryTag="XR Gaming / Exergame"
                shortDescription="Revolutionary board game that combines physical movement with extended reality, creating an active gaming experience for all ages."
                productSlug="sportrack-xr-board-game"
                productImage="https://images.unsplash.com/photo-1511512578047-dfb367046420?w=1200&h=800&fit=crop"
                youtubeUrl="https://www.youtube.com/results?search_query=SPORTRACK+XR+Board+Game"
                reverseLayout={true}
              />
            </ErrorBoundary>

            <ErrorBoundary>
              <ProductScrollSection
                productName="GoKart Pro2"
                companyName="Segway"
                categoryTag="Gaming / Mobility"
                shortDescription="High-performance electric go-kart that blends gaming culture with real-world mobility, delivering thrilling racing experiences."
                productSlug="gokart-pro2"
                productImage="https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=1200&h=800&fit=crop"
                youtubeUrl="https://www.youtube.com/@Segway"
                websiteUrl="https://www.segway.com/"
                reverseLayout={false}
              />
            </ErrorBoundary>

            {/* FUTURE LIVING & MOBILITY Chapter */}
            <ErrorBoundary>
              <ChapterIntro
                id="living"
                title="FUTURE LIVING & MOBILITY"
                subtitle="Smart homes and autonomous systems reshaping daily life"
              />
            </ErrorBoundary>

            <ErrorBoundary>
              <ProductScrollSection
                productName="AI Transformer Home Trailer"
          companyName="AC Future"
          categoryTag="Smart Home / Mobility"
          shortDescription="Intelligent modular living space that transforms between home and vehicle, featuring AI-powered automation and sustainable design."
          productSlug="ai-transformer-home-trailer"
          productImage="https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=1200&h=800&fit=crop"
          youtubeUrl="https://www.youtube.com/@ACFutureOfficial"
                websiteUrl="https://www.acfuture.com/"
                reverseLayout={false}
              />
            </ErrorBoundary>

            <ErrorBoundary>
              <ProductScrollSection
                productName="Drone First Responder Station"
          companyName="Nearthlab"
          categoryTag="Drones / Public Safety"
          shortDescription="Autonomous drone deployment system for emergency response, providing rapid aerial support for public safety and rescue operations."
          productSlug="drone-first-responder-station"
          productImage="https://images.unsplash.com/photo-1473968512647-3e447244af8f?w=1200&h=800&fit=crop"
          youtubeUrl="https://www.youtube.com/results?search_query=Nearthlab+Drone+Station"
                websiteUrl="https://nearthlab.com/"
                reverseLayout={true}
              />
            </ErrorBoundary>

            {/* Closing Section */}
            <ErrorBoundary>
              <ClosingSection />
            </ErrorBoundary>
      </div>
    </ThemeProvider>
  );
}

export default App;

