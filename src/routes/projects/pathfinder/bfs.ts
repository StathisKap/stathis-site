import { writable } from 'svelte/store';

enum nodeType {
    'unexplored',
    'start',
    'end',
    'explored',
    'shortestPath'
}

let graph: number[][] = [];
let n_r: number;
let n_c: number;
let startNode: number[];

export const result = writable<number[]>([]);

function findStartNode(graph: number[][]) {
    for (let i = 0; i < n_r; i++) {
        for (let j = 0; j < n_c; j++) {
            if (graph[i][j] == nodeType.start) startNode = [i, j];
        }
    }
    console.log(startNode);
}

export async function performBFS() {
    result.set([]);
    findStartNode(graph);

    bfs(startNode);
}

let previousNodes: number[][][] = [];


export function setGraph(newGraph: number[][]) {
    graph = newGraph;
    n_r = newGraph.length;
    n_c = newGraph[0].length;

    previousNodes = Array.from({ length: n_r }, () => {
        return Array.from({ length: n_c }, () => [-1, -1]);
    });

    console.log(graph);
    console.log(n_r);
    console.log(n_c);
}


function bfs(startNode: number[]) {
    const queue: number[][] = [startNode];

    while (queue.length > 0) {
        const currentNode = queue.shift();

        if (!currentNode) continue;

        const row = currentNode[0];
        const col = currentNode[1];

        if (graph[row][col] == nodeType.end) {
            console.log("Found It!!");
            break;
        }

        if (graph[row][col] != nodeType.start) {
            graph[row][col] = nodeType.explored;
        }

        for (let i = -1; i <= 1; i++) {
            for (let j = -1; j <= 1; j++) {
                if (i === 0 && j === 0) continue;

                const newRow = row + i;
                const newCol = col + j;

                if (
                    newRow < 0 ||
                    newCol < 0 ||
                    newRow >= n_r ||
                    newCol >= n_c
                ) {
                    continue;
                }

                if (
                    graph[newRow][newCol] == nodeType.unexplored ||
                    graph[newRow][newCol] == nodeType.end
                ) {
                    previousNodes[newRow][newCol] = [row, col];
                    queue.push([newRow, newCol]);
                }
            }
        }
    }
}