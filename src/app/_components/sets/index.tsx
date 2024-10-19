'use client';

import Image from 'next/image';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowRight } from '@fortawesome/free-solid-svg-icons';
import styles from './styles.module.css';

interface SetsProps {
  id: string;
  name: string;
  series: string;
  releaseDate: string;
  logo: string;
  onClick: (setId: string) => void; // Add onClick prop
  showLink?: boolean; // Add showLink prop
}

const Sets: React.FC<SetsProps> = ({
  id,
  name,
  series,
  releaseDate,
  logo,
  onClick,
  showLink = true,
}) => {
  return (
    <div className={styles.setContainer}>
      <div className={styles.set} onClick={() => onClick(id)}>
        <Image src={logo} alt={`${name} logo`} width={256} height={92} />
        <h3>{name}</h3>
        <p>Series: {series}</p>
        <p>Release Date: {releaseDate}</p>
      </div>
      {showLink && (
        <a href={`/set/${id}`} className={styles.link}>
          View Set Details
          <FontAwesomeIcon icon={faArrowRight} className={styles.linkIcon} />
        </a>
      )}
    </div>
  );
};

export default Sets;
