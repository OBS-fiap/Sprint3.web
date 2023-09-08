
import Facebook from '../assets/Facebook.png'
import Instagram from '../assets/instagram.png'
import Email from '../assets/email.png'

export default function Rodape() {
    return(
        <footer>
            <div className='social-medias'>
                <a className='social-media-logo' href="#"> <img className="footer-img" src={Facebook} alt="Logo do facebook"/></a>
                <a className='social-media-logo' href="#"> <img className="footer-img" src={Email} alt="Logo do e-mail"/></a>
                <a className='social-media-logo' href="#"> <img className="footer-img" src={Instagram} alt="Logo do Instagram"/></a>
            </div>
        </footer>
    )
}