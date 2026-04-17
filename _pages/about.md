---
permalink: /
title: ""
excerpt: ""
author_profile: true
redirect_from: 
  - /about/
  - /about.html
---

{% if site.google_scholar_stats_use_cdn %}
{% assign gsDataBaseUrl = "https://cdn.jsdelivr.net/gh/" | append: site.repository | append: "@" %}
{% else %}
{% assign gsDataBaseUrl = "https://raw.githubusercontent.com/" | append: site.repository | append: "/" %}
{% endif %}
{% assign url = gsDataBaseUrl | append: "google-scholar-stats/gs_data_shieldsio.json" %}

<span class='anchor' id='about-me'></span>

I am currently a PhD student in Professor [Zeyu Lyu’s lab](https://lvzeyu.github.io/), where I study the intersection of computational social science, artificial intelligence, and social computing.
Our group focuses on employing big data and computational methods in the areas of sociology, communication, and political science.
Before joining the lab, I worked in the [E-sports industry](https://www.douyu.com/) and the [traditional media industry](https://www.nmtv.cn/index).
I hold an MS degree from Beijing Jiaotong University and a BA degree from the University of Electronic Science and Technology of China (UESTC).

**[Research Interest]**
1. **Digital Platforms**: Polarization, algorithmic control, and gig economy
2. **LLM for Social Science**:Human–AI interaction, LLMs-driven social simulation
3. **Computational Humanities**: Online discourse, narratives, and cultural evolution


<span class='anchor' id='-blog'></span>
# 🔥 Blog
<ul>
  {% for post in site.posts limit:3 %}
    <li>
      <i>{{ post.date | date: "%Y.%m" }}</i>: &nbsp; <a href="{{ post.url }}">{{ post.title }}</a>
    </li>
  {% endfor %}
</ul>

<div style="text-align: right;">
<a href="/blog/">All Blogs ➡</a>
</div>


# 📝 Publications 

### [The Impact of Regional Economic Conditions on Bidding Strategies in Online Labor Markets]()
**Zhichao Wang**, Zeyu Lyu  
*In Proceedings of IEEE International Conference on Big Data*. **2025**

### [From ABM to GABM: How Generative AI is Reshaping Social Simulation](https://www.jis.ac.cn/CN/Y2025/V4/I2/138)
**Zhichao Wang**, Zeyu Lyu  
*Journal of Intelligent Society*. **2025**

### [Personalized recommendation system based on meta-learning for human-centric consumer services in gig economy](https://ieeexplore.ieee.org/abstract/document/10296044/)
Yixuan Ma, **Zhichao Wang**, Mingcong Tang et al.  
*IEEE Transactions on Consumer Electronics*. **2023**

### [MIG: Addressing the Cold-Start Problem in Task Recommendations Through Enhanced Meta Embeddings](https://ieeexplore.ieee.org/abstract/document/10831509)
**Zhichao Wang**, Yixuan Ma    
*In Proceedings of IEEE International Conference on Systems, Man, and Cybernetics (SMC)*. **2024**

### [Enhancing Task Matching in Online Labor Markets Using Multi-field Features Interaction and Meta-learning](https://link.springer.com/chapter/10.1007/978-981-97-4045-1_43)(Travel Grant)
**Zhichao Wang**, Yixuan Ma  
*In Proceedings of International Conference on Logistics, Informatics and Service Sciences*. **2023**

### [Online Labor Market Task Recommendation via Time-Weighted Diffusion Model](https://link.springer.com/chapter/10.1007/978-981-96-6588-4_30)
Shengwei Du, **Zhichao Wang**, Yixuan Ma  
*In Proceedings of International Conference on Neural Information Processing(ICONIP)*. **2024**


# 💬 Presentation

### Costly Punishment Undermines Collective Welfare: Evidence from LLM Multi-Agent System in Public Goods Game(Travel Grant)
**Zhichao Wang**, Zeyu Lyu  
*International Conference on Social Dilemmas 2026 (ICSD)*.2026.06.(Oral)

### Gender inequality in academic promotion:Evidence from researchers’ career trajectories in Japan
Rongkang Pei, **Zhichao Wang**, Zeyu Lyu  
*2026 American Sociological Association*. 2026.8.(Oral)

### Gender Bias in Narrative Tropes(Travel Grant)
**Zhichao Wang**, Zeyu Lyu  
*第80回日本数理社会学会*.2026.03.(Poster)

### Segregation and Opportunity Inequality in The Gig Economy
**Zhichao Wang**, Zeyu Lyu, Tao Huang, Chuan Xiao et al.  
*Population Association of Singapore Conference 2026 (PAS)*.2026.05.(Oral)

### The Role of Recommendation Algorithms in Shaping Opinion Polarization: Evidence from an LLM-Driven Social Media Simulation
**Zhichao Wang**, Zeyu Lyu  
*2025 Asian Network for Public Opinion Research-Asia‑Pacific Communication Alliance Annual Conference*.2025.11.(Oral)  
*中国社会学年会*.2025.07.(Oral)

### Formation and Maintenance of Social Norms: Insights from Simulations Using Large Language Models
**Zhichao Wang**, Zeyu Lyu, Yoshimichi Sato, Hiroki Takikawa, Yu Odanaka  
*第79回日本数理社会学会*.2025.08.(Poster)  
*中国计算社会学年会*.2025.12.(Oral)

### AI-augmented Synthetic Social Survey Data: Can Large Language Models Predict Public Opinion?(Travel Grant)
Zeyu Lyu, **Zhichao Wang**  
*第78回日本数理社会学会*.2025.03.(Poster)

### Evaluating Hiring Decision-Making in Large Language Models(Travel Grant)
**Zhichao Wang**, Zeyu Lyu  
*第78回日本数理社会学会*.2025.03.(Poster)

### Model-Agnostic Personalized Preference Estimator for Task Recommendation in Online Labor Markets: A Meta-Learning Approach
Yixuan Ma, **Zhichao Wang**  
*INFORMS Annual Meeting*.2023.10.(Oral)


# 🎖 Honors and Awards
- *2026.04-2028.03* Research Grant, [JSPS Research Fellowships for Young Scientists (DC2)](https://www.jsps.go.jp/j-pd/pd_gaiyo.html).
- *2025.04–2028.03* Research Grant, [WISE Program for AI Electronics](https://www.aie.tohoku.ac.jp/english/).
- *2024.06* Beijing Jiaotong University Outstanding Master’s Thesis Award.
- *2023.07* Best Presentation Award in The 8th Doctoral Consortium of Sino-EU Doctoral School .

# 🏃 Activities
- *2025.06* The Summer Institute in Computational Social Science (SICSS-Hong Kong).




# 💻 Projects



