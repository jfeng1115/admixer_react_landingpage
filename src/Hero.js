import {Component} from "react";
import {Button, TextField} from "@mui/material";


class Hero extends Component{
    state = {"email":""}

    handleChange =(e) => {
        this.setState({"email": e.target.value})
    }

    handleSubmit = (e) => {
        e.preventDefault()
        console.log(this.state.email)
        fetch('/', {
            method: 'post',
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({
                "email": this.state.email
            })
        });
    }

    render() {
        const { email } = this.state;
        return (
            <div className="hero-container">
                <div className="hero">
                    <h1 className="made-by-marketers-for-marketers">Made by marketers, for marketers</h1>
                    <div className="join-20000-markete">
                        Join 20,000+ marketers that use Admixer&#39;s software and APIs setup, monitor and optimize
                        their
                        cross-channel campaigns
                    </div>
                    <form className="frame-3" onSubmit={this.handleSubmit}>
                        <TextField className="rectangle" label="Your work email" variant="outlined" value={email} onChange={this.handleChange}/>
                        <div className="frame-4">
                            <Button className="get-a-demo roboto-normal-white-16px">Get a demo</Button>
                        </div>
                    </form>
                </div>
                <div className="hero-image">
                    <div className="overlap-group1">
                        <img className="image" src="img/image@2x.png"/>
                        <img className="test" src="img/test@2x.png"/>
                        <img className="test-1" src="img/test-1@2x.png"/>
                    </div>
                </div>
            </div>
        );
    }
}

export default Hero;
