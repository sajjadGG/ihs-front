import React from "react";

const InfoSideProfile=(props)=>{
    if(props.show==='patient'){
        return(
            <div>
                <div className="cnt-label">
                    <i className="l-i" id="l-i-i"></i>
                    <span>Intro</span>
                    <div className="lb-action"><i className="material-icons" onClick={this.changeInfo}>edit</i></div>
                </div>
                <div id="i-box">
                    <div className='container-intro'>
                        <label>FullName</label>
                        <input  type='text' disabled={this.state.di} className='items-intro' onChange={(e)=>this.toggleInput({...this.state,name:e.target.value})} value={this.state.name} />

                        <label>Age</label>
                        <input value={this.state.age}  min='18'  max='100' type='number' disabled={this.state.di} className='items-intro' onChange={(e)=>this.toggleInput({...this.state,age:e.target.value})}/>

                    </div>
                    <div className='container-intro'>
                        <label>diseas history</label>
                        <input  type='text' disabled={true} className='items-intro'  />
                    </div>
                    <div className='container-intro'>
                        <label>description</label>
                        <textarea  type='text' disabled={this.state.di} className='items-intro' onChange={(e)=>this.toggleInput({...this.state,dec:e.target.value})} value={this.state.dec} />
                    </div>

                </div>
                <div className='container-intro'>
                    <button className={!this.state.di?"btn-send show-btn":"btn-send hide-btn"} onClick={this.updateData}>send</button>
                </div>
            </div>

        );
    }
    if(props.show==='doctor'){
        return(
            <div>
                <div className="cnt-label">
                    <i className="l-i" id="l-i-i"></i>
                    <span>Intro</span>
                    <div className="lb-action"><i className="material-icons" onClick={props.changeInfo}>edit</i></div>
                </div>
                <div id="i-box">
                    <div className='container-intro'>
                        <label>FullName</label>
                        <input  type='text' disabled={this.state.di} className='items-intro' onChange={(e)=>this.toggleInput({...this.state,name:e.target.value})} value={this.state.name} />

                        <label>Age</label>
                        <input value={this.state.age}  min='18'  max='100' type='number' disabled={this.state.di} className='items-intro' onChange={(e)=>this.toggleInput({...this.state,age:e.target.value})}/>

                    </div>
                    <div className='container-intro'>
                        <label>diseas history</label>
                        <input  type='text' disabled={true} className='items-intro'  />
                    </div>
                    <div className='container-intro'>
                        <label>description</label>
                        <textarea  type='text' disabled={this.state.di} className='items-intro' onChange={(e)=>this.toggleInput({...this.state,dec:e.target.value})} value={this.state.dec} />
                    </div>

                </div>
                <div className='container-intro'>
                    <button className={!this.state.di?"btn-send show-btn":"btn-send hide-btn"} onClick={this.updateData}>send</button>
                </div>
            </div>

        );
    }

};

export default InfoSideProfile;