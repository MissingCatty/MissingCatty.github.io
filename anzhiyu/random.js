var posts=["2024/12/31/algorithm/寻找两个有序数组的中位数/","2024/12/30/algorithm/两数之和/","2025/01/11/algorithm/移除元素/","2025/01/11/algorithm/有序数组的平方/","2025/01/11/algorithm/长度最小子数组/","2025/01/12/algorithm/区间和/","2025/01/13/algorithm/开发商购买土地/"];function toRandomPost(){
    pjax.loadUrl('/'+posts[Math.floor(Math.random() * posts.length)]);
  };