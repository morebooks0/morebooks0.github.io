<template>
  <div>
    <!-- 博客详情 -->
    <div class="img-center">
      <img :src="getImg(post.cover)" class="cover" />
    </div>
    <div class="container">
      <div class="text-center">
        <h1 class="headline">{{ post.title }}</h1>
        <p>
          编录时间: {{ `${post.date[0]}/${post.date[1]}/${post.date[2]}` }}
        </p>
        <!-- 作者介绍 -->
        <div class="center">
          <Avatar />
          <span class="margin">
            {{ config.username }}
          </span>
        </div>
      </div>
      <hr>
      <router-view class="post"></router-view>

      <PostTags :postTags="post.tags" />
      <PostNavBtn :prev="prevPost" :next="nextPost" />
    </div>
  </div>
</template>

<script>
import Avatar from '@/components/Avatar.vue'
import PostNavBtn from '@/components/PostNavBtn.vue'
import PostTags from '@/components/PostTags.vue'

export default {
  name: 'ViewPost',
  components: {
    Avatar,
    PostNavBtn,
    PostTags
  },
  data: function () {
    return {
      postId: this.$route.path.split('posts/')[1],
      posts: this.getConfig('posts.json').posts,
      post: {
        title: null,
        date: [
          null,
          null,
          null
        ],
        tags: []
      },
      config: this.getConfig().config,
      prevPost: {
        title: null,
        id: null
      },
      nextPost: {
        title: null,
        id: null
      }
    }
  },
  methods: {
    getPost: function () {
      // because of markdown file rendering, can't use the triditional dynamic route matching
      this.postId = this.$route.path.split('posts/')[1] // 获取到当前页面需要查看的博客名称
      const curPostIdx = this.posts.findIndex((post) => post.id === this.postId)
      if (curPostIdx >= 0) { // post found
        this.post = this.posts[curPostIdx]
        this.changeTitle(this.post.title)
        try {
          if (curPostIdx > 0) { // has a previous post (not the first one)
            this.nextPost.title = this.posts[curPostIdx - 1].title
            this.nextPost.id = this.posts[curPostIdx - 1].id
          } else {
            this.nextPost.id = null
          }
          if (curPostIdx < this.posts.length - 1) { // has a next post (not the last one)
            this.prevPost.title = this.posts[curPostIdx + 1].title
            this.prevPost.id = this.posts[curPostIdx + 1].id
          } else {
            this.prevPost.id = null
          }
        } catch (err) {
          console.log(err) // Handle error
        }
      }
    },
    getImg: function (imgPath) {
      return require('@/static/img/' + imgPath)
    }
  },
  mounted: function () {
    this.getPost()
  },
  watch: {
    $route (to, from) {
      this.getPost()
    }
  }
}
</script>

<style>
.img-center{
  text-align: center;
}

.cover {
  width: 20vw;
}

.margin {
  margin-left: 20px;
}

.post img {  /* limit image max width to 100vw in a post */
  max-width: 100%;
}

.post img:hover{
  width: 80%;
}

.frontmatter-markdown{
    width: 80%;
    margin: 0px 0px 0px 5%;
}

pre code{
  max-height: 400px;
  overflow: auto;
}

pre code.language-python,
pre code.language-html,
pre code.language-js
{
  background-color: #e7e8f6;
}

</style>
