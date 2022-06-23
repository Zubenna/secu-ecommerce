import './userList.css';
import { DataGrid } from '@material-ui/data-grid';
import { DeleteOutline } from '@material-ui/icons';
// import { userRows } from '../../dummyData';
import { Link } from 'react-router-dom';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import Navbar from '../../../components/Navbar';
import Sidebar from '../../components/sidebar/Sidebar';
import SearchBox from '../../../components/SearchBox';
import Footer from '../../../components/Footer';
import { getUsers, deleteUser } from '../../../redux/apiCalls';
// import { userRequest } from '../../../apiCalls/productApi';

export default function UserList() {
  // const [data, setData] = useState(userRows);
  const dispatch = useDispatch();
  const allUsers = useSelector((state) => state.user.users);

  useEffect(() => {
    getUsers(dispatch);
  }, [dispatch]);

  const handleDelete = (id) => {
    deleteUser(id, dispatch);
  };

  const columns = [
    {
      field: 'user',
      headerName: 'User',
      width: 150,
      renderCell: (params) => {
        return (
          <div className="productListItem">
            {params.row.first_name} {params.row.last_name}
          </div>
        );
      },
    },

    { field: 'email', headerName: 'Email', width: 150 },
    {
      field: 'phone_number',
      headerName: 'Phone',
      width: 130,
    },
    {
      field: 'address',
      headerName: 'Address',
      width: 290,
    },
    {
      field: 'isAdmin',
      headerName: 'isAdmin',
      width: 130,
    },
    {
      field: 'action',
      headerName: 'Action',
      width: 150,
      renderCell: (params) => {
        return (
          <>
            <Link to={'/updateuser/' + params.row._id}>
              <button className="userListEdit">Edit</button>
            </Link>
            <DeleteOutline
              className="userListDelete"
              onClick={() => handleDelete(params.row._id)}
            />
          </>
        );
      },
    },
  ];

  return (
    <div className="userList">
      <Navbar />
      <div className="userBox">
        <div className="sideBar">
          <Sidebar />
        </div>
        <div className="userList">
          <DataGrid
            rows={allUsers}
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
