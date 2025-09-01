function dijkstra(graph, start) {
  const distances = {}
  const visited = new Set();
  const previous = {}

  // Initialize everything as Infinity except for the start
  for(const node in graph) {
    distances[node] = Infinity;
  }

  distances[start] = 0

  while(visited.size < Object.keys(graph).length) {
    let currentNode = null
    let minDistance = Infinity

    for(const node in distances) {
      if(!visited.has(node) && distances[node] < minDistance) {
        minDistance = distances[node]
        currentNode = node
      }
    }

    if(currentNode === null) break; // Every node has been accessed

    visited.add(currentNode)

    // Update distances from neighbors
    for(const neighbor in graph[currentNode]) {
      const distance = graph[currentNode][neighbor];
      const totalDistance = distances[currentNode] + distance;

      if(totalDistance < distances[neighbor]) {
        distances[neighbor] = totalDistance
        previous[neighbor] = currentNode
      }
    }
  }

  return {distances, previous}
}

const graph = {
  A: {B: 2, C: 4},
  B: {A: 2, C: 1, D: 7},
  C: {A: 4, B: 1, D: 3},
  D: {B: 7, C: 3}
}

const result = dijkstra(graph, 'A')
console.log(result.distances)