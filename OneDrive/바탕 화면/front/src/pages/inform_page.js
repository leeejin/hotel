import React,{Component} from "react";

import Template from "../templates/home";
import Inform from "../components/home/inform";

export default class InquiryPage extends Component{
   render(){
    return(
        <Template>
            <Inform/>
        </Template>
    )
   }
}