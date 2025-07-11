import React from 'react';
import '../styles/Blog.css';
import { Link, useParams } from 'react-router-dom';
import { FaFacebookF, FaGoogle, FaInstagram } from 'react-icons/fa';

const Blog = () => {
  const { slug } = useParams();
  const articles = [
    {
      slug: 'top-cities',
      title: 'Top Cities for Students in Japan',
      excerpt: 'Discover the best cities to study in Japan, from Tokyo to Osaka. Visit us for more insights!',
      content: (
        <>
          <h2>Top Cities for Students in Japan</h2>
          <p>
            Japan offers a variety of vibrant cities perfect for international students. Here are the top picks:
          </p>
          <ul>
            <li><strong>Tokyo</strong>: The bustling capital with world-class universities like the University of Tokyo.</li>
            <li><strong>Osaka</strong>: Known for its friendly culture and affordable living, home to Osaka University.</li>
            <li><strong>Kyoto</strong>: Rich in history and tradition, ideal for cultural studies at Kyoto University.</li>
          </ul>
          <p>
            Each city provides unique opportunities. Visit our Chabahil office for personalized advice on choosing the right one!
          </p>
        </>
      ),
    },
    {
      slug: 'jlpt-n5',
      title: 'What is JLPT N5? Your First Step to Japan',
      excerpt: 'Learn why JLPT N5 is essential and how we can help you prepare. Stop by our Chabahil office!',
      content: (
        <>
          <h2>What is JLPT N5? Your First Step to Japan</h2>
          <p>
            The Japanese Language Proficiency Test (JLPT) N5 is the entry-level exam for non-native speakers. It assesses basic reading and listening skills.
          </p>
          <p>
            Key points about JLPT N5:
            - Covers approximately 100 kanji and 800 vocabulary words.
            - Required for beginner students planning to study or work in Japan.
            - Our Chabahil classes offer tailored preparation to help you pass!
          </p>
          <p>
            Ready to start? Contact us or visit our office for a free assessment.
          </p>
        </>
      ),
    },
  ];

  const article = articles.find(a => a.slug === slug);
  const isArticleView = !!slug;

  return (
    <div className="blog-page">
      {/* Blog Header */}
      <section className="blog-hero">
        <div className="blog-container blog-hero-content">
          <div className="blog-hero-badge">
            <span>📝 {isArticleView ? article.title : 'Blog'}</span>
          </div>
          <h1 className="blog-hero-title">
            {isArticleView ? article.title : 'Blog'}
          </h1>
          <p className="blog-hero-description">
            {isArticleView
              ? 'Dive into this article for valuable insights on your journey to Japan.'
              : 'Explore helpful articles to guide your journey to Japan. Visit our Chabahil office for expert advice!'}
          </p>
        </div>
      </section>

      {/* Blog Content */}
      <section className="blog-content">
        <div className="blog-container">
          <div className="blog-content-sections">
            {!isArticleView ? (
              <>
                <div className="blog-section">
                  <h2>Latest Articles</h2>
                  <p>
                    Stay informed with our latest tips and insights on studying and working in Japan.
                  </p>
                </div>
                <div className="blog-articles-grid">
                  {articles.map((article, index) => (
                    <div key={index} className="blog-article-card">
                      <h3 className="blog-article-title">{article.title}</h3>
                      <p className="blog-article-excerpt">{article.excerpt}</p>
                      <Link to={`/blog/${article.slug}`} className="blog-article-link">
                        Read More <span className="blog-arrow">→</span>
                      </Link>
                    </div>
                  ))}
                </div>
              </>
            ) : (
              <div className="blog-section">
                {article.content}
                <Link to="/blog" className="blog-btn blog-btn-secondary">
                  Back to All Articles
                </Link>
              </div>
            )}
            <div className="blog-section">
              <h2>Get Personalized Guidance</h2>
              <p>Have questions? Contact us or visit our Chabahil office for tailored support.</p>
              <Link to="/contact" className="blog-btn blog-btn-primary">
                Contact Us
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="blog-footer">
        <div className="blog-container">
          <div className="blog-footer-content">
            <div className="blog-footer-section">
              <h3>Kyushu Edu Consultancy</h3>
              <p>Empowering your journey to Japan with expert solutions. Visit us in Chabahil!</p>
              <div className="blog-social-links">
                <a href="https://www.facebook.com/kyushuedu/" target="_blank" rel="noopener noreferrer" className="blog-social-link">
                  <FaFacebookF />
                </a>
                <a href="mailto:kyushuedu@gmail.com" target="_blank" rel="noopener noreferrer" className="blog-social-link">
                  <FaGoogle />
                </a>
                <a href="https://www.instagram.com/kyushuedu/?hl=en" target="_blank" rel="noopener noreferrer" className="blog-social-link">
                  <FaInstagram />
                </a>
              </div>
            </div>
            <div className="blog-footer-section">
              <h3>Contact Us</h3>
              <div className="blog-contact-info">
                <p>📧 kyushuedu@gmail.com</p>
                <p>📞 +014581248</p>
                <p>📍 Chabahil, Kathmandu, Nepal</p>
              </div>
            </div>
            <div className="blog-footer-section">
              <h3>Quick Links</h3>
              <div className="blog-footer-links">
                <Link to="/privacy">Privacy Policy</Link>
                <Link to="/terms">Terms of Service</Link>
                <Link to="/contact">Contact Us</Link>
              </div>
            </div>
          </div>
          <div className="blog-footer-bottom">
            <p>© 2025 Kyushu Edu Consultancy. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Blog;