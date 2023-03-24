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
let foundTarget: boolean = false;

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
			if (graph[i][j] == nodeType.start)
				startNode = [i, j];
		}
	}
	console.log(startNode);
}

function dfs(Node: number[]){
    // mark the current node as visited
    if (graph[Node[0]][Node[1]] == nodeType.end || foundTarget) {
        console.log("Found It!!");
		foundTarget = true;
        return;
    }

    if (graph[Node[0]][Node[1]] != nodeType.start) {
        graph[Node[0]][Node[1]] = nodeType.explored;
    }

    // visit all the unvisited neighbors of the current node
    for (let i = -1; i <= 1; i++) {
        for (let j = -1; j <= 1; j++) {
            if (i === 0 && j === 0) continue;

            let newRow = Node[0] + i;
            let newCol = Node[1] + j;

            if (newRow < 0 || newCol < 0 || newRow >= n_r || newCol >= n_c) {
                continue;
            }

            if (!foundTarget && (graph[newRow][newCol] == nodeType.unexplored || graph[newRow][newCol] == nodeType.end)) {
                dfs([newRow, newCol]);
            }
        }
    }
}

export async function performDFS() {
    // reset the result and visited arrays
    result.set([]);
    findStartNode(graph);

    // perform DFS from the given start node
    dfs(startNode);
}
