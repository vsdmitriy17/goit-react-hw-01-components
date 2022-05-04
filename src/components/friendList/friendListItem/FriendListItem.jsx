import PropTypes from 'prop-types';
// import s from './FriendListItem.module.css';

export default function FriendListItem({ avatar, name, isOnline }) {
    return (
        <li className="item">
            <img className="avatar" src={avatar} alt="User avatar" width="48" />
            <p className="name">{name}</p>
            {isOnline && <span className="status"> online</span>}
        </li>
    );
}

FriendListItem.propTypes = {
    avatar: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    isOnline: PropTypes.bool.isRequired,
}