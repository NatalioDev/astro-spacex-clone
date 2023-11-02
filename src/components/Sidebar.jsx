import { Transition } from "@headlessui/react";

const Sidebar = ({ open = false, setOpen }) => {
  return (
    <>
      <Transition show={open}>
        {/* Sliding sidebar */}
        <Transition.Child
          className="fixed right-0 top-0 w-[250px] z-30 h-screen"
          enter="transition ease-in-out duration-300 transform"
          enterFrom="translate-x-full"
          enterTo="translate-x-0"
          leave="transition ease-in-out duration-300 transform"
          leaveFrom="translate-x-0"
          leaveTo="translate-x-full"
        >
          <div
            id="sidebar"
            className={`fixed right-0 top-0 w-[250px] h-screen text-gray-500 bg-black pt-20 p-8 z-50`}
          >
            <button
              onClick={() => setOpen(false)}
              aria-expanded={open}
              aria-controls="sidebar"
            >
            <svg 
                alt="Close Menu"
                xmlns="http://www.w3.org/2000/svg" 
                fill="none" 
                viewBox="0 0 24 24" 
                strokeWidth={1.5} 
                stroke="currentColor" 
                className="absolute top-5 right-5 w-6 h-6">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
            </svg>
            </button>
            <div className="flex flex-col items-end justify-items-end">
            <div className="hover:text-gray-500 text-white cursor-pointer uppercase text-end w-full">
                <a  href="/launches">Launches</a>
                <hr className="my-2 border-gray-800"/>
              </div>
              <div className="hover:text-gray-500 text-white cursor-pointer uppercase text-end w-full">
                <a href="/updates">Updates</a>
                <hr className="my-2 border-gray-800"/>
              </div>
              <div className="hover:text-gray-500 text-white cursor-pointer uppercase text-end w-full">
                <a href="/mission">Mission</a>
                <hr className="my-2 border-gray-800"/>
              </div>
              <div className="hover:text-gray-500 text-white cursor-pointer uppercase text-end w-full">
                <a href="/contact">Contact</a>
                <hr className="my-2 border-gray-800"/>
              </div>
            </div>
          </div>
          {/* ... */}
        </Transition.Child>
        <Transition.Child
          enter="transition-opacity ease-linear duration-100"
          enterFrom="opacity-0"
          enterTo="opacity-100"
          leave="transition-opacity ease-linear duration-100"
          leaveFrom="opacity-100"
          leaveTo="opacity-0"
        >
          {/* ... */}
          <div
            onClick={() => setOpen(false)}
            className={`"w-full h-full fixed bg-black opacity-80 z-10 inset-0`}
          ></div>
        </Transition.Child>
      </Transition>
    </>
  );
};

export default Sidebar;