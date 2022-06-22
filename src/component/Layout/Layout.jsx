import React, {} from 'react';
import Sidebar from "../Sidebar";
import Header from "../Header";

const Layout = ({children}) => {
   return (
     <>
        <div className="flex min-h-screen">
           <div className="w-3/12 bg-violet-700 d-inline">
              <Sidebar />
           </div>
           <div className="w-9/12">
              <Header/>
              <div className="p-4">
                 {children}
              </div>
           </div>
        </div>
     </>
   );
};

export default Layout;