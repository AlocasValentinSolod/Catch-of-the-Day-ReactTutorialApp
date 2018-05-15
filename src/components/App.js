import React from 'react';
import base  from '../base';
import PropTypes from 'prop-types';
import Header from './Header';
import Inventor from "./Inventor";
import Order from "./Order";
import sampleFishes from '../sample-fishes';
import Fish from './Fish';


class App extends React.Component {
    state = {
        fishes: {},
        order: {},
    };

    static propTypes = {
        match: PropTypes.object,
    };

    componentDidMount(){
        const {params} = this.props.match;
        const localstorageRef = localStorage.getItem(params.storeId);
        if(localstorageRef){
            this.setState({ order: JSON.parse(localstorageRef) });
        }
        this.ref = base.syncState(`${params.storeId}/fishes`, {
            context: this,
            state: 'fishes'
        });
    };

    componentDidUpdate(){
      localStorage.setItem(this.props.match.params.storeId, JSON.stringify(this.state.order));
    };

    componentWillUnmount(){
        base.removeBinding(this.ref);
    };

    addFish = fish => {
        const fishes = {...this.state.fishes};
        fishes[`fish${Date.now()}`] = fish;
        this.setState({
            fishes: fishes
        })
    };

    updateFish = (key, updatedFish) =>{
      const fishes = {...this.state.fishes};
      fishes[key] = updatedFish;
      this.setState({ fishes });
    };

    deleteFish = (key) =>{
      const fishes = {...this.state.fishes};
      fishes[key] = null;
      this.setState({ fishes });
    };

    loadSampleFishes = () => {
        this.setState({fishes: sampleFishes});
    };

    addToOrder = (key) =>{
        const order = {...this.state.order};
        order[key] = order[key] +1 || 1;
        this.setState({ order });
    };
    removeFromOrder = (key) =>{
        const order = {...this.state.order};
        delete order[key];
        this.setState({ order });
    };

    render() {

        return (
            <div className="catch-of-the-day">
                <div className="menu">
                    <Header tegline={"Fresh SeeFood Market"}/>
                    <ul className='fishes'>
                        {Object.keys(this.state.fishes).map(key => (
                            <Fish addToOrder={this.addToOrder} key={key} index={key} details={this.state.fishes[key]} />
                        ))}
                    </ul>
                </div>
                <Order removeFromOrder={this.removeFromOrder} order={this.state.order} fishes={this.state.fishes}/>
                <Inventor  storeId={this.props.match.params.storeId} deleteFish={this.deleteFish} updateFish={this.updateFish} addFish={this.addFish} loadSampleFishes={this.loadSampleFishes} fishes={this.state.fishes}/>
            </div>
        );
    }
}
export default App;