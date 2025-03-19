import React from "react";

const Image = () => {
  return (
    <div className="image-container">
        <div className="image-container-met">
      <div className="disc-container">
        <p className="first-dec-line">We've healped hundreds of people </p>
        <h1 className="second-dec-line">
          We're only just getting started on our journey
        </h1>
        <p className="third-dec-line">
          Everything you need to build modern UI and great products. We've done
          all the heavylifting so you don't have to -- the perfect starting for
          any project.
        </p>
      </div>
      
      <div className="metrics-continer">
        <div  className="flex-col">
          <h1 className="metric">400+</h1>
          <p className="metic-des">Projects completed</p>
        </div>
        <div className="flex-col">
          <h1 className="metric">600%</h1>
          <p className="metic-des">Return on Investment</p>
        </div>
        <div className="flex-col">
          <h1 className="metric">10K</h1>
          <p className="metic-des">Global donloads</p>
        </div>
        <div className="flex-col">
          <h1 className="metric">200+</h1>
          <p className="metic-des">5 star reviews</p>
        </div>
      </div>
      </div>
      
      <div className="img-continer">
        <img
          className="image-size"
          src="https://images.unsplash.com/photo-1541746972996-4e0b0f43e02a?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
          alt=""
          srcset=""
        />
      </div>
     
      
    </div>
  );
};

export default Image;
