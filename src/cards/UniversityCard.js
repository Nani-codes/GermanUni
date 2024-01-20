import React from 'react'

const UniversityCard = (props) => {
  let { title, type, logo, newsUrl, author, date, source } = props;
  return (
    <div className="my-3">
        <div className="card">
            <div style={{
                display: 'flex',
                justifyContent: 'flex-end',
                position: 'absolute',
                right: '0',
                padding:'10px'
            }
            }> 
                <span className="badge rounded-pill bg-danger"> {source} </span>
            </div>
            <img src={!logo ? "https://www.fluentin3months.com/wp-content/uploads/2021/09/german-articles.jpg" : logo} className="card-img-top" alt="..." />
            <div className="card-body">
                <h5 className="card-title">{title}  </h5>
                <p className="card-text">{type}</p>
                <a rel="noreferrer" href={newsUrl} target="_blank" className="btn btn-sm btn-dark">Read More</a>
            </div>
        </div>
    </div>
  );
}

export default UniversityCard