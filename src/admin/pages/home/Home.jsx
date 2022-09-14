import Chart from '../../components/chart/Chart';
// import FeaturedInfo from '../../components/featuredInfo/FeaturedInfo';
import './home.css';
// import { userData } from '../../dummyData';
import WidgetSm from '../../components/widgetSm/WidgetSm';
import WidgetLg from '../../components/widgetLg/WidgetLg';
import Navbar from '../../../components/Navbar';
import SearchBox from '../../../components/SearchBox';
import Footer from '../../../components/Footer';
import Sidebar from '../../components/sidebar/Sidebar';
import Topbar from '../../components/topbar/Topbar';
import { useEffect, useMemo, useState } from 'react';
import axios from 'axios';
// import { userRequest } from '../../../apiCalls/productApi';

export default function Home() {
  const [userStats, setUserStats] = useState([]);
  const MONTHS = useMemo(
    () => [
      'Jan',
      'Feb',
      'Mar',
      'Apr',
      'May',
      'Jun',
      'Jul',
      'Agu',
      'Sep',
      'Oct',
      'Nov',
      'Dec',
    ],
    []
  );
  useEffect(() => {
    const getStats = async () => {
      try {
        const res = await axios.get('users/getStats');
        res.data.map((item) =>
          setUserStats((prev) => [
            ...prev,
            { name: MONTHS[item._id - 1], 'Active User': item.total },
          ])
        );
      } catch {}
    };
    getStats();
  }, [MONTHS]);
  return (
    <div>
      <Navbar />
      <Topbar />
      <div className="adminBox">
        <Sidebar />
        <div className="home">
          {/* <FeaturedInfo /> */}
          <Chart
            data={userStats}
            title="User Analytics"
            grid
            dataKey="Active User"
          />
          <div className="homeWidgets">
            <WidgetSm />
            <WidgetLg />
          </div>
        </div>
      </div>
      <SearchBox />
      <Footer />
    </div>
  );
}
