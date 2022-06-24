import React from 'react';
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faBars, faTableList} from "@fortawesome/free-solid-svg-icons";
import Layout from "../../components/Layout";


const Calendar = () => {
   return (
     <Layout>
        <h2 className="uppercase text-2xl text-purple-900 font-medium pt-4 pb-4">Календарь</h2>
        <div className="flex">
           <h5
             className="uppercase mr-4 font-medium cursor-pointer hover:underline hover:decoration-4 hover:decoration-violet-500 underline-offset-4 text-gray-600 hover:text-gray-900">Список
              проектов</h5>
           <h5
             className="uppercase font-medium cursor-pointer hover:underline hover:decoration-4 hover:decoration-violet-500 underline-offset-4 text-gray-600 hover:text-gray-900">Дорожные
              карты</h5>
        </div>
        <hr className="h-1 bg-neutral-300 mb-4"/>
        <div className="flex justify-between mb-3">
           <h2 className="uppercase items-end font-medium text-gray-500">Календарь</h2>
           <div className="text-end text-xl">
              <button className="text-gray-500 hover:text-violet-500 active:bg-gray-700 mr-2"><FontAwesomeIcon
                icon={faTableList}/></button>
              <button className="text-gray-500 hover:text-violet-500 active:bg-gray-700 mr-2"><FontAwesomeIcon
                icon={faBars}/></button>
           </div>
        </div>

     </Layout>
   );
};

export default Calendar;