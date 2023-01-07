import React from 'react';
import Card from './Card/Card';
import styles from './Test.module.scss';

const TestComponents = () => {
  return (
    <section className={styles.mainPageTest}>
      <article className={styles.testPageArtButton}>
        <button className={styles.testPageArtButtonLeft}>
          Start A Contest
        </button>
        <button className={styles.testPageArtButtonRight}>How It Works</button>
      </article>
      <section className={styles.testPageCardMain}>
        <div className={styles.testPageCardHeader}>
          <h1>All Branding Agency Services</h1>
          <p>
            Let our Squad of 250k experts from around the world help you launch
            your brand
          </p>
        </div>
        <article className={styles.articlePageCard}>
          <Card img={<i class="fa-solid fa-star"></i>} header="Premium Domains" text="Curated brandable domains available for immediate purchase" />
          <Card img={<i class="fa-solid fa-users"></i>} header="Naming Contests" text="Crowdsourced Name Ideas from our creative community" />
          <Card img={<i class="fa-solid fa-user-tie"></i>} header="Managed Contests" text="Full Agency-level Experience, led by Branding Consultant" />
          <Card img={<i class="fa-solid fa-note-sticky"></i>} header="Logo Contests" text="Professional logo design contests" />
          <Card img={<i class="fa-sharp fa-solid fa-comments"></i>} header="Tagline Contests" text="Taglines, slogan, and strapline ideas from our creative community" />
          <Card img={<i class="fa-solid fa-video"></i>} header="Video Creation" text="Get perfectly branded videos optimized for results" />
          <Card img={<i class="fa-solid fa-chart-line"></i>} header="Audience Testing" text="Fast, effective naming and branding research with consumer test panels" />
          <Card img={<i class="fa-sharp fa-solid fa-bag-shopping"></i>} header="Trademark Research" text="Comprehensive Trademark Research across 100+ countries" />
          <Card img={<i class="fa-sharp fa-solid fa-copyright"></i>} header="Trademark Filing" text="Trademark filing service by Licensed Trademark attorneys" />
        </article>
      </section>
    </section>
  );
};

export default TestComponents;
