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
            <li className="list-item">
              <select className="nav-select">
                <option>CATEGORY</option>
              </select>
            </li>
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
          <svg>
            <circle cx="35" cy="35" r="35"></circle>
            <circle cx="35" cy="35" r="35"></circle>
          </svg>
          <p className="number">87%</p>
          <p className="completed">Completed</p>
        </div>
        <div className="lesson-update">
          <p className="update-current">CurrentExample</p>
          <p className="update-chapter">ChapterExample</p>
          <button className="update-button">Update Progress</button>
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
          <svg>
            <circle cx="35" cy="35" r="35"></circle>
            <circle cx="35" cy="35" r="35"></circle>
          </svg>
          <p className="number">87%</p>
          <p className="completed">Completed</p>
        </div>
        <div className="lesson-update">
          <p className="update-current">CurrentExample</p>
          <p className="update-chapter">ChapterExample</p>
          <button className="update-button">Update Progress</button>
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
          <svg>
            <circle cx="35" cy="35" r="35"></circle>
            <circle cx="35" cy="35" r="35"></circle>
          </svg>
          <p className="number">87%</p>
          <p className="completed">Completed</p>
        </div>
        <div className="lesson-update">
          <p className="update-current">CurrentExample</p>
          <p className="update-chapter">ChapterExample</p>
          <button className="update-button">Update Progress</button>
        </div>
      </div>
      <div className="form">
        <hr className="line-div"></hr>
        <p className="form-title">ADD NEW BOOK</p>
        <form className="form">
          <input
            type="text"
            placeholder="Book title"
            className="input-title"
          />
        <select className="input-select">
          <option>Category</option>
        </select>
        <button
          type="submit"
          className="input-submit"
        >
        ADD BOOK
        </button>
        </form>
      </div>
    </div>

  )
};

export default Test;
