import React,{Component} from 'react';
import StickyFooter from 'react-sticky-footer';
import { white } from 'ansi-colors';
class StickyFooter1 extends Component {
    render(){
        return(
            <div><br/>
<StickyFooter
    bottomThreshold={50}
    normalStyles={{
    backgroundColor: "  black",
    color:"white",
    padding: "2rem"
    }}
    stickyStyles={{
    backgroundColor: "rgba(255,255,255,.8)",
    padding: "2rem"
    }}
>
Copyright &copy; 2020 <a href="/">Venky Creations</a>
</StickyFooter>

</div>
        );
}
}
export default StickyFooter1;