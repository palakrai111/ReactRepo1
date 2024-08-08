import React from 'react'

const Newslist = (props) => {
    console.log(props)
const mynews = props.newsdata.map(
  (data )=> {

    return(

        <div key={data.id}>
               <h1>{data.title}</h1>
                <div>{data.feed}</div>

        </div>


    )



  }



)

return(
    
        {mynews}
    
    
)

}
export default Newslist;