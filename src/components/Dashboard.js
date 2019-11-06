import React, { Component } from "react";
import { Grid, Segment, Form } from "semantic-ui-react";
import Payslip from "./Payslip";
import moment from "moment";

class Dashboard extends Component {
  state = {
    isSubmitted: false,
    firstname: "",
    lastname: "",
    superrate: "",
    paydate: "",
    payfreq: "",
    annualsalary: "",
    grossIncome: "",
    incomeTax: "",
    netIncome: "",
    super: "",
    pay: ""
  };

  // state = {
  //   isSubmitted: false,
  //   firstname: "",
  //   lastname: "",
  //   superrate: "",
  //   "Pay Date": "",
  //   "Pay Frequency": "",
  //   "Annual Income": "",
  //   "Gross Income": "",
  //   "Income tax": "",
  //   "Net Income": "",
  //   "Super": "",
  //   "Pay": ""
  // };

  handleInputChange = evt => {
    this.setState({
      [evt.target.name]: evt.target.value
    });
  };

  calculatePayslip = () => {
    const { annualsalary, superrate } = this.state;
    // console.log('annual salary', annualsalary)

    if (0 <= annualsalary && annualsalary <= 18200) {
      console.log("executed?");
      this.setState({ grossIncome: Math.floor(annualsalary / 12) });
      this.setState({ incomeTax: 0 });
      this.setState({ netIncome: Math.ceil(annualsalary / 12) });
      this.setState({
        super: Math.floor((annualsalary / 12) * (superrate / 100))
      });
      this.setState({
        pay:
          Math.floor(annualsalary / 12) - Math.floor((annualsalary / 12) * 0.09)
      });
      this.setState({
        paydate: moment().format("DD MMMM gggg"),
        payfreq: "monthly"
      });
      // console.log('calculat func', this.state);
    } else if (18201 <= annualsalary && annualsalary <= 37000) {
      this.setState({
        grossIncome: Math.floor(annualsalary / 12),
        incomeTax: Math.ceil(((annualsalary - 18200) * 0.19) / 12),
        netIncome:
          Math.floor(annualsalary / 12) -
          Math.ceil(((annualsalary - 18200) * 0.19) / 12),
        super: Math.floor(Math.floor(annualsalary / 12) * (superrate / 100)),
        pay:
          Math.floor(annualsalary / 12 - ((annualsalary - 18200) * 0.19) / 12) -
          Math.floor((annualsalary / 12) * (superrate / 100)),
        paydate: moment().format("DD MMMM gggg"),
        payfreq: "monthly"
      });
    } else if (37001 <= annualsalary && annualsalary <= 80000) {
      this.setState({
        grossIncome: Math.floor(annualsalary / 12),
        incomeTax: Math.ceil((3572 + (annualsalary - 37000) * 0.325) / 12),
        netIncome:
          Math.floor(annualsalary / 12) -
          Math.ceil((3572 + (annualsalary - 37000) * 0.325) / 12),
        super: Math.floor(Math.floor(annualsalary / 12) * (superrate / 100)),
        pay:
          Math.floor(annualsalary / 12) -
          Math.ceil((3572 + (annualsalary - 37000) * 0.325) / 12) -
          Math.floor(Math.floor(annualsalary / 12) * (superrate / 100)),
        paydate: moment().format("DD MMMM gggg"),
        payfreq: "monthly"
      });
    } else if (80001 <= annualsalary && annualsalary <= 180000) {
      this.setState({
        grossIncome: Math.floor(annualsalary / 12),
        incomeTax: Math.ceil((17547 + (annualsalary - 80000) * 0.37) / 12),
        netIncome:
          Math.floor(annualsalary / 12) -
          Math.ceil((17547 + (annualsalary - 80000) * 0.37) / 12),
        super: Math.floor(Math.floor(annualsalary / 12) * (superrate / 100)),
        pay:
          Math.floor(annualsalary / 12) -
          Math.ceil((17547 + (annualsalary - 80000) * 0.37) / 12) -
          Math.floor(Math.floor(annualsalary / 12) * (superrate / 100)),
        paydate: moment().format("DD MMMM gggg"),
        payfreq: "monthly"
      });
    } else if (180001 <= annualsalary) {
      this.setState({
        grossIncome: Math.floor(annualsalary / 12),
        incomeTax: Math.ceil((54547 + (annualsalary - 180000) * 0.45) / 12),
        netIncome:
          Math.floor(annualsalary / 12) -
          Math.ceil((54547 + (annualsalary - 180000) * 0.45) / 12),
        super: Math.floor(Math.floor(annualsalary / 12) * (superrate / 100)),
        pay:
          Math.floor(annualsalary / 12) -
          Math.ceil((54547 + (annualsalary - 180000) * 0.45) / 12) -
          Math.floor(Math.floor(annualsalary / 12) * (superrate / 100)),
        paydate: moment().format("DD MMMM gggg"),
        payfreq: "monthly"
      });
    }
    return;
  };

  handleSubmission = evt => {
    evt.preventDefault();
    this.setState({ isSubmitted: true });
    this.calculatePayslip();
    // console.log(this.state);
  };

  getDataFetch = async () => {
    console.log("executed get!");
    const response = await fetch(
      "https://richard-nodeapi-test.herokuapp.com/users",
      { headers: { "Content-Type": "application/json" } }
    );
    console.log(await response.json());
  };

  postDataFetch = async () => {
    // console.log("executed post!");
    // console.log(this.state);
    const response = await fetch(
      "https://richard-nodeapi-test.herokuapp.com/users",
      {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(this.state)
      }
    );
    console.log(await response.json());
  };

  render() {
    const { isSubmitted } = this.state;
    return (
      <Grid>
        <Grid.Row>
          <Grid.Column witdth={10}>
            <Segment>
              <h1>Employee Info</h1>
              <Form onSubmit={this.handleSubmission}>
                <Form.Group widths="equal">
                  <Form.Input
                    onChange={this.handleInputChange}
                    name="firstname"
                    type="text"
                    fluid
                    label="First name"
                    placeholder="First name"
                  />
                  <Form.Input
                    onChange={this.handleInputChange}
                    name="lastname"
                    type="text"
                    fluid
                    label="Last name"
                    placeholder="Last name"
                  />
                </Form.Group>
                <Form.Group widths="equal">
                  <Form.Input
                    onChange={this.handleInputChange}
                    name="annualsalary"
                    type="number"
                    fluid
                    label="Annual Salary"
                    placeholder="Annual Salary($)"
                  />
                  <Form.Input
                    onChange={this.handleInputChange}
                    name="superrate"
                    type="number"
                    fluid
                    label="Super Rate"
                    placeholder="Super Rate(%)"
                  />
                </Form.Group>
                <Form.Button>Generate Payslip</Form.Button>
              </Form>
            </Segment>
          </Grid.Column>
        </Grid.Row>
        <Grid.Row>
          <Grid.Column witdth={10}>
            {isSubmitted && (
              <Payslip data={this.state} getDataFetch={this.getDataFetch} postDataFetch={this.postDataFetch}/>
            )}
          </Grid.Column>
        </Grid.Row>
      </Grid>
    );
  }
}

export default Dashboard;
