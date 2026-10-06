import { useCallback, useEffect, useLayoutEffect, useRef, useState } from 'react'
import {
  AnimatePresence,
  MotionConfig,
  motion,
  useInView,
  useReducedMotion,
  useScroll,
  useTransform,
} from 'framer-motion'
import {
  ArrowDown,
  ArrowLeft,
  ArrowRight,
  ArrowUpRight,
  Instagram,
  Menu,
  X,
} from 'lucide-react'

const image = (file) => `/images/${file}`

const services = [
  {
    id: 'hair',
    number: '01',
    title: 'HAIR',
    price: 'From ₹999',
    description: 'Cut, colour and styling made to move with the way you already are.',
    image: image('hair-styling.jpg'),
    alt: 'Artist styling a guest’s glossy dark hair',
    tint: '#f2eae0',
    caption: 'THE SIGNATURE SHAPE',
  },
  {
    id: 'makeup',
    number: '02',
    title: 'MAKEUP',
    price: 'From ₹1,499',
    description: 'Skin-first artistry, from a barely-there glow to your main-character moment.',
    image: image('hero-editorial.jpg'),
    alt: 'Luminous editorial beauty portrait with soft peach makeup',
    tint: '#f5eee7',
    caption: 'SOFT FOCUS, ALWAYS',
  },
  {
    id: 'skin',
    number: '03',
    title: 'SKIN',
    price: 'From ₹1,299',
    description: 'Slow, thoughtful rituals that let your own light do the talking.',
    image: image('skin-ritual.jpg'),
    alt: 'A client enjoying a restorative facial ritual',
    tint: '#f0e9e1',
    caption: 'A LITTLE ROOM TO GLOW',
  },
  {
    id: 'nails',
    number: '04',
    title: 'NAILS',
    price: 'From ₹799',
    description: 'A considered finishing touch: immaculate shape, beautiful colour, you.',
    image: image('nail-detail.jpg'),
    alt: 'Blush manicure and gold ring resting on ivory satin',
    tint: '#f4e9e4',
    caption: 'THE LAST LITTLE DETAIL',
  },
  {
    id: 'bridal',
    number: '05',
    title: 'BRIDAL',
    price: 'From ₹4,999',
    description: 'A whole-hearted, unhurried edit for the day you want to feel most yourself.',
    image: image('bridal-edit.jpg'),
    alt: 'Modern Indian bride in soft rose makeup and ivory silk',
    tint: '#f3e9df',
    caption: 'MADE FOR YOUR MOMENT',
  },
  {
    id: 'transformations',
    number: '06',
    title: 'TRANSFORMATIONS',
    price: 'Bespoke sessions',
    description: 'An open brief, a fresh point of view, and a look that feels unmistakably yours.',
    image: image('hero-editorial.jpg'),
    alt: 'Confident beauty portrait in warm light',
    tint: '#f1e8df',
    caption: 'THE YOU, TURNED UP',
  },
]

const testimonials = [
  {
    quote: 'I walked in wanting a new look. I walked out feeling completely different.',
    name: 'PRIYA',
    detail: 'Soft-glam client · Indiranagar',
  },
  {
    quote: 'For once, the mirror looked like me — just on a really, really good day.',
    name: 'TARA',
    detail: 'Signature hair · Bengaluru',
  },
  {
    quote: 'They listened before they touched a brush. That changed everything.',
    name: 'NISHA',
    detail: 'The bridal edit · Bengaluru',
  },
  {
    quote: 'An hour in the studio, and somehow I felt like I had found my way back.',
    name: 'MEERA',
    detail: 'Skin ritual · Koramangala',
  },
]

const team = [
  {
    number: '01',
    name: 'MAYA SHARMA',
    role: 'Hair Artist',
    text: 'Cuts with movement. Colour with feeling. Always starts with a conversation.',
    image: image('hair-styling.jpg'),
    alt: 'Maya shaping a soft, sculptural hairstyle',
    position: '52% center',
  },
  {
    number: '02',
    name: 'ANANYA RAO',
    role: 'Makeup Artist',
    text: 'A skin-first hand and a very good eye for the detail you did not know you loved.',
    image: image('hero-editorial.jpg'),
    alt: 'Ananya in a warm editorial portrait',
    position: '70% center',
  },
  {
    number: '03',
    name: 'SOFIA MEHTA',
    role: 'Skin Specialist',
    text: 'Gentle rituals, considered ingredients, and space to exhale between appointments.',
    image: image('skin-ritual.jpg'),
    alt: 'Sofia demonstrating a gentle facial ritual',
    position: '55% center',
  },
  {
    number: '04',
    name: 'KIARA KAPOOR',
    role: 'Nail Artist',
    text: 'The finishing-touch person. Colour stories, clean lines and excellent playlists.',
    image: image('bridal-edit.jpg'),
    alt: 'Kiara in a softly lit beauty portrait',
    position: '38% center',
  },
]

const looks = [
  {
    eyebrow: '01 / YOUR EVERYDAY RITUAL',
    titleTop: 'THE SOFT',
    titleBottom: 'GLOW',
    list: ['Natural skin', 'Soft makeup', 'Effortless hair'],
    image: image('hero-editorial.jpg'),
    alt: 'Fresh, softly luminous makeup in warm window light',
    caption: 'A LITTLE LIGHT, A LOT OF YOU',
    side: 'left',
  },
  {
    eyebrow: '02 / TURN THE VOLUME UP',
    titleTop: 'THE',
    titleBottom: 'STATEMENT',
    list: ['Bold makeup', 'Luxury styling', 'Confident finish'],
    image: image('hair-styling.jpg'),
    alt: 'Sculpted hair styled for a confident editorial look',
    caption: 'MADE TO TAKE UP SPACE',
    side: 'right',
  },
  {
    eyebrow: '03 / A DAY THAT IS ALL YOURS',
    titleTop: 'THE BRIDAL',
    titleBottom: 'EDIT',
    list: ['Timeless makeup', 'Elegant hair', 'Complete bridal styling'],
    image: image('bridal-edit.jpg'),
    alt: 'Modern bride in understated ivory and champagne details',
    caption: 'YOUR STORY, BEAUTIFULLY TOLD',
    side: 'left',
  },
]

function Reveal({ children, className = '', delay = 0, y = 34, amount = 0.18 }) {
  const reduced = useReducedMotion()
  return (
    <motion.div
      className={className}
      initial={reduced ? false : { opacity: 0, y }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount }}
      transition={{ duration: reduced ? 0.01 : 0.9, delay: reduced ? 0 : delay, ease: [0.22, 1, 0.36, 1] }}
    >
      {children}
    </motion.div>
  )
}

