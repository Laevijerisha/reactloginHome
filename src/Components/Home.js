import React from 'react'

function Home() {
    return (

        <div>
            <header>

                <ul class="navbar">
                    <li><a href="#home">Home</a></li>
                    <li><a href="#about">About</a></li>
                    <li><a href="#categories">Categories</a></li>
                    <li><a href="#contact">Contact</a></li>

                </ul>
                <ul class="icons">
                    <li >
                        <div class="favorite"><span class="material-symbols-outlined">
                            favorite</span></div></li>
                    <li> <div class="cart" style="padding-left: 4vh;"><span class="material-symbols-outlined">
                        shopping_cart
                    </span></div></li>
                    <li><div class="bx bx-moon" id="darkmode" style="padding-left: 4vh;"><span class="material-symbols-outlined">
                        dark_mode
                    </span></div></li>

                </ul>
            </header>
            <section class="home" id="home">
                <div class="home-text">
                    <h1>Clothing Store</h1>
                    <h2>Be trendy <br /> for every mood</h2>
                    <a href="#login" class="btn">Login</a>
                    <a href="#signup" class="btn" style="margin-left: 2vh;">Sign Up</a>
                </div>
                <div class="home-img">
                    <img src="Fashion-illustration_P1_900x420.avif" alt="" />
                </div>
            </section>
            <section class="about" id="about">
                <div class="about-img">
                    <img src="store.png" alt="" />
                </div>
                <div class="about-text">
                    <span>About Us</span>
                    <h2>A budget-friendly clothing store that  <br>has colorful and trendy pieces </h2>
                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ut quo iure rem ducimus tenetur deserunt commodi doloribus, quibusdam vel fuga?</p>
                    <a href="#" class="btn">Learn More</a>
                </div>
            </section>
            <section class="categories" id="categories">

                <div class="heading">
                    <span>Categories</span>
                    <h2>Womens</h2>
                </div>
                <div class="menu-container">
                    {/* <!-- Box 1 --> */}
                    <div class="box">
                        <div class="box-img">
                            <img src="womens.jpg" alt="" />
                        </div>
                        <h2>Casuals</h2>
                        <h3>All sizes are available</h3>
                    </div>
                    {/* <!-- Box 2 --> */}
                    <div class="box">
                        <div class="box-img">
                            <img src="formal.webp" alt="" />
                        </div>
                        <h2>Formals</h2>
                        <h3>All styles are available</h3>

                    </div>
                    {/* <!-- Box 3 --> */}
                    <div class="box">
                        <div class="box-img">
                            <img src="handbags.jpg" alt="" />
                        </div>
                        <h2>Handbags</h2>
                        <h3>Branded Bags are available</h3>

                    </div>
                </div>

            </section>
            {/* <!-- Connect --> */}
            <section class="connect">
                <div class="connect-text">
                    <span>Let's Talk</span>
                    <h2>Connect now</h2>
                </div>
                <a href="#" class="btn">Contact Us</a>
            </section>

            {/* <!-- Contact --> */}
            <section class="contact" id="contact">
                <div class="contact-box">
                    <h3>Clothing Store for Women</h3>
                    <span>Connect With Us</span>
                    <div class="social">
                        <a href="#"><i class="fa-brands fa-facebook"></i></a>
                        <a href="#"><i class="fa-brands fa-twitter"></i></a>
                        <a href="#"><i class="fa-brands fa-instagram"></i></a>
                    </div>
                </div>
                <div class="contact-box">
                    <h3>Services</h3>
                    <li><a href="#home">Home</a></li>
                    <li><a href="#about">About</a></li>
                    <li><a href="#categories">Categories</a></li>
                    <li><a href="#contact">Contact</a></li>
                </div>
                <div class="contact-box">
                    <h3>Quick Links</h3>
                    <li><a href="#Contact">Contact</a></li>
                    <li><a href="#Privacy Policy">Privacy Policy</a></li>
                    <li><a href="#Disclaimer">Disclaimer</a></li>
                    <li><a href="#Terms Of Use">Terms Of Use</a></li>
                </div>
                <div class="contact-box address" >
                    <h3>Contact</h3>
                    <span class="material-symbols-outlined">
                        pin_drop
                        <p style="margin: 2px;">005, Lorem ipsum dolor, sit amet consectetur, India</p></span>
                    <span class="material-symbols-outlined">
                        call
                        <p style="margin: 2px;">+91 000 999 5555</p></span>
                    <span class="material-symbols-outlined">
                        mail<p style="margin: 2px;">Example@email.com</p>
                    </span>
                </div>
            </section>

            {/* Copyright  */}
            <div class="copyright">
                <p>© Asslone4 All Right Reserved.</p>
            </div>
        </div>

    )
}

export default Home;
