import React from 'react'
import "./home.css"
import {Link} from 'react-router-dom'
export default function Home() {
 
  const [randomList, setRandomList] = React.useState([]);
  const Data = async () => {
    try {
      let res = await fetch("products");
      let resj = await res.json();
      randomizeItems(resj);
   
    } catch (err) {
    }
  };
  const randomizeItems=(list)=>{
    console.log(list)
    let rnd = 0;
    let toAdd=[];
    for(let i=0;i<3;i++){
      rnd =  Math.floor(Math.random()*list.length);
    
      toAdd.push(list[rnd])
    }
    console.log(toAdd)
    setRandomList([...toAdd])
  }
  React.useEffect(() => {
    console.log(randomList)
  },[randomList]);
  React.useEffect(() => {
    
    Data();
  }, []);
  
  return (
    <div className='main'>
      <section className="hero">
        <h2>not Apple store</h2>
        <p>designs, manufactures and markets smartphones, personal computers, tablets, wearables and accessories and sells a range of related services. The Company's products include iPhone, iPad, AirPods, and more.</p>
        <div  className='buttonDiv'>
           <button>see products</button>
          
        </div>
      </section>
      <section className='productType'>
          <div className="card homeCard">
            <h3>Iphones</h3>
            <img src="/iphones.jpg" alt="" /><a href="/products/1">Shop now ..</a></div>
          <div className="card homeCard">
            <h3>Ipads</h3>
            <img src="/ipads.jpg" alt="" /><a href="/products/2">Shop now ..</a></div>
          <div className="card homeCard">
            <h3>AirPods</h3>
            <img src="/airpods.jpg" alt="" /><a href="/products/3">Shop now ..</a></div>
      </section>  
      <div className="randomProducts">
        {
         randomList.length==0? <h1>Loading...</h1>
         :randomList.map(x=><div className="productCard">
          <img src={x.image} ></img>
         <section>
         <h3>{x.name}</h3>
          <p>{x.description}</p>
         <button><Link to="/products"> see products</Link></button>

         </section>

          </div>
          )

        }
        </div> 
      </div>
  )
}

