import React, {useEffect, useState} from 'react';
import AddProjectModal from "../AddProjectModal";
import {Link, NavLink} from "react-router-dom";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faBars, faCalendarDays, faRubleSign, faTable, faTableList, faUser} from "@fortawesome/free-solid-svg-icons";
import Header from "../Header";
import axios from "axios";
import Spinner from "../Spinner";
import logo from "../../assets/images/logo.png"

const Project = () => {
   const [openModal, setOpenModal] = useState(false)
   const [users, setUsers] = useState([])
   const [isLoader, setIsLoader] = useState(true)

   useEffect(() => {
      axios('https://62ac88639fa81d00a7b4445d.mockapi.io/users')
        .then((res) => {
           setUsers(res.data)
           setIsLoader(false)
        })
   },[])
   if (isLoader) {
      return <Spinner />
   }
   return (
     <>
        {
           openModal &&
           <AddProjectModal setOpenModal={setOpenModal} users={users} setUsers={setUsers}/>
        }
        <div className="flex min-h-screen">
           <div className="w-3/12 bg-violet-700 d-inline">
              <aside className="py-4">
                 <img className="h-24 block m-auto mb-8" src={logo} alt="logo"/>
                 <nav className='navbar'>
                    <NavLink to="/task" className="block text-xl py-2 text-white"><FontAwesomeIcon icon={faTable} beat/><span className="ml-3">Задачи и работы</span></NavLink>
                    <NavLink to="/projects" className="block text-xl py-2 text-white"><FontAwesomeIcon icon={faTable} beat/><span className="ml-3">Проекты</span></NavLink>
                    <NavLink to="/date" className="block text-xl py-2 text-white"><FontAwesomeIcon icon={faTable} beat/><span className="ml-3">Календарь</span></NavLink>
                    <NavLink to="/capabilities" className="block text-xl py-2 text-white"><FontAwesomeIcon icon={faTable} beat/><span className="ml-3">Возможности</span></NavLink>
                 </nav>
              </aside>
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
                 <div className="flex justify-between mb-3">
                    <h2 className="uppercase items-end">список проектов</h2>
                    <button onClick={() => setOpenModal(true)} className="p-2 bg-fuchsia-500 hover:bg-fuchsia-600 mr-2">Добавить проект</button>
                 </div>
                 <div className="text-end text-xl">
                    <button className="text-gray-500 hover:text-violet-500 active:bg-gray-700 p-2"><FontAwesomeIcon icon={faTableList}/></button>
                    <button className="text-gray-500 hover:text-violet-500 active:bg-gray-700 p-2"><FontAwesomeIcon icon={faBars}/></button>
                 </div>
                 <div className="flex flex-wrap">
                    {
                       users.map((user) => (
                         <div key={user.id} className="flex w-1/3 p-5 flex-wrap box-border shadow-2xl">
                            <div>
                               <img className="aspect-video w-96  object-cover object-center" src={user.image} alt=""/>
                               <div className="mb-1">
                                  <h2 className="text-md">{user.title}</h2>
                               </div>
                               <div className="flex mb-1">
                                  <FontAwesomeIcon icon={faCalendarDays}/>
                                  <h2 className="text-xs ml-1">{`${user.dateStart} / `}</h2>
                                  <h2 className="text-xs ml-1">{user.dateEnd}</h2>
                               </div>
                               <div className="flex mb-1">
                                  <FontAwesomeIcon icon={faUser}/>
                                  <h2 className="text-xs ml-1">{user.manager}</h2>
                               </div>
                               <div className="flex mb-1">
                                  <FontAwesomeIcon icon={faRubleSign}/>
                                  <h2 className="text-xs ml-1">{user.administrator}</h2>
                               </div>
                               <div className="flex">
                                  <img className="h-8 w-8 rounded-full"
                                       src="https://www.themoviedb.org/t/p/w276_and_h350_face/fBEucxECxGLKVHBznO0qHtCGiMO.jpg"
                                       alt=""/>
                                  <img className="h-8 w-8 rounded-full"
                                       src="https://www.themoviedb.org/t/p/w276_and_h350_face/fBEucxECxGLKVHBznO0qHtCGiMO.jpg"
                                       alt=""/>
                                  <img className="h-8 w-8 rounded-full"
                                       src="https://www.themoviedb.org/t/p/w276_and_h350_face/fBEucxECxGLKVHBznO0qHtCGiMO.jpg"
                                       alt=""/>
                                  <img className="h-8 w-8 rounded-full"
                                       src="https://www.themoviedb.org/t/p/w276_and_h350_face/fBEucxECxGLKVHBznO0qHtCGiMO.jpg"
                                       alt=""/>
                               </div>
                            </div>
                         </div>
                       ))
                    }
                 </div>

              </div>
           </div>
        </div>
     </>
   );
};

export default Project;