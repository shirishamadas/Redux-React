// To run this project please enter npm start

import './App.css';
import { connect, useSelector, useDispatch } from 'react-redux'; // to dispatch action and take to state values
import { sellCar, restoreCar, fetchUser } from './action';

function App(props) {
  const cars = useSelector( state => state.numberOfCars); // hook instead of mapStateToProps
  const userId = useSelector( state => state.userId);
  const loading = useSelector( state => state.loading);
  const errorMsg = useSelector( state => state.errorMsg);
  const dispatch = useDispatch()
  return (
    <div className="App">
      {console.log(props, 'props')}
      Learn Redux
      {/* from mapStateToProp */}
      <div>{cars}</div>
      <button onClick={() => dispatch(sellCar())}>Seller</button>
      <button onClick={() => dispatch(restoreCar())}>restorecars</button>
      <button onClick={() => dispatch(fetchUser())}>get users</button>
      {userId && userId.map((id) => <p>{id.userId}</p>)}
      {errorMsg ? <p>something went wrong!!</p>:''}
      {loading ? <p> loading...</p>:''}
      {/* from useSelector hook */}
      {/* <div>{props.cars}</div>
      <button onClick={props.sell}>Sell</button>
      <button onClick={props.restore}>Restore</button>
      <button onClick={props.fetch}>get users</button>
      {props.userId && 
      props.userId.map((id) => <p>{id.userId}</p> )}
      {props.error ? <p>something went wrong!!</p>:''}
      {props.loading ? <p> loading...</p>:''} */}
    </div>
  );
}
// const mapStateToProp = (state) => { // this will return state object
//   console.log(state, 'state values');
//   return {
//     cars: state.numberOfCars,
//     userId: state.userId,
//     loading: state.loading,
//     error: state.errorMsg,
//   }
// }; // get values from redux and converted to props(we get as props to app.js)
// const mapDispatchToProps = (dispatch) => {
//   return {
//     sell: () => {dispatch(sellCar())},
//     restore: () => {dispatch(restoreCar())},
//     fetch: () => {dispatch(fetchUser())},
// }
// }; // from this we dispatch actions

// export default connect(mapStateToProp, mapDispatchToProps)(App); 
export default App;
