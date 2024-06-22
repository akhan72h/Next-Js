import reviews from '@/data/myData'
import { IReview } from '@/interface/IReview'
import React from 'react'

export default function review() {
  return (
    <div>{reviews.map((d:IReview)=>{

        return (

        <div>

           <div className="card" >
           <img src={d.image} className="card-img-top" alt="..."/>
           <div className="card-body">
           <h5 className="card-title">Card title</h5>
           <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
          <a href="#" className="btn btn-primary">Go somewhere</a>
      </div>
</div>
           


        </div>
    )

    })}</div>
  )
}