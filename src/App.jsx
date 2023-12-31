import React from 'react';
import data from './data';
import { nanoid } from 'nanoid';

const App = () => {
  const [count, setCount] = React.useState(1);
  const [text, setText] = React.useState([]);

  const handleSubmit = (e) => {
    e.preventDefault();

    let amount = parseInt(count);
    setText(data.slice(0, amount))
  }

  return (
    <section className='section-center'>
      <h4>Tired of borning Lorem Ipsum?</h4>
      <form className='lorem-form' onSubmit={handleSubmit}>
        <label htmlFor='amount'>Paragraphs</label>
        <input 
          id='amount' 
          type='number' 
          name='amount' 
          min='1'
          max='9'
          step='1'
          value={count}

          onChange={(e) => setCount(e.target.value)}
        />

        <button
          className='btn'
          type='submit'
        >
          Generate
        </button>
      </form>

      <article className='lorem-text'>
        {text.map((item) => {
          return <p key={nanoid()}>{item}</p>
        })}
      </article>
    </section>
  );
};

export default App;
