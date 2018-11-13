import React, { Component } from 'react'
class InquiryContainer extends Component {
    constructor(props) {
        super(props);
    
        this.state = {
          data: [],
        };

        
      }
      getData()
      {
        console.log('called');
  
              fetch('http://127.0.0.1:8000/api/inquiry')
            .then((response) => response.json())
            .then((responseJson) => {
              console.log(responseJson);
              this.setState({data : responseJson,animating:false});
  
            })
            .catch((error) => {
              console.error(error);
            });
  
      }
    
      componentDidMount() {

        this.getData();
      }
  render() {
    const { data } = this.state;
    console.log(data);
    return (

      <section id="services">
      <div class="container">
          <div class="row">
              <div class="col-lg-12 text-center">
                  <h2 class="text-uppercase section-heading">Inquiries Received</h2>
                  <a href="/">Back Home </a>
              </div>
             
          </div>
          <div class="row text-center">
                <table class="table table-hover">
                        <thead>
                          <tr>
                            <th scope="col">Name</th>
                            <th scope="col">Interest</th>
                            <th scope="col">Phone</th>
                            <th scope="col">Email</th>
                          </tr>
                        </thead>
                          <tbody>
                          {data.map(data =>
                            <tr class="table-active">
                        
                              <td>{data.name}</td>
                              <td>{data.interest}</td>
                              <td>{data.email}</td>
                              <td>{data.phone}</td>
                            </tr>
                          )}
                          </tbody>
                  </table> 
                
              
          </div>
          
          
      </div>
  </section>
  
  
    )
  }
}
export default InquiryContainer;