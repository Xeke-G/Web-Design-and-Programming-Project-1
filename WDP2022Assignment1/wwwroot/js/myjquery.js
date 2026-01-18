

var tableHeaderElement = document.getElementById("tableHeader");
if (tableHeaderElement != null) {
    tableHeaderElement.innerHTML +=
        "<h1 class='Jobs-header'>Top 10 company locations (according to number of employees)</h1>"
}

var tableElement = document.getElementById("tbl");
if (tableElement != null) {
    tableElement.innerHTML +=
        "<py-env>\n" +
        "   - pandas\n" +
        "   - numpy\n" +
        "   - matplotlib\n" +
        "   - seaborn\n" +
        "</py-env>\n" +
        "<py-script>\n" +
        "   import pandas as pd\n" +
        "   import numpy as np\n" +
        "   import matplotlib as plt\n" +
        "   import seaborn as sns\n" +
        "   from pyodide.http import open_url\n" +

        "   path = '../files/data/salaries.csv'\n" +
        "   url = open_url(path)\n" +
        "   df = pd.read_csv(url)\n" +
        "   top_company_location = df.company_location.value_counts()[:5]\n" +
        "   df_top_location = df[df.company_location.isin([i for i in top_company_location.index])]\n" +
        "   df.head(n=10)\n" +
        "</py-script>"
}


var pieElement = document.getElementById("piechart");
if (pieElement != null) {
    pieElement.innerHTML +=
        "<h1 class='Jobs-header'>Job distribution among top 10 in demand job title</h1>" +
        "<py-env>\n" +
        "   - pandas\n" +
        "   - numpy\n" +
        "   - matplotlib\n" +
        "   - seaborn\n" +
        "</py-env>\n" +

        "<py-script>\n" +
        "   import pandas as pd\n" +
        "   import numpy as np\n" +
        "   import matplotlib.pyplot as plt\n" +
        "   import seaborn as sns\n" +
        "   from pyodide.http import open_url\n" +

        "   path = '../files/data/salaries.csv'\n" +
        "   url = open_url(path)\n" +
        "   df = pd.read_csv(url)\n" +
        "   100-(df.shape[0]/df.shape[0])*100\n" +
        "   top_jobs = df.job_title.value_counts()[:7]\n" +
        "   n = df.shape[0]\n" +
        "   job_distribution = (top_jobs*100/n)\n" +
        "   job_distribution.plot(kind='pie', autopct='%1.0f%%', figsize=(15,8));\n" +
        "   plt.title('Job distribution among top 10 in demand job title');\n" +
        "   plt\n" +
        "</py-script>"
}

var barElement = document.getElementById("barplot");
if (barElement != null) {
    barElement.innerHTML +=
        "<h1 class='Jobs-header'>Salaries in the last 3 years</h1>" +
        "<py-env>\n" +
        "   - pandas\n" +
        "   - numpy\n" +
        "   - matplotlib\n" +
        "   - seaborn\n" +
        "</py-env>\n" +

        "<py-script>\n" +
        "   import pandas as pd\n" +
        "   import numpy as np\n" +
        "   import matplotlib.pyplot as plt\n" +
        "   import seaborn as sns\n" +
        "   from pyodide.http import open_url\n" +

        "   path = '../files/data/salaries.csv'\n" +
        "   url = open_url(path)\n" +
        "   df = pd.read_csv(url)\n" +
        "   plt.figure(figsize=(15,8))\n" +
        "   sns.barplot(x = 'work_year', y = 'salary_in_usd', data = df)\n" +
        "   plt\n" +
        "</py-script>" 
}

var empoymentBarElement = document.getElementById("empoymentBarplot");
if (empoymentBarElement != null) {
    empoymentBarElement.innerHTML +=
        "<h1 class='Jobs-header'>Salary VS top titles with their respective employment type</h1>" +
        "<py-env>\n" +
        "   - pandas\n" +
        "   - numpy\n" +
        "   - matplotlib\n" +
        "   - seaborn\n" +
        "</py-env>\n" +

        "<py-script>\n" +
        "   import pandas as pd\n" +
        "   import numpy as np\n" +
        "   import matplotlib.pyplot as plt\n" +
        "   import seaborn as sns\n" +
        "   from pyodide.http import open_url\n" +

        "   path = '../files/data/salaries.csv'\n" +
        "   url = open_url(path)\n" +
        "   df = pd.read_csv(url)\n" +

        "   min, max = df.salary_in_usd.quantile([0.15, 0.985]) \n" +
        "   df_no_outliers = df[(df.salary_in_usd > min) & (df.salary_in_usd < max)]\n" +
        "   100 - (df_no_outliers.shape[0] / df.shape[0]) * 100\n" +
        "   top_jobs = df_no_outliers.job_title.value_counts()[: 7]\n" +
        "   df_top_jobs = df_no_outliers[df_no_outliers.job_title.isin([i for i in top_jobs.index])]\n" +

        "   plt.figure(figsize = (15, 8))\n" +
        "   ax = sns.barplot(x = 'job_title', y = 'salary_in_usd', data = df_top_jobs, hue = 'employment_type')\n" +
        "   ax.set_xticklabels(ax.get_xticklabels(), rotation = 30, ha = 'right')\n" +
        "   plt.title('Salary VS top job titles with their respective employment type')\n" +
        "   plt\n" +
        "</py-script>"
}

