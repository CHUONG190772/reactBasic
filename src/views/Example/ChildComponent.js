import React from "react";
// class ChildComponent extends React.Component {
//   render() {
//     console.log(">>> check props: ", this.props);
//     // let name = "ACAX";
//     // return <div>Hello My Component</div>;
//     // let name = this.props.name;
//     // let age = this.props.name;
//     let { name, age, address, arrayJob } = this.props;
//     let a = "";
//     return (
//       <>
//         <div className="jobs-list">
//           {
//             (a = arrayJob.map((item, index) => {
//               return (
//                 <div key={item.id}>
//                   {item.title} - {item.salary}
//                 </div>
//               );
//             }))
//           }
//           {console.log("check map array: ", a)}
//         </div>
//       </>
//     );
//   }
// }
const ChildComponent = () => {
  return <div>Hele</div>;
};

export default ChildComponent;
