import React, { useState, useCallback } from "react";
import ReactFlow, {
  MiniMap,
  Controls,
  Background,
  applyNodeChanges,
  applyEdgeChanges,
  addEdge,
  Handle,
  Position,
} from "reactflow";
import "reactflow/dist/style.css";

// Custom node with icon and label
const CustomNode = ({ data }) => (
  <div
    style={{
      padding: 10,
      borderRadius: 12,
      border: "2px solid #1976d2",
      background: "#e3f2fd",
      minWidth: 140,
      textAlign: "center",
      boxShadow: "0 4px 12px rgba(66,198,255,0.3)",
      cursor: "grab",
      userSelect: "none",
    }}
  >
    <div style={{ marginBottom: 8 }}>{data.icon}</div>
    <strong style={{ color: "#1976d2", fontSize: 16 }}>{data.label}</strong>
    <Handle type="target" position={Position.Top} style={{ borderRadius: 4 }} />
    <Handle type="source" position={Position.Bottom} style={{ borderRadius: 4 }} />
  </div>
);

// Sample SVG icons
const icons = {
  cloud: (
    <svg width="48" height="48" fill="none">
      <ellipse cx="24" cy="30" rx="18" ry="12" fill="#42C6FF" />
      <ellipse cx="34" cy="24" rx="10" ry="9" fill="#90CAF9" />
      <ellipse cx="17" cy="24" rx="9" ry="8" fill="#90CAF9" />
    </svg>
  ),
  ai: (
    <svg width="48" height="48" fill="none">
      <rect x="12" y="12" width="24" height="24" rx="8" fill="#90CAF9" />
      <text
        x="24"
        y="34"
        textAnchor="middle"
        fontSize="18"
        fill="#1976d2"
        fontWeight="bold"
        fontFamily="Arial"
      >
        AI
      </text>
    </svg>
  ),
  app: (
    <svg width="48" height="48" fill="none">
      <rect x="10" y="18" width="28" height="14" rx="6" fill="#90CAF9" />
      <rect x="18" y="22" width="12" height="6" rx="3" fill="#42C6FF" />
    </svg>
  ),
  data: (
    <svg width="48" height="48" fill="none">
      <rect x="20" y="12" width="8" height="24" rx="6" fill="#90CAF9" />
      <circle cx="24" cy="36" r="6" fill="#42C6FF" />
    </svg>
  ),
  science: (
    <svg width="48" height="48" fill="none">
      <ellipse cx="24" cy="24" rx="20" ry="14" fill="#90CAF9" />
      <rect x="20" y="16" width="8" height="16" rx="4" fill="#42C6FF" />
    </svg>
  ),
};

const initialNodes = [
  {
    id: "1",
    type: "customNode",
    position: { x: 250, y: 100 },
    data: { label: "Artificial Intelligence", icon: icons.ai },
  },
  {
    id: "2",
    type: "customNode",
    position: { x: 100, y: 250 },
    data: { label: "Cloud Application", icon: icons.cloud },
  },
  {
    id: "3",
    type: "customNode",
    position: { x: 400, y: 250 },
    data: { label: "App Modernization", icon: icons.app },
  },
  {
    id: "4",
    type: "customNode",
    position: { x: 100, y: 400 },
    data: { label: "Data Modernization", icon: icons.data },
  },
  {
    id: "5",
    type: "customNode",
    position: { x: 400, y: 400 },
    data: { label: "Data Science", icon: icons.science },
  },
];

const initialEdges = [
  { id: "e1-2", source: "1", target: "2", animated: true, style: { stroke: "#42C6FF" } },
  { id: "e1-3", source: "1", target: "3", animated: true, style: { stroke: "#42C6FF" } },
  { id: "e2-4", source: "2", target: "4", animated: true, style: { stroke: "#42C6FF" } },
  { id: "e3-5", source: "3", target: "5", animated: true, style: { stroke: "#42C6FF" } },
];

const nodeTypes = { customNode: CustomNode };

export default function EditableNetworkDiagram() {
  const [nodes, setNodes] = useState(initialNodes);
  const [edges, setEdges] = useState(initialEdges);

  const onNodesChange = useCallback(
    (changes) => setNodes((nds) => applyNodeChanges(changes, nds)),
    []
  );
  const onEdgesChange = useCallback(
    (changes) => setEdges((eds) => applyEdgeChanges(changes, eds)),
    []
  );
  const onConnect = useCallback(
    (connection) => setEdges((eds) => addEdge({ ...connection, animated: true, style: { stroke: "#42C6FF" } }, eds)),
    []
  );

  return (
    <div style={{ height: 600, width: "100%" }}>
      <ReactFlow
        nodes={nodes}
        edges={edges}
        nodeTypes={nodeTypes}
        onNodesChange={onNodesChange}
        onEdgesChange={onEdgesChange}
        onConnect={onConnect}
        fitView
        fitViewOptions={{ padding: 0.2 }}
        snapToGrid={true}
        snapGrid={[20, 20]}
        panOnScroll
        zoomOnScroll
      >
        <MiniMap
          nodeStrokeColor={(n) => (n.type === "customNode" ? "#1976d2" : "#eee")}
          nodeColor={(n) => (n.type === "customNode" ? "#90caf9" : "#fff")}
          nodeBorderRadius={12}
        />
        <Controls />
        <Background color="#aaa" gap={16} />
      </ReactFlow>
    </div>
  );
}
