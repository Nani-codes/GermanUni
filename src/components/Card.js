import React from 'react'

function card() {
  return (
    <div>
        <div class="card"  width="18rem">
            <img src="..." class="card-img-top" alt="..."/>
            <div class="card-body">
                <h5 class="card-title">Card title</h5>
                <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
            </div>
            <ul class="list-group list-group-flush">
                <li class="list-group-item">An item</li>
                <li class="list-group-item">A second item</li>
                <li class="list-group-item">A third item</li>
            </ul>
            <div class="card-body">
                <a href="https://www.imdb.com/name/nm0424060/mediaviewer/rm1916122112/?ref_=nm_ov_ph" class="card-link">Card link</a>
                <a href="https://www.imdb.com/name/nm0424060/mediaviewer/rm1916122112/?ref_=nm_ov_ph" class="card-link">Another link</a>
            </div>
        </div>
    </div>
  )
}

export default card