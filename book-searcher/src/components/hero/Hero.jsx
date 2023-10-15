import './hero.css'
import React,{Component } from 'react'
import searchIcon from '../../img/icons-search.svg'
import searchIcon2 from '../../img/cross.svg'
import Card from '../card/Card'

class Hero extends Component {
  constructor(props) {
    super(props);
    this.state = {
      inputValue: '',
      isSearching: false,
      bookData: [],
    };
  }
  handleClearInput = () => {
    this.setState({ inputValue: '' });
    this.setState({isSearching:false})
  };

  handleInputChange = (event) => {
  const inputValue = event.target.value;
  const isSearching = inputValue !== '';
  this.setState({ inputValue, isSearching });
};

  handleKeyDown = (event) => {
    if (event.key === 'Enter') {
      const apiKey='AIzaSyCQsP5yJPRPIIBBZ-3SJd412hhwFmWMvVM';
      event.preventDefault();
      const inputValue = this.state.inputValue;
      fetch(`https://www.googleapis.com/books/v1/volumes?q=${inputValue}&key=${apiKey}`)
        .then(response => response.json())
        .then(data => {
          console.log(data);

          const bookData = data.items.map(item => ({
            title: item.volumeInfo.title,
            image: item.volumeInfo.imageLinks.thumbnail,
          }));
          this.setState({ bookData });
        
        })
        .catch(error => {
          console.error(error);
        });
    }
  };


    render() {
      const { inputValue, isSearching, bookData } = this.state;
      return (
        <main className='hero-section'>
            <p className='hero-p'>Find Book You Need</p>
            <div className="hero-search">
                <input className='search-input' type="text" placeholder="Enter your book name"
                value={inputValue}
                onChange={this.handleInputChange} 
                onKeyDown={this.handleKeyDown}/>
                <a href="#!" onClick={this.handleClearInput}>
                  {isSearching ? (
                    <img className='hero__search-icon' src={searchIcon2} alt="" />
                  ) : (
                    <img className='hero__search-icon' src={searchIcon} alt="" onClick={this.handleClearInput}  />
                  )}
                </a>
            </div>

            <div className="container">
            {bookData.map((book, index) => (
            <Card
              key={index}
              bookData={book}
            />
          ))}
            </div>
        </main>
      );
    }
  }

  export default Hero;