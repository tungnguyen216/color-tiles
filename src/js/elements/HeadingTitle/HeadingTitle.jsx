import React from 'react';
import block from 'bem-cn';
import './HeadingTitle.scss';

const cn = block('heading-title');

const HeadingTitle = props =>
  <div className={cn.toString()}>
    <h2>{ props.label }</h2>
  </div>

export default HeadingTitle;