function AnimatedWord({ text, delay = 0, className = '' }) {
  const reduced = useReducedMotion()
  return (
    <span className={`hero-letter-row ${className}`} aria-hidden="true">
      {Array.from(text).map((character, index) => (
        <span className="hero-letter-clip" key={`${character}-${index}`}>
          <motion.span
            className="hero-letter"
            initial={reduced ? false : { y: '115%', opacity: 0.4 }}
            animate={{ y: '0%', opacity: 1 }}
            transition={{
              duration: reduced ? 0.01 : 0.92,
              delay: reduced ? 0 : delay + index * 0.035,
              ease: [0.22, 1, 0.36, 1],
            }}
          >
            {character === ' ' ? '\u00a0' : character}
          </motion.span>
        </span>
      ))}
    </span>
  )
}

function MagneticLink({ href, children, className = '', ariaLabel, onClick }) {
  const [offset, setOffset] = useState({ x: 0, y: 0 })
  const reduced = useReducedMotion()
  const handleMove = (event) => {
    if (reduced || window.matchMedia('(pointer: coarse)').matches) return
    const rect = event.currentTarget.getBoundingClientRect()
    setOffset({
      x: (event.clientX - rect.left - rect.width / 2) * 0.12,
      y: (event.clientY - rect.top - rect.height / 2) * 0.12,
    })
  }
  const reset = () => setOffset({ x: 0, y: 0 })
  return (
    <motion.a
      href={href}
      aria-label={ariaLabel}
      onClick={onClick}
      onMouseMove={handleMove}
      onMouseLeave={reset}
      animate={offset}
      transition={{ type: 'spring', stiffness: 260, damping: 18, mass: 0.35 }}
      className={className}
    >
      {children}
    </motion.a>
  )
}

