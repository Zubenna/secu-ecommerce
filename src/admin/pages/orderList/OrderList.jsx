import './orderList.css';
import { DataGrid } from '@material-ui/data-grid';
// import { DeleteOutline } from '@material-ui/icons';
import { Link } from 'react-router-dom';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getOrders } from '../../../redux/apiCalls';
import Navbar from '../../../components/Navbar';
import Sidebar from '../../components/sidebar/Sidebar';
import SearchBox from '../../../components/SearchBox';
import Footer from '../../../components/Footer';
import { useNavigate } from 'react-router-dom';
// import { format } from 'timeago.js';

export default function OrderList() {
  //   const navigate = useNavigate();
  //   const message = useSelector((state) => state.order.message);
  const dispatch = useDispatch();
  const orders = useSelector((state) => state.order.orders);

  useEffect(() => {
    getOrders(dispatch);
  }, [dispatch]);

  //   const handleDelete = (id) => {
  //     deleteItem(id, dispatch);
  //     message === 'Product deleted successfully' && navigate('/admin');
  //     console.log(message);
  //   };

  const columns = [
    {
      field: 'createdAt',
      headerName: 'Date',
      width: 140,
    },
    {
      field: 'userName',
      headerName: 'Customer Name',
      width: 200,
    },
    { field: 'address', headerName: 'Address', width: 200 },
    {
      field: 'amount',
      headerName: 'Amount',
      width: 120,
    },
    { field: 'isPaid', headerName: 'IsPaid', width: 120 },

    {
      field: 'products',
      headerName: 'Product',
      width: 220,
      renderCell: (params) => {
        return (
          <>
            <Link to={'/prodetail/' + params.row._id}>
              <button className="productListView">See Details</button>
            </Link>
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
          <DataGrid
            rows={orders}
            disableSelectionOnClick
            columns={columns}
            getRowId={(row) => row._id}
            pageSize={10}
            checkboxSelection
          />
          {/* <div>
            {orders.map((main) => (
              <div>
                <span>{main.createdAt}</span>
                <span>{main.userName}</span>
                <span>{main.amount}</span>
                <span>{main.address}</span>
                <span>{main.isPaid}</span>
                <span>{main.address}</span>
                <ul>
                  {main.products.map((sub) => (
                    <li>
                      <li>{sub.itemQuantity}</li>
                      <li>{sub.name}</li>
                      <li>{sub.price}</li>
                      <li>{sub.category}</li>
                      <li>{sub.brand}</li>
                      <li>{sub.modelNo}</li>
                      <li>{sub.skuNo}</li>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div> */}
        </div>
      </div>
      <SearchBox />
      <Footer />
    </div>
  );
}
