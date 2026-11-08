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

<p><span data-i18n="about.intro" data-i18n-html>I am a PhD student in the Graduate School of Arts and Letters at Tohoku University, advised by Professor <a href="https://lvzeyu.github.io/">Zeyu Lyu</a>. I am also mentored by Professor <a href="https://discovery.nus.edu.sg/19615-senhu-wang">Senhu Wang</a> at the National University of Singapore.</span>
<span data-i18n="about.education">Before joining the lab, I received an M.S. in Computer Science from Beijing Jiaotong University and a B.Eng. in Electronic Engineering from the University of Electronic Science and Technology of China (UESTC).</span></p>

<p data-i18n="about.research">My research lies in computational social science. Using computational methods, large-scale digital trace data, and LLM-based social simulations, I study social inequality and how individual behaviors and interactions give rise to collective outcomes.</p>

<h1 id="-blog">🔥 <span data-i18n="sections.blog">Blog</span></h1>
<ul>
  {% for post in site.posts limit:3 %}
    <li>
      <i>{{ post.date | date: "%Y.%m" }}</i>: &nbsp; <a href="{{ post.url }}"{% if post.i18n_key %} data-i18n="{{ post.i18n_key }}.title"{% endif %}>{{ post.title }}</a>
    </li>
  {% endfor %}
</ul>

<div style="text-align: right;">
<a href="/blog/" data-i18n="common.all_blogs">All Blogs ➡</a>
</div>


<h1 id="-publications">📝 <span data-i18n="sections.publications">Publications</span></h1>

### Recentralization in Decentralized Social Media? An LLM-Driven Simulation Investigation of the Feed Marketplace
**Z. Wang**, Z. Lyu, X. Bai, Z. Wu, T. Huang, J. Pan, Y.-X. Qiu, C. Xiao, S. Zheng, J. Qin  
*Telematics and Informatics Reports*. **2026**.

