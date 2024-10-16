import { Link } from 'react-router-dom'
import { UserProfile } from '../../types/userProfile.ts'
import UserOne from '../../images/user/user-01.png'
import UserTwo from '../../images/user/user-02.png'
import UserThree from '../../images/user/user-03.png'
import UserFour from '../../images/user/user-04.png'
import UserFive from '../../images/user/user-05.png'
import UserSix from '../../images/user/user-06.png'

const userData: UserProfile[] = [
  {
    id: '1',
    avatar: UserOne,
    name: 'Jeremy Smith',
    text: 'Active buyer',
    time: 1,
    textCount: 3,
    color: '#10B981',
  },
  {
    id: '2',
    avatar: UserTwo,
    name: 'Jenny Smith',
    text: 'Active buyer',
    time: 3,
    textCount: 3,
    color: '#10B981',
  },
  {
    id: '3',
    avatar: UserThree,
    name: 'John Doe',
    text: "Active buyer",
    time: 4,
    textCount: 4,
    color: '#10B981',
  },
  {
    id: '4',
    avatar: UserFour,
    name: 'Jim Cho',
    text: 'Active buyer',
    time: 5,
    textCount: 3,
    color: '#FFBA00',
  },
  {
    id: '5',
    avatar: UserFive,
    name: 'Jasmine Oats',
    text: 'Passive buyer',
    time: 1,
    textCount: 8,
    color: '#DC3545',
  },
  {
    id: '6',
    avatar: UserSix,
    name: 'Jane Doe',
    text: 'Active buyer',
    time: 2,
    textCount: 0,
    color: '#10B981',
  },
]

const UserCard = () => {
  return (
    <div className="col-span-12 rounded-sm border border-stroke bg-white py-6 shadow-default dark:border-strokedark dark:bg-boxdark xl:col-span-4">
      <h4 className="mb-6 px-7.5 text-xl font-semibold text-black dark:text-white">
        Buyer profiles
      </h4>

      <div>
        {userData.map((user, key) => (
          <Link
              to={`/profile/${user.id}`}
            className="flex items-center gap-5 py-3 px-7.5 hover:bg-gray-3 dark:hover:bg-meta-4"
            key={key}
          >
            <div className="relative h-14 w-14 rounded-full">
              <img src={user.avatar} alt="User"/>
              <span
                className="absolute right-0 bottom-0 h-3.5 w-3.5 rounded-full border-2 border-white"
                style={{ backgroundColor: user.color }}
              ></span>
            </div>

            <div className="flex flex-1 items-center justify-between">
              <div>
                <h5 className="font-medium text-black dark:text-white">{user.name}</h5>
                <p>
                  <span className="text-sm text-black dark:text-white">{user.text}</span>
                  <span className="text-xs"> . {user.time} month</span>
                </p>
              </div>
              {user.textCount !== 0 && (
                <div className="flex h-6 w-6 items-center justify-center rounded-full bg-primary">
                  <span className="text-sm font-medium text-white"> {user.textCount}</span>
                </div>
              )}
            </div>
          </Link>
        ))}
      </div>
    </div>
  )
}

export default UserCard
