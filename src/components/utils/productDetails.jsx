import React,{Component} from 'react';
import http from '../../services/httpService';
import {apiUrl} from '../../config.json';
import {storageUrl} from '../../config.json';
import { Link } from 'react-router-dom';
import "../../css/productDetails.css";
import {
    FacebookShareButton,
    FacebookIcon,
    WhatsappShareButton,
    WhatsappIcon,
  } from "react-share";


class ProductView extends Component{

    state={
        data:"",
        contactInfo:"",
    }
    
    async componentDidMount(){
        const productId = this.props.match.params.id;
        //const category = this.props.match.params.categoryUrl;
        var {data} = await http.get(`${apiUrl}/shop/products/${productId}`); 
        this.setState({data});
        data = await (await http.get(`${apiUrl}/shop/productContact/${productId}`)).data;
        this.setState({contactInfo:data});
    }

    render(){
        const {data} = this.state;
        const {contactInfo} = this.state;
        const shareUrl = window.document.location.href;

        return (
        <section className="single_product_details_area section_padding_100">
            <div className="container">
                <div className="row">
                    <div className="col-12 col-lg-6">
                        <div className="single_product_thumb">
                            <div id="product_details_slider" className="carousel slide" data-ride="carousel">
                                <div className="carousel-inner">
                                    {
                                    data && data.images.map(function(image,index){
                                        let carouselCls = 'carousel-item';
                                        if(index===0){
                                            carouselCls += ' active';
                                        }
                                        return(
                                        <div className={carouselCls} key={index}>
                                            <span className="gallery_img"  title="Second Slide">
                                                <img className="d-block w-100" src={`${storageUrl}/${image.img_src}`} alt="Second slide"/>
                                            </span>
                                            <div className="product_badge">
                                                <span className="badge-new">Sale</span>
                                            </div>
                                        </div>
                                        )
                                    })
                                    }

                                    <ol className="carousel-indicators">
                                        { data && data.images.map(function(image,index){
                                            let cls = "";
                                            if(index === 0){
                                                cls = "active";
                                            }

                                            return(
                                                <li key={index} className={cls}  data-target="#product_details_slider" data-slide-to={index}  style={{backgroundImage: `url(${storageUrl}/${image.img_src})`}} />
                                            );
                                            
                                        })
                                    
                                        }
                                    </ol>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="col-12 col-lg-6">
                        <div className="single_product_desc">
                            <h4 className="title mb-2">{data.product_title}</h4>
                            <div className="single_product_ratings mb-2">
                                <i className="fa fa-star" aria-hidden="true"></i>
                                <i className="fa fa-star" aria-hidden="true"></i>
                                <i className="fa fa-star" aria-hidden="true"></i>
                                <i className="fa fa-star" aria-hidden="true"></i>
                                <i className="fa fa-star" aria-hidden="true"></i>
                                {/*<span className="text-muted">(8 Reviews)</span>*/}
                            </div>
                            <h4 className="price mb-4">السعر: {data.product_price}</h4>
                            <h4 className="price mb-4">الأسم: {contactInfo.name}</h4>
                            <h4 className="price mb-4">رقم الهاتف: {'0'+contactInfo.mobile}</h4>
                            <h4 className="price mb-4">البلد: {contactInfo.city}</h4>
                            <h4 className="price mb-4">العنوان: {contactInfo.address}</h4>
                            <div className="short_overview mb-4">
                                <h6>شرح وتفصيل</h6>
                                <p>{data.product_description}</p>
                            </div>
                            <div className="others_info_area mb-3 d-flex flex-wrap">
                                <Link className="share_with_friend" to="#">SHARE WITH FRIEND <i className="fa fa-share" aria-hidden="true"></i></Link>
                                
                                <FacebookShareButton url={shareUrl}>
                                  <span className="mr-2">  <FacebookIcon size={40} round={true} /></span>
                                </FacebookShareButton>
                                <WhatsappShareButton url={shareUrl}>
                                    <WhatsappIcon size={40} round={true} />
                                </WhatsappShareButton>
                                
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="container">
                <div className="row">
                    <div className="col-12">
                        <div className="product_details_tab section_padding_100_0 clearfix">
                            
                            <ul className="nav nav-tabs" role="tablist" id="product-details-tab">
                                <li className="nav-item">
                                    <Link to="#description" className="nav-link active" data-toggle="tab" role="tab">ما هو التسويق الألكتروني؟</Link>
                                </li>
                            </ul>

                            <div className="tab-content">
                                <div role="tabpanel" className="tab-pane fade show active" id="description">
                                    <div className="description_area">
                                        <h5>منظور عملي و علمي</h5>
                                        <p>هنالك أمر مهم في التسويق الألكتروني, من اهمها هو التسويق عبر المحتوى, لأنه من غير محتوى لا تستطيع اطلاق حملة ترويجية, ولذلك يجب أن تتعلم التسويق بشكل عام واستراتيجيات التسويق.</p>

                                        <p>يجب على المحتوى ملائمة تماما الهدف من الحملة التي تطلقها, من أجل أطلاق محتوى فعال جدا يجب عليك أن تعلم ماذا تعني "أهداف تسويقية" </p>

                                        <div className="embed-responsive embed-responsive-16by9 mb-3">
                                        <iframe width="1280" height="720" src="https://www.youtube.com/embed/wIuPbbNvaUQ" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>
                                        </div>

                                        <p>من ضمن الأهداف التسويقية التي ممكن ان تتخذها:</p>
                                        <p>
                                            زيادة الحصة السوقية<br/>
                                            زيادة الأرباح<br/>
                                            زيادة المبيعات
                                            
                                        </p>
                                        <p className="mb-0">اول خطوة لنجاح الحملة التسويقية هي التعرف على سيكولوجية المستهلك على وسائل التواصل الاجتماعي</p>
                                        <p>من اهدافنا توعية وزيادة وتسهيل تسويق الحصة الخاصة بك عبر الشبكة بمشاركتك بموقعنا في السوقة</p>
                                        <p>اتمنى استمتاعك في التصفح بموقعنا</p>
                                    </div>
                                </div>

                                <div role="tabpanel" className="tab-pane fade" id="reviews">
                                    <div className="reviews_area">
                                        <ul>
                                            <li>
                                                <div className="single_user_review mb-15">
                                                    <div className="review-rating">
                                                        <i className="fa fa-star" aria-hidden="true"></i>
                                                        <i className="fa fa-star" aria-hidden="true"></i>
                                                        <i className="fa fa-star" aria-hidden="true"></i>
                                                        <i className="fa fa-star" aria-hidden="true"></i>
                                                        <i className="fa fa-star" aria-hidden="true"></i>
                                                        <span>for Quality</span>
                                                    </div>
                                                    <div className="review-details">
                                                        <p>by <Link to="#">Designing World</Link> on <span>12 Sep 2019</span></p>
                                                    </div>
                                                </div>
                                                <div className="single_user_review mb-15">
                                                    <div className="review-rating">
                                                        <i className="fa fa-star" aria-hidden="true"></i>
                                                        <i className="fa fa-star" aria-hidden="true"></i>
                                                        <i className="fa fa-star" aria-hidden="true"></i>
                                                        <i className="fa fa-star" aria-hidden="true"></i>
                                                        <i className="fa fa-star" aria-hidden="true"></i>
                                                        <span>for Design</span>
                                                    </div>
                                                    <div className="review-details">
                                                        <p>by <Link to="#">Designing World</Link> on <span>12 Sep 2019</span></p>
                                                    </div>
                                                </div>
                                                <div className="single_user_review">
                                                    <div className="review-rating">
                                                        <i className="fa fa-star" aria-hidden="true"></i>
                                                        <i className="fa fa-star" aria-hidden="true"></i>
                                                        <i className="fa fa-star" aria-hidden="true"></i>
                                                        <i className="fa fa-star" aria-hidden="true"></i>
                                                        <i className="fa fa-star" aria-hidden="true"></i>
                                                        <span>for Value</span>
                                                    </div>
                                                    <div className="review-details">
                                                        <p>by <Link to="#">Designing World</Link> on <span>12 Sep 2019</span></p>
                                                    </div>
                                                </div>
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                                
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
        );
       
    }
}

export default ProductView;