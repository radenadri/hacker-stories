import App, {
  storiesReducer,
  Item,
  List,
  SearchForm,
  InputWithLabel
} from "./App";

const storyOne = {
  title: "React",
  url: "https://reactjs.org/",
  author: "Jordan Walke",
  num_comments: 3,
  points: 4,
  objectID: 0
};

const storyTwo = {
  title: "Redux",
  url: "https://redux.js.org/",
  author: "Dan Abramov, Andrew Clark",
  num_comments: 2,
  points: 5,
  objectID: 1
};

const stories = [storyOne, storyTwo];

describe("something truthy and falsy", () => {
  test("true to be true", () => {
    expect(true).toBeTruthy();
  });

  test("false to be false", () => {
    expect(false).toBeFalsy();
  });
});

describe("storiesReducer", () => {
  test("removes an item when clicking a dismiss button", () => {
    const action = { type: "REMOVE_STORY", payload: storyOne };
    const state = { data: stories, isLoading: false, isError: false };

    const newState = storiesReducer(state, action);

    const expectedState = {
      data: [storyTwo],
      isLoading: false,
      isError: false
    };

    expect(newState).toStrictEqual(expectedState);
  });

  test("request an initial stories from API", () => {});
});
