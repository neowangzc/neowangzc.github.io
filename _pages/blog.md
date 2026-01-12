---
layout: default
permalink: /blog/
title: "Blog"
author_profile: true
---

<span class='anchor' id='all-blogs'></span>

# 🔥 All Blogs

<div class="blog-list">
{% for post in site.posts %}
  <div class="blog-item">
    <div class="blog-date">
      <span class="blog-year">{{ post.date | date: "%Y" }}</span>
      <span class="blog-month-day">{{ post.date | date: "%m-%d" }}</span>
    </div>
    <div class="blog-content">
      <h3 class="blog-title">
        <a href="{{ post.url | relative_url }}">{{ post.title }}</a>
      </h3>
      {% if post.excerpt %}
      <p class="blog-excerpt">{{ post.excerpt | strip_html | truncatewords: 30 }}</p>
      {% endif %}
      {% if post.tags %}
      <div class="blog-tags">
        {% for tag in post.tags %}
        <span class="blog-tag">{{ tag }}</span>
        {% endfor %}
      </div>
      {% endif %}
    </div>
  </div>
{% endfor %}
</div>

<style>
.blog-list {
  margin-top: 2em;
}

.blog-item {
  display: flex;
  gap: 1.5em;
  padding: 1.5em 0;
  border-bottom: 1px solid #e0e0e0;
  transition: all 0.3s ease;
}

.blog-item:hover {
  background-color: #f8f9fa;
  padding-left: 1em;
  padding-right: 1em;
  margin-left: -1em;
  margin-right: -1em;
  border-radius: 8px;
}

.blog-date {
  flex-shrink: 0;
  width: 80px;
  text-align: center;
  padding: 0.5em;
  background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
  border-radius: 8px;
  color: white;
  height: fit-content;
}

.blog-year {
  display: block;
  font-size: 0.9em;
  font-weight: 600;
  opacity: 0.9;
}

.blog-month-day {
  display: block;
  font-size: 1.3em;
  font-weight: 700;
  margin-top: 0.2em;
}

.blog-content {
  flex: 1;
}

.blog-title {
  margin: 0 0 0.5em 0;
  font-size: 1.3em;
  line-height: 1.4;
}

.blog-title a {
  color: #2c3e50;
  text-decoration: none;
  transition: color 0.3s ease;
}

.blog-title a:hover {
  color: #667eea;
  text-decoration: none;
}

.blog-excerpt {
  color: #666;
  font-size: 0.95em;
  line-height: 1.6;
  margin: 0.5em 0;
}

.blog-tags {
  margin-top: 0.8em;
  display: flex;
  flex-wrap: wrap;
  gap: 0.5em;
}

.blog-tag {
  display: inline-block;
  padding: 0.2em 0.8em;
  background-color: #e8eaf6;
  color: #5c6bc0;
  border-radius: 12px;
  font-size: 0.85em;
  font-weight: 500;
}

@media (max-width: 768px) {
  .blog-item {
    flex-direction: column;
    gap: 1em;
  }
  
  .blog-date {
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 1em;
    padding: 0.8em;
  }
  
  .blog-year, .blog-month-day {
    display: inline;
    font-size: 1em;
  }
  
  .blog-month-day {
    margin-top: 0;
  }
}
</style>
