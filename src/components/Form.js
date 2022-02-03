import React, { Component } from 'react';
import PropTypes from 'prop-types';

class Form extends Component {
  render() {
    const {
      cardName,
      cardDescription,
      cardAttr1,
      cardAttr2,
      cardAttr3,
      cardImage,
      cardRare,
      cardTrunfo,
      hasTrunfo,
      isSaveButtonDisabled,
      onInputChange,
      onSaveButtonClick,
    } = this.props;

    return (
      <form>
        <input
          type="text"
          name="cardName"
          value={ cardName }
          onChange={ onInputChange }
          data-testid="name-input"
        />
        <textarea
          type="textarea"
          name="cardDescription"
          value={ cardDescription }
          onChange={ onInputChange }
          data-testid="description-input"
        />
        <input
          type="number"
          name="cardAttr1"
          value={ cardAttr1 }
          onChange={ onInputChange }
          data-testid="attr1-input"
        />
        <input
          type="number"
          name="cardAttr2"
          value={ cardAttr2 }
          onChange={ onInputChange }
          data-testid="attr2-input"
        />
        <input
          type="number"
          name="cardAttr3"
          value={ cardAttr3 }
          onChange={ onInputChange }
          data-testid="attr3-input"
        />
        <input
          type="text"
          name="cardImage"
          value={ cardImage }
          onChange={ onInputChange }
          data-testid="image-input"
        />
        <select
          name="cardRare"
          value={ cardRare }
          onChange={ onInputChange }
          data-testid="rare-input"
        >
          <option>normal</option>
          <option>raro</option>
          <option>muito raro</option>
        </select>
        { hasTrunfo ? (<p>Você já tem um Super Trunfo em seu baralho</p>
        ) : (
          <input
            name="cardTrunfo"
            type="checkbox"
            checked={ cardTrunfo }
            onChange={ onInputChange }
            data-testid="trunfo-input"
          />)}
        <button
          type="button"
          disabled={ isSaveButtonDisabled }
          onClick={ onSaveButtonClick }
          data-testid="save-button"
        >
          Salvar
        </button>
      </form>

    );
  }
}

Form.propTypes = {
  cardName: PropTypes.string.isRequired,
  cardDescription: PropTypes.string.isRequired,
  cardAttr1: PropTypes.string.isRequired,
  cardAttr2: PropTypes.string.isRequired,
  cardAttr3: PropTypes.string.isRequired,
  cardImage: PropTypes.string.isRequired,
  cardRare: PropTypes.string.isRequired,
  cardTrunfo: PropTypes.bool.isRequired,
  hasTrunfo: PropTypes.bool.isRequired,
  isSaveButtonDisabled: PropTypes.bool.isRequired,
  onInputChange: PropTypes.func.isRequired,
  onSaveButtonClick: PropTypes.func.isRequired,
};

export default Form;
