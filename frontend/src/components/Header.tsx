import React, { ComponentPropsWithoutRef } from 'react'
import { Link } from "react-router-dom"


interface INavLinkProps {
    to: string
    children: React.ReactNode
}

const NavLink = (props: INavLinkProps) => (
    <Link {...props} className=" text-gray-200 bg-gray-900 px-4 py-2 rounded-md hover:bg-gray-200 hover:text-gray-900 border-2 border-gray-900 transition duration-200 ease-in-out">
        {props.children}
    </Link>
)

const Header = (props: ComponentPropsWithoutRef<"header">) => {
    return (
        <header className="p-4 flex justify-between items-center " {...props}>

            {/* Header Logo */}
            <h3 className="text-3xl hover:cursor-pointer font-semibold">
                <Link to="/"> AI BUDDY </Link>
            </h3>

            {/* header navigation */}
            <nav className="flex gap-4">
                <NavLink to="/courses" > Courses </NavLink>
                <NavLink to="/chat" > Chat </NavLink>
            </nav>

        </header >
    )
}

export default Header