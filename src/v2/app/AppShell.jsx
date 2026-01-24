import { Navigation } from '../../components/Navigation';
import { PodcastSection } from '../../components/PodcastSection';
import { ClosingSection } from '../../components/ClosingSection';
import { GoToTopButton } from '../../components/GoToTopButton';

export function AppShell({ children }) {
  return (
    <div className="v2-app-shell">
      <Navigation />
      <main className="v2-app-shell__content">{children}</main>
      <PodcastSection />
      <ClosingSection />
      <GoToTopButton />
    </div>
  );
}
