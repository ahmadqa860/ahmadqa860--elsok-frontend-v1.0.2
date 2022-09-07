import React,{Component} from 'react';
import http from '../../services/httpService';
import {logout} from '../../services/userService';
import {apiUrl} from '../../config.json';
import {NavLink} from 'react-router-dom';
import "../../css/navbar.css";
import elsokLogo from "../../img/core-img/elsok-logo.svg";
import dashboardLogo from "../../img/core-img/dashboard.png";

class Navbar extends Component{

    state={
        categories:[]
    };

    async componentDidMount(){
        const {data}  = await http.get(`${apiUrl}/categories`);
        this.setState({categories:data});
    }
    
    handleLogout = async()=>{
        await logout();
        window.location.reload(false);
    }

    render(){
        const {categories} = this.state;
        const { user } = this.props;
    return (

        <header className="header_area header">        
            <nav className="navbar navbar-expand-lg navbar-light fixed-top py-3 navbar-scrolled" id="mainNav">
                <div className="container">
                    <NavLink className="navbar-brand js-scroll-trigger ml-3" to={'/'}><img src={elsokLogo} width="85" alt="السوق" /></NavLink>
                    <button className="navbar-toggler navbar-toggler-right" type="button" data-toggle="collapse" data-target="#navbarResponsive" aria-controls="navbarResponsive" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarResponsive">
                        <ul className="navbar-nav ml-auto my-2 my-lg-0">
                            <li key="#"><NavLink className="nav-link" to={'/'}>الرئيسية</NavLink></li>
                                {categories.map((categorie) =>
                                    <li key={categorie.categorie_url}><NavLink className="nav-link" to={"/categories/"+categorie.categorie_url} href={"/categories/"+categorie.categorie_url} >{categorie.categorie_title}</NavLink></li>
                                )}
                            <li key="contact-us"><NavLink className="nav-link" to="/contact-us">تواصل معنا</NavLink></li>
                        </ul>
                    </div>
                

                        {!user && (
                            <div className="mr-auto d-flex align-items-center justify-content-end">
                                <div className="account-area header-user">
                                    <NavLink className="nav-link"  to={"/signup"}>تسجيل الدخول</NavLink>
                                </div>
                            </div>
                        )}

                       {user && (
                        <div className="hero_meta_area mr-auto d-flex align-items-center justify-content-end">
                            <div className="account-area">
                                <div className="user-thumbnail">
                                    <img src={dashboardLogo} alt=""/>
                                </div>
                                <ul className="user-meta-dropdown">
                                    <li className="user-title"><span>اهلا</span> {user.name}</li>
                                    <li><NavLink to={"/dashboard"}>الحساب الخاص</NavLink></li>
                                    <li><NavLink to={"/product/add-product"}>أضف منتج</NavLink></li>
                                    <li><NavLink to={"/"} onClick={this.handleLogout}><i className="icofont-logout"></i>الخروج</NavLink></li>
                                </ul>
                            </div>
                        </div>
                        )}
                </div>
            </nav>

    </header>
    );
};
};

export default Navbar;