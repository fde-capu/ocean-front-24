export default function Card(props) {
    const item = props.item;
    return (
        <div class="card">
        <h2>{item.name}</h2>
        <tag>fool</tag>
        <tag>scientist</tag>
        <tag>burps a lot</tag>
        <img src={item.image} />
        </div>
    )
}