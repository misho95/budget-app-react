import { useEffect, useRef } from "react";

function Header( {darkMode, theme} ){

    const  darkBTN = useRef();
    const darkIcon = useRef();

    const switchMode = () => {
        if(theme){
            document.documentElement.classList.remove('dark');
            darkIcon.current.textContent = 'light_mode';
            darkBTN.current.classList.add('left-1')
            darkBTN.current.classList.remove('left-8')
        } else {
            document.documentElement.classList.add('dark');
            darkBTN.current.classList.add('left-8')
            darkIcon.current.textContent = 'dark_mode';
        }
    }

useEffect( () => {
    switchMode();
}, [theme])

 

    return(
        <div className="flex justify-between">
            <span className="text-xl font-HachiMaruPop text-gray-500 dark:text-gray-300"><a href="/">Budget-APP</a></span>
            <span>
                <div onClick={darkMode} className="w-16 h-8 bg-gray-200 dark:bg-gray-800 rounded-full border-2 border-gray-300 dark:border-gray-700 relative">
                    <div ref={darkBTN} className="w-6 h-6 bg-gray-400 dark:bg-gray-600 absolute left-1 top-1/2 -translate-y-1/2 rounded-full border-2 border-gray-300 dark:border-gray-700 flex justify-center items-center  duration-200">
                        <span ref={darkIcon} className="material-symbols-outlined text-gray-200 dark:text-gray-400 select-none text-sm">
                            light_mode
                        </span>
                    </div>
                </div>
            </span>
        </div>
    )
}

export default Header;