
var pkg = require('./package.json')

module.exports = {
  title: 'Reading List',
  description: pkg.description,
  href: '/reading-list',
  posts: {
    ux: [
      {
        href: 'http://www.gv.com/lib/design-staff-guide-to-research',
        title: 'Google Ventures Guide to Research',
        description: 'A collection of articles about research'
      },
      {
        href: 'http://www.amazon.com/Information-Architecture-World-Wide-Web-ebook/dp/B0043D2E68',
        title: 'Information Architecture',
        description: 'Essential reading for any user experience professional'
      },
      {
        href: 'http://abbytheia.com/makesense/',
        title: 'How to Make Sense of Any Mess',
        description: 'A practical guide on applying information architecture to practically anything'
      },
      {
        href: 'https://rosenfeldmedia.com/books/mental-models/',
        title: 'Mental Models',
        description: 'Methodological approach to understanding users’ mental models'
      },
      {
        href: 'http://www.amazon.com/Lean-UX-Applying-Principles-Experience/dp/1449311652',
        title: 'Lean UX',
        description: 'Applying Lean and Agile development processes to user experience'
      },
      {
        href: 'http://alistapart.com/article/interviewing-humans',
        title: 'Interviewing Humans',
        description: 'Excerpt from Erika Hall’s book <a href="http://www.abookapart.com/products/just-enough-research">Just Enough Research</a>'
      }
    ],
    frontEnd: [
      {
        href: 'http://alistapart.com/article/improving-ux-through-front-end-performance',
        title: 'Improving UX Through Front-End Performance',
        description: 'An overview of why performance matters by Lara Swanson, author of <a href="http://shop.oreilly.com/product/0636920033578.do">Designing for Performance</a>.'
      },
      {
        href: 'http://www.stubbornella.org/content/2010/06/25/the-media-object-saves-hundreds-of-lines-of-code/',
        title: 'The Media Object Saves Hundreds of Lines of Code',
        description: 'Nicole Sullivan’s simple and beautiful demonstration of OOCSS principles'
      },
      {
        href: 'http://nicolasgallagher.com/about-html-semantics-front-end-architecture/',
        title: 'About HTML Semantics and Front-End Architecture',
        description: 'Nicholas Gallagher’s clear and concise explanation of HTML semantics'
      },
      {
        href: 'http://smacss.com/book',
        title: 'SMACSS',
        description: 'Jonathan Snook’s exceptional book on CSS architecture'
      },
      {
        href: 'http://cssguidelin.es',
        title: 'Harry Robert’s CSS Guidelines',
        description: 'Rock-solid advice for writing and maintaining CSS'
      },
    ],
    design: [
      {
        href: 'http://read.shapeofdesignbook.com/',
        title: 'The Shape of Design',
        description: 'Frank Chimero’s delightful take on design'
      },
      {
        href: 'http://ia.net/blog/learning-to-see/',
        title: 'Learning to See',
        description: 'Thoughtful insight from Oliver Reichenstein'
      },
      {
        href: 'http://www.uie.com/articles/five_design_decision_styles/',
        title: '5 Design Decision Styles. What’s Yours?',
        description: 'A great observation from Jared Spool on approaches to design'
      }
    ],
    content: [
      {
        href: 'http://alistapart.com/article/your-content-now-mobile',
        title: 'Your Content, Now Mobile',
        description: 'An excerpt from Karen McGrane’s book <a href="http://www.abookapart.com/products/content-strategy-for-mobile">Content Strategy for Mobile</a>'
      },
      {
        href: 'http://alistapart.com/article/a-checklist-for-content-work',
        title: 'A Checklist for Content Work',
        description: 'An excerpt from Erin Kissane’s book <a href="http://www.abookapart.com/products/the-elements-of-content-strategy">The Elements of Content Strategy</a>'
      },
      {
        href: 'http://gettingreal.37signals.com/ch09_Copywriting_is_Interface_Design.php',
        title: 'Copywriting is Interface Design',
      }
    ],
    related: [
      {
        href: '//jxnblk.com/writing',
        title: 'jxnblk.com/writing'
      },
      {
        href: 'https://medium.com/@jxnblk/has-recommended',
        title: 'Medium.com Recommendations'
      },
      {
        href: '//jxnblk.tumblr.com',
        title: 'Jxnblk Tumblr'
      }
    ]
  }
}

