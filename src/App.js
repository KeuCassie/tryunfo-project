import React from 'react';
import Form from './components/Form';
import Card from './components/Card';
import './App.css';

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      cardName: '',
      cardDescription: '',
      cardAttr1: '0',
      cardAttr2: '0',
      cardAttr3: '0',
      cardImage: '',
      cardRare: 'normal',
      cardTrunfo: false,
      isSaveButtonDisabled: true,
      cardList: [],
    };
  }

     onInputChange = ({ target }) => {
       const { name } = target;
       const value = target.type === 'checkbox' ? target.checked : target.value;

       this.setState({
         [name]: value,
       }, this.saveButton);
     }

     saveButton = () => {
       const { cardName,
         cardDescription,
         cardAttr1,
         cardAttr2,
         cardAttr3,
         cardImage } = this.state;

       let validationButton = false;
       let numberLessThan = false;
       let attLessThan = false;
       let isNegative = false;
       const att1 = Number(cardAttr1);
       const att2 = Number(cardAttr2);
       const att3 = Number(cardAttr3);
       const maxTotalNumber = 210;
       const maxAttNumber = 90;

       if (cardName === '' || cardDescription === ''
         || cardImage === '') {
         validationButton = false;
       } else {
         validationButton = true;
       }

       if ((att1 + att2 + att3) <= maxTotalNumber) {
         numberLessThan = true;
       } else {
         numberLessThan = false;
       }

       if (att1 <= maxAttNumber && att2 <= maxAttNumber && att3 <= maxAttNumber) {
         attLessThan = true;
       } else {
         attLessThan = false;
       }

       if (att1 < 0 || att2 < 0 || att3 < 0) {
         isNegative = false;
       } else {
         isNegative = true;
       }

       this.setState(() => ({ isSaveButtonDisabled: !(validationButton
        && numberLessThan
        && attLessThan
        && isNegative),
       }));
     };

     onSaveButtonClick = () => {
       const { cardName,
         cardDescription,
         cardImage,
         cardAttr1,
         cardAttr2,
         cardAttr3,
         cardRare,
       } = this.state;

       const card = {
         cardName,
         cardDescription,
         cardImage,
         cardAttr1,
         cardAttr2,
         cardAttr3,
         cardRare,
       };

       this.setState((prevState) => ({
         cardName: '',
         cardDescription: '',
         cardAttr1: '0',
         cardAttr2: '0',
         cardAttr3: '0',
         cardImage: '',
         cardRare: 'normal',
         cardTrunfo: false,
         isSaveButtonDisabled: true,
         cardList: [...prevState.cardList, card],
       }));
     }

     render() {
       const { cardName,
         cardDescription,
         cardAttr1,
         cardAttr2,
         cardAttr3,
         cardImage,
         cardRare,
         cardTrunfo,
         isSaveButtonDisabled } = this.state;

       return (
         <div className="containerOne">
           <h1>Tryunfo Sakura Card Captors</h1>
           <Form
             cardName={ cardName }
             cardDescription={ cardDescription }
             cardAttr1={ cardAttr1 }
             cardAttr2={ cardAttr2 }
             cardAttr3={ cardAttr3 }
             cardImage={ cardImage }
             cardRare={ cardRare }
             cardTrunfo={ cardTrunfo }
             onInputChange={ this.onInputChange }
             isSaveButtonDisabled={ isSaveButtonDisabled }
             onSaveButtonClick={ this.onSaveButtonClick }
           />
           <Card
             cardName={ cardName }
             cardDescription={ cardDescription }
             cardAttr1={ cardAttr1 }
             cardAttr2={ cardAttr2 }
             cardAttr3={ cardAttr3 }
             cardImage={ cardImage }
             cardRare={ cardRare }
             cardTrunfo={ cardTrunfo }
           />
         </div>
       );
     }
}

export default App;
