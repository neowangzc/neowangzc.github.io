---
layout: default
permalink: /blog/
title: "Blog"
author_profile: false
---

<span class='anchor' id='all-blogs'></span>

<style>
.page {
  float: none !important;
  width: 100% !important;
  margin-left: 0 !important;
  margin-right: 0 !important;
}

.page__inner-wrap {
  max-width: 1000px;
  margin: 0 auto;
  padding: 0 1em;
}
</style>

<div class="blog-header">
  <h1>Blogs</h1>
</div>

<div class="tag-filter-section">
  <div class="tag-filter-title">Filter by tag:</div>
  <div class="tag-cloud">
    <button class="tag-filter-btn active" data-tag="all">All</button>
    {% assign all_tags = "" | split: "" %}
    {% for post in site.posts %}
      {% for tag in post.tags %}
        {% unless all_tags contains tag %}
          {% assign all_tags = all_tags | push: tag %}
        {% endunless %}
      {% endfor %}
    {% endfor %}
    {% assign sorted_tags = all_tags | sort %}
    {% for tag in sorted_tags %}
    <button class="tag-filter-btn" data-tag="{{ tag }}">{{ tag }}</button>
    {% endfor %}
  </div>
</div>

<div class="blog-list">
{% for post in site.posts %}
  <article class="blog-item" data-tags="{% for tag in post.tags %}{{ tag }} {% endfor %}">
    <h2 class="blog-item-title">
      <a href="{{ post.url | relative_url }}">{{ post.title }}</a>
    </h2>
    {% if post.excerpt %}
    <p class="blog-item-excerpt">{{ post.excerpt | strip_html | truncatewords: 25 }}</p>
    {% endif %}
    <div class="blog-item-meta">
      <span class="blog-item-date">{% if post.date_precision == "month" %}{{ post.date | date: "%B %Y" }}{% else %}{{ post.date | date: "%B %d, %Y" }}{% endif %}</span>
      {% if post.tags %}
        <span class="meta-separator">•</span>
        {% for tag in post.tags %}
          <span class="blog-item-tag" data-tag="{{ tag }}">#{{ tag }}</span>
        {% endfor %}
      {% endif %}
    </div>
  </article>
{% endfor %}
</div>

<div class="no-results" style="display: none;">
  <p>No blog posts found with the selected tag.</p>
</div>

<style>
.blog-header {
  text-align: center;
  margin: 2em 0 1.5em 0;
  padding-bottom: 1.5em;
  border-bottom: 1px solid #e0e0e0;
}

.blog-header h1 {
  font-size: 2.5em;
  color: #224b8d;
  font-weight: 300;
  margin: 0;
  border: none;
  padding: 0;
}

.tag-filter-section {
  max-width: 900px;
  margin: 0 auto 2em auto;
  padding: 1.5em;
  background-color: #f8f9fa;
  border-radius: 8px;
  border: 1px solid #e0e0e0;
}

.tag-filter-title {
  font-size: 0.9em;
  color: #7a8288;
  margin-bottom: 1em;
  font-weight: 600;
}

.tag-cloud {
  display: flex;
  flex-wrap: wrap;
  gap: 0.5em;
}

.tag-filter-btn {
  padding: 0.4em 1em;
  background-color: white;
  color: #224b8d;
  border: 1px solid #224b8d;
  border-radius: 20px;
  font-size: 0.9em;
  cursor: pointer;
  transition: all 0.2s ease;
  font-weight: 500;
}

.tag-filter-btn:hover {
  background-color: #224b8d;
  color: white;
  transform: translateY(-2px);
  box-shadow: 0 2px 4px rgba(0,0,0,0.1);
}

.tag-filter-btn.active {
  background-color: #224b8d;
  color: white;
}

.blog-list {
  max-width: 900px;
  margin: 0 auto;
}

.blog-item {
  padding: 2em 0;
  border-bottom: 1px solid #e8e8e8;
  transition: all 0.2s ease;
}

.blog-item:last-child {
  border-bottom: none;
}

.blog-item:hover {
  transform: translateX(8px);
}

.blog-item.hidden {
  display: none;
}

.blog-item-title {
  margin: 0 0 0.5em 0;
  font-size: 1.4em;
  font-weight: normal;
  line-height: 1.4;
  border: none;
  padding: 0;
}

.blog-item-title a {
  color: #2c3e50;
  text-decoration: none;
  transition: color 0.2s ease;
}

.blog-item-title a:hover {
  color: #224b8d;
  text-decoration: none;
}

.blog-item-excerpt {
  color: #666;
  font-size: 0.95em;
  line-height: 1.6;
  margin: 0.5em 0 1em 0;
}

.blog-item-meta {
  font-size: 0.9em;
  color: #7a8288;
  display: flex;
  align-items: center;
  flex-wrap: wrap;
  gap: 0.5em;
}

.blog-item-date {
  color: #7a8288;
}

.meta-separator {
  color: #ccc;
}

.blog-item-tag {
  color: #224b8d;
  margin-right: 0.3em;
  font-weight: 500;
  cursor: pointer;
  transition: all 0.2s ease;
}

.blog-item-tag:hover {
  text-decoration: underline;
}

.no-results {
  max-width: 900px;
  margin: 3em auto;
  text-align: center;
  padding: 3em;
  background-color: #f8f9fa;
  border-radius: 8px;
  color: #7a8288;
}

@media (max-width: 768px) {
  .blog-header h1 {
    font-size: 2em;
  }
  
  .tag-filter-section {
    padding: 1em;
  }
  
  .blog-item {
    padding: 1.5em 0;
  }
  
  .blog-item-title {
    font-size: 1.2em;
  }
  
  .blog-item:hover {
    transform: none;
  }
}
</style>

<script>
document.addEventListener('DOMContentLoaded', function() {
  const filterButtons = document.querySelectorAll('.tag-filter-btn');
  const blogItems = document.querySelectorAll('.blog-item');
  const noResults = document.querySelector('.no-results');
  const blogItemTags = document.querySelectorAll('.blog-item-tag');
  
  filterButtons.forEach(button => {
    button.addEventListener('click', function() {
      const selectedTag = this.getAttribute('data-tag');
      filterByTag(selectedTag);
      
      filterButtons.forEach(btn => btn.classList.remove('active'));
      this.classList.add('active');
    });
  });
  
  blogItemTags.forEach(tag => {
    tag.addEventListener('click', function(e) {
      e.preventDefault();
      const selectedTag = this.getAttribute('data-tag');
      filterByTag(selectedTag);
      
      filterButtons.forEach(btn => btn.classList.remove('active'));
      const matchingButton = document.querySelector('.tag-filter-btn[data-tag="' + selectedTag + '"]');
      if (matchingButton) {
        matchingButton.classList.add('active');
        document.querySelector('.tag-filter-section').scrollIntoView({ behavior: 'smooth', block: 'start' });
      }
    });
  });
  
  function filterByTag(tag) {
    let visibleCount = 0;
    
    blogItems.forEach(item => {
      const itemTags = item.getAttribute('data-tags');
      
      if (tag === 'all' || itemTags.includes(tag)) {
        item.classList.remove('hidden');
        visibleCount++;
      } else {
        item.classList.add('hidden');
      }
    });
    
    if (visibleCount === 0) {
      noResults.style.display = 'block';
    } else {
      noResults.style.display = 'none';
    }
  }
});
</script>
