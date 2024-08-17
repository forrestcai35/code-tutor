import { FaLinkedin, FaTwitter, FaInstagram } from "react-icons/fa"

const Footer = () => {
  return (
    <div className='mt-12 text-white-70 py-8 container mx-auto flex justify-between items-center'>
      <div className="flex justify-start items-center">
        <a href="#">
          <img src="favicon.ico" alt="logo" className="non-selectable size-12" draggable="false" />
        </a>
      </div>
      <div className='flex space-x-6 mt-4'>

        <a href="#" className="hover:text-gray-300">
          <FaLinkedin size="24" />
        </a>
      </div>
    </div>
  )
}

export default Footer