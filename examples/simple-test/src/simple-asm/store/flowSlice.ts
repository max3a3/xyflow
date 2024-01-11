import {createSlice} from "@reduxjs/toolkit";
import {addEdge,  Node, Edge, applyNodeChanges, applyEdgeChanges} from "reactflow";
import {initialEdges, initialNodes} from "./flowInitialState.tsx";



type FlowState = {
    nodes: Array<Node>;
    edges: Array<Edge>;
};

const initialState: FlowState = {
    nodes: initialNodes,
    edges: initialEdges,
};
export const flow = createSlice({
    name: "flow",
    initialState,
    reducers: {
        onConnect: (state, action) => {
            state.edges = addEdge(action.payload, state.edges);
        },
        onNodesChange: (state, action) => {
            state.nodes = applyNodeChanges(action.payload, state.nodes);
        },
        onEdgesChange: (state, action) => {
            state.edges = applyEdgeChanges(action.payload, state.edges);
        },
    }
})

export const {
    onConnect,
    onNodesChange,
    onEdgesChange

} = flow.actions
export default flow.reducer;
