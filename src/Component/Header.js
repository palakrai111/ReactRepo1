import React,{Component} from "react";
//import ReactDOM from 'react-dom/client';
import './header.css';
import JSON from 'C:/Users/Administrator.TMFMW01/Desktop/ReactWork/myapp2/src/db.json'
import Newslist from "./Newslist";
class Header extends Component
{
   constructor()
   {
    super();
    
   this.state = {news : JSON,title1 : 'this is my first stae'}

   }
   render()
   {
    console.log(this.state.news)

    return(

           <header className="x">
             <div className="logo1">
              {this.state.title1}
                <Newslist newsdata = {this.state.news}></Newslist>
             </div>
             <center>
             <input type="text"/>
             </center>
            
             <hr/>
           </header>

    )



   }


}
export default Header;