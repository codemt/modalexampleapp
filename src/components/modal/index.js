import React, { Component } from 'react';
import Modal from 'react-responsive-modal';
import axios from 'axios';
 class AppModal extends Component {



    constructor(props) {


            super(props);
            this.state = {
            

                name : '',
                interest: '',
                email : '',
                phone : '',
    
            };

            this.handleChange = this.handleChange.bind(this);

    }
    
    state = {
        openFirstModal: false,
        openSecondModal: false,
        openThirdModal : false,
        openFourthModal : false
      };
    
     
  onOpenFirstModal = () => {
    this.setState({ openFirstModal: true });
  };

  onCloseFirstModal = () => {
    this.setState({ openFirstModal: false });
  };

  onOpenSecondModal = () => {

    this.setState({ openSecondModal: true });

  };

  onCloseSecondModal = () => {

   
    this.setState({ openSecondModal: false });
  };

  onOpenThirdModal = () => {

    this.setState({ openThirdModal: true });
    
  };

  onCloseThirdModal = () => {

   
    this.setState({ openThirdModal: false });
  };
  onOpenFourthModal = () => {

      this.setState({ openFourthModal: true });
    
  };

  onCloseFourthModal = () => {

   
      this.setState({ openFourthModal: false });
  };

  handleChange = (e) => {

      
      e.preventDefault();
      // Set State , and log new value of state.
      this.setState({ [e.target.name]: e.target.value }, () => {
        console.log("Name is:", this.state.name);
        console.log("Interest is :", this.state.interest);
        console.log("Interest is :", this.state.email);
        console.log("Interest is :", this.state.phone);
      });

      
      
  }

  submitData = (e) => {


        console.log(this.state.name);
        console.log(this.state.interest);
        console.log(this.state.email);
        console.log(this.state.phone);

        // fetch('http://127.0.0.1:8000/api/inquiry')
        // .then((response) => response.json())
        // .then((responseJson) => {
        //   console.log(responseJson);
          
        // })

        axios.post('http://127.0.0.1:8000/api/inquiry', {
          name: this.state.name,
          interest: this.state.interest,
          email : this.state.email,
          phone : this.state.phone
        })
        .then(function (response) {
          console.log(response);
         // return <Redirect to='/inquiries' />
        })
        .catch(function (error) {
          console.log(error);
        });
       

        setTimeout(() => {

             
            
            // return <img alt="loader"  src="https://upload.wikimedia.org/wikipedia/commons/b/b1/Loading_icon.gif"/>
             window.location = "/inquiries";

          },1000)
  
          

  }
  


  render() {
    const { openFirstModal, openSecondModal,openThirdModal ,openFourthModal} = this.state;
    const Name = (
        <input type="text" placeholder="Enter Name"   onChange={this.handleChange}  name="name"  />
      );

      const Interest = (

            <input type="text" placeholder="Enter Your Interest " onChange={this.handleChange} name="interest"  />

      );

      const Email = (

        <input type="text" placeholder="Enter Your Email" onChange={this.handleChange} name="email"  />

      );

      const Phone = (

        <input type="text" placeholder="Enter Your Phone" onChange={this.handleChange} name="phone"  />

      );


    return (
        <header className="masthead" style={{backgroundImage:`url(theme/assets/img/header-bg.jpg)`}}>
            <div className="container">
                <div className="intro-text">
                    <div className="intro-lead-in"><span>Welcome To Our Studio!</span></div>
                    <div className="intro-heading text-uppercase"><span>It's Nice To Meet You</span></div>
                    <button className="btn btn-primary btn-xl text-uppercase js-scroll-trigger"  data-toggle="modal" data-target="#myModal" onClick={this.onOpenFirstModal}>Get Started</button>
                    <div className="example">
                    <Modal open={openFirstModal} onClose={this.onCloseFirstModal} center>
                      <p>Enter Your Name </p>
                      {Name}
                      <button className="btn btn-action" onClick={this.onOpenSecondModal}>
                        Submit
                      </button>
                    </Modal>
                    <Modal open={openSecondModal} onClose={this.onCloseSecondModal} center>
                      <p>What are you Interested in ? </p>
                      {Interest}
                      <button className="btn btn-action" onClick={this.onOpenThirdModal}>
                        Submit
                      </button>
                    </Modal>
                    <Modal open={openThirdModal} onClose={this.onCloseThirdModal} center>
                    <p> Can you give us your ? </p>
                    {Email}
                    <button className="btn btn-action" onClick={this.onOpenFourthModal}>
                      Submit
                    </button>
                  </Modal>
                  <Modal open={openFourthModal} onClose={this.onCloseFourthModal} center>
                    <p> Please Share your Phone no. ? </p>
                    {Phone}
                    <button className="btn btn-action" onClick={this.submitData}>
                      Submit
                    </button>
                  </Modal>
                  </div>
 
                    
                </div>
            </div>
            <div>
           
          </div>
        </header>
    )
  }
}
export default AppModal;
