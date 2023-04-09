import React, { useState } from 'react';
import { CardType } from '../../type';
import { Modal } from '../ui/Modal';
import { ModalCharacter } from './ModalCharacter';

interface CardProps {
  card: CardType;
}
export const Card = ({ card }: CardProps) => {
  const [isModalVisible, setIsModalVisible] = useState(false);

  return (
    <>
      <div className="card" data-testid="card-item" onClick={() => setIsModalVisible(true)}>
        <img className="card__image" src={card.image} alt="" />
        <div className="card__content">
          <span className="card__title">{card.name}</span>
          <span className="card__price">{card.gender}</span>
          <span className="card__author">{card.location.name}</span>
        </div>
      </div>
      {isModalVisible && (
        <Modal onClick={setIsModalVisible}>
          <ModalCharacter id={card.id} />
        </Modal>
      )}
    </>
  );
};
