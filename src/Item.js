// --------------------------------------- задание 8 ------------------------------------

function Item({ name, isPacked }) {
  return (
    <li className="item">
      {name} {isPacked ? "✔" : "❌"}
      {/* Здание 8. Используем условный оператор */}
    </li>
  );
}

export default function PackingList() {
  return (
    <section>
      <h1>Sally Ride's Packing List</h1>
      <ul>
        <Item isPacked={true} name="Space suit" />
        <Item isPacked={true} name="Helmet with a golden leaf" />
        <Item isPacked={false} name="Photo of Tam" />
      </ul>
    </section>
  );
}

// ------------------------------------ задание 9 --------------------------
// export default function LightSwitch() {
//     function handleClick() {
//       let bodyStyle = document.body.style;
//       if (bodyStyle.backgroundColor === 'black') {
//         bodyStyle.backgroundColor = 'white';
//       } else {
//         bodyStyle.backgroundColor = 'black';
//       }
//     }

//     return (
// неправильно:
// <button onClick={handleClick}></button>

// правильно:
//       <button onClick={handleClick}>
//         Toggle the lights
//       </button>
//     );
//   }

// функцию нужно вызвать без скобок, они лишние

// ------------------------- задание 10 ------------------------
// export default function Signup(event) {
//     const handleSubmit = (e) => { // создаем объект е - ивент, событие
//       e.preventDefault(); // Предотвращаем поведение браузера по умолчанию с помощью фнукции preventDefault()
//       alert('Submitting!');
//     };

//     return (
//       <form>
//         <input />
//         <button onClick={handleSubmit}>Send</button>
//       </form>
//     );
//   }

// ---------------------------- задание 13 ------------------------
// ошибка в том, что "const [message, setMessage] = useState('');" в исходном коде расположен внутри условного оператора
//  useState() для переменной message необходимо перенести за пределы словного оператора,
// сразу после вызова useState() для переменной isSent

// import { useState } from 'react';

// export default function FeedbackForm() {
//     const [isSent, setIsSent] = useState(false);
//     const [message, setMessage] = useState('');
//     if (isSent) {
//         return <h1>Thank you!</h1>;
//     } else {
//         return (
//             <form
//                 onSubmit={(e) => {
//                     e.preventDefault();
//                     alert(`Sending: "${message}"`);
//                     setIsSent(true);
//                 }}
//             >
//                 <textarea
//                     placeholder="Message"
//                     value={message}
//                     onChange={(e) =>
//                         setMessage(e.target.value)
//                     }
//                 />
//                 <br />
//                 <button type="submit">Send</button>
//             </form>
//         );
//     }
// }
