import Item from "../Item/Item";

export default function ItemList({products}){


    return(
        <>
            {products.map((item)=>(
                <Item key={item.id} item={item} />
            ))}        
        
        </>

    )


}