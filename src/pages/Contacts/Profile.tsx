import Breadcrumb from '../../components/Breadcrumbs/Breadcrumb'
import User1 from '../../images/profile/1.png'

const Profile = () => {
  return (
    <>
      <Breadcrumb pageName="Profile" />
          <img src={User1} alt="profile cover"/>
    </>
  )
}

export default Profile