var experienceBarElement = document.getElementById("experienceBarplot");
if (experienceBarElement != null) {
    experienceBarElement.innerHTML +=
        "<h1 class='Jobs-header'>Salary VS top tiles with their respective experience level</h1>" +
        "<py-env>\n" +
        "   - pandas\n" +
        "   - numpy\n" +
        "   - matplotlib\n" +
        "   - seaborn\n" +
        "</py-env>\n" +

        "<py-script>\n" +
        "   import pandas as pd\n" +
        "   import numpy as np\n" +
        "   import matplotlib.pyplot as plt\n" +
        "   import seaborn as sns\n" +
        "   from pyodide.http import open_url\n" +

        "   path = '../files/data/salaries.csv'\n" +
        "   url = open_url(path)\n" +
        "   df = pd.read_csv(url)\n" +

        "   min, max = df.salary_in_usd.quantile([0.15, 0.985]) \n" +
        "   df_no_outliers = df[(df.salary_in_usd > min) & (df.salary_in_usd < max)]\n" +
        "   100 - (df_no_outliers.shape[0] / df.shape[0]) * 100\n" +
        "   top_jobs = df_no_outliers.job_title.value_counts()[: 7]\n" +
        "   df_top_jobs = df_no_outliers[df_no_outliers.job_title.isin([i for i in top_jobs.index])]\n" +

        "   plt.figure(figsize = (20, 10))\n" +
        "   ax = sns.boxplot(x = 'job_title', y = 'salary_in_usd', data = df_top_jobs, hue = 'experience_level')\n" +
        "   ax.set_xticklabels(ax.get_xticklabels(), rotation = 30, ha = 'right')\n" +
        "   plt.title('Salary VS top job titles with their respective experience level')\n" +
        "   plt\n" +

        "</py-script>"
}