function Nav({ scrolled }) {
  const [open, setOpen] = useState(false)
  const reduced = useReducedMotion()
  const close = () => setOpen(false)
  const links = [
    ['STUDIO', '#studio'],
    ['SERVICES', '#services'],
    ['WORK', '#work'],
    ['TEAM', '#team'],
    ['BOOK', '#book'],
  ]

  useEffect(() => {
    document.body.classList.toggle('menu-open', open)
    return () => document.body.classList.remove('menu-open')
  }, [open])

  return (
    <>
      <div className={`nav-frame ${scrolled ? 'is-scrolled' : ''}`}>
        <a className="nav-brand" href="#studio" onClick={close} aria-label="Demo Aura Beauty, home">
          <span>DEMO AURA</span>
          <small>BEAUTY STUDIO</small>
        </a>
        <nav className="desktop-nav" aria-label="Main navigation">
          {links.map(([label, href]) => (
            <a href={href} key={label} onClick={close} className={label === 'BOOK' ? 'nav-book' : ''}>
              {label}
              {label === 'BOOK' && <ArrowUpRight size={12} strokeWidth={1.6} />}
            </a>
          ))}
        </nav>
        <button
          type="button"
          className="menu-toggle"
          aria-label={open ? 'Close navigation menu' : 'Open navigation menu'}
          aria-expanded={open}
          onClick={() => setOpen((value) => !value)}
        >
          <span>{open ? 'CLOSE' : 'MENU'}</span>
          <span className="menu-toggle-icon">{open ? <X size={17} /> : <Menu size={17} />}</span>
        </button>
      </div>

      <AnimatePresence>
        {open && (
          <motion.div
            className="mobile-menu"
            initial={reduced ? { opacity: 0 } : { clipPath: 'inset(0 0 100% 0)' }}
            animate={reduced ? { opacity: 1 } : { clipPath: 'inset(0 0 0% 0)' }}
            exit={reduced ? { opacity: 0 } : { clipPath: 'inset(0 0 100% 0)' }}
            transition={{ duration: reduced ? 0.01 : 0.72, ease: [0.76, 0, 0.24, 1] }}
          >
            <p className="eyebrow">A LITTLE SPACE FOR YOURSELF</p>
            <nav aria-label="Mobile navigation">
              {links.map(([label, href], index) => (
                <motion.a
                  href={href}
                  key={label}
                  onClick={close}
                  initial={reduced ? { opacity: 0 } : { opacity: 0, y: 24 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: reduced ? 0 : 0.16 + index * 0.06, duration: reduced ? 0.01 : 0.45 }}
                >
                  <span className="mobile-link-number">0{index + 1}</span>
                  {label}
                  <ArrowUpRight size={19} strokeWidth={1.4} />
                </motion.a>
              ))}
            </nav>
            <span className="mobile-menu-note">DEMO BEAUTY STUDIO / BENGALURU</span>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  )
}

function OrbitSeal() {
  return (
    <div className="orbit-seal" aria-label="Beauty, style, confidence">
      <svg viewBox="0 0 200 200" role="img" aria-hidden="true">
        <defs>
          <path id="orbit-text-path" d="M 100,100 m -76,0 a 76,76 0 1,1 152,0 a 76,76 0 1,1 -152,0" />
        </defs>
        <g className="orbit-spin">
          <text>
            <textPath href="#orbit-text-path" startOffset="0%">
              BEAUTY • STYLE • CONFIDENCE • BEAUTY • STYLE • CONFIDENCE •
            </textPath>
          </text>
        </g>
      </svg>
      <span className="orbit-center">A<span>✳</span></span>
    </div>
  )
}

function Hero() {
  const reduced = useReducedMotion()
  return (
    <section className="hero-section" id="studio" aria-labelledby="hero-heading">
      <div className="hero-meta page-gutter">
        <p className="eyebrow"><span className="tiny-spark">✳</span> DEMO BEAUTY STUDIO / 2026</p>
        <p className="eyebrow hero-meta-right">BENGALURU, INDIA <span className="meta-dot" /> OPEN DAILY 10—8</p>
      </div>

      <div className="hero-stage page-gutter">
        <motion.div
          className="hero-title-stack"
          initial={reduced ? false : { opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: reduced ? 0.01 : 0.75, delay: reduced ? 0 : 0.12 }}
        >
          <p className="hero-pretitle eyebrow">A STUDIO FOR YOURSELF</p>
          <h1 id="hero-heading" aria-label="Your aura matters.">
            <span className="hero-title-line title-your"><AnimatedWord text="YOUR" delay={0.24} /></span>
            <span className="hero-title-line title-aura"><AnimatedWord text="AURA" delay={0.42} /></span>
            <span className="hero-title-line title-matters"><AnimatedWord text="MATTERS." delay={0.61} /></span>
          </h1>
          <p className="hero-tagline">YOUR BEAUTY. <em>YOUR AURA.</em></p>
        </motion.div>

        <motion.figure
          className="hero-portrait"
          initial={reduced ? false : { clipPath: 'inset(0 0 100% 0)', scale: 1.05 }}
          animate={{ clipPath: 'inset(0 0 0% 0)', scale: 1 }}
          transition={{ duration: reduced ? 0.01 : 1.35, delay: reduced ? 0 : 0.32, ease: [0.76, 0, 0.24, 1] }}
        >
          <img
            src={image('hero-editorial.jpg')}
            alt="Luminous beauty portrait in warm peach light"
            fetchPriority="high"
            decoding="async"
          />
          <figcaption className="portrait-index"><span>01</span> / AURA STUDY</figcaption>
        </motion.figure>

        <motion.figure
          className="hero-float-image"
          initial={reduced ? false : { opacity: 0, y: 34, rotate: 5 }}
          animate={{ opacity: 1, y: 0, rotate: 2 }}
          transition={{ duration: reduced ? 0.01 : 0.9, delay: reduced ? 0 : 1.05, ease: [0.22, 1, 0.36, 1] }}
        >
          <img src={image('nail-detail.jpg')} alt="A soft blush manicure, the smallest finishing touch" loading="eager" />
          <figcaption>THE FINISHING TOUCH</figcaption>
        </motion.figure>

        <div className="hero-orbit-wrap"><OrbitSeal /></div>
        <span className="hero-scribble" aria-hidden="true">a little more you</span>
        <div className="hero-side-index" aria-hidden="true"><span>01—06</span><span>THE AURA EDIT</span></div>
      </div>

      <div className="hero-bottom page-gutter">
        <p className="hero-intro-copy">A beauty studio for the version<br />of you that already feels like you.</p>
        <MagneticLink href="#manifesto" className="discover-link">
          <span className="discover-disc"><ArrowDown size={18} strokeWidth={1.3} /></span>
          <span>DISCOVER THE STUDIO</span>
        </MagneticLink>
        <p className="hero-scroll-note">SCROLL TO FIND YOUR AURA <span>↘</span></p>
      </div>
    </section>
  )
}

function Manifesto() {
  const reduced = useReducedMotion()
  return (
    <section className="manifesto-section" id="manifesto" aria-labelledby="manifesto-heading">
      <div className="manifesto-top page-gutter">
        <p className="eyebrow"><span className="tiny-spark">✳</span> THE AURA EXPERIENCE</p>
        <p className="manifesto-side-note">A BEAUTY RITUAL, REIMAGINED<br />FOR THE WAY YOU WANT TO FEEL.</p>
      </div>
      <div className="manifesto-copy page-gutter">
        <h2 id="manifesto-heading">
          <Reveal className="manifesto-line"><span>BEAUTY ISN'T ABOUT</span></Reveal>
          <Reveal className="manifesto-line" delay={0.08}><span>CHANGING WHO YOU ARE.</span></Reveal>
          <Reveal className="manifesto-line manifesto-indent" delay={0.16}><span>IT'S ABOUT REVEALING</span></Reveal>
          <Reveal className="manifesto-line manifesto-last" delay={0.24}><span><em>MORE</em> OF YOU.</span></Reveal>
        </h2>
      </div>
      <div className="manifesto-bottom page-gutter">
        <div className="drawn-rule" aria-hidden="true">
          <motion.svg viewBox="0 0 1200 20" preserveAspectRatio="none">
            <motion.path
              d="M0 10 C220 10 190 4 370 10 S650 17 780 10 S1010 3 1200 10"
              initial={reduced ? { pathLength: 1 } : { pathLength: 0 }}
              whileInView={{ pathLength: 1 }}
              viewport={{ once: true, amount: 0.5 }}
              transition={{ duration: reduced ? 0.01 : 1.6, ease: 'easeInOut' }}
            />
          </motion.svg>
        </div>
        <p className="manifesto-footnote">NOT A NEW YOU.<br /><em>THE YOU, IN FULL COLOUR.</em></p>
        <a className="text-link" href="#services">MEET YOUR RITUAL <ArrowUpRight size={15} strokeWidth={1.4} /></a>
      </div>
    </section>
  )
}

function Services() {
  const [active, setActive] = useState(0)
  const [drift, setDrift] = useState({ x: 0, y: 0 })
  const selected = services[active]
  const reduced = useReducedMotion()

  const moveImage = (event) => {
    if (window.matchMedia('(pointer: coarse)').matches) return
    const rect = event.currentTarget.getBoundingClientRect()
    setDrift({
      x: (event.clientX - rect.left - rect.width / 2) * 0.025,
      y: (event.clientY - rect.top - rect.height / 2) * 0.025,
    })
  }

  return (
    <section
      className="services-section section-gutter"
      id="services"
      aria-labelledby="services-heading"
      style={{ '--service-tint': selected.tint }}
    >
      <div className="section-topline">
        <p className="eyebrow"><span className="tiny-spark">✳</span> THE SERVICE EDIT</p>
        <p className="section-ordinal">GOOD HAIR. GOOD SKIN. GOOD ENERGY. <span>02 / 06</span></p>
      </div>

      <div className="services-header">
        <Reveal>
          <h2 id="services-heading">A RITUAL<br /><em>FOR EVERY</em> YOU.</h2>
        </Reveal>
        <Reveal delay={0.1} className="services-header-note">
          <p>Nothing off the shelf. Every detail starts with you, your mood, and what you want the mirror to say back.</p>
          <span className="handwritten-note">come as you are <span>↙</span></span>
        </Reveal>
      </div>

      <div className="services-body">
        <div className="service-list" role="list" aria-label="Beauty services">
          {services.map((service, index) => (
            <div className={`service-row ${active === index ? 'is-active' : ''}`} key={service.id} role="listitem">
              <button
                type="button"
                className="service-button"
                onMouseEnter={() => setActive(index)}
                onFocus={() => setActive(index)}
                onClick={() => setActive(index)}
                aria-expanded={active === index}
                aria-controls={`service-detail-${service.id}`}
              >
                <span className="service-number">{service.number}</span>
                <span className="service-name">{service.title}</span>
                <span className="service-price">{service.price}</span>
                <span className="service-arrow"><ArrowUpRight size={22} strokeWidth={1.25} /></span>
              </button>
              <AnimatePresence initial={false}>
                {active === index && (
                  <motion.div
                    className="service-mobile-detail"
                    id={`service-detail-${service.id}`}
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: 'auto', opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: reduced ? 0.01 : 0.45, ease: [0.22, 1, 0.36, 1] }}
                  >
                    <img src={service.image} alt={service.alt} loading="lazy" />
                    <p>{service.description}</p>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          ))}
        </div>

        <div className="service-visual-column">
          <div className="service-visual-sticky">
            <div className="service-image-frame" onMouseMove={moveImage} onMouseLeave={() => setDrift({ x: 0, y: 0 })}>
              <AnimatePresence mode="wait">
                <motion.img
                  key={selected.id}
                  src={selected.image}
                  alt={selected.alt}
                  loading="lazy"
                  initial={reduced ? false : { opacity: 0, scale: 1.06 }}
                  animate={{ opacity: 1, scale: 1, x: drift.x, y: drift.y }}
                  exit={{ opacity: 0, scale: 0.98 }}
                  transition={{ duration: reduced ? 0.01 : 0.72, ease: [0.22, 1, 0.36, 1] }}
                />
              </AnimatePresence>
              <div className="service-image-number">{selected.number} <span>/ 06</span></div>
              <div className="service-image-stamp">AURA<br /><em>CARE</em></div>
              <div className="service-image-caption">
                <span>{selected.caption}</span>
                <span>{selected.price}</span>
              </div>
            </div>
            <div className="service-visual-description">
              <p>{selected.description}</p>
              <span>01—06 / CHOOSE YOUR FEELING</span>
            </div>
          </div>
        </div>
      </div>
      <div className="services-afterline"><span>SMALL RITUALS. BIG FEELING.</span><span>EST. FOR YOUR AURA <span>✳</span></span></div>
    </section>
  )
}

function Transformation() {
  const [position, setPosition] = useState(52)
  const reduced = useReducedMotion()
  const photo = image('hero-editorial.jpg')
  return (
    <section className="transform-section section-gutter" aria-labelledby="transform-heading">
      <div className="transform-intro">
        <div>
          <p className="eyebrow"><span className="tiny-spark">✳</span> A LITTLE SHIFT, A LOT OF YOU</p>
          <h2 id="transform-heading"><span>ONE LOOK.</span><br /><em>A COMPLETELY</em><br />NEW FEELING.</h2>
        </div>
        <p className="transform-aside">Not a before and after.<br />A <em>you, and a little more you.</em></p>
      </div>

      <Reveal className="transform-visual-wrap" y={54} amount={0.1}>
        <div className="transform-visual" style={{ '--split': `${position}%` }}>
          <img className="transform-after" src={photo} alt="After: softly glowing editorial beauty look" loading="lazy" />
          <div className="transform-before" style={{ clipPath: `inset(0 ${100 - position}% 0 0)` }}>
            <img src={photo} alt="Before: the same portrait with a softer, desaturated finish" loading="lazy" />
          </div>
          <div className="transform-before-label">BEFORE <span>YOUR NATURAL LIGHT</span></div>
          <div className="transform-after-label">AFTER <span>THE AURA EDIT</span></div>
          <div className="transform-divider" style={{ left: `${position}%` }} aria-hidden="true">
            <span className="transform-handle"><ArrowLeft size={13} /><ArrowRight size={13} /></span>
            <span className="transform-drag-label">DRAG TO TRANSFORM</span>
          </div>
          <input
            className="transform-range"
            type="range"
            min="5"
            max="95"
            value={position}
            onChange={(event) => setPosition(Number(event.target.value))}
            aria-label="Drag to compare the transformation"
          />
          {!reduced && <span className="transform-spark" aria-hidden="true">✳</span>}
        </div>
      </Reveal>
      <div className="transform-foot page-gutter">
        <span>01 / 01</span>
        <p>THE DIFFERENCE ISN'T WHO YOU ARE.<br /><em>IT'S HOW YOU FEEL WHEN YOU SEE IT.</em></p>
        <span>DRAG THE LINE <span>↔</span></span>
      </div>
    </section>
  )
}

function Gallery() {
  const sectionRef = useRef(null)
  const trackRef = useRef(null)
  const [travel, setTravel] = useState(0)
  const [isMobile, setIsMobile] = useState(false)
  const reduced = useReducedMotion()
  const { scrollYProgress } = useScroll({ target: sectionRef, offset: ['start start', 'end end'] })
  const x = useTransform(scrollYProgress, [0, 1], [0, -travel])
  const items = [
    { image: 'hair-styling.jpg', alt: 'Signature hair, softly sculpted by hand', label: 'LOOK 01 / SIGNATURE HAIR', size: 'gallery-tall' },
    { image: 'hero-editorial.jpg', alt: 'Soft glam editorial makeup', label: 'LOOK 02 / SOFT GLAM', size: 'gallery-short' },
    { image: 'nail-detail.jpg', alt: 'Minimal blush nail look with a gold accent', label: 'LOOK 03 / THE NAIL EDIT', size: 'gallery-detail' },
    { image: 'bridal-edit.jpg', alt: 'An understated bridal beauty look', label: 'LOOK 04 / BRIDAL EDIT', size: 'gallery-tall' },
    { image: 'skin-ritual.jpg', alt: 'A quiet glow-skin ritual', label: 'LOOK 05 / GLOW SKIN', size: 'gallery-short' },
    { image: 'studio-interior.jpg', alt: 'Sunlit interior of the Demo Aura beauty studio', label: 'LOOK 06 / INSIDE THE STUDIO', size: 'gallery-wide' },
  ]

  useLayoutEffect(() => {
    const measure = () => {
      const mobile = window.matchMedia('(max-width: 760px)').matches
      setIsMobile(mobile)
      if (trackRef.current) setTravel(Math.max(0, trackRef.current.scrollWidth - window.innerWidth))
    }
    measure()
    window.addEventListener('resize', measure)
    const timer = window.setTimeout(measure, 300)
    return () => {
      window.removeEventListener('resize', measure)
      window.clearTimeout(timer)
    }
  }, [])

  return (
    <section
      ref={sectionRef}
      id="work"
      className={`gallery-section ${isMobile ? 'gallery-mobile' : ''} ${reduced ? 'gallery-reduced' : ''}`}
      aria-labelledby="gallery-heading"
    >
      <div className="gallery-sticky">
        <div className="gallery-top page-gutter">
          <div>
            <p className="eyebrow"><span className="tiny-spark">✳</span> THE AURA LOOKBOOK</p>
            <h2 id="gallery-heading">A FEW WAYS<br /><em>TO FEEL LIKE YOU.</em></h2>
          </div>
          <div className="gallery-side-note">
            <span>01 — 06</span>
            <p>SCROLL TO MOVE<br />THE FRAME <span>→</span></p>
          </div>
        </div>
        <motion.div className="gallery-track" ref={trackRef} style={isMobile || reduced ? {} : { x }}>
          {items.map((item, index) => (
            <figure className={`gallery-item ${item.size}`} key={item.label}>
              <div className="gallery-image-mask">
                <img src={image(item.image)} alt={item.alt} loading="lazy" decoding="async" />
                <span className="gallery-image-index">0{index + 1}</span>
              </div>
              <figcaption><span>{item.label}</span><ArrowUpRight size={14} strokeWidth={1.3} /></figcaption>
            </figure>
          ))}
          <div className="gallery-end-note"><span>AND THAT'S<br /><em>JUST THE START.</em></span><span>✳</span></div>
        </motion.div>
        <div className="gallery-progress page-gutter"><span>SWIPE / SCROLL</span><div><span /></div><span>06 — 06</span></div>
      </div>
    </section>
  )
}

function CountUp({ value, suffix = '', pad = false, label, sublabel }) {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, amount: 0.65 })
  const reduced = useReducedMotion()
  const [count, setCount] = useState(0)
  useEffect(() => {
    if (!inView) return undefined
    if (reduced) {
      setCount(value)
      return undefined
    }
    const start = performance.now()
    const duration = 1350
    let frame
    const tick = (now) => {
      const progress = Math.min(1, (now - start) / duration)
      const eased = 1 - Math.pow(1 - progress, 4)
      setCount(Math.floor(eased * value))
      if (progress < 1) frame = requestAnimationFrame(tick)
      else setCount(value)
    }
    frame = requestAnimationFrame(tick)
    return () => cancelAnimationFrame(frame)
  }, [inView, reduced, value])

  const display = pad ? String(count).padStart(2, '0') : count
  return (
    <div className="stat-item" ref={ref}>
      <span className="stat-number">{display}<i>{suffix}</i></span>
      <span className="stat-rule" />
      <span className="stat-label">{label}</span>
      <span className="stat-sublabel">{sublabel}</span>
    </div>
  )
}

