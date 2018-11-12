import React, { Component } from 'react';
import Modal from 'react-responsive-modal';
 class Header extends Component {



    constructor(props) {


            super(props);
            this.state = {
            

                name : '',
                interest: '',
                email:'',
                phone:''
    
            };

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

  onOpenSecondModal = () => {
    this.setState({ openSecondModal: true });
  };

  onCloseSecondModal = () => {
    this.setState({ openSecondModal: false });
  };


  render() {
    const { openFirstModal, openSecondModal } = this.state;
    const littleLorem = (
        <input type="text" placeholder="Enter Name" />
      );

      const Sport = (

            <input type="text" placeholder="Enter Sports Name" />

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
                      {littleLorem}
                      <button className="btn btn-action" onClick={this.onOpenSecondModal}>
                        Submit
                      </button>
                    </Modal>
                    <Modal open={openSecondModal} onClose={this.onCloseSecondModal} center>
                      <p>Your Favorite Sport </p>
                      {Sport}
                      <button className="btn btn-action" onClick={this.onOpenSecondModal}>
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
