export default function RowTableCart({item}){
    return(
        <tr>
            <th>{item.id}</th>
            <th>{item.name}</th>
            <th>{item.price}</th>
            <th>{item.quantity}</th>
        </tr>
    )
}