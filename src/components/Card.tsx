import React, { useRef } from "react";
import iconTime from "../assets/iconmonstr-time-2.svg";
import iconFav2 from "../assets/iconmonstr-favorite-2.svg";
import iconFav3 from "../assets/iconmonstr-favorite-3.svg";

interface Props {
  type: string,
  author: string,
  story_title: string,
  story_url: string,
  created_at: string
}

const Card = (props: Props) => {
  const { type, author, story_title, story_url, created_at } = props;
  const favCard = useRef<HTMLDivElement>(null);
  const favImg = useRef<HTMLImageElement>(null);
  const now = new Date();
  const diff = (now.getTime() - Date.parse(created_at));
  const hours = ((diff / 1000) / 3600).toFixed(1);
  const localData = JSON.stringify([]);

  return (
    <div className={(type === "fav") ? "card myfave" : "card"} ref={favCard}>
      <div className="card-body">
        <a href={story_url} target="_blank" rel="noopener noreferrer">
          <p className="card-title">
            <img src={iconTime} alt="time" height="16" width="16" />
            {hours} hours ago by {author}
          </p>
          <p className="card-text">{story_title}</p>
        </a>
      </div>
      <img
        ref={favImg}
        src={(type === "fav") ? iconFav3 : iconFav2}
        alt="img-card"
        height="24" width="24"
        onClick={() => {
          favCard?.current?.classList.toggle("myfave");
          window.localStorage.setItem("myFaves", window.localStorage.getItem("myFaves") || localData);
          const favorites = JSON.parse(window.localStorage.getItem("myFaves") || localData);
          if (favCard?.current?.classList.contains("myfave")) {
            favImg?.current?.setAttribute("src", iconFav3);
            if (favorites) {
              favorites.push({
                author, story_title, story_url, created_at
              });
              window.localStorage.setItem("myFaves", JSON.stringify(favorites));
            }
          } else {
            favImg?.current?.setAttribute("src", iconFav2);
            console.log('remove from LocalStorage');
            // eslint-disable-next-line @typescript-eslint/no-explicit-any
            const newfav = favorites.filter((f: any) => f.author !== author && f.created_at !== created_at);
            console.log(newfav);
            window.localStorage.setItem("myFaves", JSON.stringify(newfav));
          }
        }}
      />
    </div>
  );
};

export default Card;