var technologyelements = document.getElementById("Home-div2");
if (technologyelements != null) {
    technologyelements.innerHTML +=

        '<div class="row">\n' +
        '<figure class="tech-fig col-xl-4 col-lg-4 col-md-4 col-sm-6 col-12">\n' +
        '<img class="tech-img" src="/files/images/technologies/ml.jpg">\n' +
        '<figcaption>\n' +
        '<h2>Machine Learning</h2>\n' +
        '<p>\n' +
        'Machine learning (ML) is a field of inquiry devoted to\n' +
        'understanding and building methods that "learn", that is,\n' +
        'methods that leverage data to improve performance on some\n' +
        'set of tasks. It is seen as a part of artificial\n' +
        'intelligence (Wikipedia).\n' +
        '</p>\n' +
        '<button class="Read-more-button" onclick="window.location.href="https://en.wikipedia.org/wiki/Machine_learning";">Read more</button>\n' +
        '</figcaption>\n' +
        '</figure>\n' +


        '<figure class="tech-fig col-xl-4 col-lg-4 col-md-4 col-sm-6 col-12">\n' +
        '<img class="tech-img" src="/files/images/technologies/dl.jpg">\n' +
        '<figcaption>\n' +
        '<h2 >Deep Learning</h2>\n' +
        '<p >\n' +
        'Deep learning (also known as deep structured learning)\n' +
        'is part of a broader family of machine learning methods\n' +
        'based on artificial neural networks with representation\n' +
        'learning. Learning can be supervised, semi-supervised or\n' +
        'unsupervised (Wikipedia).\n' +
        '</p>\n' +
        '<button class="Read-more-button" onclick="window.location.href="https://en.wikipedia.org/wiki/Deep_learning";">Read more</button>\n' +
        '</figcaption>\n' +
        '</figure>\n' +


        '<figure class="tech-fig col-xl-4 col-lg-4 col-md-4 col-sm-6 col-12">\n' +
        '<img class="tech-img" src="/files/images/technologies/nlp.jpg">\n' +
        '<figcaption>\n' +
        '<h2 >Natural Language Processing</h2>\n' +
        '<p >\n' +
        'Natural language processing (NLP) is a subfield of linguistics,\n' +
        'computer science, and AI concerned with the interactions between\n' +
        'computers and human language, in particular how to program\n' +
        'computers to process and analyze large amounts of natural\n' +
        'language data (Wikipedia).\n' +
        '</p>\n' +
        '<button class="Read-more-button" onclick="window.location.href="https://en.wikipedia.org/wiki/Natural_language_processing";">Read more</button>\n' +
        '</figcaption>\n' +
        '</figure>\n' +


        '<figure class="tech-fig col-xl-4 col-lg-4 col-md-4 col-sm-6 col-12">\n' +
        '<img class="tech-img" src="/files/images/technologies/nn.jpg">\n' +
        '<figcaption>\n' +
        '<h2> Neural Networks</h2>\n' +
        '<p >\n' +
        'A neural network is a network or circuit of biological\n' +
        'neurons, or, in a modern sense, an artificial neural network,\n' +
        'composed of artificial neurons or nodes. Thus, a neural\n' +
        'network is either a biological neural network, made up of\n' +
        'biological neurons, or an artificial neural network, used\n' +
        'for solving artificial intelligence (AI) problems (Wikipedia).\n' +
        '</p>\n' +
        '<button class="Read-more-button" onclick="window.location.href="https://en.wikipedia.org/wiki/Neural_network";">Read more</button>\n' +
        '</figcaption>\n' +
        '</figure>\n' +


        '<figure class="tech-fig col-xl-4 col-lg-4 col-md-4 col-sm-6 col-12">\n' +
        '<img class="tech-img" src="/files/images/technologies/cc.jpg">\n' +
        '<figcaption>\n' +
        '<h2>Cognitive Computing</h2>\n' +
        '<p >\n' +
        'Cognitive computing (CC) refers to technology platforms\n' +
        'that, broadly speaking, are based on the scientific\n' +
        'disciplines of AI and signal processing. These platforms\n' +
        'encompass ML, reasoning, NLP, speech recognition and\n' +
        'vision recognition, human-computer interaction, dialog\n' +
        'and narrative generation, among other technologies (Wikipedia).\n' +
        '</p>\n' +
        '<button class="Read-more-button" onclick="window.location.href="https://en.wikipedia.org/wiki/Cognitive_computing ";">Read more</button>\n' +
        '</figcaption>\n' +
        '</figure>\n' +


        '<figure class="tech-fig col-xl-4 col-lg-4 col-md-4 col-sm-6 col-12">\n' +
        '<img class="tech-img" src="/files/images/technologies/cv.jpg">\n' +
        '<figcaption>\n' +
        '<h2 >Computer Vision</h2>\n' +
        '<p >\n' +
        'Computer vision is an interdisciplinary scientific\n' +
        'understanding from digital images or videos. From\n' +
        'the perspective of engineering, it seeks to understand\n' +
        'and automate tasks that the human visual system can do\n' +
        '(Wikipedia).\n' +
        '</p>\n' +
        '<button class="Read-more-button" onclick="window.location.href="https://en.wikipedia.org/wiki/Computer_vision";">Read more</button>\n' +
        '</figcaption>\n' +
        '</figure>\n' +
        '</div>'
}



