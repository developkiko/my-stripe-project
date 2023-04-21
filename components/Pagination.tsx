import React from 'react';
import styles from '../styles/Pagination.module.css';

interface Props {
    currentPage: number;
    totalPages: number;
    setCurrentPage: (page: number) => void;
}

const Pagination: React.FC<Props> = ({ currentPage, totalPages, setCurrentPage }) => {

    const getPageButtons = () => {
        const pageButtons: JSX.Element[] = [];

        for (let i = 1; i <= totalPages; i++) {
            const isCurrentPage = i === currentPage;
            pageButtons.push(
                <button
                    key={i}
                    className={isCurrentPage ? styles.active : styles.inactive}
                    onClick={() => setCurrentPage(i)}
                >
                    {i}
                </button>
            );
        }
        return pageButtons;
    };

    return <nav className={styles.pagination}> {getPageButtons().map((button) => button)} </nav>;
};

export default Pagination;
