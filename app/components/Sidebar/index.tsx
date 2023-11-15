'use client'
import classNames from "classnames";
import { useState } from "react";
import { AiOutlineDoubleLeft, AiOutlineLogout, AiOutlineTwitter } from "react-icons/ai";



export default function Sidebar() {

    const [toggleCollapse, setToggleCollapse] = useState(false);
    const [isCollapsible, setIsCollapsible] = useState(false);

    const wrapperClasses = classNames(
        "h-screen px-4 pt-8 pb-4 bg-light flex justify-between flex-col",
        {
            ["w-80"]: !toggleCollapse,
            ["w-20"]: toggleCollapse,
        }
    );

    const collapseIconClasses = classNames(
        "p-4 rounded bg-light-lighter absolute right-0",
        {
            "rotate-180": toggleCollapse,
        }
    );

    const onMouseOver = () => {
        setIsCollapsible(!isCollapsible);
    };

    const handleSidebarToggle = () => {
        setToggleCollapse(!toggleCollapse);
    };

    return (
        <div
            className={wrapperClasses}
            onMouseEnter={onMouseOver}
            onMouseLeave={onMouseOver}
            style={{ transition: "width 300ms cubic-bezier(0.2, 0, 0, 1) 0s" }}
        >
            <div className="flex flex-col">
                <div className="flex items-center justify-between relative">
                    <div className="flex items-center pl-1 gap-4">
                        <AiOutlineTwitter 
                            className={classNames("text-3xl w-10 h-10 text-primary")}
                        />
                        <span
                            className={classNames("mt-2 text-lg font-medium text-text", {
                                hidden: toggleCollapse,
                            })}
                        >
                            Logo
                        </span>
                    </div>
                    {isCollapsible && (
                        <button
                            className={collapseIconClasses}
                            onClick={handleSidebarToggle}
                        >
                            <AiOutlineDoubleLeft />
                        </button>
                    )}
                </div>
            </div>

            <div className={'px-3 py-4'}>
                <div style={{ width: "2.5rem" }}>
                    <AiOutlineLogout
                        className={classNames("text-2xl w-7 h-7 text-primary")}
                    />
                </div>
                {!toggleCollapse && (
                    <span className={classNames("text-md font-medium text-text-light")}>
                        Logout
                    </span>
                )}
            </div>
        </div>
    );
};