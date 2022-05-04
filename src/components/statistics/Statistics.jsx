import PropTypes from 'prop-types';
// import s from './Statistics.module.css';
import randomBgColor from '../../randomBgColor/randomBgColor.js';

export default function Statistics({ title, data }) {
    return (
        <section className="statistics">
            {title && <h2 className="title">{title}</h2>}

            <ul className="list">
                {data.map(item => (
                    <li
                        className="item"
                        key={item.id}
                        style={{ backgroundColor: randomBgColor() }}
                    >
                        <span className="label">{item.label}</span>
                        <span className="percentage">{item.percentage}%</span>
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