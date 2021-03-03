import {
  Link
} from "react-router-dom";

import { Card } from '@material-ui/core';
function StepOne() {
  return(
      <div className='selection'>
        <small>Randomly find a place to eat</small>
        <Link to='/random'><Card className='card'>Choose for me</Card></Link>
        <Link to='/vote'><Card className='card'>Vote where to eat</Card></Link>
        <small>Vote on a variety of places to eat</small>

      </div>
  );
}
export default StepOne;