var companyelements = document.getElementById("companies");
if (companyelements != null) {
    companyelements.innerHTML +=

        '<div class="col-xl-2 col-lg-2 col-md-3 col-sm-4 col-xs-6">\n' +
        '<a href="Home/Companies#Google">\n' +
        '<figure class="home-figure">\n' +
        '<img src="/files/images/companies/alphabet.jpg" />\n' +
        '<figcaption>\n' +
        '<p>Alphabet (Google)</p>\n' +
        '</figcaption>\n' +
        '</figure>\n' +
        '</a>\n' +
        '</div>\n' +

        '<div class="col-xl-2 col-lg-2 col-md-3 col-sm-4 col-xs-6">\n' +
        '<a href="Home/Companies#Amazon">\n' +
        '<figure class="home-figure">\n' +
        '<img src="/files/images/companies/amazon.jpg" />\n' +
        '<figcaption>\n' +
        '<p>Amazon</p>\n' +
        '</figcaption>\n' +
        '</figure>\n' +
        '</a>\n' +
        '</div>\n' +

        '<div class="col-xl-2 col-lg-2 col-md-3 col-sm-4 col-xs-6">\n' +
        '<a href="Home/Companies#Apple">\n' +
        '<figure class="home-figure">\n' +
        '<img src="/files/images/companies/apple.jpg" />\n' +
        '<figcaption>\n' +
        '<p>Apple</p>\n' +
        '</figcaption>\n' +
        '</figure>\n' +
        '</a>\n' +
        '</div>\n' +

        '<div class="col-xl-2 col-lg-2 col-md-3 col-sm-4 col-xs-6">\n' +
        '<a href="Home/Companies#C3.AI">\n' +
        '<figure class="home-figure">\n' +
        '<img src="/files/images/companies/c3ai.jpg" />\n' +
        '<figcaption>\n' +
        '<p>C3.AI</p>\n' +
        '</figcaption>\n' +
        '</figure>\n' +
        '</a>\n' +
        '</div>\n' +

        '<div class="col-xl-2 col-lg-2 col-md-3 col-sm-4 col-xs-6">\n' +
        '<a href="Home/Companies#Docusign">\n' +
        '<figure class="home-figure">\n' +
        '<img src="/files/images/companies/docusign.jpg" />\n' +
        '<figcaption>\n' +
        '<p>Docusign</p>\n' +
        '</figcaption>\n' +
        '</figure>\n' +
        '</a>\n' +
        '</div>\n' +

        '<div class="col-xl-2 col-lg-2 col-md-3 col-sm-4 col-xs-6">\n' +
        '<a href="Home/Companies#IBM">\n' +
        '<figure class="home-figure">\n' +
        '<img src="/files/images/companies/ibm.jpg" />\n' +
        '<figcaption>\n' +
        '<p>IBM</p>\n' +
        '</figcaption>\n' +
        '</figure>\n' +
        '</a>\n' +
        '</div>\n' +

        '<div class="col-xl-2 col-lg-2 col-md-3 col-sm-4 col-xs-6">\n' +
        '<a href="Home/Companies#Meta-Platforms">\n' +
        '<figure class="home-figure">\n' +
        '<img src="/files/images/companies/metaplatforms.jpg" />\n' +
        '<figcaption>\n' +
        '<p>Meta Platforms</p>\n' +
        '</figcaption>\n' +
        '</figure>\n' +
        '</a>\n' +
        '</div>\n' +

        '<div class="col-xl-2 col-lg-2 col-md-3 col-sm-4 col-xs-6">\n' +
        '<a href="Home/Companies#Micron">\n' +
        '<figure class="home-figure">\n' +
        '<img src="/files/images/companies/micron.jpg" />\n' +
        '<figcaption>\n' +
        '<p>Micron Technology</p>\n' +
        '</figcaption>\n' +
        '</figure>\n' +
        '</a>\n' +
        '</div>\n' +

        '<div class="col-xl-2 col-lg-2 col-md-3 col-sm-4 col-xs-6">\n' +
        '<a href="Home/Companies#Microsoft">\n' +
        '<figure class="home-figure">\n' +
        '<img src="/files/images/companies/microsoft.jpg" />\n' +
        '<figcaption>\n' +
        '<p>Microsoft</p>\n' +
        '</figcaption>\n' +
        '</figure>\n' +
        '</a>\n' +
        '</div>\n' +

        '<div class="col-xl-2 col-lg-2 col-md-3 col-sm-4 col-xs-6">\n' +
        '<a href="Home/Companies#Nvidia">\n' +
        '<figure class="home-figure">\n' +
        '<img src="/files/images/companies/nvidia.jpg" />\n' +
        '<figcaption>\n' +
        '<p>Nvidia</p>\n' +
        '</figcaption>\n' +
        '</figure>\n' +
        '</a>\n' +
        '</div>\n' +

        '<div class="col-xl-2 col-lg-2 col-md-3 col-sm-4 col-xs-6">\n' +
        '<a href="Home/Companies#Oracle">\n' +
        '<figure class="home-figure">\n' +
        '<img src="/files/images/companies/oracle.jpg" />\n' +
        '<figcaption>\n' +
        '<p>Oracle</p>\n' +
        '</figcaption>\n' +
        '</figure>\n' +
        '</a>\n' +
        '</div>\n' +

        '<div class="col-xl-2 col-lg-2 col-md-3 col-sm-4 col-xs-6">\n' +
        '<a href="Home/Companies#Siemens">\n' +
        '<figure class="home-figure">\n' +
        '<img src="/files/images/companies/siemens.jpg" />\n' +
        '<figcaption>\n' +
        '<p>Siemens</p>\n' +
        '</figcaption>\n' +
        '</figure>\n' +
        '</a>\n' +
        '</div>'     
}


