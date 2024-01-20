import React, { useEffect, useState } from 'react'
import UniversityCard from './cards/UniversityCard'
import axios from 'axios';
const University = () =>{

    const [universities, setUniversities] = useState([]);

    async function fetchData() {
        // const {data} = await axios.get('https://howtoabroad.github.io/SearchPage/yolo.json');
        setUniversities(data.slice(0, 30));
    }

    useEffect(() => {
        fetchData();
    },[])
 
  return (
    <div>
        <div className="row">
            {universities.map((element) => {
                return <div className="col-md-4" key={element.HTA_Uni_Link}>
                        <UniversityCard title={element.University_Name ? element.University_Name : ""} type={element.Type_of_University ? element.Type_of_University : ""} logo={element.Logo} newsUrl={element.url} />
                    </div>
            })}
        </div>
    </div>
  )
}

export default University