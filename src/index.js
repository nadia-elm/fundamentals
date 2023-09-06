
import React from 'react';
import ReactDOM from 'react-dom/client';

import './index.css';
import {Book} from './Book'
import {books} from'./books'


const getBook = (id) => {
  const book = books.find((book) => book.id === id)
  console.log(book.title)
}

const BookList = () => {
  return (
    <section className='booklist'>
      {books.map((b,idx) => {
        return <Book {...b} key={b.id} getBook={getBook}  number={idx}/>
      })}
    </section>
  )
}



const handleInput = (e)=> {
 console.log(e.target.value)
 console.log(e.target.name)
}
const handleSubmit = (e)=>{
 e.preventDefault()
 console.log('now it is submitted')
}

const Form = ()  => {
 return (
  <>
  <form >
   <h2>Typical form</h2>
   <input  onChange={handleInput} type="text" name="reactForm"></input><br/>
   <button type="submit" onClick={handleSubmit}>Click me</button>
  </form>
  </>
 )
}







const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<BookList />);



{/* <Book  url='https://m.media-amazon.com/images/I/41ngcdM-qbL._SY291_BO1,204,203,200_QL40_FMwebp_.jpg' title='So That Happened' author='katie bailey'>

   <p>
    Lorem ipsum dolor sit amet consectetur adipisicing elit. Delectus, excepturi fugit laboriosam qui neque dignissimos architecto culpa, quaerat minus id commodi debitis consequuntur.

   </p>
   </Book>

   <Book  url='https://m.media-amazon.com/images/I/41Gu06xm-NL._SY291_BO1,204,203,200_QL40_FMwebp_.jpg' title='The Desperate Deal' author='Dineen Miller'/>

   <Book  url='https://m.media-amazon.com/images/I/51JB0XFXUxL._SY346_.jpg' title='The daydreamer' author='Steph Gennaro'/>

   <Book  url='https://m.media-amazon.com/images/I/51T0cPaDbJL.jpg' title='Magical Begining' author='deepak chopra'/>
  
    */}