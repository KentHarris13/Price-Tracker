import React from 'react'
import LineChart from '../components/LineChart'


const Cards = (props) => {
  const { dateadded, current_price, one_month_price, six_month_price, one_year_price, max_price, name, link, img } =props.obj
  return ( 
    
      <div className='card text-center'>
             <img src={img} className='card-img-top' alt=''/>
             <h5 className='card-title'>{name}</h5>
             <LineChart current_price={current_price} one_month_price={one_month_price} six_month_price={six_month_price} one_year_price={one_year_price} dateadded={dateadded} max_price={max_price} />
             <a href={link} className="btn btn-primary">Link</a>
      </div>
         
      

  
    
  
  )
}

export default Cards

//on click it will refence a function the function will run a axios reqest(post "request")


// kinda works row-cols-md-1 card text-white bg-dark mb-3

// style="width: 18rem;"

//All the props to show what I have

  // <div classNameName='card'>
    //   <h1>{props.obj.name}</h1>
    //   <h3>{props.obj.current_price}</h3>
    //   <h3>{props.obj.one_month_price}</h3>
    //   <h3>{props.obj.six_month_price}</h3>
    //   <h3>{props.obj.one_year_price}</h3>
    //   <h3>{props.obj.max_price}</h3>
    //   <h3>{props.obj.img}</h3>
    //   <h3>{props.obj.link}</h3>
    // </div>


    //IN my database add a link to my producs as well as an image

    //What kinda already worked

//     <div className='cardContainer'>
//     <div className="col-sm-6 row">
//   <div className="card">
//   <img src={img} className="card-img-top" alt="..."/>
//     <div className="card-body">
//       <h5 className="card-title">{name}</h5>
//       <LineChart current_price={current_price} one_month_price={one_month_price} six_month_price={six_month_price} one_year_price={one_year_price} max_price={max_price} />
//       <a href={link} className="btn btn-primary">Link To Amazon</a>
//     </div>
//   </div>
//     </div>
// </div>


// Kinda works 2.0
/* <section id='cardsContainer'> 
<div className='container'>
  <div className='row'>
    <div className='col-md-4'>
      <div className='card text-center'>
        <img src={img} className='card-img-top' alt=''/>
        <div className='card-body'>
          <h5 className='card-title'>{name}</h5>
          <LineChart current_price={current_price} one_month_price={one_month_price} six_month_price={six_month_price} one_year_price={one_year_price} max_price={max_price} />
          <a href={link} className="btn btn-primary">Link To Amazon</a>
        </div>
      </div>
    </div>
  </div>
</div>
</section> */
