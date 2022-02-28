import React from 'react'

export default function Home()  {
  
    return (
     <div>
         <div className = "container">
        <div className ="row">
            <div className = "col-lg-8">
            <div className = "post-preview">
                <a href="post.html">
                    <h1>Interesting Facts !!</h1>
                    <hr/>
                    <hr/>
                    <hr/>
                    <h2 className = "post-title">
                    The world’s oldest wooden wheel has been around for more than 5,000 years
                    </h2>
                    <h3 className = "post-subtitle">
                    It was found in 2002, approximately 12 miles south of Ljubljana, the capital of Slovenia, and is now housed in the city’s museum. Radiocarbon dating was used to determine the wheel’s age, which is somewhere between 5,100 and 5,350 years old. 
                    </h3>

                </a>

                <p className="post-meta">
                    Posted by 
                    <a href="#"> David </a>
                    on 2022
                </p>

            </div>
            <hr/>
            <div className = "post-preview">
            <a href="post.html">
                    <h2 className = "post-title">
                    The bumblebee bat is the world’s smallest mammal 
                    </h2>
                    <h3 className = "post-subtitle">
                    Weighing in at 0.05 to 0.07 ounces, with a head-to-body length of 1.14 to 1.29 inches and a wingspan of 5.1 to 5.7 inches, the bumblebee bat—also known as Kitti’s hog-nosed bat—is the smallest mammal in the world, according to the Guinness Book of World Records. 
                    </h3>

                </a>

                <p className="post-meta">
                    Posted by 
                    <a href="#"> Dhruv Mehta</a>
                    on 2022
                </p>

            </div>
            <hr/>
            <div className = "post-preview">
            <a href="post.html">
                    <h2 className = "post-title">
                    The circulatory system is more than 60,000 miles long 
                    </h2>
                    <h3 className = "post-subtitle">
                    If a child’s entire circulatory system—we’re talking veins, arteries, and capillaries—were laid out flat, it would stretch for more than 60,000 miles, according to the Franklin Institute. By the time we reach adulthood, our bodies have become home to approximately 100,000 miles of blood vessels. 
                    </h3>

                </a>

                <p className="post-meta">
                    Posted by 
                    <a href="#"> Neha Deb</a>
                    on 2022
                </p>

            </div>
            <hr/>
            <div className = "clearfix">
                <a className = "btn btn-primary" href = "#">Older post</a>
            </div>
            </div>

        </div>
         </div>
         <hr/>
     </div>   
    )
}

