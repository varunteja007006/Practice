// Sample array with multi-level nesting
const items = [
  { id: 1, parentId: null, name: "Parent 1" },
  { id: 2, parentId: null, name: "Parent 2" },
  { id: 3, parentId: null, name: "Parent 3" },
  { id: 4, parentId: 2, name: "Child 1 of Parent 2" },
  { id: 5, parentId: 2, name: "Child 2 of Parent 2" },
  { id: 6, parentId: 3, name: "Child 1 of Parent 3" },
  { id: 7, parentId: 4, name: "Grandchild 1 of Parent 2" },
  { id: 8, parentId: 4, name: "Grandchild 2 of Parent 2" },
  { id: 9, parentId: 6, name: "Grandchild 1 of Parent 3" },
  { id: 10, parentId: 5, name: "Grandchild 1 of Parent 2" }
];

function buildNestedTree(items) {
  const itemMap = new Map();
  const tree = [];

  // Create map of all items with empty children arrays
  items.forEach(item => {
    itemMap.set(item.id, {
      ...item,
      children: []
    });
  });

  // Build nested structure
  items.forEach(item => {
    const node = itemMap.get(item.id);
    
    if (item.parentId === null) {
      tree.push(node);
    } else {
      const parent = itemMap.get(item.parentId);
      if (parent) {
        parent.children.push(node);
      }
    }
  });

  return tree;
}

// Usage example
const nestedTree = buildNestedTree(items);
console.log(JSON.stringify(nestedTree, null, 2));