var companiespageelements = document.getElementById("companiespage12");
if (companiespageelements != null) {
    companiespageelements.innerHTML +=

        '<a id="Google">\n' +
        '<div id="Google" class="Comp-rows row g-0">\n' +
        '<div class="Comp-pics col-xl-6 col-lg-6 col-md-6 col-sm-12 col-12">\n' +
        '<img src="/files/images/companies/alphabet.jpg" />\n' +
        '</div>\n' +
        '<div class="Comp-info orange col-xl-6 col-lg-6 col-md-6 col-sm-12 col-12">\n' +                 
        '<header>Alphabet (Google)</header>\n' +
        '<p>\n' +
        "Google was reorganized as a wholly owned subsidiary of Alphabet Inc. Google is Alphabet's largest subsidiary and is a holding company for Alphabet's Internet properties and interests. Sundar Pichai was appointed CEO of Google on October 24, 2015, replacing Larry Page, who became the CEO of Alphabet. On December 3, 2019, Pichai also became the CEO of Alphabet.<br /> On August 10, 2015, Google announced plans to reorganize its various interests as a conglomerate named Alphabet Inc. Google became Alphabet's largest subsidiary and the umbrella company for Alphabet's Internet interests. Upon completion of the restructuring, Sundar Pichai became CEO of Google, replacing Larry Page, who became CEO of Alphabet. (Wikipedia)\n" +
        '</p>\n' +
        '</div>\n' +
        '</div>\n' +
        '</a>\n' +


        '<a id="Amazon">\n' +
        '<div class="Comp-rows row g-0">\n' +
        '<div class="Comp-info blue col-xl-6 col-lg-6 col-md-6 col-sm-12 col-12">\n' +              
        '<header>Amazon</header>\n' +
        '<p>\n' +
        "Amazon.com, Inc. is an American multinational technology company which focuses on e-commerce, cloud computing, digital streaming, and artificial intelligence. It has been referred to as \"one of the most influential economic and cultural forces in the world\", and is one of the world's most valuable brands. It is one of the Big Five American information technology companies, alongside Alphabet, Apple, Meta, and Microsoft. <br /> Amazon was founded by Jeff Bezos from his garage in Bellevue, Washington, on July 5, 1994. Initially an online marketplace for books, it has expanded into a multitude of product categories: a strategy that has earned it the moniker The Everything Store. It has multiple subsidiaries including Amazon Web Services(cloud computing), Zoox(autonomous vehicles), Kuiper Systems(satellite Internet), and Amazon Lab126(computer hardware R&D). (Wikipedia)\n" +
        '</p>\n' +
        '</div>\n' +
        '<div class="Comp-pics col-xl-6 col-lg-6 col-md-6 col-sm-12 col-12">\n' +             
        '<img src="/files/images/companies/amazon.jpg" />\n' +
        '</div>\n' +
        '</div>\n' +
        '</a>\n' +

    
        '<a id="Apple">\n' +
        '<div class="Comp-rows row g-0">\n' +
        '<div class="Comp-pics col-xl-6 col-lg-6 col-md-6 col-sm-12 col-12">\n' +              
        '<img src="/files/images/companies/apple.jpg" />\n' +
        '</div>\n' +
        '<div class="Comp-info orange col-xl-6 col-lg-6 col-md-6 col-sm-12 col-12">\n' +            
        '<header>Apple</header>\n' +
        '<p>\n' +
        "Apple Inc. is an American multinational technology company that specializes in consumer electronics, software and online services headquartered in Cupertino, California, United States. Apple is the largest technology company by revenue (totaling US$365.8 billion in 2021) and as of June 2022, it is the world's biggest company by market capitalization, the fourth-largest personal computer vendor by unit sales and second-largest mobile phone manufacturer. It is one of the Big Five American information technology companies, alongside Alphabet, Amazon, Meta, and Microsoft.<br />Apple was founded as Apple Computer Company on April 1, 1976, by Steve Jobs, Steve Wozniak and Ronald Wayne to develop and sell Wozniak's Apple I personal computer. It was incorporated by Jobs and Wozniak as Apple Computer, Inc. in 1977 and the company's next computer, the Apple II, became a best seller. (Wikipedia)\n" +
        '</p>\n' +
        '</div>\n' +
        '</div>\n' +
        '</a>\n' +

    
        '<a id="C3.AI">\n' +
        '<div class="Comp-rows row g-0">\n' +
        '<div class="Comp-info blue col-xl-6 col-lg-6 col-md-6 col-sm-12 col-12">\n' +           
        '<header>C3.AI</header>\n' +
        '<p>\n' +
        "C3.ai is an enterprise AI company that focuses on delivering machine learning software to industry leaders. Some of the company's customers include Shell PLC (SHEL), the U.S. Air Force and Enel SpA (ENLAY). Its software is flexible, providing financial security, product reliability and secure systems across its customer base. For example, by partnering with utility companies like Enel, Duke Energy Corp. (DUK) and the New York Power Authority, C3 assists with ensuring that grid capacity is maximized across the U.S. AI stock is down 36% this year as of July 8, but given its deep foothold across both corporate and governmental end users, it's a company to keep an eye out for. (https://money.usnews.com/investing/stock-market-news/slideshows/artificial-intelligence-stocks-the-10-best-ai-companies?slide=7)\n" +
        '</p>\n' +
        '</div>\n' +
        '<div class="Comp-pics col-xl-6 col-lg-6 col-md-6 col-sm-12 col-12">\n' +           
        '<img src="/files/images/companies/c3ai.jpg" />\n' +
        '</div>\n' +
        '</div>\n' +
        '</a>\n' +

    
        '<a id="Docusign">\n' +
        '<div class="Comp-rows row g-0">\n' +
        '<div class="Comp-pics col-xl-6 col-lg-6 col-md-6 col-sm-12 col-12">\n' +           
        '<img src="/files/images/companies/docusign.jpg" />\n' +
        '</div>\n' +
        '<div class="Comp-info orange col-xl-6 col-lg-6 col-md-6 col-sm-12 col-12">\n' +                 
        '<header>Docusign</header>\n' +
        '<p>\n' +
        "You might not consider online document signing as the next hub for AI-fueled innovation, but DOCU is making advancements. By providing companies with machine learning tools, DOCU make finding clauses in contracts and signing documents easier and faster. Contract AI can also help businesses understand the legal requirements of documents, locate potential issues that could arise from signing and then help organize contracts with a click of a button. DOCU is down about 56% this year through July 8, but analysts expect double-digit revenue growth in fiscal 2023 and fiscal 2024. (https://money.usnews.com/investing/stock-market-news/slideshows/artificial-intelligence-stocks-the-10-best-ai-companies?slide=14)\n" +
        '</p>\n' +
        '</div>\n' +
        '</div>\n' +
        '</a>\n' +

    
        '<a id="IBM">\n' +
        '<div class="Comp-rows row g-0">\n' +
        '<div class="Comp-info blue col-xl-6 col-lg-6 col-md-6 col-sm-12 col-12">\n' +                 
        '<header>IBM</header>\n' +
        '<p>\n' +
        "One of the longest-running computing companies, IBM has been at the forefront of data storage and computing technologies for decades. The company’s hallmark AI technology, Watson, aimed to revolutionize how businesses use AI as part of everyday operations. Seventy percent of global banking institutions use the software to streamline their services and provide secure financial transactions. The software can even work in tandem with Azure and AWS, meaning that businesses can use Watson without fully transitioning the framework of their operations. The company saw 8% revenue growth last quarter, with gains led by software and consulting services, which had increases of 12% and 13%, respectively. The company anticipates revenue to continue increasing at a similar pace for the rest of its fiscal year, at the high end of the mid-single digits. (https://money.usnews.com/investing/stock-market-news/slideshows/artificial-intelligence-stocks-the-10-best-ai-companies?slide=13)\n" +
        '</p>\n' +
        '</div>\n' +
        '<div class="Comp-pics col-xl-6 col-lg-6 col-md-6 col-sm-12 col-12">\n' +                 
        '<img src="/files/images/companies/ibm.jpg" />\n' +
        '</div>\n' +
        '</div>\n' +
        '</a>\n' +

    
        '<a id="Meta-Platforms">\n' +
        '<div class="Comp-rows row g-0">\n' +
        '<div class="Comp-pics col-xl-6 col-lg-6 col-md-6 col-sm-12 col-12">\n' +                 
        '<img src="/files/images/companies/metaplatforms.jpg" />\n' +
        '</div>\n' +
        '<div class="Comp-info orange col-xl-6 col-lg-6 col-md-6 col-sm-12 col-12">\n' +                 
        '<header>Meta Platforms</header>\n' +
        '<p>\n' +
        "Meta changed its image and name as part of its expansion into AI technology. Machine learning was always a keystone of its social media platform Facebook, as algorithms worked to connect individuals with content and companies that would be of interest to them. Now, Meta is letting its AI capabilities seep into different parts of its business. The prospects of this are massive, as recently was shown when AI tools at Meta enabled the translation of over 200 languages with an average increased quality of 44%, when compared to previous AI research. By broadening the range of how its programs use AI, such breakthroughs are bound to become more common. Meta stock is down almost 50% this year through July 8, placing it in possible value stock territory. Meta's current forward price-earnings ratio is 14.3. (https://money.usnews.com/investing/stock-market-news/slideshows/artificial-intelligence-stocks-the-10-best-ai-companies?slide=10)\n" +
        '</p>\n' +
        '</div>\n' +
        '</div>\n' +
        '</a>\n' +

    
        '<a id="Micron">\n' +
        '<div class="Comp-rows row g-0">\n' +
        '<div class="Comp-info blue col-xl-6 col-lg-6 col-md-6 col-sm-12 col-12">\n' +                 
        '<header>Micron</header>\n' +
        '<p>\n' +
        "Micron is a computer and storage chip manufacturer that produces memory and storage technology for a broad range of industries. The company recently began producing more chips in Japan and announced a $150 billion global expansion plan. The plan will boost investment in manufacturing, research and development by partnering with governments across the world to diversify Micron's capacity to deliver products. While the company recently warned of declining demand that will affect its products due to the rise in inflation, global demand for advanced chips is bound to increase over the long term as the range of products using those chips also increases. However, Sawhney notes that the current conditions paint a rocky picture of its short-term prospects, stating that \"although its third - quarter revenue jumped 16 % to $8.64 billion, measuring up to market estimates, MU expects its fourth - quarter revenue to plunge 13 % year over year.\" (https://money.usnews.com/investing/stock-market-news/slideshows/artificial-intelligence-stocks-the-10-best-ai-companies?slide=6)\n" +
        '</p>\n' +
        '</div>\n' +
    '<div class="Comp-pics col-xl-6 col-lg-6 col-md-6 col-sm-12 col-12">\n' +               
        '<img src="/files/images/companies/micron.jpg" />\n' +
        '</div>\n' +
        '</div>\n' +
        '</a>\n' +

   
        '<a id="Microsoft">\n' +
        '<div class="Comp-rows row g-0">\n' +
        '<div class="Comp-pics col-xl-6 col-lg-6 col-md-6 col-sm-12 col-12">\n' +                
        '<img src="/files/images/companies/microsoft.jpg" />\n' +
        '</div>\n' +
        '<div class="Comp-info orange col-xl-6 col-lg-6 col-md-6 col-sm-12 col-12">\n' +                 
        '<header>Microsoft</header>\n' +
        '<p>\n' +
        "Microsoft began as a software company but now reaches deep into the AI sphere with its cloud computing program, Azure. Offering secure storage and data capacity to corporations, Azure is a global leader in cloud computing and software development. Recently, Microsoft detailed how its facial recognition software could be used in an effort to increase ethical use of AI. Such moves will prove pivotal as legislators and consumers begin to worry about the privacy threats that AI can pose. Putting these ethical concerns first ensures that Azure is a step ahead to bypass such concerns. Azure and other cloud computing revenue grew 46% year over year last quarter. (https://money.usnews.com/investing/stock-market-news/slideshows/artificial-intelligence-stocks-the-10-best-ai-companies?slide=11)\n" +
        '</p>\n' +
        '</div>\n' +
        '</div>\n' +
        '</a>\n' +

    
        '<a id="Nvidia">\n' +
        '<div class="Comp-rows row g-0">\n' +
        '<div class="Comp-info blue col-xl-6 col-lg-6 col-md-6 col-sm-12 col-12">\n' +                 
        '<header>Nvidia</header>\n' +
        '<p>\n' +
        "Nvidia Corporation, commonly known as Nvidia, is an American multinational technology company incorporated in Delaware and based in Santa Clara, California. It is a software and fabless company which designs graphics processing units (GPUs), application programming interface (APIs) for data science and high-performance computing as well as system on a chip units (SoCs) for the mobile computing and automotive market. Nvidia is a global leader in artificial intelligence hardware and software. Its professional line of GPUs are used in workstations for applications in such fields as architecture, engineering and construction, media and entertainment, automotive, scientific research, and manufacturing design.<br />In addition to GPU manufacturing, Nvidia provides an API called CUDA that allows the creation of massively parallel programs which utilize GPUs. They are deployed in supercomputing sites around the world. More recently, it has moved into the mobile computing market, where it produces Tegra mobile processors for smartphones and tablets as well as vehicle navigation and entertainment systems. In addition to AMD, its competitors include Intel, Qualcomm and AI - accelerator companies such as Graphcore. (Wikipedia)\n" +
        '</p>\n' +
        '</div>\n' +
        '<div class="Comp-pics col-xl-6 col-lg-6 col-md-6 col-sm-12 col-12">\n' +                 
        '<img src="/files/images/companies/nvidia.jpg" />\n' +
        '</div>\n' +
        '</div>\n' +
        '</a>\n' +

    
        '<a id="Oracle">\n' +
        '<div class="Comp-rows row g-0">\n' +
        '<div class="Comp-pics col-xl-6 col-lg-6 col-md-6 col-sm-12 col-12">\n' +                 
        '<img src="/files/images/companies/oracle.jpg" />\n' +
        '</div>\n' +
        '<div class="Comp-info orange col-xl-6 col-lg-6 col-md-6 col-sm-12 col-12">\n' +                 
        '<header>Oracle</header>\n' +
        '<p>\n' +
        "Oracle Corporation is an American multinational computer technology corporation headquartered in Austin, Texas. In 2020, Oracle was the third-largest software company in the world by revenue and market capitalization.[6] The company sells database software and technology (particularly its own brands), cloud engineered systems, and enterprise software products, such as enterprise resource planning (ERP) software, human capital management (HCM) software, customer relationship management (CRM) software (also known as customer experience), enterprise performance management (EPM) software, and supply chain management (SCM) software. <br /> Larry Ellison co-founded Oracle Corporation in 1977 with Bob Miner and Ed Oates under the name Software Development Laboratories (SDL).[2] Ellison took inspiration[8] from the 1970 paper written by Edgar F. Codd on relational database management systems (RDBMS) named 'A Relational Model of Data for Large Shared Data Banks.' He heard about the IBM System R database from an article in the IBM Research Journal provided by Oates. Ellison wanted to make Oracle's product compatible with System R, but failed to do so as IBM kept the error codes for their DBMS a secret.\n" +
        '</p>\n' +
        '</div>\n' +
        '</div>\n' +
        '</a>\n' +

    
        '<a id="Siemens">\n' +
        '<div class="Comp-rows row g-0">\n' +
        '<div class="Comp-info blue col-xl-6 col-lg-6 col-md-6 col-sm-12 col-12">\n' +                 
        '<header>Siemens</header>\n' +
        '<p>\n' +
        "Siemens AG (German pronunciation: [ˈziːməns] (listen) or [-mɛns]) is a German multinational conglomerate corporation and the largest industrial manufacturing company in Europe headquartered in Munich with branch offices abroad.<br />The principal divisions of the corporation are Industry, Energy, Healthcare (Siemens Healthineers), and Infrastructure & Cities, which represent the main activities of the corporation. The corporation is a prominent maker of medical diagnostics equipment and its medical health-care division, which generates about 12 percent of the corporation's total sales, is its second-most profitable unit, after the industrial automation division. The corporation is a component of the Euro Stoxx 50 stock market index.[10] Siemens and its subsidiaries employ approximately 303,000 people worldwide and reported global revenue of around €62 billion in 2021 according to its earnings release. (Wikipedia)\n" +
        '</p>\n' +
        '</div>\n' +
        '<div class="Comp-pics col-xl-6 col-lg-6 col-md-6 col-sm-12 col-12">\n' +                 
        '<img src="/files/images/companies/siemens.jpg" />\n' +
        '</div>\n' +
        '</div>\n' +
        '</a>'
}






var bodymargin = $(".body").css('body');
    $(".body").css('margin-bottom', '5em');
    $(".body").css('overflow', 'hidden');


var footer = $(".footer").css('footer');
    $(".footer").css('bottom', '0');
    $(".footer").css('left', '0');
    $(".footer").css('width', '100%');
    $(".footer").css('white-space', 'nowrap');
    $(".footer").css('line-height', '60px');
    $(".footer").css('position', 'absolute');
    $(".footer").css('background-color', '#222222');
    $(".footer").css('font-family', 'Arial');

var list = $("li").css('list');
    $("li").css('list-style-type', 'none');

var links = $("#links").css('links');
    $("#links").css('padding', "20px 0");
    $("#links").css('line-height', '1.5em');


