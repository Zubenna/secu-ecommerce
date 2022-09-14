// import { Publish } from '@material-ui/icons';
import { useState } from 'react';
import Footer from '../../../components/Footer';
import Navbar from '../../../components/Navbar';
import SearchBox from '../../../components/SearchBox';
import Sidebar from '../../components/sidebar/Sidebar';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import {
  getStorage,
  ref,
  uploadBytesResumable,
  getDownloadURL,
} from 'firebase/storage';
import './newProduct.css';
import app from '../../../firebase';
import { addItem } from '../../../redux/apiCalls';

export default function NewProduct() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const message = useSelector((state) => state.product.message.msg);
  const [inputs, setInputs] = useState({});
  const [file, setFile] = useState(null);

  const handleChange = (e) => {
    setInputs((prev) => {
      return { ...prev, [e.target.name]: e.target.value };
    });
  };

  const handleClick = (e) => {
    e.preventDefault();
    const fileName = new Date().getTime() + file.name;
    const storage = getStorage(app);
    const storageRef = ref(storage, fileName);
    const uploadTask = uploadBytesResumable(storageRef, file);
    // Register three observers:
    // 1. 'state_changed' observer, called any time the state changes
    // 2. Error observer, called on failure
    // 3. Completion observer, called on successful completion
    uploadTask.on(
      'state_changed',
      (snapshot) => {
        // Observe state change events such as progress, pause, and resume
        // Get task progress, including the number of bytes uploaded and the total number of bytes to be uploaded
        const progress =
          (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
        console.log('Upload is ' + progress + '% done');
        switch (snapshot.state) {
          case 'paused':
            console.log('Upload is paused');
            break;
          case 'running':
            console.log('Upload is running');
            break;
          default:
        }
      },
      (error) => {
        // Handle unsuccessful uploads
      },
      () => {
        // Handle successful uploads on complete
        // For instance, get the download URL: https://firebasestorage.googleapis.com/...
        getDownloadURL(uploadTask.snapshot.ref).then((downloadURL) => {
          const product = { ...inputs, image: downloadURL };
          console.log(product);
          addItem(product, dispatch);
          message === 'Product created successfully' && navigate('/prolist');
        });
      }
    );
  };
  return (
    <div>
      <Navbar />
      <div className="newProductBox">
        <div className="sideGrid">
          <Sidebar />
        </div>
        <div className="newProduct">
          <h1 className="addProductTitle">New Product</h1>
          <form className="addProductForm">
            <div className="productFormMain">
              <div className="imgBox">
                <label>Upload Product Image</label>

                {
                  <input
                    type="file"
                    id="file"
                    onChange={(e) => setFile(e.target.files[0])}
                  />
                }
                {/* <div className="uploadBtn">
                  <label htmlFor="file">
                    <Publish />
                  </label>
                  <input
                    type="file"
                    name="image"
                    id="file"
                    onChange={(e) => setFile(e.target.files[0])}
                    style={{ display: 'none' }}
                  />
                </div> */}
              </div>
              <label>Product Name</label>
              <input
                type="text"
                name="name"
                placeholder="name"
                onChange={handleChange}
              />
              <label>Product Description</label>
              <input
                type="text"
                name="description"
                placeholder="description"
                onChange={handleChange}
              />
              <label>Price</label>
              <input
                type="number"
                name="price"
                placeholder="price"
                onChange={handleChange}
              />
              <label>In Stock</label>
              <input
                type="number"
                name="countInStock"
                placeholder="quantity"
                onChange={handleChange}
              />
              <label>Category</label>
              <input
                type="text"
                name="category"
                onChange={handleChange}
                placeholder="category"
              />
              <label>Sub Category</label>
              <input
                type="text"
                name="subCategory"
                placeholder="sub category"
                onChange={handleChange}
              />
              <label>Brand</label>
              <input
                type="text"
                name="brand"
                placeholder="type"
                onChange={handleChange}
              />
              <label>Model No</label>
              <input
                type="text"
                name="modelNo"
                placeholder="model number"
                onChange={handleChange}
              />
              <label>SKU No</label>
              <input
                type="text"
                name="skuNo"
                placeholder="sku number"
                onChange={handleChange}
              />
              <label>Type</label>
              <input
                type="text"
                name="type"
                placeholder="product type"
                onChange={handleChange}
              />
              <label>Rating</label>
              <input
                type="number"
                name="rating"
                placeholder="rating"
                onChange={handleChange}
              />
            </div>
            <button onClick={handleClick} className="addProductButton">
              Create
            </button>
          </form>
        </div>
      </div>
      <SearchBox />
      <Footer />
    </div>
  );
}
