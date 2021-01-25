import {data} from '../components/object'

export const bookmyshow = () => {

return {type:'fetch',payload:data}



}
export const countseats = (value) => {

    return {type:'seats',payload:value}
    
    }


export const tracktime = (value) => {

    return {type:'time',payload:value}
    
    }

export const languageaction = (value) => {

return {type:'filter',payload:value}

}