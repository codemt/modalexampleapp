import React, { Component } from 'react';
import Modal from 'react-responsive-modal';
 class Header extends Component {



    constructor(props) {


            super(props);
            this.state = {
            

                name : '',
                interest: '',
    
            };

            this.handleChange = this.handleChange.bind(this);

    }
    
    state = {
        openFirstModal: false,
        openSecondModal: false,
      };
    
     
  onOpenFirstModal = () => {
    this.setState({ openFirstModal: true });
  };

  onCloseFirstModal = () => {
    this.setState({ openFirstModal: false });
  };

  onOpenSecondModal = (e) => {

      e.preventDefault();
      const name = e.target.name.value;
     console.log(name);
    this.setState({ openSecondModal: true });
  };

  onCloseSecondModal = () => {

   
    this.setState({ openSecondModal: false });
  };

  handleChange = (e) => {

      
      e.preventDefault();
      // Set State , and log new value of state.
      this.setState({ [e.target.name]: e.target.value }, () => {
        console.log("Name is:", this.state.name);
        console.log("Interest is :", this.state.interest);
      });
      
  }

  submitData = (e) => {


        console.log(this.state.name);
        console.log(this.state.interest);


  }
  


  render() {
    const { openFirstModal, openSecondModal } = this.state;
    const Name = (
        <input type="text" placeholder="Enter Name"   onChange={this.handleChange}  name="name"  />
      );

      const Sport = (

            <input type="text" placeholder="Enter Your Interest " onChange={this.handleChange} name="interest"  />

      );


    return (
        <header class="masthead" style={{backgroundImage:`url(theme/assets/img/header-bg.jpg)`}}>
            <div class="container">
                <div class="intro-text">
                    <div class="intro-lead-in"><span>Welcome To Our Studio!</span></div>
                    <div class="intro-heading text-uppercase"><span>It's Nice To Meet You</span></div>
                    <button class="btn btn-primary btn-xl text-uppercase js-scroll-trigger"  data-toggle="modal" data-target="#myModal" onClick={this.onOpenFirstModal}>Get Started</button>
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
                      {Sport}
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
export default Header;
