import React from 'react'
import { Link } from 'react-router-dom'

function FeatureCard({cards=[]}) {
  // console.log(categories);
  
  return (
    <div>
      <section className="text-gray-400 bg-gray-900 body-font">
  <div className="container px-5 py-24 mx-auto flex flex-wrap">
    
    <div className="flex flex-wrap -m-4">
      {
        cards.map((card,id) => {

          return(
            <Link to={`/category/${card}`} className="p-4 md:w-1/3" key={id}>
        <div className="flex rounded-lg h-full cursor-pointer  bg-gray-800 bg-opacity-60 p-8 flex-col">
          <div className="flex items-center mb-3">
            <div className="w-8 h-8 mr-3 inline-flex items-center justify-center rounded-full bg-indigo-500 text-white flex-shrink-0">
              <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" className="w-5 h-5" viewBox="0 0 24 24">
                <path d="M22 12h-4l-3 9L9 3l-3 9H2"></path>
              </svg>
            </div>
            <h2 className="text-white text-lg title-font font-medium">{card}</h2>
          </div>
          <div className="flex-grow">
            <p className="leading-relaxed text-base">Blue bottle crucifix vinyl post-ironic four dollar toast vegan taxidermy. Gastropub indxgo juice poutine.</p>
            <a href='/' className="mt-3 text-indigo-400 inline-flex items-center">Learn More
              <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" className="w-4 h-4 ml-2" viewBox="0 0 24 24">
                <path d="M5 12h14M12 5l7 7-7 7"></path>
              </svg>
            </a>
          </div>
        </div>
      </Link>

          )

        })
      }
      
     
    </div>
  </div>
</section>
    </div>
  )
}

export default FeatureCard