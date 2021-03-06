import React from 'react';

const Header = () => {
   return (
     <div className="bg-slate-200 flex justify-end pt-3 pb-3">
        <img className="rounded-full h-8 w-8 text-right mr-2" src="https://ssl.gstatic.com/accounts/ui/avatar_2x.png"
             alt="user avatar"/>
     </div>
   );
};

export default Header;