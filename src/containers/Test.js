import React from 'react';

const Test = props => {
  return (
    <div className="panel">
      <div className="nav-bar">
        <div className="nav-logo">
          <span className="logo">Bookstore CMS</span>
        </div>
        <div className="nav-list">
          <ul className="nav-list-items">
            <li className="list-item">BOOKS</li>
            <li className="list-item">CATEGORIES</li>
          </ul>
        </div>
        <div className="nav-buttons">
          <img className="profile-button" src="profile.png"></img>
        </div>
      </div>
      <div className="lesson-panel">
        <div className="lesson-description">
          <p className="lesson-description-category">ExampleFiction</p>
          <p className="lesson-description-title">ExampleDune</p>
          <p className="lesson-description-author">Exampleauthor</p>
          <ul className="lesson-description-links">
            <li className="lesson-link">Comments</li>
            <li className="lesson-link">Remove</li>
            <li className="lesson-link">Edit</li>
          </ul>
        </div>
        <div className="lesson-progress">
          <div className="box">
            <div className="percent">
              <svg>
                <circle cx="70" cy="70" r="70"></circle>
                <circle cx="70" cy="70" r="70"></circle>
              </svg>
              <div className="number">
                <h2>87<span>%</span></h2>
              </div>
            </div>
            <h2 class="text">Completed</h2>
          </div>
        </div>
        <div className="lesson-update">
        </div>
      </div>
    </div>

  )
};

export default Test;
