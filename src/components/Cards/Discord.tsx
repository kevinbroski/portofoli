import constants from "@/utils/constants"
import { faDiscord, faGithub } from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import Tooltip from "../Tooltip";
import React from "react";
import { faExternalLinkAlt, faGauge, faPalette } from "@fortawesome/free-solid-svg-icons";
import StyleSelector from "@/utils/StyleSelector";

let previousTabs: any[] = [
    {
        name: "Over mij",
        tab_id: "about"
    },
    {
        name: "Projecten",
        tab_id: "projects"
    },
    {
        name: "Coding Talen",
        tab_id: "langs_coding"
    },
    {
        name: "Languages",
        tab_id: "langs_human",
    }
];

export default function DiscordCard({
    Message,
    GitHubUser,
}: {
    Message: string[],
    GitHubUser: any
}) {
    const [SelectedTab, setSelectedTab] = React.useState("about");
    const [Tabs, setTabs] = React.useState([
        {
            name: "Over mij",
            tab_id: "about"
        },
        {
            name: "Projecten",
            tab_id: "projects"
        },
        {
            name: "Coding Talen",
            tab_id: "langs_coding"
        },
        {
            name: "Languages",
            tab_id: "langs_human",
        }
    ]);

    return (
        <>
            <div className="flex items-center justify-center min-h-screen p-4 sm:p-8 lg:p-12">
                <div className="bg-[var(--primary)] p-4 sm:p-8 rounded-2xl shadow-lg w-full max-w-xl sm:max-w-2xl lg:max-w-4xl relative border border-[var(--border)] animate-fadeIn">
                    {/* <img
                        className="h-32 object-cover rounded-t-2xl absolute"
                        src={"https://avatars.githubusercontent.com/u/154371206?v=4"}
                        alt="Banner"
                    /> */}
                    <div className="flex flex-col items-center sm:items-start">
                        <img
                            className="w-24 h-24 rounded-full"
                            src="https://avatars.githubusercontent.com/u/154371206?v=4"
                            draggable="false"
                            alt="User Avatar"
                        />
                        <div className="mt-4 text-center sm:text-left">
                            <h2 className="text-xl font-semibold text-pink-200">Scarlot Ruskipy</h2>
                            <div className="flex flex-col sm:flex-row items-center sm:items-start">
                                <p className="text-sm text-gray-300">
                                    scarlot
                                </p>
                                <p className="text-sm text-gray-300 sm:ml-2 select-none">
                                    • he/him
                                </p>
                                <div className="flex mt-2 sm:mt-0 sm:ml-2 space-x-2 bg-[var(--border)] rounded-lg p-1">
                                    {constants.Badges.map((badge, index) => (
                                        <Tooltip key={index} text={badge.name}>
                                            <div key={index} className="flex items-center relative">
                                                <FontAwesomeIcon icon={badge.icon} size="sm" />
                                            </div>
                                        </Tooltip>
                                    ))}
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="bg-[var(--border)] mt-6 p-3.5 rounded-lg flex flex-col">
                        {/* Tabs Header */}
                        <div className="flex space-x-4 border-b border-pink-200 overflow-x-auto">
                            {Tabs.map((tab, index) => (
                                <button
                                    key={index}
                                    onClick={() => setSelectedTab(tab.tab_id)}
                                    className={`flex items-center pt-2 text-sm font-semibold ${SelectedTab === tab.tab_id ? "text-pink-200" : "text-gray-300"} ${SelectedTab === tab.tab_id ? "border-b-2 border-pink-200" : ""}`}
                                >
                                    {tab.name}
                                </button>
                            ))}
                        </div>

                        {/* Tabs Content */}
                        <div className="mt-4">
                            {SelectedTab === "about" ? (
                                <>
                                    {Message.map((message, index) => (
                                        <p key={index} className="text-gray-300">{message}</p>
                                    ))}

                                    <div className='mt-4'>
                                        <span className='text-pink-200 text-sm'>
                                            Connections
                                        </span>
                                        <div className="flex flex-col space-y-2 sm:flex-row sm:space-x-4 sm:space-y-0 select-none">
                                            {constants.Connections.map((connection, index) => (
                                                <div key={index} onClick={() => {
                                                    window.open(connection.url, '_blank')
                                                }} className="flex flex-row cursor-pointer space-x-3 items-center transition-all hover:bg-[var(--primary)] p-2 border border-transparent rounded-xl hover:border-[var(--foreground)] w-full">
                                                    <FontAwesomeIcon icon={connection.icon} className="w-6 h-6" />

                                                    <span className="flex flex-col text-pink-200 w-full">
                                                        {connection.name}
                                                        <span className="text-gray-300 text-sm">
                                                            {connection.username}
                                                        </span>
                                                    </span>

                                                    <FontAwesomeIcon icon={faExternalLinkAlt} className="text-gray-300 text-sm" />
                                                </div>
                                            ))}
                                        </div>
                                    </div>

                                    <div className='mt-4'>
                                        <span className='text-pink-200 text-sm'>
                                            Github Statistics
                                        </span>
                                        <div>
                                            {GitHubUser ? (
                                                <div className="p-4 bg-[var(--primary)] select-none rounded-2xl flex justify-center flex-col gap-12 sm:flex-row sm:gap-20 md:gap-33 lg:gap-44 shadow-lg mt-2">
                                                    <div className="flex flex-col justify-center items-center">
                                                        <span className='text-pink-200'>{(GitHubUser as any).followers}</span>
                                                        <span className='text-gray-300'>Followers</span>
                                                    </div>
                                                    <div className="flex flex-col justify-center items-center">
                                                        <span className='text-pink-200'>{(GitHubUser as any).following}</span>
                                                        <span className='text-gray-300'>Following</span>
                                                    </div>
                                                    <div className="flex flex-col justify-center items-center">
                                                        <span className='text-pink-200'>{(GitHubUser as any).public_repos}</span>
                                                        <span className='text-gray-300'>Repositories</span>
                                                    </div>
                                                </div>
                                            ) : "Loading..."}
                                        </div>
                                    </div>
                                </>
                            ) : null}

                            {SelectedTab === "projects" ? (
                                <div className="flex flex-col space-y-2">
                                    {constants.Projects.map((project, index) => (
                                        <div key={index} onClick={() => {
                                            window.open(project.url, '_blank')
                                        }} className="flex flex-row cursor-pointer space-x-3 items-center transition-all hover:bg-[var(--primary)] p-2 border border-transparent rounded-xl hover:border-[var(--foreground)]">
                                            <img src={project.icon} alt="Peter" className="w-12 h-12 rounded-xl" />

                                            <span className="flex flex-col text-pink-200">
                                                {project.name}
                                                <span className="text-gray-300 text-sm">
                                                    {project.description}
                                                </span>

                                                {project.stopped ? <span className="text-red-300 text-sm">(Old Project)</span> : null}
                                            </span>
                                        </div>
                                    ))}
                                </div>
                            ) : null}

                            {SelectedTab === "langs_coding" ? (
                                <div className="flex flex-col space-y-2">
                                    {constants.Languages.Coding.map((language, index) => (
                                        <div key={index} onClick={() => {
                                            window.open(`https://www.google.com/search?q=${language.name}+programming+language`, '_blank')
                                        }} className="flex flex-row cursor-pointer space-x-3 items-center transition-all hover:bg-[var(--primary)] p-2 border border-transparent rounded-xl hover:border-[var(--foreground)]">
                                            <img src={language.icon} alt="Peter" className="w-12 h-12 rounded-xl" />

                                            <span className="flex flex-col text-pink-200">
                                                {language.name.replaceAll("%2B", "+")}
                                                {language.learning ? <span className="text-gray-300 text-sm">Learning</span> : null}
                                            </span>
                                        </div>
                                    ))}
                                </div>
                            ) : null}

                            {SelectedTab === "langs_human" ? (
                                <div className="flex flex-col space-y-2">
                                    {constants.Languages.Human.map((language, index) => (
                                        <div key={index} onClick={() => {
                                            window.open(`https://www.google.com/search?q=${language.name}+language`, '_blank')
                                        }} className="flex flex-row cursor-pointer space-x-3 items-center transition-all hover:bg-[var(--primary)] p-2 border border-transparent rounded-xl hover:border-[var(--foreground)]">
                                            <img src={language.icon} alt="Peter" className="w-12 h-12 rounded-xl" />

                                            <span className="flex flex-col text-pink-200">
                                                {language.name}
                                            </span>
                                        </div>
                                    ))}
                                </div>
                            ) : null}
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}