import React from 'react';
import { CardProps } from 'type';

export class Card extends React.Component<{ card: CardProps }> {
  render() {
    return (
      <div className="card" data-testid="card-item">
        <img className="card__image" src={this.props.card.img} alt="" />
        <div className="card__content">
          <span className="card__title">{this.props.card.title}</span>
          <span className="card__price">${this.props.card.price}</span>
          <span className="card__author">{this.props.card.author}</span>
          <ul className="card__genres">
            {this.props.card.genres.map((item) => (
              <li key={item} className="card__genre">
                {item}
              </li>
            ))}
          </ul>
        </div>
      </div>
    );
  }
}
