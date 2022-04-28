import React from 'react';

import Banner from '../components/Banner';
import BestSellers from '../components/BestSellers';
import FAQ from '../components/FAQ';
import Hero from '../components/Hero';
import HeroBanner from '../components/HeroBanner';
import Newsletter from '../components/Newsletter';
import ProductCategories from '../components/ProductCategories';
import Socials from '../components/Socials';

const Homepage = () => {
  return (
    <div>
      <Hero />
      <HeroBanner />
      <Banner />
      <BestSellers />
      <ProductCategories />
      <Newsletter />
      <FAQ />
      <Socials />
    </div>
  );
};

export default Homepage;