function Stats() {
  return (
    <section className="stats-section section-gutter" aria-label="Demo Aura in numbers">
      <div className="stats-heading">
        <p className="eyebrow"><span className="tiny-spark">✳</span> A LITTLE CONTEXT</p>
        <p className="stats-aside">A STUDIO BUILT AROUND<br /><em>THE WAY YOU FEEL.</em></p>
      </div>
      <div className="stats-grid">
        <CountUp value={8} suffix="+" pad label="YEARS" sublabel="of beauty artistry" />
        <CountUp value={5} suffix="K+" label="CLIENTS" sublabel="beautiful transformations" />
        <CountUp value={20} suffix="+" label="SERVICES" sublabel="crafted for you" />
        <CountUp value={15} suffix="+" label="ARTISTS" sublabel="creative professionals" />
      </div>
      <div className="stats-bottom"><span>ROOTED IN BENGALURU</span><span>✳</span><span>MADE FOR YOUR AURA</span></div>
    </section>
  )
}

function TeamPortrait({ person }) {
  const [expanded, setExpanded] = useState(false)
  const reduced = useReducedMotion()
  const onMove = (event) => {
    if (window.matchMedia('(pointer: coarse)').matches) return
    const rect = event.currentTarget.getBoundingClientRect()
    const x = ((event.clientX - rect.left) / rect.width - 0.5) * 13
    const y = ((event.clientY - rect.top) / rect.height - 0.5) * 13
    event.currentTarget.style.setProperty('--drift-x', `${x}px`)
    event.currentTarget.style.setProperty('--drift-y', `${y}px`)
  }
  return (
    <motion.figure
      className={`team-portrait ${expanded ? 'is-expanded' : ''}`}
      initial={reduced ? false : { opacity: 0, y: 28 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.15 }}
      transition={{ duration: reduced ? 0.01 : 0.8, ease: [0.22, 1, 0.36, 1] }}
      onPointerMove={onMove}
      onPointerLeave={(event) => {
        event.currentTarget.style.setProperty('--drift-x', '0px')
        event.currentTarget.style.setProperty('--drift-y', '0px')
      }}
    >
      <button
        className="team-image-button"
        type="button"
        aria-expanded={expanded}
        aria-label={`${expanded ? 'Hide' : 'Meet'} ${person.name}, ${person.role}`}
        onClick={() => setExpanded((value) => !value)}
      >
        <img src={person.image} alt={person.alt} loading="lazy" style={{ objectPosition: person.position }} />
        <span className="team-index">{person.number} <i>—</i> AURA ARTIST</span>
        <span className="team-hover-icon"><ArrowUpRight size={19} strokeWidth={1.2} /></span>
      </button>
      <figcaption className="team-caption">
        <div className="team-caption-main">
          <h3>{person.name}</h3>
          <span>{person.role}</span>
        </div>
        <p className="team-bio">{person.text}</p>
      </figcaption>
    </motion.figure>
  )
}

