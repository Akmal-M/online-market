import Link from 'next/link'
import { decrease, increase } from '../store/Actions'
import {FaTrash} from "react-icons/fa";

const CartItem = ({item, dispatch, cart}) => {
    return (
        <tr>
            <td style={{width: '100px', overflow: 'hidden'}}>
                <img src={item.images[0].url} alt={item.images[0].url}
                     className="img-thumbnail w-full"
                     style={{minWidth: '80px', height: '80px'}} />
            </td>

            <td style={{minWidth: '200px'}} className="" >
                <h5 className="capitalize">
                    <Link href={`/product/${item._id}`}>
                        <a>{item.title}</a>
                    </Link>
                </h5>

                <h6 className="text-red-500">${item.quantity * item.price}</h6>
                {
                    item.inStock > 0
                        ? <p className="mb-1 text-red-500">In Stock: {item.inStock}</p>
                        : <p className="mb-1 text-red-500">Out Stock</p>
                }
            </td>

            <td className="" style={{minWidth: '150px'}}>
                <button className=""
                        onClick={ () => dispatch(decrease(cart, item._id)) }
                        disabled={item.quantity === 1} > - </button>

                <span className="px-3">{item.quantity}</span>

                <button className=""
                        onClick={ () => dispatch(increase(cart, item._id)) }
                        disabled={item.quantity === item.inStock} > + </button>
            </td>

            <td className="" style={{minWidth: '50px', cursor: 'pointer'}}>
                <FaTrash aria-hidden="true"
                   style={{fontSize: '18px'}} data-toggle="modal" data-target="#exampleModal"
                   onClick={() => dispatch({
                       type: 'ADD_MODAL',
                       payload: [{ data: cart, id: item._id, title: item.title, type: 'ADD_CART' }]
                   })} />
            </td>
        </tr>
    )
}

export default CartItem