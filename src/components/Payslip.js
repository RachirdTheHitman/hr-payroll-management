import React from "react";
import { Table, Button } from "semantic-ui-react";

const Payslip = ({ data, getDataFetch, postDataFetch }) => {
  const { firstname, lastname } = data;
  const titles = [
    "Pay Date",
    "Pay Frequency",
    "Annual Income",
    "Gross Income",
    "Income tax",
    "Net Income",
    "Super",
    "Pay"
  ];
  const splicedData = Object.values(data).splice(4, 8);
  for (let i = 2; i < splicedData.length; i++) {
    splicedData[i] = "$".concat(splicedData[i], ".00");
  }
  // console.log(splicedData);
  // console.log(data);

//   const getDataFetch = async () => {
//     const response =
//       await fetch("https://richard-nodeapi-test.herokuapp.com/users",
//         { headers: {'Content-Type': 'application/json'}}
//       )
//     console.log(await response.json())
// }

  return (
    <div>
      <h1>
        {firstname} {lastname}
      </h1>
      <Table color="purple" key="purple">
        <Table.Body>
          {/* {Object.keys(data).map((key, i) => ( */}
          {titles.map((title, i) => (
            <Table.Row key={i}>
              <Table.Cell>{title}</Table.Cell>
              <Table.Cell>{splicedData[i]}</Table.Cell>
            </Table.Row>
          ))}
        </Table.Body>
      </Table>
      <div id="pay-div">
        <Button onClick={postDataFetch} color="blue">Pay</Button>
      </div>
    </div>
  );
};

export default Payslip;

// class Payslip extends Component {
//   state = {
//     paydate: "",
//     payfreq: "",
//     annualIncome: "",
//     grossIncome: "",
//     incomeTax: "",
//     netIncome: "",
//     super: "",
//     pay: "",
//     superrate: ""
//   };

// calculatePayslip = () => {
//   const {annualsalary, superrate } = data;
//   this.setState({ annualIncome: annualsalary, superrate });

//   switch (annualIncome) {
//     case 0 <= annualIncome && annualIncome <= 18200:
//       this.setState({ grossIncome: Math.floow(annualIncome / 12) });
//       this.setState({ incomeTax: 0 });
//       this.setState({ netIncome: Math.floow(annualIncome / 12) });
//       this.setState({ super: Math.floow((annualIncome / 12) * 0.09) });
//       this.setState({
//         pay:
//           Math.floow(annualIncome / 12) -
//           Math.floow((annualIncome / 12) * 0.09)
//       });
//       console.log(this.state);
//       break;

//     case 18201 <= annualIncome && annualIncome <= 37000:
//       this.setState({ incomeTax: 0 });
//       break;

//     case 37001 <= annualIncome && annualIncome <= 80000:
//       this.setState({ incomeTax: 0 });
//       break;

//     case 80001 <= annualIncome && annualIncome <= 180000:
//       this.setState({ incomeTax: 0 });
//       break;

//     case 180001 <= annualIncome:
//       this.setState({ incomeTax: 0 });
//       break;

//     default:
//       break;
//   }

//   return;
// };

// render() {
// const { firstname, lastname, annualsalary, superrate } = this.props.data;
// const data = this.props.data;
// const { firstname, lastname, annualsalary, superrate } = data;
// this.calculatePayslip();

// console.log(this.props);
// console.log(moment().format("DD MMMM gggg"))
//{moment().format("DD MMMM gggg")}
//     return (
//       <div>
//         <h1>
//           {firstname} {lastname}
//         </h1>
//         <Table color="purple" key="purple">
//           <Table.Body>
//             {Object.keys(this.state).pop().map(key =>
//              (
//               <Table.Row>
//                 <Table.Cell>{key}</Table.Cell>
//                 <Table.Cell>{this.state[key]}</Table.Cell>
//               </Table.Row>
//             ))}
//           </Table.Body>
//         </Table>
//       </div>
//     );
//   }
// }

// export default Payslip;
