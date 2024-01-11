import React from 'react';
import CounterDisplay from './counterDisplay';
import Layout from './Layout';
import SimpleFlow from './SimpleFlow';

const SideBar: React.FC = () => {
    return (
        <div>
            <button>Button 1</button>
            <button>Button 2</button>
            <CounterDisplay/>
        </div>
    );
};

const AppArea: React.FC = () => {
    return (
        <>
            <SimpleFlow/>
        </>
    );
}
const App: React.FC = () => {
    return (
        <div>
            <Layout App={AppArea} Sidebar = {SideBar}/>
        </div>
    );
};

export default App;
