import React, { Component } from "react";

class Header extends Component {
    render() {
        return (
            <header className="header">
                <div className="container">
                    <div className="row">
                        <div className="col-md-3">
                            <div className="header-logo">
                                <a href="#">
                                    <h2>
                                        mega <span>shop</span>
                                    </h2>
                                    <p>online mega store</p>
                                </a>
                            </div>
                        </div>
                        <div className="col-md-6 col-sm-12">
                            <div className="header-search-box">
                                <input type="text"></input>
                                <button type="submit">
                                    <i
                                        className="fa fa-search"
                                        aria-hidden="true"
                                    ></i>
                                    Submit
                                </button>
                            </div>
                        </div>
                        <div className="col-md-3">
                            <ul className="header-menu">
                                <li className="header-menu-item">
                                    <a href="#">
                                        <i
                                            class="fa fa-user-o"
                                            aria-hidden="true"
                                        ></i>
                                    </a>
                                </li>
                                <li className="header-menu-item">
                                    <a href="#">
                                        <i
                                            class="fa fa-heart-o"
                                            aria-hidden="true"
                                        ></i>
                                    </a>
                                </li>
                                <li className="header-menu-item cart-icon">
                                    <span className="cart-item-counter">0</span>
                                    <a href="#">
                                        <i
                                            class="fa fa-shopping-cart"
                                            aria-hidden="true"
                                        ></i>
                                    </a>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </header>
        );
    }
}

export default Header;
