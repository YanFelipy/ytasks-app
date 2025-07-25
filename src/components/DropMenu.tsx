import { Menu, MenuButton, MenuItem, MenuItems } from '@headlessui/react'
//import { ChevronDownIcon } from '@heroicons/react/20/solid'

export default function DropMenu() {
  return (
    <Menu as="div" className="relative inline-block">
      <MenuButton className="inline-flex w-full justify-center gap-x-1.5 rounded-md  px-3 py-2 text-sm font-semibold text-white shadow-xs hover:ring-1  hover:ring-1-inset ">
      
          <i className="bi bi-three-dots-vertical "></i>
      </MenuButton>

      <MenuItems
        transition
        className="absolute right-0 z-10 mt-2 w-36 origin-top-right rounded-md bg-white shadow-lg ring-1 ring-black/5 transition focus:outline-hidden data-closed:scale-95 data-closed:transform data-closed:opacity-0 data-enter:duration-100 data-enter:ease-out data-leave:duration-75 data-leave:ease-in"
      >
        <div className="py-1">
          <MenuItem>
            <button 
              className="w-full  block px-4 py-2 text-sm text-gray-700 data-focus:bg-gray-100 data-focus:text-gray-900 data-focus:outline-hidden"
            ><i className="bi bi-pencil-square  text-blue-400 mr-2"></i>
              Editar
            </button>
          </MenuItem>
 
       <MenuItem>
            <button 
              className="w-full block px-4 py-2 text-sm text-gray-700 data-focus:bg-gray-100 data-focus:text-gray-900 data-focus:outline-hidden"
            ><i className="bi bi-trash text-red-500 mr-2"></i>
              Deletar
            </button>
          </MenuItem>

        </div>
      </MenuItems>
    </Menu>
  )
}
