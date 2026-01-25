import Home from '@/components/Home';
import Nav from '@/components/Nav';
import About from '@/components/About';
import Experience from '@/components/Experience';
import Works from '@/components/Works';
import Beyond from '@/components/Beyond';
import Contact from '@/components/Contact';

export default function Page() {
  return (
    <>
      {/* Site borders */}
      <div id="site-border-left"></div>
      <div id="site-border-right"></div>
      <div id="site-border-top"></div>
      <div id="site-border-bottom"></div>

      {/* Main content */}
      <Home />
      <Nav />
      <About />
      <Experience />
      <Works />
      <Beyond />
      <Contact />
    </>
  );
}
