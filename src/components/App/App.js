import React from 'react';
import '../Styles/App.css';
import HomeHeroContainer from '../Main/HomeHeroContainer/HomeHeroContainer';
import HomeHeroLinks from '../Main/HomeHeroLinks/HomeHeroLinks';
import BlockHead from '../References/BlockHead/BlockHead';
import Teasers from '../References/Teasers/Teasers';
import BlocTitleOffers from '../Offers/BlocTitleOffers/BlocTitleOffers';
import BlocContent from '../Offers/Bloc/BlocContent';
import Prefooter from '../Prefooter/Prefooter.js';
import Footer from '../Footer/Footer';
import TopMenuItem from '../Topbar/TopMenuContainer/TopMenuItem';
import Nav from '../Nav/Nav';

class App extends React.Component {
  render() {
  return (
    
    <div>
      <header>
        {<TopMenuItem />}
      </header>
      <section>
        {<Nav />}
      </section>
      <main className='home-hero overlay'>
        {<HomeHeroContainer />}
        {<HomeHeroLinks />}
      </main>
      <section>
        {<BlockHead />}
        {<Teasers/>}
      </section>
      <section>
        {<BlocTitleOffers />}
        {<BlocContent />}
      </section>
      <section>
        {<Prefooter />}
      </section>
      <footer>
        {<Footer />}
      </footer>
    </div>
   
  );
}
}

export default App;
