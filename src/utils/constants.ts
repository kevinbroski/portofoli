import { faDiscord, faGithub } from "@fortawesome/free-brands-svg-icons";
import { faCode, faMeteor } from "@fortawesome/free-solid-svg-icons";

export default {
    Projects: [
        {
            name: "OmeDB",
            description: "A TypeScript based database library for Node.",
            icon: "/OmeDB.png",
            url: "https://github.com/Scarlot-Ruskipy/omedb"
        },
        {
            name: "ScarWareBot",
            description: "Primary Discord bot for ScarWare FiveM Community",
            icon: "https://avatars.githubusercontent.com/u/154371206?v=4",
            url: "https://github.com/Scarlot-Ruskipy/ScarWareBot",
            stopped: true,
        },
        {
            name: "FMShield",
            description: "Standalone Anti-Cheat for FiveM servers.",
            icon: "/FMShield.png",
            url: "https://fmshield.eu",
        },
        {
            name: "Urlcut",
            description: "An encrypted, secure, and fast URL shortener.",
            stopped: true,
            icon: "https://urlcut.co.uk/favicon.ico",
            url: "https://urlcut.co.uk"
        },
    ],
    Languages: {
        Coding: [
            {
                name: "JavaScript",
                icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg"
            },
            {
                name: "TypeScript",
                icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg"
            },
            {
                name: "Lua",
                icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/lua/lua-original.svg"
            },
            {
                name: "CSS",
                icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg"
            },
            {
                name: "Python",
                icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg"
            },
            {
                name: "C%2B%2B",
                icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/cplusplus/cplusplus-original.svg",
                learning: true
            }],
        Human: [
            {
                name: "English",
                icon: "https://flagcdn.com/w40/gb.png"
            },
            {
                name: "Dutch",
                icon: "https://flagcdn.com/w40/nl.png"
            },
            {
                name: "German",
                icon: "https://flagcdn.com/w40/de.png"
            }
        ]
    },
    Connections: [
        {
            name: 'GitHub',
            icon: faGithub,
            url: 'https://github.com/Scarlot-Ruskipy',
            username: "Scarlot-Ruskipy"
        },
        {
            name: "Discord",
            icon: faDiscord,
            url: 'https://discord.com/users/483357154502377473',
            username: "scarlot"
        }
    ],
    Descriptors: {
        Full: [

        ],
        Short: [
            "Professional Dumbo",
            "Confused Developer",
            "Cat Lover",
            "Full-Stack Developer",
            "Part-Time Cat",
            "Professional Cat"
        ]
    },
    Badges: [
        {
            icon: faMeteor,
            name: "Stupid",
        }
    ]
}