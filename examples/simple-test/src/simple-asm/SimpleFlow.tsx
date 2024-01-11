// import 'reactflow/dist/style.css';
import './reactflow.css';
import './nodes-component/custom-node.css';
import ReactFlow, {
    addEdge,
    MiniMap,
    Controls,
    Background,
    useNodesState,
    useEdgesState,
    MarkerType, Position, NodeTypes
} from 'reactflow';
import {RootState} from "./store";
import {useDispatch, useSelector} from "react-redux";
import {onConnect, onEdgesChange, onNodesChange} from "./store/flowSlice";
import CustomNode from "./nodes-component/CustomNode.tsx";

const nodeTypes:NodeTypes = {
    custom: CustomNode,
};
const SimpleFlow: React.FC = () => {
    const edges = useSelector((state:RootState) => state.flow.edges);
    const nodes = useSelector((state:RootState) => state.flow.nodes);
    const dispatch = useDispatch();

    // we are using a bit of a shortcut here to adjust the edge type
    // this could also be done with a custom edge for example
    const edgesWithUpdatedTypes = edges.map((edge) => {
        if (edge.sourceHandle) {
            const edgeType = nodes.find((node) => node.type === 'custom').data.selects[edge.sourceHandle];

            let edgeCopy = {...edge}
            edgeCopy.type = edgeType;
            return edgeCopy
        }

        return edge;
    });

    return <ReactFlow
        nodes={nodes}
        edges={edgesWithUpdatedTypes}
        onNodesChange={(e) => dispatch(onNodesChange(e))}
        onEdgesChange={(e) => dispatch(onEdgesChange(e))}


        onConnect={(e) => dispatch(onConnect(e))}
        nodeTypes={nodeTypes}

    />;
};

export default SimpleFlow;