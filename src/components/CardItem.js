import React from 'react'

const CardItem = ({item}) => {

    const favorite = (item)=>{
      // getting the previous element and adding the new favorite item
      var previousData = JSON.parse(localStorage.getItem('favorites'))
      previousData.push(item)
      localStorage.setItem('favorites',JSON.stringify(previousData))
    }

    return (
        <div className=''>
          <div className='card'>
            <div className=''>
              <img className='card-img-top' src={item.thumbnail.path + "/portrait_xlarge.jpg"} alt='' />
            </div>
            <div className='card-body'>
              <div className='d-flex'>
                <h5 className='card-title'>{item.name}</h5>
                <span className='ml-auto'> <i className="far fa-star"></i> </span>
              </div>
              <button className='btn btn-info' type="button" onClick={()=>favorite(item)}>Favorite</button>
            </div>
          </div>
    </div>
    )
}

export default CardItem