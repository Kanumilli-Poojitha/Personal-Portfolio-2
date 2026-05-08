import Navbar from './Navbar';
import Footer from './Footer';

export default function SiteLayout({ children }) {
  return (
    <div className="min-h-screen overflow-x-hidden bg-bg text-white">
      <Navbar />
      <main>{children}</main>
      <Footer />
    </div>
  );
}
