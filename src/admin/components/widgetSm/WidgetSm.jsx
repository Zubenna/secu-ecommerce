import './widgetSm.css';
import { Visibility } from '@material-ui/icons';
import { useState, useEffect } from 'react';
import axios from 'axios';
// import { userRequest } from '../../../apiCalls/productApi';

export default function WidgetSm() {
  const [users, setUsers] = useState([]);
  useEffect(() => {
    const getUsers = async () => {
      try {
        const res = await axios.get('users/getAll');
        setUsers(res.data);
      } catch {}
    };
    getUsers();
  }, []);
  return (
    <div className="widgetSm">
      <span className="widgetSmTitle">Customers List</span>
      <ul className="widgetSmList">
        {users.map((user) => (
          <li key={user._id} className="widgetSmListItem">
            <div className="widgetSmUser">
              <span className="widgetSmUsername">
                {user.first_name + ' ' + user.last_name}
              </span>
              <span className="widgetSmUserTitle">{user.email}</span>
            </div>
            <button className="widgetSmButton">
              <Visibility className="widgetSmIcon" />
              Display
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
}
