import React, { Component } from 'react'

export class AccountSetup extends Component {
    continue = e => {
        e.preventDefault();
        var tests = document.getElementsByClassName("form-control" );
        for (let i = 0; i < tests.length; i++) {
            var element = tests[i];
            if ( element === "")                                  
            { 
                alert("remlir ce champ."); 
            
        
            }
            else
            {
                this.props.nextStep();

            }
            
        }
       

      
    };

    render() {
        const { values, inputChange } = this.props;
        

        return (
            <div className="form-container">
  
                <h1 className="mb-5">Account Setup</h1>
               
                <div className="form-group">
                    <label className ="lab" for="validationDefault03" htmlFor="name">Name</label>
                    <input type="text" className="form-control"id="validationTooltip02" name="name" onChange={inputChange('name')} value={values.name} required/>
                    
                </div>
                
                

                <div className="form-group">
                    <label htmlFor="email">Email</label>
                    <input type="email" className="form-control" name="email" onChange={inputChange('email')} value={values.email} />
                </div>
                <div className="form-group">
                    <label htmlFor="phone">Phone Number</label>
                    <input type="number" className="form-control" name="phone" onChange={inputChange('phone')} value={values.phone} />
                </div>
                <div className="form-group">
                    <label htmlFor="password">Password</label>
                    <input type="password" className="form-control" name="password" onChange={inputChange('password')} value={values.password} />
                </div>
                
                Copy

                
                <br />
                <div class="progress">
          <div class="progress-bar w-25" role="progressbar" aria-valuenow="25" aria-valuemin="0" aria-valuemax="25"></div>
         </div>
         <br />

                <div className="text-right">
                    <button className="btn btn-primary" onClick={this.continue}>Continue</button>
                </div>
            
            </div>
        )
    }
}

export default AccountSetup