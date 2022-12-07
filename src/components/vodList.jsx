import React from 'react'
import VodItem from './vodItem'

function VodList(props) {
  let ar = props.vod_ar;

  return (
    <main style={{minHeight:"600px"}} className='container-fluid py-5'>
      <div className='container'>
        <h2>List of TV shows: </h2>
        <div className='row'>
          {ar.map(item => {
            return(
              <VodItem key={item.imdbId} item={item} />
            )
          })}
        </div>
      </div>
    </main>
  )
}

export default VodList