### [Beyond Genre Categories: How Narrative Pattern Coherence and Spanning Distance Shape Film Success](https://aclanthology.org/2026.nlp4dh-1.13/)
**Zhichao Wang**, Zeyu Lyu  
*Proceedings of the 6th International Conference on Natural Language Processing for the Digital Humanities (NLP4DH)*. **2026**. [PDF](https://aclanthology.org/2026.nlp4dh-1.13.pdf)

### [Gender inequality in academic promotion trajectories in Japan](https://doi.org/10.1038/s41598-026-54562-5)
Rongkang Pei, Zeyu Lyu, Guolong Wang, **Zhichao Wang**, Maoxin Ye, Xiaoguang Fan  
*Scientific Reports*. **2026**.

### [The Impact of Regional Economic Conditions on Bidding Strategies in Online Labor Markets](https://ieeexplore.ieee.org/abstract/document/11402067)
**Zhichao Wang**, Zeyu Lyu  
*Proceedings of the IEEE International Conference on Big Data (BigData)*. **2025**.

### [Online Labor Market Task Recommendation via Time-Weighted Diffusion Model](https://link.springer.com/chapter/10.1007/978-981-96-6588-4_30)
Shengwei Du, **Zhichao Wang**, Yixuan Ma  
*Neural Information Processing (ICONIP 2024)*. **2025**.

### [From ABM to GABM: How Generative AI is Reshaping Social Simulation](https://www.jis.ac.cn/CN/Y2025/V4/I2/138)
**Zhichao Wang**, Zeyu Lyu  
*Journal of Intelligent Society*. **2025**.

### [MIG: Addressing the Cold-Start Problem in Task Recommendations Through Enhanced Meta Embeddings](https://ieeexplore.ieee.org/abstract/document/10831509)
**Zhichao Wang**, Yixuan Ma    
*Proceedings of the IEEE International Conference on Systems, Man, and Cybernetics (SMC)*. **2024**.

### [Enhancing Task Matching in Online Labor Markets Using Multi-field Features Interaction and Meta-learning](https://link.springer.com/chapter/10.1007/978-981-97-4045-1_43) (<span data-i18n="common.travel_grant">Travel Grant</span>)
**Zhichao Wang**, Yixuan Ma  
*LISS 2023*. **2024**.

### [Personalized recommendation system based on meta-learning for human-centric consumer services in gig economy](https://ieeexplore.ieee.org/abstract/document/10296044/)
Yixuan Ma, **Zhichao Wang**, Mingcong Tang et al.  
*IEEE Transactions on Consumer Electronics*. **2023**.

<h2 id="working-papers" data-i18n="sections.working_papers">Working Papers</h2>

### How Focusing Events Reshape Online Opinion Expression: Norm Activation, Participation, and Opinion Climate Feedback
Zeyu Lyu, Hiroki Takikawa, **Zhichao Wang**, Takuya Shimokubo  
<span data-i18n="papers.focusing_events.status" data-i18n-html>Under review at <em>Social Science Computer Review</em>.</span>

### Do Midlife Expectations about Ageing Shape Later Cognition? Social Class and Cognitive Inequality
**Zhichao Wang**, Senhu Wang, Zheng Liu, Zeyu Lyu  
<span data-i18n="papers.cognition.status" data-i18n-html>Conditionally accepted by <em>SSM – Population Health</em>.</span>

### How Does Subjective Well-Being Affect Later-Life Frailty?
**Zhichao Wang**, Senhu Wang, Rongkang Pei, Zeyu Lyu  
<span data-i18n="papers.frailty.status" data-i18n-html>Under review at <em>Innovation in Aging</em>.</span>

### Winning Does Not Fix the Leak: The Asymmetry of Success and Failure in Women’s Occupational Persistence
**Zhichao Wang**, Senhu Wang, Zeyu Lyu  
<span data-i18n="papers.occupational_persistence.status" data-i18n-html>Under review at <em>Work, Employment and Society</em>.</span>


<h1 id="-presentation">💬 <span data-i18n="sections.presentations">Presentation</span></h1>

### Gender inequality in academic promotion: Evidence from researchers’ career trajectories in Japan
Rongkang Pei, **Zhichao Wang**, Zeyu Lyu  
*American Sociological Association Annual Meeting*. 2026.08. (<span data-i18n="common.oral">Oral</span>)

### [Beyond Genre Categories: How Narrative Pattern Coherence and Spanning Distance Shape Film Success](https://aclanthology.org/2026.nlp4dh-1.13/)
**Zhichao Wang**, Zeyu Lyu  
*The 6th International Conference on Natural Language Processing for the Digital Humanities (NLP4DH)*. 2026.07. (<span data-i18n="common.poster">Poster</span>)

### Costly Punishment Undermines Collective Welfare: Evidence from LLM Multi-Agent System in Public Goods Game (<span data-i18n="common.travel_grant">Travel Grant</span>)
**Zhichao Wang**, Zeyu Lyu  
*International Conference on Social Dilemmas 2026 (ICSD)*. 2026.06. (<span data-i18n="common.poster">Poster</span>)

### Segregation and Opportunity Inequality in The Gig Economy
**Zhichao Wang**, Zeyu Lyu  
*Population Association of Singapore Conference 2026 (PAS)*. 2026.05. (<span data-i18n="common.oral">Oral</span>)

### Gender Bias in Narrative Tropes (<span data-i18n="common.travel_grant">Travel Grant</span>)
**Zhichao Wang**, Zeyu Lyu  
*第80回日本数理社会学会*. 2026.03. (<span data-i18n="common.poster">Poster</span>)

### The Role of Recommendation Algorithms in Shaping Opinion Polarization: Evidence from an LLM-Driven Social Media Simulation
**Zhichao Wang**, Zeyu Lyu, Tao Huang, Chuan Xiao et al.  
*2025 Asian Network for Public Opinion Research-Asia‑Pacific Communication Alliance Annual Conference*.2025.11.(<span data-i18n="common.oral">Oral</span>)  
*中国社会学年会*.2025.07.(<span data-i18n="common.oral">Oral</span>)

### Formation and Maintenance of Social Norms: Insights from Simulations Using Large Language Models
**Zhichao Wang**, Zeyu Lyu, Yoshimichi Sato, Hiroki Takikawa, Yu Odanaka  
*第79回日本数理社会学会*.2025.08.(<span data-i18n="common.poster">Poster</span>)  
*中国计算社会学年会*.2025.12.(<span data-i18n="common.oral">Oral</span>)

### AI-augmented Synthetic Social Survey Data: Can Large Language Models Predict Public Opinion?(<span data-i18n="common.travel_grant">Travel Grant</span>)
Zeyu Lyu, **Zhichao Wang**  
*第78回日本数理社会学会*.2025.03.(<span data-i18n="common.poster">Poster</span>)

### Evaluating Hiring Decision-Making in Large Language Models(<span data-i18n="common.travel_grant">Travel Grant</span>)
**Zhichao Wang**, Zeyu Lyu  
*第78回日本数理社会学会*.2025.03.(<span data-i18n="common.poster">Poster</span>)

### Model-Agnostic Personalized Preference Estimator for Task Recommendation in Online Labor Markets: A Meta-Learning Approach
Yixuan Ma, **Zhichao Wang**  
*INFORMS Annual Meeting*.2023.10.(<span data-i18n="common.oral">Oral</span>)


<h1 id="-honors-and-awards">🎖 <span data-i18n="sections.honors">Honors and Awards</span></h1>
<!-- DC2 appointment: https://www.jsps.go.jp/file/storage/j-pd/data/list_of_recruits/R8_DC2_Saiyou.pdf -->
- *2026.04–2028.03* <span data-i18n="awards.jsps" data-i18n-html><a href="https://www.jsps.go.jp/j-pd/pd_gaiyo.html">JSPS Research Fellow (DC2)</a>, Japan Society for the Promotion of Science.</span>
- *2025.04–2028.03* <span data-i18n="awards.wise" data-i18n-html>Research Grant, <a href="https://www.aie.tohoku.ac.jp/english/">WISE Program for AI Electronics</a>.</span>
- *2024.06* <span data-i18n="awards.masters">Beijing Jiaotong University Outstanding Master’s Thesis Award.</span>
- *2023.07* <span data-i18n="awards.doctoral">Best Presentation Award in The 8th Doctoral Consortium of Sino-EU Doctoral School.</span>

<h1 id="-activities">🏃 <span data-i18n="sections.activities">Activities</span></h1>

- *2025.06* <span data-i18n="activities.sicss">The Summer Institute in Computational Social Science (SICSS-Hong Kong).</span>




<h1 id="-projects">💻 <span data-i18n="sections.projects">Projects</span></h1>

<h2 id="research-projects" data-i18n="projects.research">Research Projects</h2>

<h3 id="norm-formation-in-large-language-models"><a href="https://researchmap.jp/takikawa/research_projects/47609925" data-i18n="projects.norms.title">Norm Formation in Large Language Models</a></h3>
<p data-i18n="projects.norms.body">Collaborating with Prof. Zeyu Lyu to study how social norms emerge and stabilize in LLMs and LLM multi-agent systems, using activation steering.</p>

<h3 id="generalized-llm-based-social-experiment-platform"><a href="https://github.com/ZJUCSS/social-experiment-platform" data-i18n="projects.platform.title">Generalized LLM-Based Social Experiment Platform</a></h3>
<p data-i18n="projects.platform.body">Contributed to an open-source generative-agent simulation platform from Prof. Chao Wu's group at Zhejiang University. Designed and implemented simulation scenarios and interaction logic.</p>

### [NewsChat](https://newschat.blocs.jp/)
<p data-i18n="projects.newschat.body">Designed and built a news-reading platform for Prof. Hiroki Takikawa's group, enabling experiments on user engagement, trust, and behavioral responses to LLM-mediated news consumption.</p>

<h2 id="research-tools" data-i18n="projects.tools">Research Tools</h2>

### [Social Science Deadlines 📚](https://huggingface.co/spaces/neo2momoka/socsci-deadlines)
<p data-i18n="projects.deadlines.body" data-i18n-html>Countdowns to top social science conference, workshop, and summer school deadlines — with discipline filters (sociology, political science, economics, computational social science, etc.), fee/funding info, and one-click add-to-calendar. Adapted from <a href="https://github.com/huggingface/ai-deadlines">huggingface/ai-deadlines</a>.</p>

### [Paper Grab 📖](https://huggingface.co/spaces/neo2momoka/paper-grab)
<p data-i18n="projects.papergrab.body">Fetch the latest articles from English and Chinese social science journals in one click. English journals via the CrossRef API; Chinese journals via NCPSSD (国家哲学社会科学文献中心). Select journals, fetch, download CSV.</p>

