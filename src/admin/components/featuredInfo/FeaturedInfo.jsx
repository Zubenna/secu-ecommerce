// import './featuredInfo.css';
// import { ArrowDownward, ArrowUpward } from '@material-ui/icons';
// import { useEffect, useState } from 'react';
// import { userRequest } from '../../../apiCalls/productApi';

// export default function FeaturedInfo() {
//   const [income, setIncome] = useState([]);
//   const [percent, setPercent] = useState([]);
//   let res = [
//     { _id: 8, total: 150 },
//     { _id: 9, total: 200 },
//   ];

//   useEffect(() => {
//     const getIncome = async () => {
//       try {
//         // const resp = await userRequest.get('order/monthlyIncome');
//         setIncome(res);
//         setPercent((res[1].total * 100) / res[0].total - 100);
//       } catch {}
//     };
//     getIncome();
//   }, []);

//   console.log(income);

//   return (
//     <div className="featured">
//       <div className="featuredItem">
//         <span className="featuredTitle">Revanue</span>
//         <div className="featuredMoneyContainer">
//           <span className="featuredMoney">${income[1]?.total}</span>
//           <span className="featuredMoneyRate">
//             %{Math.floor(percent)}
//             {''}
//             {percent < 0 ? (
//               <ArrowDownward className="featuredIcon negative" />
//             ) : (
//               <ArrowUpward className="featuredIcon" />
//             )}
//           </span>
//         </div>
//         <span className="featuredSub">Compared to last month</span>
//       </div>
//       <div className="featuredItem">
//         <span className="featuredTitle">Sales</span>
//         <div className="featuredMoneyContainer">
//           <span className="featuredMoney">$4,415</span>
//           <span className="featuredMoneyRate">
//             -1.4 <ArrowDownward className="featuredIcon negative" />
//           </span>
//         </div>
//         <span className="featuredSub">Compared to last month</span>
//       </div>
//       <div className="featuredItem">
//         <span className="featuredTitle">Cost</span>
//         <div className="featuredMoneyContainer">
//           <span className="featuredMoney">$2,225</span>
//           <span className="featuredMoneyRate">
//             +2.4 <ArrowUpward className="featuredIcon" />
//           </span>
//         </div>
//         <span className="featuredSub">Compared to last month</span>
//       </div>
//     </div>
//   );
// }
