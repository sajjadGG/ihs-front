import React ,{Component, useState , useEffect} from "react"
import "./Cldr.css"


function Cldr(props){
    const [class1,setclass1] = useState("HideM")
    const [message1, setmessage1]=useState(null)
    const [message2, setmessage2]=useState(null)
    const [message3, setmessage3]=useState(null)
    const [message4, setmessage4]=useState(null)
    const [message5, setmessage5]=useState(null)
    const [message6, setmessage6]=useState(null)
    const [message7, setmessage7]=useState(null)
    const [message8, setmessage8]=useState(null)
    const [message9, setmessage9]=useState(null)
    const [message10, setmessage10]=useState(null)
    const [message11, setmessage11]=useState(null)
    const [message12, setmessage12]=useState(null)
    const [message13, setmessage13]=useState(null)
    const [message14, setmessage14]=useState(null)
    const [message15, setmessage15]=useState(null)
    const [message16, setmessage16]=useState(null)
    const [message17, setmessage17]=useState(null)
    const [message18, setmessage18]=useState(null)
    const [message19, setmessage19]=useState(null)
    const [message20, setmessage20]=useState(null)
    const [message21, setmessage21]=useState(null)
    const [message22, setmessage22]=useState(null)
    const [message23, setmessage23]=useState(null)
    const [message24, setmessage24]=useState(null)
    const [message25, setmessage25]=useState(null)
    const [message26, setmessage26]=useState(null)
    const [message27, setmessage27]=useState(null)
    const [message28, setmessage28]=useState(null)
    const [message29, setmessage29]=useState(null)
    const [message30, setmessage30]=useState(null)    

    function ShowMessage(may,ms){
        let message = 
        <div className="ShowM" >
            <div style={{fontSize:"12px" , fontWeight:"700", backgroundColor:"rgb(201, 162, 199)",borderRadius:"30px 30px 0 0" , width:"100%", padding:"6px",color:"rgb(245, 245, 245)"}}><div>Appointment details : </div></div>
            <div style={{fontSize:"15px" , fontWeight:"500",padding:"6px",color:"#012964"}}>{may}</div>
        </div>
        ms(message)
    }
    function HideMessage(may){
        setclass1("HideM")
    }
    

return(
    <div className="mm">
        <div className="month"><li>May 2020</li></div>
        <div >
            <li className="week">Su</li>
            <li className="week">Mo</li>
            <li className="week">Tu</li>
            <li className="week">We</li>
            <li className="week">Th</li>
            <li className="week">Fr</li>
            <li className="week">Sa</li>
        </div>
        <div className = "days">
        <div className="row1">
        <li className="day "></li>
        <li className="day "></li>
        <li className="day "></li>
        <li className="day "></li>
        <li className="day "></li>
        <li className={props.day.may1?"day 1 d-active":"day may1"}onMouseOver={props.day.may1?()=>ShowMessage(props.day.may1,setmessage1):null} onMouseOut={()=>setmessage1(null)}>1{message1}</li>
        <li className={props.day.may2?"day 2 d-active":"day 2"}onMouseOver={props.day.may2?()=>ShowMessage(props.day.may2,setmessage2):null} onMouseOut={()=>setmessage2(null)}>2{message2}</li>
        </div>
        <div className="row2">
        <li className={props.day.may3?"day 3 d-active":"day 3"}onMouseOver={props.day.may3?()=>ShowMessage(props.day.may3,setmessage3):null} onMouseOut={()=>setmessage3(null)}>3{message3}</li>
        <li className={props.day.may4?"day 4 d-active":"day 4"}onMouseOver={props.day.may4?()=>ShowMessage(props.day.may4,setmessage4):null} onMouseOut={()=>setmessage4(null)}>4{message4}</li>
        <li className={props.day.may5?"day 5 d-active":"day 5"}onMouseOver={props.day.may5?()=>ShowMessage(props.day.may5,setmessage5):null} onMouseOut={()=>setmessage5(null)}>5{message5}</li>
        <li className={props.day.may6?"day 6 d-active":"day 6"}onMouseOver={props.day.may6?()=>ShowMessage(props.day.may6,setmessage6):null} onMouseOut={()=>setmessage6(null)}>6{message6}</li>
        <li className={props.day.may7?"day 7 d-active":"day 7"}onMouseOver={props.day.may7?()=>ShowMessage(props.day.may7,setmessage7):null} onMouseOut={()=>setmessage7(null)}>7{message7}</li>
        <li className={props.day.may8?"day 8 d-active":"day 8"}onMouseOver={props.day.may8?()=>ShowMessage(props.day.may8,setmessage8):null} onMouseOut={()=>setmessage8(null)}>8{message8}</li> 
        <li className={props.day.may9?"day 9 d-active":"day 9"}onMouseOver={props.day.may9?()=>ShowMessage(props.day.may9,setmessage9):null} onMouseOut={()=>setmessage9(null)}>9{message9}</li>
        </div>
        <div className="row3">
        <li className={props.day.may10?"day 10 d-active":"day 10"}onMouseOver={props.day.may10?()=>ShowMessage(props.day.may10,setmessage10):null} onMouseOut={()=>setmessage10(null)}>10{message10}</li>
        <li className={props.day.may11?"day 11 d-active":"day 11"}onMouseOver={props.day.may11?()=>ShowMessage(props.day.may11,setmessage11):null} onMouseOut={()=>setmessage11(null)}>11{message11}</li>
        <li className={props.day.may12?"day 12 d-active":"day 12"}onMouseOver={props.day.may12?()=>ShowMessage(props.day.may12,setmessage12):null} onMouseOut={()=>setmessage12(null)}>12{message12}</li>
        <li className={props.day.may13?"day 13 d-active":"day 13"}onMouseOver={props.day.may13?()=>ShowMessage(props.day.may13,setmessage13):null} onMouseOut={()=>setmessage13(null)}>13{message13}</li>
        <li className={props.day.may14?"day 14 d-active":"day 14"}onMouseOver={props.day.may14?()=>ShowMessage(props.day.may14,setmessage14):null} onMouseOut={()=>setmessage14(null)}>14{message14}</li>
        <li className={props.day.may15?"day 15 d-active":"day 15"}onMouseOver={props.day.may15?()=>ShowMessage(props.day.may15,setmessage15):null} onMouseOut={()=>setmessage15(null)}>15{message15}</li>
        <li className={props.day.may16?"day 16 d-active":"day 16"}onMouseOver={props.day.may16?()=>ShowMessage(props.day.may16,setmessage16):null} onMouseOut={()=>setmessage16(null)}>16{message16}</li>
        </div>
        <div className="row4">
        <li className={props.day.may17?"day 17 d-active":"day 17"}onMouseOver={props.day.may17?()=>ShowMessage(props.day.may17,setmessage17):null} onMouseOut={()=>setmessage17(null)}>17{message17}</li>
        <li className={props.day.may18?"day 18 d-active":"day 18"}onMouseOver={props.day.may18?()=>ShowMessage(props.day.may18,setmessage18):null} onMouseOut={()=>setmessage18(null)}>18{message18}</li>
        <li className={props.day.may19?"day 19 d-active":"day 19"}onMouseOver={props.day.may19?()=>ShowMessage(props.day.may19,setmessage19):null} onMouseOut={()=>setmessage19(null)}>19{message19}</li>
        <li className={props.day.may20?"day 20 d-active":"day 20"}onMouseOver={props.day.may20?()=>ShowMessage(props.day.may20,setmessage20):null} onMouseOut={()=>setmessage20(null)}>20{message20}</li>
        <li className={props.day.may21?"day 21 d-active":"day 21"}onMouseOver={props.day.may21?()=>ShowMessage(props.day.may21,setmessage21):null} onMouseOut={()=>setmessage21(null)}>21{message21}</li>
        <li className={props.day.may22?"day 22 d-active":"day 22"}onMouseOver={props.day.may22?()=>ShowMessage(props.day.may22,setmessage22):null} onMouseOut={()=>setmessage22(null)}>22{message22}</li>
        <li className={props.day.may23?"day 23 d-active":"day 23"}onMouseOver={props.day.may23?()=>ShowMessage(props.day.may23,setmessage23):null} onMouseOut={()=>setmessage23(null)}>23{message23}</li>
        </div>
        <div className="row5">
        <li className={props.day.may24?"day 24 d-active":"day 24"}onMouseOver={props.day.may24?()=>ShowMessage(props.day.may24,setmessage24):null} onMouseOut={()=>setmessage24(null)}>24{message24}</li>
        <li className={props.day.may25?"day 25 d-active":"day 25"}onMouseOver={props.day.may25?()=>ShowMessage(props.day.may25,setmessage25):null} onMouseOut={()=>setmessage25(null)}>25{message25}</li>
        <li className={props.day.may26?"day 26 d-active":"day 26"}onMouseOver={props.day.may26?()=>ShowMessage(props.day.may26,setmessage26):null} onMouseOut={()=>setmessage26(null)}>26{message26}</li>
        <li className={props.day.may27?"day 27 d-active":"day 27"}onMouseOver={props.day.may27?()=>ShowMessage(props.day.may27,setmessage27):null} onMouseOut={()=>setmessage27(null)}>27{message27}</li>
        <li className={props.day.may28?"day 28 d-active":"day 28"}onMouseOver={props.day.may28?()=>ShowMessage(props.day.may28,setmessage28):null} onMouseOut={()=>setmessage28(null)}>28{message28}</li>
        <li className={props.day.may29?"day 29 d-active":"day 29"}onMouseOver={props.day.may29?()=>ShowMessage(props.day.may29,setmessage29):null} onMouseOut={()=>setmessage29(null)}>29{message29}</li>
        <li className={props.day.may30?"day 30 d-active":"day 30"}onMouseOver={props.day.may30?()=>ShowMessage(props.day.may30,setmessage30):null} onMouseOut={()=>setmessage30(null)}>30{message30}</li>
        </div>
        </div>
      </div>
)
}

export default Cldr;