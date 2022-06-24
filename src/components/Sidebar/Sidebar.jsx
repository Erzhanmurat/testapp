import React from 'react';

import {NavLink} from "react-router-dom";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faTable} from "@fortawesome/free-solid-svg-icons";
import Logo from "../Logo";

const Sidebar = () => {
   return (
        <aside className="py-4">
           <Logo />
           <nav className='navbar'>
              <NavLink to="/task" className="block text-xl py-2 text-white pl-2"><FontAwesomeIcon icon={faTable} beat/><span className="ml-3">Задачи и работы</span></NavLink>
              <NavLink to="/projects" className="block text-xl py-2 text-white pl-2"><FontAwesomeIcon icon={faTable} beat/><span className="ml-3">Проекты</span></NavLink>
              <NavLink to="/date" className="block text-xl py-2 text-white pl-2"><FontAwesomeIcon icon={faTable} beat/><span className="ml-3">Календарь</span></NavLink>
              <NavLink to="/capabilities" className="block text-xl py-2 text-white pl-2"><FontAwesomeIcon icon={faTable} beat/><span className="ml-3">Возможности</span></NavLink>
           </nav>
        </aside>
   );
};

export default Sidebar;