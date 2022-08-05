import './productList.css';
import { DataGrid } from '@material-ui/data-grid';
import { DeleteOutline } from '@material-ui/icons';
import { Link } from 'react-router-dom';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getItems, deleteItem } from '../../../redux/apiCalls';
import Navbar from '../../../components/Navbar';
import Sidebar from '../../components/sidebar/Sidebar';
import SearchBox from '../../../components/SearchBox';
import Footer from '../../../components/Footer';
import { useNavigate } from 'react-router-dom';

export default function ProductList() {
  const navigate = useNavigate();
  const message = useSelector((state) => state.product.message);
  const dispatch = useDispatch();
  const products = useSelector((state) => state.product.items);

  useEffect(() => {
    getItems(dispatch);
  }, [dispatch]);

  const handleDelete = (id) => {
    deleteItem(id, dispatch);
    message === 'Product deleted successfully' && navigate('/admin');
    console.log(message);
  };

  const columns = [
    {
      field: 'product',
      headerName: 'Product',
      width: 200,
      renderCell: (params) => {
        return (
          <div className="productListItem">
            <img
              className="productListImg"
              src={params.row.image}
              alt={params.row.name}
            />
            {params.row.name}
          </div>
        );
      },
    },
    { field: 'countInStock', headerName: 'Stock', width: 120 },
    {
      field: 'category',
      headerName: 'Category',
      width: 160,
    },
    { field: 'subCategory', headerName: 'Sub Category', width: 200 },
    {
      field: 'price',
      headerName: 'Price',
      width: 120,
    },
    {
      field: 'action',
      headerName: 'Action',
      width: 220,
      renderCell: (params) => {
        return (
          <>
            <Link to={'/product/' + params.row._id}>
              <button className="productListView">View</button>
            </Link>
            <Link to={'/updateprod/' + params.row._id}>
              <button className="productListEdit">Edit</button>
            </Link>
            <DeleteOutline
              className="productListDelete"
              onClick={() => handleDelete(params.row._id)}
            />
          </>
        );
      },
    },
  ];

  return (
    <div>
      <Navbar />
      <div className="productBox">
        <div className="sideGrid">
          <Sidebar />
        </div>
        <div className="productGrid">
          <div className="centerNewProduct">
            <Link to="/NewProduct">
              <button className="setNewProduct">New Product</button>
            </Link>
          </div>
          <DataGrid
            rows={products}
            disableSelectionOnClick
            columns={columns}
            getRowId={(row) => row._id}
            pageSize={10}
            checkboxSelection
          />
        </div>
      </div>
      <SearchBox />
      <Footer />
    </div>
  );
}
