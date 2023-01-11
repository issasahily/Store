import "./List.css";
const List = ({ lists }) => {
  return (
    <div>
      <div>
        {lists.map((list) => (
          <div className="list-product" key={list.id}>
            <div>
              <img src={list.image} alt="product" className="img" />
            </div>
            <div>
              <h2>{list.title}</h2>
              <p className="price">${list.price}</p>
              <p>{list.description}</p>
              <p>{list.category}</p>
              <p>
                <strong>Rating:</strong>({list.rating.rate}),{" "}
                {list.rating.count}{" "}
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default List;
