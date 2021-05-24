<template>
  <div>
    <div class="container-fluid">
        <div class="row">
            <div class="col-sm-6 ">
              <Tree
                id="my-tree-id"
                ref="my-tree"
                :custom-options="myCustomOptions"
                :custom-styles="myCustomStyles"
                :nodes="treeDisplayData"
              ></Tree>
            </div>
            <div class="col-sm-6 ">
              {{treeDisplayData}}
            </div>
        </div>
    </div>
  </div>
</template>

<script>
import Tree from "vuejs-tree";

export default {
  name: "TreeExample",
  components: {
    Tree,
  },
  data: function () {
    return {
      treeDisplayData: [
        {
          text: "Halaman Utama",
          id: 1,
          nodes: [
            {
              text: "Child 1",
              id: 3,
              nodes: [
                {
                  text: "Grandchild 1",
                  id: 5,
                },
              ],
            },
            {
              text: "Child 2",
              id: 4,
            },
          ],
        },
      ],
    };
  },
  computed: {
    myCustomStyles() {
      return {
        tree: {
          height: "auto",
          maxHeight: "300px",
          overflowY: "visible",
          display: "inline-block",
        },
        row: {
          width: "500px",
          cursor: "pointer",
          child: {
            height: "35px",
          },
        },
        text: {
          style: {},
          active: {
            style: {
              "font-weight": "bold",
              color: "#2ECC71",
            },
          },
        },
      };
    },
    myCustomOptions() {
      return {
        treeEvents: {
          expanded: {
            state: false,
          },
          collapsed: {
            state: false,
          },
          selected: {
            state: true,
            fn: this.mySelectedFunction,
          },
          checked: {
            state: true,
            fn: this.myCheckedFunction,
          },
        },
        events: {
          expanded: {
            state: true,
          },
          selected: {
            state: true,
          },
          checked: {
            state: true,
          },
          editableName: {
            state: true,
            calledEvent: "expanded",
          },
        },
        addNode: {
          state: true,
          fn: this.addNodeFunction,
          appearOnHover: false,
        },
        editNode: { state: false, fn: null, appearOnHover: false },
        deleteNode: {
          state: true,
          fn: this.deleteNodeFunction,
          appearOnHover: true,
        },
        showTags: true,
      };
    },
  },
  mounted() {
    this.$refs["my-tree"].expandNode(1);
  },
  methods: {
  findPath (obj, name, val, currentPath) {
    let that=this
  currentPath = currentPath || ''

  let matchingPath

  if (!obj || typeof obj !== 'object') return

  if (obj[name] === val) return `${currentPath}['${name}']`

  for (const key of Object.keys(obj)) {
    if (key === name && obj[key] === val) {
      matchingPath = currentPath
    } else {
      matchingPath = that.findPath(obj[key], name, val, `${currentPath}['${key}']`)
    }

    if (matchingPath) break
  }

  return matchingPath
},
    myCheckedFunction(nodeId, state) {
      // console.log(`is ${nodeId} checked ? ${state}`);
      // console.log(this.$refs["my-tree"].getCheckedNodes("id"));
      // console.log(this.$refs["my-tree"].getCheckedNodes("text"));
    },
    mySelectedFunction(nodeId, state,node) {
      console.log(this.$refs["my-tree"].getSelectedNode())
      this.$refs["my-tree"].getSelectedNode().content = "hello world"
    },
    deleteNodeFunction(node) {
      const nodePath = this.$refs["my-tree"].findNodePath(node.id);
      const parentNodeId = nodePath.slice(-2, -1)[0];
      if (parentNodeId === undefined) {
        // 'root' node
        const nodeIndex =
          this.$refs["my-tree"].nodes.findIndex((x) => x.id !== node.id) - 1;
        this.$refs["my-tree"].nodes.splice(nodeIndex, 1);
      } else {
        // child node
        const parentNode = this.$refs["my-tree"].findNode(parentNodeId);
        const nodeIndex =
          parentNode.nodes.findIndex((x) => x.id !== node.id) - 1;
        parentNode.nodes.splice(nodeIndex, 1);
      }
      console.log("example: remove node", node.id);
    },
    addNodeFunction(node) {
      const newNode = {
        text: "Grandchild 2",
        id: Math.floor(Math.random() * 100),
      };
      console.log("example: add node", newNode);
      if (node.nodes === undefined) {
        this.$set(node, "nodes", [newNode]);
      } else {
        node.nodes.push(newNode);
      }
    },
  },
};
</script>