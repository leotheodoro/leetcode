function networkDelayTime(times: number[][], n: number, k: number): number {
    const table = {}

     for (const t of times) {
        if (!table[t[0]]) {
            table[t[0]] = { [t[1]]: t[2] };
        } else {
            table[t[0]][t[1]] = t[2];
        }
    }

    const distances = {[k]: 0}

    const min_heap = [[0, k]]

    while (min_heap.length > 0) {
        const [distance, node] = min_heap.shift()

        const row = table[node]

        if(row) {
            for(const key in row) {
                const table_dist = distances[key] ?? Infinity

                if(distance + row[key] < table_dist) {
                    distances[key] = distance + row[key]
                    min_heap.push([distance + row[key], key])
                }
            }
        }
    }

    let _max = -1
    if (Object.keys(distances).length < n) {
        return _max
    }

    for (const key in distances) {
        _max = Math.max(_max, distances[key])
    }

    if(_max === 0) return -1

    return _max
};