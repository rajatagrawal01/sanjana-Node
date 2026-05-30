import React from 'react';
import Hero from './Hero';
import Popular from '../popular/Popular';
import Offer from "../offers/Offer";
import Collection from '../new_collection/Collection';
import NewsLetter from '../../newsLetter/NewsLetter';
import Cart from '../../pages/Cart';
export default function Shop() {
  return (
    <div>
      <Hero />
      <Popular />
      <Offer />
      <Collection />
      <NewsLetter />
    </div >
  )
}