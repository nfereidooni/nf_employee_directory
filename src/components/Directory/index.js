import React from "react";
import "./style.css";
import { Container, Table } from "react-bootstrap";
import Search from '../Search';
import Users from '../../utils/API';

console.log(Users)

class Directory extends React.Component {
  constructor(props) {
    super(props);
    this.state = { filter: "" };
    this.handleInputChange = this.handleInputChange.bind(this);
  }
  

  handleInputChange(val) {
    this.setState({ filter: val })
  }

  componentDidMount() {
   Users.getUsers().then(res => {
     this.setState({
       results: res.data.results
     })
     console.log('results', this.state.results)
   })
  }
  render() {
    return (
      <Container>
        {/* <Search handleInputChange = {this.handleInputChange()} value=""/> */}
        <Search />
        <Table striped bordered hover>
          <thead>
            <tr>
              <th>Image</th>
              <th>Name</th>
              <th>Phone</th>
              <th>Email</th>
              <th>DOB</th>
            </tr>
          </thead>
          <tbody>
            {this.state.results.map( user =>
              <tr>
                <td><img alt="Employee" src={user.results.picture.thumbnail} /></td>
                <td>{user.results.name.first + " " + user.results.name.last}</td>
                <td>{user.results.phone}</td>
                <td>{user.results.email}</td>
                <td>{(user.results.dob.date).split('T')[0]}</td>
              </tr> 
              )}
          </tbody>
        </Table>
      </Container>
    );
  }
}

export default Directory;
