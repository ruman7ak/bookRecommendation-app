import "./styles.css";
import React, { useState } from "react";

var together = {
  Fiction: [
    {
      name: "The Alchemist",
      rating: "9/10",
      image:
        "https://www.rappler.com/tachyon/2021/07/the-alchemist-july-17-2021-sq.jpg"
    },
    {
      name: "The Midnight Library",
      rating: "8.5/10",
      image:
        "https://i0.wp.com/booksandpeonies.com/wp-content/uploads/2022/01/71Qsix5gbYL.jpg?w=1518&ssl=1"
    }
  ],
  SciFi: [
    {
      name: "The Brain",
      rating: "8/10",
      image:
        "https://kayazbookstore.pk/wp-content/uploads/2022/01/the-brain-book-onlinebooksoutlet-1.jpg"
    },
    {
      name: "The 60 minutes Quantum Physics",
      rating: "8.5/10",
      image:
        "https://kbimages1-a.akamaihd.net/eb2b96e6-08b9-417e-80ad-64562b32fd92/1200/1200/False/the-60-minute-quantum-physics-book-science-made-easy-for-beginners-without-math-and-in-plain-simple-english.jpg"
    }
  ],
  Philosophy: [
    {
      name: "Meditations by Marcus Aurellius",
      rating: "10/10",
      image:
        "https://prod-bb-images.akamaized.net/book-covers/coverimage-9788728285350-publizon-2022-05-20t03-09.jpg?w=400"
    },
    {
      name: "The history of Philosophy",
      rating: "8/10",
      image: "https://cdn2.penguin.com.au/covers/400/9780241304549.jpg"
    }
  ]
};

export default function App() {
  const [category, setCategory] = useState("Fiction");

  function clickhandler(category) {
    setCategory(category);
  }

  return (
    <div className="App">
      <div style={{ backgroundColor: "brown", padding: ".5rem" }}>
        <h1>Choose Your Favorite Genre</h1>
        <h5>These are the best book ever written in their respective genres</h5>
      </div>
      {Object.keys(together).map(function (category) {
        return (
          <button
            style={{
              padding: "1.5rem",
              margin: "1rem"
            }}
            onClick={() => clickhandler(category)}
          >
            {category}
          </button>
        );
      })}

      <ul style={{ paddingInlineStart: "" }}>
        {together[category].map((items) => (
          <li
            style={{
              border: "2px solid",
              maxWidth: "50%",
              margin: "auto",
              outline: "1px solid red",
              listStyle: "none"
            }}
          >
            {""}
            <div
              style={{
                padding: "1rem",
                textAlign: "center",
                fontSize: "x-large"
              }}
            >
              {items.name}
            </div>
            <img
              style={{ width: "30%" }}
              src={items.image}
              alt={items.name}
            ></img>
            <div style={{ fontSize: "large", textAlign: "center" }}>
              {items.rating}
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
}
