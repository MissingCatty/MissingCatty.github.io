var posts=["2024/11/19/hello-world/","2024/12/30/algorithm/两数之和/"];function toRandomPost(){
    pjax.loadUrl('/'+posts[Math.floor(Math.random() * posts.length)]);
  };