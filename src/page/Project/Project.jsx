import React, {useEffect, useState} from 'react';
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faBars, faRubleSign, faTableList,} from "@fortawesome/free-solid-svg-icons";
import Layout from "../../components/Layout";
import AddProjectModal from "../../components/AddProjectModal";
import {faCalendar, faUser} from "@fortawesome/free-regular-svg-icons";
import axios from "axios";

const Project = () => {
   const [openModal, setOpenModal] = useState(false)
   const [users, setUsers] = useState([])
   const [vew, setView] = useState(true);
   useEffect(() => {
      axios('https://62ac88639fa81d00a7b4445d.mockapi.io/users')
        .then((res) => {
           setUsers(res.data)
        })
   },[])
   const handleChangeBox = () => {
      setView(true);
   };
   const handleChangeList = () => {
      setView(false);
   };
   return (
     <>
                 {
                    openModal &&
                    <AddProjectModal setOpenModal={setOpenModal} users={users} setUsers={setUsers}/>
                 }
        <Layout>
           <h2 className="uppercase text-2xl text-purple-900 font-medium pt-4 pb-4">Проекты</h2>
           <div className="flex">
              <h5 className="uppercase mr-4 font-medium cursor-pointer hover:underline hover:decoration-4 hover:decoration-violet-500 underline-offset-4 text-gray-600 hover:text-gray-900">Список проектов</h5>
              <h5 className="uppercase font-medium cursor-pointer hover:underline hover:decoration-4 hover:decoration-violet-500 underline-offset-4 text-gray-600 hover:text-gray-900">Дорожные карты</h5>
           </div>
           <hr className="h-1 bg-neutral-300 mb-4"/>
           <div className="flex justify-between mb-3">
              <h2 className="uppercase items-end font-medium text-gray-500">список проектов</h2>
              <button onClick={() => setOpenModal(true)} className="p-2 bg-fuchsia-500 hover:bg-fuchsia-600 hover:text-white">Добавить проект</button>
           </div>
           <div className="text-end text-xl">
              <button onClick={() => handleChangeBox()} className="text-gray-500 hover:text-violet-500 active:bg-gray-500 mr-2"><FontAwesomeIcon icon={faTableList}/></button>
              <button onClick={() => handleChangeList()} className="text-gray-500 hover:text-violet-500 active:bg-gray-500 mr-2"><FontAwesomeIcon icon={faBars}/></button>
           </div>
           <div className={vew ? "flex flex-wrap" :"block"}>
              {
                 users.map((user) => (
                   <div key={user.id} className="flex lg:w-1/3 md:w-1/2 sm:w-full p-3 box-border shadow-2xl">
                      <div>
                         <img className="aspect-video mb-4" src={user.image} alt=""/>
                         <div className="mb-1">
                            <h2 className="text-md font-medium text-gray-700">{user.title}</h2>
                         </div>
                         <div className="flex mb-1">
                            <span className="text-xs ml-1 font-medium text-gray-600"><FontAwesomeIcon icon={faCalendar}/></span>
                            <h2 className="text-xs ml-1 font-medium text-gray-600">{`${user.dateStart.split("-").reverse().join(".")} - `}</h2>
                            <h2 className="text-xs ml-1 font-medium text-gray-600">{`${user.dateEnd.split("-").reverse().join(".")} гг.`}</h2>
                         </div>
                         <div className="flex mb-1">
                            <span className="text-xs ml-1 font-medium text-gray-600"><FontAwesomeIcon icon={faUser}/></span>
                            <h2 className="text-xs ml-1 font-medium text-gray-600">{user.manager}</h2>
                         </div>
                         <div className="flex mb-5">
                            <span className="text-xs ml-1 font-medium text-gray-600"><FontAwesomeIcon icon={faRubleSign}/></span>
                            <h2 className="text-xs ml-1 font-medium text-gray-600">{user.administrator}</h2>
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
        </Layout>
     </>
   );
};

export default Project;