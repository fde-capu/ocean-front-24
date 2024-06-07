export default function Card(props) {
    const item = props.item;
    return (
        <div className="card">
        <h2>{item.name}</h2>
        <div class="tag">fool</div>
        <div class="tag">scientist</div>
        <div class="tag">burps a lot</div>
        <img src={item.image} />
        </div>
    )
}