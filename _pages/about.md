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

I am a PhD student in the Graduate School of Arts and Letters at Tohoku University, working with Professor [Zeyu Lyu](https://lvzeyu.github.io/). I also work as a research assistant to [Senhu Wang](https://discovery.nus.edu.sg/19615-senhu-wang). I am a [JSPS Research Fellow (DC2)](https://www.jsps.go.jp/j-pd/pd_gaiyo.html) for 2026–2028.
Before joining the lab, I received an M.S. in Computer Science from Beijing Jiaotong University and a B.Eng. in Electronic Engineering from the University of Electronic Science and Technology of China (UESTC).

My research lies in computational social science. Using computational methods, large-scale digital trace data, and LLM-based social simulations, I study social inequality and how individual behaviors and interactions give rise to collective outcomes. My recent work focuses on online labor markets, opinion dynamics, cultural markets, and gender inequality in academic careers.

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

### [Beyond Genre Categories: How Narrative Pattern Coherence and Spanning Distance Shape Film Success](https://aclanthology.org/2026.nlp4dh-1.13/)
**Zhichao Wang**, Zeyu Lyu  
*Proceedings of the 6th International Conference on Natural Language Processing for the Digital Humanities (NLP4DH)*, pp. 132–137. **2026**. [PDF](https://aclanthology.org/2026.nlp4dh-1.13.pdf)

### [Gender inequality in academic promotion trajectories in Japan](https://doi.org/10.1038/s41598-026-54562-5)
Rongkang Pei, Zeyu Lyu, Guolong Wang, **Zhichao Wang**, Maoxin Ye, Xiaoguang Fan  
*Scientific Reports*, 16, Article 25230. **2026**.

### [The Impact of Regional Economic Conditions on Bidding Strategies in Online Labor Markets](https://ieeexplore.ieee.org/abstract/document/11402067)
**Zhichao Wang**, Zeyu Lyu  
*Proceedings of the IEEE International Conference on Big Data (BigData)*, pp. 5860–5867. **2025**.

### [Online Labor Market Task Recommendation via Time-Weighted Diffusion Model](https://link.springer.com/chapter/10.1007/978-981-96-6588-4_30)
Shengwei Du, **Zhichao Wang**, Yixuan Ma  
*Neural Information Processing (ICONIP 2024)*, Lecture Notes in Computer Science, vol. 15290, pp. 431–446. Published **2025**.

### [From ABM to GABM: How Generative AI is Reshaping Social Simulation](https://www.jis.ac.cn/CN/Y2025/V4/I2/138)
**Zhichao Wang**, Zeyu Lyu  
*Journal of Intelligent Society*. **2025**.

### [MIG: Addressing the Cold-Start Problem in Task Recommendations Through Enhanced Meta Embeddings](https://ieeexplore.ieee.org/abstract/document/10831509)
**Zhichao Wang**, Yixuan Ma    
*Proceedings of the IEEE International Conference on Systems, Man, and Cybernetics (SMC)*. **2024**.

### [Enhancing Task Matching in Online Labor Markets Using Multi-field Features Interaction and Meta-learning](https://link.springer.com/chapter/10.1007/978-981-97-4045-1_43) (Travel Grant)
**Zhichao Wang**, Yixuan Ma  
*LISS 2023*, Lecture Notes in Operations Research, pp. 556–571. Published **2024**.

### [Personalized recommendation system based on meta-learning for human-centric consumer services in gig economy](https://ieeexplore.ieee.org/abstract/document/10296044/)
Yixuan Ma, **Zhichao Wang**, Mingcong Tang et al.  
*IEEE Transactions on Consumer Electronics*. **2023**.


# 💬 Presentation

### Gender inequality in academic promotion: Evidence from researchers’ career trajectories in Japan
Rongkang Pei, **Zhichao Wang**, Zeyu Lyu  
*American Sociological Association Annual Meeting*. 2026.08. (Oral)

### [Beyond Genre Categories: How Narrative Pattern Coherence and Spanning Distance Shape Film Success](https://aclanthology.org/2026.nlp4dh-1.13/)
**Zhichao Wang**, Zeyu Lyu  
*The 6th International Conference on Natural Language Processing for the Digital Humanities (NLP4DH)*. 2026.07. (Poster)

### Costly Punishment Undermines Collective Welfare: Evidence from LLM Multi-Agent System in Public Goods Game (Travel Grant)
**Zhichao Wang**, Zeyu Lyu  
*International Conference on Social Dilemmas 2026 (ICSD)*. 2026.06. (Poster)

### Segregation and Opportunity Inequality in The Gig Economy
**Zhichao Wang**, Zeyu Lyu  
*Population Association of Singapore Conference 2026 (PAS)*. 2026.05. (Oral)

### Gender Bias in Narrative Tropes (Travel Grant)
**Zhichao Wang**, Zeyu Lyu  
*第80回日本数理社会学会*. 2026.03. (Poster)

### The Role of Recommendation Algorithms in Shaping Opinion Polarization: Evidence from an LLM-Driven Social Media Simulation
**Zhichao Wang**, Zeyu Lyu, Tao Huang, Chuan Xiao et al.  
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
<!-- DC2 appointment: https://www.jsps.go.jp/file/storage/j-pd/data/list_of_recruits/R8_DC2_Saiyou.pdf -->
- *2026.04–2028.03* [JSPS Research Fellow (DC2)](https://www.jsps.go.jp/j-pd/pd_gaiyo.html), Japan Society for the Promotion of Science.
- *2025.04–2028.03* Research Grant, [WISE Program for AI Electronics](https://www.aie.tohoku.ac.jp/english/).
- *2024.06* Beijing Jiaotong University Outstanding Master’s Thesis Award.
- *2023.07* Best Presentation Award in The 8th Doctoral Consortium of Sino-EU Doctoral School .

# 🏃 Activities
- *2025.06* The Summer Institute in Computational Social Science (SICSS-Hong Kong).




# 💻 Projects

### [Social Science Deadlines 📚](https://huggingface.co/spaces/neo2momoka/socsci-deadlines)
Countdowns to top social science conference, workshop, and summer school deadlines — with discipline filters (sociology, political science, economics, computational social science, etc.), fee/funding info, and one-click add-to-calendar. Adapted from [huggingface/ai-deadlines](https://github.com/huggingface/ai-deadlines).

### [Paper Grab 📖](https://huggingface.co/spaces/neo2momoka/paper-grab)
Fetch the latest articles from English and Chinese social science journals in one click. English journals via the CrossRef API; Chinese journals via NCPSSD (国家哲学社会科学文献中心). Select journals, fetch, download CSV.

