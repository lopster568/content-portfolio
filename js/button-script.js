const content = {
    "blog writing": "I love writing blogs that people enjoy reading. I have been doing it for a while now, and I have gotten pretty good at it. I know how to research interesting topics and turn them into fun and easy-to-read blogs. Whether it is about sharing tips, telling stories or just giving helpful advice, I make sure every blog post I write is interesting and useful. So, if you need someone to make your blog awesome, I am your person!",
    "article writing": "I can effortlessly create informative articles on various topics. I have written many articles for online directories during past internships and have mastered the art of engaging readers while sharing valuable information. From lifestyle to travel, health to digital marketing, I cover a wide range of subjects with in-depth research and clear writing. Let me bring your ideas to life and make your content shine!",
    "seo writing": "I am your go-to person for SEO writing, as I know how to create content that ranks high on search engines. I keep myself informed on the latest SEO trends and techniques to ensure your content is relevant and gets noticed. From adding internal and external links to using facts and statistics, I use all the tricks to help your content shine online and attract more visitors to your site. Let us work together to climb the search engine rankings!",
    "copywriting": "When it comes to copywriting, I excel at crafting persuasive and compelling content that drives action. Whether you need captivating product descriptions, attention-grabbing headlines or enticing sales copy, I have the skills to make your message stand out. With a keen understanding of consumer psychology and market trends, I tailor my writing to resonate with your target audience and achieve your business goals. Let me help you speak directly to your audience and get them excited about what you have to offer!",
    "website content": "I have penned content for numerous websites, covering all sorts of businesses and services. No matter what your business does, I can write content for your website that is interesting and tells people what they need to know. From homepages to about pages, services to testimonials, I ensure the website content I write is engaging and easy to understand. Let me help you create a website that really showcases what you are all about!",
    "press releases": "I have written many press releases for clients across diverse industries, tailoring each one to meet their specific needs and preferences. With several of my press releases securing publication in Hindustan Times, I bring a wealth of experience to the table. No matter your business niche, I can craft a professional press release that effectively communicates your message. Just share your requirements with me, and I will ensure your story receives the attention it deserves in the media spotlight.",
    "social media content": "Even though I have not worked in social media professionally, I am pretty good at writing catchy captions and using the right hashtags, especially on Instagram. My own Instagram page, where I share travel and lifestyle videos, has over 4 million views. I love getting creative with my posts to keep people engaged. Let me bring that creativity to your social media and help your posts reach more people. Let's team up and see the difference it can make!",
    "editing and proofreading": "I meticulously review written content to eliminate errors, ensure smooth flow and verify the relevance of information. Whether it is a blog post, article or website copy, I refine it to perfection so that your message shines through clearly and effectively. Let me take the hassle out of polishing your content so you can confidently present your best work to your audience.",
}

const button = document.querySelectorAll('.tab');
const contentTitle = document.querySelector('.content-title');
const contentDescription = document.querySelector('.content-description');

button.forEach((btn) => {
    btn.addEventListener('click', () => {
        button.forEach((btn) => {
            btn.classList.remove('btn--primary');
        });
        btn.classList.add('btn--primary');

        const title = btn.innerText.toLowerCase();
        if (title === 'seo writing') {
            contentTitle.innerText = "SEO Writing";
        } else {
            contentTitle.innerText = title;
        }
        contentDescription.innerText = content[title];
    });
}
);