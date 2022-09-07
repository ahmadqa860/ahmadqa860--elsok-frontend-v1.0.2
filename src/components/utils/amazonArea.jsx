import React from 'react';
import "../../css/fonts-colors.css";
import amazonLogo from "../../img/core-img/Amazon_logo.svg";





function AmazonArea() {

    return (

    <div className="top_catagory_area clearfix mb-50">
        <div className="container">
            <div className="row">
                <div className="col-12 mt-50 d-flex justify-content-center">
                    <h4 className="Lemonada-font"><span> <img src={amazonLogo} width="85" alt="amazon" />  </span>موقعنا بأشتراك</h4>
                </div>
                <div className="col-12 col-md-12 col-lg-12">
                    <div className="single_catagory_area mt-30 ">
                        <div id="amzn-assoc-ad-33f9735f-6771-4948-b291-7e590b5248f6"></div>
                    </div>
                </div>
            </div>
        </div>
    </div>
    
    );
};


export default AmazonArea;