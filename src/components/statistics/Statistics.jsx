import PropTypes from 'prop-types';
import styles from './Statistics.module.css';
import randomBgColor from './randomBgColor/randomBgColor.js';

export default function Statistics({ title, data }) {
    return (
        <section className={styles.statistics}>
            {title && <h2 className={styles.title}>{title}</h2>}

            <ul className={styles.list}>
                {data.map(item => (
                    <li
                        className={styles.item}
                        key={item.id}
                        style={{ backgroundColor: randomBgColor() }}
                    >
                        <span className={styles.label}>{item.label}</span>
                        <span className={styles.percentage}>{item.percentage}%</span>
                    </li>
                ))}
            </ul>
        </section>
    );
}

Statistics.propTypes = {
    title: PropTypes.string,
    data: PropTypes.arrayOf(
        PropTypes.shape({
            id: PropTypes.string.isRequired,
            label: PropTypes.string.isRequired,
            percentage: PropTypes.number.isRequired,
        })
    ),
}