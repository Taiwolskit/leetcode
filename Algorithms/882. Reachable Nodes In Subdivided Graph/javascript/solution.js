/**
 * @param {number[][]} edges
 * @param {number} maxMoves
 * @param {number} n
 * @return {number}
 */
var reachableNodes = function (edges, maxMoves, n) {
    const graph = {};
    for (let [u, v, w] of edges) {
        if (!(u in graph)) graph[u] = {};
        if (!(v in graph)) graph[v] = {};
        graph[u][v] = graph[v][u] = w;
    }

    const pq = new MinPriorityQueue({ priority: (x) => x[0] });
    pq.enqueue([0, 0]);
    const dist = { 0: 0 };
    const used = {};
    let ans = 0;

    while (pq.size()) {
        const [d, node] = pq.dequeue().element;
        if (d > dist[node]) continue;
        ans += 1;

        for (const nei in graph[node]) {
            const weight = graph[node][nei];
            const v = Math.min(weight, maxMoves - d);
            used[`${node},${nei}`] = v;

            const d2 = d + weight + 1;
            if (d2 < (dist?.[nei] ?? maxMoves + 1)) {
                pq.enqueue([d2, nei]);
                dist[nei] = d2;
            }
        }
    }

    for (const [u, v, w] of edges) {
        ans += Math.min(
            w,
            (used?.[`${u},${v}`] ?? 0) + (used?.[`${v},${u}`] ?? 0)
        );
    }
    return ans;
};
