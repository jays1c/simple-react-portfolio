import { header } from '../../portfolio'
import Navbar from '../Navbar/Navbar'
import './Header.css'
import '../../App.css'
import myLogo from '../../Resources/Triple IT.png';


const Header = () => {
  const { logo, imgLogo } = header

  return (
    <header className='header center'>
      <h3>
        {logo ? (
            <a href={logo}>
                <img src={myLogo} className="btn--icon my--logo" alt="" title="Link to GitHub Repo"/>
            </a>

        ) : (
            imgLogo
        )}
      </h3>
      <Navbar />
    </header>
  )
}

export default Header
