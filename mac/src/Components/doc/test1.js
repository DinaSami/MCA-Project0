import React, { Component } from 'react'
import '../doc/ddd.css'

export default class Test1 extends Component {
    render() {
        return (
<>
            <h2>Ouu doctors</h2>
            <div class="card-container">
               
                <img class="round" src="https://randomuser.me/api/portraits/women/79.jpg" alt="user" />
                <h3>Dr. Fariba Kaboli</h3>
                <h6 >Vancouver, BC</h6>
                <p>General<br /> MD 8 years in practice - General Practice , ICBC/ WCB claims</p>
                <div class="buttons">
                </div>
                <div class="skills">
                    <h6 id='hId'>Avilable days</h6>
                    <ul >
                        <li className='ulId'>Saturday</li>
                        <li className='ulId'>Monday</li>
                        <li className='ulId'>Wednesday</li>
                        {/* <li className='ulId'>Saturday</li> */}

                    </ul>
                </div>

                <br></br>
                <br></br>
            </div>
            </>

        )
    }
}
