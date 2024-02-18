
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTwitterSquare, faFacebookSquare, faYoutubeSquare } from '@fortawesome/free-brands-svg-icons'
import './landing.css'

export default function Footer(){

    return(
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
			<small>&copy; Copyright 2024. Shri Vile Parle Kelavani Mandal (SVKM) All Rights Reserved.</small>
		</div>
	</footer>


    )


}