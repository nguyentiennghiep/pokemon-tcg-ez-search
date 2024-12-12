import React from 'react';
import { Card as PokemonCard } from '../../../types/types';
import Card from '../../card';
import styles from './styles.module.css'; // Import CSS module

interface HighestPricedCardsProps {
  highestPricedCards: PokemonCard[];
}

const HighestPricedCards: React.FC<HighestPricedCardsProps> = ({
  highestPricedCards,
}) => {
  return (
    <section className={styles.highestPricedCards}>
      <h2>10 Highest Priced Cards</h2>
      <div className={styles.cardGrid}>
        {highestPricedCards.map((card) => (
          <Card
            key={card.id}
            imageSrc={card.images.small}
            largeImageSrc={card.images.large}
            altText={card.name}
            cardName={card.name}
            series={card.set.series} // Pass series prop
            setName={card.set.name} // Pass setName prop
            averageSellPrice={card.cardmarket.prices.averageSellPrice}
            marketUrl={card.cardmarket.url} // Pass market URL prop
          />
        ))}
      </div>
    </section>
  );
};

export default HighestPricedCards;
