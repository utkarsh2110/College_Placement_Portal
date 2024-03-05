import "../styles/landing.css"
import user1 from "../assets/user1.jpg"
import user2 from "../assets/user2.jpg"
import company from "../assets/company.webp"
import nmimsLogo from "../assets/nmims.png"
import Footer from "../pages/footer"

export default function Landing()
{
	return(
		<>
		<div>
		<section className="header">
			<nav>
				<a href="/"><img src={nmimsLogo} alt="NMIMS Logo"/></a>
				<div className="nav-links" id="navLinks">
					<i className="fa fa-times" ></i>				
					<ul>
						<li><a href="/about">ABOUT</a></li>
						<li><a href="#sch">SCHOOLS</a></li>
						<li><a href="/contact">CONTACT</a></li>
						<li><a href="/register">REGISTER</a></li>
						<li><a href="/login">LOGIN</a></li>
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
	

	<Footer/>

	</div>
	</>
)
}

		