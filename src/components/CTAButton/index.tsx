import styles from './styles.module.scss';
import React from 'react';

interface CTAButtonProps {
    telegramHandle: string;
    label?: string;
}

const CTAButton: React.FC<CTAButtonProps> = ({ telegramHandle, label = 'Get Started' }) => {
    const telegramURL = `https://t.me/${telegramHandle}`;

    return (
        <a href={telegramURL} target="_blank" rel="noopener noreferrer" className={styles.ctaButton}>
            {label}
        </a>
    );
};

export default CTAButton;

