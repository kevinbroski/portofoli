import constants from "@/utils/constants"
import StyleSelector from "@/utils/StyleSelector"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"

export default function ClassicCard({
    Message,
    GitHubUser,
}: {
    Message: string[],
    GitHubUser: any
}) {
    return (
        <>
            <div className="flex items-center justify-center min-h-screen p-4 sm:p-8 lg:p-12">
                <div className="bg-[var(--primary)] p-8 rounded-2xl shadow-lg w-full max-w-xl sm:max-w-2xl lg:max-w-4xl relative border border-[var(--border)] animate-fadeIn">
                    <div className="flex items-center">
                        <img
                            className="w-16 h-16 rounded-full"
                            src="https://avatars.githubusercontent.com/u/154371206?v=4"
                            draggable="false"
                            alt="User Avatar"
                        />
                        <div className="ml-4">
                            <h2 className="text-xl font-semibold text-pink-200">Kevin Broski</h2>
                            <p className="text-gray-400">
                                {GitHubUser ? (GitHubUser as any).bio : "Cats are superior"}
                            </p>
                        </div>
                    </div>
                    <div className="mt-4">
                        {Message.map((message, index) => (
                            <p key={index} className="text-gray-300">{message}</p>
                        ))}
                    </div>
                    <div className='mt-4'>
                        <span className='text-pink-200'>
                            My Coding Languages
                        </span>
                        <div className="flex flex-col lg:space-x-2.5 lg:flex-row select-none">
                            {constants.Languages.Coding.map((language, index) => (
                                <div key={`${index}-${language.name}`} onClick={() => {
                                    window.open(`https://www.google.com/search?q=${language.name}+programming+language`, '_blank')
                                }} className="flex items-center text-gray-300 gap-2 hover:text-white cursor-pointer">
                                    <img
                                        key={`${index}-${language.name}-img`}
                                        src={language.icon}
                                        draggable="false"
                                        className="w-4 h-4"
                                        alt={language.name}
                                    />
                                    {language.name.replaceAll("%2B", "+")} {language.learning && <span className='text-red-300'>(Learning)</span>}
                                </div>
                            ))}
                        </div>
                    </div>
                    <div className='mt-4'>
                        <span className='text-pink-200'>
                            My Human Languages
                        </span>
                        <div className="flex flex-col lg:space-x-2.5 lg:flex-row select-none">
                            {constants.Languages.Human.map((language, index) => (
                                <div key={`${index}-${language.name}`} onClick={() => {
                                    window.open(`https://www.google.com/search?q=${language.name}+language`, '_blank')
                                }} className="flex items-center text-gray-300 gap-2 hover:text-white cursor-pointer">
                                    <img
                                        key={`${index}-${language.name}-img`}
                                        src={language.icon}
                                        draggable="false"
                                        className="w-6 h-4"
                                        alt={language.name + " flag"}
                                    />
                                    {language.name}
                                </div>
                            ))}
                        </div>
                    </div>

                    <div className='mt-4'>
                        <span className='text-pink-200'>
                            My Active Projects
                        </span>
                        <div className="flex flex-col space-y-2 select-none">
                            {constants.Projects.map((project, index) => (
                                <div key={`${index}-${project.name}`} onClick={() => {
                                    window.open(project.url, '_blank')
                                }} className="flex flex-col sm:flex-row text-gray-300 gap-2 hover:text-white cursor-pointer">
                                    <span className='text-pink-300'>{project.name}</span>
                                    <span className='text-gray-300'>- {project.description}</span>
                                    {project.stopped && <span className='text-red-300'>(Old Project)</span>}
                                </div>
                            ))}
                        </div>
                    </div>

                    <div className='mt-4'>
                        <span className='text-pink-200'>
                            My Connections
                        </span>
                        <div className="flex flex-col space-y-2 sm:flex-row sm:space-x-4 sm:space-y-0 select-none">
                            {constants.Connections.map((connection, index) => (
                                <span
                                    key={`${index}-${connection.name}`}
                                    className="relative flex items-center text-gray-300 hover:text-white cursor-pointer"
                                    onClick={() => window.open(connection.url, '_blank')}
                                >
                                    <FontAwesomeIcon icon={connection.icon} className="mr-2" key={`${index}-${connection.name}-icon`} />
                                    {connection.name}
                                </span>
                            ))}
                        </div>
                    </div>

                    <div className='mt-4'>
                        <span className='text-pink-200'>
                            Github Stats
                        </span>
                        <div>
                            {GitHubUser ? (
                                <div className="p-4 bg-[var(--border)] select-none rounded-2xl flex justify-center flex-col gap-12 sm:flex-row sm:gap-20 md:gap-33 lg:gap-44 shadow-lg mt-2">
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
                </div>
            </div>
        </>
    )
}