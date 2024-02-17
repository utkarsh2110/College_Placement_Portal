import "./landing.css"
import Navbar from "./Components/Navbar"
import user1 from "./assets/user1.jpg"
import user2 from "./assets/user2.jpg"
import company from "./assets/company.webp"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTwitterSquare, faFacebookSquare, faYoutubeSquare } from '@fortawesome/free-brands-svg-icons'

export default function Landing()
{
	return(
		<>
		<div>
		<section className="header">
			<nav>
				<a href="/"><img src="https://engineering.nmims.edu/images/2a4ca0eeb31e71b312f1df1b25865a8a.png" alt="NMIMS Logo"/></a>
				<div className="nav-links" id="navLinks">
					<i className="fa fa-times" ></i>				
					<ul>
						<li><a href="">ABOUT</a></li>
						<li><a href="#sch">SCHOOLS</a></li>
						<li><a href="">CONTACT</a></li>
						<li><a href="/register">REGISTER</a></li>
						<li><a href="/login">LOGIN</a></li>
						{/* <div className="login-dropdown-btn">
							<li>USER LOGIN
								<div className="dropdown-content">
									<a href="#">Student</a>							
									<a href="#">Admin</a>
								</div>
							</li> 
						</div> */}
					</ul>
				</div>
				<i className="fa fa-bars"></i>
			</nav>
		<div className="text-box">
			<div className="animated-text">
				<h1 className="landing-h1">NMIMS Placement Committee</h1>
			</div>
			<p>Welcome to the official website of Placement Committee of NMIMS Navi Mumbai</p>
			<br/>
			<a href="#sch" className="hero-btn">Know More</a>
		</div>
		</section>
		


	<section className="schools" id="sch">
		<h1 style={{color: "#f44336"}} className="landing-h1" >Programs Under 7 Schools of NMIMS</h1>
		<div className="row">
			<div className="school-col">
				<h3 className="school-heading">STME</h3>
				<p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Accusamus, id.</p>
			</div>
			<div className="school-col">
				<h3 className="school-heading">SBM</h3>
				<p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Accusamus, id.</p>
			</div>
			<div className="school-col">
				<h3 className="school-heading">SOL</h3>
				<p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Accusamus, id.</p>
			</div>
		</div>

		<div className="row">
			<div className="school-col">
				<h3 className="school-heading">SOC</h3>
				<p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Accusamus, id.</p>
			</div>
			<div className="school-col">
				<h3 className="school-heading">SOHM</h3>
				<p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Accusamus, id.</p>
			</div>
			<div className="school-col">
				<h3 className="school-heading">SOMASA</h3>
				<p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Accusamus, id.</p>
			</div>
		</div>

		<div className="row3">
			<div className="school-col">
				<h3 className="school-heading">SOE</h3>
				<p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Accusamus, id.</p>
			</div>
		</div>

	</section>
	
	<section className="alumni">
		<h1 className="landing-h1">Our Alumni</h1>
		<p>What our students say</p>

		<div className="row">
			<div className="alumni-col">
				<img src={user1} alt="alumni 1"/>
				<div>
					<p> <q>Lorem ips um dolor sit amet, consectetur adipiscing elit. Donec cursus et nunc quis pharetra. Praesent gravida, nisl ut
					tempor gravida, sapien magna tincidunt nulla, ut rutrum erat purus vel velit. </q></p>
					<h3>Student 1</h3>
				</div>
			</div>
			<div className="alumni-col">
				<img src={user2} alt="alumni 1"/>
				<div>
					<p><q>Lorem ips um dolor sit amet, consectetur adipiscing elit. Donec cursus et nunc quis pharetra. Praesent
						gravida, nisl ut tempor gravida, sapien magna tincidunt nulla, ut rutrum erat purus vel velit.</q></p>
					<h3>Student 2</h3>
				</div>
			</div>
		</div>
	</section>

	<section className="company-stats">
		<h1 className="landing-h1">800+ Students Placed in 100+ Companies</h1>
		<img src={company} id="company-img"/>
	</section>
	

	<footer>
		<div className="footer-container">
			<a href=""><img src="https://engineering.nmims.edu/images/2a4ca0eeb31e71b312f1df1b25865a8a.png" alt="NMIMS Logo"/></a>
			<div className="footer2">
				<h4>Campuses</h4>
				<ul>
					<li><a href="">Mumbai</a></li>
					<li><a href="">Bengaluru</a></li>
					<li><a href="">Shirpur</a></li>
					<li><a href="">Hyderabad</a></li>
					<li><a href="">Indore</a></li>
					<li><a href="">Navi Mumbai</a></li>
					<li><a href="">Dhule</a></li>
				</ul>
			</div>

			<div className="footer3">
				<h4>Administration</h4>
				<ul>
					<li><a href="">Chancellor</a></li>
					<li><a href="">Vice Chancellor</a></li>
					<li><a href="">Faculty & Staff</a></li>
				</ul>
			</div>
			<div className="footer4">
				<h4>Socials</h4>
				<div className="socials">
					<li className="icon_fb"><a href="https://www.facebook.com/NMIMS.India"><FontAwesomeIcon icon={faFacebookSquare}  className="icon"/></a></li>
					<li className="icon_X"><a href="https://twitter.com/nmims_india"><FontAwesomeIcon icon={faTwitterSquare} className="icon" /></a></li>
					<li className="icon_yt"><a href="https://www.youtube.com/@nmimsedu"><FontAwesomeIcon icon={faYoutubeSquare} className="icon" /></a></li>
				</div>
			</div>

			
		</div>

		<div className="copyright">
			<small>&copy; Copyright 2022. Shri Vile Parle Kelavani Mandal (SVKM) All Rights Reserved.</small>
		</div>
	</footer>

	</div>
	</>
)
}

		