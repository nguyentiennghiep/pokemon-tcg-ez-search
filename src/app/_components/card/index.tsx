'use client';

import { useState } from 'react';
import Image from 'next/image';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTimes } from '@fortawesome/free-solid-svg-icons';
import { ClipLoader } from 'react-spinners'; // Import the loading spinner
import styles from './styles.module.css';
import { useRouter } from 'next/navigation';

interface CardProps {
  imageSrc: string;
  largeImageSrc: string;
  altText: string;
  cardName: string;
  series?: string; // Make series optional
  averageSellPrice: number;
  setName?: string; // Make setName optional
  marketUrl: string; // Add market URL prop
  setId?: string;
}

const Card: React.FC<CardProps> = ({
  imageSrc,
  largeImageSrc,
  altText,
  cardName,
  series,
  averageSellPrice,
  setName,
  marketUrl,
  setId
}) => {
  const [isOverlayVisible, setOverlayVisible] = useState(false);
  const [isLoading, setIsLoading] = useState(true); // State for loading spinner
  const router = useRouter()
  const handleImageClick = () => {
    setOverlayVisible(true);
    setIsLoading(true); // Show spinner when overlay is opened
  };

  const handleSetNameClick = (setId?:string ) => {
    if (setId) router.push(`/set/${encodeURIComponent(setId)}`);
  };

  const handleCloseOverlay = () => {
    setOverlayVisible(false);
  };

  const handleImageLoad = () => {
    setIsLoading(false); // Hide spinner when image has loaded
  };

  return (
    <div className={styles.card}>
      <div className={styles.imageWrapper} onClick={handleImageClick}>
        <Image src={imageSrc} alt={altText} width={220} height={308} />
      </div>
      <p className={styles.cardName}>{cardName}</p>
      {series && <p className={styles.series}>Series: {series}</p>}{' '}
      {/* Only show if series has value */}
      {setName && <p className={styles.setName} onClick={()=>handleSetNameClick(setId)}>Set: {setName}</p>}{' '}
      {/* Only show if setName has value */}
      <p className={styles.price}>
        <a href={marketUrl} target='_blank' rel='noopener noreferrer'>
          Average Sell Price: ${averageSellPrice?.toFixed(2)}
        </a>
      </p>
      {isOverlayVisible && (
        <div className={styles.overlay} onClick={handleCloseOverlay}>
          <div
            className={styles.overlayContent}
            onClick={(e) => e.stopPropagation()}
          >
            {isLoading && (
              <div className={styles.spinner}>
                <ClipLoader size={50} color={'#123ABC'} loading={isLoading} />
              </div>
            )}
            <Image
              src={largeImageSrc}
              alt={altText}
              width={490}
              height={684}
              onLoad={handleImageLoad}
            />
            <button className={styles.closeButton} onClick={handleCloseOverlay}>
              <FontAwesomeIcon icon={faTimes} />
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default Card;
