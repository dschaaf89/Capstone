import React from "react";
import PropTypes from "prop-types";
import { withFirestore, isLoaded } from 'react-redux-firebase';


function CraftDetail(props) {
  const { craft, onClickingDelete } = props;
  console.log(props)
  if ((isLoaded(props.firebase.auth())) && (props.firebase.auth().currentUser == null))   {
    return (
      <React.Fragment>
        <div id ="craftDetails">
        <div className="card1">
          <div className="container">
            <div id="craftDetails">
              <h1>{craft.name} Details</h1>

              <img src ={craft.url} alt="craft" width="200px"/>
              <p>description: {craft.description}</p>
              <h2>materials:<ul>
                {craft.materials.map((material) =>
                  <li>{material}</li>)
                }
              </ul>
              </h2>
              <h3>steps:
            <ul>
                  {craft.steps.map((step) =>
                    <li>{step}</li>)
                  }

                </ul>
              </h3>

            </div>
          </div>
          <button onClick={()=> props.onClickReturn() }>Return To List </button>
        </div>
       
        <hr />
        </div>
      </React.Fragment>
    );
  } else {
    return (
      <React.Fragment>
        <div id ="craftDetails">
        <div className="card1">
        <div className="container">
          <div id="craftDetails">
        <h1>{craft.name} Details</h1>
        <img src ={craft.url} alt="craft" width="300px"/>
        <p>description: {craft.description}</p>
        <h2>materials:<ul>
          {craft.materials.map((material) =>
            <li>{material}</li>)
          }
        </ul>
        </h2>
        <h3>steps:
          <ul>
            {craft.steps.map((step) =>
              <li>{step}</li>)
            }

          </ul>
        </h3>

        </div>
        </div> 
      </div>

        <button onClick={props.onClickingEdit}>Update Craft</button>
        <button onClick={() => onClickingDelete(craft.id)}>Close Craft</button>
        <hr />
        </div>
      </React.Fragment>
    );
  }
}

CraftDetail.propTypes = {
  craft: PropTypes.object,
  onClickingDelete: PropTypes.func,
  onClickingEdit: PropTypes.func
};

export default withFirestore(CraftDetail);