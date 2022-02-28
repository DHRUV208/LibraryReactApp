import React from 'react'

export default function Header(props) {
  return (
   <header
       className = "masthead"
       //style = {{backgroundImage : '("public\assetsimg\contact-bg.jpg")'}}
    >
        <div className = "overlay"></div>
        <div className = "container">
            <div className = "row">
                <div className = "col-lg-8">
                    <div className = "page-heading">
                        <h1>{props.title}</h1>
                        <span className = "subheading">Learn ! Explore !
                        Build !
                        </span>
                    </div>
                </div>
            </div>
        </div>
       </header>
  );
}
