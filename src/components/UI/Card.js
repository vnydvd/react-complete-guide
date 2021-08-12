import './Card.css';

// composition.
// card component is abstracting common styling properties for multiple time usage
const Card = (props) => {
    const classes = 'card '+ props.className;
    return <div className={classes}>{props.children}</div>;
}

export default Card;