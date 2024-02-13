import React from "react";

class AboutClass extends React.Component{
    constructor(props){
        super(props);
        this.state= {
            count1:0,
            count2:1
        }
    }
    render(){
        let {name,place,contact} = this.props
        let {count1,count2}= this.state;
        return(
            <div className="about-card">
                <button onClick={()=>{
                        this.setState({
                            count1: this.state.count1+1,
                            count2: this.state.count2+1,
                        })
                    }
                }>{count1}
                </button>
                <h1>Count2: {count2}</h1>
                <h2>Name: {name}</h2>
                <h2>Place: {place}</h2>
                <h3>Contact: {contact}</h3>
            </div>
        )
    }
}

export default AboutClass;