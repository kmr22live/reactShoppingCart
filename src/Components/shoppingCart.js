export default function ShoppingCart({ shoppingCart, removeCart }) {
  let totalPrice = 0;
  shoppingCart.forEach((d) => {
    totalPrice += +parseInt(d[2].slice(1));
  });
  return (
    <div
      className="modal fade"
      id="staticBackdrop"
      data-bs-backdrop="static"
      data-bs-keyboard="false"
      aria-labelledby="staticBackdropLabel"
      aria-hidden="true"
    >
      <div className="modal-dialog">
        <div className="modal-content">
          <div className="modal-header">
            <h1 className="modal-title fs-5" id="staticBackdropLabel">
              Shopping Cart
            </h1>
            <button
              type="button"
              className="btn-close"
              data-bs-dismiss="modal"
              aria-label="Close"
            ></button>
          </div>
          <div className="modal-body">
            <div id="w">
              <div id="page">
                {shoppingCart.length > 0 ? (
                  <table
                    id="cart"
                    className="table table-striped-columns text-center"
                  >
                    <thead>
                      <tr>
                        <th className="second">Qty</th>
                        <th className="third">Product</th>
                        <th className="fourth">Amount</th>
                        <th className="fifth">Remove</th>
                      </tr>
                    </thead>
                    <tbody>
                      {shoppingCart.map((data, i) => (
                        <tr className="productitm" key={i + 300}>
                          <td>1</td>
                          <td>{data[1]}</td>
                          <td>{data[2]}</td>
                          <td>
                            <button
                              className="btn btn-danger"
                              onClick={() => {
                                removeCart(data[0]);
                              }}
                            >
                              <i className="bi bi-trash-fill"></i>
                            </button>
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                ) : (
                  "Your cart is empty"
                )}
                {shoppingCart.length > 0 && (
                  <div className="text-end me-2">
                    Total Price :${totalPrice}.00
                  </div>
                )}
              </div>
            </div>
          </div>
          <div className="modal-footer">
            <button
              type="button"
              className="btn btn-secondary"
              data-bs-dismiss="modal"
            >
              Close
            </button>
            {shoppingCart.length > 0 && (
              <button type="button" className="btn btn-primary">
                Checkout
              </button>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
