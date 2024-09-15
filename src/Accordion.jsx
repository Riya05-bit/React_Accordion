import React from 'react';
import Api from './Api';
import './Accordion.css';
import MyAccordion from './MyAccordion';

const Accordion = () => {
  return (
    <div className="Accordion">
      {Api.map((e, index) => {
        return <MyAccordion key={index} title={e.title} topics={e.topics} />;
      })}
    </div>
  );
};

export default Accordion;
