import { useEffect, useState } from "react";

import "./styles.css";

const InputWithLabel = ({
  id,
  label,
  value,
  type = "text",
  onInputChange,
  children
}) => {
  return (
    <>
      <label htmlFor={id}>{children}</label>
      &nbsp;
      <input id={id} type={type} value={value} onChange={onInputChange} />
    </>
  );
};

const List = ({ stories }) => (
  <ul>
    {stories.map(({ objectID, ...item }) => (
      <Item key={objectID} {...item} />
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

  const useSemiPersistenState = (key, initialState) => {
    const [value, setValue] = useState(
      localStorage.getItem(key) || initialState
    );

    useEffect(() => {
      localStorage.setItem(key, value);
    }, [value, key]);

    return [value, setValue];
  };

  const [searchTerm, setSearchTerm] = useSemiPersistenState("search", "");

  const handleSearch = (event) => {
    setSearchTerm(event.target.value);
  };

  const searchedStories = stories.filter((story) =>
    story.title.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div>
      <h1>My Hacker Stories</h1>

      <InputWithLabel
        id="search"
        label="Search"
        value={searchTerm}
        onInputChange={handleSearch}
      >
        <strong>Search :</strong>
      </InputWithLabel>

      <hr />

      <List stories={searchedStories} />
    </div>
  );
};

export default App;
