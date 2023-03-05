import { ChevronDown, ChevronUp } from "../icons";

function CartItem({ id, img, title, price, amount}) {
  return (
    <article className="cart-item">
        <img src={img} alt={title} />
        <div>
            <h4>{title}</h4>
            <h5 className="item-price">${price}</h5>
            <button className="remove-btn">remove</button>
        </div>
        <div>
            <button className="amount-btn">
                <ChevronDown />
            </button>
            <p className="item-amount">{amount}</p>
            <button className="amount-btn">
                <ChevronUp />
            </button>
        </div>
    </article>
  );
};

export default CartItem;