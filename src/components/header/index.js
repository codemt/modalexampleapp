import React, { Component } from 'react'

 class Header extends Component {
  render() {
    return (
        <header class="masthead" style={{backgroundImage:`url(theme/assets/img/header-bg.jpg)`}}>
            <div class="container">
                <div class="intro-text">
                    <div class="intro-lead-in"><span>Welcome To Our Studio!</span></div>
                    <div class="intro-heading text-uppercase"><span>It's Nice To Meet You</span></div><a class="btn btn-primary btn-xl text-uppercase js-scroll-trigger" role="button" href="#services">Get Started</a></div>
            </div>
        </header>
    )
  }
}
export default Header;