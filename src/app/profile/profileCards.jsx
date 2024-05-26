import React from "react";
import Image from 'next/image';
import CameraAltIcon from '@mui/icons-material/CameraAlt';
import EditIcon from '@mui/icons-material/Edit';
import FacebookIcon from '@mui/icons-material/Facebook';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import YouTubeIcon from '@mui/icons-material/YouTube';

const ProfileCards = () => {
  return (
    <>
      <div className="min-h-screen flex items-center justify-center bg-gray-100">
        <div className="bg-white w-full max-w-md rounded-lg shadow-lg overflow-hidden">
          <div className="relative w-full h-1/2">
            <Image
              src="/Images/profile_bg.png"
              alt="Profile background"
              layout="responsive"
              width={1600}
              height={900}
              className="object-cover"
            />
            <div className="absolute inset-0 bg-black opacity-50"></div>
            <div className="absolute top-2 right-2">
              <EditIcon className="text-white text-xl" />
            </div>
            <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 translate-y-1/2">
              <div className="relative w-24 h-24 bg-white rounded-full overflow-hidden border-4 border-white">
                <Image
                  src="/Images/react.png"
                  alt="Profile picture"
                  layout="fill"
                  objectFit="cover"
                />
              </div>
            </div>
          </div>
          <div className="p-4 text-center mt-12 flex-grow flex flex-col justify-center">
            <h1 className="text-2xl font-bold">Danish Heilium</h1>
            <p className="text-gray-600">Ui/Ux Designer</p>
            <div className="mt-2 flex justify-center space-x-4">
              <div className="text-center">
                <p className="text-gray-700 font-bold">259</p>
                <p className="text-gray-500">Posts</p>
              </div>
              <div className="text-center">
                <p className="text-gray-700 font-bold">129K</p>
                <p className="text-gray-500">Followers</p>
              </div>
              <div className="text-center">
                <p className="text-gray-700 font-bold">2K</p>
                <p className="text-gray-500">Following</p>
              </div>
            </div>
            <div className="mt-4 max-w-2xl mx-auto">
              <p className="text-gray-600">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                Pellentesque posuere fermentum urna, eu condimentum mauris
                tempus ut. Donec fermentum blandit aliquet. Etiam dictum dapibus
                ultricies. Sed vel aliquet libero. Nunc a augue fermentum,
                pharetra ligula sed, aliquam lacus.
              </p>
            </div>
            <div className="mt-4 flex justify-center space-x-4">
              <a href="#" className="text-gray-500 hover:text-gray-700">
                <FacebookIcon className="text-xl" />
              </a>
              <a href="#" className="text-gray-500 hover:text-gray-700">
                <LinkedInIcon className="text-xl" />
              </a>
              <a href="#" className="text-gray-500 hover:text-gray-700">
                <YouTubeIcon className="text-xl" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ProfileCards;
