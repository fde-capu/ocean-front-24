import { Link } from "react-router-dom";

export default function Card(props) {
    const item = props.item;
    return (
        <Link to={`/item/${item.id}`}>
            <div className="card">
                <h2>{item.name}</h2>
                <div className="tag">fool</div>
                <div className="tag">scientist</div>
                <div className="tag">burps a lot</div>
                <img src={item.image} />
            </div>
        </Link>
    )
}