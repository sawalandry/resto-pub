import React from 'react';

import { SubHeading } from '../../components';
import { images } from '../../constants';
import './Chef.css';

const Chef = () => (
  <div className="app__bg app__wrapper section__padding">
    <div className="app__wrapper_img app__wrapper_img-reverse">
      <img src={images.chef} alt="chef_image" />
    </div>
    <div className="app__wrapper_info">
      <SubHeading title="Chef's word" />
      <h1 className="headtext__cormorant">What we believe in</h1>

      <div className="app__chef-content">
        <div className="app__chef-content_quote">
          <img src={images.quote} alt="quote_image" />
          <p className="p__opensans">A chef is a trained professional cook and tradesman who is proficient in all aspects of food preparation, often focusing on a particular cuisine.</p>
        </div>
        <p className="p__opensans"> The word "chef" is derived from the term chef de cuisine , the director or head of a kitchen. </p>
      </div>

      <div className="app__chef-sign">
        <p>Lin Yu</p>
        <p className="p__opensans">Our kitchen's Chef</p>
      </div>
    </div>
  </div>
);

export default Chef;
