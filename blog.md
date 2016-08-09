---
layout: archive
title : Blog
permalink: /blog/
category: "blog"
tagline: "alicja blogs"
---
{% for post in site.posts %}
  <div class="post postContent">
    <div  class="postDate"><time datetime="{{ post.date | date_to_xmlschema }}" itemprop="datePublished">{{ post.date | date: "%b %-d, %Y" }}</time>
    </div>
    <div class="postDay">
      {{post.tag}}
    </div>
    <br>
    <div class="postTitle">
    <h3><a class='postLink' href="{{site.baseurl}}{{post.url}}">{{post.title}}</a></h3>
    </div>
    <div class="post-content">
   {{ post.content }}
    </div>
  </div>
{% endfor %}
