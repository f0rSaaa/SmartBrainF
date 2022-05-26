import React from 'react';
import './FaceRecognition.css'

const FaceRecognition = ({imageUrl, box}) => {
    return (
        <div className='center ma'>
            <div className='absolute mt2'>
                <img id="inputImage" alt ="" src={ imageUrl } width="500px" height='auto'/>
                <div className="bounding-box" style={{top:box.topRow, right:box.rightCol, bottom:box.bottomRow, left:box.leftCol}}></div>
                {/* {box.map(box1 => {
                return <div key={box1.topRow} className='bounding-box' style={{top: box1.topRow, right: box1.rightCol, bottom: box1.bottomRow, left: box1.leftCol}}></div>
      	        })
      	        } */}
            </div>            
        </div>
    );
}

export default FaceRecognition;