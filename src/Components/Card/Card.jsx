export default function Card(props) {
    const item = props.item;
    return (
        <div className="card">
        <h2>{item.name}</h2>
        <div className="tag">fool</div>
        <div className="tag">scientist</div>
        <div className="tag">burps a lot</div>
        <img src={item.image} />
        </div>
    )
}