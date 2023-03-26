import React from 'react';
import { UserCardProps } from 'type';

export class UserCard extends React.Component<{ card: UserCardProps }> {
  render() {
    return (
      <div className="card" data-testid="user-card-item">
        <img className="card__image" src={this.props.card.img} alt="" />
        <div className="card__content">
          <span className="card__title">{this.props.card.fullname}</span>
          <span className="card__price">{this.props.card.birthday}</span>
          <span className="card__price">{this.props.card.gender}</span>
          <span className="card__author">{this.props.card.address}</span>
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
