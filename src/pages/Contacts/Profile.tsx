import {useParams} from "react-router-dom";
import {useEffect, useState} from "react";

const Profile = () => {
    const { id } = useParams<{ id: string }>();
    const [imageSrc, setImageSrc] = useState<string>('');

    useEffect(() => {
        import(`../../images/profile/${id}.png`)
            .then(image => setImageSrc(image.default))
            .catch(err => console.error(err));
    }, [id]);

  return (
    <>
        <img src={imageSrc} alt="user persona" />
    </>
  )
}

export default Profile
