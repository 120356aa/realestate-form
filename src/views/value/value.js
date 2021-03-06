import React, { useState } from 'react';
import Slider from 'react-rangeslider'
import 'react-rangeslider/lib/index.css'
import Header from '../../components/header/header';
import ProgressBar from '../../components/progressBar/progressBar';
import { ValueWrap } from './valueStyles';
import { Content } from '../../globalStyles';


function Value(props) {
    const NextStep = () => props.setPage(props.page + 1);
    const PrevStep = () => props.setPage(props.page - 1);

    const handleChange = (value) => {
        props.setValue(value);
    }

    const handleInputChange = (e) => {
        props.setValue(e.target.value);
    }

    return (
        <ValueWrap>
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
                    In your opinion, what<br/> 
                    is the fair value of<br />
                    the property?
                </h1>
                <div className='slider'>
                    <Slider
                        min={100}
                        max={995}
                        value={props.value}
                        step={5}
                        onChange={handleChange} />
                </div>
                <p className="priceTag">$</p>
                <p className="sep">k</p>
                <input value={props.value} className='value' onChange={handleInputChange} />
                <button className="nextStepValue" onClick={NextStep}>NEXT</button>
                <ProgressBar page={props.page} />
                <button className="prevStep" onClick={PrevStep}>Go Back</button>
            </Content>
        </ValueWrap>
    )
}

export default Value;