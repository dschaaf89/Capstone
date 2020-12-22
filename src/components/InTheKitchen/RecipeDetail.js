import React from "react";
import PropTypes from "prop-types";
import { withFirestore, isLoaded } from 'react-redux-firebase';


function RecipeDetail(props){
  const { recipe, onClickingDelete } = props;
  console.log(props)
  if((isLoaded(props.firebase.auth()) && (props.firebase.auth().currentUser === null))){
    return(
      <React.Fragment>
<div className="card">
  <div className="container">
    <div id="recipeDetails">
    <h1>{recipe.name} Details</h1>
    <img src={recipe.url}></img>
    <p>description: {recipe.description}</p>
    <h2>ingredients:<ul> 
     {recipe.ingredients.map((ingredients)=>
        <li>{ingredients}</li>)
    }
    </ul>
    </h2>
    <h3>steps: 
    <ul> 
     {recipe.steps.map((step)=>
        <li>{step}</li>)
    }
   
    </ul>
    </h3>
    </div>
  </div> 
</div>
</React.Fragment>
    )
  }
  return(
    <React.Fragment>
<div className="card">
  <div className="container">
    <div id="recipeDetails">
    <h1>{recipe.name} Details</h1>
    <img src={recipe.url}></img>
    <p>description: {recipe.description}</p>
    <h2>ingredients:<ul> 
     {recipe.ingredients.map((ingredients)=>
        <li>{ingredients}</li>)
    }
    </ul>
    </h2>
    <h3>steps: 
    <ul> 
     {recipe.steps.map((step)=>
        <li>{step}</li>)
    }
   
    </ul>
    </h3>
    </div>
  </div> 
</div>

<button onClick={ props.onClickingEdit }>Update recipe</button>
<button onClick={()=> onClickingDelete(recipe.id) }>Close recipe</button>
<hr/>
</React.Fragment>
  )
 
}


RecipeDetail.propTypes = {
  recipe: PropTypes.object,
  onClickingDelete: PropTypes.func,
  onClickingEdit: PropTypes.func
};

export default RecipeDetail;





{/* <React.Fragment>
<div className="card">
  <div className="container">
    <div id="recipeDetails">
    <h1>{recipe.name} Details</h1>
    <img src={recipe.url}></img>
    <p>description: {recipe.description}</p>
    <h2>ingredients:<ul> 
     {recipe.ingredients.map((ingredients)=>
        <li>{ingredients}</li>)
    }
    </ul>
    </h2>
    <h3>steps: 
    <ul> 
     {recipe.steps.map((step)=>
        <li>{step}</li>)
    }
   
    </ul>
    </h3>
    </div>
  </div> 
</div>

<button onClick={ props.onClickingEdit }>Update recipe</button>
<button onClick={()=> onClickingDelete(recipe.id) }>Close recipe</button>
<hr/>
</React.Fragment> */}