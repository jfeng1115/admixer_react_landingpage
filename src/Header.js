import {Button} from "@mui/material";
import {Component} from 'react'
import MenuListComposition from "./BasicMenu";
import BasicMenu from "./BasicMenu";

class Header extends Component {
    render() {
        return (
            <div className="header">
                    <div className="menu-container">
                        <BasicMenu className="pricing" title="Product" item1="Connectors" item2="Campaign Management" item3="Mix Media"></BasicMenu>
                        <BasicMenu className="pricing" title="About" item1="Company" item2="Career" item3="Growth"></BasicMenu>
                    </div>
                    <div className="sign-up-header-container">
                        <Button className="sign-up">Sign up</Button>
                        <div className="frame-2">
                            <div className="see-how-it-works">See how it works</div>
                        </div>
                    </div>
            </div>);
    }
}
export default Header;
