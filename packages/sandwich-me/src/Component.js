import React, { useState, useEffect } from 'react';
import './App.css';
import { FormGroup, Label, Input } from 'reactstrap';
import { menuOptions, breadOptions, veggieOptions, saucesOptions} from "./configuration"

export function Menu(props) {
    const [ menu, setMenu ] = useState(menuOptions[0]) 
    useEffect(() => {
        props.onChange(menu)
    }, [menu])
    return (
        <FormGroup row>
        <Label for="Input">Menu</Label>
            <FormGroup>
            {
                menuOptions.map((item, index) => {
                    return <div key={index}><Input type="radio" name={"menu"} value={item} 
                    onChange={(e) => setMenu(e.target.value)}/>{item}</div>
                })
            }
            </FormGroup>
        </FormGroup>
    )
}
  
export function Bread(props) {
    const [ bread, setBread ] = useState(breadOptions[0])
    useEffect(() => {
        props.onChange(bread)
    }, [bread])
    return (
        <FormGroup row>
        <Label for="Input">Bread</Label>
        <Input type="select" onChange={(e) => setBread(e.target.value)}>
        {
            breadOptions.map((item, index) => {
            return <option value={item} key={index}>{item}</option>
            })
        } 
        </Input>
    </FormGroup> 
    )
} 
  
export function Veggie(props) {
    const [ veggie, setVeggie ] = useState([])
    useEffect(() => {
        props.onChange(veggie)
    }, [veggie])
    function checkVeggie(e){
        let result = veggie
        if(result.length === 0){
            result.push(e.target.value)
            setVeggie(result)
        } else {
            if(e.target.checked){
                result.push(e.target.value)
            } else {
                result = veggie.filter((data) => {
                    return data !== e.target.value
                })
            }
            setVeggie(result)
        }
    }
    return (
        <FormGroup row check>
        <Label for="Input">Veggie</Label>
            <FormGroup>
            {
            veggieOptions.map((item, index) => {
                return <div key={index}><Input type="checkbox" value={item} onChange={(e) => {
                    checkVeggie(e)
                }}/>{item}</div>
            })
            } 
            </FormGroup>
        </FormGroup>
    )
}  
  
export function Sauces(props) {
    const [ sauces, setSauces ] = useState([])
    useEffect(() => {
        props.onChange(sauces)
    }, [sauces])
    function checkSauces(e){
        let result = sauces
        if(result.length === 2){
            alert("Maximum sources")
            return false
        }
        if(result.length === 0){
            result.push(e.target.value)
            setSauces(result)
        } else {
            if(e.target.checked){
                result.push(e.target.value)
            } else {
                result = sauces.filter((data) => {
                    return data !== e.target.value
                })
            }
            setSauces(result)
        }
    }
    return (
        <FormGroup row check>
        <Label for="Input">Sauces</Label>
            <FormGroup>
            {
            saucesOptions.map((item, index) => {
                return <div key={index}><Input type="checkbox" value={item} onChange={(e) => {
                    checkSauces(e)
                }}/>{item}</div>
            })
            } 
            </FormGroup>
        </FormGroup>
    )
} 