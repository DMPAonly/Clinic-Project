import { useState } from "react";

function SideBar({ activeClass }) {
    const [active, setActive] = useState("Dashboard");

    function handleNavClick(e) {
        switch(e.target.textContent) {
            case "Dashboard":
                setActive("Dashboard");
                activeClass("Dashboard");
                break;
            case "Orders":
                setActive("Orders");
                activeClass("Orders");
                break;
            case "Products":
                setActive("Products");
                activeClass("Products");
                break;
            case "Customers":
                setActive("Customers");
                activeClass("Customers");
                break;
            case "Reports":
                setActive("Reports");
                activeClass("Reports");
                break;
            case "Integrations":
                setActive("Integrations");
                activeClass("Integrations");
                break;
            case "Current month":
                setActive("Current month");
                activeClass("Current month");
                break;
            case "Last quarter":
                setActive("Last quarter");
                activeClass("Last quarter");
                break;
            case "Social engagement":
                setActive("Social engagement");
                activeClass("Social engagement");
                break;
            case "Year-end sale":
                setActive("Year-end sale");
                activeClass("Year-end sale");
                break;
            case "Settings":
                setActive("Settings");
                activeClass("Settings");
                break;
            case "Sign out":
                setActive("Sign out");
                activeClass("Sign out");
                break;
        }
    }

    return (
        <div className="sidebar border border-right col-md-3 col-lg-2 p-0"> {/*bg-body-tertiary */}
            <div className="offcanvas-md offcanvas-end" tabIndex="-1" id="sidebarMenu" aria-labelledby="sidebarMenuLabel"> {/*bg-body-tertiary */}
                <div className="offcanvas-header"> 
                    <h5 className="offcanvas-title" id="sidebarMenuLabel">Company name</h5> 
                    <button type="button" className="btn-close" data-bs-dismiss="offcanvas" data-bs-target="#sidebarMenu" aria-label="Close"></button> 
                </div> 
                <div className="offcanvas-body d-md-flex flex-column p-0 pt-lg-3 overflow-y-auto"> 
                    <ul className="nav flex-column"> 
                        <li className="nav-item"> 
                            <a className={active === "Dashboard" ? "nav-link d-flex align-items-center gap-2 active" : "nav-link d-flex align-items-center gap-2"} aria-current="page" href="#" onClick={handleNavClick}> 
                                <svg className="bi" aria-hidden="true">
                                    <use xlinkHref="#house-fill"></use>
                                </svg>
                                Dashboard
                            </a> 
                        </li> 
                        <li className="nav-item"> 
                            <a className={active === "Orders" ? "nav-link d-flex align-items-center gap-2 active" : "nav-link d-flex align-items-center gap-2"} href="#" onClick={handleNavClick}> 
                                <svg className="bi" aria-hidden="true">
                                    <use xlinkHref="#file-earmark"></use>
                                </svg>
                                Orders
                            </a> 
                        </li> 
                        <li className="nav-item"> 
                            <a className={active === "Products" ? "nav-link d-flex align-items-center gap-2 active" : "nav-link d-flex align-items-center gap-2"} href="#" onClick={handleNavClick}> 
                                <svg className="bi" aria-hidden="true">
                                    <use xlinkHref="#cart"></use>
                                </svg>
                                Products
                            </a> 
                        </li> 
                        <li className="nav-item"> 
                            <a className={active === "Customers" ? "nav-link d-flex align-items-center gap-2 active" : "nav-link d-flex align-items-center gap-2"} href="#" onClick={handleNavClick}> 
                                <svg className="bi" aria-hidden="true">
                                    <use xlinkHref="#people"></use>
                                </svg>
                                Customers
                            </a> 
                        </li> 
                        {/*
                        <li className="nav-item"> 
                            <a className={active === "Reports" ? "nav-link d-flex align-items-center gap-2 active" : "nav-link d-flex align-items-center gap-2"} href="#" onClick={handleNavClick}> 
                                <svg className="bi" aria-hidden="true">
                                    <use xlinkHref="#graph-up"></use>
                                </svg>
                                Reports
                            </a> 
                        </li> 
                        <li className="nav-item"> 
                            <a className={active === "Integrations" ? "nav-link d-flex align-items-center gap-2 active" : "nav-link d-flex align-items-center gap-2"} href="#" onClick={handleNavClick}> 
                                <svg className="bi" aria-hidden="true">
                                    <use xlinkHref="#puzzle"></use>
                                </svg>
                                Integrations
                            </a> 
                        </li> 
                        */}
                    </ul> 
                    {/*
                    <h6 className="sidebar-heading d-flex justify-content-between align-items-center px-3 mt-4 mb-1 text-body-secondary text-uppercase"> 
                        <span>Saved reports</span> 
                        <a className="link-secondary" href="#" aria-label="Add a new report"> 
                            <svg className="bi" aria-hidden="true">
                                <use xlinkHref="#plus-circle"></use>
                            </svg> 
                        </a> 
                    </h6> 
                    <ul className="nav flex-column mb-auto"> 
                        <li className="nav-item"> 
                            <a className={active === "Current month" ? "nav-link d-flex align-items-center gap-2 active" : "nav-link d-flex align-items-center gap-2"} href="#" onClick={handleNavClick}> 
                                <svg className="bi" aria-hidden="true">
                                    <use xlinkHref="#file-earmark-text"></use>
                                </svg>
                                Current month
                            </a> 
                        </li> 
                        <li className="nav-item"> 
                            <a className={active === "Last quarter" ? "nav-link d-flex align-items-center gap-2 active" : "nav-link d-flex align-items-center gap-2"} href="#" onClick={handleNavClick}> 
                                <svg className="bi" aria-hidden="true">
                                    <use xlinkHref="#file-earmark-text"></use>
                                </svg>
                                Last quarter
                            </a> 
                        </li> 
                        <li className="nav-item"> 
                            <a className={active === "Social engagement" ? "nav-link d-flex align-items-center gap-2 active" : "nav-link d-flex align-items-center gap-2"} href="#" onClick={handleNavClick}> 
                                <svg className="bi" aria-hidden="true">
                                    <use xlinkHref="#file-earmark-text"></use>
                                </svg>
                                Social engagement
                            </a> 
                        </li> 
                        <li className="nav-item"> 
                            <a className={active === "Year-end sale" ? "nav-link d-flex align-items-center gap-2 active" : "nav-link d-flex align-items-center gap-2"} href="#" onClick={handleNavClick}> 
                                <svg className="bi" aria-hidden="true">
                                    <use xlinkHref="#file-earmark-text"></use>
                                </svg>
                                Year-end sale
                            </a> 
                        </li> 
                    </ul> 
                    */}
                    <hr className="my-3" /> 
                    <ul className="nav flex-column mb-auto"> 
                        <li className="nav-item"> 
                            <a className={active === "Settings" ? "nav-link d-flex align-items-center gap-2 active" : "nav-link d-flex align-items-center gap-2"} href="#" onClick={handleNavClick}> 
                                <svg className="bi" aria-hidden="true">
                                    <use xlinkHref="#gear-wide-connected"></use>
                                </svg>
                                Settings
                            </a> 
                        </li> 
                        <li className="nav-item"> 
                            <a className={active === "Sign out" ? "nav-link d-flex align-items-center gap-2 active" : "nav-link d-flex align-items-center gap-2"} href="#" onClick={handleNavClick}> 
                                <svg className="bi" aria-hidden="true">
                                    <use xlinkHref="#door-closed"></use>
                                </svg>
                                Sign out
                            </a> 
                        </li> 
                    </ul> 
                </div> 
            </div> 
        </div> 
    )
}

export default SideBar;