function Team() {
  return (
    <section className="team-section section-gutter" id="team" aria-labelledby="team-heading">
      <div className="team-heading">
        <div>
          <p className="eyebrow"><span className="tiny-spark">✳</span> YOUR PEOPLE, YOUR PLACE</p>
          <h2 id="team-heading">MEET THE<br /><em>HANDS BEHIND IT.</em></h2>
        </div>
        <p className="team-heading-note">Good work begins with good listening.<br /><em>Start with a hello.</em></p>
      </div>
      <div className="team-grid">
        {team.map((person) => <TeamPortrait key={person.number} person={person} />)}
      </div>
      <div className="team-note"><span>SMALL TEAM. BIG FEELING.</span><span>MORE THAN A GOOD HAIR DAY <span>↗</span></span></div>
    </section>
  )
}

function AuraQuiz({ onBookLook }) {
  const reduced = useReducedMotion()
  const [mood, setMood] = useState('')
  const [occasion, setOccasion] = useState('')
  const resultTitle = mood && occasion
    ? (mood === 'BOLD' ? 'BOLD BLOOM' : mood === 'GLOW' ? 'GOLDEN HOUR' : mood === 'CLASSIC' ? 'TIMELESS YOU' : 'SOFT GLOW')
    : ''
  const recommendation = mood === 'BOLD'
    ? ['Statement Makeup', 'Luxury Hair Styling', 'A Little Nail Art']
    : mood === 'GLOW'
      ? ['Luxury Facial', 'Dewy Skin Makeup', 'Signature Hair Styling']
      : mood === 'CLASSIC'
        ? ['Timeless Skin Ritual', 'Classic Makeup', 'Polished Hair']
        : ['Luxury Facial', 'Soft Glam Makeup', 'Signature Hair Styling']

  const moods = ['SOFT', 'BOLD', 'GLOW', 'CLASSIC']
  const occasions = ['EVERYDAY', 'DATE NIGHT', 'EVENT', 'BRIDAL']
  const resultId = `${mood}-${occasion}`

  return (
    <section className="quiz-section section-gutter" aria-labelledby="quiz-heading">
      <div className="quiz-intro">
        <p className="eyebrow"><span className="tiny-spark">✳</span> THE AURA FINDER / 02 STEPS</p>
        <h2 id="quiz-heading">WHAT'S<br /><em>YOUR AURA?</em></h2>
        <p className="quiz-intro-copy">A little moodboard for your next mirror moment. No wrong answers — only more you.</p>
        <span className="quiz-doodle" aria-hidden="true">✳</span>
      </div>
      <div className="quiz-experience">
        <div className="quiz-step">
          <div className="quiz-step-heading"><span>01</span><h3>Choose your mood:</h3></div>
          <div className="quiz-options" role="group" aria-label="Choose your mood">
            {moods.map((item) => (
              <button key={item} type="button" onClick={() => setMood(item)} className={mood === item ? 'selected' : ''} aria-pressed={mood === item}>
                <span>{item}</span><span className="quiz-option-mark">✳</span>
              </button>
            ))}
          </div>
        </div>
        <div className="quiz-step">
          <div className="quiz-step-heading"><span>02</span><h3>Choose your occasion:</h3></div>
          <div className="quiz-options occasion-options" role="group" aria-label="Choose your occasion">
            {occasions.map((item) => (
              <button key={item} type="button" onClick={() => setOccasion(item)} className={occasion === item ? 'selected' : ''} aria-pressed={occasion === item}>
                <span>{item}</span><span className="quiz-option-mark">✳</span>
              </button>
            ))}
          </div>
        </div>

        <AnimatePresence mode="wait">
          {resultTitle && (
            <motion.div
              className="quiz-result"
              key={resultId}
              initial={reduced ? { opacity: 0 } : { opacity: 0, y: 24, clipPath: 'inset(0 0 20% 0)' }}
              animate={reduced ? { opacity: 1 } : { opacity: 1, y: 0, clipPath: 'inset(0 0 0% 0)' }}
              exit={{ opacity: 0, y: reduced ? 0 : -12 }}
              transition={{ duration: reduced ? 0.01 : 0.62, ease: [0.22, 1, 0.36, 1] }}
              aria-live="polite"
            >
              <div className="quiz-result-heading"><span>YOUR AURA</span><span>✳ {occasion}</span></div>
              <h3>{resultTitle}</h3>
              <p className="quiz-recommended-label">RECOMMENDED FOR YOU</p>
              <ul>{recommendation.map((item) => <li key={item}>{item}<span>↗</span></li>)}</ul>
              <button type="button" className="quiz-book-link" onClick={() => onBookLook(resultTitle)}>
                BOOK THIS LOOK <ArrowUpRight size={16} strokeWidth={1.4} />
              </button>
            </motion.div>
          )}
        </AnimatePresence>
        {!resultTitle && <p className="quiz-hint">PICK A MOOD + AN OCCASION TO MEET YOUR MATCH <span>↗</span></p>}
      </div>
    </section>
  )
}

