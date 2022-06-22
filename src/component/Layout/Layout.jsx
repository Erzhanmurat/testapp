import React, {useEffect, useState} from 'react';
import Header from "../../component/Header";
import {Link} from "react-router-dom";
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import {faTable} from "@fortawesome/free-solid-svg-icons";
import axios from "axios";
import AddProjectModal from "../../component/AddProjectModal";

const Layout = (users, setUsers) => {
   const [openModal, setOpenModal] = useState(false)

   useEffect(() => {
      axios('https://62ac88639fa81d00a7b4445d.mockapi.io/users')
        .then((res) => setUsers(res.data))
   })
   return (
     <>
        {
           openModal &&
           <AddProjectModal setOpenModal={setOpenModal}/>
        }
        <div className="m-auto flex">
           <div className="w-3/12 bg-violet-700 d-inline">
              <div className="mt-12 text-white">
                 <Link to="/task">
                    <div className="text-xl hover:bg-violet-900 p-2">
                       <FontAwesomeIcon icon={faTable}/>
                       <span className="ml-3">Задачи и работы</span>
                    </div>
                 </Link>
                 <Link to="/projects">
                    <div className="text-xl hover:bg-violet-900 p-2">
                       <FontAwesomeIcon icon={faTable}/>
                       <span  className="ml-3">Проекты</span>
                    </div>
                 </Link>
                 <Link to="/date">
                    <div className="text-xl hover:bg-violet-900 p-2">
                       <FontAwesomeIcon icon={faTable}/>
                       <span  className="ml-3">Календарь</span>
                    </div>
                 </Link>
                 <Link to="/capabilities">
                    <div className="text-xl hover:bg-violet-900 p-2">
                       <FontAwesomeIcon icon={faTable}/>
                       <span className="ml-3">Возможности</span>
                    </div>
                 </Link>
              </div>
           </div>
           <div className="w-9/12">
              <Header/>
              <div className="d-inline ml-5">
                 <h1 className="uppercase text-2xl pt-3 pb-3 font-medium">Проекты</h1>
                 <div className="flex">
                    <h5 className="uppercase mr-4 font-medium cursor-pointer hover:underline hover:decoration-4 hover:decoration-violet-500 underline-offset-4">Список проектов</h5>
                    <h5 className="uppercase font-medium cursor-pointer hover:underline hover:decoration-4 hover:decoration-violet-500 underline-offset-4">Дорожные карты</h5>
                 </div>
                 <hr className="h-1 bg-neutral-300 mb-4"/>
                 <div className="flex justify-between">
                    <h2 className="uppercase items-end">список проектов</h2>
                    <button onClick={() => setOpenModal(true)} className="p-2 bg-fuchsia-500 hover:bg-fuchsia-600">Добавить проект</button>
                 </div>
                 <div className=""> </div>
              </div>
           </div>
        </div>
     </>
   );
};

export default Layout;