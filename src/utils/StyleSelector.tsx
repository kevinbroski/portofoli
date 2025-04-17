import { faDiscord } from "@fortawesome/free-brands-svg-icons";
import { faPalette, faStar } from "@fortawesome/free-solid-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import React from "react";

export default function StyleSelector() {
    const [styleMenuOpen, setStyleMenuOpen] = React.useState<boolean>(false);
    const [style, setStyle] = React.useState<string | null>();

    React.useEffect(() => {
        if (typeof window !== "undefined") {
            setStyle(localStorage.getItem("CardStyle") || "Discord");
        }
    }, []);

    const ThemeList = [
        {
            type: "Discord",
            name: "Discord",
            icon: faDiscord
        },
        {
            type: "Classic",
            name: "Classic",
            icon: faStar
        }
    ]

    return (
        <main key="StyleSelector_Component">
            <button
                style={{
                    transition: "color 0.3s ease-in-out",
                    position: "absolute",
                    top: "1rem",
                    right: "1rem",
                    padding: "0.5rem",
                    paddingBottom: "0.25rem",
                    borderRadius: "0.5rem",
                    backgroundColor: "var(--border)",
                    color: "#d1d5db",
                    zIndex: 1000,
                }}
                onClick={() => {
                    setStyleMenuOpen(!styleMenuOpen)
                }}
            >
                <FontAwesomeIcon icon={faPalette} />
            </button>

            <div
                className={`absolute right-4 rounded-lg bg-[var(--border)]`}
                style={{
                    opacity: styleMenuOpen ? 1 : 0,
                    top: "7.5%",
                    transform: "translateY(-7.5%)",
                    transition: "opacity 0.3s ease-in-out",
                    zIndex: 1000
                }}>
                <ul>
                    {ThemeList.map((theme, index) => (
                        <li
                            key={index}
                            className={`p-2 text-center text-gray-300 hover:text-pink-200 select-none ${styleMenuOpen ? "cursor-pointer" : "cursor-default"}`}
                            onClick={() => {
                                if (!styleMenuOpen) return;

                                if (typeof window !== "undefined") {
                                    const IsSameStyle = theme.type === style;

                                    if (!IsSameStyle) {
                                        setStyle(theme.type);
                                        localStorage.setItem("CardStyle", theme.type);
                                        setStyleMenuOpen(false);
                                    }
                                }
                            }}
                        >
                            <FontAwesomeIcon icon={theme.icon} className="mr-2 font-bold" />
                            {theme.name} <span style={{
                                color: theme.type === style ? "#fbcfe8" : "transparent"
                            }}>●</span>
                        </li>
                    ))}
                </ul>
            </div>
        </main>
    )
};