function LookFeature({ look, index }) {
  const ref = useRef(null)
  const { scrollYProgress } = useScroll({ target: ref, offset: ['start end', 'end start'] })
  const y = useTransform(scrollYProgress, [0, 1], [24, -24])
  const reduced = useReducedMotion()
  return (
    <article className={`look-feature look-${look.side}`} ref={ref}>
      <motion.figure className="look-photo" initial={reduced ? false : { clipPath: 'inset(12% 0 12% 0)' }} whileInView={{ clipPath: 'inset(0% 0 0% 0)' }} viewport={{ once: true, amount: 0.18 }} transition={{ duration: reduced ? 0.01 : 1.15, ease: [0.76, 0, 0.24, 1] }}>
        <motion.img src={look.image} alt={look.alt} style={{ y: reduced ? 0 : y, scale: reduced ? 1 : 1.06 }} loading="lazy" />
        <figcaption><span>{look.caption}</span><span>0{index + 1}</span></figcaption>
        <span className="look-photo-seal">DA<br /><i>✳</i></span>
      </motion.figure>
      <motion.div
        className="look-copy"
        initial={reduced ? false : { opacity: 0, x: look.side === 'left' ? 36 : -36 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true, amount: 0.25 }}
        transition={{ duration: reduced ? 0.01 : 0.92, ease: [0.22, 1, 0.36, 1] }}
      >
        <p className="eyebrow">{look.eyebrow}</p>
        <h3>{look.titleTop}<br /><em>{look.titleBottom}</em></h3>
        <ul>{look.list.map((item) => <li key={item}><span>✳</span>{item}</li>)}</ul>
        <a href="#book" className="look-cta">MAKE IT YOURS <ArrowUpRight size={15} strokeWidth={1.4} /></a>
      </motion.div>
    </article>
  )
}

function SignatureLooks() {
  const reduced = useReducedMotion()
  return (
    <section className="looks-section" id="looks" aria-labelledby="looks-heading">
      <div className="looks-intro section-gutter">
        <p className="eyebrow"><span className="tiny-spark">✳</span> YOUR NEXT CHAPTER</p>
        <h2 id="looks-heading">THREE MOODS.<br /><em>ALL YOU.</em></h2>
        <p>Find a feeling. We’ll make it yours.</p>
      </div>
      <div className="looks-list">
        {looks.map((look, index) => <LookFeature key={look.eyebrow} look={look} index={index} />)}
      </div>
      <motion.div className="looks-marquee" aria-hidden="true" initial={reduced ? false : { opacity: 0.35 }} whileInView={{ opacity: 1 }} viewport={{ once: true }} transition={{ duration: 1 }}>
        <div>MAKE ROOM FOR YOURSELF <span>✳</span> MAKE ROOM FOR YOURSELF <span>✳</span></div>
      </motion.div>
    </section>
  )
}

