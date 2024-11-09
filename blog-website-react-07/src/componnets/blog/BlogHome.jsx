import React from 'react'
import Slide from '../slide/Slide'
import Card from './Card'
import Footer from '../footer/Footer'
import CardTwo from './CardTwo'

function BlogHome() {

    const data = [
        {
          id: 1,
          titleOne: "YOU CAN CHANGE THE WORLD",
          titletwo: "STRONG STYLE",
          paraOne: "How Women are Redirecting Hollywood",
          paraTwo: "New Ways to Wear Denim Belt Bags make a Comeback",
          name: "By Jasmin Smith",
          subTitle: "How to Shop Mindfully",
          cover: "/Images/blog5.jpg",
        },
      ]


  return (
    <div>
        <div className="home">
            <div className="main-container">
            <div className="left-content">
                {
                    data.map((value) => {
                        return (
                            <div className="content">
                                  <div className="home-img">
                                    <img src={value.cover} alt="" />
                                  </div>
                                <div className='sub-content'>
                                
                              
                                <div className="text">
                                    <h1>{value.titleOne}</h1>
                                    <p>{value.paraOne}</p>
                                    <span>{value.name}</span>
                                </div>
                                
                                </div>
                            </div>
                        )
                           
            
                    })
                }
            </div>

            <div className="right-content">
                <Slide/>
                <Card/>
                <CardTwo/>
                <Footer/>
                
            </div> 
            
            </div>
        </div>
    </div>
  )
}

export default BlogHome