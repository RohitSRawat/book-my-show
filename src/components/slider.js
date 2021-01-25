import React,{useState,useEffect}from 'react'

const Slider = () => {
//-341.5       -1024.5
const timeout = () => {
    if (statea == "translateX(-341.5px)") {
        set("translateX(-1024.5px)");
    } else {
        set("translateX(-341.5px)");
    }
}
const [statea,set] = useState('translateX(-341.5px)')
    const widthcal = {
        width: 'calc(50%)'
    }

    const images = {
        width: '673px',
        objectFit:'cover',
    transition:'visibility 0s ease 0s, opacity 0.3s linear 0s',
    opacity: '1',
    visibility: 'visible'
    }

   
 var togglecss = {
    display: 'flex',
    overflow: 'hidden',
    transition: 'transform 1000ms ease 0s',
    width: 'calc(200%)',
    
 }
    
 useEffect(() => {
   
    setTimeout(() => {
        if (statea == "translateX(-341.5px)") {
            set("translateX(-1024.5px)");
        } else {
            set("translateX(-341.5px)");
        }
    }, 5000);

  });


    return (
      <div   style={{...togglecss,transform:statea}}>
        <div style={widthcal}>
          <img style={images}
            src="https://in.bmscdn.com/showcaseimage/eventimage/wonder-woman-1984-16-12-2020-10-32-34-997.jpg"
            alt="Wonder Woman 1984"
            loading="lazy"
          />
        </div>
        <div style={widthcal}>
          <img style={images}
            src="https://in.bmscdn.com/showcaseimage/eventimage/abacus-by-emplihi-13-10-2020-02-13-00-037.jpg"
            alt="Abacus By Emplihi"
            loading="lazy"
          />
        </div>
        <div  style={widthcal}>
          <img  style={images}
            src="https://in.bmscdn.com/showcaseimage/eventimage/wonder-woman-1984-16-12-2020-10-32-34-997.jpg"
            alt="Wonder Woman 1984"
            loading="lazy"
          />
        </div>
        <div   style={widthcal}>
          <img style={images}
            src="https://in.bmscdn.com/showcaseimage/eventimage/abacus-by-emplihi-13-10-2020-02-13-00-037.jpg"
            alt="Abacus By Emplihi"
            loading="lazy"
          />
        </div>
      </div>
    );
}
export default Slider