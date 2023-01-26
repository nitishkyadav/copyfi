import React from 'react';
import Article from '../../components/article/article';
import { blog01, blog02, blog03, blog04, blog05 } from './imports';
import './blog.css';

const blog = () => (
  <div className="copyfi__blog section__padding" id="blog">
    <div className="copyfi__blog-heading">
      <h1 className="gradient__text">A lot is happening, <br /> We are blogging aboutTOKENOMICS and ROADMAP .</h1>
    </div>
    <div className="copyfi__blog-container">
      <div className="copyfi__blog-container_groupA">
        <Article imgUrl={blog01} date="jan 24, 2023" text="TOKENOMICS. Let us exlore how it is?" />
      </div>
      <div className="copyfi__blog-container_groupB">
        <Article imgUrl={blog02} date="jan 24, 2023" text="ROADMAP.Let us explore how it is?"/>
        <Article imgUrl={blog05} date="jan 24,2023" text="AI Bot. Let us explore how it is?"/>
       
      </div>
    </div>
  </div>
);

export default blog;