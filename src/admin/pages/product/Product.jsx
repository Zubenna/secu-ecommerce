import { Link, useLocation } from 'react-router-dom';
import './product.css';
// import Chart from '../../components/chart/Chart';
// import { productData } from '../../dummyData';
// import { Publish } from '@material-ui/icons';
import Navbar from '../../../components/Navbar';
import Sidebar from '../../components/sidebar/Sidebar';
import SearchBox from '../../../components/SearchBox';
import Footer from '../../../components/Footer';
import { useSelector } from 'react-redux';

export default function Product() {
  const location = useLocation();
  const productId = location.pathname.split('/')[2];
  const product = useSelector((state) =>
    state.product.items.find((product) => product._id === productId)
  );
  return (
    <div>
      <div>
        <Navbar />
        <div className="productBox">
          <div className="sideGrid">
            <Sidebar />
          </div>
          <div className="product">
            <div className="productTitleContainer">
              <h1>Product</h1>
              <Link to="/newproduct">
                <button className="productAddButton">Create</button>
              </Link>
            </div>
            <div className="productTop">
              <div className="productInfoTop">
                <img
                  src={product.image}
                  alt={product.name}
                  className="productInfoImg"
                />
              </div>
              <div className="productTopRight">
                <div className="productInfoBottom">
                  <div className="productInfoItem">
                    <span className="productInfoKey">ID: </span>
                    <span className="productInfoValue">{product._id}</span>
                  </div>
                  <div className="productInfoItem">
                    <span className="productInfoKey">Name:</span>
                    <span className="productInfoValue">{product.name}</span>
                  </div>
                  <div className="productInfoItem">
                    <span className="productInfoKey">Description:</span>
                    <span className="productInfoValue">
                      {product.description}
                    </span>
                  </div>
                  <div className="productInfoItem">
                    <span className="productInfoKey">Price:</span>
                    <span className="productInfoValue">{product.price}</span>
                  </div>
                  <div className="productInfoItem">
                    <span className="productInfoKey">Category:</span>
                    <span className="productInfoValue">{product.category}</span>
                  </div>
                  <div className="productInfoItem">
                    <span className="productInfoKey">Sub Category:</span>
                    <span className="productInfoValue">
                      {product.subCategory}
                    </span>
                  </div>
                  <div className="productInfoItem">
                    <span className="productInfoKey">In stock:</span>
                    <span className="productInfoValue">
                      {product.countInStock}
                    </span>
                  </div>
                  <div className="productInfoItem">
                    <span className="productInfoKey">Brand:</span>
                    <span className="productInfoValue">{product.brand}</span>
                  </div>
                  <div className="productInfoItem">
                    <span className="productInfoKey">Model No:</span>
                    <span className="productInfoValue">{product.modelNo}</span>
                  </div>
                  <div className="productInfoItem">
                    <span className="productInfoKey">SKU No:</span>
                    <span className="productInfoValue">{product.skuNo}</span>
                  </div>
                  <div className="productInfoItem">
                    <span className="productInfoKey">Type:</span>
                    <span className="productInfoValue">{product.type}</span>
                  </div>
                  <div className="productInfoItem">
                    <span className="productInfoKey">Rating:</span>
                    <span className="productInfoValue">{product.rating}</span>
                  </div>
                </div>
              </div>
            </div>
            {/* <div className="productBottom">
              <form className="productForm">
                <div className="productFormLeft">
                  <label>Product Name</label>
                  <input type="text" placeholder={product.name} />
                  <label>Product Description</label>
                  <input type="text" placeholder={product.description} />
                  <label>Price</label>
                  <input type="number" placeholder={product.price} />
                  <label>In Stock</label>
                  <input type="number" placeholder={product.countInStock} />
                  <label>Category</label>
                  <input type="text" placeholder={product.category} />
                  <label>Sub Category</label>
                  <input type="text" placeholder={product.subCategory} />
                  <label>Brand</label>
                  <input type="text" placeholder={product.brand} />
                  <label>Model No</label>
                  <input type="text" placeholder={product.modelNo} />
                  <label>SKU No</label>
                  <input type="text" placeholder={product.skuNo} />
                  <label>Type</label>
                  <input type="text" placeholder={product.type} />
                  <label>Rating</label>
                  <input type="number" placeholder={product.rating} />
                </div>
                <div className="productFormRight">
                  <div className="productUpload">
                    <img
                      src="https://images.pexels.com/photos/7156886/pexels-photo-7156886.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500"
                      alt=""
                      className="productUploadImg"
                    />
                    <label for="file">
                      <Publish />
                    </label>
                    <input type="file" id="file" style={{ display: 'none' }} />
                  </div>
                  <button className="productButton">Update</button>
                </div>
              </form>
            </div> */}
          </div>
        </div>
        <SearchBox />
        <Footer />
      </div>
    </div>
  );
}
