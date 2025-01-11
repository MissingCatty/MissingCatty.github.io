var posts=["2024/12/31/algorithm/寻找两个有序数组的中位数/","2024/12/30/algorithm/两数之和/","2025/01/11/algorithm/移除元素/"];function toRandomPost(){
    pjax.loadUrl('/'+posts[Math.floor(Math.random() * posts.length)]);
  };