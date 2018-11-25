import * as React from "react";
import { render } from "react-dom";
import "./styles.css";

interface MovieEntry {
  title: string;
  desc: string;
  link: string;
  rating: number;
}

const movies = [
  { title: "8th Grade", desc: "123", link: "", rating: 5 },
  { title: "3 Strangers", desc: "321", link: "", rating: 4 },
  { title: "Roma", desc: "blah blah blah", link: "", rating: 5 }
];

const Square = (props: { movie: MovieEntry }) => {
  return (
    <div className="square">
      <div className="movietitle">{props.movie.title}</div>
      <div className="moviedesc">{props.movie.desc}</div>
      <div>{props.movie.rating}</div>
    </div>
  );
};

const App = () => (
  <div className="App">
    <h1>Movies</h1>
    <div className="moviesgrid">
      {movies.map(m => (
        <Square movie={m} />
      ))}
    </div>
  </div>
);

render(<App />, document.getElementById("root"));
