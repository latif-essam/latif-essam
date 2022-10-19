import './index.scss'
import profile from '../../../assets/images/myAvatar.svg'

interface LogoProps {}

const Logo = ({}: LogoProps) => {
  return (
    <div className="logo-container">
      <img src={profile} alt="profile" className="solid-logo" />
    </div>
  )
}

export default Logo
