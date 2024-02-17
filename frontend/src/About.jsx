import './landing.css'
import campus from './assets/campus.jpg'
import bg from './assets/background.jpg'
import about from './assets/about_us.jpg'
import user2 from './assets/user2.jpg'
import user1 from './assets/user1.jpg'

export default function About()
{
    return (
    <>
	<section className="sub--header">
		<nav>
			<a href="/"><img src="https://engineering.nmims.edu/images/2a4ca0eeb31e71b312f1df1b25865a8a.png"/></a>
			<div className="nav-links">
				{/* <!-- menu button (for small resolution screens) --> */}
				{/* <!-- <i className="fa fa-bars" style="font-size:24px"></i> --> */}
				<ul>
					<li><a href="/about">ABOUT</a></li>
					<li><a href="/#ch">SCHOOLS</a></li>
					<li><a href="/contact">CONTACT</a></li>
					<li><a href="/register">REGISTER</a></li>
				</ul>
			</div>
			{/* <!-- <i className="fa fa-bars" aria-hidden="true"></i> --> */}
		</nav>		
			<h1>ABOUT US</h1>
	</section>

{/* <!-------------about us--------------->  */}

	<div className = "team-section">
		<div className = "container">
			<div className= "row">
				<div className = "title">
					<h3>OUR TEAM</h3>
					<p>Lorem ipsum dolor sit amet, consectetur adipising elit, sed do elusmod
					tempor incididunt ut labore et dolore magna aliqua</p>
					
				</div>
			</div>
			<div className = "team-card">
				<div className = "card">
					<div className = "image-section">
						<img src = ""/>
					</div>
					<div className = "content">
						<h4>Laxmikant Narkhede</h4>
						<h5>Placement Co-ordinator</h5>
						<p>Lorem ipsum dolor sit amet, consectetur adipising elit, sed do elusmod
						tempor incididunt ut labore et dolore magna aliqua</p>
					</div>
				</div>
				<div className = "card">
					<div className = "image-section">
						<img src = ""/>
					</div>
					<div className = "content">
						<h4>Asha Rawat</h4>
						<h5>Faculty Co-ordinator</h5>
						<p>Lorem ipsum dolor sit amet, consectetur adipising elit, sed do elusmod
						tempor incididunt ut labore et dolore magna aliqua</p>
					</div>
				</div>
				<div className = "card">
					<div className = "image-section">
						<img src = ""/>
					</div>
					<div className = "content">
						<h4>Dr. Harsh Nair</h4>
						<h5>President</h5>
						<p>Lorem ipsum dolor sit amet, consectetur adipising elit, sed do elusmod
						tempor incididunt ut labore et dolore magna aliqua</p>
					</div>
				</div>
			</div>
		</div>
	</div>

	<section className = "directors-message">
		<div className = "directors-photo">
			<img src = {user2}/>
		</div>
		<div className = "director-text">
			<h3>Director's Message</h3>
		<p>Lorem ipsum dolor sit amet. Ad autem rem omnis obcaecati qui odio veniam non voluptatum
		Sed sodales justo vel dolor blandit vehicula. Nam convallis mauris at dapibus finibus. Ut et velit quis sapien pulvinar pellentesque.
		</p>
		</div>
	</section>

	<section className = "about-us">
		<div className = "mission-vision">
			<div className = "mission-box">
				<i className = "fa fa-book fa-2x"></i>
				<h2 className = "title"><div style={{color: "#f44336"}}>MISSION</div></h2>
				<p>Lorem ipsum dolor sit amet.
				 Ad autem<br/> autem rem omnis obcaecati qui odio veniam non voluptatum.</p>
			</div>
	
			<div className ="vision-box">
				<i className ="fa fa-globe fa-2x"></i>
				<h2 className = "title"><div style={{color: "#f44336"}}>VISION</div></h2>
				<p>Lorem ipsum dolor sit amet.
				Ad autem <br/>autem rem omnis obcaecati qui odio veniam non voluptatum.</p>        
			</div>
		</div>
	</section>

<div className = "gallery">
	<img src = {campus}/>
	<img src = {bg}/>
	<img src = {about}/>
	<img src = {user2}/>
</div>


	{/* <!-- Footer --> */}
	
	<footer>
		<div className="footer-container">
			<a href="/"><img src="https://engineering.nmims.edu/images/2a4ca0eeb31e71b312f1df1b25865a8a.png"
					alt="NMIMS Logo"/></a>
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
				<li><a href=""><i className="fa fa-brands fa-facebook"></i></a></li>
				<li><a href=""><i className="fa fa-brands fa-twitter"></i></a></li>
				<li><a href=""></a><i className="fa fa-brands fa-youtube"></i></li>
			</div>
	
	
		</div>
	
		<div className="copyright">
			<small>&copy; Copyright 2022. Shri Vile Parle Kelavani Mandal (SVKM) All Rights Reserved.</small>
		</div>
	</footer>

</>
)
}