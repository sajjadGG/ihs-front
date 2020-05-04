import React from "react";
import './cardStyle.css';
import test from './product.jpg'
import AvatarImage from "../../../functions/returnElement/returnAvatarPic";

class Card extends React.Component {
   constructor(props) {
       super(props);
       this.cardRef=React.createRef();
       this.content=React.createRef();
       this.bottomCard=React.createRef();
       this.state={
           more:true,
       }
   }
    clickCard = () => {
        // const content = document.querySelector('div.content');
        const content =this.content.current;
        // const bottom = document.querySelector('div.bottom');
        const bottom = this.bottomCard.current;

        // const img = document.querySelector('div.image img');

        content.addEventListener('click', () => {
            if (bottom.classList.contains('active')) {
                bottom.classList.remove('active');
                this.setState({...this.state,more:!this.state.more});

                // img.classList.remove('normal');
                // img.classList.add('active-image');
            } else {
                bottom.classList.add('active');
                this.setState({...this.state,more:!this.state.more});
                // img.classList.remove('active-image');
                // img.classList.add('normal');


            }
        });
    };
    render() {
        const {name,avatar,des}=this.props;
        return (
            <div className="card" ref={this.cardRef}>
                <div className="image">
                    <img src={avatar} className="normal" alt="product"/>
                    {/*<AvatarImage name={name} avatar ={test}/>*/}
                </div>
                <div className="content" ref={this.content}  onClick={this.clickCard}>
                    <div className="title">{name}</div>
                    <div className="sub-title">Html and CSS animation <i className={this.state.more?"fa fa-angle-up down":"fa fa-angle-up up"} />
                    </div>
                    <div className="bottom active" ref={this.bottomCard}>
                        <p>
                            {des}
                        </p>
                        <div className='btn-action'>
                            <button>Read more</button>
                            <button className='follow'>Folow</button>
                        </div>

                    </div>
                </div>
            </div>

        )
    }
}

export default Card;