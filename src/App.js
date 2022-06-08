import { useState } from "react";

import "./styles.css";

const Search = ({ onSearch }) => {
  return (
    <div>
      <label htmlFor="search">Search :</label>
      <input id="search" type="text" onChange={onSearch} />
    </div>
  );
};

const List = ({ stories }) => (
  <ul>
    {stories.map((item) => (
      <Item key={item.objectID} {...item} />
    ))}
  </ul>
);

const Item = ({ url, title, author, num_comments, points }) => (
  <li>
    <span>
      <a href={url}>{title}</a>
    </span>
    <span>{author}</span>
    <span>{num_comments}</span>
    <span>{points}</span>
  </li>
);

const App = () => {
  const stories = [
    {
      title: "React",
      url: "https://reactjs.org/",
      author: "Jordan Walke",
      num_comments: 3,
      points: 4,
      objectID: 0
    },
    {
      title: "Redux",
      url: "https://redux.js.org/",
      author: "Dan Abramov, Andrew Clark",
      num_comments: 2,
      points: 5,
      objectID: 1
    }
  ];

  const [searchTerm, setSearchTerm] = useState("");

  const handleSearch = (event) => {
    setSearchTerm(event.target.value);
  };

  const searchedStories = stories.filter((story) =>
    story.title.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div>
      <h1>My Hacker Stories</h1>

      <Search onSearch={handleSearch} />

      <hr />

      <List stories={searchedStories} />
    </div>
  );
};

export default App;