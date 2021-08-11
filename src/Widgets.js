import React from 'react';
import "./Widgets.css";
import InfoIcon from "@material-ui/icons/Info";
import FiberManualRecordIcon from "@material-ui/icons/FiberManualRecord";

const Widgets = () => {
  const newsArticle = (heading, subtitle) => (
    <div className="widgets__article">
      <div className="widgets__articleLeft">
        <FiberManualRecordIcon />
      </div>
      <div className="widgets__articleRight">
        <h4>{heading}</h4>
        <p>{subtitle}</p>
      </div>
    </div>
  )

  return (
    <div className="widgets">
      <div className="widgets__header">
        <h2>LinkedIn News</h2>
        <InfoIcon />
      </div>
      {newsArticle("Micro Center Deals", "Top News - 9999 readers")}
      {newsArticle("Free 32GB Flash Media", "Top News - 8888 readers")}
      {newsArticle("The Tech You Need", "Top News - 8776 readers")}
      {newsArticle("Bitcoin on the Rise", "Top News - 5576 readers")}
      {newsArticle("New UFO Sighting", "Top News - 6456 readers")}
      {newsArticle("Learn Redux.js Today", "Top News - 3276 readers")}
    </div>
  )
}

export default Widgets;
