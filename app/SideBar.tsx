import { FaCircle } from "react-icons/fa";
export default function SideBar() {
  return (
    <div className="flex flex-col justify-end items-center gap-y-12 w-30 h-screen fixed left-0 top-0 bg-primary px-5 py-7 rounded-r-lg">
      <Logo />
      <FaCircle size={10} className="text-gray-400" />
      <div className="w-10 h-0.5 bg-gray-400"></div>
      <img
        className="w-10 h-10 rounded-3xl"
        src="https://thumbs.dreamstime.com/b/default-avatar-profile-icon-social-media-user-vector-default-avatar-profile-icon-social-media-user-vector-portrait-176194876.jpg"
      />
    </div>
  );
}

const Logo = () => {
  return <img className="fixed left-7 top-7 z-10" src="./Logo.png" />;
};
