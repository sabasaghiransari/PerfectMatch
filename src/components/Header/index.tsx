import { Link, useLocation } from 'react-router-dom'
import DropdownMessage from './DropdownMessage'
import DropdownNotification from './DropdownNotification'
import DropdownUser from './DropdownUser'
import LogoIcon from '../../images/logo/logo-icon.svg'
import DarkModeSwitcher from './DarkModeSwitcher'

const Header = (props: {
  sidebarOpen: string | boolean | undefined
  setSidebarOpen: (arg0: boolean) => void
}) => {
  const location = useLocation()
  const isSkylightRoute = location.pathname.includes('skylight')

  return (
    <header className="sticky top-0 z-999 flex w-full bg-white drop-shadow-1 dark:bg-boxdark dark:drop-shadow-none">
      <div className="flex flex-grow items-center justify-between px-4 py-4 shadow-2 md:px-6 2xl:px-11">
        <div className="flex items-center gap-2 sm:gap-4 lg:hidden">
          {/* <!-- Hamburger Toggle BTN --> */}
          <button
            aria-controls="sidebar"
            onClick={(e) => {
              e.stopPropagation()
              props.setSidebarOpen(!props.sidebarOpen)
            }}
            className="z-99999 block rounded-sm border border-stroke bg-white p-1.5 shadow-sm dark:border-strokedark dark:bg-boxdark lg:hidden"
          >
            <span className="relative block h-5.5 w-5.5 cursor-pointer">
              <span className="du-block absolute right-0 h-full w-full">
                <span
                  className={`relative left-0 top-0 my-1 block h-0.5 w-0 rounded-sm bg-black delay-[0] duration-200 ease-in-out dark:bg-white ${
                    !props.sidebarOpen && '!w-full delay-300'
                  }`}
                ></span>
                <span
                  className={`relative left-0 top-0 my-1 block h-0.5 w-0 rounded-sm bg-black delay-150 duration-200 ease-in-out dark:bg-white ${
                    !props.sidebarOpen && 'delay-400 !w-full'
                  }`}
                ></span>
                <span
                  className={`relative left-0 top-0 my-1 block h-0.5 w-0 rounded-sm bg-black delay-200 duration-200 ease-in-out dark:bg-white ${
                    !props.sidebarOpen && '!w-full delay-500'
                  }`}
                ></span>
              </span>
              <span className="absolute right-0 h-full w-full rotate-45">
                <span
                  className={`absolute left-2.5 top-0 block h-full w-0.5 rounded-sm bg-black delay-300 duration-200 ease-in-out dark:bg-white ${
                    !props.sidebarOpen && '!h-0 !delay-[0]'
                  }`}
                ></span>
                <span
                  className={`delay-400 absolute left-0 top-2.5 block h-0.5 w-full rounded-sm bg-black duration-200 ease-in-out dark:bg-white ${
                    !props.sidebarOpen && '!h-0 !delay-200'
                  }`}
                ></span>
              </span>
            </span>
          </button>
          {/* <!-- Hamburger Toggle BTN --> */}

          <Link className="block flex-shrink-0 lg:hidden" to="/">
            <img src={LogoIcon} alt="Logo" />
          </Link>
        </div>

        <div className="hidden sm:flex items-center">
          {isSkylightRoute && (
            <div className="mr-4">
              <svg
                width="243"
                height="42.8"
                viewBox="0 0 1215 214"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <g clip-path="url(#clip0_382_475)">
                  <path
                    d="M451.4 152.62V108.99C451.4 82.33 434.99 74.68 413.92 74.68C391.36 74.68 376.63 86.43 376.44 105.82H393.78C393.59 96.12 399.93 90.72 414.29 90.72C429.77 90.72 434.24 97.43 434.24 103.77C434.24 108.99 433.12 111.79 423.98 113.47L403.28 117.39C385.19 120.75 371.95 128.95 371.95 147.97C371.95 165.5 386.49 175.75 402.72 175.75C417.08 175.75 428.27 170.9 435.54 161.02V163.07C435.54 169.78 439.46 173.33 446.54 173.33H460.15V159.16H457.91C453.06 159.16 451.38 157.3 451.38 152.63L451.4 152.62ZM434.8 135.83C434.8 148.88 423.8 160.07 406.64 160.07C396.38 160.07 390.79 154.85 390.79 146.27C390.79 137.32 396.76 133.59 410.18 130.79L426.78 127.25C429.58 126.69 432.75 125.76 434.8 124.45V135.82V135.83Z"
                    fill="#0EA800"
                  ></path>
                  <path
                    d="M43.45 39.62H0V173.32H41.77C82.98 173.32 110.2 145.16 110.2 106.38C110.2 62.75 78.87 39.62 43.44 39.62H43.45ZM41.77 156.72H18.27V56.4H39.9C70.48 56.4 91.74 73 91.74 106.37C91.74 139.75 68.8 156.72 41.77 156.72Z"
                    fill="#0EA800"
                  ></path>
                  <path d="M487.66 77.14H470.97V173.3H487.66V77.14Z" fill="#0EA800"></path>
                  <path
                    d="M479.28 38.87C473.31 38.87 468.09 43.9 468.09 50.06C468.09 56.4 473.31 61.25 479.28 61.25C485.62 61.25 490.65 56.4 490.65 50.06C490.65 43.91 485.62 38.87 479.28 38.87Z"
                    fill="#0EA800"
                  ></path>
                  <path
                    d="M324.84 72.96L295.07 93.24L265.2 72.96L243.72 87.47V77.15H227.03V173.3H243.72V107.69L265.2 93.18L286.55 107.73V173.3H303.24V107.73L324.84 93.18L346.37 107.73V173.3H363.06V98.72L324.84 72.96Z"
                    fill="#0EA800"
                  ></path>
                  <path
                    d="M167.82 74.63C139.13 74.63 117.5 96.41 117.5 125.28C117.5 154.15 139.13 175.82 167.82 175.82C196.51 175.82 218.14 154.16 218.14 125.28C218.14 96.4 196.51 74.63 167.82 74.63ZM167.82 158.87C149.24 158.87 134.17 143.8 134.17 125.22C134.17 106.64 149.24 91.57 167.82 91.57C186.4 91.57 201.47 106.64 201.47 125.22C201.47 143.8 186.4 158.87 167.82 158.87Z"
                    fill="#0EA800"
                  ></path>
                  <path
                    d="M547 74.67C535.25 74.67 524.44 79.89 519.5 86.98V77.15H502.81V173.32H519.5V112.66C519.5 99.84 529.89 89.44 542.72 89.44C557.51 89.44 565.94 101.65 565.94 112.66V173.32H582.63V112.48C582.63 90.29 569.39 74.68 547.01 74.68L547 74.67Z"
                    fill="#0EA800"
                  ></path>
                  <path
                    d="M606.51 131.73H624.22C624.03 151.5 636.53 160.07 657.04 160.07C677.55 160.07 687.25 153.17 687.25 139C687.25 123.52 673.26 118.67 653.87 113.08C630.19 106.18 610.23 98.35 610.23 74.29C610.23 48.56 632.98 37 655.54 37C679.97 37 702.91 48 703.65 78.77H685.94C685.19 59.94 670.84 53.41 655.54 53.41C641.55 53.41 628.31 57.14 628.31 72.24C628.31 84.92 635.02 88.84 661.5 97.41C685 104.68 705.14 111.77 705.14 136.57C705.14 161.37 685.19 176.48 656.66 176.48C625.7 176.48 606.5 162.49 606.5 131.73H606.51Z"
                    fill="#005837"
                  ></path>
                  <path
                    d="M780.96 173.31L749.26 124.45L736.39 137.13V173.31H719.61V39.61H736.39V117L777.6 77.09H797.93L761.38 112.71L801.29 173.32H780.96V173.31Z"
                    fill="#005837"
                  ></path>
                  <path
                    d="M810.62 197.18H824.23C829.08 197.18 832.99 196.25 835.23 194.38C837.47 192.51 838.96 189.72 838.96 186.36C838.96 182.63 837.84 178.53 835.79 172.56L801.48 77.08H820.87L836.91 126.87L848.66 162.67L859.1 126.87L872.34 77.08H890.62L855.38 189.71C849.79 207.61 842.51 213.02 828.15 213.02H810.62V197.17V197.18Z"
                    fill="#005837"
                  ></path>
                  <path
                    d="M898.3 155.23V39.61H914.9V152.62C914.9 158.21 917.88 159.15 921.8 159.15H928.89V173.32H918.07C907.63 173.32 898.3 169.22 898.3 155.23Z"
                    fill="#005837"
                  ></path>
                  <path
                    d="M934.17 50.05C934.17 43.9 939.39 38.86 945.36 38.86C951.7 38.86 956.74 43.89 956.74 50.05C956.74 56.21 951.7 61.24 945.36 61.24C939.39 61.24 934.17 56.39 934.17 50.05ZM936.97 77.09H953.75V173.31H936.97V77.09Z"
                    fill="#005837"
                  ></path>
                  <path
                    d="M1052.45 77.09V173.31C1052.45 201.84 1039.02 213.03 1014.97 213.03H978.98V197.18H1010.12C1028.39 197.18 1035.67 191.03 1035.67 172.38V164.17C1028.77 171.44 1019.45 175.73 1007.88 175.73C981.77 175.73 966.11 156.15 966.11 125.57C966.11 94.99 982.71 74.66 1007.69 74.66C1020.18 74.66 1029.69 79.32 1036.41 86.78V77.08H1052.45V77.09ZM1036.04 125.2C1036.04 104.69 1026.53 90.33 1009.19 90.33C991.85 90.33 982.9 105.25 982.9 125.2C982.9 145.15 992.22 159.88 1009.01 159.88C1025.8 159.88 1036.05 144.96 1036.05 125.2H1036.04Z"
                    fill="#005837"
                  ></path>
                  <path
                    d="M1070.33 39.61H1086.93V86.23C1092.9 78.96 1103.15 74.67 1114.16 74.67C1136.54 74.67 1150.15 88.84 1150.15 112.53V173.32H1133.37L1133.56 116.63C1133.56 100.97 1125.35 90.71 1110.44 90.71C1101.12 90.71 1092.91 97.05 1089.93 103.95C1087.69 108.8 1087.13 113.46 1087.13 121.29V173.32H1070.35V39.61H1070.33Z"
                    fill="#005837"
                  ></path>
                  <path
                    d="M1174.28 151.5V92.39H1156.19V77.1H1174.28V49.87H1191.06V77.1H1214.56V92.39H1191.06V147.77C1191.06 156.72 1194.6 158.4 1202.81 158.4H1214.93V173.32H1198.52C1184.72 173.32 1174.28 169.78 1174.28 151.5Z"
                    fill="#005837"
                  ></path>
                </g>
                <defs>
                  <clipPath id="clip0_382_475">
                    <rect width="1214.94" height="213.03" fill="white"></rect>
                  </clipPath>
                </defs>
              </svg>
            </div>
          )}
          <form action="https://formbold.com/s/unique_form_id" method="POST">
            <div className="relative">
              <button className="absolute left-0 top-1/2 -translate-y-1/2">
                <svg
                  className="fill-body hover:fill-primary dark:fill-bodydark dark:hover:fill-primary"
                  width="20"
                  height="20"
                  viewBox="0 0 20 20"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    fillRule="evenodd"
                    clipRule="evenodd"
                    d="M9.16666 3.33332C5.945 3.33332 3.33332 5.945 3.33332 9.16666C3.33332 12.3883 5.945 15 9.16666 15C12.3883 15 15 12.3883 15 9.16666C15 5.945 12.3883 3.33332 9.16666 3.33332ZM1.66666 9.16666C1.66666 5.02452 5.02452 1.66666 9.16666 1.66666C13.3088 1.66666 16.6667 5.02452 16.6667 9.16666C16.6667 13.3088 13.3088 16.6667 9.16666 16.6667C5.02452 16.6667 1.66666 13.3088 1.66666 9.16666Z"
                    fill=""
                  />
                  <path
                    fillRule="evenodd"
                    clipRule="evenodd"
                    d="M13.2857 13.2857C13.6112 12.9603 14.1388 12.9603 14.4642 13.2857L18.0892 16.9107C18.4147 17.2362 18.4147 17.7638 18.0892 18.0892C17.7638 18.4147 17.2362 18.4147 16.9107 18.0892L13.2857 14.4642C12.9603 14.1388 12.9603 13.6112 13.2857 13.2857Z"
                    fill=""
                  />
                </svg>
              </button>

              <input
                type="text"
                placeholder="Type to search..."
                className="w-full bg-transparent pl-9 pr-4 text-black focus:outline-none dark:text-white xl:w-125"
              />
            </div>
          </form>
        </div>

        <div className="flex items-center gap-3 2xsm:gap-7">
          <ul className="flex items-center gap-2 2xsm:gap-4">
            {/* <!-- Dark Mode Toggler --> */}
            <DarkModeSwitcher />
            {/* <!-- Dark Mode Toggler --> */}

            {/* <!-- Notification Menu Area --> */}
            <DropdownNotification />
            {/* <!-- Notification Menu Area --> */}

            {/* <!-- Chat Notification Area --> */}
            <DropdownMessage />
            {/* <!-- Chat Notification Area --> */}
          </ul>

          {/* <!-- User Area --> */}
          <DropdownUser />
          {/* <!-- User Area --> */}
        </div>
      </div>
    </header>
  )
}

export default Header
