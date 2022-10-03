import './category.item.styles.scss';

const CategoryItem = (props) => {
  const { title, imageUrl } = props.category;
  return (
    <div className="category-container">
      <img
        className="background-image"
        style={{ backgroundImage: `url(${imageUrl})` }}
        alt=""
      />
      <div className="category-body-container">
        <h2>{title}</h2>
        <p>Shop Now</p>
      </div>
    </div>
  );
};

export default CategoryItem;
