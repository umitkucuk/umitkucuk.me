import Image from 'next/image'
import { ProfilePhotoWrapper } from './ProfilePhoto.style'
import profilePhoto from 'public/pp.jpeg'

const ProfilePhoto = () => {
  return (
    <ProfilePhotoWrapper>
      <Image
        src={profilePhoto}
        layout="fill"
        objectFit="fill"
        alt="Photo of Ümit Küçük"
        quality={100}
      />
    </ProfilePhotoWrapper>
  )
}

export default ProfilePhoto
