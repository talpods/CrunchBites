import React from 'react';

export default class Photo extends React.Component{
    render(){
        return (
            <div className=" rounded-lg shadow-xl overflow-hidden">
        
                  <div className="h-72 w-full" style={{
                    backgroundImage: `url(${this.props.photo.logo_url})`,
                    backgroundSize: 'cover', backgroundPosition: 'center'
                  }}>
                  </div>

                  <div className="p-4">
                    <h2 className="font-bold">{this.props.photo.name}</h2>

                    <p className="text-gray-700 ">{this.props.photo.description}</p>
                  </div>

              </div>
        );
    }
}