import React from 'react'
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Button from '../buttons/Button';

export default function Body(props) {
    return (
        <div>
            <br></br>
            <br></br>
            <h1 className='font25 extraBold'>{props.title}</h1>
            <br></br>
            <p>{props.desc}</p>
        </div>
    )
}
