import './productDetails.css';
import { DataGrid } from '@material-ui/data-grid';
import { useLocation } from 'react-router-dom';
import { useSelector } from 'react-redux';
import Navbar from '../../../components/Navbar';
import Sidebar from '../../components/sidebar/Sidebar';
import SearchBox from '../../../components/SearchBox';
import Footer from '../../../components/Footer';

export default function ProductDetails() {
  const location = useLocation();
  const orderId = location.pathname.split('/')[2];
  const perOrder = useSelector((state) =>
    state.order.orders.find((order) => order._id === orderId)
  );
  const userOrder = perOrder.products;

  const columns = [
    {
      field: 'itemQuantity',
      headerName: 'Quantity',
      width: 140,
    },
    {
      field: 'name',
      headerName: 'Product Name',
      width: 200,
    },
    { field: 'price', headerName: 'Unit Price', width: 150 },
    {
      field: 'category',
      headerName: 'Category',
      width: 160,
    },
    { field: 'brand', headerName: 'Brand', width: 120 },

    {
      field: 'modelNo',
      headerName: 'Model No',
      width: 120,
    },

    {
      field: 'skuNo',
      headerName: 'SKU No',
      width: 120,
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
          <DataGrid
            rows={userOrder}
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
