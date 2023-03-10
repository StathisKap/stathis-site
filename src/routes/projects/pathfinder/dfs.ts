import { writable } from 'svelte/store';

enum nodeType {
	'unexplored',
	'start',
	'end',
	'explored',
	'shortestPath'
}

// adjacency list representation of a graph
let graph: number[][] = [];

// the neighbours of our current node
let neighbours: number[][] = [];

// number of nodes in the graph
let n_r: number; // rows
let n_c: number; // columns 

// The start Node
let startNode: number[];

// Svelte store for the result of the DFS
export const result = writable<number[]>([]);

export function setGraph(newGraph: number[][]) {
	graph = newGraph;
	n_r = newGraph.length;
	n_c = newGraph[0].length;
	console.log(graph)
	console.log(n_r)
	console.log(n_c)
}

function findStartNode(graph: number[][]) {
	for (let i = 0; i < n_r; i++) {
		for (let j = 0; j < n_c; j++) {
			if (graph[i][j] == 1)
				startNode = [i, j];
		}
	}
	console.log(startNode);
}

function dfs(Node: number[]) {
	// mark the current node as visited
	if (graph[Node[0]][Node[1]] == nodeType.end) {
		console.log("Found It!!");
		return;
	}

	if (graph[Node[0]][Node[1]] != nodeType.start) {
		graph[Node[0]][Node[1]] = nodeType.explored;
	}

	//	result.update((current) => [...current, [start_r, start_c]]);

	// visit all the unvisited neighbors of the current node
	for (let i = -1; i < 1; i++) {
		for (let j = -1; j < 1; j++) {
			if (Node[0] + i < 0 || Node[1] + j < 0 ||
				Node[0] + i > n_r || Node[1] + j > n_c) {
				continue;
			}
			else {
				neighbours.push([Node[0] + i, Node[1] + j]);
			}
		}
	}

	if (graph[neighbours[0]][neighbours[1]] != nodeType.explored ||
		graph[neighbours[0]][neighbours[1]] != nodeType.start)
		dfs(neighbours);
}

export async function performDFS() {
	// reset the result and visited arrays
	result.set([]);
	findStartNode(graph);

	// perform DFS from the given start node
	dfs(startNode);
}