import React from 'react';
import { LINKS } from '../constants';
import Header from '../components/Header';

const Index = () => {
  return (
    <div>
      <Header links={LINKS} />
      <h1>Hello World</h1>
    </div>
  )
}

export default Index;