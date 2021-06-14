import React, { Component } from 'react'

export class Success extends Component {
    render() {
        return (
<div>
            <div>
                <h1 className="text-white">Account Created Successfully!</h1>
            </div>
<br/>
          <div class="progress">
          <div class="progress-bar w-100" role="progressbar" aria-valuenow="100" aria-valuemin="0" aria-valuemax="100"></div>
         </div> 
         
         </div>
        )
    }
}

export default Success