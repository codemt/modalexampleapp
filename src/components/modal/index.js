import React, { Component } from 'react'

 class Modal extends Component {



            render() {


                            return (

                                    
                                <div>
                                    <button type="button" className="btn btn-info btn-lg" data-toggle="modal" data-target="#myModal">Open Modal</button> 
                                    <div id="myModal" className="modal fade" role="dialog">
                                            <div className="modal-dialog">
                                                <div className="modal-content">
                                                <div className="modal-header">
                                                    <button type="button" className="close" data-dismiss="modal">&times;</button>
                                                    <h4 className="modal-title">Modal 1</h4>
                                                </div>
                                                <div className="modal-body">
                                                    <p>Some text in the modal.</p>
                                                </div>
                                                <div className="modal-footer">
                                                <button type="button" className="btn btn-info btn-lg" data-toggle="modal" data-target="#Modal2">Submit</button> 
                                                    <button type="button" className="btn btn-default" data-dismiss="modal">Close</button>
                                                </div>
                                                </div>
                                        
                                            </div>
                                    
                                    </div>
                                    <div id="Modal2" className="modal fade" role="dialog">
                                    <div className="modal-dialog">
                                        <div className="modal-content">
                                        <div className="modal-header">
                                            <button type="button" className="close" data-dismiss="modal">&times;</button>
                                            <h4 className="modal-title">Modal 2</h4>
                                        </div>
                                        <div className="modal-body">
                                            <p>Some text in the modal.</p>
                                        </div>
                                        <div className="modal-footer">
                                            <button type="button" className="btn btn-info btn-lg" data-toggle="modal" data-target="#Modal2">Open Modal</button> 
                                            <button type="button" className="btn btn-default" data-dismiss="modal">Close</button>
                                        </div>
                                        </div>

                                    </div>
                                   
                            </div>

                                </div>



                            )



            }

}
export default Modal;