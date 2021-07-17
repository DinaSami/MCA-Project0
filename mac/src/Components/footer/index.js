import React, { Component } from 'react'
import { FiTwitter } from 'react-icons/fi';
import { FaFacebookF } from 'react-icons/fa';
import { GrInstagram } from 'react-icons/gr';
import { AiFillGithub } from 'react-icons/ai';
export default class Footer extends Component {
    render() {
        return (
            <div className='my-footer-color  ' id='scroll' >
                <div>
                    <section className='my-footer-color  ' >
                        <div className=" text-center text-md-start mt-5"  >
                            <div className="row mt-3 ">
                                <div className="col-md-3 col-lg-4 col-xl-3 mx-auto mb-4 div-icons  ">
                                    <h6 className="mb-4 my-footer text-footer ">
                                        <i className="fas fa-gem me-3  "></i>Get connected with us on social networks:
          </h6>
                                    <p>
                                        <a href="/" className="me-4 text-reset footer-icon-position ">
                                            <FaFacebookF size='1.5rem' />
                                        </a >
                                        <a href="/" className="me-4 text-reset footer-icon-position   ">
                                            <GrInstagram size='1.5rem' />
                                        </a>
                                        <a href="/" className="me-4 text-reset  footer-icon-position  ">
                                            <AiFillGithub size='1.7rem' />
                                        </a>
                                        <a href="/" className="me-4 text-reset footer-icon-position ">
                                            <FiTwitter size='1.5rem' />
                                        </a>
                                    </p >
                                </div >
                                <div class="col-md-4 col-lg-3 col-xl-3 mx-auto mb-md-0 mb-4  " >
                                    <h6 class=" mb-4 text-footer  ">
                                        Contact:
          </h6>
                                    <p><i className="fas fa-home     "></i> New York, NY 10012, US</p>
                                    <p>
                                        <i class="fas fa-envelope   "></i>
            MCA@ltuc.com
          </p>
                                </div>
                            </div >
                        </div >
                    </section >
                    <div class="text-center p-4  my-footer-color "  >
                        <hr width={'0%'} className='hrdim' />
                        © 2021 MCATeam
                     </div>
                </div >
            </div >
        );
    }
}