function Testimonials() {
  const [active, setActive] = useState(0)
  const reduced = useReducedMotion()
  const next = useCallback(() => setActive((index) => (index + 1) % testimonials.length), [])
  const previous = useCallback(() => setActive((index) => (index - 1 + testimonials.length) % testimonials.length), [])
  const testimonial = testimonials[active]

  useEffect(() => {
    if (reduced) return undefined
    const timer = window.setInterval(next, 9000)
    return () => window.clearInterval(timer)
  }, [next, reduced])

  return (
    <section className="testimonial-section section-gutter" aria-labelledby="testimonials-heading">
      <div className="testimonial-top">
        <p className="eyebrow"><span className="tiny-spark">✳</span> WORDS WE KEEP</p>
        <p className="testimonial-counter"><span>{String(active + 1).padStart(2, '0')}</span> / 04</p>
      </div>
      <div className="testimonial-layout">
        <div className="testimonial-mark" aria-hidden="true">“</div>
        <div className="testimonial-main">
          <h2 className="sr-only" id="testimonials-heading">Client stories</h2>
          <AnimatePresence mode="wait">
            <motion.blockquote
              key={active}
              initial={{ opacity: 0, y: 22 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -14 }}
              transition={{ duration: reduced ? 0.01 : 0.62, ease: [0.22, 1, 0.36, 1] }}
              aria-live="polite"
            >
              “{testimonial.quote}”
            </motion.blockquote>
          </AnimatePresence>
          <div className="testimonial-attribution"><span>— {testimonial.name}</span><span>{testimonial.detail}</span></div>
        </div>
        <div className="testimonial-controls">
          <button type="button" onClick={previous} aria-label="Previous testimonial"><ArrowLeft size={17} strokeWidth={1.3} /></button>
          <button type="button" onClick={next} aria-label="Next testimonial"><ArrowRight size={17} strokeWidth={1.3} /></button>
        </div>
      </div>
      <div className="testimonial-bottom"><span>REAL PEOPLE. REAL AURA.</span><div className="testimonial-progress"><span style={{ width: `${((active + 1) / testimonials.length) * 100}%` }} /></div><span>THE AURA JOURNAL</span></div>
    </section>
  )
}

function Booking({ prefillService }) {
  const [form, setForm] = useState({ name: '', phone: '', service: '', date: '', time: '' })
  const [submitted, setSubmitted] = useState(false)
  const reduced = useReducedMotion()

  useEffect(() => {
    if (prefillService) {
      setForm((current) => ({ ...current, service: 'Curated look' }))
    }
  }, [prefillService])

  const update = (event) => setForm((current) => ({ ...current, [event.target.name]: event.target.value }))
  const submit = (event) => {
    event.preventDefault()
    setSubmitted(true)
  }
  const reset = () => {
    setSubmitted(false)
    setForm({ name: '', phone: '', service: '', date: '', time: '' })
  }

  return (
    <section className="booking-section section-gutter" id="book" aria-labelledby="booking-heading">
      <div className="booking-heading">
        <div>
          <p className="eyebrow"><span className="tiny-spark">✳</span> YOUR NEXT GOOD DAY</p>
          <h2 id="booking-heading">LET'S CREATE<br /><em>YOUR LOOK.</em></h2>
        </div>
        <p className="booking-intro-copy">Tell us what you have in mind.<br />We’ll take it from there, together.</p>
      </div>

      <div className="booking-content">
        <div className="booking-note">
          <span className="booking-note-mark">DA<em>✳</em></span>
          <p>Come with a plan<br />or no plan at all.<br /><em>Both look good on you.</em></p>
          <span className="booking-note-index">APPOINTMENTS / 2026</span>
        </div>
        <div className="booking-form-wrap">
          <AnimatePresence mode="wait">
            {submitted ? (
              <motion.div
                className="booking-success"
                key="success"
                initial={{ opacity: 0, y: 28, clipPath: 'inset(0 0 20% 0)' }}
                animate={{ opacity: 1, y: 0, clipPath: 'inset(0 0 0% 0)' }}
                exit={{ opacity: 0, y: -12 }}
                transition={{ duration: reduced ? 0.01 : 0.76, ease: [0.22, 1, 0.36, 1] }}
                role="status"
              >
                <span className="success-spark">✳</span>
                <p className="eyebrow">REQUEST RECEIVED / {form.service || 'YOUR LOOK'}</p>
                <h3>YOU'RE ON<br /><em>THE LIST.</em></h3>
                <p>Your appointment request has been received.<br />Our team will be in touch shortly to make it yours.</p>
                <button type="button" onClick={reset} className="text-link">SEND ANOTHER REQUEST <ArrowUpRight size={14} /></button>
              </motion.div>
            ) : (
              <motion.form
                key="form"
                className="booking-form"
                onSubmit={submit}
                initial={{ opacity: 0, y: 12 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -10 }}
                transition={{ duration: reduced ? 0.01 : 0.5 }}
              >
                <div className="booking-fields">
                  <label className="field-line">
                    <span>NAME</span>
                    <input name="name" type="text" placeholder="Your name" value={form.name} onChange={update} autoComplete="name" required />
                  </label>
                  <label className="field-line">
                    <span>PHONE</span>
                    <input name="phone" type="tel" placeholder="+91 00000 00000" value={form.phone} onChange={update} autoComplete="tel" pattern="[0-9+() .-]{8,18}" required />
                  </label>
                  <label className="field-line select-line">
                    <span>SERVICE</span>
                    <select name="service" value={form.service} onChange={update} required>
                      <option value="" disabled>Choose a service</option>
                      <option>Curated look</option>
                      <option>Hair</option>
                      <option>Makeup</option>
                      <option>Skin</option>
                      <option>Nails</option>
                      <option>Bridal</option>
                      <option>Transformation</option>
                    </select>
                    <span className="select-arrow">⌄</span>
                  </label>
                  <label className="field-line date-line">
                    <span>DATE</span>
                    <input name="date" type="date" value={form.date} onChange={update} required />
                  </label>
                  <label className="field-line time-line">
                    <span>TIME</span>
                    <input name="time" type="time" value={form.time} onChange={update} required />
                  </label>
                </div>
                <div className="booking-submit-row">
                  <p>WE’LL CONFIRM YOUR APPOINTMENT<br />WITHIN ONE WORKING DAY.</p>
                  <button type="submit" className="book-circle" aria-label="Submit appointment request">
                    <span>BOOK</span><span>NOW <ArrowUpRight size={18} strokeWidth={1.4} /></span>
                    <svg viewBox="0 0 160 160" aria-hidden="true"><circle cx="80" cy="80" r="76" /></svg>
                  </button>
                </div>
              </motion.form>
            )}
          </AnimatePresence>
          <div className="booking-alternate">
            <span>WOULD RATHER TALK IT THROUGH?</span>
            <a href="https://wa.me/919999999999?text=Hello%20Demo%20Aura%20Beauty%2C%20I%27d%20love%20to%20book%20a%20look." target="_blank" rel="noreferrer">BOOK VIA WHATSAPP <ArrowUpRight size={14} strokeWidth={1.4} /></a>
          </div>
        </div>
      </div>
    </section>
  )
}

