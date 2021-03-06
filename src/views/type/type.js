import React, { useState } from 'react';
import Header from '../../components/header/header';
import ProgressBar from '../../components/progressBar/progressBar';
import { TypeWrap } from './typeStyles';
import { Content, Button } from '../../globalStyles';
import Checkmark from '../../assets/checkmark.svg';

function Type(props) {
    const [typeError, setTypeError] = useState(null);

    const PrevStep = () => props.setPage(props.page - 1);

    const setType1 = () => {
        props.setType(1);
        setTimeout(() => props.setPage(props.page + 1), 300);
    }
    
    const setType2 = () => {
        props.setType(2);
        setTimeout(() => props.setPage(props.page + 1), 300);
    }

    const setType3 = () => {
        props.setType(3);
        setTimeout(() => props.setPage(props.page + 1), 300);
    }
    
    const setType4 = () => {
        props.setType(4);
        setTimeout(() => props.setPage(props.page + 1), 300);
    }

    return (
        <TypeWrap>
            <Header 
                page={props.page}
                setPage={props.setPage}
                type={props.type}
                setType={props.setType}
                condition={props.condition}
                setCondition={props.setCondition}
                value={props.value}
                setValue={props.setValue}
                timeline={props.timeline}
                setTimeline={props.setTimeline}
                address={props.address}
                setAddress={props.setAddress}
                zip={props.zip}
                setZip={props.setZip}
                name={props.name}
                setName={props.setName}
                phone={props.phone}
                setPhone={props.setPhone}
                email={props.email}
                setEmail={props.setEmail} />

            <Content>
                <h1>
                    What type of property<br/> 
                    are you interested<br/>
                    in selling?
                </h1>
                {typeError ? <div className="error">{typeError}</div> : null}
                <Button 
                    value="1"
                    className={props.type === 1 ? 'btn-active' : 'btn-inactive'}
                    onClick={setType1}>
                    {/* {props.type === 1 ? <img src={Checkmark} /> : null } */}
                    {/* <div className={props.type === 1 ? 'radio-active' : 'radio-inactive'}></div> */}
                    <h3 className={props.type === 1 ? 'text-active sm' : 'text-inactive sm'}>Single Family</h3>
                </Button> 
        
                <Button
                    value="2"
                    className={props.type === 2 ? 'btn-active' : 'btn-inactive'}
                    onClick={setType2}>
                    {/* {props.type === 2 ? <img src={Checkmark} /> : null } */}
                    {/* <div className={props.type === 2 ? 'radio-active' : 'radio-inactive'}></div> */}
                    <h3 className={props.type === 2 ? 'text-active' : 'text-inactive'}>Multi Family</h3>
                </Button>
                <Button
                    value="3"
                    className={props.type === 3 ? 'btn-active' : 'btn-inactive'}
                    onClick={setType3}>
                    {/* {props.type === 3 ? <img src={Checkmark} /> : null } */}
                    {/* <div className={props.type === 3 ? 'radio-active' : 'radio-inactive'}></div> */}
                    <h3 className={props.type === 3 ? 'text-active' : 'text-inactive'}>Lot or Land</h3>
                </Button>
                <Button
                    value="4"
                    className={props.type === 4 ? 'btn-active' : 'btn-inactive'}
                    onClick={setType4}>
                    {/* {props.type === 4 ? <img src={Checkmark} /> : null } */}
                    {/* <div className={props.type === 4 ? 'radio-active' : 'radio-inactive'}></div> */}
                    <h3 className={props.type === 4 ? 'text-active' : 'text-inactive'}>Commercial</h3>
                </Button>
                {/* <button className="nextStep" onClick={NextStep}>NEXT</button> */}
                <ProgressBar page={props.page} />
            </Content>
        </TypeWrap>
    )
}

export default Type;