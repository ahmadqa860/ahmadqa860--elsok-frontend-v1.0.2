import React, { Component } from "react";
import http from "../services/httpService";
import {apiUrl} from "../config.json";

import CarouselContainer from './CarouselContainer';
import CategoryArea from './utils/category-area';
import OfferArea from './utils/offer-area';
import AmazonArea from "./utils/amazonArea";

import "../css/home.css";

class Home extends Component {
  state = {};

  handleTest = async () =>{
    try{
      const {data} = await http.get(`${apiUrl}/test`);
      console.log(data);
    }catch(e){
      
    }
  }

  render() {
    return (
      
      <React.Fragment>
        <div className="container-flued">
          <div className="row">
            <div className="col-12 col-md-12 col-lg-2 col-sm-1 iframeLeft">
              
              <iframe className="iframe1" sandbox="allow-popups allow-scripts allow-modals allow-forms allow-same-origin" marginWidth="0" marginHeight="0" scrolling="no" frameBorder="0" src="//ws-na.amazon-adsystem.com/widgets/q?ServiceVersion=20070822&OneJS=1&Operation=GetAdHtml&MarketPlace=US&source=ss&ref=as_ss_li_til&ad_type=product_link&tracking_id=elsok-20&language=en_US&marketplace=amazon&region=US&placement=B08XWXH8TW&asins=B08XWXH8TW&linkId=50856d84705be9e19ba4fb80ff48bc33&show_border=true&link_opens_in_new_window=true"></iframe>
              <br/>
              <iframe className="iframeL" sandbox="allow-popups allow-scripts allow-modals allow-forms allow-same-origin" marginWidth="0" marginHeight="0" scrolling="no" frameBorder="0" src="//ws-na.amazon-adsystem.com/widgets/q?ServiceVersion=20070822&OneJS=1&Operation=GetAdHtml&MarketPlace=US&source=ss&ref=as_ss_li_til&ad_type=product_link&tracking_id=elsok-20&language=en_US&marketplace=amazon&region=US&placement=B0162EMWS0&asins=B0162EMWS0&linkId=d2cadcfe0a1dad1b2dac1a439be793b5&show_border=true&link_opens_in_new_window=true"></iframe>
              <br/>
              <iframe sandbox="allow-popups allow-scripts allow-modals allow-forms allow-same-origin" marginWidth="0" marginHeight="0" scrolling="no" frameBorder="0" src="//ws-na.amazon-adsystem.com/widgets/q?ServiceVersion=20070822&OneJS=1&Operation=GetAdHtml&MarketPlace=US&source=ss&ref=as_ss_li_til&ad_type=product_link&tracking_id=elsok-20&language=ar_AE&marketplace=amazon&region=US&placement=B087J9Z1BP&asins=B087J9Z1BP&linkId=fd8a4f7baa6e2d29061adf4d411f7cf0&show_border=true&link_opens_in_new_window=true"></iframe>
            </div>
            <div className="col-12 col-md-12 col-lg-8 col-sm-6 ">
              <CarouselContainer />
            </div>
            <div className="col-12 col-md-12 col-lg-2 col-sm-1 iframeRight">
              <iframe className="iframe1" sandbox="allow-popups allow-scripts allow-modals allow-forms allow-same-origin" marginWidth="0" marginHeight="0" scrolling="no" frameBorder="0" src="//ws-na.amazon-adsystem.com/widgets/q?ServiceVersion=20070822&OneJS=1&Operation=GetAdHtml&MarketPlace=US&source=ss&ref=as_ss_li_til&ad_type=product_link&tracking_id=elsok-20&language=en_US&marketplace=amazon&region=US&placement=B087BQPWXG&asins=B087BQPWXG&linkId=14308441d894e83a70d89ffcc903bb23&show_border=true&link_opens_in_new_window=true"></iframe>
              <br />
              <iframe sandbox="allow-popups allow-scripts allow-modals allow-forms allow-same-origin" marginWidth="0" marginHeight="0" scrolling="no" frameBorder="0" src="//ws-na.amazon-adsystem.com/widgets/q?ServiceVersion=20070822&OneJS=1&Operation=GetAdHtml&MarketPlace=US&source=ss&ref=as_ss_li_til&ad_type=product_link&tracking_id=elsok-20&language=en_US&marketplace=amazon&region=US&placement=B00KTH33DA&asins=B00KTH33DA&linkId=f75a6f771a21b319085ba6f66f08453a&show_border=true&link_opens_in_new_window=true"></iframe>
              <br />
              <iframe sandbox="allow-popups allow-scripts allow-modals allow-forms allow-same-origin" marginWidth="0" marginHeight="0" scrolling="no" frameBorder="0" src="//ws-na.amazon-adsystem.com/widgets/q?ServiceVersion=20070822&OneJS=1&Operation=GetAdHtml&MarketPlace=US&source=ss&ref=as_ss_li_til&ad_type=product_link&tracking_id=elsok-20&language=en_US&marketplace=amazon&region=US&placement=B0825RVKB7&asins=B0825RVKB7&linkId=213781640d3f753d9729288d83b8499f&show_border=true&link_opens_in_new_window=true"></iframe>
            </div>
          </div>
        </div>
      <CategoryArea />
      <AmazonArea/>
      <OfferArea />
    </React.Fragment>
    );
  }
}

export default Home;