function Social() {
  const tiles = [
    { image: 'hero-editorial.jpg', alt: 'Luminous peach-toned beauty portrait', className: 'social-tile-one', label: 'THE AURA FACE' },
    { image: 'nail-detail.jpg', alt: 'Blush manicure against ivory satin', className: 'social-tile-two', label: 'A SMALL DETAIL' },
    { image: 'studio-interior.jpg', alt: 'Sunlit beauty studio interior', className: 'social-tile-three', label: 'INSIDE THE STUDIO' },
    { image: 'bridal-edit.jpg', alt: 'Modern bridal beauty in soft champagne tones', className: 'social-tile-four', label: 'THE BRIDAL EDIT' },
  ]
  return (
    <section className="social-section section-gutter" aria-labelledby="social-heading">
      <div className="social-copy">
        <p className="eyebrow"><span className="tiny-spark">✳</span> FROM OUR SIDE OF THE MIRROR</p>
        <h2 id="social-heading">SEE WHAT'S<br /><em>HAPPENING</em><br />AT DEMO AURA</h2>
        <a className="social-handle" href="https://instagram.com/demoaurabeauty" target="_blank" rel="noreferrer"><Instagram size={18} strokeWidth={1.3} /> @DEMOAURABEAUTY <ArrowUpRight size={14} /></a>
        <p className="social-small-copy">A little colour. A little care.<br />A lot of you, in good light.</p>
      </div>
      <div className="social-collage">
        {tiles.map((tile, index) => (
          <a href="https://instagram.com/demoaurabeauty" target="_blank" rel="noreferrer" className={`social-tile ${tile.className}`} key={tile.className} aria-label={`${tile.label} on Instagram`}>
            <img src={image(tile.image)} alt={tile.alt} loading="lazy" />
            <span className="social-tile-index">0{index + 1} / AURA LOG</span>
          </a>
        ))}
        <span className="social-scribble">right here,<br />in your own light ↗</span>
      </div>
    </section>
  )
}

function FinalCTA() {
  const reduced = useReducedMotion()
  return (
    <section className="final-cta" aria-labelledby="final-heading">
      <motion.div
        className="final-image"
        initial={reduced ? false : { clipPath: 'inset(25% 22% 25% 22%)', scale: 1.05 }}
        whileInView={{ clipPath: 'inset(0% 0% 0% 0%)', scale: 1 }}
        viewport={{ once: true, amount: 0.2 }}
        transition={{ duration: reduced ? 0.01 : 1.4, ease: [0.76, 0, 0.24, 1] }}
      >
        <img src={image('hero-editorial.jpg')} alt="A luminous beauty portrait in warm editorial light" loading="lazy" />
      </motion.div>
      <div className="final-overlay" />
      <div className="final-cta-content page-gutter">
        <p className="eyebrow"><span className="tiny-spark">✳</span> YOUR CHAIR IS WAITING</p>
        <h2 id="final-heading">READY TO<br /><em>FIND YOUR</em><br />AURA?</h2>
        <a href="#book" className="final-book-link">BOOK YOUR EXPERIENCE <ArrowUpRight size={19} strokeWidth={1.4} /></a>
        <motion.svg className="final-arrow" viewBox="0 0 250 250" initial={reduced ? false : { rotate: -36, opacity: 0 }} whileInView={{ rotate: 0, opacity: 1 }} viewport={{ once: true }} transition={{ duration: reduced ? 0.01 : 1.1, delay: 0.16, ease: [0.22, 1, 0.36, 1] }} aria-hidden="true">
          <path d="M32 218 202 48M89 48h113v113" fill="none" stroke="currentColor" strokeWidth="1.5" />
        </motion.svg>
        <span className="final-location">DEMO AURA BEAUTY<br />BENGALURU / INDIA</span>
      </div>
    </section>
  )
}

function Footer() {
  const links = [
    ['Studio', '#studio'],
    ['Services', '#services'],
    ['Work', '#work'],
    ['Team', '#team'],
    ['Book', '#book'],
  ]
  return (
    <footer className="site-footer section-gutter">
      <div className="footer-top">
        <a href="#studio" className="footer-logo"><span>DEMO AURA</span><small>BEAUTY STUDIO</small></a>
        <p>Beauty studio / Bengaluru<br /><em>Your beauty. Your aura.</em></p>
        <div className="footer-socials">
          <a href="https://instagram.com/demoaurabeauty" target="_blank" rel="noreferrer">Instagram <ArrowUpRight size={13} /></a>
          <a href="https://wa.me/919999999999" target="_blank" rel="noreferrer">WhatsApp <ArrowUpRight size={13} /></a>
        </div>
      </div>
      <div className="footer-bottom">
        <span>© 2026 DEMO AURA BEAUTY</span>
        <nav aria-label="Footer navigation">{links.map(([label, href]) => <a href={href} key={label}>{label}</a>)}</nav>
        <a href="#studio" className="back-top">BACK TO TOP <ArrowUpRight size={14} /></a>
      </div>
    </footer>
  )
}

function BackToTop({ visible }) {
  return (
    <AnimatePresence>
      {visible && (
        <motion.a
          className="back-to-top"
          href="#studio"
          aria-label="Back to top"
          initial={{ opacity: 0, scale: 0.65, y: 15 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.65, y: 15 }}
          transition={{ duration: 0.28 }}
        >
          <ArrowUpRight size={18} strokeWidth={1.4} />
        </motion.a>
      )}
    </AnimatePresence>
  )
}

export default function App() {
  const [scrolled, setScrolled] = useState(false)
  const [prefill, setPrefill] = useState('')
  const { scrollY, scrollYProgress: pageProgress } = useScroll()
  const backTopVisible = useTransform(scrollY, [0, 500], [0, 1])
  const [showBackTop, setShowBackTop] = useState(false)

  useEffect(() => {
    const update = () => setScrolled(window.scrollY > 30)
    update()
    window.addEventListener('scroll', update, { passive: true })
    return () => window.removeEventListener('scroll', update)
  }, [])

  useEffect(() => {
    const unsubscribe = backTopVisible.on('change', (value) => setShowBackTop(value > 0.9))
    return unsubscribe
  }, [backTopVisible])

  const bookLook = (look) => {
    setPrefill(look)
    window.setTimeout(() => document.getElementById('book')?.scrollIntoView({ behavior: 'smooth' }), 90)
  }

  return (
    <MotionConfig reducedMotion="user">
      <div className="site-shell">
        <motion.div className="page-progress" style={{ scaleX: pageProgress }} aria-hidden="true" />
        <Nav scrolled={scrolled} />
        <main className="relative z-0">
          <Hero />
          <Manifesto />
          <Services />
          <Transformation />
          <Gallery />
          <Stats />
          <Team />
          <AuraQuiz onBookLook={bookLook} />
          <SignatureLooks />
          <Testimonials />
          <Booking prefillService={prefill} />
          <Social />
          <FinalCTA />
        </main>
        <Footer />
        <BackToTop visible={showBackTop} />
      </div>
    </MotionConfig>
  )
}
