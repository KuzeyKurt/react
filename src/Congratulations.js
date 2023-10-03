import React from "react";

export function Congratulations() {
  return <h1>Good job!</h1>;
}
//Задание 4

// ----------------------------- задание 5 --------------------------------------
const person = {
  name: " Брендан Эйх",
  theme: {
    backgroundColor: "black",
    color: "pink",
  },
};

export default function TodoList() {
  return (
    <div style={person.theme}>
      {/* <h1>{person} – создатель языка программирования JS</h1> */}

      {/* person - это объект, а не переменная и объект мы не можем просто так вынести
      текстом (потому что он не может быть использован в качестве дочернего компонента ) */}

      <h1>{person.name} – создатель языка программирования JS</h1>
      {/* Вот правильное обращение к конкретному атрибуту */}
      <img
        className="avatar"
        src="https://i.imgur.com/7vQD0fPs.jpg"
        alt="Gregorio Y. Zara"
      />
      <ul>
        <li>Improve the videophone</li>
        <li>Prepare aeronautics lectures</li>
        <li>Work on the alcohol-fuelled engine</li>
      </ul>
    </div>
  );
}

// ------------------------------------------------ задание 6 -----------------------------------------
const person = {
    name: 'Gregorio Y. Zara',
    theme: {
      backgroundColor: 'black',
      color: 'pink'
    },
    image_url: "https://i.imgur.com/7vQD0fPs.jpg" // необходимо создать характеристику в объекте, которая хранит ссылку на фото
  };
  
  export default function TodoList() {
    return (
      <div style={person.theme}>
        <h1>{person.name}'s Todos</h1>
        <img
          className="avatar"
          src={person.image_url} // вместо вызова url напрямую,  вызываем её из объекта 
          alt="Gregorio Y. Zara"
        />
        <ul>
          <li>Improve the videophone</li>
          <li>Prepare aeronautics lectures</li>
          <li>Work on the alcohol-fuelled engine</li>
        </ul>
      </div>
    );
  }
  