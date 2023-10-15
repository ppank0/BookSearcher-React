import './card.css'
import React, { Component } from 'react'
// import bookImg from '../../img/book.jpg'

class Card extends Component{
    render(){
        const { bookData } = this.props; // Получение данных книги из пропсов

    return (
      <div className="card">
        <img src={bookData.image} alt="" />
        <a className='card-a' href="#!">
          <h2 className='book-name'>{bookData.title}</h2>
        </a>
      </div>
        );
    }
}
export default Card;