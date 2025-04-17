import React from 'react';
import constants from '@/utils/constants';
import ClassicCard from '@/components/Cards/Classic';
import DiscordCard from '@/components/Cards/Discord';
import StyleSelector from '@/utils/StyleSelector';

export default function Home() {
  const [SelectedUserDescription, setSelectedUserDescription] = React.useState("/* Loading... */");
  const [ShowIt, setShowIt] = React.useState(false);
  const [GitHubUser, setGitHubUser] = React.useState(null);
  const [CardStyle, SetCardStyle] = React.useState("Discord");


  React.useEffect(function () {
    setSelectedUserDescription(constants.Descriptors.Short[Math.floor(Math.random() * constants.Descriptors.Short.length)])

    const storedCardStyle = localStorage.getItem('CardStyle');
    if (storedCardStyle) {
      SetCardStyle(storedCardStyle);
    } else {
      localStorage.setItem('CardStyle', 'Discord');
    }

    let StyleCheckerLoop = setInterval(function () {
      const storedCardStyle = localStorage.getItem('CardStyle');
      if (storedCardStyle) {
        SetCardStyle(storedCardStyle);
      } else {
        localStorage.setItem('CardStyle', 'Discord');
      }
    }, 250);

    const fetchGitHubUser = async function () {
      const response = await fetch('/api/git');
      const data = await response.json();

      setGitHubUser(data);
    };

    fetchGitHubUser();

    return function () {
      clearInterval(StyleCheckerLoop);
    }
  }, [])

  const Message = [
    `Yo, I'm Kevin Broski, a FiveM developer based in ${(GitHubUser ? (GitHubUser as any).location : "Unknown")}.`,
    `I specialize in scripting for FiveM servers — from custom frameworks to immersive roleplay systems.`,
    `I'm experienced with ${constants.Languages.Coding.length} coding languages, and currently learning ${constants.Languages.Coding.filter(language => language.learning).length} more to level up my dev game.`,
    `Let’s build something epic for your server.`
  ];
  

  return (
    <>
    <StyleSelector />
      {CardStyle === "Classic" ? <ClassicCard GitHubUser={GitHubUser} Message={Message} /> : null}
      {CardStyle === "Discord" ? <DiscordCard GitHubUser={GitHubUser} Message={Message} /> : null}
    </>
  )
}