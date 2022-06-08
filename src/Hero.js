import {Component} from "react";


class Hero extends Component{
    render() {
        return (
            <div className="hero-container">
                <div className="hero">
                    <h1 className="made-by-marketers-for-marketers">Made by marketers, for marketers</h1>
                    <div className="join-20000-markete">
                        Join 20,000+ marketers that use Admixer&#39;s software and APIs setup, monitor and optimize
                        their
                        cross-channel campaigns
                    </div>
                    <div className="frame-3">
                        <div className="rectangle"></div>
                        <div className="frame-4">
                            <div className="get-a-demo roboto-normal-white-16px">Get a demo</div>
                        </div>
                        <div className="frame-5">
                            <div className="create-a-free-account">Create a free account</div>
                            <img className="frame-6" src="img/frame@2x.png"/>
                        </div>
                    </div>
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
