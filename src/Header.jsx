

function Header() {
    return (
        <header class="header">
            <div class="container">
            <div class="inner">
                <div class="row">
                    <div class="col-lg-3 col-md-3 col-12">
                        {/*Start Logo*/}
                        <div class="logo">
                            <a href="index.html"><img src="../img/logo.png" alt="#" /></a>
                        </div>
                        {/*End Logo*/}
                        {/*Mobile Nav*/}
                        <div class="mobile-nav"></div>
                        {/*End Mobile Nav*/}
                    </div>
                    <div class="col-lg-7 col-md-9 col-12">
                        {/*Main Menu*/}
                        <div class="main-menu">
                            <nav class="navigation">
                                <ul class="nav menu">
                                    <li class="active"><a href="#">Home <i class="icofont-rounded-down"></i></a>
                                        <ul class="dropdown">
                                            <li><a href="index.html">Home Page 1</a></li>
                                        </ul>
                                    </li>
                                    <li><a href="disease.html">Disease </a></li>
                                    <li><a href="doctor_list.html">Doctors </a></li>
                                    <li><a href="Products.html">Products </a></li>
                                    <li><a href="contact.html">Contact Us</a></li>
                                </ul>
                            </nav>
                        </div>
                        {/*End Main Menu*/}
                    </div>
                    <div class="col-lg-2 col-12">
                        <div class="get-quote">
                            <a href="appointment.html" class="btn">Book Appointment</a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </header>
    )
}

export default Header;