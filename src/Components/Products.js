import productData from "../card.json";
export default function Products({ updateBtn }) {
  return (
    <>
      <section className="py-5">
        <div className="container px-4 px-lg-5 mt-5">
          <div className="row gx-4 gx-lg-5 row-cols-2 row-cols-md-3 row-cols-xl-4 justify-content-center">
            {productData.map((data, i) => {
              return (
                <div className="col mb-5" id={i} key={i + 20}>
                  <div className="card h-100">
                    {data.sale && (
                      <div
                        className="badge bg-dark text-white position-absolute"
                        style={{ top: "0.5rem", right: "0.5rem" }}
                      >
                        Sale
                      </div>
                    )}
                    <img
                      className="card-img-top"
                      src="https://dummyimage.com/450x300/dee2e6/6c757d.jpg"
                      alt="..."
                    />

                    <div className="card-body p-4">
                      <div className="text-center">
                        <h5 className="fw-bolder">{data.productName}</h5>
                        {data.star > 0 && (
                          <div className="d-flex justify-content-center small text-warning mb-2">
                            {Array(data.star)
                              .fill(0)
                              .map((star, i) => {
                                return (
                                  <div
                                    className="bi-star-fill"
                                    id={i}
                                    key={i + 100}
                                  ></div>
                                );
                              })}
                          </div>
                        )}
                        {data.discount && (
                          <span className="text-muted text-decoration-line-through">
                            {data.pPrice}
                          </span>
                        )}
                        {data.nPrice}
                      </div>
                    </div>

                    <div className="card-footer p-4 pt-0 border-top-0 bg-transparent">
                      <div className="text-center">
                        {data.productName !== "Fancy Product" ? (
                          <button
                            disabled={data.btnShow}
                            className="btn btn-outline-dark mt-auto"
                            id={i}
                            onClick={() => {
                              updateBtn(i, data.productName, data.nPrice);
                            }}
                          >
                            {data.btnName}
                          </button>
                        ) : (
                          <button
                            disabled={data.btnShow}
                            className="btn btn-outline-dark mt-auto"
                            id={i}
                            onClick={() => {
                              alert("Fancy Product's are Not available");
                            }}
                          >
                            {data.btnName}
                          </button>
                        )}
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>
    </>
  );
}
