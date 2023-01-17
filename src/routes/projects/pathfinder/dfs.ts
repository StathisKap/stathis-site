import { writable } from 'svelte/store';

const MAX_NODES = 100;

// adjacency list representation of a graph
let graph: number[][] = [];
// array to keep track of visited nodes
let visited: boolean[] = [];
// number of nodes in the graph
let n: number;

// Svelte store for the result of the DFS
export const result = writable<number[]>([]);

function dfs(start: number) {
	// mark the current node as visited
	visited[start] = true;
	result.update((current) => [...current, start]);

	// visit all the unvisited neighbors of the current node
	for (let i = 0; i < graph[start].length; i++) {
		let neighbor = graph[start][i];
		if (!visited[neighbor]) {
			dfs(neighbor);
		}
	}
}

export async function performDFS(startNode: number) {
	// reset the result and visited arrays
	result.set([]);
	visited = new Array(n).fill(false);

	// perform DFS from the given start node
	dfs(startNode);
}

export function setGraph(newGraph: number[][]) {
	graph = newGraph;
	n = newGraph.length;
}
