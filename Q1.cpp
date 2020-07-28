#include<bits/stdc++.h>
using namesapce std;

class Solution
{
public:
    vector<vector<int>> allPathsSourceTarget(vector<vector<int>> &graph)
    {

        vector<vector<int>> res;
        vector<int> path;
        dfs(graph, 0, res, path);
        return res;
    }
    void dfs(vector<vector<int>> &graph, int node, vector<vector<int>> &res, vector<int> path)
    {
        path.push_back(node);
        if (node == graph.size() - 1)
            res.push_back(path);
        for (int i = 0; i < graph[node].size(); i++)
            dfs(graph, graph[node][i], res, path);
    }
};

int main(){
    int test;
    int N,M;;
    vector<vector<int>>graph;
    Solution s1;
    cin>>test;
    while(test--){
        for(int i = 0;i<N;i++)
            for(int j = 0;j<M;j++)
                cin>>graph[i][j];
    }
    s1.allPathsSourceTarget(graph);
    return 0;

}
