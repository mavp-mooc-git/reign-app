import React, { useRef, useState } from "react";
import Card from "./Card";
import angular from "../assets/image-138/image-138.png";
import angular2x from "../assets/image-138/image-138@2x.png";
import angular3x from "../assets/image-138/image-138@3x.png";
import reactjs from "../assets/image-140/image-140.png";
import reactjs2x from "../assets/image-140/image-140@2x.png";
import reactjs3x from "../assets/image-140/image-140@3x.png";
import vuejs from "../assets/image-141/image-141.png";
import vuejs2x from "../assets/image-141/image-141@2x.png";
import vuejs3x from "../assets/image-141/image-141@3x.png";
import usePosts from "../hooks/usesPosts";

interface Props {
  type: string
}

interface EndData {
  author: string,
  story_title: string,
  story_url: string,
  created_at: string
}

const dpr = window.devicePixelRatio;
const Angular = (dpr === 3) ? angular3x : (dpr === 2) ? angular2x : angular;
const ReactJS = (dpr === 3) ? reactjs3x : (dpr === 2) ? reactjs2x : reactjs;
const VueJS = (dpr === 3) ? vuejs3x : (dpr === 2) ? vuejs2x : vuejs;

const styles = {
  angular: {
    border: '3px solid tomato',
    backgroundImage: `url('${Angular}')`,
    backgroundPosition: 'contain',
    backgroundRepeat: 'no-repeat',
    backgroundSize: '20px 22px'
  },
  reactjs: {
    backgroundImage: `url(${ReactJS})`
  },
  vuejs: {
    backgroundImage: `url(${VueJS})`
  }
}


const Main = (props: Props) => {
  const { type } = props;
  const [option, setOption] = useState('');
  const query = (option == "1") ? "angular" :
                (option == "2") ? "react" :
                (option == "3") ? "vuejs" :
                "";
  const { posts, loading } = usePosts(query);
  const selectRef = useRef<HTMLSelectElement>(null);
  const localData = JSON.stringify([]);
  window.localStorage.setItem("myFaves", window.localStorage.getItem("myFaves") || localData);
  const favorites = JSON.parse(window.localStorage.getItem("myFaves") || localData);


  if(loading) {
    return <div><p>Loading</p></div>;
  }

  const data = {
    hits: posts?.hits,                 // Array(20) [ {…}, {…}, {…}, … ]
    hitsPerPage: posts?.hitsPerPage,
    nbHits: posts?.nbHits,
    nbPages: posts?.nbPages,
    page: posts?.page
  };

  // console.log(data?.hitsPerPage, data?.nbHits, data?.nbPages, data?.page);
  // data for the post UI are author, story_title, story_url, created_at.

  const uiData = data?.hits?.map(h => {
    return {
      author: h?.author,
      story_title: h?.story_title,
      story_url: h?.story_url,
      created_at: h?.created_at
    }
  });

  const cleanData = uiData?.filter(d => {
    if(d?.author && d?.story_title && d?.story_url && d?.created_at) {
      return d;
    } else {
      console.info('Error null data:', JSON.stringify(d));
    }
  });
  
  const handleChange = (event: { target: { value: string; }; }) => {
    setOption(event.target.value);
  };

  const dataFrom = (type === "api") ? cleanData : favorites;

  return (
    <div className="main">
      {(type === "api") ? selectRef?.current?.classList.add("show") :
                          selectRef?.current?.classList.remove("show")}
      <select name="select-news" ref={selectRef}
        id="select-news"
        className="select-news show"
        onChange={handleChange}
      >
        <option value="">Select your news</option>
        <option value="1" style={styles.angular}>Angular</option>
        <option value="2" style={styles.reactjs}>Reactjs</option>
        <option value="3" style={styles.vuejs}>Vuejs</option>
      </select>
      <div className="card-container">
        {(!dataFrom) ? <p>No data available, please select an option.</p> : ''}
        {dataFrom?.map((d: EndData, i: React.Key | null | undefined) => <Card key={i}
            type={(type === "fav") ? "fav": "all"}
            author={d.author}
            story_title={d.story_title}
            story_url={d.story_url}
            created_at={d.created_at} />)}
      </div>
    </div>
  );
};

export default Main;
