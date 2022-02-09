function CardBody() {
    return ( <>
    <div className="mx-auto container px-6 xl:px-0 py-2">
   <div className="flex flex-col">
    <div className="flex flex-col justify-center">
      <div className="relative">
        <img className=":block w-full" src="data:image/jpeg;base64,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" alt="sofa" />
        <div className="absolute sm:bottom-8 bottom-4 pr-10 sm:pr-0 left-4 sm:left-8 flex justify-start items-start">
          <p className="text-3xl sm:text-4xl font-semibold leading-9 text-white">City-Tour O'zbekiston bo'ylab sayohatlar</p>
        </div>
      </div>
    </div>
    <div className="mt-10 grid lg:grid-cols-2 gap-x-8 gap-y-8 items-center">
      <div className="group group-hover:bg-opacity-60 transition duration-500 relative bg-gray-50 dark:bg-gray-800 dark:hover:bg-gray-700 sm:p-28 py-36 px-10 flex justify-center items-center">
        <img className="group-hover:opacity-60 transition duration-500" src="https://s1.cdn.autoevolution.com/images/news/gallery/mercedes-recalls-new-s-className-for-stalling-engine-issue_84.jpg" alt="sofa-2" />
        <div className="absolute sm:top-8 top-4 left-4 sm:left-8 flex justify-start items-start flex-col space-y-2">
          <div>
            <p className="group-hover:opacity-60 transition duration-500 text-xl leading-5 text-gray-600 dark:text-white">Sectional Sofa</p>
          </div>
          <div>
            <p className="group-hover:opacity-60 transition duration-500 text-xl font-semibold leading-5 text-gray-800 dark:text-white"></p>
          </div>
        </div>
        <div className="group-hover:opacity-60 transition duration-500 absolute bottom-8 right-8 flex justify-start items-start flex-row space-x-2">
          <button className="bg-white border rounded-full focus:bg-gray-800 border-gray-600 p-1.5"></button>
          <button className="bg-white border rounded-full focus:bg-gray-800 border-gray-600 p-1.5"></button>
        </div>
        <div className="flex flex-col bottom-8 left-8 space-y-4 absolute opacity-0 group-hover:opacity-100 transition duration-500">
          <button>
            <svg className="dark:text-white" width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M12 2C10.0222 2 8.08879 2.58649 6.4443 3.6853C4.79981 4.78412 3.51809 6.3459 2.76121 8.17317C2.00433 10.0004 1.8063 12.0111 2.19215 13.9509C2.578 15.8907 3.53041 17.6725 4.92894 19.0711C6.32746 20.4696 8.10929 21.422 10.0491 21.8079C11.9889 22.1937 13.9996 21.9957 15.8268 21.2388C17.6541 20.4819 19.2159 19.2002 20.3147 17.5557C21.4135 15.9112 22 13.9778 22 12C22 10.6868 21.7413 9.38642 21.2388 8.17317C20.7363 6.95991 19.9997 5.85752 19.0711 4.92893C18.1425 4.00035 17.0401 3.26375 15.8268 2.7612C14.6136 2.25866 13.3132 2 12 2ZM15 13H13V15C13 15.2652 12.8946 15.5196 12.7071 15.7071C12.5196 15.8946 12.2652 16 12 16C11.7348 16 11.4804 15.8946 11.2929 15.7071C11.1054 15.5196 11 15.2652 11 15V13H9C8.73479 13 8.48043 12.8946 8.2929 12.7071C8.10536 12.5196 8 12.2652 8 12C8 11.7348 8.10536 11.4804 8.2929 11.2929C8.48043 11.1054 8.73479 11 9 11H11V9C11 8.73478 11.1054 8.48043 11.2929 8.29289C11.4804 8.10536 11.7348 8 12 8C12.2652 8 12.5196 8.10536 12.7071 8.29289C12.8946 8.48043 13 8.73478 13 9V11H15C15.2652 11 15.5196 11.1054 15.7071 11.2929C15.8946 11.4804 16 11.7348 16 12C16 12.2652 15.8946 12.5196 15.7071 12.7071C15.5196 12.8946 15.2652 13 15 13Z" fill="currentColor" />
            </svg>
          </button>
          <button>
            <svg className="dark:text-white" width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M12 13.5C12.8284 13.5 13.5 12.8284 13.5 12C13.5 11.1716 12.8284 10.5 12 10.5C11.1716 10.5 10.5 11.1716 10.5 12C10.5 12.8284 11.1716 13.5 12 13.5Z" fill="currentColor" />
              <path d="M21.8701 11.5C21.2301 10.39 17.7101 4.82001 11.7301 5.00001C6.20007 5.14001 3.00007 10 2.13007 11.5C2.0423 11.652 1.99609 11.8245 1.99609 12C1.99609 12.1755 2.0423 12.348 2.13007 12.5C2.76007 13.59 6.13007 19 12.0201 19H12.2701C17.8001 18.86 21.0101 14 21.8701 12.5C21.9578 12.348 22.004 12.1755 22.004 12C22.004 11.8245 21.9578 11.652 21.8701 11.5ZM12.0001 15.5C11.3078 15.5 10.6311 15.2947 10.0556 14.9102C9.48 14.5256 9.0314 13.9789 8.76649 13.3394C8.50158 12.6999 8.43227 11.9961 8.56732 11.3172C8.70237 10.6383 9.03571 10.0146 9.52519 9.52514C10.0147 9.03565 10.6383 8.70231 11.3173 8.56726C11.9962 8.43221 12.6999 8.50152 13.3395 8.76643C13.979 9.03134 14.5256 9.47994 14.9102 10.0555C15.2948 10.6311 15.5001 11.3078 15.5001 12C15.5001 12.9283 15.1313 13.8185 14.4749 14.4749C13.8186 15.1313 12.9283 15.5 12.0001 15.5Z" fill="currentColor" />
            </svg>
          </button>
          <button>
            <svg className="dark:text-white" width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M12 21C11.8684 21.0008 11.7379 20.9755 11.6161 20.9258C11.4943 20.876 11.3834 20.8027 11.29 20.71L3.51999 12.93C2.54536 11.9452 1.99866 10.6156 1.99866 9.23C1.99866 7.84443 2.54536 6.51482 3.51999 5.53C4.50226 4.55051 5.83283 4.00047 7.21999 4.00047C8.60716 4.00047 9.93773 4.55051 10.92 5.53L12 6.61L13.08 5.53C14.0623 4.55051 15.3928 4.00047 16.78 4.00047C18.1672 4.00047 19.4977 4.55051 20.48 5.53C21.4546 6.51482 22.0013 7.84443 22.0013 9.23C22.0013 10.6156 21.4546 11.9452 20.48 12.93L12.71 20.71C12.6166 20.8027 12.5057 20.876 12.3839 20.9258C12.2621 20.9755 12.1316 21.0008 12 21Z" fill="currentColor" />
            </svg>
          </button>
        </div>
      </div>

      <div className="group group-hover:bg-opacity-60 transition duration-500 relative bg-gray-50 dark:bg-gray-800 dark:hover:bg-gray-700 sm:p-28 py-36 px-10 flex justify-center items-center">
        <img className="group-hover:opacity-60 transition duration-500" src="https://www.wallpaperup.com/uploads/wallpapers/2017/01/25/1076108/10171f7b81c2cc85c2250abca59673fb.jpg" alt="sofa-3" />
        <div className="absolute sm:top-8 top-4 left-4 sm:left-8 flex justify-start items-start flex-col space-y-2">
          <div>
            <p className="group-hover:opacity-60 transition duration-500 text-xl leading-5 text-gray-600 dark:text-white">Two Seater Sofa</p>
          </div>
          <div>
            <p className="group-hover:opacity-60 transition duration-500 text-xl font-semibold leading-5 text-gray-800 dark:text-white"></p>
          </div>
        </div>
        <div className="group-hover:opacity-60 transition duration-500 absolute bottom-8 right-8 flex justify-start items-start flex-row space-x-2">
          <button className="bg-white border rounded-full focus:bg-gray-800 border-gray-600 p-1.5"></button>
          <button className="bg-white border rounded-full focus:bg-gray-800 border-gray-600 p-1.5"></button>
        </div>
        <div className="flex flex-col bottom-8 left-8 space-y-4 absolute opacity-0 group-hover:opacity-100 transition duration-500">
          <button>
            <svg className="dark:text-white" width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M12 2C10.0222 2 8.08879 2.58649 6.4443 3.6853C4.79981 4.78412 3.51809 6.3459 2.76121 8.17317C2.00433 10.0004 1.8063 12.0111 2.19215 13.9509C2.578 15.8907 3.53041 17.6725 4.92894 19.0711C6.32746 20.4696 8.10929 21.422 10.0491 21.8079C11.9889 22.1937 13.9996 21.9957 15.8268 21.2388C17.6541 20.4819 19.2159 19.2002 20.3147 17.5557C21.4135 15.9112 22 13.9778 22 12C22 10.6868 21.7413 9.38642 21.2388 8.17317C20.7363 6.95991 19.9997 5.85752 19.0711 4.92893C18.1425 4.00035 17.0401 3.26375 15.8268 2.7612C14.6136 2.25866 13.3132 2 12 2ZM15 13H13V15C13 15.2652 12.8946 15.5196 12.7071 15.7071C12.5196 15.8946 12.2652 16 12 16C11.7348 16 11.4804 15.8946 11.2929 15.7071C11.1054 15.5196 11 15.2652 11 15V13H9C8.73479 13 8.48043 12.8946 8.2929 12.7071C8.10536 12.5196 8 12.2652 8 12C8 11.7348 8.10536 11.4804 8.2929 11.2929C8.48043 11.1054 8.73479 11 9 11H11V9C11 8.73478 11.1054 8.48043 11.2929 8.29289C11.4804 8.10536 11.7348 8 12 8C12.2652 8 12.5196 8.10536 12.7071 8.29289C12.8946 8.48043 13 8.73478 13 9V11H15C15.2652 11 15.5196 11.1054 15.7071 11.2929C15.8946 11.4804 16 11.7348 16 12C16 12.2652 15.8946 12.5196 15.7071 12.7071C15.5196 12.8946 15.2652 13 15 13Z" fill="currentColor" />
            </svg>
          </button>
          <button>
            <svg className="dark:text-white" width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M12 13.5C12.8284 13.5 13.5 12.8284 13.5 12C13.5 11.1716 12.8284 10.5 12 10.5C11.1716 10.5 10.5 11.1716 10.5 12C10.5 12.8284 11.1716 13.5 12 13.5Z" fill="currentColor" />
              <path d="M21.8701 11.5C21.2301 10.39 17.7101 4.82001 11.7301 5.00001C6.20007 5.14001 3.00007 10 2.13007 11.5C2.0423 11.652 1.99609 11.8245 1.99609 12C1.99609 12.1755 2.0423 12.348 2.13007 12.5C2.76007 13.59 6.13007 19 12.0201 19H12.2701C17.8001 18.86 21.0101 14 21.8701 12.5C21.9578 12.348 22.004 12.1755 22.004 12C22.004 11.8245 21.9578 11.652 21.8701 11.5ZM12.0001 15.5C11.3078 15.5 10.6311 15.2947 10.0556 14.9102C9.48 14.5256 9.0314 13.9789 8.76649 13.3394C8.50158 12.6999 8.43227 11.9961 8.56732 11.3172C8.70237 10.6383 9.03571 10.0146 9.52519 9.52514C10.0147 9.03565 10.6383 8.70231 11.3173 8.56726C11.9962 8.43221 12.6999 8.50152 13.3395 8.76643C13.979 9.03134 14.5256 9.47994 14.9102 10.0555C15.2948 10.6311 15.5001 11.3078 15.5001 12C15.5001 12.9283 15.1313 13.8185 14.4749 14.4749C13.8186 15.1313 12.9283 15.5 12.0001 15.5Z" fill="currentColor" />
            </svg>
          </button>
          <button>
            <svg className="dark:text-white" width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M12 21C11.8684 21.0008 11.7379 20.9755 11.6161 20.9258C11.4943 20.876 11.3834 20.8027 11.29 20.71L3.51999 12.93C2.54536 11.9452 1.99866 10.6156 1.99866 9.23C1.99866 7.84443 2.54536 6.51482 3.51999 5.53C4.50226 4.55051 5.83283 4.00047 7.21999 4.00047C8.60716 4.00047 9.93773 4.55051 10.92 5.53L12 6.61L13.08 5.53C14.0623 4.55051 15.3928 4.00047 16.78 4.00047C18.1672 4.00047 19.4977 4.55051 20.48 5.53C21.4546 6.51482 22.0013 7.84443 22.0013 9.23C22.0013 10.6156 21.4546 11.9452 20.48 12.93L12.71 20.71C12.6166 20.8027 12.5057 20.876 12.3839 20.9258C12.2621 20.9755 12.1316 21.0008 12 21Z" fill="currentColor" />
            </svg>
          </button>
        </div>
      </div>

      <div className="group group-hover:bg-opacity-60 transition duration-500 relative bg-gray-50 dark:bg-gray-800 dark:hover:bg-gray-700 sm:p-28 py-36 px-10 flex justify-center items-center">
        <img className="group-hover:opacity-60 transition duration-500" src="" alt="sofa-4" />
        <div className="absolute sm:top-8 top-4 left-4 sm:left-8 flex justify-start items-start flex-col space-y-2">
          <div>
            <p className="group-hover:opacity-60 transition duration-500 text-xl leading-5 text-gray-600 dark:text-white">Sectional Sofa</p>
          </div>
          <div>
            <p className="group-hover:opacity-60 transition duration-500 text-xl font-semibold leading-5 text-gray-800 dark:text-white"></p>
          </div>
        </div>
        <div className="group-hover:opacity-60 transition duration-500 absolute bottom-8 right-8 flex justify-start items-start flex-row space-x-2">
          <button className="bg-white border rounded-full focus:bg-gray-800 border-gray-600 p-1.5"></button>
          <button className="bg-white border rounded-full focus:bg-gray-800 border-gray-600 p-1.5"></button>
        </div>
        <div className="flex flex-col bottom-8 left-8 space-y-4 absolute opacity-0 group-hover:opacity-100 transition duration-500">
          <button>
            <svg className="dark:text-white" width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M12 2C10.0222 2 8.08879 2.58649 6.4443 3.6853C4.79981 4.78412 3.51809 6.3459 2.76121 8.17317C2.00433 10.0004 1.8063 12.0111 2.19215 13.9509C2.578 15.8907 3.53041 17.6725 4.92894 19.0711C6.32746 20.4696 8.10929 21.422 10.0491 21.8079C11.9889 22.1937 13.9996 21.9957 15.8268 21.2388C17.6541 20.4819 19.2159 19.2002 20.3147 17.5557C21.4135 15.9112 22 13.9778 22 12C22 10.6868 21.7413 9.38642 21.2388 8.17317C20.7363 6.95991 19.9997 5.85752 19.0711 4.92893C18.1425 4.00035 17.0401 3.26375 15.8268 2.7612C14.6136 2.25866 13.3132 2 12 2ZM15 13H13V15C13 15.2652 12.8946 15.5196 12.7071 15.7071C12.5196 15.8946 12.2652 16 12 16C11.7348 16 11.4804 15.8946 11.2929 15.7071C11.1054 15.5196 11 15.2652 11 15V13H9C8.73479 13 8.48043 12.8946 8.2929 12.7071C8.10536 12.5196 8 12.2652 8 12C8 11.7348 8.10536 11.4804 8.2929 11.2929C8.48043 11.1054 8.73479 11 9 11H11V9C11 8.73478 11.1054 8.48043 11.2929 8.29289C11.4804 8.10536 11.7348 8 12 8C12.2652 8 12.5196 8.10536 12.7071 8.29289C12.8946 8.48043 13 8.73478 13 9V11H15C15.2652 11 15.5196 11.1054 15.7071 11.2929C15.8946 11.4804 16 11.7348 16 12C16 12.2652 15.8946 12.5196 15.7071 12.7071C15.5196 12.8946 15.2652 13 15 13Z" fill="currentColor" />
            </svg>
          </button>
          <button>
            <svg className="dark:text-white" width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M12 13.5C12.8284 13.5 13.5 12.8284 13.5 12C13.5 11.1716 12.8284 10.5 12 10.5C11.1716 10.5 10.5 11.1716 10.5 12C10.5 12.8284 11.1716 13.5 12 13.5Z" fill="currentColor" />
              <path d="M21.8701 11.5C21.2301 10.39 17.7101 4.82001 11.7301 5.00001C6.20007 5.14001 3.00007 10 2.13007 11.5C2.0423 11.652 1.99609 11.8245 1.99609 12C1.99609 12.1755 2.0423 12.348 2.13007 12.5C2.76007 13.59 6.13007 19 12.0201 19H12.2701C17.8001 18.86 21.0101 14 21.8701 12.5C21.9578 12.348 22.004 12.1755 22.004 12C22.004 11.8245 21.9578 11.652 21.8701 11.5ZM12.0001 15.5C11.3078 15.5 10.6311 15.2947 10.0556 14.9102C9.48 14.5256 9.0314 13.9789 8.76649 13.3394C8.50158 12.6999 8.43227 11.9961 8.56732 11.3172C8.70237 10.6383 9.03571 10.0146 9.52519 9.52514C10.0147 9.03565 10.6383 8.70231 11.3173 8.56726C11.9962 8.43221 12.6999 8.50152 13.3395 8.76643C13.979 9.03134 14.5256 9.47994 14.9102 10.0555C15.2948 10.6311 15.5001 11.3078 15.5001 12C15.5001 12.9283 15.1313 13.8185 14.4749 14.4749C13.8186 15.1313 12.9283 15.5 12.0001 15.5Z" fill="currentColor" />
            </svg>
          </button>
          <button>
            <svg className="dark:text-white" width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M12 21C11.8684 21.0008 11.7379 20.9755 11.6161 20.9258C11.4943 20.876 11.3834 20.8027 11.29 20.71L3.51999 12.93C2.54536 11.9452 1.99866 10.6156 1.99866 9.23C1.99866 7.84443 2.54536 6.51482 3.51999 5.53C4.50226 4.55051 5.83283 4.00047 7.21999 4.00047C8.60716 4.00047 9.93773 4.55051 10.92 5.53L12 6.61L13.08 5.53C14.0623 4.55051 15.3928 4.00047 16.78 4.00047C18.1672 4.00047 19.4977 4.55051 20.48 5.53C21.4546 6.51482 22.0013 7.84443 22.0013 9.23C22.0013 10.6156 21.4546 11.9452 20.48 12.93L12.71 20.71C12.6166 20.8027 12.5057 20.876 12.3839 20.9258C12.2621 20.9755 12.1316 21.0008 12 21Z" fill="currentColor" />
            </svg>
          </button>
        </div>
      </div>

      <div className="group group-hover:bg-opacity-60 transition duration-500 relative bg-gray-50 dark:bg-gray-800 dark:hover:bg-gray-700 sm:p-28 py-36 px-10 flex justify-center items-center">
        <img className="group-hover:opacity-60 transition duration-500" src="" alt="sofa-5" />
        <div className="absolute sm:top-8 top-4 left-4 sm:left-8 flex justify-start items-start flex-col space-y-2">
          <div>
            <p className="group-hover:opacity-60 transition duration-500 text-xl leading-5 text-gray-600 dark:text-white">Sectional Sofa</p>
          </div>
          <div>
            <p className="group-hover:opacity-60 transition duration-500 text-xl font-semibold leading-5 text-gray-800 dark:text-white"></p>
          </div>
        </div>
        <div className="group-hover:opacity-60 transition duration-500 absolute bottom-8 right-8 flex justify-start items-start flex-row space-x-2">
          <button className="bg-white border rounded-full focus:bg-gray-800 border-gray-600 p-1.5"></button>
          <button className="bg-white border rounded-full focus:bg-gray-800 border-gray-600 p-1.5"></button>
        </div>
        <div className="flex flex-col bottom-8 left-8 space-y-4 absolute opacity-0 group-hover:opacity-100 transition duration-500">
          <button>
            <svg className="dark:text-white" width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M12 2C10.0222 2 8.08879 2.58649 6.4443 3.6853C4.79981 4.78412 3.51809 6.3459 2.76121 8.17317C2.00433 10.0004 1.8063 12.0111 2.19215 13.9509C2.578 15.8907 3.53041 17.6725 4.92894 19.0711C6.32746 20.4696 8.10929 21.422 10.0491 21.8079C11.9889 22.1937 13.9996 21.9957 15.8268 21.2388C17.6541 20.4819 19.2159 19.2002 20.3147 17.5557C21.4135 15.9112 22 13.9778 22 12C22 10.6868 21.7413 9.38642 21.2388 8.17317C20.7363 6.95991 19.9997 5.85752 19.0711 4.92893C18.1425 4.00035 17.0401 3.26375 15.8268 2.7612C14.6136 2.25866 13.3132 2 12 2ZM15 13H13V15C13 15.2652 12.8946 15.5196 12.7071 15.7071C12.5196 15.8946 12.2652 16 12 16C11.7348 16 11.4804 15.8946 11.2929 15.7071C11.1054 15.5196 11 15.2652 11 15V13H9C8.73479 13 8.48043 12.8946 8.2929 12.7071C8.10536 12.5196 8 12.2652 8 12C8 11.7348 8.10536 11.4804 8.2929 11.2929C8.48043 11.1054 8.73479 11 9 11H11V9C11 8.73478 11.1054 8.48043 11.2929 8.29289C11.4804 8.10536 11.7348 8 12 8C12.2652 8 12.5196 8.10536 12.7071 8.29289C12.8946 8.48043 13 8.73478 13 9V11H15C15.2652 11 15.5196 11.1054 15.7071 11.2929C15.8946 11.4804 16 11.7348 16 12C16 12.2652 15.8946 12.5196 15.7071 12.7071C15.5196 12.8946 15.2652 13 15 13Z" fill="currentColor" />
            </svg>
          </button>
          <button>
            <svg className="dark:text-white" width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M12 13.5C12.8284 13.5 13.5 12.8284 13.5 12C13.5 11.1716 12.8284 10.5 12 10.5C11.1716 10.5 10.5 11.1716 10.5 12C10.5 12.8284 11.1716 13.5 12 13.5Z" fill="currentColor" />
              <path d="M21.8701 11.5C21.2301 10.39 17.7101 4.82001 11.7301 5.00001C6.20007 5.14001 3.00007 10 2.13007 11.5C2.0423 11.652 1.99609 11.8245 1.99609 12C1.99609 12.1755 2.0423 12.348 2.13007 12.5C2.76007 13.59 6.13007 19 12.0201 19H12.2701C17.8001 18.86 21.0101 14 21.8701 12.5C21.9578 12.348 22.004 12.1755 22.004 12C22.004 11.8245 21.9578 11.652 21.8701 11.5ZM12.0001 15.5C11.3078 15.5 10.6311 15.2947 10.0556 14.9102C9.48 14.5256 9.0314 13.9789 8.76649 13.3394C8.50158 12.6999 8.43227 11.9961 8.56732 11.3172C8.70237 10.6383 9.03571 10.0146 9.52519 9.52514C10.0147 9.03565 10.6383 8.70231 11.3173 8.56726C11.9962 8.43221 12.6999 8.50152 13.3395 8.76643C13.979 9.03134 14.5256 9.47994 14.9102 10.0555C15.2948 10.6311 15.5001 11.3078 15.5001 12C15.5001 12.9283 15.1313 13.8185 14.4749 14.4749C13.8186 15.1313 12.9283 15.5 12.0001 15.5Z" fill="currentColor" />
            </svg>
          </button>
          <button>
            <svg className="dark:text-white" width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M12 21C11.8684 21.0008 11.7379 20.9755 11.6161 20.9258C11.4943 20.876 11.3834 20.8027 11.29 20.71L3.51999 12.93C2.54536 11.9452 1.99866 10.6156 1.99866 9.23C1.99866 7.84443 2.54536 6.51482 3.51999 5.53C4.50226 4.55051 5.83283 4.00047 7.21999 4.00047C8.60716 4.00047 9.93773 4.55051 10.92 5.53L12 6.61L13.08 5.53C14.0623 4.55051 15.3928 4.00047 16.78 4.00047C18.1672 4.00047 19.4977 4.55051 20.48 5.53C21.4546 6.51482 22.0013 7.84443 22.0013 9.23C22.0013 10.6156 21.4546 11.9452 20.48 12.93L12.71 20.71C12.6166 20.8027 12.5057 20.876 12.3839 20.9258C12.2621 20.9755 12.1316 21.0008 12 21Z" fill="currentColor" />
            </svg>
          </button>
        </div>
        <div className="absolute top-4 right-6">
          <p className="text-base leading-4 pb-0.5 text-gray-600 dark:text-white border-b-2 border-gray-600">New</p>
        </div>
      </div>

      <div className="group group-hover:bg-opacity-60 transition duration-500 relative bg-gray-50 dark:bg-gray-800 dark:hover:bg-gray-700 sm:p-28 py-36 px-10 flex justify-center items-center">
        <img className="group-hover:opacity-60 transition duration-500" src="" alt="sofa-6" />
        <div className="absolute sm:top-8 top-4 left-4 sm:left-8 flex justify-start items-start flex-col space-y-2">
          <div>
            <p className="group-hover:opacity-60 transition duration-500 text-xl leading-5 text-gray-600 dark:text-white">Sectional Sofa</p>
          </div>
          <div>
            <p className="group-hover:opacity-60 transition duration-500 text-xl font-semibold leading-5 text-gray-800 dark:text-white"></p>
          </div>
        </div>
        <div className="group-hover:opacity-60 transition duration-500 absolute bottom-8 right-8 flex justify-start items-start flex-row space-x-2">
          <button className="bg-white border rounded-full focus:bg-gray-800 border-gray-600 p-1.5"></button>
          <button className="bg-white border rounded-full focus:bg-gray-800 border-gray-600 p-1.5"></button>
        </div>
        <div className="flex flex-col bottom-8 left-8 space-y-4 absolute opacity-0 group-hover:opacity-100 transition duration-500">
          <button>
            <svg className="dark:text-white" width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M12 2C10.0222 2 8.08879 2.58649 6.4443 3.6853C4.79981 4.78412 3.51809 6.3459 2.76121 8.17317C2.00433 10.0004 1.8063 12.0111 2.19215 13.9509C2.578 15.8907 3.53041 17.6725 4.92894 19.0711C6.32746 20.4696 8.10929 21.422 10.0491 21.8079C11.9889 22.1937 13.9996 21.9957 15.8268 21.2388C17.6541 20.4819 19.2159 19.2002 20.3147 17.5557C21.4135 15.9112 22 13.9778 22 12C22 10.6868 21.7413 9.38642 21.2388 8.17317C20.7363 6.95991 19.9997 5.85752 19.0711 4.92893C18.1425 4.00035 17.0401 3.26375 15.8268 2.7612C14.6136 2.25866 13.3132 2 12 2ZM15 13H13V15C13 15.2652 12.8946 15.5196 12.7071 15.7071C12.5196 15.8946 12.2652 16 12 16C11.7348 16 11.4804 15.8946 11.2929 15.7071C11.1054 15.5196 11 15.2652 11 15V13H9C8.73479 13 8.48043 12.8946 8.2929 12.7071C8.10536 12.5196 8 12.2652 8 12C8 11.7348 8.10536 11.4804 8.2929 11.2929C8.48043 11.1054 8.73479 11 9 11H11V9C11 8.73478 11.1054 8.48043 11.2929 8.29289C11.4804 8.10536 11.7348 8 12 8C12.2652 8 12.5196 8.10536 12.7071 8.29289C12.8946 8.48043 13 8.73478 13 9V11H15C15.2652 11 15.5196 11.1054 15.7071 11.2929C15.8946 11.4804 16 11.7348 16 12C16 12.2652 15.8946 12.5196 15.7071 12.7071C15.5196 12.8946 15.2652 13 15 13Z" fill="currentColor" />
            </svg>
          </button>
          <button>
            <svg className="dark:text-white" width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M12 13.5C12.8284 13.5 13.5 12.8284 13.5 12C13.5 11.1716 12.8284 10.5 12 10.5C11.1716 10.5 10.5 11.1716 10.5 12C10.5 12.8284 11.1716 13.5 12 13.5Z" fill="currentColor" />
              <path d="M21.8701 11.5C21.2301 10.39 17.7101 4.82001 11.7301 5.00001C6.20007 5.14001 3.00007 10 2.13007 11.5C2.0423 11.652 1.99609 11.8245 1.99609 12C1.99609 12.1755 2.0423 12.348 2.13007 12.5C2.76007 13.59 6.13007 19 12.0201 19H12.2701C17.8001 18.86 21.0101 14 21.8701 12.5C21.9578 12.348 22.004 12.1755 22.004 12C22.004 11.8245 21.9578 11.652 21.8701 11.5ZM12.0001 15.5C11.3078 15.5 10.6311 15.2947 10.0556 14.9102C9.48 14.5256 9.0314 13.9789 8.76649 13.3394C8.50158 12.6999 8.43227 11.9961 8.56732 11.3172C8.70237 10.6383 9.03571 10.0146 9.52519 9.52514C10.0147 9.03565 10.6383 8.70231 11.3173 8.56726C11.9962 8.43221 12.6999 8.50152 13.3395 8.76643C13.979 9.03134 14.5256 9.47994 14.9102 10.0555C15.2948 10.6311 15.5001 11.3078 15.5001 12C15.5001 12.9283 15.1313 13.8185 14.4749 14.4749C13.8186 15.1313 12.9283 15.5 12.0001 15.5Z" fill="currentColor" />
            </svg>
          </button>
          <button>
            <svg className="dark:text-white" width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M12 21C11.8684 21.0008 11.7379 20.9755 11.6161 20.9258C11.4943 20.876 11.3834 20.8027 11.29 20.71L3.51999 12.93C2.54536 11.9452 1.99866 10.6156 1.99866 9.23C1.99866 7.84443 2.54536 6.51482 3.51999 5.53C4.50226 4.55051 5.83283 4.00047 7.21999 4.00047C8.60716 4.00047 9.93773 4.55051 10.92 5.53L12 6.61L13.08 5.53C14.0623 4.55051 15.3928 4.00047 16.78 4.00047C18.1672 4.00047 19.4977 4.55051 20.48 5.53C21.4546 6.51482 22.0013 7.84443 22.0013 9.23C22.0013 10.6156 21.4546 11.9452 20.48 12.93L12.71 20.71C12.6166 20.8027 12.5057 20.876 12.3839 20.9258C12.2621 20.9755 12.1316 21.0008 12 21Z" fill="currentColor" />
            </svg>
          </button>
        </div>
      </div>

      <div className="group group-hover:bg-opacity-60 transition duration-500 relative bg-gray-50 dark:bg-gray-800 dark:hover:bg-gray-700 sm:p-28 py-36 px-10 flex justify-center items-center">
        <img className="group-hover:opacity-60 transition duration-500" src="" alt="sofa-7" />
        <div className="absolute sm:top-8 top-4 left-4 sm:left-8 flex justify-start items-start flex-col space-y-2">
          <div>
            <p className="group-hover:opacity-60 transition duration-500 text-xl leading-5 text-gray-600 dark:text-white">Sectional Sofa</p>
          </div>
          <div>
            <p className="group-hover:opacity-60 transition duration-500 text-xl font-semibold leading-5 text-gray-800 dark:text-white"></p>
          </div>
        </div>
        <div className="group-hover:opacity-60 transition duration-500 absolute bottom-8 right-8 flex justify-start items-start flex-row space-x-2">
          <button className="bg-white border rounded-full focus:bg-gray-800 border-gray-600 p-1.5"></button>
          <button className="bg-white border rounded-full focus:bg-gray-800 border-gray-600 p-1.5"></button>
        </div>
        <div className="flex flex-col bottom-8 left-8 space-y-4 absolute opacity-0 group-hover:opacity-100 transition duration-500">
          <button>
            <svg className="dark:text-white" width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M12 2C10.0222 2 8.08879 2.58649 6.4443 3.6853C4.79981 4.78412 3.51809 6.3459 2.76121 8.17317C2.00433 10.0004 1.8063 12.0111 2.19215 13.9509C2.578 15.8907 3.53041 17.6725 4.92894 19.0711C6.32746 20.4696 8.10929 21.422 10.0491 21.8079C11.9889 22.1937 13.9996 21.9957 15.8268 21.2388C17.6541 20.4819 19.2159 19.2002 20.3147 17.5557C21.4135 15.9112 22 13.9778 22 12C22 10.6868 21.7413 9.38642 21.2388 8.17317C20.7363 6.95991 19.9997 5.85752 19.0711 4.92893C18.1425 4.00035 17.0401 3.26375 15.8268 2.7612C14.6136 2.25866 13.3132 2 12 2ZM15 13H13V15C13 15.2652 12.8946 15.5196 12.7071 15.7071C12.5196 15.8946 12.2652 16 12 16C11.7348 16 11.4804 15.8946 11.2929 15.7071C11.1054 15.5196 11 15.2652 11 15V13H9C8.73479 13 8.48043 12.8946 8.2929 12.7071C8.10536 12.5196 8 12.2652 8 12C8 11.7348 8.10536 11.4804 8.2929 11.2929C8.48043 11.1054 8.73479 11 9 11H11V9C11 8.73478 11.1054 8.48043 11.2929 8.29289C11.4804 8.10536 11.7348 8 12 8C12.2652 8 12.5196 8.10536 12.7071 8.29289C12.8946 8.48043 13 8.73478 13 9V11H15C15.2652 11 15.5196 11.1054 15.7071 11.2929C15.8946 11.4804 16 11.7348 16 12C16 12.2652 15.8946 12.5196 15.7071 12.7071C15.5196 12.8946 15.2652 13 15 13Z" fill="currentColor" />
            </svg>
          </button>
          <button>
            <svg className="dark:text-white" width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M12 13.5C12.8284 13.5 13.5 12.8284 13.5 12C13.5 11.1716 12.8284 10.5 12 10.5C11.1716 10.5 10.5 11.1716 10.5 12C10.5 12.8284 11.1716 13.5 12 13.5Z" fill="currentColor" />
              <path d="M21.8701 11.5C21.2301 10.39 17.7101 4.82001 11.7301 5.00001C6.20007 5.14001 3.00007 10 2.13007 11.5C2.0423 11.652 1.99609 11.8245 1.99609 12C1.99609 12.1755 2.0423 12.348 2.13007 12.5C2.76007 13.59 6.13007 19 12.0201 19H12.2701C17.8001 18.86 21.0101 14 21.8701 12.5C21.9578 12.348 22.004 12.1755 22.004 12C22.004 11.8245 21.9578 11.652 21.8701 11.5ZM12.0001 15.5C11.3078 15.5 10.6311 15.2947 10.0556 14.9102C9.48 14.5256 9.0314 13.9789 8.76649 13.3394C8.50158 12.6999 8.43227 11.9961 8.56732 11.3172C8.70237 10.6383 9.03571 10.0146 9.52519 9.52514C10.0147 9.03565 10.6383 8.70231 11.3173 8.56726C11.9962 8.43221 12.6999 8.50152 13.3395 8.76643C13.979 9.03134 14.5256 9.47994 14.9102 10.0555C15.2948 10.6311 15.5001 11.3078 15.5001 12C15.5001 12.9283 15.1313 13.8185 14.4749 14.4749C13.8186 15.1313 12.9283 15.5 12.0001 15.5Z" fill="currentColor" />
            </svg>
          </button>
          <button>
            <svg className="dark:text-white" width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M12 21C11.8684 21.0008 11.7379 20.9755 11.6161 20.9258C11.4943 20.876 11.3834 20.8027 11.29 20.71L3.51999 12.93C2.54536 11.9452 1.99866 10.6156 1.99866 9.23C1.99866 7.84443 2.54536 6.51482 3.51999 5.53C4.50226 4.55051 5.83283 4.00047 7.21999 4.00047C8.60716 4.00047 9.93773 4.55051 10.92 5.53L12 6.61L13.08 5.53C14.0623 4.55051 15.3928 4.00047 16.78 4.00047C18.1672 4.00047 19.4977 4.55051 20.48 5.53C21.4546 6.51482 22.0013 7.84443 22.0013 9.23C22.0013 10.6156 21.4546 11.9452 20.48 12.93L12.71 20.71C12.6166 20.8027 12.5057 20.876 12.3839 20.9258C12.2621 20.9755 12.1316 21.0008 12 21Z" fill="currentColor" />
            </svg>
          </button>
        </div>
      </div>
    </div>
    <div className="flex justify-end items-end mt-12">
      <div className="flex flex-row items-center justify-center space-x-8">
        <button className="text-base leading-none text-gray-800 dark:text-white border-b-2 border-transparent focus:outline-none focus:border-gray-800">
          <p>1</p>
        </button>
        <button className="text-base leading-none text-gray-800 dark:text-white border-b-2 border-transparent focus:outline-none focus:border-gray-800">
          <p>2</p>
        </button>
        <button className="text-base leading-none text-gray-800 dark:text-white border-b-2 border-transparent focus:outline-none focus:border-gray-800">
          <p>3</p>
        </button>
        <button className="flex justify-center items-center">
          <svg className="dark:text-white" width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M9 6L15 12L9 18" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
          </svg>
        </button>
      </div>
    </div>
  </div>

</div>

</> );
}

export default CardBody;